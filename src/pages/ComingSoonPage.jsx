import React from 'react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { Reveal } from '../components/common/ReferenceSections';

export default function ComingSoonPage() {
  return (
    <>
      <SEO title="Coming Soon - Quantum Overseas" description="Quantum Overseas coming soon." canonical="/coming-soon" />
      <PageHeader title="Coming Soon" breadcrumb={[{ name: 'Coming Soon' }]} />
      <main className="bg-white py-[130px]">
        <div className="mx-auto max-w-[780px] px-5">
          <Reveal>
            <img src="/images/abstract-coming-soon-new-arrival-background-with-splatter-effect_1017-54591-1024x819.jpg" alt="Coming soon" className="h-auto w-full object-contain" />
          </Reveal>
        </div>
      </main>
    </>
  );
}
