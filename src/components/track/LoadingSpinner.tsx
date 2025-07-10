'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="text-center">
      <motion.div
        className="inline-flex flex-col items-center space-y-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Spinner */}
        <div className="relative">
          <motion.div
            className="w-20 h-20 border-4 border-[#2875B4]/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-0 left-0 w-20 h-20 border-4 border-[#2875B4] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <h3 className="text-2xl font-semibold text-[#1A1A1A]">
            Tracking Your Shipment
          </h3>
          <p className="text-gray-600">
            Detecting carrier and fetching latest updates...
          </p>
        </motion.div>

        {/* Progress Dots */}
        <motion.div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-[#2875B4] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
} 