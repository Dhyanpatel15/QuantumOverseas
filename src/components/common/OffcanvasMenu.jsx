import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, MapPin, Mail, Phone, Clock, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';
import siteConfig from '../../content/site.json';

export default function OffcanvasMenu({ isOpen, onClose, onOpenQuote }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  if (!isOpen) return null;

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#101A29] text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-800">
              <Link to="/" onClick={onClose} className="block">
                <img
                  src={siteConfig.brand.logo}
                  alt={siteConfig.brand.name}
                  className="h-12 w-auto bg-white p-1 rounded"
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-theme-primary text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-6 space-y-1">
              {siteConfig.navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-800/60 pb-1">
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleSubmenu(item.name)}
                        className="w-full flex items-center justify-between py-3 text-left font-medium text-gray-200 hover:text-theme-primary transition-colors text-base"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubmenu === item.name ? 'rotate-180 text-theme-primary' : 'text-gray-500'
                          }`}
                        />
                      </button>
                      {openSubmenu === item.name && (
                        <div className="pl-4 py-2 space-y-2 bg-gray-900/50 rounded-lg mb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={onClose}
                              className="block py-1.5 text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="block py-3 font-medium text-gray-200 hover:text-theme-primary transition-colors text-base"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="w-full theme-btn py-3 text-sm flex items-center justify-center gap-2"
              >
                <span>Get A Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Details & Socials in Drawer Footer */}
          <div className="pt-8 border-t border-gray-800 mt-8 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-theme-primary">
              Contact Information
            </h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-theme-primary flex-shrink-0 mt-1" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-theme-primary flex-shrink-0" />
                <a href={siteConfig.contact.emailLink} className="hover:text-theme-primary">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-theme-primary flex-shrink-0" />
                <a href={siteConfig.contact.phoneLink} className="hover:text-theme-primary font-semibold">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-theme-primary flex-shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-theme-primary flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-theme-primary flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
