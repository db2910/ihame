"use client";
import { motion } from 'framer-motion';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDescription from '@/components/services/ServiceDescription';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceCta from '@/components/services/ServiceCta';
import LocationsTicker from '@/components/LocationsTicker';

const service = {
  title: 'Freight Forwarding',
  description: 'Import coordination from China and Dubai, air & sea freight, full and partial container load shipping.',
  longDescription: 'Our freight forwarding service offers tailored solutions for import coordination from China and Dubai, including air and sea freight options, and both full and partial container load shipping. We ensure smooth, reliable, and cost-effective logistics for your business.',
  benefits: [
    'Import coordination from China and Dubai',
    'Air & sea freight options',
    'Full and partial container load shipping',
    'Customs documentation support',
    'Transparent pricing',
    'Dedicated customer support'
  ],
  features: [
    { title: 'Global Reach', description: 'Seamless logistics between East Africa, China, and Dubai.', icon: (<svg className="w-8 h-8 text-[#2875B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /></svg>) },
    { title: 'Flexible Shipping', description: 'Choose from air or sea freight, FCL or LCL.', icon: (<svg className="w-8 h-8 text-[#7AB648]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /></svg>) },
    { title: 'End-to-End Service', description: 'We handle everything from pickup to delivery.', icon: (<svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 3h15v11h-3v-4h-4v4H6v-4H1V3z" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="17.5" cy="16.5" r="2.5" /></svg>) }
  ],
  image: '/images/freight.jpg',
  heroImage: '/images/hero.jpeg'
};

export default function FreightForwardingPage() {
  return (
    <main className="min-h-screen">
      <LocationsTicker />
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <ServiceDetailHero title={service.title} description={service.description} image={service.heroImage} />
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