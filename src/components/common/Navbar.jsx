import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown, Search, Menu } from 'lucide-react';
import siteConfig from '../../content/site.json';

export default function Navbar({ onOpenQuote, onOpenSearch, onOpenMobileMenu }) {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const primaryNavigation = siteConfig.navigation
    .filter((item) => ['About', 'Visa Services', 'Our Team', 'Contact'].includes(item.name))
    .map((item) => (item.name === 'Visa Services' ? { ...item, name: 'Visa' } : item));

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (item) => {
    if (item.path === '/' && location.pathname === '/') return true;
    if (item.path !== '/' && location.pathname.startsWith(item.path)) return true;
    if (item.children && item.children.some((child) => location.pathname === child.path)) return true;
    return false;
  };

  return (
    <header
      className={`w-full z-40 bg-white transition-all duration-300 ${
        isSticky
          ? 'fixed top-0 left-0 shadow-md py-2.5'
          : 'relative py-3.5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={siteConfig.brand.logo}
              alt={siteConfig.brand.name}
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Center Navigation Links with Dropdowns */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6 flex-1 justify-center">
            {primaryNavigation.map((item) => (
              <div
                key={item.name}
                className="relative group py-2"
              >
                <Link
                  to={item.path}
                  className={`whitespace-nowrap font-semibold text-[13.5px] 2xl:text-[14.5px] transition-colors py-1 flex items-center gap-1 ${
                    isActive(item)
                      ? 'text-theme-primary font-bold'
                      : 'text-[#16171a] hover:text-theme-primary'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-theme-primary group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-[#101A29] text-white rounded-xl shadow-2xl py-2 px-1 border border-gray-800">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`flex items-center justify-between px-4 py-2.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                            location.pathname === child.path
                              ? 'bg-theme-primary text-white font-bold'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          }`}
                        >
                          <span>{child.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-60 flex-shrink-0 ml-2" />
                        </Link>
                      ))}
                      <div className="border-t border-gray-800/80 mt-1 pt-1.5 px-3 pb-1">
                        <Link
                          to={item.path}
                          className="text-[11px] font-bold text-theme-primary hover:text-red-300 transition-colors flex items-center justify-between"
                        >
                          <span>View All {item.name}</span>
                          <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 lg:gap-6 flex-shrink-0">
            {/* Phone Number Info Block */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="w-10 h-10 rounded-full border border-red-200 bg-red-50 text-theme-primary flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div className="text-left flex flex-col justify-center">
                <span className="text-[10.5px] font-extrabold text-gray-500 uppercase tracking-wider block leading-tight">
                  PHONE:
                </span>
                <div className="mt-0.5">
                  <a
                    href="tel:+919998335441"
                    className="text-[13.5px] font-bold text-[#16171a] hover:text-theme-primary transition-colors tracking-tight whitespace-nowrap"
                  >
                    +91 999 8335 441
                  </a>
                </div>
              </div>
            </div>

            {/* Get A Quote Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 bg-transparent text-[#16171a] hover:text-theme-primary font-bold text-xs sm:text-sm py-2 px-1 transition-colors group cursor-pointer flex-shrink-0"
            >
              <span className="whitespace-nowrap font-bold text-[13.5px]">Get A Quote</span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-theme-primary text-white flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Search Trigger (Red Square block) */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-theme-primary hover:bg-theme-primaryHover text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 shadow-sm"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="xl:hidden w-10 h-10 rounded bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
              aria-label="Toggle navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
