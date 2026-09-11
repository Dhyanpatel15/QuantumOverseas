import React from 'react';

const partners = [
  { name: 'Middlesex University London', logo: '/images/Middlesex-University-London-300x145.png' },
  { name: 'NYIT USA', logo: '/images/NYIT-USA-300x111.png' },
  { name: 'University of London', logo: '/images/University-Of-London-300x129.png' },
  { name: 'University of Toronto', logo: '/images/University-Of-Toronto.jpg' },
  { name: 'University of Alberta', logo: '/images/Uni-Of-Alberta.png' },
  { name: 'De Montfort University', logo: '/images/De-Mont-Fort-University-300x124.jpg' },
  { name: 'ApplyBoard', logo: '/images/Apply-Board.png' },
  { name: 'Europe Business School', logo: '/images/Europe_Business_School-removebg-preview-300x164.png' }
];

export default function PartnersLogo() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          Trusted Global University & Academic Partners
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div key={idx} className="p-2 flex items-center justify-center h-16 w-full">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
