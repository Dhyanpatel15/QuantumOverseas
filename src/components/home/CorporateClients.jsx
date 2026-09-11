import React, { useState, useEffect, useRef } from 'react';

const clients = [
  {
    name: 'Analytix Business Solutions',
    logo: '/images/Analytix-Business-Solutions-300x156.png',
  },
  {
    name: 'Cargo Motors',
    logo: '/images/Cargo-Motors.jpg',
  },
  {
    name: 'Event 360',
    logo: '/images/Event-360-300x164.png',
  },
  {
    name: 'Kiri Accounting',
    logo: '/images/Kiri-Accouting.jpg',
  },
  {
    name: 'Natural Storage Solutions',
    logo: '/images/NSSPL.jpg',
  },
  {
    name: 'Rajdeep Inn',
    logo: '/images/Rajdeep-Inn.jpg',
  },
  {
    name: 'Shoreshine',
    logo: '/images/Shoreshine.jpg',
  },
  {
    name: 'SNF Holidays',
    logo: '/images/SNF-Holidays.jpg',
  },
  {
    name: 'TTO Ahmedabad',
    logo: '/images/TTO-Ahmedabad.jpg',
  },
  {
    name: 'Ubsidi',
    logo: '/images/Ubsidi.png',
  },
];

export default function CorporateClients() {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  // Dragging and continuous rolling state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const scrollSpeed = 0.85;

  const animFrameId = useRef(null);
  const isHovered = useRef(false);

  // Section animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Continuous automatic scrolling
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const autoScroll = () => {
      if (!isDown.current && !isHovered.current && slider) {
        slider.scrollLeft += scrollSpeed;

        // Seamless loop
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }

      animFrameId.current = requestAnimationFrame(autoScroll);
    };

    animFrameId.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  // Mouse down
  const handleMouseDown = (e) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDown.current = true;

    startX.current = e.pageX - slider.offsetLeft;
    scrollLeftPos.current = slider.scrollLeft;
  };

  // Mouse leave
  const handleMouseLeave = () => {
    isDown.current = false;
    isHovered.current = false;
  };

  // Mouse up
  const handleMouseUp = () => {
    isDown.current = false;
  };

  // Mouse drag
  const handleMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const slider = sliderRef.current;

    if (!slider) return;

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    slider.scrollLeft = scrollLeftPos.current - walk;

    // Infinite looping while dragging
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
      scrollLeftPos.current = 0;
      startX.current = x;
    } else if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth / 2;
      scrollLeftPos.current = slider.scrollWidth / 2;
      startX.current = x;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-white overflow-hidden border-t border-b border-gray-100 select-none"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 lg:mb-14">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="text-theme-primary text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2.5">
            OUR CORPORATE CLIENTS...
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading max-w-3xl mx-auto leading-tight">
            Trusted Partnerships With Leading Global Brands
          </h2>
        </div>
      </div>

      {/* Logo Slider */}
      <div className="relative max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Left Gradient */}
        <div className="absolute left-4 sm:left-6 lg:left-10 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right Gradient */}
        <div className="absolute right-4 sm:right-6 lg:right-10 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            isHovered.current = true;
          }}
          className="flex overflow-x-hidden cursor-grab active:cursor-grabbing py-4 sm:py-5 items-center"
        >
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="
                flex-shrink-0
                w-full
                sm:w-1/2
                md:w-1/3
                lg:w-1/4
                px-3
                sm:px-4
                lg:px-5
                flex
                items-center
                justify-center
                h-36
                sm:h-40
                lg:h-44
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              <img
                src={client.logo}
                alt={client.name}
                draggable="false"
                className="
                  w-auto
                  h-auto
                  max-w-[90%]
                  sm:max-w-[92%]
                  lg:max-w-[95%]
                  max-h-28
                  sm:max-h-32
                  md:max-h-36
                  lg:max-h-40
                  object-contain
                  filter-none
                  select-none
                "
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}