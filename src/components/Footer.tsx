import React from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Track Shipment", href: "/track" },
  { name: "Contact Us", href: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#1A1A2E] via-[#16213E] to-[#2875B4] text-white border-t border-[#22223B] mt-8">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center group mb-3">
            <Image src="/IHAME-LOGO-white.png" alt="IHAME Logistics Logo" width={300} height={200} className="w-40 h-28 object-contain" />
          </Link>
          <span className="text-base text-[#E0E0E0]">Your Order, Our Responsibility</span>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <span className="font-semibold mb-3 text-lg text-[#7AB648]">Quick Links</span>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:underline focus:outline-none focus:underline text-base text-[#E0E0E0] hover:text-[#7AB648] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Contact Info & Socials */}
        <div className="flex flex-col space-y-3">
          <span className="font-semibold mb-3 text-lg text-[#7AB648]">Contact Us</span>
          <div className="space-y-2">
            <span className="text-base">General Inquiries: <a href="mailto:info@ihame.rw" className="hover:underline text-[#E0E0E0] hover:text-[#7AB648]">info@ihame.rw</a></span>
            <div className="w-8 h-px bg-[#7AB648]/30"></div>
            <span className="text-base">Quote Requests: <a href="mailto:sales@ihame.rw" className="hover:underline text-[#E0E0E0] hover:text-[#7AB648]">sales@ihame.rw</a></span>
          </div>
          <span className="text-base">Phone: <a href="tel:+250788693747" className="hover:underline text-[#E0E0E0] hover:text-[#7AB648]">+250 788 693 747</a></span>
          <span className="text-base">Location: Kigali, Rwanda</span>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a href="https://www.instagram.com/ihamelogistics?igsh=MXJyd3RhOGNpc2g2bA%3D%3D&utm_source=qr" aria-label="Instagram" className="hover:text-[#7AB648] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://m.me/61571872045511?hash=AbZeoGKlbROMlk9l&source_id=8585216" aria-label="Facebook" className="hover:text-[#7AB648] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@ihame.logistics.supply?_t=ZM-8zS2thnKz14&_r=1" aria-label="TikTok" className="hover:text-[#7AB648] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#7AB648] py-6 border-t border-[#22223B]">
        © IHAME LOGISTICS {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 