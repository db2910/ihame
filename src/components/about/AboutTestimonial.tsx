'use client';

import { motion } from 'framer-motion';

export default function AboutTestimonial() {
  const quote = "We started with a single truck and a vision to simplify delivery. Today, we move businesses.";

  return (
    <section className="py-16 md:py-20 bg-[#F3F4F6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-[#7AB648] rounded-full"></div>
            <span className="text-sm font-medium text-[#1A1A1A]">Founder's Vision</span>
          </div>
        </motion.div>
        
        <motion.blockquote
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative text-xl md:text-3xl font-semibold text-[#1A1A1A] text-center leading-relaxed px-6 py-10 md:px-8 md:py-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#2875B4] to-[#7AB648] rounded-full opacity-20"></div>
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#7AB648] to-[#2875B4] rounded-full opacity-20"></div>
          
          <span className="absolute left-2 top-2 md:left-4 md:top-4 text-4xl md:text-5xl text-[#2875B4]/30 select-none">
            "
          </span>
          
          <div className="relative z-10">
            <span className="inline-block">
              {quote}
            </span>
          </div>
          
          <span className="absolute right-2 bottom-2 md:right-4 md:bottom-4 text-4xl md:text-5xl text-[#7AB648]/30 select-none">
            "
          </span>
        </motion.blockquote>
        
        {/* Author attribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
           {/* <div className="inline-flex items-center space-x-3 md:space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg border border-white/50">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#2875B4] to-[#7AB648] rounded-full flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1A1A1A] text-sm md:text-base">Sarah Johnson</div>
              <div className="text-xs md:text-sm text-gray-600">CEO & Founder, IHAME Logistics</div>
            </div>
          </div> */}
        </motion.div>
        
        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-[#2875B4]">
            <span className="text-xl md:text-2xl">🌟</span>
            <span className="font-medium text-sm md:text-base">Trusted by businesses across Africa</span>
            <span className="text-xl md:text-2xl">🌟</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 