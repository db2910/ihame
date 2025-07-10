import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDescription from '@/components/services/ServiceDescription';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceTestimonial from '@/components/services/ServiceTestimonial';
import ServiceCta from '@/components/services/ServiceCta';

// Service data - in a real app, this would come from a CMS or database
const servicesData = {
  'cargo-transport': {
    title: 'Cargo Transport',
    description: 'Reliable and secure transportation solutions for all types of cargo across local and international routes.',
    longDescription: 'Our cargo transport services provide comprehensive logistics solutions designed to meet the diverse needs of modern businesses. With a fleet of modern vehicles and experienced drivers, we ensure your cargo reaches its destination safely and on time.',
    benefits: [
      'Secure & Timely Delivery',
      'Nationwide Coverage',
      'Real-time GPS Tracking',
      '24/7 Customer Support',
      'Flexible Scheduling',
      'Insurance Coverage'
    ],
    features: [
      {
        title: 'Nationwide Delivery',
        description: 'Comprehensive coverage across all regions with reliable delivery networks.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        title: 'GPS Fleet Tracking',
        description: 'Real-time monitoring of your shipments with advanced GPS technology.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
          </svg>
        )
      },
      {
        title: 'Express & Scheduled Shipping',
        description: 'Flexible shipping options to meet your urgent and planned delivery needs.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      }
    ],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  'warehouse-services': {
    title: 'Warehouse Services',
    description: 'State-of-the-art warehousing facilities with advanced inventory management and security systems.',
    longDescription: 'Our warehouse services offer secure, efficient storage solutions with advanced inventory management systems. We provide flexible storage options, real-time inventory tracking, and seamless integration with your supply chain. Our facilities are equipped with modern technology to ensure optimal storage conditions and maximum security for your valuable inventory.',
    benefits: [
      'Climate-Controlled Storage',
      'Real-time Inventory Tracking',
      'Advanced Security Systems',
      'Flexible Storage Options',
      'Pick & Pack Services',
      'Inventory Management'
    ],
    features: [
      {
        title: 'Climate-Controlled Storage',
        description: 'Maintain optimal conditions for temperature-sensitive products.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      },
      {
        title: 'Real-time Inventory Tracking',
        description: 'Monitor your inventory levels with precision and accuracy.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        )
      },
      {
        title: 'Advanced Security Systems',
        description: '24/7 monitoring and security to protect your valuable inventory.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116493-6b61d3c1d0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586528116493-6b61d3c1d0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  'cross-border-logistics': {
    title: 'Cross-Border Logistics',
    description: 'Expert handling of international shipments with customs clearance and regulatory compliance.',
    longDescription: 'Navigate international trade complexities with our expert cross-border logistics services. We handle customs clearance, documentation, and regulatory compliance to ensure smooth international shipments. Our team of specialists understands the intricacies of international trade and works diligently to minimize delays and ensure compliance with all regulations.',
    benefits: [
      'Customs Clearance',
      'Documentation Support',
      'Regulatory Compliance',
      'International Shipping',
      'Trade Consulting',
      'Risk Management'
    ],
    features: [
      {
        title: 'Customs Clearance',
        description: 'Streamlined customs procedures with expert documentation support.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        title: 'Documentation Support',
        description: 'Complete assistance with all required international shipping documents.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        title: 'Regulatory Compliance',
        description: 'Ensure adherence to all international trade regulations and requirements.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  'fleet-management': {
    title: 'Fleet Management',
    description: 'Comprehensive fleet solutions including maintenance, tracking, and optimization for maximum efficiency.',
    longDescription: 'Optimize your fleet operations with our comprehensive management services. From vehicle maintenance to route optimization, we help you maximize efficiency and reduce operational costs. Our fleet management solutions provide real-time insights and analytics to improve performance and ensure compliance with industry standards.',
    benefits: [
      'Vehicle Maintenance',
      'Route Optimization',
      'Driver Management',
      'Fuel Management',
      'Performance Analytics',
      'Compliance Monitoring'
    ],
    features: [
      {
        title: 'Vehicle Maintenance',
        description: 'Proactive maintenance scheduling to keep your fleet in optimal condition.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      },
      {
        title: 'Route Optimization',
        description: 'AI-powered route planning to minimize fuel costs and delivery times.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
          </svg>
        )
      },
      {
        title: 'Performance Analytics',
        description: 'Comprehensive reporting and analytics to optimize fleet performance.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      }
    ],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heroImage: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  'customs-clearance': {
    title: 'Customs Clearance',
    description: 'Streamlined customs procedures with expert documentation and regulatory compliance support.',
    longDescription: 'Simplify your customs processes with our expert clearance services. We handle all documentation, regulatory compliance, and customs procedures to ensure smooth import/export operations. Our team of customs specialists stays updated with the latest regulations to provide efficient and compliant clearance services.',
    benefits: [
      'Documentation Support',
      'Regulatory Compliance',
      'Import/Export Services',
      'Duty Calculation',
      'Risk Assessment',
      '24/7 Support'
    ],
    features: [
      {
        title: 'Documentation Support',
        description: 'Complete assistance with all required customs documentation.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        title: 'Duty Calculation',
        description: 'Accurate calculation of duties and taxes for your shipments.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: 'Risk Assessment',
        description: 'Comprehensive risk evaluation to prevent customs delays.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116493-6b61d3c1d0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586528116493-6b61d3c1d0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  'last-mile-delivery': {
    title: 'Last-Mile Delivery',
    description: 'Precision delivery services ensuring your packages reach their final destination on time, every time.',
    longDescription: 'Complete your delivery chain with our precision last-mile delivery services. We ensure your packages reach their final destination efficiently and on schedule, enhancing customer satisfaction. Our last-mile solutions are designed to handle the critical final leg of the delivery process with maximum efficiency and reliability.',
    benefits: [
      'Same-Day Delivery',
      'Real-time Tracking',
      'Proof of Delivery',
      'Flexible Scheduling',
      'Customer Notifications',
      'Returns Management'
    ],
    features: [
      {
        title: 'Same-Day Delivery',
        description: 'Express delivery options for urgent shipments and time-sensitive packages.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        title: 'Real-time Tracking',
        description: 'Live tracking updates so you and your customers know exactly where packages are.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
          </svg>
        )
      },
      {
        title: 'Proof of Delivery',
        description: 'Digital confirmation and signature capture for complete delivery verification.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
};

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData[params.slug as keyof typeof servicesData];
  
  if (!service) {
    return {
      title: 'Service Not Found | IHAME Logistics & Supply LTD',
    };
  }

  return {
    title: `${service.title} | IHAME Logistics & Supply LTD`,
    description: `Learn more about IHAME's ${service.title.toLowerCase()} offering: ${service.description}`,
    keywords: `${service.title.toLowerCase()}, logistics, supply chain, IHAME, ${service.benefits.join(', ')}`,
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceDetailHero 
        title={service.title}
        description={service.description}
        image={service.heroImage}
      />
      <ServiceDescription 
        title={service.title}
        description={service.longDescription}
        image={service.image}
        benefits={service.benefits}
      />
      <ServiceFeatures 
        title={service.title}
        features={service.features}
      />
      <ServiceTestimonial />
      <ServiceCta 
        title={service.title}
      />
    </main>
  );
} 