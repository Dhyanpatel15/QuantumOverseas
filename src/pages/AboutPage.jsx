import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  Plane,
  Share2,
  ShieldCheck,
  Star,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';

const services = [
  {
    slug: 'student-visa',
    title: 'Student Visa',
    description: 'Empowering global education journeys with seamless guidance and trusted student visa solutions.',
    image: '/images/medium-shot-smiley-couple-with-documents_23-2149272139.avif',
  },
  {
    slug: 'permanent-residency-visa',
    title: 'PR Visa',
    description: 'PR Visa opens doors to permanent residency, global opportunities, career growth, and a secure future abroad.',
    image: '/images/front-view-travel-agent-sitting-her-working-place-with-plane-tickets-agency-service-global-operator-manager-world-map_140725-155694.jpg',
  },
  {
    slug: 'employment-visa',
    title: 'Employment Visas',
    description: 'Employment Visas provide legal authorization for professionals to work abroad, secure stable jobs, and build global careers.',
    image: '/images/hands-holding-tickets-close-up_23-2149080808.avif',
  },
  {
    slug: 'visitor-visa',
    title: 'Visitor Visa',
    description: 'Simplify global travel with our expert Visitor Visa services—fast, reliable, and hassle-free application support.',
    image: '/images/i-am-here-help-you-with-your-booking-travel-questions-female-sales-agent-holding-plane-tickets-while-smiling-making-eye-contact-travel-agency_662251-2371.avif',
  },
  {
    slug: 'business-investor-visa',
    title: 'Business / Investor Visa',
    description: 'Secure your entry into new markets with our seamless, reliable, and fast Business/Investor Visa solutions.',
    image: '/images/medium-shot-people-travel-agency_52683-136451.avif',
  },
  {
    slug: 'family-visa',
    title: 'Family Visa',
    description: 'Simplify relocation for your loved ones with our hassle-free, fast, and reliable family visa services.',
    image: '/images/young-family-three-posing-together-before-travel-vacation_23-2149205286.jpg',
  },
  {
    slug: 'other-visa-programs',
    title: 'Other Visa Programs',
    description: 'Explore specialized visa pathways designed for investors, skilled professionals, and business expansion opportunities worldwide.',
    image: '/images/visa-application-form-laptop_23-2149117780.jpg',
  },
];

const reviews = [
  {
    id: 1,
    name: 'swapnil vaidya',
    age: '1 year ago',
    initial: 'S',
    color: '#8d6e63',
    review: "The owner ‘Mr Chintan’ is well versed, extremely polite and prompt in response round the clock. His guidance and paperwork is very accurate and straightforward.",
  },
  {
    id: 2,
    name: 'NIYANTA SHETH',
    age: '1 year ago',
    initial: 'N',
    color: '#7cb342',
    review: "Quantam Overseas LLP offers a reliable and professional experience for individuals seeking immigration assistance. I really appreciate Chintan's personalized approach.",
  },
  {
    id: 3,
    name: 'Alap Patel',
    age: '1 year ago',
    initial: 'A',
    color: '#8d6e63',
    review: 'Quantum Overseas LLP provided exceptional visa assistance. The entire process was handled efficiently, with clear communication and thorough guidance throughout.',
  },
  {
    id: 4,
    name: 'Rahul Jadav',
    age: '1 year ago',
    initial: 'R',
    color: '#5c6bc0',
    review: 'I sincerely thank Quantum Overseas LLP for their exceptional support and guidance throughout my visa application journey. The process was smooth and stress-free.',
  },
  {
    id: 5,
    name: 'Arnold Christian',
    age: '1 year ago',
    initial: 'A',
    color: '#26a69a',
    review: 'I highly recommend Chintan Kothari for visa services. His expert advice and professionalism make him a trustworthy and reliable consultant.',
  },
];

const stats = [
  { value: '35+', label: 'Countries\nRepresented', Icon: Plane },
  { value: '25K+', label: 'Visa\nDelivery', Icon: BookOpenCheck },
  { value: '99%', label: 'Success\nRate', Icon: ShieldCheck },
];

export default function AboutPage({ onOpenQuote }) {
  const [reviewIndex, setReviewIndex] = useState(0);
  const visibleReviews = [0, 1, 2].map(
    (offset) => reviews[(reviewIndex + offset) % reviews.length],
  );

  return (
    <>
      <SEO
        title="About - Quantum Overseas"
        description="Learn about Quantum Overseas LLP, our visa and immigration services, expert consultants, success record, and client reviews."
        canonical="/about"
      />

      <PageHeader title="About" breadcrumb={[{ name: 'About' }]} />

      <main className="overflow-hidden bg-white">
        <section className="py-20 lg:py-[120px]">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-16 px-5 lg:grid-cols-2 lg:gap-0">
            <div className="relative min-h-[540px] pl-6 sm:min-h-[590px] sm:pl-10">
              <img
                src="/images/border-shape.png"
                alt=""
                className="pointer-events-none absolute left-[70px] top-[60px] hidden h-[500px] w-[419px] sm:block"
              />
              <div
                className="relative z-10 h-[470px] w-full max-w-[437px] bg-cover bg-center sm:h-[530px]"
                style={{ backgroundImage: "url('/images/about-new.jpg')" }}
                role="img"
                aria-label="Successful visa applicants"
              />
              <img
                src="/images/about-2.jpg"
                alt="Quantum Overseas consultation"
                className="absolute bottom-0 left-[34%] z-20 h-[225px] w-[220px] object-cover sm:left-[37%] sm:h-[277px] sm:w-[269px]"
              />
              <span className="absolute left-0 top-20 h-[210px] w-[3px] bg-[#e20935]" />
            </div>

            <div className="pt-1 lg:pl-4">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-[#e20935]">
                About Company
              </span>
              <h2 className="mb-7 text-[36px] font-extrabold leading-[1.15] text-[#16171a] sm:text-[48px]">
                Welcome To Experience Visa Consulting Firm
              </h2>
              <p className="mb-5 text-[16px] leading-7 text-[#5e5f63]">
                Quantum Overseas was established in 2011 in Ahmedabad, the metro city of Gujarat, INDIA. We celebrated our 12th year and are now looking forward to continuing our history of providing high quality and professional advice for parents and their children who would like to study abroad and clients who wish to migrate to foreign countries. Apart from Student and PR, we provide end to end Passport and Visa Solutions for business and leisure clients. Additionally, our expertise lies in solving refused clients with our expert team of lawyers and solicitors.
              </p>
              <p className="text-[16px] leading-7 text-[#5e5f63]">
                Quantum Overseas is now Quantum Overseas LLP and is now registered with the Registrar of Companies, Ministry of Corporate Affairs since August 2023.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-[120px] pt-10 lg:pt-[95px]">
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="mx-auto mb-12 max-w-[820px] text-center">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-[#e20935]">
                Service We Provide
              </span>
              <h2 className="text-[36px] font-extrabold leading-[1.15] text-[#16171a] sm:text-[48px]">
                Explore Our Visa Citizenship
                <br className="hidden sm:block" /> &amp; Immigration Services
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/service-details/${service.slug}`}
                  className="group flex min-h-[505px] flex-col bg-[#f5f5f7] p-[30px] transition-colors duration-300 hover:bg-[#e20935]"
                >
                  <h3 className="mb-3 text-[23px] font-bold text-[#16171a] transition-colors group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-5 min-h-[84px] text-[16px] leading-7 text-[#5e5f63] transition-colors group-hover:text-white/90">
                    {service.description}
                  </p>
                  <div className="mt-auto h-[233px] overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="mt-6 inline-flex items-center gap-4 text-base font-bold text-[#16171a] transition-colors group-hover:text-white">
                    Read More
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e20935] text-white transition-colors group-hover:bg-white group-hover:text-[#e20935]">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1116px] bg-[#e20935] px-7 py-16 text-white sm:px-12 lg:min-h-[578px] lg:px-[85px] lg:py-[85px]">
            <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_2fr]">
              <div>
                <span className="mb-5 block text-sm font-bold uppercase tracking-[0.18em] text-white">
                  5M+ Trusted Our Clients
                </span>
                <h2 className="mb-6 text-[39px] font-extrabold leading-[1.25] text-white sm:text-[48px]">
                  Most Experienced
                  <br /> Our Services
                </h2>
                <p className="mb-7 max-w-[320px] text-base leading-7 text-white/80">
                  Quantum Overseas is the world&apos;s driving worldwide
                  <br /> exchange the worldwide trade of
                </p>
                <Link
                  to="/services"
                  className="inline-flex min-h-[65px] items-center gap-5 bg-white px-11 text-base font-bold text-[#16171a] transition-colors hover:bg-[#16171a] hover:text-white"
                >
                  Explore Our Service
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-5">
                {stats.map(({ value, label, Icon }) => (
                  <div key={value} className="text-center">
                    <span className="mx-auto mb-7 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white text-[#e20935]">
                      <Icon className="h-12 w-12 stroke-[1.5]" />
                    </span>
                    <strong className="mb-3 block text-[42px] font-extrabold leading-none text-white">
                      {value}
                    </strong>
                    <span className="whitespace-pre-line text-[18px] leading-7 text-white/90">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#16171a] py-[110px] text-white lg:min-h-[1045px]">
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="mx-auto mb-14 max-w-[700px] text-center">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-[#e20935]">
                Professional People
              </span>
              <h2 className="text-[36px] font-extrabold leading-[1.15] text-white sm:text-[48px]">
                Meet Our Expert Visa
                <br /> Consultants
              </h2>
            </div>

            <Link to="/team-details/mr-chintan-kothari" className="group relative block w-full max-w-[424px]">
              <div className="relative h-[424px] overflow-hidden bg-gray-800">
                <img
                  src="/images/Passport-Photo-Chintan-Kothari.jpg"
                  alt="Mr. Chintan Kothari"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#e20935] text-white">
                  <Share2 className="h-4 w-4" />
                </span>
              </div>
              <div className="relative z-10 mx-5 -mt-[50px] bg-white px-6 py-[18px] text-center shadow-lg">
                <h3 className="mb-1 text-[21px] font-bold text-[#16171a]">Mr. Chintan Kothari</h3>
                <p className="text-base text-[#5e5f63]">Founder and CEO</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white py-[110px] lg:min-h-[727px]">
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="mx-auto mb-14 max-w-[800px] text-center">
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-[#e20935]">
                Our Testimonials
              </span>
              <h2 className="text-[36px] font-extrabold leading-[1.15] text-[#16171a] sm:text-[48px]">
                Let&apos;s Explore Why People Say
                <br /> About Our Services
              </h2>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[250px_1fr]">
              <div className="text-center">
                <strong className="block text-[24px] font-extrabold text-[#16171a]">EXCELLENT</strong>
                <div className="my-2 flex justify-center gap-1 text-[#fbbc04]">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-7 w-7 fill-current" />
                  ))}
                </div>
                <p className="text-[15px] text-[#16171a]">
                  Based on <strong>12 reviews</strong>
                </p>
                <p className="mt-2 text-[30px] font-semibold tracking-tight">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </p>
              </div>

              <div className="relative">
                <div className="grid gap-4 md:grid-cols-3">
                  {visibleReviews.map((review) => (
                    <article key={review.id} className="flex min-h-[234px] flex-col rounded-[10px] bg-[#f5f5f7] p-5">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-3">
                          <span
                            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-base text-white"
                            style={{ backgroundColor: review.color }}
                          >
                            {review.initial}
                          </span>
                          <div className="min-w-0">
                            <h3 className="truncate text-[15px] font-bold text-[#16171a]">{review.name}</h3>
                            <p className="text-[12px] leading-4 text-[#777]">{review.age}</p>
                          </div>
                        </div>
                        <span className="text-[23px] font-bold text-[#4285F4]">G</span>
                      </div>
                      <div className="mb-2 flex gap-0.5 text-[#fbbc04]">
                        {[0, 1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-[18px] w-[18px] fill-current" />
                        ))}
                        <ShieldCheck className="ml-1 h-[17px] w-[17px] fill-[#4285F4] text-white" />
                      </div>
                      <p className="line-clamp-4 text-[14px] leading-[22px] text-[#2e2e2e]">{review.review}</p>
                      <button type="button" className="mt-auto pt-2 text-left text-[13px] text-[#8b8b8b]">
                        Read more
                      </button>
                    </article>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)}
                  className="absolute -left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#777] shadow-md"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
                  className="absolute -right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#777] shadow-md"
                  aria-label="Next reviews"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-0">
          <div
            className="mx-auto flex min-h-[292px] max-w-[1116px] flex-col items-start justify-center gap-8 bg-cover bg-center px-8 py-12 text-white sm:px-[70px] lg:flex-row lg:items-center lg:justify-between lg:px-[100px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(226, 9, 53, .90), rgba(226, 9, 53, .90)), url('/images/banner1.jpg')",
            }}
          >
            <div>
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.18em] text-white">
                Connect With Us
              </span>
              <h2 className="text-[36px] font-extrabold leading-[1.2] text-white sm:text-[48px]">
                Let&apos;s Discuss &amp; Start Visa
                <br /> Consultations
              </h2>
            </div>
            <button
              type="button"
              onClick={onOpenQuote}
              className="min-h-[65px] bg-white px-12 text-base font-bold text-[#16171a] transition-colors hover:bg-[#16171a] hover:text-white"
            >
              Free Consulting
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
