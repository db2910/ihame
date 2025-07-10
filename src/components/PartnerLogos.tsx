'use client';

import Image from 'next/image';

const logos = [
  { name: 'Vercel', src: '/vercel.svg' },
  { name: 'Next.js', src: '/next.svg' },
  { name: 'File', src: '/file.svg' },
  { name: 'Window', src: '/window.svg' },
  { name: 'Globe', src: '/globe.svg' },
  { name: 'Placeholder', src: '/logo-placeholder.svg' },
];

export default function PartnerLogos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-12">Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-transparent bg-clip-text">Partners</span></h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="relative h-20 w-40 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 ease-in-out">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 