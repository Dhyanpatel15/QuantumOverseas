import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import GetACallBackMap from '../components/home/GetACallBackMap';

export default function VisaServicesPage({ onOpenQuote }) {
  // 7 Visa Categories matching reference screenshot
  const visaCategories = [
    {
      id: 1,
      slug: 'student-visa',
      title: 'Student Visa',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* University pediment roof */}
          <polygon points="27 7 6 18 48 18" />
          {/* Columns */}
          <line x1="13" y1="18" x2="13" y2="38" />
          <line x1="22" y1="18" x2="22" y2="38" />
          <line x1="32" y1="18" x2="32" y2="38" />
          <line x1="41" y1="18" x2="41" y2="38" />
          {/* Base foundation steps */}
          <line x1="8" y1="38" x2="46" y2="38" />
          <line x1="5" y1="44" x2="49" y2="44" />
          {/* Central academic emblem */}
          <circle cx="27" cy="13.5" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      id: 2,
      slug: 'permanent-residency-visa',
      title: 'PR Visa',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Helmet */}
          <path d="M16 21a11 11 0 0 1 22 0v3H16v-3z" />
          <path d="M12 24h30v2H12z" />
          {/* Face */}
          <path d="M18 26v4a9 9 0 0 0 18 0v-4" />
          {/* Body */}
          <path d="M10 46c0-6 6-9 17-9s17 3 17 9" />
          {/* PR / ID badge */}
          <rect x="23" y="38" width="8" height="8" rx="1.5" />
          <line x1="25.5" y1="41" x2="28.5" y2="41" />
        </svg>
      )
    },
    {
      id: 3,
      slug: 'employment-visa',
      title: 'Employment Visa',
      isDefaultActive: true, // Shown active (solid red) in reference screenshot
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Center professional */}
          <path d="M20 20a7 7 0 0 1 14 0v2H20v-2z" />
          <path d="M17 22h20v2H17z" />
          <path d="M21 24v3a6 6 0 0 0 12 0v-3" />
          <path d="M15 44c0-5 5-8 12-8s12 3 12 8" />
          {/* Left coworker */}
          <path d="M11 25a4.5 4.5 0 0 1 6-2.5" />
          <path d="M7 44c0-3.5 3.5-6 8-6.5" />
          {/* Right coworker */}
          <path d="M37 22.5a4.5 4.5 0 0 1 6 2.5" />
          <path d="M39 37.5c4.5.5 8 3 8 6.5" />
          {/* Tie line */}
          <line x1="27" y1="36" x2="27" y2="41" />
        </svg>
      )
    },
    {
      id: 4,
      slug: 'visitor-visa',
      title: 'Visitor Visa',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Traveler brim hat */}
          <ellipse cx="27" cy="22" rx="17" ry="4" />
          <path d="M18 22v-5a9 9 0 0 1 18 0v5" />
          {/* Face */}
          <path d="M20 24v4a7 7 0 0 0 14 0v-4" />
          {/* Shoulders */}
          <path d="M12 45c0-6 6-9 15-9s15 3 15 9" />
          {/* Camera / bag strap */}
          <path d="M20 36l7 8 7-8" />
          <circle cx="27" cy="41" r="2" />
        </svg>
      )
    },
    {
      id: 5,
      slug: 'business-investor-visa',
      title: 'Business / Investor Visa',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Helmet / Business Head */}
          <path d="M16 21a11 11 0 0 1 22 0v3H16v-3z" />
          <path d="M12 24h30v2H12z" />
          <path d="M18 26v4a9 9 0 0 0 18 0v-4" />
          {/* Shoulders */}
          <path d="M10 46c0-6 6-9 17-9s17 3 17 9" />
          {/* Suit tie */}
          <polygon points="27 37 29 40 28 45 26 45 25 40" fill="currentColor" opacity="0.25" />
        </svg>
      )
    },
    {
      id: 6,
      slug: 'family-visa',
      title: 'Family Visa',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Official VISA stamp card */}
          <rect x="9" y="8" width="36" height="38" rx="4" />
          <line x1="9" y1="26" x2="45" y2="26" />
          {/* VISA Text */}
          <text x="27" y="21" textAnchor="middle" fill="currentColor" stroke="none" className="text-[12px] font-black tracking-widest">VISA</text>
          {/* Biometric passport chip & lines */}
          <rect x="15" y="32" width="10" height="7" rx="1.5" />
          <line x1="28" y1="33" x2="39" y2="33" />
          <line x1="28" y1="37" x2="36" y2="37" />
          <circle cx="39" cy="14" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      id: 7,
      slug: 'other-visa-programs',
      title: 'Other Visa Programs',
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 transition-colors duration-300" viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Helmet */}
          <path d="M16 21a11 11 0 0 1 22 0v3H16v-3z" />
          <path d="M12 24h30v2H12z" />
          {/* Face */}
          <path d="M18 26v4a9 9 0 0 0 18 0v-4" />
          {/* Body */}
          <path d="M10 46c0-6 6-9 17-9s17 3 17 9" />
          {/* Global lines */}
          <line x1="23" y1="41" x2="31" y2="41" />
          <line x1="27" y1="37" x2="27" y2="45" />
        </svg>
      )
    }
  ];

  const [activeCard, setActiveCard] = useState('employment-visa');

  return (
    <>
      <SEO
        title="Visa - Quantum Overseas"
        description="Outstanding immigration and visa services from Quantum Overseas."
        canonical="/services"
      />

      {/* 1. Page Header (Hero Banner matching screenshot) */}
      <PageHeader title="Visa" breadcrumb={[{ name: 'Visa' }]} />

      <main>
        {/* 2. VISA CATEGORIES Section */}
        <section className="bg-[#f6f7f9] py-20 lg:py-24">
          <div className="max-w-[1315px] mx-auto px-5">
            {/* Top Split Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12 lg:mb-14">
              <div>
                <span className="text-theme-primary font-extrabold text-xs sm:text-[13px] tracking-widest uppercase block mb-3">
                  VISA CATEGORIES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111620] leading-[1.2]">
                  Outstanding Immigration <br className="hidden sm:inline" />
                  Visa Services
                </h2>
              </div>
              <div className="lg:pt-4">
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                  Quantum Overseas provides transparent, end-to-end immigration support for students, professionals, and exchange visitors to assist them at every step of their international travel and visa journey.
                </p>
              </div>
            </div>

            {/* 3-Column Grid of 7 Visa Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {visaCategories.map((item) => {
                const isActive = activeCard === item.slug;
                // Center the 7th item (Other Visa Programs) in the 3rd row
                const isCenteredBottom = item.slug === 'other-visa-programs';

                return (
                  <Link
                    key={item.id}
                    to={`/service-details/${item.slug}`}
                    onMouseEnter={() => setActiveCard(item.slug)}
                    className={`group flex flex-col items-center justify-center text-center p-8 sm:p-11 min-h-[196px] transition-all duration-300 cursor-pointer ${
                      isCenteredBottom ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                    } ${
                      isActive
                        ? 'bg-theme-primary text-white shadow-[0_12px_30px_rgba(226,9,53,0.28)]'
                        : 'bg-white text-[#111620] hover:bg-theme-primary hover:text-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/60'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`mb-4 transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-theme-primary group-hover:text-white'
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-base sm:text-[17px] font-extrabold tracking-tight transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-[#111620] group-hover:text-white'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Tagline Link */}
            <div className="text-center mt-12 sm:mt-14">
              <p className="text-sm sm:text-base font-bold text-[#111620] inline-flex items-center gap-2 justify-center flex-wrap">
                Bring Them Together And You Overcome The Ordinary.
                <Link
                  to="/services"
                  className="text-theme-primary hover:underline inline-flex items-center gap-1.5 ml-1"
                >
                  <span>View More Service</span>
                  <span className="w-5 h-5 rounded-full bg-theme-primary text-white inline-flex items-center justify-center text-[10px]">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* 3. Blue Passport Consultation Band (Matching Screenshot) */}
        <section
          className="relative min-h-[290px] sm:min-h-[320px] flex items-center overflow-hidden bg-cover bg-[position:75%_center] sm:bg-center"
          style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
        >
          {/* Deep navy overlay with heavy opacity on left for 100% text contrast */}
          <div className="absolute inset-0 bg-[#090f1a]/85 sm:bg-gradient-to-r sm:from-[#070d18]/96 sm:via-[#0b1426]/90 sm:to-[#0d1a30]/75" />

          <div className="relative max-w-[1315px] mx-auto px-5 w-full py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                We Counsel Students To Get <br className="hidden sm:inline" />
                Study Visas
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-theme-primary hover:bg-[#c0072c] text-white font-bold text-sm sm:text-base px-8 py-4 transition-all shadow-lg flex-shrink-0"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </section>

        {/* 4. Get A Call Back Section with Map (Exact 100% Match) */}
        <GetACallBackMap />
      </main>
    </>
  );
}
