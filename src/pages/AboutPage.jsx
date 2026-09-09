import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Calendar, MapPin, Flag, Globe, Mail, Check, Copy } from 'lucide-react';

export const AboutPage = ({ onCopy }) => {
  const { t } = useLanguage();

  return (
    <div className="page-container container">
      <div className="section-header">
        <span className="section-badge">{t.aboutTitle}</span>
        <h1 className="section-title">{t.aboutHeading}</h1>
        <p className="section-subtitle">{t.aboutSubtitle}</p>
      </div>

      <div className="about-grid">
        {/* Story Card */}
        <div className="glass-card about-story-card">
          <h3>{t.aboutHeading}</h3>
          <p className="about-paragraph">{t.aboutStoryP1}</p>
          <p className="about-paragraph">{t.aboutStoryP2}</p>
          <p className="about-paragraph">{t.aboutStoryP3}</p>
        </div>

        {/* Personal Details Card */}
        <div className="glass-card personal-info-card">
          <h4>
            <User size={20} color="#6366f1" />
            <span>{t.personalInfoTitle}</span>
          </h4>

          <ul className="info-list">
            <li className="info-item">
              <span className="info-label">
                <Calendar size={15} />
                <span>{t.infoDobLabel}</span>
              </span>
              <span className="info-value">{t.infoDobValue}</span>
            </li>

            <li className="info-item">
              <span className="info-label">
                <MapPin size={15} />
                <span>{t.infoPobLabel}</span>
              </span>
              <span className="info-value">{t.infoPobValue}</span>
            </li>

            <li className="info-item">
              <span className="info-label">
                <User size={15} />
                <span>{t.infoGenderLabel}</span>
              </span>
              <span className="info-value">{t.infoGenderValue}</span>
            </li>

            <li className="info-item">
              <span className="info-label">
                <Flag size={15} />
                <span>{t.infoNationalityLabel}</span>
              </span>
              <span className="info-value">{t.infoNationalityValue}</span>
            </li>

            <li className="info-item">
              <span className="info-label">
                <img src="/img/itc-logo.png" alt="ITC Logo" className="info-itc-logo" />
                <span>{t.infoEducationCurrentLabel}</span>
              </span>
              <span className="info-value">
                <span className="info-badge">{t.infoEducationCurrentValue}</span>
              </span>
            </li>

            <li className="info-item">
              <span className="info-label">
                <Globe size={15} />
                <span>{t.infoLanguagesLabel}</span>
              </span>
              <span className="info-value">{t.infoLanguagesValue}</span>
            </li>
          </ul>

          <div className="info-card-actions">
            <button
              className="copy-mini-btn"
              onClick={() => onCopy('contact@peakbrosmao.me')}
            >
              <Mail size={14} />
              <span>Copy Domain Email</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
