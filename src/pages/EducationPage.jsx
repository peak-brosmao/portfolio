import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, Calendar, BookOpen, Building2 } from 'lucide-react';

export const EducationPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container container">
      <div className="section-header">
        <span className="section-badge">{t.eduTitle}</span>
        <h1 className="section-title">{t.eduHeading}</h1>
        <p className="section-subtitle">{t.eduSubtitle}</p>
      </div>

      <div className="timeline-container">
        {/* Milestone 1: ITC GIC */}
        <div className="timeline-item active-itc">
          <div className="timeline-node">
            <div className="timeline-node-inner"></div>
          </div>
          <div className="glass-card timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-icon-label">
                  <img src="/img/itc-logo.png" alt="ITC Logo" className="timeline-itc-logo" />
                  <h3 className="timeline-title">{t.eduItcTitle}</h3>
                </div>
                <div className="timeline-role">{t.eduItcRole}</div>
              </div>
              <span className="timeline-date-badge">
                <Calendar size={13} />
                <span>{t.eduItcDate}</span>
              </span>
            </div>
            <p className="timeline-desc">{t.eduItcDesc}</p>
          </div>
        </div>

        {/* Milestone 2: Hun Sen Khchao High School */}
        <div className="timeline-item">
          <div className="timeline-node">
            <div className="timeline-node-inner"></div>
          </div>
          <div className="glass-card timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-icon-label">
                  <GraduationCap size={20} color="#06b6d4" />
                  <h3 className="timeline-title">{t.eduHighSchoolTitle}</h3>
                </div>
                <div className="timeline-role">{t.eduHighSchoolRole}</div>
              </div>
              <span className="timeline-date-badge">
                <Calendar size={13} />
                <span>{t.eduHighSchoolDate}</span>
              </span>
            </div>
            <p className="timeline-desc">{t.eduHighSchoolDesc}</p>
          </div>
        </div>

        {/* Milestone 3: Toul Bey Secondary School */}
        <div className="timeline-item">
          <div className="timeline-node">
            <div className="timeline-node-inner"></div>
          </div>
          <div className="glass-card timeline-card">
            <div className="timeline-card-header">
              <div>
                <div className="timeline-icon-label">
                  <BookOpen size={20} color="#f59e0b" />
                  <h3 className="timeline-title">{t.eduSecondaryTitle}</h3>
                </div>
                <div className="timeline-role">{t.eduSecondaryRole}</div>
              </div>
              <span className="timeline-date-badge">
                <Calendar size={13} />
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
