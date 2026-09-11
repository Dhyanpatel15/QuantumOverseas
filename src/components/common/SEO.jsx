import React from 'react';
import { Helmet } from 'react-helmet-async';
import siteConfig from '../../content/site.json';

export default function SEO({
  title,
  exactTitle,
  description,
  keywords,
  canonical,
  ogImage = '/images/quntom-logo-scaled-e1759320289690.png',
  schema
}) {
  const defaultTitle = `${siteConfig.brand.name} – ${siteConfig.brand.tagline}`;
  const pageTitle = exactTitle || (title ? `${title} | ${siteConfig.brand.name}` : defaultTitle);
  const pageDescription = description || 'Quantum Overseas is a leading visa and overseas immigration consultancy offering student visas, permanent residency, work permits, and visitor visa services.';
  const pageKeywords = keywords || 'visa consulting, student visa, PR visa, work permit, immigration, IELTS coaching, Quantum Overseas Ahmedabad';
  const siteUrl = 'https://quantumoverseas.in';
  const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.brand.name,
    url: siteUrl,
    logo: `${siteUrl}${siteConfig.brand.logo}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Block G, 304 Titanium Business Centre, Prahladnagar',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380015',
      addressCountry: 'IN'
    }
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteConfig.brand.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
