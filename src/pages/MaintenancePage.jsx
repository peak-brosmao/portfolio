import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowLeft, Clock } from 'lucide-react';

export const MaintenancePage = ({ pageTitle = 'Page' }) => {
  return (
    <div className="page-container container" style={{ textAlign: 'center', padding: '100px 24px' }}>
      <div className="glass-card" style={{ maxWidth: '580px', margin: '0 auto', padding: '50px 30px' }}>
        <div style={{ display: 'inline-flex', padding: '18px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.12)', marginBottom: '20px' }}>
          <Wrench size={38} color="#6366f1" />
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>{pageTitle} Under Maintenance</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: '1.7' }}>
          This section is currently being updated with new projects and media content. Please check back soon!
        </p>
        <Link to="/" className="btn-primary" style={{ display: 'inline-flex' }}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};
