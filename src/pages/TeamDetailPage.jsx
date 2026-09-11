import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { QuickContact, Reveal } from '../components/common/ReferenceSections';
import siteConfig from '../content/site.json';
import team from '../content/team.json';

const profileCopy = {
  'mr-chintan-kothari': 'Mr. Kothari is a management expert with more than 15 years of experience in designing process flow and execution of process, His expertise in Visa documentation and meticulousness in the way process progress is a benefit for Quantum Overseas LLP.',
};

export default function TeamDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const member = team.find((item) => item.slug === slug || item.id === slug);
  if (!member) return <Navigate to="/team-members" replace />;

  const headerName = member.slug === 'devid-miller-2' ? 'Devid Miller' : member.name;

  return (
    <>
      <SEO title={`${headerName} - Quantum Overseas`} description={`${member.name}, ${member.role} at Quantum Overseas.`} canonical={`/team-details/${member.slug}`} />
      <PageHeader title={headerName} breadcrumb={[{ name: 'Team', path: '/team-members' }, { name: headerName }]} />

      <main>
        <section className="bg-white py-[120px]">
          <div className="qo-container grid items-center gap-12 lg:grid-cols-2 lg:gap-[100px]">
            <Reveal><img src={member.image} alt={member.name} className="h-[430px] w-full object-cover sm:h-[540px] lg:h-[610px]" /></Reveal>
            <Reveal delay={100}>
              <h2 className="mb-2 text-[48px] font-bold leading-[1.15] text-[#16171a]">{member.name}</h2>
              <h5 className="mb-5 text-[18px] font-bold text-[#e20935]">{member.role}</h5>
              <p className="text-base leading-7 text-[#5e5f63]">{profileCopy[member.slug] || member.bio}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {(member.skills || []).map((skill) => <span key={skill} className="bg-[#f5f5f7] px-4 py-2 text-sm font-bold text-[#16171a]">{skill}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#f5f5f7] py-[115px]">
          <div className="qo-container grid items-center gap-12 lg:grid-cols-2 lg:gap-[80px]">
            <Reveal>
              <span className="qo-eyebrow">OUR EXPERIENCE</span>
              <h3 className="text-[32px] font-bold leading-[1.35] text-[#16171a]">Welcome To Our Culinary Haven Where Each Dish Is A Symphony Of Flavors Meticulously</h3>
            </Reveal>
            <Reveal delay={100} className="space-y-7">
              {(member.skills || []).map((skill, index) => (
                <div key={skill}>
                  <div className="mb-2 flex justify-between text-sm font-bold text-[#16171a]"><span>{skill}</span><span>{92 - index * 4}%</span></div>
                  <div className="h-2 bg-white"><span className="block h-full bg-[#e20935]" style={{ width: `${92 - index * 4}%` }} /></div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-[120px]">
          <div className="qo-container grid items-start gap-12 lg:grid-cols-2 lg:gap-[45px]">
            <Reveal>
              <span className="qo-eyebrow">CONTACT INFORMATION</span>
              <h2 className="qo-display mb-10">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-5"><span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#e20935] text-white"><Phone className="h-5 w-5" /></span><div><h3 className="mb-1 text-[20px] font-bold text-[#16171a]">Call For Inquiry</h3><p>{siteConfig.contact.phone}</p></div></div>
                <div className="flex gap-5"><span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#e20935] text-white"><Mail className="h-5 w-5" /></span><div><h3 className="mb-1 text-[20px] font-bold text-[#16171a]">Send Us Email</h3><p>{siteConfig.contact.email}</p></div></div>
                <div className="flex gap-5"><span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#e20935] text-white"><MapPin className="h-5 w-5" /></span><div><h3 className="mb-1 text-[20px] font-bold text-[#16171a]">Location</h3><p className="max-w-[470px]">Block G, 304 Titanium Business Centre, Prahladnagar, Ahmedabad - 380015, Gujarat, INDIA</p></div></div>
              </div>
            </Reveal>
            <Reveal delay={100} className="bg-[#16171a] p-8 sm:p-[45px]">
              <h3 className="mb-2 text-[26px] font-bold text-white">Need Help For Project!</h3>
              <p className="mb-7 text-sm leading-6 text-white/65">We are ready to help your next projects, let’s work together</p>
              <QuickContact onOpenQuote={onOpenQuote} />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
