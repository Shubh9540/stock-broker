'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="relative z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <Link href="/" className="flex items-center shrink-0">
          <img src={data.logo} alt={data.logoAlt} className="h-12 w-auto object-contain lg:h-20" />
        </Link>

        <nav className="hidden h-full flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative flex h-full items-center gap-2 text-sm font-semibold transition-colors ${isActive ? 'text-[#0b6cf0]' : 'text-[#061a3a] hover:text-[#0b6cf0]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-xs" />}
                {isActive && <span className="absolute inset-x-0 bottom-5 h-0.5 bg-[#0b6cf0]" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          {data.contactButton && (
            <Link href={data.contactButton.url} className="hidden items-center justify-center gap-3 rounded-lg bg-[#0b6cf0] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#0757c7] lg:flex">
              {data.contactButton.text}
              <FaArrowRight className="text-xs" />
            </Link>
          )}

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-md text-2xl text-[#061a3a] transition-colors hover:bg-[#edf4ff] lg:hidden">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col border-t border-[#dfe9f6] bg-white p-4 shadow-xl lg:hidden">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-[#dfe9f6] px-4 py-4 text-sm font-semibold transition-colors ${isActive ? 'text-[#0b6cf0]' : 'text-[#061a3a] hover:text-[#0b6cf0]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-xs" />}
              </Link>
            );
          })}
          {data.contactButton && (
            <Link href={data.contactButton.url} onClick={() => setMobileMenuOpen(false)} className="mx-4 mt-6 flex items-center justify-center gap-3 rounded-lg bg-[#0b6cf0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0757c7]">
              {data.contactButton.text}
              <FaArrowRight className="text-xs" />
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
