import React, { useState, useEffect, useRef } from 'react';

const universityPartners = [
  { name: 'New York Institute of Technology', logo: '/images/NYIT-USA-300x111.png' },
  { name: 'Massey University New Zealand', logo: '/images/NZ-2.png' },
  { name: 'Lincoln University', logo: '/images/NZ-3-300x96.png' },
  { name: 'The University of Auckland', logo: '/images/New-Zealand.png' },
  { name: 'National University of Singapore', logo: '/images/Singapore-1.png' },
  { name: 'Nanyang Technological University', logo: '/images/Singapore-2.png' },
  { name: 'University of Europe for Applied Sciences', logo: '/images/UAS-Europe-300x129.png' },
  { name: 'University of Alberta', logo: '/images/Uni-Of-Alberta.png' },
  { name: 'University of Dayton USA', logo: '/images/University-Of-Dayton-USA-300x109.png' },
  { name: 'University of London', logo: '/images/University-Of-London-300x129.png' },
  { name: 'University of Toronto', logo: '/images/Canada-Uni-300x156.png' },
  { name: 'ApplyBoard', logo: '/images/Apply-Board.png' },
  { name: 'The University of Western Australia', logo: '/images/Australia-1-300x120.png' },
  { name: 'Macquarie University Sydney', logo: '/images/Australia-2-300x144.png' },
  { name: 'Flinders University', logo: '/images/Australia-3.png' },
  { name: 'De Montfort University', logo: '/images/De-Mont-Fort-University-300x124.jpg' },
  { name: 'Middlesex University London', logo: '/images/Middlesex-University-London-300x145.png' }
];

export default function UniversityPartners() {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Continuous auto scrolling
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const autoScroll = () => {
      if (!isDown.current && !isHovered.current) {
        slider.scrollLeft += scrollSpeed;

        // Seamless infinite loop
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

  // Mouse move / dragging
  const handleMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const slider = sliderRef.current;

    if (!slider) return;

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX.current) * 1.5;

    slider.scrollLeft = scrollLeftPos.current - walk;

    // Infinite loop while dragging
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
          className={`
            transition-all
            duration-1000
            ease-out
            transform
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }
          `}
        >
          <span className="text-theme-primary text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2.5">
            OUR UNIVERSITY PARTNERS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading max-w-3xl mx-auto leading-tight">
            Empowering Futures Through Global Education Partnerships.
          </h2>
        </div>
      </div>

      {/* University Logo Carousel */}
      <div className="relative max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Left gradient */}
        <div className="absolute left-4 sm:left-6 lg:left-10 top-0 bottom-0 w-12 sm:w-20 lg:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right gradient */}
        <div className="absolute right-4 sm:right-6 lg:right-10 top-0 bottom-0 w-12 sm:w-20 lg:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            isHovered.current = true;
          }}
          className="
            flex
            overflow-x-hidden
            cursor-grab
            active:cursor-grabbing
            py-4
            lg:py-5
            items-center
          "
        >
          {/* Duplicate logos for infinite carousel */}
          {[...universityPartners, ...universityPartners].map(
            (partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="
                  flex-shrink-0

                  w-full
                  sm:w-1/2
                  md:w-1/3
                  lg:w-1/4

                  px-4
                  sm:px-5
                  lg:px-6

                  h-32
                  sm:h-36
                  lg:h-40

                  flex
                  items-center
                  justify-center

                  transition-transform
                  duration-300

                  hover:scale-105
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  draggable="false"
                  className="
                    w-auto
                    h-auto

                    max-w-[92%]
                    sm:max-w-[92%]
                    lg:max-w-[94%]

                    max-h-24
                    sm:max-h-28
                    lg:max-h-32

                    object-contain

                    filter-none
                    select-none

                    pointer-events-none
                  "
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}