import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PricingSection } from '@/components/sections/PricingSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function PricingPage() {
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
          title: "Our Packages",
          bgImage: commonData.aboutBreadcrumb?.bgImage ?? '',
          paths: [
            { id: "breadcrumb-pricing-home", label: "Home", url: "/" },
            { id: "breadcrumb-pricing-current", label: "Our Packages" }
          ]
        }} />
      </div>
      
      {/* Pricing Content */}
      <PricingSection data={sectionData.Pricing?.variants?.StockBrokerPricing1} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.StockBrokerCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
