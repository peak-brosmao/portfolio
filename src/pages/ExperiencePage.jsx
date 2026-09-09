import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Video, Printer, Calendar } from 'lucide-react';

export const ExperiencePage = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 'web',
      icon: <Code size={22} />,
      pillClass: '',
      titleKey: 'expWebTitle',
      companyKey: 'expWebCompany',
      dateKey: 'expWebDate',
      descKey: 'expWebDesc',
      tags: ['WordPress', 'React / Next.js', 'PHP', 'SEO Strategy', 'Blogger'],
    },
    {
      id: 'video',
      icon: <Video size={22} />,
      pillClass: 'exp-video-pill',
      titleKey: 'expVideoTitle',
      companyKey: 'expVideoCompany',
      dateKey: 'expVideoDate',
      descKey: 'expVideoDesc',
      tags: ['Directing', 'Cameraman', 'Video Editing', 'Color Grading', 'Storytelling'],
    },
    {
      id: 'print',
      icon: <Printer size={22} />,
      pillClass: 'exp-print-pill',
      titleKey: 'expPrintTitle',
      companyKey: 'expPrintCompany',
      dateKey: 'expPrintDate',
      descKey: 'expPrintDesc',
      tags: ['Wedding Cards', 'Ceremony Printing', 'Photography', 'Scanning & Copy', 'Client Support'],
    },
  ];

  return (
    <div className="page-container container">
      <div className="section-header reveal">
        <span className="section-badge">{t.expTitle}</span>
        <h1 className="section-title">{t.expHeading}</h1>
        <p className="section-subtitle">{t.expSubtitle}</p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className={`glass-card exp-card reveal reveal-delay-${i + 1}`}
          >
            <div className="exp-card-inner">
              <div className="exp-header-row">
                <div className={`exp-icon-pill ${exp.pillClass}`}>
                  {exp.icon}
                </div>
                <div className="exp-card-meta">
                  <h3 className="exp-card-title">{t[exp.titleKey]}</h3>
                  <div className="exp-card-company">{t[exp.companyKey]}</div>
                  <div className="exp-card-date">
                    <Calendar size={12} />
                    <span>{t[exp.dateKey]}</span>
                  </div>
                </div>
              </div>
              <p className="exp-card-body">{t[exp.descKey]}</p>
            </div>

            <ul className="exp-tags-row">
              {exp.tags.map((tag) => (
                <li key={tag} className="exp-tag">{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
