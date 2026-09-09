import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Bot, FileText, GraduationCap, ShieldCheck } from 'lucide-react';

export const AchievementsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container container">
      <div className="section-header">
        <span className="section-badge">{t.achieveTitle}</span>
        <h1 className="section-title">{t.achieveHeading}</h1>
        <p className="section-subtitle">{t.achieveSubtitle}</p>
      </div>

      <div className="achieve-grid">
        {/* Card 1: TGC Mentor */}
        <div className="glass-card achieve-card achieve-card-tgc">
          <div className="achieve-icon-box">
            <ShieldCheck size={26} />
          </div>
          <div className="achieve-info">
            <h4>{t.achieveTgcTitle}</h4>
            <div className="achieve-org">{t.achieveTgcOrg}</div>
            <p className="achieve-desc">{t.achieveTgcDesc}</p>
          </div>
        </div>

        {/* Card 2: Robot Line Follower */}
        <div className="glass-card achieve-card achieve-card-robot">
          <div className="achieve-icon-box">
            <Bot size={26} />
          </div>
          <div className="achieve-info">
            <h4>{t.achieveRobotTitle}</h4>
            <div className="achieve-org">{t.achieveRobotOrg}</div>
            <p className="achieve-desc">{t.achieveRobotDesc}</p>
          </div>
        </div>

        {/* Card 3: Word & Excel */}
        <div className="glass-card achieve-card achieve-card-cert">
          <div className="achieve-icon-box">
            <FileText size={26} />
          </div>
          <div className="achieve-info">
            <h4>{t.achieveWordExcelTitle}</h4>
            <div className="achieve-org">{t.achieveWordExcelOrg}</div>
            <p className="achieve-desc">{t.achieveWordExcelDesc}</p>
          </div>
        </div>

        {/* Card 4: Bac II Grade B */}
        <div className="glass-card achieve-card achieve-card-gradeb">
          <div className="achieve-icon-box">
            <GraduationCap size={26} />
          </div>
          <div className="achieve-info">
            <h4>{t.achieveGradeBTitle}</h4>
            <div className="achieve-org">{t.achieveGradeBOrg}</div>
            <p className="achieve-desc">{t.achieveGradeBDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
