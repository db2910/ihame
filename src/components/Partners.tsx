import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional logistics solutions
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="flex justify-center items-center">
          <Image
            src="/MIGO EVENTS GROUP LOGO-02.png"
            alt="MIGO EVENTS GROUP Logo"
            width={300}
            height={150}
            className="w-64 h-32 object-contain"
          />
        </div>
        
        {/* Partner Description */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold text-[#2875B4] mb-2">
            MIGO EVENTS GROUP
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Strategic partner specializing in experiential marketing strategy, arts & entertainment, 
            events management, branding, advertising, and sales promotion. 
            Together we create comprehensive solutions that connect brands with audiences across East Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
