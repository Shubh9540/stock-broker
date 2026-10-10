import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaBuilding, FaChartBar, FaChartLine, FaCog, FaHandHoldingUsd, FaSearchDollar } from 'react-icons/fa';
import { ServicesGridProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaChartLine':
      return <FaChartLine />;
    case 'FaHandHoldingUsd':
      return <FaHandHoldingUsd />;
    case 'FaBuilding':
      return <FaBuilding />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaSearchDollar':
      return <FaSearchDollar />;
    case 'FaCog':
      return <FaCog />;
    default:
      return null;
  }
};

export const ServicesGrid = ({ data }: ServicesGridProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#f8fbff] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
            <span className="text-sm font-bold text-[#0b6cf0]">{data.subtitle}</span>
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
            <span className="block">{data.title1}</span>
            <span className="mt-3 block whitespace-nowrap text-[#0b6cf0]">{data.title2}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <article key={service.id} className="group overflow-hidden rounded-lg border border-[#dce7f3] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[8/3] w-full overflow-hidden">
                <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="flex gap-3 p-4 sm:p-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-[#edf4ff] text-3xl text-[#0b6cf0]">
                  {renderIcon(service.icon)}
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <Link href={service.url}>
                    <h3 className="text-lg font-extrabold leading-tight text-[#061a3a] transition-colors group-hover:text-[#0b6cf0]">{service.title}</h3>
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{service.description}</p>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <span className="mb-1 block h-0.5 w-8 bg-[#0b6cf0]" />
                    <Link href={service.url} className="inline-flex items-center gap-2 text-sm font-bold text-[#0b6cf0] transition-all hover:gap-3">
                      <span>{data.linkText}</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
