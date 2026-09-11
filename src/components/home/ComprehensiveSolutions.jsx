import React from 'react';
import homeData from '../../content/home.json';
import passportIcon from '../../assets/comprehensive-icons/passport.png';
import visaIcon from '../../assets/comprehensive-icons/visa.png';
import documentIcon from '../../assets/comprehensive-icons/document.png';

export default function ComprehensiveSolutions() {
  const { comprehensiveSolutions = [] } = homeData;

  const getIconConfig = (title = '') => {
    const text = String(title).trim().toLowerCase();

    if (text === 'passport') {
      return {
        src: passportIcon,
        alt: 'Passport service icon',
        className: 'w-[40px] h-[49px] object-contain',
      };
    }

    if (text.includes('consultation')) {
      return {
        src: visaIcon,
        alt: 'Visa consultation icon',
        className: 'w-[53px] h-[53px] object-contain',
      };
    }

    return {
      src: documentIcon,
      alt: 'Visa documentation icon',
      className: 'w-[51px] h-[51px] object-contain',
    };
  };

  return (
    <section className="qo-comprehensive-solutions">
      <div className="qo-comprehensive-container">
        <div className="qo-comprehensive-heading">
          <span className="qo-comprehensive-eyebrow">
            COMPREHENSIVE VISA SOLUTIONS DELIVERED
          </span>

          <h2>
            Bunch Of Visa Services From
            <br />
            Quantum For Every Visa You Process
          </h2>
        </div>

        <div className="qo-comprehensive-card">
          <div className="qo-comprehensive-grid">
            {comprehensiveSolutions.map((item, idx) => {
              const icon = getIconConfig(item.title);

              return (
                <div className="qo-comprehensive-item" key={`${item.title}-${idx}`}>
                  <div className="qo-comprehensive-icon" aria-hidden="true">
                    <img src={icon.src} alt={icon.alt} className={icon.className} />
                  </div>

                  <h3 className="qo-comprehensive-title">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
