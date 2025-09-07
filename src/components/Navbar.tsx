'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Track Shipment", href: "/track" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.9; // 90vh hero section
      setIsScrolled(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine which logo to show
  const shouldShowWhiteLogo = !isScrolled && pathname !== '/contact';
  const logoSource = shouldShowWhiteLogo ? '/IHAME-LOGO-white.png' : '/IHAME-LOGO-main-logo.png';

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <Image 
              src={logoSource}
              alt="IHAME Logistics Logo" 
              width={300} 
              height={200} 
              className="w-40 h-28 object-contain transition-all duration-300" 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-all duration-300 relative group ${
                pathname === link.href
                  ? 'text-transparent bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text'
                  : isScrolled ? 'text-[#2875B4] hover:text-[#7AB648]' : 'text-white hover:text-[#7AB648]'
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2875B4] to-[#7AB648] rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
        
        {/* Hamburger Menu - Only visible on mobile */}
        <button
          aria-label="Open menu"
          className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center group focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <span className={`block absolute h-0.5 w-7 rounded transition-all duration-300 ease-in-out -translate-y-2.5 drop-shadow-lg ${
            isScrolled ? 'bg-[#2875B4]' : 'bg-white'
          }`}></span>
          <span className={`block absolute h-0.5 w-7 rounded transition-all duration-300 ease-in-out drop-shadow-lg ${
            isScrolled ? 'bg-[#2875B4]' : 'bg-white'
          }`}></span>
          <span className={`block absolute h-0.5 w-7 rounded transition-all duration-300 ease-in-out translate-y-2.5 drop-shadow-lg ${
            isScrolled ? 'bg-[#2875B4]' : 'bg-white'
          }`}></span>
        </button>
      </nav>
      {/* Mobile Overlay - Only visible on mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-tr from-[#1A1A2E] via-[#16213E] to-[#2875B4] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-40 ${open ? "translate-y-0" : "-translate-y-full"}`}
        aria-hidden={!open}
      >
        {/* X icon in overlay */}
        <button
          aria-label="Close menu"
          className="absolute top-6 right-8 w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={() => setOpen(false)}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="6" y1="6" x2="18" y2="18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="6" x2="6" y2="18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
        {/* Logo centered above links */}
        <div className="mb-12">
          <Image 
            src={logoSource}
            alt="IHAME Logistics Logo" 
            width={300} 
            height={200} 
            className="w-40 h-28 object-contain" 
          />
        </div>
        <ul className="space-y-8">
          {navLinks.map((link, idx) => (
            <li
              key={link.name}
              style={{
                transitionDelay: open ? `${0.15 + idx * 0.1}s` : "0s",
              }}
              className={`text-3xl font-semibold opacity-0 transform -translate-x-8 transition-all duration-500 ${open ? "opacity-100 translate-x-0" : ""}`}
            >
              <Link
                href={link.href}
                className="focus:outline-none focus:underline text-white transition bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-700"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Blur background when menu is open */}
      {open && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20 z-30 transition-opacity duration-300" aria-hidden="true"></div>
      )}
    </header>
  );
};

export default Navbar; 