import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Check, Download } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { DetailSidebar, Reveal } from '../components/common/ReferenceSections';
import coachingData from '../content/coaching.json';

export default function CoachingDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const course = coachingData.courses.find((item) => item.slug === slug || item.id === slug);
  if (!course) return <Navigate to="/coaching" replace />;

  const title = course.slug.startsWith('ielts-course') ? 'IELTS Course' : course.title;

  return (
    <>
      <SEO title={`${title} - Quantum Overseas`} description={course.tagline} canonical={`/project-details/${course.slug}`} />
      <PageHeader title={title} breadcrumb={[{ name: 'Project', path: '/coaching' }, { name: title }]} />

      <main className="bg-white py-[120px]">
        <div className="qo-container grid items-start gap-12 lg:grid-cols-[353px_minmax(0,847px)] lg:justify-between lg:gap-8">
          <div>
            <DetailSidebar onOpenQuote={onOpenQuote} />
            <button type="button" onClick={onOpenQuote} className="mt-[30px] flex min-h-[64px] w-full items-center justify-center gap-3 bg-[#16171a] px-7 text-sm font-bold text-white transition-colors hover:bg-[#e20935]">
              <Download className="h-5 w-5" /> Download Pdf File
            </button>
          </div>

          <article>
            <Reveal><img src="/images/details-1-1024x555.jpg" alt="Students preparing for IELTS" className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[459px]" /></Reveal>
            <Reveal className="pt-[21px]">
              <h2 className="mb-3 text-[32px] font-bold leading-[1.3] text-[#16171a]">Coaching Overview</h2>
              <p className="text-base leading-7 text-[#5e5f63]">{coachingData.description}</p>
              <p className="mt-5 text-base leading-7 text-[#5e5f63]">{course.tagline} Our coaching is designed around practical exercises, individual feedback and realistic mock tests.</p>
            </Reveal>

            <Reveal className="mt-[52px] grid grid-cols-1 gap-5 sm:grid-cols-2">
              <img src="/images/details-2.jpg" alt="IELTS coaching group" className="h-[322px] w-full object-cover" />
              <img src="/images/details-3.jpg" alt="Students studying outdoors" className="h-[322px] w-full object-cover" />
            </Reveal>

            <Reveal className="mt-[24px]">
              <h3 className="mb-5 text-[24px] font-bold text-[#16171a]">Institutes:</h3>
              <div className="grid items-start gap-7 sm:grid-cols-[360px_1fr]">
                <img src="/images/details-4.jpg" alt="IELTS preparation" className="h-[240px] w-full object-cover" />
                <div className="space-y-3">
                  {course.features.slice(0, 5).map((feature) => <p key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#5e5f63]"><Check className="mt-1 h-4 w-4 flex-shrink-0 text-[#e20935]" />{feature}</p>)}
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-[58px]">
              <h3 className="mb-4 text-[24px] font-bold text-[#16171a]">How To Do Test Preparation</h3>
              <p className="text-base leading-7 text-[#5e5f63]">Follow a structured study plan, practise every module daily and use full-length mock tests to improve timing, accuracy and confidence before the examination.</p>
            </Reveal>
          </article>
        </div>
      </main>
    </>
  );
}
