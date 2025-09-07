'use client';

import { useEffect, useState } from 'react';

const locations = [
  { city: 'Kigali', country: 'Rwanda', flag: '🇷🇼' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪' },
  { city: 'Guangzhou & Yiwu', country: 'China', flag: '🇨🇳' },
  { city: 'Goma', country: 'DRC', flag: '🇨🇩' }
];

export default function LocationsTicker() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] text-white py-1 overflow-hidden relative">
      <div className="relative overflow-hidden">
        <div 
          className={`flex items-center space-x-8 whitespace-nowrap transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: 'scroll 30s linear infinite'
          }}
        >
          {/* Title */}
          <div className="flex items-center space-x-2 text-sm font-semibold">
            <span>LOCATIONS WE OPERATE IN:</span>
          </div>
          
          {/* Locations */}
          {locations.map((location, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm font-medium">
              <span className="text-base">{location.flag}</span>
              <span>{location.city}</span>
              <span className="text-xs opacity-80">({location.country})</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
