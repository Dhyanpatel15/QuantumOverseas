import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, breadcrumb = [] }) {
  return (
    <div
      className="relative flex min-h-[331px] items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/breadcrumb.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#101114]/85 via-[#101114]/50 to-[#101114]/15" />

      <div className="qo-page-header-content relative mx-auto flex w-full max-w-[1160px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-[50px] font-extrabold leading-[1.15] text-white sm:text-[70px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
              {subtitle}
            </p>
          )}
        </div>

        <nav className="flex items-center gap-3 text-base font-semibold text-white" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-[#e20935]">
            Home
          </Link>
          {breadcrumb.map((crumb, index) => (
            <React.Fragment key={`${crumb.name}-${index}`}>
              <span className="text-white/75">−</span>
              {crumb.path ? (
                <Link to={crumb.path} className="transition-colors hover:text-[#e20935]">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white/90">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
