'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v11h-3v-4h-4v4H6v-4H1V3z" /><path d="M16 8h4l3 3.5v3.5h-3" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="17.5" cy="16.5" r="2.5" /></svg>
    ),
    title: 'Freight Forwarding',
    description: 'Import coordination from China and Dubai, air & sea freight, full and partial container load shipping.',
    bgColor: 'bg-[#2875B4]',
    textColor: 'text-[#2875B4]',
    learnMoreColor: 'text-[#7AB648]',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-green-400',
    slug: 'freight-forwarding',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    ),
    title: 'Customs Clearance',
    description: 'Expertise in T1, WH7, and all RRA customs procedures. Clearance at Kigali Dry Port and borders.',
    bgColor: 'bg-[#7AB648]',
    textColor: 'text-gray-800',
    learnMoreColor: 'text-[#2875B4]',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-blue-400',
    slug: 'customs-clearance',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 18 15.3 15.3 0 0 1-8 0 15.3 15.3 0 0 1 4-18z" /></svg>
    ),
    title: 'Port Logistics Support',
    description: 'Direct assistance for goods at Mombasa or Dar es Salaam, clearance, documentation, and inland transport.',
    bgColor: 'bg-gradient-to-tr from-blue-500 to-green-500',
    textColor: 'text-gray-800',
    learnMoreColor: 'text-[#2875B4]',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-green-400',
    slug: 'port-logistics-support',
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /></svg>
    ),
    title: 'Warehousing & Delivery',
    description: 'Temporary storage solutions and last-mile delivery to businesses and clients across Rwanda.',
    bgColor: 'bg-[#2875B4]',
    textColor: 'text-[#2875B4]',
    learnMoreColor: 'text-[#7AB648]',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-green-400',
    slug: 'warehousing-delivery',
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    title: 'Cross-Border Logistics',
    description: 'Reliable deliveries and customs support to Goma and Bukavu in the DRC.',
    bgColor: 'bg-[#7AB648]',
    textColor: 'text-gray-800',
    learnMoreColor: 'text-[#2875B4]',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-blue-400',
    slug: 'cross-border-logistics',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Multilingual Customer Service',
    description: 'Full service in Kinyarwanda, English, and French.',
    bgColor: 'bg-gradient-to-tr from-blue-500 to-green-500',
    textColor: 'text-gray-800',
    learnMoreColor: 'text-[#2875B4]',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-green-400',
    slug: 'multilingual-customer-service',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /></svg>
    ),
    title: 'Digital Supply Chain (IHAME Market Place)',
    description: 'Upcoming platform to browse products in China and Dubai, order directly with built-in logistics and tracking.',
    bgColor: 'bg-[#2875B4]',
    textColor: 'text-[#2875B4]',
    learnMoreColor: 'text-[#7AB648]',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-green-400',
    slug: 'digital-supply-chain',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
  }
];

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2875B4] to-[#7AB648]">Core</span> Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Comprehensive logistics solutions designed to meet your business needs with precision and reliability.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={`p-4 inline-block rounded-xl mb-6 ${service.bgColor}`}>
                {service.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-3 text-left ${service.textColor}`}>{service.title}</h3>
              <p className="text-gray-500 text-left mb-6">{service.description}</p>
              <Link href={`/services/${service.slug}`} className={`inline-flex items-center font-semibold ${service.learnMoreColor}`}>
                Learn More
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/services">
            <motion.button
              className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] hover:from-[#2368A0] hover:to-[#6AA038] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 