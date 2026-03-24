import React from "react";
import Image from "next/image";

const partnersInfo = [
  {
    name: "MIGO EVENTS GROUP",
    logo: "/MIGO EVENTS GROUP LOGO-02.png",
    description: 
      "Strategic partner specializing in experiential marketing strategy, arts & entertainment, events management, branding, advertising, and sales promotion. Together we create comprehensive solutions that connect brands with audiences across East Africa.",
  },
  {
    name: "LSmart",
    logo: "/LSmart.jpeg",
    description: 
      "Trusted hardware shop partner providing essential building materials, tools, and hardware supplies to support our infrastructure and logistics operations.",
  },
  {
    name: "jetink",
    logo: "/jetink.png",
    description: 
      "Specialized partner in large format printing papers, art, and designing. They help us deliver high-quality branding and visual communication materials.",
  }
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-10 w-64 h-64 bg-[#2875B4] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-0 right-10 w-64 h-64 bg-[#7AB648] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] tracking-tight mb-4">
            Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2875B4] to-[#7AB648]">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We collaborate with industry leaders to deliver exceptional logistics and supply chain solutions.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 mt-12">
          {partnersInfo.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-6 transition-all duration-300 ease-out hover:-translate-y-2"
            >
              <div className="h-32 w-full relative mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-2 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#2875B4] transition-colors duration-300 text-center">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed max-w-sm">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
