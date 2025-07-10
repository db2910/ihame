'use client';

import { motion } from 'framer-motion';

export default function FooterCta() {
  return (
    <section className="bg-gradient-to-tr from-[#1A1A2E] via-[#16213E] to-[#2875B4]">
      <div className="max-w-5xl mx-auto px-4 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's get your shipment moving.</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to streamline your logistics? Contact our experts today for a personalized quote or to discuss your supply chain needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="/contact"
              aria-label="Contact Us Today"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(122, 182, 72, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-xl bg-[#7AB648] text-white font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-[#7AB648] transition-all"
            >
              Contact Us Today
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              aria-label="Call Us Now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-xl bg-white/20 text-white font-bold backdrop-blur-sm border border-white/30 hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
            >
              Call Us Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 