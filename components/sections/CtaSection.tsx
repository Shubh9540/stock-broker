import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { CtaSectionProps } from '@/types/templates.types';

export const CtaSection = ({ data }: CtaSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative flex min-h-[28rem] w-full items-center overflow-hidden bg-[#061a3a] py-12 lg:py-16">
      <Image
        src={data.image}
        alt={data.imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#061a3a]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03152f]/95 via-[#03152f]/75 to-[#03152f]/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
              {data.subtitle}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {data.title1}
            <span className="mt-1 block">
              <span className="text-[#0b6cf0]">{data.title2}</span>{' '}
              {data.title3}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            {data.description}
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Link
              href={data.button1.url}
              className="inline-flex w-full items-center justify-center gap-4 rounded-md bg-[#0b6cf0] px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#0758c9] sm:w-auto"
            >
              {data.button1.text}
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              href={data.button2.url}
              className="inline-flex w-full items-center justify-center gap-4 rounded-md border border-white/70 bg-transparent px-7 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:border-[#0b6cf0] hover:bg-[#0b6cf0] sm:w-auto"
            >
              {data.button2.text}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
