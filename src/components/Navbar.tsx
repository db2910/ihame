'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Track Shipment", href: "/track" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-white border-b border-[#E0E0E0] shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <Image src="/logo.jpg" alt="IHAME Logistics Logo" width={80} height={56} className="w-20 h-14 rounded shadow-md object-cover" />
            <span className="ml-3 font-bold text-lg tracking-wide text-[#2875B4] group-hover:text-[#7AB648] transition-colors">IHAME LOGISTICS</span>
          </Link>
        </div>
        {/* Hamburger only when menu is closed */}
        {!open && (
          <button
            aria-label="Open menu"
            className="relative w-10 h-10 flex flex-col justify-center items-center group focus:outline-none"
            onClick={() => setOpen(true)}
          >
            <span className="block absolute h-0.5 w-7 bg-[#1A1A1A] rounded transition-all duration-300 ease-in-out -translate-y-2.5"></span>
            <span className="block absolute h-0.5 w-7 bg-[#1A1A1A] rounded transition-all duration-300 ease-in-out"></span>
            <span className="block absolute h-0.5 w-7 bg-[#1A1A1A] rounded transition-all duration-300 ease-in-out translate-y-2.5"></span>
          </button>
        )}
      </nav>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-tr from-[#1A1A2E] via-[#16213E] to-[#2875B4] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-40 ${open ? "translate-y-0" : "-translate-y-full"}`}
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