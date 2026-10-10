'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChartBar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HeroButtonData, HeroSectionProps } from '@/types/templates.types';

const renderButtonIcon = (button: HeroButtonData) => {
  switch (button.icon) {
    case 'FaArrowRight':
      return <FaArrowRight className="text-xs" />;
    case 'FaChartBar':
      return <FaChartBar className="text-base text-[#4f91ff]" />;
    default:
      return null;
  }
};

export const HeroSection = ({ data }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideCount = data?.slides.length ?? 0;

  const showNextSlide = useCallback(() => {
    if (slideCount < 2) return;
    setCurrentSlide((current) => (current + 1) % slideCount);
  }, [slideCount]);

  const showPreviousSlide = useCallback(() => {
    if (slideCount < 2) return;
    setCurrentSlide((current) => (current - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (!data || isPaused || slideCount < 2) return;

    const timer = window.setInterval(showNextSlide, data.autoplayDelay);
    return () => window.clearInterval(timer);
  }, [data, isPaused, showNextSlide, slideCount]);

  if (!data || slideCount === 0) return null;

  const activeSlide = data.slides[currentSlide];
  const totalSlides = String(slideCount).padStart(2, '0');

  return (
    <section
      className="relative flex min-h-[40rem] w-full items-center overflow-hidden bg-[#061a3a] sm:min-h-[36rem] lg:min-h-[70vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {data.slides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 transition-all duration-1000 ease-out motion-reduce:transition-none ${index === currentSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={index === currentSlide ? slide.imageAlt : ''}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#061a3a]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03132d] via-[#061a3a]/85 to-transparent" />
          <div className="absolute inset-y-0 left-1/4 hidden w-1/3 -skew-x-12 bg-[#08244f]/25 lg:block" />
        </div>
      ))}

      <button
        type="button"
        onClick={showPreviousSlide}
        aria-label={data.previousSlideLabel}
        className="absolute left-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#061a3a]/30 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#0b6cf0] hover:bg-[#0b6cf0] sm:left-6 sm:h-12 sm:w-12"
      >
        <FaChevronLeft className="text-sm" />
      </button>

      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center gap-8 px-12 py-8 sm:px-16 sm:py-10 lg:px-16 lg:py-8">
        <div className="hidden w-20 shrink-0 flex-col items-start self-center lg:flex">
          <span className="text-4xl font-extrabold leading-none text-[#4f91ff]">{activeSlide.number}</span>
          <div className="mt-3 flex items-center gap-2 text-base font-medium text-white/80">
            <span>{data.counterSeparator}</span>
            <span>{totalSlides}</span>
          </div>
          <span className="mt-4 h-40 w-px bg-[#4f91ff]" />
        </div>

        <div className="relative min-h-96 flex-1">
          {data.slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex max-w-2xl flex-col justify-center transition-all duration-700 ease-out motion-reduce:transition-none ${index === currentSlide ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}
            >
              <h1 className="mb-5 text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block">{slide.titleLine1}</span>
                <span className="block">
                  {slide.titleLine2} <span className="text-[#4f91ff]">{slide.highlightedTitle}</span>
                </span>
                <span className="block">{slide.titleLine3}</span>
              </h1>

              <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                {slide.description}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href={slide.primaryButton.url}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#0b6cf0] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0757c7] sm:w-auto"
                >
                  {slide.primaryButton.text}
                  {renderButtonIcon(slide.primaryButton)}
                </Link>

                {slide.secondaryButton && (
                  <Link
                    href={slide.secondaryButton.url}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-white/60 bg-[#061a3a]/20 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4f91ff] hover:bg-white/10 sm:w-auto"
                  >
                    {renderButtonIcon(slide.secondaryButton)}
                    {slide.secondaryButton.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={showNextSlide}
        aria-label={data.nextSlideLabel}
        className="absolute right-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#061a3a]/30 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#0b6cf0] hover:bg-[#0b6cf0] sm:right-6 sm:h-12 sm:w-12"
      >
        <FaChevronRight className="text-sm" />
      </button>
    </section>
  );
};
