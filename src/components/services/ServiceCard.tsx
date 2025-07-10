'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  index: number;
}

export default function ServiceCard({ title, description, image, slug, index }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Link href={`/services/${slug}`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <motion.h3 
            className="text-2xl font-bold mb-3 group-hover:text-[#7AB648] transition-colors duration-300"
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-200 mb-4 text-sm leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.button
            className="bg-[#7AB648] hover:bg-[#6AA038] text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform group-hover:scale-105 w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
} 