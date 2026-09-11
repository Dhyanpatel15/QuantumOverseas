import React from 'react';
import { Check } from 'lucide-react';
import homeData from '../../content/home.json';

export default function YouWontRegret() {
  const { youWontRegret } = homeData;

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-theme-primary text-sm font-bold uppercase tracking-widest block mb-3">
              {youWontRegret.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-theme-heading leading-[1.12] mb-10">
              {youWontRegret.title}
            </h2>

            <div className="space-y-3.5">
              {youWontRegret.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-primary stroke-[3] flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] sm:text-base text-[#16171a] font-semibold">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[1.35fr_0.95fr] gap-6 items-center relative">
            <div className="relative">
              <img
                src="/images/about3.jpg"
                alt="Visa consultation"
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-24 bg-theme-primary" />
            </div>
            <div className="space-y-6">
              <img
                src="/images/about-2.jpg"
                alt="Visa clients"
                className="w-full h-[205px] sm:h-[250px] object-cover"
              />
              <img
                src="/images/01-6.jpg"
                alt="Visa consultation meeting"
                className="w-full h-[205px] sm:h-[250px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
