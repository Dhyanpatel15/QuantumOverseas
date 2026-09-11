import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import siteConfig from '../../content/site.json';
import homeData from '../../content/home.json';

export default function CtaSection({ onOpenQuote }) {
  const ctaBanner = homeData.ctaBanner || homeData.discussBanner || {
    title: 'Start Your International Journey Today',
    subtitle: 'Get free profile evaluation and expert visa guidance from Ahmedabad’s top consultants.',
    buttonText: 'Book Free Consultation',
    buttonLink: '/contact'
  };

  return (
    <section className="py-16 sm:py-20 bg-theme-primary text-white relative overflow-hidden">
      {/* Shapes */}
      <img
        src="/images/right-shape.png"
        alt=""
        className="absolute top-0 right-0 w-96 opacity-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {ctaBanner?.title || 'Start Your International Journey Today'}
            </h2>
            <p className="text-sm sm:text-base text-red-100">
              {ctaBanner?.subtitle || 'Get free profile evaluation and expert visa guidance from Ahmedabad’s top consultants.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenQuote}
              className="bg-white text-theme-primary hover:bg-gray-100 px-7 py-3.5 rounded-md font-bold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>{ctaBanner?.buttonText || 'Book Free Consultation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-md font-bold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
