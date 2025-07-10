'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface TrackingFormProps {
  onSubmit: (trackingNumber: string) => void;
}

export default function TrackingForm({ onSubmit }: TrackingFormProps) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      return;
    }

    setIsSubmitting(true);
    await onSubmit(trackingNumber.trim());
    setIsSubmitting(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="trackingNumber" className="block text-lg font-semibold text-[#1A1A1A] mb-3">
            Enter Tracking Number
          </label>
          <motion.input
            id="trackingNumber"
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="e.g., 1Z999AA1234567890"
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#2875B4] focus:outline-none transition-colors duration-300"
            required
            disabled={isSubmitting}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting || !trackingNumber.trim()}
          className={`w-full py-4 px-8 text-lg font-semibold text-white rounded-xl transition-all duration-300 ${
            isSubmitting || !trackingNumber.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#2875B4] to-[#7AB648] hover:shadow-lg hover:scale-105'
          }`}
          whileHover={!isSubmitting && trackingNumber.trim() ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting && trackingNumber.trim() ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Tracking...</span>
            </div>
          ) : (
            'Track Now'
          )}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center text-sm text-gray-500"
      >
        <p>No need to select a carrier - we&apos;ll detect it automatically</p>
      </motion.div>
    </motion.form>
  );
} 