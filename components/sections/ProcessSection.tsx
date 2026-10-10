import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { FiBarChart2, FiEdit3, FiTarget, FiUserCheck } from 'react-icons/fi';
import { ProcessSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiEdit3':
      return <FiEdit3 />;
    case 'FiUserCheck':
      return <FiUserCheck />;
    case 'FiBarChart2':
      return <FiBarChart2 />;
    case 'FiTarget':
      return <FiTarget />;
    default:
      return null;
  }
};

export const ProcessSection = ({ data }: ProcessSectionProps) => {
  if (!data) return null;

  return (
    <section id="how-it-works" className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-7 bg-[#0b6cf0]" />
            <span className="text-xs font-bold text-[#0758c9]">
              {data.subtitle}
            </span>
            <span className="h-0.5 w-7 bg-[#0b6cf0]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#061a3a] md:text-4xl">
            {data.title1}{' '}
            <span className="text-[#0b6cf0]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#49618a]">
            {data.description}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {data.steps.map((step, index) => (
            <div key={step.id} className="group relative h-full">
              <article className="h-full overflow-hidden rounded-md border border-[#dbe7f7] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b6cf0]/10">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative px-5 pb-6 pt-9">
                  <div className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#0758c9] text-2xl text-white shadow-md">
                    {renderIcon(step.icon)}
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="pt-0.5 text-base font-bold text-[#9aa9c1]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#061a3a]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#49618a]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {index < data.steps.length - 1 && (
                <div className="absolute -right-10 top-36 z-20 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-[#cfe0f7] bg-white text-xs text-[#0b6cf0] lg:flex">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
