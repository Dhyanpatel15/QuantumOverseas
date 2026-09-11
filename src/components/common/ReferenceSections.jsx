import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Phone } from 'lucide-react';
import siteConfig from '../../content/site.json';

export function Reveal({ children, className = '', delay = 0 }) {
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={nodeRef}
      className={`qo-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, centered = false, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <span className="qo-eyebrow">{eyebrow}</span>}
      <h2 className="qo-display">{title}</h2>
    </div>
  );
}

export function QuickContact({ onOpenQuote }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onOpenQuote?.();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white px-[30px] py-[29px] shadow-[0_12px_35px_rgba(22,23,26,.08)]">
      <h3 className="mb-6 text-[24px] font-bold leading-[1.45] text-[#16171a]">Quick Contact</h3>
      <div className="grid grid-cols-2 gap-3">
        <input className="qo-input" aria-label="First name" placeholder="First Name" required />
        <input className="qo-input" aria-label="Last name" placeholder="Last Name" required />
      </div>
      <input className="qo-input mt-3" type="email" aria-label="Email address" placeholder="Email Address" required />
      <input className="qo-input mt-3" type="tel" aria-label="Phone number" placeholder="Phone Number" required />
      <textarea className="qo-input mt-3 min-h-[108px] resize-none" aria-label="Message" placeholder="Your Message" />
      <button type="submit" className="mt-3 flex min-h-[58px] w-full items-center justify-center gap-2 bg-[#e20935] px-6 text-sm font-bold text-white transition-colors hover:bg-[#16171a]">
        Submit <ChevronRight className="h-4 w-4" />
      </button>
    </form>
  );
}

export function ExploreWorldCard({ onOpenQuote }) {
  return (
    <div
      className="relative min-h-[280px] overflow-hidden bg-cover bg-center px-7 py-9 text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(22,23,26,.94), rgba(22,23,26,.68)), url('/images/contact-bg-1.jpg')",
      }}
    >
      <span className="mb-2 block text-sm font-bold uppercase tracking-[.15em] text-[#e20935]">Dream Tour</span>
      <h2 className="mb-8 text-[32px] font-bold leading-[1.18] text-white">Explore The World</h2>
      <button type="button" onClick={onOpenQuote} className="inline-flex min-h-[54px] items-center gap-3 bg-[#e20935] px-7 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#16171a]">
        Contact Us <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export function DetailSidebar({ onOpenQuote }) {
  return (
    <aside className="space-y-[30px]">
      <QuickContact onOpenQuote={onOpenQuote} />
      <ExploreWorldCard onOpenQuote={onOpenQuote} />
    </aside>
  );
}

export function StudyVisaBand({ onOpenQuote }) {
  return (
    <section
      className="relative min-h-[350px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#16171a]/95 via-[#16171a]/82 to-[#e20935]/75" />
      <div className="relative mx-auto flex min-h-[350px] max-w-[1160px] flex-col items-start justify-center gap-8 px-5 sm:flex-row sm:items-center sm:justify-between">
        <Reveal>
          <span className="mb-3 block text-sm font-bold uppercase tracking-[.17em] text-[#e20935]">Get Your Visa</span>
          <h2 className="max-w-[680px] text-[36px] font-bold leading-[1.15] text-white sm:text-[48px]">
            We Counsel Students To Get<br className="hidden sm:block" /> Study Visas
          </h2>
        </Reveal>
        <button type="button" onClick={onOpenQuote} className="inline-flex min-h-[64px] flex-shrink-0 items-center gap-4 bg-[#e20935] px-9 text-base font-bold text-white transition-colors hover:bg-white hover:text-[#16171a]">
          Get A Quote <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

export function QuestionList({ items, initialOpen = 0, headingLevel }) {
  const [openIndex, setOpenIndex] = useState(initialOpen);
  const HeadingTag = headingLevel ? `h${headingLevel}` : 'div';

  return (
    <div className="divide-y divide-[#d9d9dc] border-y border-[#d9d9dc]">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <HeadingTag>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex min-h-[78px] w-full items-center justify-between gap-5 py-5 text-left text-[18px] font-bold leading-7 text-[#16171a] transition-colors hover:text-[#e20935]"
              >
                <span>{item.question}</span>
                <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${open ? 'bg-[#e20935] text-white' : 'bg-[#f1f1f2] text-[#16171a]'}`}>
                  <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                </span>
              </button>
            </HeadingTag>
            <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="pb-6 pr-12 text-[16px] leading-7 text-[#5e5f63]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function HelpCard({ title = 'Do You Have any question?' }) {
  return (
    <div className="bg-[#e20935] px-8 py-9 text-white">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#e20935]">
        <Phone aria-hidden="true" className="h-5 w-5" />
      </span>
      <h4 className="mb-4 text-[24px] font-bold leading-[1.35] text-white">{title}</h4>
      <h3 className="text-[22px] font-bold leading-tight text-white">
        <a href={siteConfig.contact.phoneLink} className="text-white hover:underline">
          {siteConfig.contact.phone}
        </a>
      </h3>
      <p className="mt-4 text-sm leading-6 text-white/80">It is a long established fact that a reader will be distracted by the rea</p>
      <a href="/contact" className="mt-6 inline-flex min-h-[54px] items-center gap-2 bg-white px-5 text-sm font-bold text-[#16171a] transition-colors hover:bg-[#16171a] hover:text-white">
        contact us <ChevronRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  );
}
