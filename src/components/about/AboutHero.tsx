'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Mouse follower component
const MouseFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-8 h-8 bg-white/20 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ x: springX, y: springY }}
    />
  );
};

// Enhanced floating particle component with mouse interaction
const FloatingParticle = ({ delay, duration, x, y, size = 2 }: { delay: number; duration: number; x: number; y: number; size?: number }) => (
  <motion.div
    className="absolute bg-white/30 rounded-full cursor-pointer"
    style={{ width: size, height: size }}
    animate={{
      x: [x, x + 100, x],
      y: [y, y - 100, y],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    whileHover={{ scale: 3, opacity: 1 }}
  />
);

// Animated text component with typewriter effect
const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="inline-block"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-white ml-1"
      />
    </motion.span>
  );
};

// Animated background grid
const AnimatedGrid = () => (
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [particles, setParticles] = useState<{id: number; delay: number; duration: number; x: number; y: number; size: number;}[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // Generate floating particles with varying sizes only on the client
    setParticles(
      Array.from({ length: isMobile ? 15 : 30 }, (_, i) => ({
        id: i,
        delay: i * 0.1,
        duration: 8 + Math.random() * 6,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 1 + Math.random() * 3
      }))
    );
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Mouse follower */}
      <MouseFollower />
      
      {/* Multiple Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-back.jpg")',
          y,
          opacity,
          scale
        }}
      />
      
      {/* Animated grid overlay */}
      <AnimatedGrid />
      
      {/* Animated gradient overlay with more complex patterns */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(40, 117, 180, 0.9) 0%, rgba(122, 182, 72, 0.9) 50%, rgba(40, 117, 180, 0.9) 100%)",
            "radial-gradient(circle at 80% 20%, rgba(122, 182, 72, 0.9) 0%, rgba(40, 117, 180, 0.9) 50%, rgba(122, 182, 72, 0.9) 100%)",
            "radial-gradient(circle at 40% 40%, rgba(40, 117, 180, 0.9) 0%, rgba(122, 182, 72, 0.9) 50%, rgba(40, 117, 180, 0.9) 100%)",
            "radial-gradient(circle at 60% 60%, rgba(122, 182, 72, 0.9) 0%, rgba(40, 117, 180, 0.9) 50%, rgba(122, 182, 72, 0.9) 100%)",
            "radial-gradient(circle at 20% 80%, rgba(40, 117, 180, 0.9) 0%, rgba(122, 182, 72, 0.9) 50%, rgba(40, 117, 180, 0.9) 100%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          x={particle.x}
          y={particle.y}
          size={particle.size}
        />
      ))}
      
      {/* Enhanced geometric shapes with more variety */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 md:w-32 md:h-32 border-2 border-white/20 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 md:w-24 md:h-24 border-2 border-white/20 transform rotate-45"
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-8 h-8 md:w-16 md:h-16 border border-white/10 rounded-full"
        animate={{ 
          rotate: 180,
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Floating Globe Icon with enhanced animation */}
      <motion.div
        className="absolute top-20 right-20 hidden lg:block"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-white/40 drop-shadow-lg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
        </svg>
      </motion.div>
      
      {/* Main Content with enhanced animations */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6"
        >
          <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">IHAME</span> LOGISTICS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-2xl text-gray-100 font-medium mb-8"
        >
          A dynamic Rwandan logistics company offering tailored freight forwarding, customs clearance, warehousing, and last-mile delivery solutions. We facilitate smooth trade between East Africa and global markets—especially China and Dubai—through reliable services and multilingual support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-xl md:text-2xl font-bold text-[#7AB648]"
        >
          <AnimatedText text="Your Order, Our Responsibility." />
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator with animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.span 
            className="text-white/60 text-sm font-medium"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 100 200 Q 300 100 500 200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.path
          d="M 600 300 Q 800 200 1000 300"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
        <motion.path
          d="M 200 400 Q 400 300 600 400"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 2 }}
        />
      </svg>
      
      {/* Floating data points */}
      <motion.div
        className="absolute top-1/4 right-1/4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="text-white text-xs">
          <div className="font-bold">Real-time</div>
          <div>Tracking</div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="text-white text-xs">
          <div className="font-bold">Global</div>
          <div>Network</div>
        </div>
      </motion.div>
    </section>
  );
} 