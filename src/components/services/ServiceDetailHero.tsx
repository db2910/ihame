'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import QuoteForm from '../contact/ContactForm';

interface ServiceDetailHeroProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ServiceDetailHero({ title, description, image, slug }: ServiceDetailHeroProps) {
  const [showQuote, setShowQuote] = useState(false);
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2875B4]/90 via-[#2875B4]/70 to-[#7AB648]/90" />
      
      {/* 3D Prism Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="max-w-2xl mx-auto px-4 py-10">
          <div className="bg-white/90 rounded-2xl shadow-2xl px-8 py-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-[#2875B4] drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>
            <button
              onClick={() => setShowQuote(true)}
              className="mt-4 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              Get a Quote
            </button>
          </div>
        </div>
        {showQuote && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60" style={{ pointerEvents: 'auto' }}>
            <div className="relative w-full max-w-lg p-4 sm:p-8 z-[10000]">
              <div className="bg-gradient-to-br from-[#2875B4] via-[#1A1A2E] to-[#7AB648] rounded-2xl shadow-2xl p-4 sm:p-8 max-h-[90vh] overflow-y-auto relative flex flex-col">
                <button
                  type="button"
                  onClick={() => setShowQuote(false)}
                  className="absolute top-3 right-3 text-white hover:text-[#7AB648] text-2xl font-bold z-[10001] bg-black/30 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer border-none outline-none"
                  aria-label="Close"
                  tabIndex={0}
                  style={{ pointerEvents: 'auto' }}
                >
                  <span className="w-full h-full flex items-center justify-center">×</span>
                </button>
                <div className="pt-8 sm:pt-10">
                  <QuoteForm service={title} onClose={() => setShowQuote(false)} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 