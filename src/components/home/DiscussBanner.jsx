import React from 'react';
import { PhoneCall, ChevronRight } from 'lucide-react';
import homeData from '../../content/home.json';

export default function DiscussBanner({ onOpenQuote }) {
  const { discussBanner } = homeData;

  return (
    <section className="bg-[#f7f6f3] pb-16">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="bg-theme-primary px-8 sm:px-10 py-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 rounded-md">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <PhoneCall className="w-14 h-14 text-white flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-2xl sm:text-[34px] font-extrabold text-white leading-tight">{discussBanner.title}</h3>
              <p className="text-sm sm:text-base text-white/90 mt-2">{discussBanner.subtitle}</p>
            </div>
          </div>
          <button type="button" onClick={onOpenQuote} className="inline-flex items-center gap-3 bg-white text-[#16171a] font-extrabold px-10 py-5 text-sm flex-shrink-0">
            <span>{discussBanner.buttonText}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
