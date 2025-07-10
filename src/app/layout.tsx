import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "IHAME LOGISTICS & SUPPLY LTD",
  description: "Your Order, Our Responsibility."
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IHAME LOGISTICS & SUPPLY LTD',
  url: 'https://ihame-logistics.com/',
  logo: 'https://ihame-logistics.com/logo.png', // Replace with your actual logo URL
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-890',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.facebook.com/ihamelogistics',
    'https://www.twitter.com/ihamelogistics',
    'https://www.linkedin.com/company/ihamelogistics',
  ],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#1A1A2E]">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...jsonLd, logo: '/logo.jpg' }) }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
