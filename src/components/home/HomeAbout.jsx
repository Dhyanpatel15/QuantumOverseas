import React, { useState, useEffect, useRef } from 'react';
import homeData from '../../content/home.json';

export default function HomeAbout() {
  const { aboutCompany } = homeData;
  const [count, setCount] = useState(1);
  const countRef = useRef(null);

  useEffect(() => {
    const targetYears = parseInt(aboutCompany.experienceYears, 10) || 25;
    let current = 1;
    const duration = 1800; // 1.8s
    const stepTime = Math.max(20, Math.floor(duration / targetYears));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(1);
          const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= targetYears) {
              clearInterval(timer);
            }
          }, stepTime);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [aboutCompany.experienceYears]);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Column: 2 Overlapping Images + Animated 25 Years Rosette Badge */}
          <div className="lg:col-span-6 relative pb-12 sm:pb-16" ref={countRef}>
            <div className="relative mx-auto max-w-lg lg:max-w-none pr-4 sm:pr-8">
              {/* Main Image 1 (Top-Left: about-5.jpg) */}
              <div className="w-[78%] sm:w-[75%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <img
                  src="/images/about-5.jpg"
                  alt="Welcome To Experience Visa Consulting Firm"
                  className="w-full h-[300px] sm:h-[390px] lg:h-[430px] object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/images/about-5-387x460.jpg'; }}
                />
              </div>

              {/* Secondary Image 2 (Bottom-Right: 01-1.jpg, Overlapping) */}
              <div className="absolute -bottom-8 -right-2 sm:-right-6 w-[68%] sm:w-[65%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-[5px] sm:border-[6px] border-white z-10 bg-gray-100">
                <img
                  src="/images/about-6.jpg"
                  alt="Happy Visa & Immigration Clients"
                  className="w-full h-[220px] sm:h-[280px] lg:h-[310px] object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/images/about-6.jpg'; }}
                />
              </div>

              {/* Red Scalloped Rosette Experience Badge (Clockwise Rotating Image with Animated Count-Up Text) */}
              <div className="absolute bottom-6 -left-3 sm:bottom-8 sm:-left-8 z-30 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center select-none">
                {/* Rotating Rosette Shape (Clockwise Animation) */}
                <img
                  src="/images/circle-2.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain animate-[spin_18s_linear_infinite] drop-shadow-2xl pointer-events-none"
                />

                {/* Fixed Center Text with Count-Up (Stays upright & readable while badge spins) */}
                <div className="relative z-10 text-white flex flex-col items-center justify-center text-center p-2">
                  <span className="text-3xl sm:text-4xl font-extrabold leading-none tracking-tight">
                    {count}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold leading-tight mt-1">
                    Years Of <br /> Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-theme-primary text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
                {aboutCompany.subtitle}
              </span>
              <h2 className="ttext-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading max-w-3xl mx-auto leading-tight">
                {aboutCompany.title}
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {aboutCompany.paragraph1}
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {aboutCompany.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
