import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import siteConfig from '../../content/site.json';

export default function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 animate-pulse" />

      <span className="text-xs font-bold hidden sm:inline-block">
        Chat with Us
      </span>
    </a>
  );
}
