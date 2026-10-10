import React from 'react';
import rawData from '@/data/templates.json';
import { StockBrokerTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamSection } from '@/components/sections/TeamSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  const templateData: StockBrokerTemplateData = rawData;
  const sectionData = templateData?.categories?.StockBroker?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.StockBrokerTopBar1} />
      <Header data={sectionData.Header?.variants?.StockBrokerHeader1} />
      <Breadcrumb data={commonData.teamBreadcrumb} />
      <TeamSection data={sectionData.Team?.variants?.StockBrokerTeam1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
