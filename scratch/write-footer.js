const fs = require('fs');

const code = `
'use client';
import React, { useEffect, useState } from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight, FaArrowUp, FaTwitter } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    case 'FaTwitter': return <FaTwitter />;
    default: return <FaFacebookF />;
  }
};

const RingsDivider = ({ className = "" }: { className?: string }) => (
  <div className={\`flex items-center justify-center \${className}\`}>
    <div className="h-px bg-[#c49250] flex-1"></div>
    <div className="px-2 text-[#c49250]">
      <svg viewBox="0 0 24 16" width="24" height="16">
        <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 2 L13 2 L12 0 Z" fill="currentColor" />
      </svg>
    </div>
    <div className="h-px bg-[#c49250] flex-1"></div>
  </div>
);

export const Footer = ({ data }: { data?: FooterData }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer className="w-full relative mt-16 bg-[#2d171b] overflow-hidden">
      
      {/* Main Content Area */}
      <div className="pt-16 pb-12 relative z-10">
        <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 lg:divide-x lg:divide-[#c49250]/20">
            
            {/* Column 1: Brand & Contact */}
            <div className="pr-0 lg:pr-8">
              <h2 className="text-4xl font-serif font-bold mb-4">
                <span className="text-white">Wed</span><span className="text-[#d6aeb9]">Bliss</span>
              </h2>
              
              <RingsDivider className="mb-6 w-[80%]" />
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {data.description}
              </p>
              
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5a3035] flex items-center justify-center text-[#d6aeb9] shrink-0 mt-1 shadow-md">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-snug">{data.contactInfo.address}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5a3035] flex items-center justify-center text-[#d6aeb9] shrink-0 shadow-md">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{data.contactInfo.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5a3035] flex items-center justify-center text-[#d6aeb9] shrink-0 mt-1 shadow-md">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-snug">
                      {data.contactInfo.phone}<br/>
                      Support: {data.contactInfo.phone}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 2: Our Services */}
            <div className="pl-0 lg:pl-8">
              <h3 className="text-xl font-serif text-white mb-4">Our Services</h3>
              <div className="w-8 h-[2px] bg-[#c49250] mb-8"></div>
              <ul className="flex flex-col gap-4">
                {data.servicesLinks.map(link => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-3">
                      <FaChevronRight className="text-[#c49250] text-[10px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div className="pl-0 lg:pl-8">
              <h3 className="text-xl font-serif text-white mb-4">Useful Links</h3>
              <div className="w-8 h-[2px] bg-[#c49250] mb-8"></div>
              <ul className="flex flex-col gap-4">
                {data.quickLinks.map(link => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-3">
                      <FaChevronRight className="text-[#c49250] text-[10px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Frequent Questions */}
            <div className="pl-0 lg:pl-8">
              <h3 className="text-xl font-serif text-white mb-4">Frequent Questions</h3>
              <div className="w-8 h-[2px] bg-[#c49250] mb-8"></div>
              <ul className="flex flex-col gap-4">
                {(data.faqLinks || []).map((link: any) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-3">
                      <FaChevronRight className="text-[#c49250] text-[10px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
          
          {/* Bottom Divider */}
          <div className="mt-16 mb-8">
            <RingsDivider />
          </div>

          {/* Copyright Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-sm text-center md:text-left flex-1 md:text-center ml-0 md:ml-12">
              {data.copyrightText}
            </p>
            <div className="flex items-center gap-3">
              {data.socialLinks.map(social => (
                <Link 
                  key={social.id} 
                  href={social.url} 
                  className="w-9 h-9 rounded-full bg-[#5a3035] flex items-center justify-center text-white hover:bg-[#c49250] transition-colors shadow-sm"
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#5a3035] text-white flex items-center justify-center shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
};
`;

fs.writeFileSync('d:\\\\wedding-planner\\\\components\\\\common\\\\Footer.tsx', code);
console.log('Footer updated successfully.');
