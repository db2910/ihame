import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCta from '@/components/services/ServicesCta';
import LocationsTicker from '@/components/LocationsTicker';

export const metadata: Metadata = {
  title: 'Logistics Services | IHAME Logistics',
  description: 'Explore IHAME\'s full-service logistics offering with visuals and descriptions for cargo transport, warehousing, fleet management, and more.',
  keywords: 'logistics services, cargo transport, warehouse services, fleet management, customs clearance, last-mile delivery',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <LocationsTicker />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
    </main>
  );
} 