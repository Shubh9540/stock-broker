'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChartBar, FaChartLine, FaPhoneAlt, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { AboutProgressCircleProps, AboutUsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaChartLine':
      return <FaChartLine />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    default:
      return null;
  }
};

export const AboutProgressCircle = ({ item, isVisible }: AboutProgressCircleProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (displayValue / 100) * circumference;

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame = 0;
    const animationDuration = 1200;
    const startTime = performance.now();

    const animateProgress = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      setDisplayValue(Math.round(item.percentage * progress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateProgress);
      }
    };

    animationFrame = window.requestAnimationFrame(animateProgress);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [isVisible, item.percentage]);

  return (
    <div className="flex items-center gap-4">
      <div
        className="relative h-20 w-20 shrink-0"
        role="img"
        aria-label={`${item.percentage}% ${item.label}`}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="7" className="stroke-[#dfe9f6]" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            className="stroke-[#0b6cf0]"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-base font-extrabold text-[#061a3a]">
          {displayValue}%
        </span>
      </div>
      <p className="max-w-36 text-base font-medium leading-snug text-[#061a3a]">{item.label}</p>
    </div>
  );
};

export const AboutUsSection = ({ data, hideButton = false }: AboutUsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-8 lg:py-12">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative mx-auto w-full max-w-xl pb-28 lg:pb-24">
          <div className="relative z-10 aspect-[5/6] w-3/4 overflow-hidden rounded-lg">
            <img src={data.imageMain} alt={data.imageMainAlt} className="h-full w-full object-cover object-top" />
          </div>

          <div className="absolute bottom-0 right-0 z-20 aspect-[4/5] w-3/5 overflow-hidden rounded-lg border-4 border-white bg-white">
            <img src={data.imageSecondary} alt={data.imageSecondaryAlt} className="h-full w-full object-cover object-top" />
          </div>

          <div className="absolute left-2/3 top-12 z-30 w-32 -translate-x-1/2 rounded-md border border-[#4f91ff] bg-[#061a3a] p-4 text-white shadow-xl sm:top-16 sm:w-36">
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

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
            {data.description}
          </p>

          <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {data.progressItems.map((item, index) => (
              <div key={item.id} className={index > 0 ? 'sm:border-l sm:border-[#dfe9f6] sm:pl-6' : ''}>
                <AboutProgressCircle item={item} isVisible={isVisible} />
              </div>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {data.features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3 text-sm font-medium text-[#061a3a] sm:text-base">
                <span className="flex w-5 shrink-0 justify-center text-lg text-[#0b6cf0]">{renderIcon(feature.icon)}</span>
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {!hideButton && (
              <Link
                href={data.button.url}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0b6cf0] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0757c7] sm:w-auto"
              >
                {data.button.text}
                <FaArrowRight className="text-xs" />
              </Link>
            )}

            {!hideButton && <div className="hidden h-10 w-px bg-[#dfe9f6] sm:block" />}

            <a href={data.support.url} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] text-lg text-[#0b6cf0]">
                {renderIcon(data.support.icon)}
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-[#64748b]">{data.support.label}</span>
                <strong className="text-base text-[#061a3a]">{data.support.value}</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
