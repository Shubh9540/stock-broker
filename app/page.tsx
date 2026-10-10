import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      {/* Header overlaps Hero via absolute positioning */}
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} />
        <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.StockBrokerHero1} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.StockBrokerAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.StockBrokerServices1} isSlider={true} />
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.StockBrokerWhyChooseUs1} />
      <ProcessSection data={sectionData.Process?.variants?.StockBrokerProcess1} />
      <CtaSection data={sectionData.Cta?.variants?.StockBrokerCta1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.StockBrokerTestimonials1} />
      <BlogsSection data={sectionData.Blogs?.variants?.StockBrokerBlogs1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
