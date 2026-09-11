import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const cardSelector = 'article, a.group, div.group, form';

function getTopLevelCards(section) {
  return Array.from(section.querySelectorAll(cardSelector)).filter((element) => {
    const parentCard = element.parentElement?.closest(cardSelector);
    return !parentCard || !section.contains(parentCard);
  });
}

export default function PageEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observedElements = new Set();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
          observedElements.delete(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    const addReveal = (element, delay = 0, variant = '') => {
      if (!(element instanceof HTMLElement)) return;
      if (element.closest('[data-qo-effects="skip"]')) return;
      if (element.matches('.qo-reveal') || element.closest('.qo-reveal')) return;

      element.classList.add('qo-auto-reveal');
      if (variant) element.classList.add(variant);
      element.style.setProperty('--qo-reveal-delay', `${delay}s`);

      if (reduceMotion) {
        element.classList.add('is-visible');
      } else if (!element.classList.contains('is-visible') && !observedElements.has(element)) {
        observedElements.add(element);
        revealObserver.observe(element);
      }
    };

    const registerButtons = () => {
      root.querySelectorAll('a, button').forEach((element) => {
        const classNames = typeof element.className === 'string' ? element.className : '';
        const hasLabel = element.textContent?.trim().length > 1;
        if (!hasLabel) return;

        if (/bg-(theme-primary|\[#e20935\])/.test(classNames)) {
          element.classList.add('qo-theme-button');
        } else if (/bg-(theme-secondary|\[#16171a\]|\[#101114\])/.test(classNames)) {
          element.classList.add('qo-theme-button', 'qo-theme-button-dark');
        }
      });
    };

    const registerEffects = () => {
      registerButtons();

      root.querySelectorAll('.qo-page-header-content').forEach((element) => {
        addReveal(element, 0.15, 'qo-effect-left');
      });

      root.querySelectorAll('section').forEach((section, sectionIndex) => {
        if (section.closest('[data-qo-effects="skip"]')) return;

        const cards = getTopLevelCards(section).filter(
          (element) => !element.matches('.qo-reveal') && !element.closest('.qo-reveal'),
        );

        if (cards.length) {
          const heading = section.querySelector('h2');
          if (heading && !heading.closest(cardSelector)) {
            addReveal(heading, 0.08, 'qo-title-reveal');
          }

          cards.forEach((card, index) => {
            addReveal(card, 0.18 + (index % 4) * 0.1, 'qo-card-reveal');
          });
          return;
        }

        const content = Array.from(section.children).find((child) => {
          if (!(child instanceof HTMLElement)) return false;
          if (child.classList.contains('absolute')) return false;
          return Boolean(child.textContent?.trim() || child.querySelector('img'));
        });

        addReveal(content || section, 0.12 + (sectionIndex % 2) * 0.08);
      });

      root.querySelectorAll('main').forEach((main) => {
        if (main.querySelector('section')) return;
        const content = Array.from(main.children).find((child) => child instanceof HTMLElement);
        addReveal(content || main, 0.12);
      });
    };

    let frameId = window.requestAnimationFrame(registerEffects);
    const mutationObserver = new MutationObserver(() => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(registerEffects);
    });

    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      mutationObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
