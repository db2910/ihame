'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import QuoteForm from '../contact/ContactForm';

interface ServiceCtaProps {
  title: string;
}

export default function ServiceCta({ title }: ServiceCtaProps) {
  const [showQuote, setShowQuote] = useState(false);
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Need reliable {title.toLowerCase()}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            IHAME is ready to help you streamline your logistics operations. Get in touch with our team to discuss your specific needs and receive a customized solution.
          </p>
          <button
            onClick={() => setShowQuote(true)}
            className="mt-4 px-8 py-4 rounded-lg bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Get a Quote
          </button>
          {showQuote && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60" style={{ pointerEvents: 'auto' }}>
              <div className="relative w-full max-w-lg p-4 sm:p-8 z-[10000] mt-16 sm:mt-0">
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
        </motion.div>
      </div>
    </section>
  );
} 