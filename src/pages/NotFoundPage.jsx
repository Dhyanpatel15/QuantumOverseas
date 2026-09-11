import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found (404) - Quantum Overseas"
        description="The page you are looking for might have been moved or does not exist."
        canonical="/404"
      />
      <PageHeader
        title="404 - Page Not Found"
        subtitle="Oops! The page you were looking for doesn't exist or has been relocated."
        breadcrumb={[{ name: '404' }]}
      />

      <section className="py-24 bg-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <span className="text-8xl font-black text-theme-primary/20 block">
            404
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-heading">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-500">
            We couldn't find the page you requested. Please return to the homepage or check our available visa services.
          </p>
          <div className="pt-2">
            <Link to="/" className="theme-btn text-sm inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
