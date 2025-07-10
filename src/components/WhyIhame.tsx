'use client';

import { motion, Variants } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Deep East African & International Expertise',
    description: 'Specialized in trade between East Africa and global markets, especially China and Dubai.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Active Port & Cross-Border Support',
    description: 'Direct assistance in Mombasa, Dar es Salaam, and cross-border trade zones.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Multilingual Team',
    description: 'Smooth communication in Kinyarwanda, English, and French.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Tech-Driven & Client-Centered',
    description: 'Modern technology integration and customer-focused solutions.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    ),
    title: 'Trusted by Institutions',
    description: 'Preferred by importers, exporters, and institutions for reliability.'
  }
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyIhame() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-4"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2875B4] to-[#7AB648]">IHAME?</span>
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto"
        >
            We combine cutting-edge technology with personalized service to deliver exceptional results for your business.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group p-6 bg-[#F5F5F5] rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 bg-gradient-to-br from-[#7AB648] to-[#2875B4] p-5 rounded-full mb-5 shadow-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2875B4] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              <span className="mt-4 text-xs font-bold text-[#7AB648] py-1 px-3 bg-green-100 rounded-full">
                Verified
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 