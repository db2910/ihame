"use client";
import { motion } from 'framer-motion';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDescription from '@/components/services/ServiceDescription';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceCta from '@/components/services/ServiceCta';

const service = {
  title: 'Customs Clearance',
  description: 'Expertise in T1, WH7, and all RRA customs procedures. Clearance at Kigali Dry Port and borders.',
  longDescription: 'Our customs clearance service provides expert support for T1, WH7, and all RRA customs procedures. We offer clearance at Kigali Dry Port and borders, ensuring your shipments move smoothly and efficiently through all regulatory requirements.',
  benefits: [
    'Expertise in T1, WH7, and RRA procedures',
    'Clearance at Kigali Dry Port and borders',
    'Documentation and compliance support',
    'Risk assessment and duty calculation',
    '24/7 support'
  ],
  features: [
    { title: 'Regulatory Expertise', description: 'Stay compliant with all customs regulations.', icon: (<svg className="w-8 h-8 text-[#2875B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>) },
    { title: 'Fast Processing', description: 'Expedited clearance at key ports and borders.', icon: (<svg className="w-8 h-8 text-[#7AB648]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) },
    { title: 'Comprehensive Support', description: 'From documentation to risk assessment.', icon: (<svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) }
  ],
  image: '/images/customs.jpg',
  heroImage: '/images/hero.jpeg'
};

export default function CustomsClearancePage() {
  return (
    <main className="min-h-screen">
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