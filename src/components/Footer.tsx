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
            <a href="#" aria-label="LinkedIn" className="hover:text-[#7AB648] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#7AB648] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#7AB648] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#7AB648] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-[#7AB648] py-6 border-t border-[#22223B]">
        © IHAME LOGISTICS & SUPPLY LTD {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 