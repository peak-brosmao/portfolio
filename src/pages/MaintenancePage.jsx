import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const MaintenancePage = ({ pageTitle }) => {
  return (
    <div className="not-found-page">
      {/* Animated 404 number */}
      <div className="not-found-code" aria-label="404">404</div>

      <h1 className="not-found-title">
        {pageTitle ? `${pageTitle} Not Found` : 'Page Not Found'}
      </h1>

      <p className="not-found-desc">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="not-found-actions">
        <Link to="/" className="btn-primary" id="not-found-home-btn">
          <Home size={17} />
          <span>Back to Home</span>
        </Link>
        <button
          className="btn-outline"
          onClick={() => window.history.back()}
          id="not-found-back-btn"
        >
          <ArrowLeft size={17} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};
