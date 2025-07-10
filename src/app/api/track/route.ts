import { NextRequest, NextResponse } from 'next/server';

const AFTERSHIP_API_KEY = process.env.AFTERSHIP_API_KEY;
const AFTERSHIP_BASE_URL = 'https://api.aftership.com/v4';

// Mock tracking data for demonstration
const MOCK_TRACKING_DATA = {
  tracking_number: "DEMO123456789",
  courier: "FedEx®",
  status: "In Transit",
  estimated_delivery: "2024-01-15",
  origin: "New York, USA",
  destination: "Los Angeles, USA",
  checkpoints: [
    {
      location: "Los Angeles, CA",
      timestamp: "2024-01-14T10:30:00Z",
      status: "Out for Delivery",
      message: "Package is out for delivery with local courier"
    },
    {
      location: "Memphis, TN",
      timestamp: "2024-01-13T15:45:00Z",
      status: "In Transit",
      message: "Package departed from FedEx hub"
    },
    {
      location: "Memphis, TN",
      timestamp: "2024-01-13T08:20:00Z",
      status: "In Transit",
      message: "Package arrived at FedEx hub"
    },
    {
      location: "New York, NY",
      timestamp: "2024-01-12T16:30:00Z",
      status: "Shipped",
      message: "Package picked up by FedEx"
    },
    {
      location: "New York, NY",
      timestamp: "2024-01-12T14:15:00Z",
      status: "Pending",
      message: "Shipping label created"
    }
  ]
};

export async function POST(request: NextRequest) {
  try {
    const { trackingNumber } = await request.json();

    if (!trackingNumber) {
      return NextResponse.json(
        { error: 'Tracking number is required' },
        { status: 400 }
      );
    }

    // Return mock data for demo tracking number
    if (trackingNumber === "DEMO123456789") {
      return NextResponse.json(MOCK_TRACKING_DATA);
    }

    if (!AFTERSHIP_API_KEY) {
      return NextResponse.json(
        { error: 'AfterShip API key not configured. Please check your .env.local file.' },
        { status: 500 }
      );
    }

    console.log('API Key configured:', !!AFTERSHIP_API_KEY);
    console.log('Tracking number:', trackingNumber);

    // Step 1: Detect carrier
    const detectResponse = await fetch(`${AFTERSHIP_BASE_URL}/couriers/detect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'aftership-api-key': AFTERSHIP_API_KEY,
      },
      body: JSON.stringify({
        tracking: {
          tracking_number: trackingNumber,
        },
      }),
    });

    console.log('Detect response status:', detectResponse.status);

    if (!detectResponse.ok) {
      const errorText = await detectResponse.text();
      console.error('AfterShip API error:', errorText);
      
      if (detectResponse.status === 401) {
        return NextResponse.json(
          { error: 'Invalid AfterShip API key. Please check your API key.' },
          { status: 401 }
        );
      }
      
      if (detectResponse.status === 429) {
        return NextResponse.json(
          { error: 'API rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      return NextResponse.json(
        { error: `AfterShip API error: ${detectResponse.status} - ${errorText}` },
        { status: detectResponse.status }
      );
    }

    const detectData = await detectResponse.json();
    console.log('Detect data:', JSON.stringify(detectData, null, 2));
    
    if (!detectData.data || !detectData.data.couriers || !Array.isArray(detectData.data.couriers) || detectData.data.couriers.length === 0) {
      return NextResponse.json(
        { error: 'Unable to detect carrier for this tracking number. Please check the tracking number format.' },
        { status: 404 }
      );
    }

    // Use the most likely carrier (first in the array)
    const courier = detectData.data.couriers[0];
    console.log('Detected courier:', JSON.stringify(courier, null, 2));
    
    if (!courier || !courier.slug) {
      console.error('Invalid courier data:', courier);
      return NextResponse.json(
        { error: 'Invalid carrier data received from AfterShip API.' },
        { status: 500 }
      );
    }

    // Step 2: Get tracking information
    const trackingResponse = await fetch(
      `${AFTERSHIP_BASE_URL}/trackings/${courier.slug}/${trackingNumber}`,
      {
        headers: {
          'aftership-api-key': AFTERSHIP_API_KEY,
        },
      }
    );

    console.log('Tracking response status:', trackingResponse.status);

    if (!trackingResponse.ok) {
      const errorText = await trackingResponse.text();
      console.error('Tracking API error:', errorText);
      
      if (trackingResponse.status === 404) {
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.meta && errorData.meta.code === 4004) {
            return NextResponse.json(
              { 
                error: `No tracking information found for this number with ${courier.name}. The package may not be in the system yet or the tracking number may be incorrect.`,
                detectedCarrier: courier.name,
                trackingNumber: trackingNumber
              },
              { status: 404 }
            );
          }
        } catch {
          // If we can't parse the error, use a generic message
        }
      }
      
      return NextResponse.json(
        { error: `Failed to fetch tracking information from ${courier.name}: ${trackingResponse.status} - ${errorText}` },
        { status: trackingResponse.status }
      );
    }

    const trackingData = await trackingResponse.json();
    console.log('Tracking data received');
    
    if (!trackingData.data || !trackingData.data.tracking) {
      return NextResponse.json(
        { error: 'No tracking information found for this tracking number.' },
        { status: 404 }
      );
    }

    const tracking = trackingData.data.tracking;

    // Format the response
    const formattedData = {
      tracking_number: tracking.tracking_number,
      courier: courier.name || courier.slug,
      status: tracking.tag || 'Unknown',
      estimated_delivery: tracking.expected_delivery ? 
        new Date(tracking.expected_delivery).toLocaleDateString() : undefined,
      origin: tracking.origin_country ? 
        `${tracking.origin_city || ''} ${tracking.origin_country}`.trim() : undefined,
      destination: tracking.destination_country ? 
        `${tracking.destination_city || ''} ${tracking.destination_country}`.trim() : undefined,
      checkpoints: tracking.checkpoints ? 
        tracking.checkpoints.map((checkpoint: {
          location?: string;
          checkpoint_time: string;
          tag?: string;
          message?: string;
        }) => ({
          location: checkpoint.location || 'Unknown',
          timestamp: checkpoint.checkpoint_time,
          status: checkpoint.tag || 'Unknown',
          message: checkpoint.message || 'No details available',
        })).reverse() : [], // Reverse to show latest first
    };

    return NextResponse.json(formattedData);

  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json(
      { error: `Failed to track shipment: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 