'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#2875B4] flex items-center justify-center pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      {/* Text Content Over Video */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
        >
          <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">IHAME</span> <span>LOGISTICS &</span> <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">SUPPLY</span> <span>LTD</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-gray-200 font-medium max-w-2xl"
        >
          Dynamic Rwandan logistics company offering tailored freight forwarding, customs clearance, warehousing, and last-mile delivery solutions. Facilitating smooth trade between East Africa and global markets—especially China and Dubai.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="/services"
            aria-label="Our Services"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#7AB648] text-white font-bold text-lg shadow-lg hover:bg-[#69a43a] focus:outline-none focus:ring-4 focus:ring-[#7AB648]/50 transition-all"
          >
            Explore Services
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <Link
            href="/contact"
            aria-label="Contact Us"
            className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-[#2875B4] focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// For future: Replace globe.svg with a Three.js/Canvas globe for a true 3D effect. 