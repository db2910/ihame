import ContactPage from '@/components/contact/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | IHAME LOGISTICS',
  description:
    'Get in touch with IHAME LOGISTICS for inquiries, support, or partnership opportunities. We are here to help you with all your logistics and supply chain needs.'
};

export default function page() {
  return <ContactPage />;
} 