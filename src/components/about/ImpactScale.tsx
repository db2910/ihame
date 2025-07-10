'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: 100, suffix: '+', label: 'Clients Served', icon: '👥', color: 'from-blue-500 to-blue-600' },
  { number: 6, suffix: '', label: 'Countries Covered', icon: '🌍', color: 'from-green-500 to-green-600' },
  { number: 100, suffix: '+', label: 'Deliveries Completed', icon: '📦', color: 'from-purple-500 to-purple-600' },
  { number: 10, suffix: '+', label: 'Team Members', icon: '🚀', color: 'from-orange-500 to-orange-600' }
];

export default function ImpactScale() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">Impact</span> & Scale
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that tell the story of our growth and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Truck Image with Animated Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-0 md:p-2 shadow-lg relative overflow-hidden">
              <img
                src="/images/freight.jpg"
                alt="Modern logistics truck"
                className="w-full h-64 md:h-80 object-cover rounded-xl"
                loading="lazy"
              />
              {/* Animated overlay: subtle moving gradient */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                  background: [
                    "linear-gradient(120deg, rgba(40,117,180,0.10) 0%, rgba(122,182,72,0.10) 100%)",
                    "linear-gradient(240deg, rgba(122,182,72,0.10) 0%, rgba(40,117,180,0.10) 100%)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                Modern Fleet
              </h3>
              <p className="text-gray-600">
                Reliable trucks and technology powering every delivery
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 md:p-8 text-center text-white relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10">
                    <div className="text-3xl mb-3">
                      {stat.icon}
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        {stat.number.toLocaleString()}{stat.suffix}
                      </span>
                    </div>
                    <div className="text-base md:text-lg font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Impact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center"
        >
          {[
            { 
              icon: "⚡", 
              title: "Fast Delivery", 
              description: "Average delivery time reduced by 40%",
              color: "from-blue-500 to-blue-600"
            },
            { 
              icon: "✅", 
              title: "Reliability", 
              description: "99.8% on-time delivery success rate",
              color: "from-green-500 to-green-600"
            },
            { 
              icon: "❤️", 
              title: "Customer Satisfaction", 
              description: "98% client satisfaction rating",
              color: "from-purple-500 to-purple-600"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 