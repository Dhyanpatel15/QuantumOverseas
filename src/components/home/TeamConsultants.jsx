import React from 'react';
import { Link } from 'react-router-dom';

const consultants = [
  {
    id: 'mr-chintan-kothari',
    name: 'Mr. Chintan Kothari',
    role: 'Founder and CEO',
    image: '/images/Passport-Photo-Chintan-Kothari.jpg',
  },
  // {
  //   id: 'mr-ankur-shah',
  //   name: 'Mr. Ankur Shah',
  //   role: 'Director',
  //   image: '/images/Digital-Photo-Mr.-Ankur-Shah.jpg',
  // },
  // {
  //   id: 'mr-sahil-shelat',
  //   name: 'Mr. Sahil Shelat',
  //   role: 'Head Client Servicing',
  //   image: '/images/Digital-Photo_-Sahil-Shelat.jpg',
  // },
];

export default function TeamConsultants() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-theme-primary text-sm font-bold uppercase tracking-widest block mb-3">
            PROFESSIONAL PEOPLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading max-w-3xl mx-auto leading-tight">
            Meet Our Expert Visa <br /> Consultants
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultants.map((person) => (
            <Link
              key={person.id}
              to={`/team-details/${person.id}`}
              className="qo-team-card group block"
            >
              <div className="qo-image-shine h-[420px] overflow-hidden bg-gray-100 rounded-t-[28px] rounded-b-[28px]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="qo-card-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-5 text-left">
                <h3 className="text-xl sm:text-[22px] font-extrabold text-theme-heading group-hover:text-theme-primary transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{person.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
