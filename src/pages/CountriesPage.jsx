import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { Reveal, SectionHeading } from '../components/common/ReferenceSections';
import countries from '../content/countries.json';

const countryOrder = ['united-kingdom', 'canada', 'united-states-of-america', 'europe', 'australia', 'new-zealand', 'dubai', 'singapore'];
const displayNames = { 'united-kingdom': 'UK', 'united-states-of-america': 'USA', europe: 'Europe', dubai: 'Dubai', singapore: 'Singapore' };

export default function CountriesPage() {
  const orderedCountries = countryOrder.map((slug) => countries.find((country) => country.slug === slug)).filter(Boolean);

  return (
    <>
      <SEO title="Countries - Quantum Overseas" description="Countries supported by Quantum Overseas for immigration and education." canonical="/countries" />
      <PageHeader title="Countries" breadcrumb={[{ name: 'Countries' }]} />

      <main className="bg-white pb-[180px] pt-[92px] lg:pb-[408px]">
        <div className="qo-container">
          <Reveal>
            <SectionHeading eyebrow="COUNTRIES WE OFFER" title="Countries We Support For Immigration" centered className="mx-auto mb-[63px] max-w-[760px]" />
          </Reveal>

          <div className="grid grid-cols-1 gap-x-6 gap-y-[45px] md:grid-cols-2 lg:grid-cols-3">
            {orderedCountries.map((country, index) => (
              <Reveal key={country.slug} delay={(index % 3) * 90}>
                <Link to={`/countries/${country.slug}`} className="group block bg-white">
                  <div className="h-[321px] overflow-hidden bg-[#e9e9ea]">
                    <img src={country.image} alt={country.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex min-h-[72px] items-center justify-between gap-5 pt-[23px]">
                    <div className="flex items-center gap-4">
                      <span className="text-[31px] leading-none">{country.flag}</span>
                      <h3 className="text-[24px] font-bold leading-[1.45] text-[#16171a] transition-colors group-hover:text-[#e20935]">{displayNames[country.slug] || country.name}</h3>
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f1f2] text-[#16171a] transition-all group-hover:bg-[#e20935] group-hover:text-white"><ChevronRight className="h-5 w-5" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
