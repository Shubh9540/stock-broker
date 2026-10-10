import React from 'react';
import { BreadcrumbData, StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { CtaSection } from '@/components/sections/CtaSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  const serviceDetailData = sectionData.ServiceDetails?.variants?.[id];
  const servicesBreadcrumb = commonData.servicesBreadcrumb;
  const homePath = servicesBreadcrumb?.paths[0];
  const servicesPath = servicesBreadcrumb?.paths[1];

  if (!serviceDetailData || !servicesBreadcrumb || !homePath || !servicesPath) return null;

  const dynamicBreadcrumb: BreadcrumbData = {
    title: serviceDetailData.breadcrumbTitle,
    bgImage: servicesBreadcrumb.bgImage,
    paths: [
      { ...homePath, id: 'breadcrumb-service-detail-home' },
      { ...servicesPath, id: 'breadcrumb-service-detail-list', url: '/services' },
      { id: 'breadcrumb-service-detail-current', label: serviceDetailData.breadcrumbLabel }
    ]
  };

  return (
    <main className="bg-[#f5f8fc] min-h-screen flex flex-col">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} />
        <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
        <Breadcrumb data={dynamicBreadcrumb} />
      </div>
      
      {/* Service Detail Content */}
      <ServiceDetailContent data={serviceDetailData} />

      {/* CTA Section */}
      <CtaSection data={sectionData.Cta?.variants?.StockBrokerCta1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
