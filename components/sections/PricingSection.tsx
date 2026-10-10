'use client';

import React from 'react';
import { PricingData } from '@/types/templates.types';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaPaperPlane, FaCrown, FaGem, FaUsers } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  const icons: Record<string, React.ElementType> = {
    FaPaperPlane,
    FaCrown,
    FaGem,
  };
  const IconComponent = icons[iconName] || FaPaperPlane;
  return <IconComponent />;
};

export const PricingSection = ({ data }: { data?: PricingData }) => {
  if (!data?.plans?.length) return null;

  return (
    <section className="relative w-full bg-[#f5f8fc] pt-16 pb-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-[#edf4ff] blur-[80px]" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-4 md:px-6">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          {data.subtitle && (
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0b6cf0]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0b6cf0]">
                {data.subtitle.replace('//', '').trim()}
              </span>
              <span className="h-px w-8 bg-[#0b6cf0]" />
            </div>
          )}
          <h2 className="text-[32px] font-extrabold leading-tight text-[#061a3a] md:text-[42px]">
            {data.title1} <span className="text-[#0b6cf0]">{data.title2}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-relaxed text-[#64748b]">
            {data.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {data.plans.map((plan) => (
            <div
              key={plan.id}
              className="group relative overflow-hidden rounded-[24px] border border-[#dfe9f6] bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-[#0b6cf0] hover:shadow-[0_20px_40px_rgba(11,108,240,0.25)]"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute right-[-30px] top-[24px] rotate-[45deg] bg-[#0b6cf0] px-10 py-1.5 text-[11px] font-bold text-white shadow-md transition-colors duration-300 group-hover:bg-[#0757c7]">
                  {plan.badge}
                </div>
              )}

              <div className="p-8 lg:p-10">
                {/* Icon */}
                <div className="mb-6 inline-flex h-[60px] w-[60px] items-center justify-center rounded-[16px] bg-[#edf4ff] text-[24px] text-[#0b6cf0] transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                  {renderIcon(plan.icon)}
                </div>

                <h3 className="mb-2 text-[22px] font-extrabold text-[#061a3a] transition-colors duration-300 group-hover:text-white">
                  {plan.name}
                </h3>
                <p className="mb-6 text-[13px] leading-relaxed text-[#64748b] transition-colors duration-300 group-hover:text-white/80">
                  {plan.description}
                </p>

                <div className="mb-6 border-b border-[#dfe9f6] pb-6 transition-colors duration-300 group-hover:border-white/20">
                  <span className="text-[44px] font-extrabold text-[#061a3a] transition-colors duration-300 group-hover:text-white">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-[13px] font-bold text-[#64748b] transition-colors duration-300 group-hover:text-white/80">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-[3px] shrink-0 text-[#0b6cf0] transition-colors duration-300 group-hover:text-white" />
                      <span className="text-[14px] font-medium text-[#061a3a] transition-colors duration-300 group-hover:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer Text */}
                <div className="mb-6 flex items-center justify-center gap-2 border-t border-[#dfe9f6] pt-6 transition-colors duration-300 group-hover:border-white/20">
                  <FaUsers className="text-[#0b6cf0] transition-colors duration-300 group-hover:text-white" />
                  <span className="text-[12px] font-medium text-[#64748b] transition-colors duration-300 group-hover:text-white/80">
                    {plan.footerText}
                  </span>
                </div>

                <Link
                  href={plan.buttonUrl}
                  className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0b6cf0] bg-transparent py-3.5 text-[14px] font-bold text-[#0b6cf0] transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0b6cf0]"
                >
                  {plan.buttonText.replace('->', '').trim()}
                  <FaArrowRight className="text-[12px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
