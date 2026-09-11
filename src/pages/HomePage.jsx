import React from 'react';
import SEO from '../components/common/SEO';
import HeroSlider from '../components/home/HeroSlider';
import HomeAbout from '../components/home/HomeAbout';
import ServicesSection from '../components/home/ServicesSection';
import ComprehensiveSolutions from '../components/home/ComprehensiveSolutions';
import YouWontRegret from '../components/home/YouWontRegret';
import OurApproach from '../components/home/OurApproach';
import CountriesSection from '../components/home/CountriesSection';
import UniversityPartners from '../components/home/UniversityPartners';
import TeamConsultants from '../components/home/TeamConsultants';
import BeyondExpectations from '../components/home/BeyondExpectations';
import CorporateClients from '../components/home/CorporateClients';
import GoogleReviewsSection from '../components/home/GoogleReviewsSection';
import DiscussBanner from '../components/home/DiscussBanner';
import WorkingProcess from '../components/home/WorkingProcess';
import GetACallBackMap from '../components/home/GetACallBackMap';

export default function HomePage({ onOpenQuote }) {
  return (
    <>
      <SEO
        title="QUANTUM OVERSEAS – FLY HIGH WITH US"
        description="Quantum Overseas LLP is Ahmedabad's premier immigration and visa consulting firm specializing in student visas, PR visas, work permits, visitor visas, and coaching."
        canonical="/"
      />
      <main className="overflow-hidden">
        {/* 1. Hero Banner Slider */}
        <HeroSlider onOpenQuote={onOpenQuote} />

        {/* 2. About Company with 25 Years Badge */}
        <HomeAbout />

        {/* 3. Service We Provide (7 Visa Service Cards) */}
        <ServicesSection />

        {/* 4. Comprehensive Visa Solutions (Quantum For Every Visa You Process) */}
        <ComprehensiveSolutions />

        {/* 5. You Won't Regret Hiring Us */}
        <YouWontRegret />

        {/* 6. Our Approach (Strategic, Transparent, And Result-Driven) */}
        <OurApproach />

        {/* 7. Countries We Offer (3-Column Country Cards Grid) */}
        <CountriesSection />

        {/* 8. Our University Partners (Partner Logos) */}
        <UniversityPartners />

        {/* 9. Meet Our Expert Visa Consultants (Team Cards) */}
        <TeamConsultants />

        {/* 10. We Believe In Delivering Beyond Expectations */}
        <BeyondExpectations />

        {/* 11. Our Corporate Clients (Brand Logos) */}
        <CorporateClients />

        {/* 12. Google Testimonials & Reviews (EXCELLENT 12 reviews) */}
        <GoogleReviewsSection />

        {/* 13. Let's Discuss & Start Visa Consultations Banner */}
        <DiscussBanner onOpenQuote={onOpenQuote} />

        {/* 14. 4 Step Follow You Can Get Your Visa Easily */}
        <WorkingProcess />

        {/* 15. Get A Call Back Red Chevron Form + Location Map */}
        <GetACallBackMap />
      </main>
    </>
  );
}
