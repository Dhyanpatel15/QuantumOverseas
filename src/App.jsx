import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TopHeader from './components/common/TopHeader';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import OffcanvasMenu from './components/common/OffcanvasMenu';
import SearchModal from './components/common/SearchModal';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import ScrollToTopWrapper from './router/ScrollToTopWrapper';
import AppRoutes from './router/AppRoutes';
import CustomCursor from './components/common/CustomCursor';
import PageEffects from './components/common/PageEffects';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenQuote = () => {
    if (location.pathname === '/contact') {
      const section = document.getElementById('contact-section') || document.getElementById('fillup-form');
      if (section) {
        const headerOffset = 90;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-theme-primary selection:text-white">
      <ScrollToTopWrapper />
      <PageEffects />

      <div>
        <TopHeader />
        <Navbar
          onOpenQuote={handleOpenQuote}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        <AppRoutes onOpenQuote={handleOpenQuote} />
      </div>

      <Footer />

      {/* Interactive Global Modals */}
      <OffcanvasMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenQuote={handleOpenQuote}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Floating Utilities */}
      <CustomCursor />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}
