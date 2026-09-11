import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// Lazy-loaded pages for route-level code splitting
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const VisaServicesPage = lazy(() => import('../pages/VisaServicesPage'));
const ServiceDetailPage = lazy(() => import('../pages/ServiceDetailPage'));
const CountriesPage = lazy(() => import('../pages/CountriesPage'));
const CountryDetailPage = lazy(() => import('../pages/CountryDetailPage'));
const CoachingPage = lazy(() => import('../pages/CoachingPage'));
const CoachingDetailPage = lazy(() => import('../pages/CoachingDetailPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const TeamDetailPage = lazy(() => import('../pages/TeamDetailPage'));
const FaqsPage = lazy(() => import('../pages/FaqsPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const BlogDetailPage = lazy(() => import('../pages/BlogDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ComingSoonPage = lazy(() => import('../pages/ComingSoonPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-10 h-10 text-theme-primary animate-spin" />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Loading Page...
        </span>
      </div>
    </div>
  );
}

export default function AppRoutes({ onOpenQuote }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<HomePage onOpenQuote={onOpenQuote} />} />
        <Route path="/about" element={<AboutPage onOpenQuote={onOpenQuote} />} />
        <Route path="/about-us" element={<AboutPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/services" element={<VisaServicesPage onOpenQuote={onOpenQuote} />} />
        <Route path="/visa" element={<VisaServicesPage onOpenQuote={onOpenQuote} />} />
        <Route path="/visa-services" element={<VisaServicesPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/countries" element={<CountriesPage onOpenQuote={onOpenQuote} />} />
        <Route path="/country" element={<CountriesPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/coaching" element={<CoachingPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/team-members" element={<TeamPage onOpenQuote={onOpenQuote} />} />
        <Route path="/team" element={<TeamPage onOpenQuote={onOpenQuote} />} />
        <Route path="/our-team" element={<TeamPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/faqs" element={<FaqsPage onOpenQuote={onOpenQuote} />} />
        <Route path="/faq" element={<FaqsPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/blog" element={<BlogPage onOpenQuote={onOpenQuote} />} />
        <Route path="/blogs" element={<BlogPage onOpenQuote={onOpenQuote} />} />
        <Route path="/blog-grid" element={<BlogPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />

        {/* Dynamic Detail Pages */}
        <Route path="/service-details/:slug" element={<ServiceDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/services/:slug" element={<ServiceDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/service/:slug" element={<ServiceDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/visa/:slug" element={<ServiceDetailPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/countries/:slug" element={<CountryDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/country/:slug" element={<CountryDetailPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/project-details/:slug" element={<CoachingDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/coaching/:slug" element={<CoachingDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/course/:slug" element={<CoachingDetailPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/team-details/:slug" element={<TeamDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/team/:slug" element={<TeamDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/team-members/:slug" element={<TeamDetailPage onOpenQuote={onOpenQuote} />} />
        
        <Route path="/blog/:slug" element={<BlogDetailPage onOpenQuote={onOpenQuote} />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage onOpenQuote={onOpenQuote} />} />

        {/* Fallbacks */}
        <Route path="/home-2" element={<Navigate to="/" replace />} />
        <Route path="/home-3" element={<Navigate to="/" replace />} />
        <Route path="/home-4" element={<Navigate to="/" replace />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
