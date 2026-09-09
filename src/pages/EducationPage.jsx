import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

export const EducationPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container container">
      <div className="section-header reveal">
        <span className="section-badge">{t.eduTitle}</span>
        <h1 className="section-title">{t.eduHeading}</h1>
        <p className="section-subtitle">{t.eduSubtitle}</p>
      </div>

      <div className="timeline-container">

        {/* ITC GIC — Currently Active */}
        <div className="timeline-item active-itc reveal reveal-delay-1">
          <div className="timeline-node">
            <div className="timeline-node-inner" />
          </div>
          <div className="glass-card timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-icon-label">
                  <img src="/img/itc-logo.png" alt="ITC Logo" className="timeline-itc-logo" />
                  <h3 className="timeline-title">
                    {t.eduItcTitle}
                    <span className="active-badge">
                      <span className="active-badge-dot" />
                      Active
                    </span>
                  </h3>
                </div>
                <div className="timeline-role">{t.eduItcRole}</div>
              </div>
              <span className="timeline-date-badge">
                <Calendar size={12} />
                <span>{t.eduItcDate}</span>
              </span>
            </div>
            <p className="timeline-desc">{t.eduItcDesc}</p>
          </div>
        </div>

        {/* Hun Sen Khchao High School */}
        <div className="timeline-item reveal reveal-delay-2">
          <div className="timeline-node">
            <div className="timeline-node-inner" />
          </div>
          <div className="glass-card timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-icon-label">
                  <GraduationCap size={22} color="var(--accent-secondary)" />
                  <h3 className="timeline-title">{t.eduHighSchoolTitle}</h3>
                </div>
                <div className="timeline-role">{t.eduHighSchoolRole}</div>
              </div>
              <span className="timeline-date-badge">
                <Calendar size={12} />
                <span>{t.eduHighSchoolDate}</span>
              </span>
            </div>
            <p className="timeline-desc">{t.eduHighSchoolDesc}</p>
          </div>
        </div>

        {/* Toul Bey Secondary School */}
        <div className="timeline-item reveal reveal-delay-3">
          <div className="timeline-node">
            <div className="timeline-node-inner" />
          </div>
          <div className="glass-card timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-icon-label">
                  <BookOpen size={22} color="var(--accent-amber)" />
                  <h3 className="timeline-title">{t.eduSecondaryTitle}</h3>
                </div>
                <div className="timeline-role">{t.eduSecondaryRole}</div>
              </div>
              <span className="timeline-date-badge">
                <Calendar size={12} />
                <span>{t.eduSecondaryDate}</span>
              </span>
            </div>
            <p className="timeline-desc">{t.eduSecondaryDesc}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
