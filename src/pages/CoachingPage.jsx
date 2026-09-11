import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpenCheck, ChevronRight, Languages, Users } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { Reveal } from '../components/common/ReferenceSections';

const programs = [
  { title: 'IELTS Courses', Icon: BookOpenCheck, text: 'Professional IELTS preparation for academic and general training.' },
  { title: 'Citizenship Test', Icon: Users, text: 'Structured coaching for citizenship language and knowledge tests.' },
  { title: 'TOFEL Coaching', Icon: Languages, text: 'Focused preparation with practical exercises and mock tests.' },
  { title: 'OET Coaching', Icon: Award, text: 'Specialist English coaching for healthcare professionals.' },
];

const courses = [
  { title: 'IELTS Course', price: '$170', image: '/images/05.jpg', slug: 'ielts-course' },
  { title: 'PTE Course', price: '$170', image: '/images/06.jpg', slug: 'ielts-course-2' },
  { title: 'TOEFL Course', price: '$190', image: '/images/07.jpg', slug: 'ielts-course' },
  { title: 'GRE Course', price: '$190', image: '/images/08.jpg', slug: 'ielts-course-2' },
];

export default function CoachingPage() {
  return (
    <>
      <SEO title="Coaching - Quantum Overseas" description="IELTS, PTE, TOEFL and test preparation coaching." canonical="/coaching" />
      <PageHeader title="Coaching" breadcrumb={[{ name: 'Coaching' }]} />

      <main>
        <section className="bg-[#f5f5f7] py-[120px]">
          <div className="qo-container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map(({ title, Icon, text }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="group flex min-h-[390px] flex-col justify-end overflow-hidden bg-white px-[30px] pb-[42px] pt-[34px] transition-all duration-500 hover:-translate-y-2 hover:bg-[#16171a]">
                  <span className="mb-auto flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#f5f5f7] text-[#e20935] transition-colors group-hover:bg-[#e20935] group-hover:text-white"><Icon className="h-9 w-9 stroke-[1.5]" /></span>
                  <span className="mb-6 text-[64px] font-bold leading-none text-[#ededee] transition-colors group-hover:text-white/10">0{index + 1}</span>
                  <h3 className="mb-3 text-[24px] font-bold leading-[1.45] text-[#16171a] transition-colors group-hover:text-white">{title}</h3>
                  <p className="text-sm leading-6 text-[#5e5f63] transition-colors group-hover:text-white/70">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-white py-[120px]">
          <div className="qo-container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <Reveal key={course.title} delay={index * 80}>
                <article className="group bg-[#f5f5f7] pb-8">
                  <div className="relative h-[198px] overflow-hidden">
                    <img src={course.image} alt={course.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <strong className="absolute right-0 top-0 flex h-[82px] w-[109px] items-center justify-center bg-[#e20935] text-[20px] font-bold text-white">{course.price}</strong>
                  </div>
                  <div className="px-[25px] pt-[24px]">
                    <h4 className="mb-5 text-[22px] font-bold text-[#16171a]">{course.title}</h4>
                    <Link to={`/project-details/${course.slug}`} className="inline-flex items-center gap-3 text-sm font-bold text-[#16171a] transition-colors hover:text-[#e20935]">Read More <ChevronRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f5f7] pb-[230px] pt-[110px]">
          <div className="qo-container grid grid-cols-1 gap-x-16 gap-y-[30px] lg:grid-cols-2">
            {programs.map(({ title, text }, index) => (
              <Reveal key={`feature-${title}`} delay={(index % 2) * 90}>
                <article className="group flex min-h-[240px] items-center bg-white p-[30px] transition-shadow hover:shadow-[0_18px_45px_rgba(22,23,26,.09)]">
                  <span className="mr-7 flex h-[90px] w-[90px] flex-shrink-0 items-center justify-center rounded-full bg-[#e20935] text-[28px] font-bold text-white">0{index + 1}</span>
                  <div>
                    <h3 className="mb-3 text-[24px] font-bold text-[#16171a]">{title}</h3>
                    <p className="mb-5 text-sm leading-6 text-[#5e5f63]">{text}</p>
                    <Link to="/contact" className="inline-flex items-center gap-3 text-sm font-bold text-[#e20935]">Read More <ChevronRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
