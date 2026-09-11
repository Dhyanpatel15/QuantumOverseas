import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import coachingData from '../../content/coaching.json';

export default function CoachingBanner() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#101A29] to-[#1a2b42] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative image */}
          <img
            src="/images/right-shape.png"
            alt=""
            className="absolute top-0 right-0 w-80 opacity-10 pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-theme-primary text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Certified IELTS & PTE Test Preparation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Score 8.0+ Band in IELTS with Certified Master Trainers
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Unlock admissions into top world-ranking universities with our proven test-taking methodologies, individual speaking mock drills, and AI-scored PTE simulation software.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                {coachingData.stats.map((s, idx) => (
                  <div key={idx} className="bg-gray-800/60 p-3 rounded-xl border border-gray-700 text-center">
                    <span className="block text-xl sm:text-2xl font-black text-theme-primary">
                      {s.value}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/coaching" className="theme-btn text-sm flex items-center gap-2">
                  <span>Explore Coaching Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 px-6 py-3.5 text-white bg-white/10 hover:bg-white/20 border border-white/20 text-sm">
                  Book Free Demo Class
                </Link>
              </div>
            </div>

            {/* Right Course Preview Cards */}
            <div className="lg:col-span-5 space-y-4">
              {coachingData.courses.slice(0, 2).map((course) => (
                <div
                  key={course.id}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-theme-primary transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-theme-primary uppercase">
                      {course.duration}
                    </span>
                    <span className="text-[11px] text-gray-300 bg-gray-800 px-2 py-0.5 rounded">
                      Live + Mock Tests
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 mb-4">
                    {course.tagline}
                  </p>
                  <Link
                    to={`/project-details/${course.slug}`}
                    className="text-xs font-bold text-theme-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Syllabus & Batches</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
