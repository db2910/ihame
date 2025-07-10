export interface TrackingData {
  tracking_number: string;
  courier: string;
  status: string;
  estimated_delivery?: string;
  origin?: string;
  destination?: string;
  checkpoints?: Array<{
    location: string;
    timestamp: string;
    status: string;
    message: string;
  }>;
  [key: string]: unknown;
} 