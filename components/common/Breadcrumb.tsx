import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data }: BreadcrumbProps) => {
  if (!data) return null;

  const titleWords = data.title.trim().split(' ');
  const highlightedTitle = titleWords.pop();
  const titleStart = titleWords.join(' ');

  return (
    <section
      className="relative flex min-h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#03152d] via-[#05253e] to-[#002321] bg-cover bg-center px-4 py-8 md:min-h-72"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      {data.bgImage && <div className="absolute inset-0 bg-[#03182c]/80" />}

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          {titleStart && <span>{titleStart}</span>}
          <span className="text-[#0876f9]">{highlightedTitle}</span>
        </h1>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[#7890a8] md:text-base">
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {path.url ? (
                <Link href={path.url} className="transition-colors hover:text-[#0876f9]">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <span className="h-4 w-px rotate-[24deg] bg-[#7890a8]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
