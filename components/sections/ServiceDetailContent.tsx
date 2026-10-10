import React from 'react';
import {
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaCog,
  FaHandHoldingUsd,
  FaLaptop,
  FaSearchDollar,
  FaShieldAlt,
  FaUserTie,
} from 'react-icons/fa';
import { ServiceDetailContentProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaChartLine':
      return <FaChartLine />;
    case 'FaLaptop':
      return <FaLaptop />;
    case 'FaSearchDollar':
      return <FaSearchDollar />;
    case 'FaUserTie':
      return <FaUserTie />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaHandHoldingUsd':
      return <FaHandHoldingUsd />;
    case 'FaBuilding':
      return <FaBuilding />;
    case 'FaCog':
      return <FaCog />;
    default:
      return null;
  }
};

export const ServiceDetailContent = ({ data }: ServiceDetailContentProps) => {
  if (!data) return null;

  return (
    <>
      <section className="w-full bg-white py-8 lg:py-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#edf4ff]">
            <img src={data.imageMain} alt={data.imageMainAlt} className="h-full w-full object-cover" />
          </div>

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#0b6cf0]" />
              <span className="text-sm font-bold text-[#0b6cf0]">{data.overviewLabel}</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
              <span className="block">{data.title1}</span>
              <span className="text-[#0b6cf0]">{data.title2}</span>
            </h1>

            <div className="mt-5 space-y-4">
              {data.overviewText.map((paragraph) => (
                <p key={paragraph.id} className="text-sm leading-relaxed text-[#526784] sm:text-base">
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f2f7ff] py-8 lg:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-0.5 w-8 bg-[#0b6cf0]" />
              <span className="text-sm font-bold text-[#0b6cf0]">{data.featuresLabel}</span>
              <span className="h-0.5 w-8 bg-[#0b6cf0]" />
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#061a3a] sm:text-4xl">
              {data.featuresTitle1} <span className="text-[#0b6cf0]">{data.featuresTitle2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.features.map((feature) => (
              <article key={feature.id} className="rounded-lg border border-[#dce7f3] bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f2ff] text-2xl text-[#0b6cf0]">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="mt-4 text-base font-extrabold text-[#061a3a]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-8 lg:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-0.5 w-8 bg-[#0b6cf0]" />
              <span className="text-sm font-bold text-[#0b6cf0]">{data.benefitsLabel}</span>
              <span className="h-0.5 w-8 bg-[#0b6cf0]" />
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#061a3a] sm:text-4xl">
              {data.benefitsTitle1} <span className="text-[#0b6cf0]">{data.benefitsTitle2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="aspect-[16/9] overflow-hidden rounded-lg bg-[#edf4ff]">
              <img src={data.benefitsImage} alt={data.benefitsImageAlt} className="h-full w-full object-cover" />
            </div>

            <div className="space-y-4">
              {data.benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-lg text-[#0b6cf0]" />
                  <span className="text-sm font-medium leading-relaxed text-[#526784] sm:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
