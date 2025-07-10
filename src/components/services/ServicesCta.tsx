'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesCta() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                One partner for all your logistics needs.
              </h3>
              <p className="text-xl text-gray-100">
                Ready to streamline your supply chain? Let's discuss how IHAME can help your business grow.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link href="/contact">
                <motion.button
                  className="bg-white text-[#2875B4] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact IHAME Today
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 