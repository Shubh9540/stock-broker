"use client";

import React, { useState } from 'react';
import { ContactSectionProps } from '@/types/templates.types';
import {
  FaArrowRight,
  FaBriefcase,
  FaChevronDown,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCommentDots,
  FaShieldAlt,
  FaUser,
  FaUsers,
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    default:
      return null;
  }
};

export const ContactSection = ({ data }: ContactSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-12">
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#edf5ff] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-[#edf5ff] opacity-80 blur-3xl" />

      <div className="relative mx-auto max-w-[1250px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0876ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0876ff]">{data.intro.eyebrow}</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-[#061a3a] md:text-5xl">
              {data.intro.title} <span className="text-[#0876ff]">{data.intro.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#64748b] md:text-base">{data.intro.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-6">
            {data.intro.highlights.map((highlight) => (
              <div key={highlight.id} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf4ff] text-xl text-[#0876ff]">
                  {renderIcon(highlight.icon)}
                </span>
                <h2 className="mt-3 text-sm font-bold text-[#061a3a]">{highlight.title}</h2>
                <p className="mx-auto mt-1 max-w-36 text-xs leading-5 text-[#64748b]">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
          <div className="rounded-lg border border-[#dce8f7] bg-white p-5 shadow-[0_16px_45px_rgba(15,64,120,0.07)] md:p-7 lg:col-span-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#0876ff]" />
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#0876ff]">{data.form.eyebrow}</h2>
              </div>
              <p className="text-xs text-[#64748b]">{data.form.helperText}</p>
            </div>

            <form
              className="mt-5 space-y-4"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="relative block">
                  <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#70849e]" />
                  <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
                </label>
                <label className="relative block">
                  <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#70849e]" />
                  <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="relative block">
                  <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#70849e]" />
                  <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
                </label>
                <label className="relative block">
                  <FaBriefcase className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#70849e]" />
                  <select name="service" required defaultValue="" className="w-full appearance-none rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-10 text-sm text-[#52657d] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10">
                    <option value="" disabled>{data.form.servicePlaceholder}</option>
                    {data.form.servicesList.map((service) => (
                      <option key={service.id} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#70849e]" />
                </label>
              </div>

              <label className="relative block">
                <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-sm text-[#70849e]" />
                <textarea name="message" required rows={5} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-md border border-[#dce8f7] bg-[#fbfdff] py-3 pl-11 pr-4 text-sm text-[#061a3a] outline-none transition focus:border-[#0876ff] focus:ring-2 focus:ring-[#0876ff]/10" />
              </label>

              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-md bg-[#0876ff] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(8,118,255,0.24)] transition hover:bg-[#0564dd] focus:outline-none focus:ring-2 focus:ring-[#0876ff] focus:ring-offset-2">
                {data.form.buttonText}
                <FaArrowRight />
              </button>

              {submitted && (
                <p role="status" className="rounded-md border border-[#b7dfc6] bg-[#effaf3] px-4 py-3 text-sm font-semibold text-[#167443]">
                  {data.form.successMessage}
                </p>
              )}

              <div className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#64748b]">
                <FaLock className="mt-1 flex-shrink-0" />
                <p>{data.form.privacyText}</p>
              </div>
            </form>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#061f4a] to-[#04152f] p-6 text-white shadow-[0_18px_45px_rgba(4,31,74,0.2)] md:p-8 lg:col-span-5">
            <div className="pointer-events-none absolute -bottom-10 -right-8 flex items-end gap-2 opacity-10">
              <span className="h-20 w-7 bg-[#2a8cff]" />
              <span className="h-32 w-7 bg-[#2a8cff]" />
              <span className="h-44 w-7 bg-[#2a8cff]" />
            </div>

            <div className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#4ba0ff]" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#71b4ff]">{data.contactPanel.eyebrow}</span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
                {data.contactPanel.title1}
                <span className="block text-[#1680ff]">{data.contactPanel.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#c4d3e8]">{data.contactPanel.description}</p>

              <div className="mt-7 space-y-5">
                {data.contactPanel.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#0876ff] text-lg text-white">
                      {renderIcon(item.icon)}
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <div className="mt-1 space-y-1">
                        {item.lines.map((line) => (
                          <p key={line.id} className="text-sm leading-5 text-[#c4d3e8]">{line.text}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-lg border border-[#dce8f7] bg-[#eef5fb] shadow-[0_14px_40px_rgba(15,64,120,0.08)]">
          <div className="relative z-10 m-4 rounded-lg bg-white p-5 shadow-[0_12px_35px_rgba(15,64,120,0.14)] sm:absolute sm:left-3 sm:top-3 sm:m-0 sm:w-80 md:p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#0876ff]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0876ff]">{data.location.eyebrow}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#061a3a]">{data.location.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#64748b]">{data.location.description}</p>
            <a href={data.location.buttonUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-3 rounded-md bg-[#0876ff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0564dd]">
              {data.location.buttonText}
              <FaArrowRight />
            </a>
          </div>

          <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 sm:h-96" />
        </div>
      </div>
    </section>
  );
};
