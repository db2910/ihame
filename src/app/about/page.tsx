import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import MissionVisionValues from '@/components/about/MissionVisionValues';
import CompanyTimeline from '@/components/about/CompanyTimeline';
import ImpactScale from '@/components/about/ImpactScale';
import AboutTestimonial from '@/components/about/AboutTestimonial';
import AboutCta from '@/components/about/AboutCta';

export const metadata: Metadata = {
  title: 'About Us | IHAME Logistics & Supply LTD',
  description: 'Learn about IHAME\'s mission, team, and journey to becoming a trusted name in logistics.',
  keywords: 'about IHAME, logistics company, mission, vision, values, team, timeline, impact',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionVisionValues />
      <CompanyTimeline />
      <ImpactScale />
      <AboutTestimonial />
      <AboutCta />
    </main>
  );
} 