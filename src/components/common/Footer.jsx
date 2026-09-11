import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, ChevronRight } from 'lucide-react';
import siteConfig from '../../content/site.json';

const visaLinks = [
  ['Student Visa', '/service-details/student-visa'],
  ['PR Visa', '/service-details/permanent-residency-visa'],
  ['Employment Visas', '/service-details/employment-visa'],
  ['Visitor Visa', '/service-details/visitor-visa'],
  ['Business / Investor Visa', '/service-details/business-investor-visa'],
  ['Family Visa', '/service-details/family-visa'],
  ['Other Visa Programs', '/service-details/other-visa-programs'],
];

export default function Footer() {
  return (
    <footer className="bg-[#16171a] text-white overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-5 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 border-b border-white/10">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full border-2 border-theme-primary text-theme-primary flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm text-gray-400">Call Us 24/7</p>
              <a href={siteConfig.contact.phoneLink} className="text-base font-extrabold hover:text-theme-primary">{siteConfig.contact.phone}</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full border-2 border-theme-primary text-theme-primary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm text-gray-400">Make A Quote</p>
              <a href={siteConfig.contact.emailLink} className="text-base font-extrabold hover:text-theme-primary">{siteConfig.contact.email}</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-full border-2 border-theme-primary text-theme-primary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-sm font-extrabold leading-6">Block G, 304 Titanium Business Centre, Prahladnagar, Ahmedabad - 380015, Gujarat, INDIA</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={siteConfig.brand.logo}
                alt={siteConfig.brand.name}
                className="w-[190px] h-[150px] object-contain brightness-0 invert"
              />
            </Link>
            <div className="flex items-center gap-3 mt-5">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 text-gray-400 hover:bg-theme-primary hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 text-gray-400 hover:bg-theme-primary hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-extrabold text-white mb-7">Visa</h5>
            <ul className="space-y-3">
              {visaLinks.map(([name, path]) => (
                <li key={name}>
                  <Link to={path} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-theme-primary transition-colors">
                    <ChevronRight className="w-4 h-4" />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-extrabold text-white mb-7">Instagram</h5>
            <div className="grid grid-cols-3 gap-2">
              {['/images/01.jpg', '/images/02-1.jpg', '/images/03-1.jpg', '/images/04-1.jpg', '/images/05.jpg', '/images/06.jpg'].map((image) => (
                <a key={image} href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="block h-16 bg-white/5 overflow-hidden">
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg font-extrabold text-white mb-7">Newsletters</h5>
            <p className="text-sm text-gray-400 leading-6 mb-5">Sign Up For News &amp; Get 30% Off Your Next Course.</p>
            <form className="flex" onSubmit={(event) => event.preventDefault()}>
              <input type="email" aria-label="Email address" placeholder="Your email address" className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-[#16171a] outline-none" />
              <button type="submit" aria-label="Subscribe" className="w-12 bg-theme-primary text-white flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#101114] border-t border-white/5">
        <div className="max-w-[1120px] mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>Copyright © 2026 Quantum Overseas All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white">Company</Link>
            <Link to="/contact" className="hover:text-white">Support</Link>
            <Link to="/faqs" className="hover:text-white">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
