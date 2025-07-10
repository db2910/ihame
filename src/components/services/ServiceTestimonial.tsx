'use client';

import { motion } from 'framer-motion';

export default function ServiceTestimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="mb-6">
            <svg className="w-12 h-12 text-white/80 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          
          <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
            "IHAME Logistics has transformed our supply chain operations. Their cargo transport service is reliable, efficient, and their team is always professional. We've seen a 30% improvement in delivery times since partnering with them."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">JD</span>
            </div>
            <div className="text-left">
              <div className="font-semibold">John Davis</div>
              <div className="text-white/80 text-sm">Operations Manager, TechCorp Industries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 