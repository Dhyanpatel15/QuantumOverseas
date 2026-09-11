import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { HelpCard, QuestionList, Reveal } from '../components/common/ReferenceSections';
import serviceDetails from '../content/serviceDetails.json';
import services from '../content/services.json';

const processHighlights = [
  'Entering & Leaving From Country',
  'Settling In Country',
  'Documents & Payments',
  'Receive Your Visa',
  'Quick & Easy Process',
  'Country Citizenship',
];

const referenceFaqs = [
  {
    question: 'Which is the prerequisites for immigration?',
    answer: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .',
  },
  {
    question: 'What are the contact address of Immigway?',
    answer: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .',
  },
  {
    question: 'What IELTS Score required for Canada?',
    answer: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .',
  },
  {
    question: 'How much time needed for visa renewal?',
    answer: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .',
  },
];

const faqIntro = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui ducimus illum modi perspiciatis accusamus soluta perferendis delectus rem.Lorem ipsum dolor sit amet delectus rem.Lorem ipsum dolor sit amet.';

function DetailList({ items, ordered = false }) {
  if (!items?.length) return null;

  if (ordered) {
    return (
      <ol className="mt-4 space-y-3 pl-6 text-base leading-7 text-[#5e5f63]" style={{ listStyleType: 'decimal' }}>
        {items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
      </ol>
    );
  }

  return (
    <ul className="mt-4 space-y-3 text-base leading-7 text-[#5e5f63]">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-3">
          <Check aria-hidden="true" className="mt-1 h-4 w-4 flex-shrink-0 text-[#e20935]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ReferenceSection({ section, index }) {
  const sectionId = `service-section-${index}`;

  return (
    <Reveal className="mt-9" delay={Math.min(index * 35, 140)}>
      <section aria-labelledby={sectionId}>
        <h3 id={sectionId} className="mb-3 text-[24px] font-bold leading-[1.35] text-[#16171a]">
          {section.heading}
        </h3>

        {section.subheading && (
          <h3 className="mb-3 mt-5 text-[20px] font-bold leading-7 text-[#16171a]">
            {section.subheading}
          </h3>
        )}

        {section.paragraphs?.map((paragraph, paragraphIndex) => (
          <p key={`${paragraph}-${paragraphIndex}`} className="mt-3 text-base leading-7 text-[#5e5f63]">
            {paragraph}
          </p>
        ))}

        <DetailList items={section.items} ordered={section.listStyle === 'ordered'} />
      </section>
    </Reveal>
  );
}

function getFallbackDetails(service) {
  return {
    articleTitle: service.title,
    description: service.description,
    showProcessHighlights: false,
    sections: [
      {
        heading: 'Visa Overview',
        listStyle: 'unordered',
        items: service.features,
      },
      {
        heading: 'Visa Center',
        subheading: 'General eligibility requirements',
        listStyle: 'ordered',
        items: service.eligibility,
      },
    ],
  };
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug || item.id === slug);
  if (!service) return <Navigate to="/services" replace />;

  const page = serviceDetails[service.slug] || getFallbackDetails(service);
  const articleTitle = page.articleTitle || service.title;

  return (
    <>
      <SEO
        exactTitle={`${service.title} – QUANTUM OVERSEAS`}
        description={page.description || service.shortDescription}
        canonical={`/service-details/${service.slug}/`}
      />
      <PageHeader
        title={service.title}
        breadcrumb={[{ name: 'Service', path: '/services' }, { name: service.title }]}
      />

      <main className="bg-white py-[120px]">
        <div className="qo-container grid items-start gap-12 lg:grid-cols-[350px_minmax(0,860px)] lg:justify-between lg:gap-10">
          <aside className="space-y-[30px]">
            <nav className="bg-[#f5f5f7] p-[30px]" aria-label="Visa categories">
              {services.filter((item) => item.slug !== 'business-visa-2').map((item) => (
                <Link
                  key={item.slug}
                  to={`/service-details/${item.slug}/`}
                  className={`mb-3 flex min-h-[58px] items-center justify-between gap-3 px-5 text-sm font-bold transition-colors last:mb-0 ${item.slug === service.slug ? 'bg-[#e20935] text-white' : 'bg-white text-[#16171a] hover:bg-[#16171a] hover:text-white'}`}
                >
                  <span>{serviceDetails[item.slug]?.menuTitle || item.title}</span>
                  <ChevronRight aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
                </Link>
              ))}
            </nav>
            <HelpCard />
          </aside>

          <article className="min-w-0">
            <Reveal>
              <img
                src={service.image}
                alt={articleTitle}
                className={`h-[340px] w-full object-cover sm:h-[460px] ${service.slug === 'business-visa-2' ? 'lg:h-[449px]' : 'lg:h-[574px]'}`}
              />
            </Reveal>

            <Reveal className="pt-[23px]">
              <h2 className="mb-3 text-[32px] font-bold leading-[1.25] text-[#16171a]">{articleTitle}</h2>
              {page.description && <p className="text-base leading-7 text-[#5e5f63]">{page.description}</p>}
            </Reveal>

            {page.sections?.map((section, index) => (
              <ReferenceSection key={`${section.heading}-${index}`} section={section} index={index} />
            ))}

            {page.showProcessHighlights !== false && (
              <Reveal className="mt-9">
                <ul className="grid gap-3 sm:grid-cols-2" aria-label="Visa process highlights">
                  {processHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-[#f5f5f7] px-5 py-4 text-sm font-semibold leading-6 text-[#5e5f63]">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 flex-shrink-0 text-[#e20935]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal className="mt-10">
              {page.showFaqHeading !== false && (
                <h3 className="mb-4 text-[26px] font-bold text-[#16171a]">Frequently Asked Question</h3>
              )}
              {page.showFaqIntro !== false && (
                <p className="mb-5 text-base leading-7 text-[#5e5f63]">{faqIntro}</p>
              )}
              <QuestionList items={referenceFaqs} headingLevel={4} />
            </Reveal>
          </article>
        </div>
      </main>
    </>
  );
}
