'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutCta() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#2875B4] to-[#7AB648]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-white mb-6"
        >
          Want to partner with a logistics company that delivers more than just packages?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-[#2875B4] font-bold rounded-full shadow-lg hover:bg-[#7AB648] hover:text-white transition-colors text-base md:text-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 