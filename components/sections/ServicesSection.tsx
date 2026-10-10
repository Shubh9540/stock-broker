import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaBuilding, FaChartBar, FaChartLine, FaHandHoldingUsd, FaSearchDollar } from 'react-icons/fa';
import { ServiceCardProps, ServicesSectionProps } from '@/types/templates.types';

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
    default:
      return null;
  }
};

export const ServiceCard = ({ service, linkText }: ServiceCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#dfe9f6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-md bg-[#edf4ff] text-2xl text-[#0b6cf0]">
          {renderIcon(service.icon)}
        </div>

        <Link href={service.url} className="transition-colors hover:text-[#0b6cf0]">
          <h3 className="mb-2 text-base font-extrabold text-[#061a3a] transition-colors group-hover:text-[#0b6cf0]">
            {service.title}
          </h3>
        </Link>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-[#64748b]">{service.description}</p>

        <Link href={service.url} className="inline-flex items-center gap-3 text-sm font-bold text-[#0b6cf0] transition-all hover:gap-4">
          <span>{linkText}</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </article>
  );
};

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f8fc] py-8 lg:py-12">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
            <span className="text-sm font-bold text-[#0b6cf0]">{data.subtitle}</span>
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[#0b6cf0]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {data.services.map((service) => (
            <ServiceCard key={service.id} service={service} linkText={data.linkText} />
          ))}
        </div>
      </div>
    </section>
  );
};
