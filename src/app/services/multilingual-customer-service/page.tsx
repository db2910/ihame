"use client";
import { motion } from 'framer-motion';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDescription from '@/components/services/ServiceDescription';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceCta from '@/components/services/ServiceCta';

const service = {
  title: 'Multilingual Customer Service',
  description: 'Full service in Kinyarwanda, English, and French.',
  longDescription: 'Our multilingual customer service ensures smooth communication and support in Kinyarwanda, English, and French. We are dedicated to providing clear, effective assistance to all our clients, no matter their language preference.',
  benefits: [
    'Support in Kinyarwanda, English, and French',
    'Clear and effective communication',
    'Dedicated customer support',
    'Fast response times',
    'Client-focused solutions'
  ],
  features: [
    { title: 'Multilingual Team', description: 'Fluent support in Kinyarwanda, English, and French.', icon: (<svg className="w-8 h-8 text-[#2875B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 0 20" /></svg>) },
    { title: 'Client-Focused', description: 'Personalized solutions for every client.', icon: (<svg className="w-8 h-8 text-[#7AB648]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) },
    { title: 'Fast Response', description: 'Quick, helpful answers to all inquiries.', icon: (<svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) }
  ],
  image: '/images/multilingual.webp',
  heroImage: '/images/hero.jpeg'
};

export default function MultilingualCustomerServicePage() {
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