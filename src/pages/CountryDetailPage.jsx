import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { DetailSidebar, Reveal } from '../components/common/ReferenceSections';
import countries from '../content/countries.json';

const facts = {
  'united-kingdom': [['Geography :', 'Located in Northwestern Europe; consists of England, Scotland, Wales, and Northern Ireland.'], ['Capital :', 'London'], ['Population :', '~67 million'], ['Weather :', 'Temperate maritime climate; mild summers and cool, wet winters'], ['Currency :', 'British Pound Sterling (GBP)'], ['People :', 'Predominantly English, with Scottish, Welsh, and Northern Irish communities'], ['Major Industries :', 'Finance, manufacturing, technology, tourism, creative industries'], ['Time Zone :', 'GMT (GMT+1 during Daylight Saving)']],
  canada: [['Geography :', 'Second-largest country in the world; stretches from Atlantic to Pacific; features forests, mountains, and lakes.'], ['Capital :', 'Ottawa'], ['Population :', '~39 million'], ['Weather :', 'Varied – cold winters in the north, temperate in the south, mild coastal climate on the west coast'], ['Currency :', 'Canadian Dollar (CAD)'], ['People :', 'Diverse, with European, Asian, and Indigenous communities'], ['Major Industries :', 'Natural resources, technology, finance, aerospace, tourism'], ['Time Zone :', 'Multiple time zones from PST (UTC-8) to NST (UTC-3:30)']],
  'united-states-of-america': [['Geography :', '50 states across North America; includes mountains, plains, deserts, and coastal areas'], ['Capital :', 'Washington, D.C.'], ['Population :', '~333 million'], ['Weather :', 'Diverse; temperate, continental, tropical, desert depending on region'], ['Currency :', 'United States Dollar (USD)'], ['People :', 'Multiethnic – European, African, Asian, Hispanic'], ['Major Industries :', 'Technology, finance, healthcare, entertainment, manufacturing'], ['Time Zone :', 'Six major zones: EST, CST, MST, PST, AKST, HST']],
  europe: [['Geography :', 'Diverse continent from Mediterranean coasts to Alpine mountains'], ['Capital :', 'Paris, Berlin, Rome, Madrid'], ['Population :', '~447 million (Schengen Area)'], ['Weather :', 'Varies from Mediterranean (warm summers, mild winters) to continental (cold winters, warm summers)'], ['Currency :', 'Euro (EUR) in most countries; others use local currencies'], ['People :', 'Diverse ethnicities and languages across countries'], ['Major Industries :', 'Automotive, manufacturing, finance, tourism, technology'], ['Time Zone :', 'Multiple; mainly CET (UTC+1)']],
  australia: [['Geography :', 'Island continent; surrounded by Indian and Pacific Oceans; deserts, beaches, and rainforests'], ['Capital :', 'Canberra'], ['Population :', '~26 million'], ['Weather :', 'Varied – tropical north, temperate south; generally warm'], ['Currency :', 'Australian Dollar (AUD)'], ['People :', 'Predominantly of European descent; multicultural society'], ['Major Industries :', 'Mining, agriculture, tourism, education, technology'], ['Time Zone :', 'Multiple zones; main is AEST (UTC+10)']],
  'new-zealand': [['Geography :', 'Two main islands in the South Pacific; mountains, fjords, and coastal plains'], ['Capital :', 'Wellington'], ['Population :', '~5 million'], ['Weather :', 'Temperate maritime; mild summers, cool winters'], ['Currency :', 'New Zealand Dollar (NZD)'], ['People :', 'Majority European descent; significant Māori population'], ['Major Industries :', 'Agriculture, tourism, film, technology'], ['Time Zone :', 'NZST (UTC+12), NZDT (UTC+13 during daylight saving)']],
  dubai: [['Geography :', 'Coastal city in the Persian Gulf; desert landscape'], ['Capital :', 'Abu Dhabi (Dubai is a major emirate)'], ['Population :', '~ 3.5 million (Dubai)'], ['Weather :', 'Hot desert climate; extremely hot summers, mild winters'], ['Currency :', 'UAE Dirham (AED)'], ['People :', 'Expatriate majority; Emirati nationals'], ['Major Industries :', 'Tourism, real estate, finance, trade, aviation'], ['Time Zone :', 'Gulf Standard Time (GST, UTC+4)']],
  singapore: [['Geography :', 'City-state at the southern tip of the Malay Peninsula; tropical climate'], ['Capital :', 'Singapore (city-state)'], ['Population :', '~5.9 million'], ['Weather :', 'Tropical rainforest climate; warm and humid year-round with frequent rainfall'], ['Currency :', 'Singapore Dollar (SGD)'], ['People :', 'Diverse; Chinese, Malay, Indian, and other ethnic groups'], ['Major Industries :', 'Finance, trade, technology, logistics, tourism'], ['Time Zone :', 'Singapore Standard Time (SGT, UTC+8)']],
};

const pageNames = { 'united-states-of-america': 'United States Of America', europe: 'Europe', dubai: 'Dubai', singapore: 'Singapore' };

export default function CountryDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const country = countries.find((item) => item.slug === slug || item.id === slug);
  if (!country) return <Navigate to="/countries" replace />;
  const title = pageNames[country.slug] || country.name;

  return (
    <>
      <SEO title={`${title} - Quantum Overseas`} description={country.tagline} canonical={`/countries/${country.slug}`} />
      <PageHeader title={title} breadcrumb={[{ name: 'Countries', path: '/countries' }, { name: title }]} />

      <main className="bg-white py-[120px]">
        <div className="qo-container grid items-start gap-12 lg:grid-cols-[minmax(0,847px)_353px] lg:justify-between lg:gap-8">
          <article>
            <Reveal>
              <h2 className="mb-[10px] text-[48px] font-bold leading-[1.15] text-[#16171a]">{title}</h2>
              <img src={country.image} alt={title} className="h-[340px] w-full object-cover sm:h-[500px] lg:h-[641px]" />
            </Reveal>
            <Reveal className="mt-[30px] bg-[#f5f5f7] px-[35px] py-[18px]">
              {(facts[country.slug] || []).map(([label, value]) => (
                <div key={label} className="border-b border-[#dedee0] py-[13px] last:border-0">
                  <h3 className="text-[18px] font-bold leading-7 text-[#16171a]">{label}</h3>
                  <p className="text-base leading-7 text-[#5e5f63]">{value}</p>
                </div>
              ))}
            </Reveal>
          </article>
          <DetailSidebar onOpenQuote={onOpenQuote} />
        </div>
      </main>
    </>
  );
}
