'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const FloatingIcon = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <motion.div
    className={`absolute text-[#7AB648] w-10 h-10 md:w-14 md:h-14 ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.7, scale: 1, y: ['0%', '-20%', '0%'] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
  >
    {children}
  </motion.div>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="m3.27 6.96 8.73 5.04 8.73-5.04" />
    <path d="M12 22.08V12" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 3h15v11h-3v-4h-4v4H6v-4H1V3z" />
    <path d="M16 8h4l3 3.5v3.5h-3" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="17.5" cy="16.5" r="2.5" />
  </svg>
);

function DistortedGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 2]} intensity={0.7} />
      <Suspense fallback={null}>
        <Sphere args={[2.5, 64, 64]}>
          <MeshDistortMaterial
            color="#2875B4"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
      </Suspense>
    </Canvas>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#2875B4] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpeg"
          alt="Logistics Hero"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>
      {/* Text Content Over Image */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
        >
          <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">IHAME</span> <span>LOGISTICS &</span> <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">SUPPLY</span> <span>LTD</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-gray-200 font-medium max-w-2xl"
        >
          Dynamic Rwandan logistics company offering tailored freight forwarding, customs clearance, warehousing, and last-mile delivery solutions. Facilitating smooth trade between East Africa and global markets—especially China and Dubai.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="/services"
            aria-label="Our Services"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#7AB648] text-white font-bold text-lg shadow-lg hover:bg-[#69a43a] focus:outline-none focus:ring-4 focus:ring-[#7AB648]/50 transition-all"
          >
            Explore Services
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a
            href="/contact"
            aria-label="Contact Us"
            className="px-8 py-4 rounded-lg bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-[#2875B4] focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// For future: Replace globe.svg with a Three.js/Canvas globe for a true 3D effect. 