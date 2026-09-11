import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonials from '../../content/testimonials.json';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-theme-primary text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-heading">
            What Our Successful Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative">
          <Quote className="w-16 h-16 text-red-100 absolute top-6 right-8 pointer-events-none" />

          <div key={currentIndex} className="qo-testimonial-slide relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-red-50 flex-shrink-0 shadow-md">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/images/hero-1.jpg'; }}
              />
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
                "{current.review}"
              </p>

              <div>
                <h4 className="text-lg font-bold text-theme-heading">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-sm text-theme-primary font-semibold">
                  {current.role} • <span className="text-gray-500">{current.visaType}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-theme-primary text-gray-700 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-gray-400">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-theme-primary text-gray-700 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
