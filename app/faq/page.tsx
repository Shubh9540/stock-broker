import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function FaqPage() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[#f5f8fc] min-h-screen flex flex-col">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} />
        <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
        <Breadcrumb data={{
          title: "FAQ",
          bgImage: commonData.aboutBreadcrumb?.bgImage ?? '',
          paths: [
            { id: "breadcrumb-faq-home", label: "Home", url: "/" },
            { id: "breadcrumb-faq-current", label: "FAQ" }
          ]
        }} />
      </div>
      
      {/* FAQ Content */}
      <FaqSection data={sectionData.Faq?.variants?.StockBrokerFaq1} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.StockBrokerCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
