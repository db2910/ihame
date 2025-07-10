"use client";
import { motion } from 'framer-motion';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDescription from '@/components/services/ServiceDescription';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceCta from '@/components/services/ServiceCta';

const service = {
  title: 'Digital Supply Chain (IHAME Market Place)',
  description: 'Upcoming platform to browse products in China and Dubai, order directly with built-in logistics and tracking.',
  longDescription: 'Our upcoming online platform will allow clients to browse products in China and Dubai, and order directly with built-in logistics and tracking. The IHAME Market Place is designed to digitize the sourcing, shipping, and delivery process for our clients, making global trade seamless and efficient.',
  benefits: [
    'Browse products in China and Dubai',
    'Order directly with built-in logistics',
    'Integrated tracking',
    'Tech-driven supply chain',
    'Scalable solutions'
  ],
  features: [
    { title: 'Product Browsing', description: 'Easily find and compare products from China and Dubai.', icon: (<svg className="w-8 h-8 text-[#2875B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /></svg>) },
    { title: 'Integrated Logistics', description: 'Seamless shipping and delivery with real-time tracking.', icon: (<svg className="w-8 h-8 text-[#7AB648]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 3h15v11h-3v-4h-4v4H6v-4H1V3z" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="17.5" cy="16.5" r="2.5" /></svg>) },
    { title: 'Tech-Driven', description: 'Modern, scalable, and efficient supply chain solutions.', icon: (<svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) }
  ],
  image: '/images/digital.jpg',
  heroImage: '/images/hero.jpeg'
};

export default function DigitalSupplyChainPage() {
  return (
    <main className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <ServiceDetailHero title={service.title} description={service.description} image={service.heroImage} slug="digital-supply-chain" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
        <ServiceDescription title={service.title} description={service.longDescription} image={service.image} benefits={service.benefits} />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
        <ServiceFeatures title={service.title} features={service.features} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
        <ServiceCta title={service.title} />
      </motion.div>
    </main>
  );
} 