import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from '../components/TechIcon';
import { Code, Video, Printer, Calendar } from 'lucide-react';

export const ExperiencePage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container container">
      <div className="section-header">
        <span className="section-badge">{t.expTitle}</span>
        <h1 className="section-title">{t.expHeading}</h1>
        <p className="section-subtitle">{t.expSubtitle}</p>
      </div>

      <div className="experience-grid">
        {/* Experience 1: Web Dev */}
        <div className="glass-card exp-card">
          <div>
            <div className="exp-icon-pill">
              <Code size={24} />
            </div>
            <div className="exp-card-header">
              <h3 className="exp-card-title">{t.expWebTitle}</h3>
              <div className="exp-card-company">{t.expWebCompany}</div>
              <div className="exp-card-date">
                <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                <span>{t.expWebDate}</span>
              </div>
            </div>
            <p className="exp-card-body">{t.expWebDesc}</p>
          </div>
          <ul className="exp-tags-row">
            <li className="exp-tag">WordPress</li>
            <li className="exp-tag">React / Next.js</li>
            <li className="exp-tag">PHP</li>
            <li className="exp-tag">SEO Strategy</li>
            <li className="exp-tag">Blogger</li>
          </ul>
        </div>

        {/* Experience 2: Video Directing */}
        <div className="glass-card exp-card">
          <div>
            <div className="exp-icon-pill exp-video-pill">
              <Video size={24} />
            </div>
            <div className="exp-card-header">
              <h3 className="exp-card-title">{t.expVideoTitle}</h3>
              <div className="exp-card-company">{t.expVideoCompany}</div>
              <div className="exp-card-date">
                <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                <span>{t.expVideoDate}</span>
              </div>
            </div>
            <p className="exp-card-body">{t.expVideoDesc}</p>
          </div>
          <ul className="exp-tags-row">
            <li className="exp-tag">Directing</li>
            <li className="exp-tag">Cameraman</li>
            <li className="exp-tag">Video Editing</li>
            <li className="exp-tag">Color Grading</li>
            <li className="exp-tag">Storytelling</li>
          </ul>
        </div>

        {/* Experience 3: Family Printing Press */}
        <div className="glass-card exp-card">
          <div>
            <div className="exp-icon-pill exp-print-pill">
              <Printer size={24} />
            </div>
            <div className="exp-card-header">
              <h3 className="exp-card-title">{t.expPrintTitle}</h3>
              <div className="exp-card-company">{t.expPrintCompany}</div>
              <div className="exp-card-date">
                <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                <span>{t.expPrintDate}</span>
              </div>
            </div>
            <p className="exp-card-body">{t.expPrintDesc}</p>
          </div>
          <ul className="exp-tags-row">
            <li className="exp-tag">Wedding Cards</li>
            <li className="exp-tag">Ceremony Printing</li>
            <li className="exp-tag">Photography</li>
            <li className="exp-tag">Scanning & Copy</li>
            <li className="exp-tag">Client Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
