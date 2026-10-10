import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { EnquirySection } from '@/components/sections/EnquirySection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function EnquiryPage() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} logoData={sectionData.Header?.variants?.StockBrokerHeader1} />
      <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
      <Breadcrumb data={commonData.enquiryBreadcrumb} />
      
      <EnquirySection data={sectionData.enquiry?.variants?.StockBrokerEnquiry1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
