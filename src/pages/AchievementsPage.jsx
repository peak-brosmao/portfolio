import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Bot, FileText, GraduationCap, ShieldCheck } from 'lucide-react';

export const AchievementsPage = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      id: 'tgc',
      icon: <ShieldCheck size={24} />,
      cardClass: 'achieve-card-tgc',
      titleKey: 'achieveTgcTitle',
      orgKey:   'achieveTgcOrg',
      descKey:  'achieveTgcDesc',
    },
    {
      id: 'robot',
      icon: <Bot size={24} />,
      cardClass: 'achieve-card-robot',
      titleKey: 'achieveRobotTitle',
      orgKey:   'achieveRobotOrg',
      descKey:  'achieveRobotDesc',
    },
    {
      id: 'cert',
      icon: <FileText size={24} />,
      cardClass: 'achieve-card-cert',
      titleKey: 'achieveWordExcelTitle',
      orgKey:   'achieveWordExcelOrg',
      descKey:  'achieveWordExcelDesc',
    },
    {
      id: 'gradeb',
      icon: <GraduationCap size={24} />,
      cardClass: 'achieve-card-gradeb',
      titleKey: 'achieveGradeBTitle',
      orgKey:   'achieveGradeBOrg',
      descKey:  'achieveGradeBDesc',
    },
  ];

  return (
    <div className="page-container container">
      <div className="section-header reveal">
        <span className="section-badge">{t.achieveTitle}</span>
        <h1 className="section-title">{t.achieveHeading}</h1>
        <p className="section-subtitle">{t.achieveSubtitle}</p>
      </div>

      <div className="achieve-grid">
        {achievements.map((a, i) => (
          <div
            key={a.id}
            className={`glass-card achieve-card ${a.cardClass} reveal reveal-delay-${i + 1}`}
          >
            <div className="achieve-icon-box">{a.icon}</div>
            <div className="achieve-info">
              <h4>{t[a.titleKey]}</h4>
              <div className="achieve-org">{t[a.orgKey]}</div>
              <p className="achieve-desc">{t[a.descKey]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
