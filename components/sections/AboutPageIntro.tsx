import React from 'react';
import { AboutPageIntroProps } from '@/types/templates.types';

export const AboutPageIntro = ({ data }: AboutPageIntroProps) => {
  if (!data) return null;

  return (
    <section className="w-full overflow-hidden bg-white py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative mx-auto w-full max-w-xl pb-24 sm:pb-28 lg:pb-20">
          <div className="relative z-10 aspect-[5/6] w-3/4 overflow-hidden rounded-lg">
            <img src={data.imageMain} alt={data.imageMainAlt} className="h-full w-full object-cover object-top" />
          </div>

          <div className="absolute bottom-0 right-0 z-20 aspect-[4/5] w-3/5 overflow-hidden rounded-lg border-4 border-white bg-white">
            <img src={data.imageSecondary} alt={data.imageSecondaryAlt} className="h-full w-full object-cover object-top" />
          </div>

          <div className="absolute left-2/3 top-14 z-30 w-32 -translate-x-1/2 rounded-md border border-[#4f91ff] bg-[#061a3a] p-4 text-white shadow-xl sm:top-20 sm:w-36">
            <strong className="block text-4xl font-extrabold leading-none">{data.experienceValue}</strong>
            <span className="mt-2 block text-sm font-semibold leading-snug">{data.experienceLabel}</span>
            <span className="mt-3 block h-0.5 w-10 bg-[#0b6cf0]" />
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
            <span className="text-sm font-medium text-[#061a3a]">{data.subtitle}</span>
          </div>

          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
            <span className="block">{data.title1}</span>
            <span className="text-[#0b6cf0]">{data.highlightedTitle}</span> {data.title2}
          </h2>

          <div className="space-y-4">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph.id} className="text-sm leading-relaxed text-[#475569] sm:text-base">
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
