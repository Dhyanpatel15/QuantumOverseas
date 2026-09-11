import React from 'react';
import { Award, CheckCircle, Users, GraduationCap } from 'lucide-react';
import homeData from '../../content/home.json';

export default function FeatureCounters() {
  const icons = [Award, CheckCircle, Users, GraduationCap];

  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {homeData.stats.map((stat, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-xl border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-theme-primary flex items-center justify-center flex-shrink-0 shadow-inner">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-theme-heading">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
