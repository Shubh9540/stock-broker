'use client';

import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const FaqSection = ({ data }: { data?: FaqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default open second item like screenshot

  if (!data?.faqs?.length) return null;

  return (
    <section className="relative w-full bg-[#f5f8fc] pt-16 pb-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-60px] top-[40px] h-[300px] w-[300px] rounded-full bg-[#edf4ff] blur-[100px]" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-4 md:px-6">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="relative pt-6">
            {data.subtitle && (
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#0b6cf0]" />
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0b6cf0]">
                  {data.subtitle}
                </span>
              </div>
            )}
            
            <h2 className="mb-6 text-[36px] font-extrabold leading-[1.15] text-[#061a3a] md:text-[46px] whitespace-pre-line">
              {data.title1}{'\n'}<span className="text-[#0b6cf0]">{data.title2}</span>
            </h2>
            
            <p className="mb-10 text-[15px] leading-relaxed text-[#64748b]">
              {data.description}
            </p>
            
            {/* Illustration */}
            <div className="relative w-full max-w-[500px]">
              <img 
                src="/portfolio/data analysis/1.webp" 
                alt="FAQ Illustration" 
                className="w-full h-auto object-contain rounded-2xl shadow-sm"
              />
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col gap-3">
            {data.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={faq.id} 
                  className={`flex flex-col overflow-hidden rounded-[12px] shadow-[0_4px_20px_rgba(6,26,58,0.04)] transition-all duration-300 ${isOpen ? 'border border-[#0b6cf0]' : 'border border-[#dfe9f6]'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex items-center justify-between px-6 py-5 text-left transition-colors duration-300 ${
                      isOpen ? 'bg-[#0b6cf0] text-white' : 'bg-white text-[#061a3a] hover:bg-[#f5f8fc]'
                    }`}
                  >
                    <span className="text-[15px] font-bold leading-tight pr-4">
                      {faq.question}
                    </span>
                    <span className={`flex shrink-0 transition-transform duration-300 ${isOpen ? 'text-white rotate-180' : 'text-[#0b6cf0]'}`}>
                      <FaChevronDown className="text-[12px]" />
                    </span>
                  </button>

                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden bg-white">
                      <div className="px-6 py-5 text-[14px] leading-relaxed text-[#64748b] border-t border-[#dfe9f6]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
