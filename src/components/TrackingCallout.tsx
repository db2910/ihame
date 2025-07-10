'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const features = [
  { title: 'Real-time Updates', description: 'Get instant notifications about your shipment status' },
  { title: 'GPS Tracking', description: 'See exact location of your cargo on interactive maps' },
  { title: 'Delivery Proof', description: 'Digital signatures and photos upon delivery' },
];

const BoxIcon = () => (
    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m3.27 6.96 8.73 5.04 8.73-5.04" />
        <path d="M12 22.08V12" />
    </svg>
);

export default function TrackingCallout() {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      router.push(`/track?containerNumber=${trackingNumber.trim()}`);
    } else {
      router.push('/track');
    }
  };

  return (
    <section className="py-24 bg-[#2875B4] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 inline-block p-4 bg-[#7AB648] rounded-full">
            <BoxIcon />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Track Your Shipment</h2>
        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
          Get real-time updates on your cargo with our advanced tracking system. Enter your tracking number below to get started.
        </p>
        <div className="max-w-3xl mx-auto p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 mb-12">
          <form onSubmit={handleTrackSubmit}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-grow w-full">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input
                  type="text"
                  aria-label="Tracking Number"
                  placeholder="Enter tracking number (e.g., MSCU1234567)"
                  className="w-full px-12 py-4 rounded-xl border-none bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7AB648]"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
              <motion.button
                type="submit"
                aria-label="Track Now"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#7AB648] text-white font-bold shadow-lg hover:bg-[#69a43a] focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#2875B4] focus:ring-[#7AB648] transition-all"
              >
                Track Now
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 text-left"
            >
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 