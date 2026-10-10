import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function BlogsPage() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  // Let's create a breadcrumb for the blogs page
  const breadcrumbData = {
    title: 'Our Blogs',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Blog' }
    ]
  };

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} logoData={sectionData.Header?.variants?.StockBrokerHeader1} />
      <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      {/* Blogs Section with isPage=true */}
      <BlogsSection data={sectionData.Blogs?.variants?.StockBrokerBlogs1} isPage={true} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
