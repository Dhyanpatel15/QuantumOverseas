import React from 'react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { QuestionList, Reveal, StudyVisaBand } from '../components/common/ReferenceSections';

const firstQuestions = [
  { question: 'Which is the prerequisites for immigration?', answer: 'The prerequisites depend on your destination and visa category. A valid passport, proof of funds, educational or employment records, language scores and character documents are commonly required.' },
  { question: 'What are the contact address of Immigway?', answer: 'Quantum Overseas is located at Block G, 304 Titanium Business Centre, Prahladnagar, Ahmedabad - 380015, Gujarat, INDIA.' },
  { question: 'What IELTS Score required for Canada?', answer: 'The required IELTS score depends on the institution and program. Most Canadian study programs expect an overall band between 6.0 and 6.5 with minimum section scores.' },
];

const moreQuestions = [
  { question: 'How long does a visa application take?', answer: 'Processing time varies by destination, visa type and application season. We provide the latest estimated timeline when your profile is assessed.' },
  { question: 'Can I apply after a previous visa refusal?', answer: 'Yes. Our team first reviews the refusal reasons and then prepares a stronger application with the missing evidence and explanation.' },
  { question: 'Do you provide university admission support?', answer: 'Yes. We assist with course selection, applications, offers, SOP preparation, financial guidance and the complete student visa process.' },
  { question: 'Can my family travel with me?', answer: 'Many study, work and permanent residency pathways permit eligible dependants. The exact conditions vary by country and visa program.' },
];

export default function FaqsPage({ onOpenQuote }) {
  return (
    <>
      <SEO title="FAQ’s - Quantum Overseas" description="Frequently asked immigration and visa questions." canonical="/faqs" />
      <PageHeader title="FAQ’s" breadcrumb={[{ name: 'FAQ’s' }]} />

      <main>
        <section className="min-h-[760px] bg-white py-[120px]">
          <div className="qo-container grid items-start gap-12 lg:grid-cols-2 lg:gap-[30px]">
            <Reveal>
              <span className="qo-eyebrow">FREQUENTLY ASKED QUESTION</span>
              <h2 className="qo-display">Frequently Asked<br />Questions</h2>
            </Reveal>
            <Reveal delay={100}><QuestionList items={firstQuestions} initialOpen={1} /></Reveal>
          </div>
        </section>

        <StudyVisaBand onOpenQuote={onOpenQuote} />

        <section className="bg-white py-[132px]">
          <div className="qo-container grid items-start gap-12 lg:grid-cols-2 lg:gap-[40px]">
            <Reveal>
              <span className="qo-eyebrow">GET YOUR ANSWER</span>
              <h2 className="qo-display">Questions &amp; Answer</h2>
              <p className="mt-6 max-w-[520px] text-base leading-7 text-[#5e5f63]">Our specialists provide clear answers and practical next steps for every visa profile.</p>
            </Reveal>
            <Reveal delay={100}><QuestionList items={moreQuestions} /></Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
