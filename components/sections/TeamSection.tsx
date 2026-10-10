import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { TeamSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaTwitter':
      return <FaTwitter />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    default:
      return null;
  }
};

export const TeamSection = ({ data }: TeamSectionProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#f8fbff] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
            <span className="text-sm font-bold text-[#0b6cf0]">{data.subtitle}</span>
            <span className="h-0.5 w-8 bg-[#0b6cf0]" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[#0b6cf0]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#526784] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.members.map((member) => (
            <article key={member.id} className="grid min-h-60 grid-cols-[44%_56%] overflow-hidden rounded-lg border border-[#dce7f3] bg-white shadow-sm">
              <div className="h-full min-h-60 overflow-hidden bg-[#eaf4ff]">
                <img src={member.image} alt={member.imageAlt} className="h-full w-full object-cover object-top" />
              </div>

              <div className="flex min-w-0 flex-col p-4 sm:p-5">
                <h3 className="text-lg font-extrabold leading-tight text-[#061a3a]">{member.name}</h3>
                <p className="mt-1 text-xs font-medium text-[#526784] sm:text-sm">{member.role}</p>
                <span className="my-4 block h-0.5 w-8 bg-[#0b6cf0]" />
                <p className="text-xs leading-relaxed text-[#526784] sm:text-sm">{member.description}</p>

                <div className="mt-auto flex items-center gap-3 pt-5">
                  {member.socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.id}
                      href={socialLink.url}
                      aria-label={socialLink.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf5ff] text-sm text-[#0b6cf0] transition-colors hover:bg-[#0b6cf0] hover:text-white"
                    >
                      {renderIcon(socialLink.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
