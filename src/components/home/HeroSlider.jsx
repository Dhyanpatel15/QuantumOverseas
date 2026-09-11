import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import homeData from '../../content/home.json';

export default function HeroSlider({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = homeData.heroSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section data-qo-effects="skip" className="relative h-[590px] sm:h-[690px] lg:h-[830px] bg-[#101A29] overflow-hidden select-none">
      {/* 1. Left Honeycomb Geometric Pattern Overlay (Only shown on PC screens) */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 h-full w-80 lg:w-[420px] pointer-events-none z-20 overflow-hidden">
        <img
          src="/images/object1.png"
          alt=""
          className="h-full w-full object-cover object-left opacity-35 filter invert brightness-125 contrast-150 mix-blend-screen"
        />
      </div>

      {/* 2. Right Top Corner Pattern (Only shown on PC screens) */}
      <div className="hidden lg:block absolute top-0 right-0 pointer-events-none z-20 overflow-hidden w-[380px] md:w-[480px] lg:w-[562px] max-w-[50%] select-none">
        <img
          src="/images/right-shape-562x400.png"
          alt=""
          className="w-full h-auto object-contain object-top-right ml-auto"
        />
      </div>

      {/* 3. Background Slides & Animated Content */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image with subtle Ken Burns zoom */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
              idx === currentSlide ? 'scale-105' : 'scale-100'
            }`}
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1522]/95 via-[#101A29]/75 to-[#101A29]/20" />

          {/* Content Container with Right-to-Left Slide Animations */}
          <div className="relative max-w-[1120px] mx-auto px-5 h-full flex items-center">
            <div className="max-w-2xl text-white space-y-6 pt-4">
              {/* Badge (Sliding from Right to Left) */}
              {idx === currentSlide && (
                <div className="inline-flex items-center bg-theme-primary text-white text-sm sm:text-base font-bold px-5 py-1.5 tracking-wide shadow-md animate-heroSlideBadge">
                  {slide.badge || 'Your Most Trusted Partners'}
                </div>
              )}

              {/* Title (Sliding from Right to Left) */}
              {idx === currentSlide && (
                <h1 className="text-4xl sm:text-5xl lg:text-[66px] font-extrabold text-white leading-[1.12] tracking-tight animate-heroSlideTitle">
                  Immigration & <br />
                  Visa Consulting <br />
                  Here...
                </h1>
              )}

              {/* Description (Sliding from Right to Left) */}
              {idx === currentSlide && (
                <p className="text-sm sm:text-base text-gray-100 leading-7 max-w-2xl animate-heroSlideText">
                  {slide.description || 'Quantum Overseas is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi'}
                </p>
              )}

              {/* CTA Button (Sliding from Right to Left) */}
              {idx === currentSlide && (
                <div className="pt-2 animate-heroSlideBtn">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-theme-primary hover:bg-theme-primaryHover text-white font-bold px-10 py-5 text-sm transition-all shadow-lg hover:shadow-red-500/20 group cursor-pointer"
                  >
                    <span>{slide.ctaText || 'Learn More'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* 4. Swiper Dot Pagination (Target Circle on Active Dot) */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className="flex items-center justify-center p-1 cursor-pointer transition-all duration-300 group"
            aria-label={`Slide ${idx + 1}`}
          >
            {idx === currentSlide ? (
              <div className="relative flex items-center justify-center w-6 h-6">
                <span className="absolute inset-0 rounded-full border-2 border-theme-primary animate-ping opacity-30" />
                <span className="w-5 h-5 rounded-full border-2 border-theme-primary flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-theme-primary" />
                </span>
              </div>
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-white/70 group-hover:bg-white transition-colors" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
