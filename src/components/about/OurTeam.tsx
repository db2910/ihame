'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Herve',
    image: '/herve.jpeg', 
    role: 'Operations Manager',
    description: 'Experienced professional ensuring quality service delivery and operational excellence across all logistics operations.'
  },
  {
    name: 'Aurore',
    image: '/aurore.jpeg',
    role: 'Sales Manager',
    description: 'Dedicated professional driving business growth and building strong client relationships in the logistics sector.'
  },
  {
    name: 'Bernice', 
    image: '/bernice.jpeg',
    role: 'Administrative Assistant',
    description: 'Passionate team member supporting operational success and ensuring smooth coordination of logistics activities.'
  }
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who make IHAME Logistics a trusted partner in your supply chain journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="group text-center"
            >
              {/* Team Member Photo */}
              <div className="relative mb-6 mx-auto w-80 h-96 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2875B4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Team Member Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2875B4] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold text-[#7AB648]">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Ready to work with our experienced team?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
