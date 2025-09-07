'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'IHAME Logistics was established with a vision to revolutionize logistics in Africa.',
    color: 'from-blue-500 to-blue-600',
    achievement: 'First Milestone'
  },
  {
    year: '2019',
    title: 'First Cross-Border Route',
    description: 'Launched our first international delivery route, connecting multiple African countries.',
    color: 'from-green-500 to-green-600',
    achievement: 'International Expansion'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Implemented advanced tracking systems and digital platforms for enhanced customer experience.',
    color: 'from-purple-500 to-purple-600',
    achievement: 'Tech Innovation'
  },
  {
    year: '2021',
    title: 'Fleet Expansion',
    description: 'Expanded our fleet to 50+ vehicles and opened new regional distribution centers.',
    color: 'from-orange-500 to-orange-600',
    achievement: 'Scale Growth'
  },
  {
    year: '2022',
    title: '100+ Clients Milestone',
    description: 'Reached our first 100 clients milestone, serving businesses across 8 countries.',
    color: 'from-red-500 to-red-600',
    achievement: 'Client Success'
  },
  {
    year: '2023',
    title: 'Innovation Hub Launch',
    description: 'Launched our innovation hub to develop cutting-edge logistics solutions and technologies.',
    color: 'from-indigo-500 to-indigo-600',
    achievement: 'Future Ready'
  },
  {
    year: '2024',
    title: 'Market Leadership',
    description: 'Achieved market leadership position with 150+ clients and operations in 12 countries.',
    color: 'from-yellow-500 to-yellow-600',
    achievement: 'Market Leader'
  }
];

export default function CompanyTimeline() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 md:mb-6">
            Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted logistics partner across Africa.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line for large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2875B4] to-[#7AB648]"></div>
          {/* Timeline Line for small screens */}
          <div className="md:hidden absolute left-5 w-1 h-full bg-gradient-to-b from-[#2875B4] to-[#7AB648]"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="md:relative flex md:items-center"
              >
                {/* Desktop layout */}
                <div className={`hidden md:flex w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-3'}`}>
                  <TimelineCard event={event} />
                </div>
                <div className={`hidden md:flex w-2/12 justify-center ${index % 2 === 0 ? 'order-2' : 'order-2'}`}>
                  <TimelineDot isLast={index === timelineEvents.length - 1} />
                </div>
                <div className="hidden md:flex w-5/12"></div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start w-full">
                  <TimelineDot isLast={index === timelineEvents.length - 1} className="mr-6 mt-1 flex-shrink-0" />
                  <div className="w-full">
                    <TimelineCard event={event} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom celebration element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-3 md:space-x-4 bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg">
            <div className="text-lg">⭐</div>
            <span className="font-semibold text-base md:text-lg">Continuing to grow and innovate</span>
            <div className="text-lg">🚀</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const TimelineCard = ({ event }: { event: (typeof timelineEvents)[0] }) => (
  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
    <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${event.color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
      {event.achievement}
    </div>
    <div className="flex items-center space-x-3 mb-3">
      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center`}>
        <div className="text-white text-lg">📅</div>
      </div>
      <div>
        <span className="text-xl md:text-2xl font-bold text-[#2875B4]">
          {event.year}
        </span>
      </div>
    </div>
    <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">{event.title}</h3>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{event.description}</p>
  </div>
);

const TimelineDot = ({ isLast, className = "" }: { isLast: boolean, className?: string }) => (
  <div className={`w-6 h-6 bg-white border-4 border-[#7AB648] rounded-full shadow-lg ${className}`}>
    {isLast && (
      <div className="w-full h-full bg-[#7AB648] rounded-full animate-pulse"></div>
    )}
  </div>
); 