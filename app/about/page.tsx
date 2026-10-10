import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutPageIntro } from '@/components/sections/AboutPageIntro';
import { CtaSection } from '@/components/sections/CtaSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} />
        <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} />
      </div>
      
      {/* About Page Intro */}
      <AboutPageIntro data={sectionData.AboutPageIntro?.variants?.StockBrokerAboutPageIntro1} />

       {/* Why Choose Us Section */}
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.StockBrokerAboutWhyChooseUs1} />
      {/* Process Section */}
      <ProcessSection data={sectionData.Process?.variants?.StockBrokerProcess1} />

     
      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.StockBrokerCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
