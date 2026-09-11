import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const countryList = [
  { name: 'United Kingdom (UK)', slug: 'united-kingdom', flag: '/images/UK.png', image: '/images/United-Kingdom-UK.jpg' },
  { name: 'Canada', slug: 'canada', flag: '/images/canada.png', image: '/images/Canada.jpg' },
  { name: 'United States of America (USA)', slug: 'united-states-of-america', flag: '/images/USA.png', image: '/images/United-States-of-America-USA.jpg' },
  { name: 'Europe (Schengen Region)', slug: 'europe', flag: '/images/europe.png', image: '/images/Europe-Schengen-Region.jpg' },
  { name: 'Australia', slug: 'australia', flag: '/images/Australia.png', image: '/images/Australia.jpg' },
  { name: 'New Zealand', slug: 'new-zealand', flag: '/images/New-Zealand.png', image: '/images/New-Zealand.jpg' },
  { name: 'Dubai (UAE)', slug: 'dubai', flag: '/images/Dubai.png', image: '/images/Dubai-UAE.jpg' },
  { name: 'Singapore', slug: 'singapore', flag: '/images/Singapore.png', image: '/images/Singapore.jpg' },
];

export default function CountriesSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-theme-primary text-sm font-bold uppercase tracking-widest block mb-3">
            COUNTRIES WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading max-w-3xl mx-auto leading-tight">
            Countries We Support <br /> For Immigration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {countryList.map((country) => (
            <Link key={country.slug} to={`/countries/${country.slug}`} className="qo-country-card group text-center">
              <div className="relative">
                <div className="qo-image-shine rounded-tl-xl rounded-br-xl">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="qo-card-image w-full aspect-[1.32/1] object-cover rounded-tl-xl rounded-br-xl group-hover:scale-[1.015] transition-transform duration-300"
                  />
                </div>
                <div className="qo-country-flag absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white p-1.5 shadow-md">
                  <img src={country.flag} alt="" className="w-full h-full object-contain rounded-full" />
                </div>
              </div>
              <h3 className="text-xl sm:text-[22px] font-extrabold text-theme-heading mt-9 group-hover:text-theme-primary transition-colors">
                {country.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/countries" className="inline-flex items-center gap-2 bg-theme-primary hover:bg-theme-primaryHover text-white font-bold px-10 py-5 text-sm transition-colors">
            <span>View More</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
