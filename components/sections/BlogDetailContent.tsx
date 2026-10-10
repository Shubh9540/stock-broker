import React from 'react';
import Link from 'next/link';
import {
  FaCalendarAlt,
  FaCheck,
  FaChevronRight,
  FaClock,
  FaQuoteLeft,
  FaUser,
} from 'react-icons/fa';
import { BlogDetailContentProps } from '@/types/templates.types';

export const BlogDetailContent = ({ data }: BlogDetailContentProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,0.8fr)] lg:px-8">
        <article className="min-w-0">
          <span className="inline-flex rounded bg-[#edf4ff] px-3 py-1 text-xs font-bold text-[#0b6cf0]">{data.category}</span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
            <span className="block">{data.title1}</span>
            <span className="text-[#0b6cf0]">{data.title2}</span>
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#526784] sm:text-base">{data.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#526784]">
            <span className="flex items-center gap-2"><FaUser className="text-[#0b6cf0]" />{data.authorLabel}</span>
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#0b6cf0]" />{data.date}</span>
            <span className="flex items-center gap-2"><FaClock className="text-[#0b6cf0]" />{data.readTime}</span>
          </div>

          <div className="mt-6 aspect-[16/9] overflow-hidden rounded-lg bg-[#edf4ff]">
            <img src={data.image} alt={data.imageAlt} className="h-full w-full object-cover" />
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[#526784] sm:text-base">{data.introText}</p>

          {data.articleSections.map((section) => (
            <div key={section.id} className="mt-7">
              <h2 className="text-2xl font-extrabold leading-tight text-[#061a3a] sm:text-3xl">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#526784] sm:text-base">{section.text}</p>
            </div>
          ))}

          <blockquote className="mt-7 flex gap-4 rounded-r-lg border-l-4 border-[#0b6cf0] bg-[#edf5ff] p-5 sm:p-6">
            <FaQuoteLeft className="mt-1 shrink-0 text-2xl text-[#0b6cf0]" />
            <p className="text-base font-semibold leading-relaxed text-[#305d9f] sm:text-lg">{data.quote}</p>
          </blockquote>

          <div className="mt-7">
            <h2 className="text-2xl font-extrabold leading-tight text-[#061a3a] sm:text-3xl">{data.benefitsTitle}</h2>
            <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-lg border border-[#dce7f3] sm:grid-cols-3">
              {data.benefits.map((benefit, index) => (
                <div key={benefit.id} className={`p-5 ${index > 0 ? 'border-t border-[#dce7f3] sm:border-l sm:border-t-0' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0b6cf0] text-sm text-white"><FaCheck /></span>
                    <h3 className="font-extrabold text-[#061a3a]">{benefit.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#526784]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-2xl font-extrabold leading-tight text-[#061a3a] sm:text-3xl">{data.tipsTitle}</h2>
            <div className="mt-5 space-y-4">
              {data.tips.map((tip) => (
                <div key={tip.id} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-sm font-extrabold text-[#0b6cf0]">{tip.number}</span>
                  <p className="pt-2 text-sm leading-relaxed text-[#526784] sm:text-base"><strong className="text-[#061a3a]">{tip.title}</strong> — {tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-7 border-b border-[#dce7f3] pb-7 text-sm leading-relaxed text-[#526784] sm:text-base">{data.closingText}</p>
        </article>

        <aside className="flex w-full flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-lg border border-[#dce7f3] bg-white p-5 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a3a]">{data.recentPostsTitle}</h2>
            <div className="mt-5 divide-y divide-[#e7eef7]">
              {data.recentPosts.map((post) => (
                <Link key={post.id} href={post.url} className="group flex gap-3 py-4 first:pt-0 last:pb-0">
                  <div className="h-16 w-20 shrink-0 overflow-hidden rounded-md bg-[#edf4ff]">
                    <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="line-clamp-2 text-sm font-extrabold leading-tight text-[#061a3a] transition-colors group-hover:text-[#0b6cf0]">{post.title}</h3>
                    <span className="mt-2 flex items-center gap-2 text-xs text-[#64748b]"><FaCalendarAlt className="text-[#0b6cf0]" />{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#dce7f3] bg-white p-5 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#061a3a]">{data.categoriesTitle}</h2>
            <div className="mt-4 divide-y divide-[#e7eef7]">
              {data.categories.map((category, index) => (
                <Link key={category.id} href={category.url} className={`flex items-center justify-between px-2 py-3 text-sm font-medium transition-colors hover:text-[#0b6cf0] ${index === 0 ? 'rounded-md bg-[#edf5ff] font-bold text-[#0b6cf0]' : 'text-[#526784]'}`}>
                  <span>{category.label}</span>
                  <FaChevronRight className="text-xs" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-[#edf6ff] to-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#0b6cf0]" />
              <span className="text-sm font-bold text-[#0b6cf0]">{data.sidebarCta.subtitle}</span>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#061a3a]">
              <span className="block">{data.sidebarCta.title1}</span>
              <span>{data.sidebarCta.title2}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#526784]">{data.sidebarCta.description}</p>
            <Link href={data.sidebarCta.buttonUrl} className="mt-5 inline-flex items-center gap-3 rounded-md bg-[#0b6cf0] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0757c7]">
              {data.sidebarCta.buttonText}
              <FaChevronRight className="text-xs" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
};
