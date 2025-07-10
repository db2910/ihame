'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all our business relationships.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    title: 'Efficiency',
    description: 'We optimize every process to deliver maximum value while minimizing costs and time.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    title: 'Transparency',
    description: 'We maintain open communication and provide clear visibility into all our operations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    title: 'Innovation',
    description: 'We continuously embrace new technologies and methods to improve our services.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100'
  }
];

// Floating background elements
const FloatingElement = ({ delay, className }: { delay: number; className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.3, 0.7, 0.3]
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function MissionVisionValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElement delay={0} className="top-10 left-5 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-[#2875B4]/10 to-[#7AB648]/10 rounded-full" />
      <FloatingElement delay={2} className="top-20 right-5 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-[#7AB648]/10 to-[#2875B4]/10 rounded-full" />
      <FloatingElement delay={4} className="bottom-10 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-[#2875B4]/10 to-[#7AB648]/10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              className="bg-gradient-to-br from-[#2875B4] to-[#7AB648] rounded-2xl p-8 text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <pattern id="mission-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#mission-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 md:mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Mission</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  To simplify global trade for individuals, businesses, and institutions across Africa by providing efficient, transparent, and customer-centered logistics services.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <motion.div
              className="bg-gradient-to-br from-[#7AB648] to-[#2875B4] rounded-2xl p-8 text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <pattern id="vision-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="8" y="8" width="4" height="4" fill="currentColor" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#vision-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 md:mb-6"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Vision</h2>
                <p className="text-base md:text-lg leading-relaxed">
                  To become East Africa's most trusted logistics partner, known for delivering dependable, tech-driven, and scalable supply chain solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every decision we make and every service we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-5 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 md:mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
                
                {/* Decorative corner element */}
                <motion.div
                  className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${value.color} rounded-bl-full opacity-20`}
                  whileHover={{ scale: 1.5, opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 