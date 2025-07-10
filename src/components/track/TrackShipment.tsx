'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TrackingForm from './TrackingForm';
import TrackingResults from './TrackingResults';
import LoadingSpinner from './LoadingSpinner';
import { TrackingData } from '../../types/TrackingData';

interface ErrorDetails {
  detectedCarrier?: string;
  trackingNumber?: string;
  [key: string]: string | undefined;
}

const loadingMessages = [
  "Connecting to logistics networks...",
  "Scanning for your shipment details...",
  "Contacting the designated carrier...",
  "Compiling tracking information...",
  "Finalizing results..."
];

export default function TrackShipment() {
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [errorDetails, setErrorDetails] = useState<ErrorDetails | null>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleTrackingSubmit = async (trackingNumber: string) => {
    setIsLoading(true);
    setError('');
    setErrorDetails(null);
    setTrackingData(null);

    try {
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trackingNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to track shipment');
        setErrorDetails(data);
        return;
      }

      setTrackingData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2875B4]/10 to-[#7AB648]/10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
            >
              Track Your{' '}
              <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">
                Shipment
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Get real-time updates by entering your tracking number below.
            </motion.p>
          </motion.div>

          {!isLoading && !trackingData && !error && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <TrackingForm onSubmit={handleTrackingSubmit} />
            </motion.div>
          )}

          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="py-12"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <LoadingSpinner />
                <p className="text-lg font-medium text-gray-700 mt-6">{loadingMessages[currentMessageIndex]}</p>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.section
              key="error"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12"
            >
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Tracking Error</h3>
                  <p className="text-red-600 mb-4">{error}</p>
                  
                  {errorDetails && (
                    <div className="bg-white rounded-xl p-4 mt-4 text-left">
                      <h4 className="font-semibold text-gray-800 mb-2">Details:</h4>
                      {errorDetails.detectedCarrier && (
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Detected Carrier:</span> {errorDetails.detectedCarrier}
                        </p>
                      )}
                      {errorDetails.trackingNumber && (
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">Tracking Number:</span> {errorDetails.trackingNumber}
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="mt-6 text-sm text-gray-500">
                    <p>💡 Try checking the tracking number format or contact the sender for updates.</p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {trackingData && (
            <motion.section
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12"
            >
              <div className="max-w-4xl mx-auto px-4">
                <TrackingResults data={trackingData} />
              </div>
            </motion.section>
          )}
        </div>

        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          📦
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-3xl opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🚚
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-3xl opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          🌍
        </motion.div>
      </section>
    </div>
  );
} 