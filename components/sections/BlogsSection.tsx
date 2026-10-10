'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { BlogsSectionProps } from '@/types/templates.types';

export const BlogsSection = ({ data, isPage = false }: BlogsSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(isPage ? 6 : 3);

  if (!data?.blogs.length) return null;

  const visibleBlogs = data.blogs.slice(0, visibleCount);
  const hasMore = visibleCount < data.blogs.length;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#8bbcff]" />
            <span className="text-xs font-bold uppercase text-[#0b6cf0]">
              {data.subtitle}
            </span>
            <span className="h-0.5 w-8 bg-[#8bbcff]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#061a3a] md:text-4xl">
            {data.title1}{' '}
            <span className="text-[#0b6cf0]">{data.title2}</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#64748b] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog) => {
            const [dateDay, ...dateDetails] = blog.date.split(' ');

            return (
              <article
                key={blog.id}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-[#dfe8f5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b6cf0]/10"
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt ?? blog.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 flex min-w-16 flex-col items-center rounded-md bg-[#0b6cf0] px-3 py-2 text-white shadow-lg">
                    <span className="text-xl font-extrabold leading-none">{dateDay}</span>
                    <span className="mt-1 text-xs font-semibold">{dateDetails.join(' ')}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="mb-3 w-fit rounded bg-[#edf4ff] px-2.5 py-1 text-xs font-bold uppercase text-[#0b6cf0]">
                    {blog.category}
                  </span>

                  <Link href={blog.url}>
                    <h3 className="text-xl font-extrabold leading-tight text-[#061a3a] transition-colors duration-300 group-hover:text-[#0b6cf0]">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#64748b]">
                    {blog.description}
                  </p>

                  <Link
                    href={blog.url}
                    className="mt-4 inline-flex items-center gap-3 text-sm font-bold text-[#0b6cf0] transition-opacity duration-300 hover:opacity-70"
                  >
                    {data.readMoreText}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {isPage && hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((current) => current + 3)}
              className="inline-flex items-center gap-3 rounded-md border border-[#0b6cf0] px-7 py-3.5 text-sm font-bold text-[#0b6cf0] transition-colors duration-300 hover:bg-[#0b6cf0] hover:text-white"
            >
              {data.loadMoreText}
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
