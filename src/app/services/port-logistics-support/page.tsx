"use client";
import { motion } from 'framer-motion';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDescription from '@/components/services/ServiceDescription';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceCta from '@/components/services/ServiceCta';

const service = {
  title: 'Port Logistics Support',
  description: 'Direct assistance for goods at Mombasa or Dar es Salaam, clearance, documentation, and inland transport.',
  longDescription: 'We provide direct assistance for goods stuck at Mombasa or Dar es Salaam ports, including clearance, documentation, and inland transport to Rwanda. Our team ensures your cargo moves efficiently through every port process.',
  benefits: [
    'Direct port assistance',
    'Clearance and documentation',
    'Inland transport to Rwanda',
    'Problem-solving for stuck goods',
    'Expert local support'
  ],
  features: [
    { title: 'Port Clearance', description: 'Fast and reliable clearance at major East African ports.', icon: (<svg className="w-8 h-8 text-[#2875B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>) },
    { title: 'Documentation', description: 'Expert handling of all port and customs paperwork.', icon: (<svg className="w-8 h-8 text-[#7AB648]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>) },
    { title: 'Inland Transport', description: 'Seamless movement from port to final destination.', icon: (<svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 3h15v11h-3v-4h-4v4H6v-4H1V3z" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="17.5" cy="16.5" r="2.5" /></svg>) }
  ],
  image: '/images/port-logistics.jpg',
  heroImage: '/images/hero.jpeg'
};

export default function PortLogisticsSupportPage() {
  return (
    <main className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <ServiceDetailHero title={service.title} description={service.description} image={service.heroImage} slug="port-logistics-support" />
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