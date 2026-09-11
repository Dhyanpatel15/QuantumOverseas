import React from 'react';
import { ShieldCheck, Target, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeData from '../../content/home.json';

const icons = [ShieldCheck, Target, Award, Clock];

export default function WhyChooseUs() {
  const { whyChooseUs } = homeData;

  return (
    <section className="py-20 lg:py-28 bg-[#101A29] text-white relative overflow-hidden">
      {/* Decorative BG elements */}
      <img
        src="/images/right-shape.png"
        alt=""
        className="absolute top-0 right-0 w-80 opacity-5 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <span className="text-theme-primary text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
                {whyChooseUs.subTitle}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {whyChooseUs.title}
              </h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {whyChooseUs.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {whyChooseUs.features.map((feat, idx) => {
                const Icon = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-theme-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-600/20 text-theme-primary flex items-center justify-center mb-3 group-hover:bg-theme-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-theme-primary transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link to="/contact" className="theme-btn text-sm inline-flex items-center gap-2">
                <span>Start Your Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
              <img
                src="/images/front-view-travel-agent-sitting-her-working-place-with-plane-tickets-agency-service-global-operator-manager-world-map_140725-155694.jpg"
                alt="Why Choose Quantum Overseas"
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.src = '/images/hero-2.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A29] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#101A29]/90 backdrop-blur-md border border-gray-700">
                <span className="text-xs font-semibold text-theme-primary uppercase">Client Assurance</span>
                <p className="text-sm font-bold text-white mt-1">
                  Over 5,000+ Visas Approved with zero hidden charges and 100% legal compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
