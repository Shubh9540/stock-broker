import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaChartBar, FaChartPie, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { WhyChooseUsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaChartPie':
      return <FaChartPie />;
    case 'FaUsers':
      return <FaUsers />;
    default:
      return null;
  }
};

export const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 lg:py-12">
      <div className="absolute inset-0">
        <Image
          src={data.imageMain}
          alt={data.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-right opacity-25 md:opacity-40 lg:opacity-100"
        />
      </div>
      <div className="absolute inset-0 bg-white/25 lg:bg-gradient-to-r lg:from-white/80 lg:via-white/55 lg:to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:px-6 lg:min-h-[25rem] lg:grid-cols-3 lg:items-center lg:gap-6 lg:px-8">
        <div className="flex flex-col items-start">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-7 bg-[#0b6cf0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0758c9]">
              {data.subtitle}
            </span>
          </div>

          <h2 className="max-w-md text-3xl font-extrabold leading-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
            {data.title1}{' '}
            <span className="text-[#0b6cf0]">{data.title2}</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#49618a] sm:text-base">
            {data.description}
          </p>

          <Link
            href={data.button.url}
            className="mt-6 inline-flex w-full items-center justify-center gap-4 rounded-lg bg-[#0758c9] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0758c9]/20 transition-colors duration-300 hover:bg-[#0b6cf0] sm:w-auto"
          >
            {data.button.text}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="flex flex-col gap-5 rounded-2xl bg-white/80 p-4 backdrop-blur-sm sm:p-6 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          {data.features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-xl text-[#0758c9]">
                {renderIcon(feature.icon)}
              </div>
              <div className="pt-1">
                <h3 className="text-base font-extrabold text-[#061a3a]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-[#49618a]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
};
