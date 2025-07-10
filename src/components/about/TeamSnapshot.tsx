'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    quote: 'Building bridges across Africa, one delivery at a time.',
    stats: { experience: '15+ years', projects: '500+', countries: '12' },
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Innovation Lead',
    quote: 'Technology is the backbone of modern logistics.',
    stats: { experience: '12+ years', projects: '300+', countries: '8' },
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Aisha Okafor',
    role: 'Operations Director',
    quote: 'Efficiency and reliability are our core values.',
    stats: { experience: '10+ years', projects: '400+', countries: '10' },
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'David Mwangi',
    role: 'Head of Partnerships',
    quote: 'Strong partnerships drive sustainable growth.',
    stats: { experience: '8+ years', projects: '250+', countries: '6' },
    color: 'from-orange-500 to-orange-600'
  }
];

export default function TeamSnapshot() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            Meet Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to transforming logistics across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 relative">
                    <div className={`w-full h-full bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                  <p className="text-[#2875B4] font-medium text-sm md:text-base">{member.role}</p>
                </div>

                <div className="relative z-10 mb-6 flex-grow">
                  <blockquote className="text-gray-600 italic text-center text-sm leading-relaxed">
                    "{member.quote}"
                  </blockquote>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-4 text-center">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-[#2875B4]">{member.stats.experience}</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-[#7AB648]">{member.stats.projects}</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-[#2875B4]">{member.stats.countries}</div>
                    <div className="text-xs text-gray-500">Countries</div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#2875B4]/10 to-[#7AB648]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 md:space-x-4 bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg">
            <div className="text-lg">👥</div>
            <span className="font-semibold text-base md:text-lg">Dedicated team of professionals</span>
            <div className="text-lg">💪</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 