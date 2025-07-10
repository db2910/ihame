'use client';

import { motion } from 'framer-motion';

interface TrackingData {
  tracking_number: string;
  courier: string;
  status: string;
  estimated_delivery?: string;
  checkpoints?: Array<{
    location: string;
    timestamp: string;
    status: string;
    message: string;
  }>;
  origin?: string;
  destination?: string;
}

interface TrackingResultsProps {
  data: TrackingData;
}

export default function TrackingResults({ data }: TrackingResultsProps) {
  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('delivered')) return 'text-green-600 bg-green-100';
    if (statusLower.includes('in transit') || statusLower.includes('shipped')) return 'text-blue-600 bg-blue-100';
    if (statusLower.includes('pending') || statusLower.includes('processing')) return 'text-yellow-600 bg-yellow-100';
    if (statusLower.includes('exception') || statusLower.includes('failed')) return 'text-red-600 bg-red-100';
    return 'text-gray-600 bg-gray-100';
  };

  const getStatusIcon = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('delivered')) return '✅';
    if (statusLower.includes('in transit') || statusLower.includes('shipped')) return '🚚';
    if (statusLower.includes('pending') || statusLower.includes('processing')) return '⏳';
    if (statusLower.includes('exception') || statusLower.includes('failed')) return '⚠️';
    return '📦';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-[#1A1A1A] mb-4"
        >
          Tracking Results
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600"
        >
          Tracking Number: <span className="font-mono font-semibold">{data.tracking_number}</span>
        </motion.div>
      </div>

      {/* Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              Current Status
            </h3>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{getStatusIcon(data.status)}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(data.status)}`}>
                {data.status}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Carrier</div>
            <div className="font-semibold text-[#2875B4]">{data.courier}</div>
          </div>
        </div>

        {/* Estimated Delivery */}
        {data.estimated_delivery && (
          <div className="bg-gradient-to-r from-[#2875B4]/10 to-[#7AB648]/10 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📅</span>
              <div>
                <div className="font-semibold text-[#1A1A1A]">Estimated Delivery</div>
                <div className="text-gray-600">{data.estimated_delivery}</div>
              </div>
            </div>
          </div>
        )}

        {/* Route Info */}
        {(data.origin || data.destination) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {data.origin && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Origin</div>
                <div className="font-semibold text-[#1A1A1A]">{data.origin}</div>
              </div>
            )}
            {data.destination && (
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Destination</div>
                <div className="font-semibold text-[#1A1A1A]">{data.destination}</div>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Checkpoints */}
      {data.checkpoints && data.checkpoints.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6">Tracking History</h3>
          
          <div className="space-y-6">
            {data.checkpoints.map((checkpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full ${
                    index === 0 ? 'bg-[#7AB648]' : 'bg-gray-300'
                  }`}></div>
                  {index < data.checkpoints!.length - 1 && (
                    <div className="w-0.5 h-12 bg-gray-200 mx-auto mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-[#1A1A1A]">
                      {checkpoint.location}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(checkpoint.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-gray-600 mb-1">{checkpoint.message}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(checkpoint.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center space-y-4"
      >
        <button
          onClick={() => window.location.reload()}
          className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
        >
          Track Another Package
        </button>
        <div className="text-sm text-gray-500">
          Need help? Contact our support team
        </div>
      </motion.div>
    </motion.div>
  );
} 