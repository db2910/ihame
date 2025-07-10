'use client';

import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Freight Forwarding',
    description: 'Import coordination from China and Dubai, air & sea freight, full and partial container load shipping.',
    image: '/images/freight.jpg',
    slug: 'freight-forwarding'
  },
  {
    title: 'Customs Clearance',
    description: 'Expertise in T1, WH7, and all RRA customs procedures. Clearance at Kigali Dry Port and borders.',
    image: '/images/customs.jpg',
    slug: 'customs-clearance'
  },
  {
    title: 'Port Logistics Support',
    description: 'Direct assistance for goods at Mombasa or Dar es Salaam, clearance, documentation, and inland transport.',
    image: '/images/port-logistics.jpg',
    slug: 'port-logistics-support'
  },
  {
    title: 'Warehousing & Delivery',
    description: 'Temporary storage solutions and last-mile delivery to businesses and clients across Rwanda.',
    image: '/images/warehouse.jpg',
    slug: 'warehousing-delivery'
  },
  {
    title: 'Cross-Border Logistics',
    description: 'Reliable deliveries and customs support to Goma and Bukavu in the DRC.',
    image: '/images/cross-border.jpg',
    slug: 'cross-border-logistics'
  },
  {
    title: 'Multilingual Customer Service',
    description: 'Full service in Kinyarwanda, English, and French.',
    image: '/images/multilingual.webp',
    slug: 'multilingual-customer-service'
  },
  {
    title: 'Digital Supply Chain (IHAME Market Place)',
    description: 'Upcoming platform to browse products in China and Dubai, order directly with built-in logistics and tracking.',
    image: '/images/digital.jpg',
    slug: 'digital-supply-chain'
  }
];

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Our <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs with precision and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              image={service.image}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 