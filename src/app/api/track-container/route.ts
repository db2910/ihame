import { NextRequest, NextResponse } from 'next/server';

const SHIPSGO_API_KEY = process.env.SHIPSGO_API_KEY;
// Correct endpoint for GETting voyage data
const SHIPSGO_GET_INFO_URL = 'https://shipsgo.com/api/v1.2/ContainerService/GetContainerInfo/';

// Mock container tracking data for demonstration, aligned with ShipsGo API structure
const MOCK_CONTAINER_DATA = {
    Message: 'Success',
    Status: 'In Transit',
    StatusId: 30,
    ShippingLine: 'MAERSK LINE',
    ContainerNumber: 'MSCU1234567',
    ContainerTEU: '40',
    ContainerType: 'HC',
    FromCountry: 'CHINA',
    Pol: 'SHANGHAI',
    LoadingDate: { Date: '2024-01-12', IsActual: true },
    DepartureDate: { Date: '2024-01-12', IsActual: true },
    TSPorts: [
      { Pod: 'LOS ANGELES', ArrivalDate: { Date: '2024-01-15' }, DepartureDate: { Date: '2024-01-16' }, Status: 'Completed' }
    ],
    ToCountry: 'UNITED STATES',
    Pod: 'MIAMI',
    ArrivalDate: { Date: '2024-01-20', IsActual: false },
    DischargeDate: { Date: null, IsActual: false },
    Vessel: 'MSC OSCAR',
    VesselIMO: '9703310',
    VesselLatitude: '25.7617',
    VesselLongitude: '-80.1918',
    VesselVoyage: '401W',
    FormatedTransitTime: '8 days',
    ETA: '2024-01-20',
    FirstETA: '2024-01-20',
    LiveMapUrl: '#',
    Co2Emission: '1.25',
    EmptyToShipperDate: '2024-01-10',
    GateInDate: '2024-01-11',
    GateOutDate: null,
    EmptyReturnDate: null,
};

export async function POST(request: NextRequest) {
  try {
    const { containerNumber } = await request.json();

    if (!containerNumber) {
      return NextResponse.json(
        { error: 'Container number is required' },
        { status: 400 }
      );
    }

    const containerRegex = /^[A-Z]{4}[0-9]{7}$/;
    if (!containerRegex.test(containerNumber.toUpperCase())) {
      return NextResponse.json(
        { error: 'Invalid container number format. Please enter a valid 11-character container number (e.g., MSCU1234567)' },
        { status: 400 }
      );
    }

    if (containerNumber.toUpperCase() === "MSCU1234567") {
      // Return mock data inside an array to match the live API response structure
      return NextResponse.json([MOCK_CONTAINER_DATA]);
    }

    if (!SHIPSGO_API_KEY) {
      return NextResponse.json(
        { error: 'ShipsGo API key not configured. Please check your .env.local file.' },
        { status: 500 }
      );
    }

    // Directly fetch voyage data using a GET request
    const params = new URLSearchParams({
      authCode: SHIPSGO_API_KEY,
      requestId: containerNumber.toUpperCase(),
      mapPoint: 'true',
    });

    const url = `${SHIPSGO_GET_INFO_URL}?${params.toString()}`;
    console.log(`Calling ShipsGo API to get voyage data: ${url}`);

    const response = await fetch(url, { method: 'GET' });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('ShipsGo API Error:', errorData);
      return NextResponse.json(
        { 
          error: errorData.message || `Container not found or API error.`,
          details: errorData,
          suggestion: 'Please verify the container number or try the demo: MSCU1234567'
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('ShipsGo API Response Data:', data);

    // The data is a direct array. We'll pass it through directly.
    // The frontend is already set up to handle this structure.
    return NextResponse.json(data);

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: `Failed to track container: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 