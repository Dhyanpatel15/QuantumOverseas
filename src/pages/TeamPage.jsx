import React from 'react';
import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { Reveal } from '../components/common/ReferenceSections';

export default function TeamPage() {
  return (
    <>
      <SEO title="Team Members - Quantum Overseas" description="Meet the Quantum Overseas team." canonical="/team-members" />
      <PageHeader title="Team Members" breadcrumb={[{ name: 'Team Members' }]} />

      <main className="min-h-[711px] bg-[#f5f5f7] pb-[120px] pt-[140px]">
        <div className="qo-container">
          <Reveal>
            <Link to="/team-details/mr-chintan-kothari" className="group relative block w-full max-w-[424px]">
              <div className="relative h-[424px] overflow-hidden bg-[#dedee0]">
                <img src="/images/Passport-Photo-Chintan-Kothari.jpg" alt="Mr. Chintan Kothari" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#e20935] text-white"><Share2 className="h-4 w-4" /></span>
              </div>
              <div className="relative z-10 mx-5 -mt-[50px] bg-white px-6 py-[18px] text-center shadow-[0_12px_30px_rgba(22,23,26,.12)]">
                <h3 className="mb-1 text-[21px] font-bold text-[#16171a]">Mr. Chintan Kothari</h3>
                <p className="text-base text-[#5e5f63]">Founder and CEO</p>
              </div>
            </Link>
          </Reveal>
        </div>
      </main>
    </>
  );
}
