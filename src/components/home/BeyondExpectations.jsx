import React from 'react';
import { Check } from 'lucide-react';
import homeData from '../../content/home.json';

export default function BeyondExpectations() {
  const { beyondExpectations } = homeData;

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <span className="text-theme-primary text-sm font-bold uppercase tracking-widest block mb-3">
              {beyondExpectations.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading max-w-3xl mx-auto leading-tight">
              {beyondExpectations.title}
            </h2>

            <div className="space-y-3">
              {beyondExpectations.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-theme-primary stroke-[3] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#16171a] font-semibold">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/images/details-4-1-rs36x2k7m20t4j7cxnb4nw2280f5tjjjgmioeznpw6.jpg"
              alt="Delivering beyond expectations"
              className="w-full h-[390px] sm:h-[500px] object-cover rounded-tl-[52px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
