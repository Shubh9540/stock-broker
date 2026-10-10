import React from 'react';
import { BreadcrumbData, StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  const blogDetailData = sectionData.BlogDetails?.variants?.[id];

  if (!blogDetailData) {
    notFound();
  }

  const blogsBreadcrumb = commonData.blogsBreadcrumb;
  const homePath = blogsBreadcrumb?.paths[0];

  if (!blogsBreadcrumb || !homePath) return null;

  const breadcrumbData: BreadcrumbData = {
    title: blogDetailData.breadcrumbTitle,
    bgImage: blogsBreadcrumb.bgImage,
    paths: [
      { ...homePath, id: 'breadcrumb-blog-detail-home' },
      { id: 'breadcrumb-blog-detail-current', label: blogDetailData.breadcrumbLabel }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} logoData={sectionData.Header?.variants?.StockBrokerHeader1} />
      <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <BlogDetailContent data={blogDetailData} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
