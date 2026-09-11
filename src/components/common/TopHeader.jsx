import React from 'react';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import siteConfig from '../../content/site.json';

export default function TopHeader() {
  return (
    <div className="bg-black text-white text-xs py-2.5 hidden md:block">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-5 flex justify-between items-center">

        {/* Left: Contact Info */}
        <div className="flex items-center gap-6 text-[12.5px] font-medium text-white/90">

          <a
            href={siteConfig.contact.emailLink}
            className="flex items-center gap-2 hover:text-white transition-colors text-white"
          >
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>{siteConfig.contact.email}</span>
          </a>

          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-3.5 h-3.5 text-white flex-shrink-0" />
            <span>
              Block G, 304 Titanium Business Centre, Prahladnagar, Ahmedabad
            </span>
          </div>

        </div>


        {/* Right: Socials */}
        <div className="flex items-center gap-3">

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors p-1 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>


          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors p-1 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>


          {/* WhatsApp */}
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors p-1 hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>


        </div>

      </div>
    </div>
  );
}