import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const serviceCards = [
    {
      slug: 'student-visa',
      title: 'Student Visa',
      desc: 'Empowering global education journeys with seamless guidance and trusted student visa solutions.',
      image: '/images/medium-shot-smiley-couple-with-documents_23-2149272139.avif'
    },
    {
      slug: 'permanent-residency-visa',
      title: 'PR Visa',
      desc: 'PR Visa opens doors to permanent residency, global opportunities, career growth, and a secure future abroad.',
      image: '/images/front-view-travel-agent-sitting-her-working-place-with-plane-tickets-agency-service-global-operator-manager-world-map_140725-155694.jpg'
    },
    {
      slug: 'employment-visa',
      title: 'Employment Visas',
      desc: 'Employment Visas provide legal authorization for professionals to work abroad, secure stable jobs, and build global careers.',
      image: '/images/hands-holding-tickets-close-up_23-2149080808.avif'
    },
    {
      slug: 'visitor-visa',
      title: 'Visitor Visa',
      desc: 'Simplify global travel with our expert Visitor Visa services—fast, reliable, and hassle-free application support.',
      image: '/images/i-am-here-help-you-with-your-booking-travel-questions-female-sales-agent-holding-plane-tickets-while-smiling-making-eye-contact-travel-agency_662251-2371.avif'
    },
    {
      slug: 'business-investor-visa',
      title: 'Business / Investor Visa',
      desc: 'Secure your entry into new markets with our seamless, reliable, and fast Business/Investor Visa solutions.',
      image: '/images/medium-shot-people-travel-agency_52683-136451.avif'
    },
    {
      slug: 'family-visa',
      title: 'Family Visa',
      desc: 'Simplify relocation for your loved ones with our hassle-free, fast, and reliable family visa services.',
      image: '/images/young-family-three-posing-together-before-travel-vacation_23-2149205286.jpg'
    },
    {
      slug: 'other-visa-programs',
      title: 'Other Visa Programs',
      desc: 'Explore specialized visa pathways designed for investors, skilled professionals, and business expansion opportunities worldwide.',
      image: '/images/visa-application-form-laptop_23-2149117780.jpg'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-theme-primary text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
            SERVICE WE PROVIDE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading leading-tight">
            Explore Our Visa Citizenship <br className="hidden sm:inline" /> & Immigration Service
          </h2>
        </div>

        {/* 3-Column Card Grid (Full Width Span) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCards.map((service, idx) => (
            <Link
              key={idx}
              to={`/service-details/${service.slug}`}
              className="qo-service-card group relative block bg-[#f4f4f6] hover:bg-theme-primary overflow-hidden transition-all duration-300 flex-col justify-between cursor-pointer"
            >
              {/* Card Header Content */}
              <div className="p-7 sm:p-[30px] space-y-3 min-h-[182px]">
                <h3 className="text-xl sm:text-[22px] font-extrabold text-theme-heading group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              {/* Edge-to-Edge Stretched Image Section */}
              <div className="qo-image-shine mx-7 sm:mx-[30px] h-52 sm:h-[233px] bg-gray-200 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="qo-card-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/images/hero-1.jpg'; }}
                />
              </div>

              {/* Bottom Footer Bar */}
              <div className="px-7 sm:px-[30px] py-7 flex items-center gap-3 transition-colors duration-300">
                <span className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                  Read More
                </span>
                <span className="w-7 h-7 rounded-full bg-theme-primary group-hover:bg-white text-white group-hover:text-theme-primary flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
