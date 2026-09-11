import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonials from '../../content/testimonials.json';

const googleColors = ['text-[#4285F4]', 'text-[#EA4335]', 'text-[#FBBC05]', 'text-[#4285F4]', 'text-[#34A853]', 'text-[#EA4335]'];

function GoogleWord() {
  return (
    <span className="text-[34px] font-medium tracking-[-2px] leading-none">
      {'Google'.split('').map((letter, index) => <span key={index} className={googleColors[index]}>{letter}</span>)}
    </span>
  );
}

export default function GoogleReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-24 bg-[#f7f6f3]">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-theme-primary text-sm font-bold uppercase tracking-widest block mb-3">OUR TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading max-w-3xl mx-auto leading-tight">
            Let’s Explore Why People Say <br /> About Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-8 items-center">
          <div className="text-center py-6">
            <span className="block text-xl font-black text-theme-heading mb-3">EXCELLENT</span>
            <div className="flex items-center justify-center gap-1 text-[#fbbc04] mb-2">
              {[0, 1, 2, 3, 4].map((item) => <Star key={item} className="w-7 h-7 fill-current" />)}
            </div>
            <p className="text-sm text-gray-600 mb-3">Based on <strong className="text-[#16171a]">12 reviews</strong></p>
            <GoogleWord />
          </div>

          <div className="relative">
            <div key={currentIndex} className="qo-testimonial-slide grid grid-cols-1 md:grid-cols-3 gap-5">
              {[0, 1, 2].map((offset) => {
                const item = testimonials[(currentIndex + offset) % testimonials.length];
                return (
                  <article key={`${item.id}-${offset}`} className="bg-[#f4f4f4] p-5 min-h-[230px] rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-full bg-theme-primary text-white font-bold flex items-center justify-center flex-shrink-0">
                            {item.name.charAt(0).toUpperCase()}
                          </span>
                          <div>
                            <h4 className="text-sm font-extrabold text-theme-heading leading-tight">{item.name}</h4>
                            <p className="text-[11px] text-gray-500">{item.role}</p>
                          </div>
                        </div>
                        <span className="text-[#4285F4] text-xl font-bold">G</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-[#fbbc04] mb-3">
                        {[...Array(item.rating)].map((_, index) => <Star key={index} className="w-4 h-4 fill-current" />)}
                        <span className="ml-1 text-[#4285F4] text-xs">●</span>
                      </div>
                      <p className="text-[13px] text-[#333] leading-5 line-clamp-4">{item.review}</p>
                    </div>
                    <button type="button" className="text-xs text-gray-500 text-left mt-3">Read more</button>
                  </article>
                );
              })}
            </div>

            <button type="button" onClick={prevReview} aria-label="Previous review" className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow text-gray-500 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button type="button" onClick={nextReview} aria-label="Next review" className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow text-gray-500 flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
