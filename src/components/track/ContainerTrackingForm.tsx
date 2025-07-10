'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ContainerTrackingFormProps {
  onSubmit: (containerNumber: string) => void;
  isLoading: boolean;
}

export default function ContainerTrackingForm({ onSubmit, isLoading }: ContainerTrackingFormProps) {
  const [containerNumber, setContainerNumber] = useState('');
  const [error, setError] = useState('');

  const validateContainerNumber = (number: string) => {
    const containerRegex = /^[A-Z]{4}[0-9]{7}$/;
    return containerRegex.test(number.toUpperCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!containerNumber.trim()) {
      setError('Please enter a container number');
      return;
    }

    if (!validateContainerNumber(containerNumber)) {
      setError('Please enter a valid 11-character container number (e.g., MSCU1234567)');
      return;
    }

    onSubmit(containerNumber.toUpperCase());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setContainerNumber(value);
    if (error) setError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="containerNumber" className="block text-sm font-medium text-white mb-2">
            Container Number
          </label>
          <div className="relative">
            {/* Gradient border wrapper */}
            <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-[#2875B4] via-[#7AB648] to-[#2875B4] animate-pulse">
              <div className="bg-white rounded-xl h-full w-full"></div>
            </div>
            <input
              id="containerNumber"
              type="text"
              value={containerNumber}
              onChange={handleInputChange}
              placeholder="MSCU1234567"
              maxLength={11}
              className={`
                relative w-full px-4 py-3 text-lg font-mono rounded-xl bg-white text-black placeholder-gray-500 border-none
                focus:outline-none focus:ring-4 focus:ring-[#2875B4]/20
                ${error ? 'bg-red-50 text-red-900' : ''}
              `}
              style={{ zIndex: 1, position: 'relative' }}
              disabled={isLoading}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
              <motion.div
                animate={{ rotate: isLoading ? 360 : 0 }}
                transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
                className="w-5 h-5"
              >
                {isLoading && (
                  <svg className="w-5 h-5 text-[#2875B4]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
              </motion.div>
            </div>
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-200 font-medium"
            >
              {error}
            </motion.p>
          )}
          <p className="mt-2 text-xs text-white/70">
            Enter your 11-character container number (e.g., MSCU1234567)
          </p>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            w-full py-3 px-6 text-lg font-semibold text-white rounded-xl transition-all duration-300
            bg-gradient-to-r from-[#2875B4] to-[#7AB648] hover:from-[#1e5a8a] hover:to-[#6ba03a]
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-4 focus:ring-[#2875B4]/30
            shadow-lg hover:shadow-xl
          `}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full"
              />
              Tracking...
            </span>
          ) : (
            'Track Container'
          )}
        </motion.button>

        <div className="text-center">
          <p className="text-sm text-white/80">
            Try our demo: <span className="font-mono text-white cursor-pointer hover:underline" onClick={() => setContainerNumber('MSCU1234567')}>MSCU1234567</span>
          </p>
        </div>
      </form>
    </motion.div>
  );
} 