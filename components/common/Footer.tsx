import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="w-full bg-[#061a3a] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-12">
        <div className="lg:pr-6">
          <Image
            src={data.logo}
            alt={data.logoAlt}
            width={320}
            height={100}
            className="h-auto w-64 object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/75 sm:text-base">
            {data.description}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">{data.quickLinksTitle}</h2>
          <span className="mt-3 block h-1 w-10 bg-[#0b6cf0]" />
          <ul className="mt-5 space-y-3">
            {data.quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-[#36a2ff]"
                >
                  <FaAngleRight className="shrink-0 text-[#1591ff]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">{data.servicesTitle}</h2>
          <span className="mt-3 block h-1 w-10 bg-[#0b6cf0]" />
          <ul className="mt-5 space-y-3">
            {data.servicesLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="flex items-center gap-3 text-sm text-white/75 transition-colors duration-300 hover:text-[#36a2ff]"
                >
                  <FaAngleRight className="shrink-0 text-[#1591ff]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-white/15 lg:pl-8">
          <h2 className="text-lg font-bold">{data.contactTitle}</h2>
          <span className="mt-3 block h-1 w-10 bg-[#0b6cf0]" />
          <ul className="mt-5 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b4a88] text-white">
                <FaMapMarkerAlt />
              </span>
              <span className="pt-1 text-sm leading-6 text-white/75">{data.contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b4a88] text-white">
                <FaPhoneAlt />
              </span>
              <Link href={`tel:${data.contactInfo.phone}`} className="text-sm text-white/75 hover:text-[#36a2ff]">
                {data.contactInfo.phone}
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0b4a88] text-white">
                <FaEnvelope />
              </span>
              <Link href={`mailto:${data.contactInfo.email}`} className="text-sm text-white/75 hover:text-[#36a2ff]">
                {data.contactInfo.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 text-center md:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <p className="text-xs text-white/70 sm:text-sm">{data.copyrightText}</p>

          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {data.legalLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="text-xs text-white/70 transition-colors duration-300 hover:text-[#36a2ff]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {data.socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#168ef5] text-sm text-white transition-colors duration-300 hover:bg-[#0b6cf0]"
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
