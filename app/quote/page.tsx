import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';
import { TopBar } from '@/components/common/TopBar';

export const dynamic = 'force-dynamic';

export default function QuotePage() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} />
      <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
      <Breadcrumb data={{
        title: "Get A Quotes",
        bgImage: commonData.aboutBreadcrumb?.bgImage,
        paths: [
          { label: "Home", url: "/" },
          { label: "Get A Quotes" }
        ]
      }} />
      
      <QuoteSection data={sectionData.Quote?.variants?.StockBrokerQuote1} />
      <CtaSection data={sectionData.Cta?.variants?.StockBrokerCta1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
