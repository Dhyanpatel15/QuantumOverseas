import React from 'react';
import homeData from '../../content/home.json';

/* -------------------------------------------------------------------------- */
/*  Reference-style custom icons                                               */
/* -------------------------------------------------------------------------- */

function PassportIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-[54px] w-[54px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18.5 11.5H44.5C46.1569 11.5 47.5 12.8431 47.5 14.5V52.5H18.5V11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 15.5H40.5C42.1569 15.5 43.5 16.8431 43.5 18.5V56.5H14.5V15.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="35" r="10.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M18.8 35H39.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M29 24.5C32.15 27.5 33.35 31.15 33.35 35C33.35 38.85 32.15 42.5 29 45.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M29 24.5C25.85 27.5 24.65 31.15 24.65 35C24.65 38.85 25.85 42.5 29 45.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21.5 49H36.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoneyIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-[60px] w-[60px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="rotate(-34 32 32)">
        {/* rear note edge visible at the lower-left, like the reference icon */}
        <path
          d="M9.5 24.5V44.5H47.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* main bank note */}
        <rect
          x="13.5"
          y="19.5"
          width="41"
          height="24"
          rx="0.7"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        {/* curved/cut corner details */}
        <path
          d="M13.8 27C18.1 27 21 24.2 21 19.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M47 19.8C47 24.2 49.9 27 54.2 27"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M13.8 36C18.1 36 21 38.8 21 43.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M47 43.2C47 38.8 49.9 36 54.2 36"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* centre currency mark */}
        <circle cx="34" cy="31.5" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M36.7 28.6C35.9 27.9 34.9 27.5 33.8 27.5C31.9 27.5 30.6 28.5 30.6 29.8C30.6 31.2 31.8 31.8 34 32.3C36.1 32.8 37.4 33.4 37.4 34.9C37.4 36.4 36 37.5 34 37.5C32.6 37.5 31.4 37 30.5 36.1M34 26.1V38.9"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* side dots / small marks */}
        <circle cx="18" cy="31.5" r="1.35" fill="currentColor" />
        <circle cx="50" cy="31.5" r="1.35" fill="currentColor" />
      </g>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 72 72"
      className="h-[60px] w-[60px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M33.7 18.2C33.7 12.8 37.9 8.5 43.2 8.5C48.5 8.5 52.7 12.8 52.7 18.2V27.2C52.7 32.6 48.5 36.9 43.2 36.9C37.9 36.9 33.7 32.6 33.7 27.2V18.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M34 19.5C37.8 18.6 40.4 16.7 42.4 13.4C44.6 17 48 19.1 52.6 19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M28.2 43.4C31.1 38.9 36.5 36.3 43.2 36.3C49.9 36.3 55.3 38.9 58.2 43.4V58.5H28.2V43.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M24.2 58.5H62.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M36.4 46.5H50V56.8H36.4V46.5Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="43.2" cy="51.7" r="1.2" fill="currentColor" />
      <path
        d="M31 18.5C31 11.8 36.4 6.5 43.2 6.5C50 6.5 55.4 11.8 55.4 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M30.9 18.8V25.6M55.5 18.8V25.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M24 11.5H18.8C14.5 11.5 11 15 11 19.3V25.2C11 29.5 14.5 33 18.8 33H22.5L26.8 36.8V33"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.3" cy="22.1" r="1.1" fill="currentColor" />
      <circle cx="20.1" cy="22.1" r="1.1" fill="currentColor" />
      <circle cx="23.9" cy="22.1" r="1.1" fill="currentColor" />
    </svg>
  );
}

function VisaIcon() {
  return (
    <svg
      viewBox="0 0 72 64"
      className="h-[57px] w-[64px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8.5" y="9.5" width="55" height="43" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 28H63.5" stroke="currentColor" strokeWidth="1.8" />
      <text
        x="18"
        y="23"
        fill="currentColor"
        fontSize="14"
        fontWeight="500"
        fontFamily="Roboto, Arial, sans-serif"
        letterSpacing="1.8"
      >
        VISA
      </text>
      <circle cx="23" cy="40" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18.7 47C20 44.5 21.6 43.3 23 43.3C24.4 43.3 26 44.5 27.3 47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="23" cy="38.2" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M35 35.5H55M35 40.5H55M35 45.5H48" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const iconComponents = [PassportIcon, MoneyIcon, SupportIcon, VisaIcon];

const referenceTitles = [
  'Choose A Service',
  'Documents And Payments',
  'Request A Meeting',
  'Receive Your Visa Now',
];

export default function WorkingProcess() {
  const { workingProcess = {} } = homeData;

  const steps = [0, 1, 2, 3].map((index) => ({
    step: workingProcess?.steps?.[index]?.step ?? index + 1,
    title: referenceTitles[index],
  }));

  return (
    <section
      className="relative overflow-hidden bg-white pt-[48px] pb-[82px] lg:pb-[112px]"
      style={{ fontFamily: 'Roboto, Arial, sans-serif' }}
    >
      <div className="mx-auto w-full max-w-[1680px] px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-[70px] max-w-[900px] text-center lg:mb-[78px]">
          <span className="mb-[20px] block text-[16px] font-bold uppercase leading-none tracking-[0.15em] text-[#e20935] sm:text-[18px] lg:text-[20px]">
            {workingProcess.subtitle || 'WORKING PROCESS'}
          </span>

          <h2 className="mx-auto max-w-[900px] text-[36px] font-extrabold leading-[1.12] text-[#111216] sm:text-[46px] lg:text-[58px] xl:text-[60px]">
            4 Step Follow You Can Get
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Your Visa Easily
          </h2>
        </div>

        {/* Desktop zig-zag connector */}
        <div className="relative">
          <svg
            viewBox="0 0 1600 198"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[198px] w-full lg:block"
            aria-hidden="true"
          >
            <path
              d="M 247 30 L 553 174"
              fill="none"
              stroke="#ff7390"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2.5 5"
            />
            <path
              d="M 647 174 L 953 30"
              fill="none"
              stroke="#ff7390"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2.5 5"
            />
            <path
              d="M 1047 30 L 1353 174"
              fill="none"
              stroke="#ff7390"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2.5 5"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:h-[198px] lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = iconComponents[index];
              const isEvenVisual = index % 2 === 1;

              return (
                <div
                  key={step.step}
                  className="relative flex min-h-[215px] flex-col items-center text-center lg:h-[198px] lg:min-h-0"
                >
                  {/* Icon circle */}
                  <div
                    className={[
                      'relative order-1 flex shrink-0 items-center justify-center rounded-full bg-white text-[#e20935]',
                      index === 1 ? 'h-[128px] w-[128px]' : 'h-[126px] w-[126px]',
                      'shadow-[0_9px_36px_rgba(26,28,34,0.10)]',
                      isEvenVisual
                        ? 'lg:absolute lg:bottom-0 lg:order-2'
                        : 'lg:absolute lg:top-0 lg:order-1',
                    ].join(' ')}
                  >
                    {/* soft halo behind circle */}
                    <div
                      className="pointer-events-none absolute inset-[-16px] -z-10 rounded-full bg-white/95 blur-[10px]"
                      aria-hidden="true"
                    />

                    <Icon />

                    <span
                      className={[
                        'absolute flex items-center justify-center rounded-full bg-[#e20935] font-medium leading-none text-white',
                        index === 1
                          ? '-left-[1px] -top-[1px] h-[43px] w-[43px] text-[22px]'
                          : '-left-[2px] -top-[2px] h-[44px] w-[44px] text-[23px]',
                      ].join(' ')}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Step title */}
                  <h3
                    className={[
                      'order-2 mt-6 whitespace-normal text-[22px] font-extrabold leading-[1.2] text-[#101114]',
                      'sm:text-[24px] lg:mt-0 lg:whitespace-nowrap lg:text-[28px]',
                      isEvenVisual
                        ? 'lg:absolute lg:top-0 lg:order-1'
                        : 'lg:absolute lg:bottom-[2px] lg:order-2',
                    ].join(' ')}
                  >
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div> 
      </div>
    </section>
  );
}
