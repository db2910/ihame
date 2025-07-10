# Shipment Tracking Feature

This tracking page allows users to track their shipments using only a tracking number. The system automatically detects the carrier using AfterShip's API and displays real-time tracking information.

## Features

- ✅ Clean, responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Automatic carrier detection
- ✅ Real-time tracking updates
- ✅ Error handling and loading states
- ✅ SEO optimized

## Setup

1. **Get AfterShip API Key**
   - Sign up at [AfterShip](https://www.aftership.com/)
   - Go to your dashboard and get your API key
   - The API key is required for carrier detection and tracking data

2. **Configure Environment Variables**
   ```bash
   # Copy the example file
   cp env.example .env.local
   
   # Edit .env.local and add your API key
   AFTERSHIP_API_KEY=your_actual_api_key_here
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

## How It Works

1. **User Input**: User enters tracking number in the form
2. **Carrier Detection**: System calls AfterShip's `/couriers/detect` endpoint
3. **Tracking Data**: Uses detected carrier to fetch tracking information
4. **Display Results**: Shows formatted tracking data with status updates

## API Endpoints

- `POST /api/track` - Main tracking endpoint
  - Body: `{ "trackingNumber": "string" }`
  - Returns: Formatted tracking data or error

## Components

- `TrackShipment.tsx` - Main tracking page component
- `TrackingForm.tsx` - Input form with validation
- `TrackingResults.tsx` - Results display with timeline
- `LoadingSpinner.tsx` - Loading animation
- `route.ts` - API route handler

## Styling

The tracking page uses IHAME's brand colors:
- Primary Blue: `#2875B4`
- Secondary Green: `#7AB648`
- Dark Text: `#1A1A1A`

## Testing

You can test with sample tracking numbers from major carriers:
- UPS: `1Z999AA1234567890`
- FedEx: `123456789012`
- DHL: `1234567890`

## Error Handling

The system handles various error scenarios:
- Invalid tracking numbers
- Carrier detection failures
- API rate limits
- Network errors

## Security

- API key is stored in environment variables
- No sensitive data is exposed to the client
- Input validation on both client and server 