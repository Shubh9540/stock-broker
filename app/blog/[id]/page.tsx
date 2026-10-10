import React from 'react';
import { StockBrokerTemplateData } from '@/types/templates.types';
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

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  const allBlogs = sectionData.Blogs?.variants?.StockBrokerBlogs1?.blogs || [];
  const currentBlog = allBlogs.find(b => b.url.endsWith(`/${id}`));

  if (!currentBlog) {
    notFound();
  }

  // Get 5 recent blogs, excluding the current one
  const recentBlogs = allBlogs.filter(b => b.id !== currentBlog.id).slice(0, 5);

  // Create breadcrumb data for the specific blog
  const breadcrumbData = {
    title: currentBlog.title,
    bgImage: commonData.aboutBreadcrumb?.bgImage ?? '',
    paths: [
      { id: 'breadcrumb-blog-detail-home', label: 'Home', url: '/' },
      { id: 'breadcrumb-blog-detail-list', label: 'Blog', url: '/blog' },
      { id: 'breadcrumb-blog-detail-current', label: 'Blog Details' }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} logoData={sectionData.Header?.variants?.StockBrokerHeader1} />
      <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <BlogDetailContent blog={currentBlog} recentBlogs={recentBlogs} sidebarCta={sectionData.Blogs?.variants?.StockBrokerBlogs1?.sidebarCta} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
