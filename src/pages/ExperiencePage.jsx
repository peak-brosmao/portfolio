import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Code,
  Video,
  Printer,
  Calendar,
  ExternalLink,
  Globe,
  Sparkles,
  Link2,
  QrCode,
  Download,
  Mail,
  HardDrive,
  Film,
  Layers,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export const ExperiencePage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  // Live Web Applications & Platforms
  const webApps = [
    {
      id: 'iusetools',
      type: 'app',
      name: 'iUseTools',
      domain: 'iusetools.site',
      url: 'https://www.iusetools.site',
      icon: <Sparkles size={22} />,
      pillClass: 'exp-pill-violet',
      titleKey: 'appIUseToolsTitle',
      companyKey: 'appIUseToolsCompany',
      dateKey: 'appIUseToolsDate',
      descKey: 'appIUseToolsDesc',
      catKey: 'appIUseToolsCat',
      tags: ['Next.js', 'React', 'OCR Engine', 'PDF.js', 'Client-side Processing', 'SEO Optimization'],
    },
    {
      id: 'urlgenz',
      type: 'app',
      name: 'URLGenZ',
      domain: 'urlgenz.site',
      url: 'https://www.urlgenz.site',
      icon: <Link2 size={22} />,
      pillClass: 'exp-pill-blue',
      titleKey: 'appUrlGenZTitle',
      companyKey: 'appUrlGenZCompany',
      dateKey: 'appUrlGenZDate',
      descKey: 'appUrlGenZDesc',
      catKey: 'appUrlGenZCat',
      tags: ['Next.js', 'React', 'REST API', 'UTM Analytics', 'Tailwind CSS'],
    },
    {
      id: 'qrgenz',
      type: 'app',
      name: 'QRGenZ',
      domain: 'qrgenz.online',
      url: 'https://www.qrgenz.online',
      icon: <QrCode size={22} />,
      pillClass: 'exp-pill-indigo',
      titleKey: 'appQrGenZTitle',
      companyKey: 'appQrGenZCompany',
      dateKey: 'appQrGenZDate',
      descKey: 'appQrGenZDesc',
      catKey: 'appQrGenZCat',
      tags: ['Next.js', 'QR Canvas Engine', 'WebRTC Camera API', 'SVG/PNG Export'],
    },
    {
      id: 'snapdown',
      type: 'app',
      name: 'SnapDown',
      domain: 'snapdown.online',
      url: 'https://www.snapdown.online/',
      icon: <Download size={22} />,
      pillClass: 'exp-pill-rose',
      titleKey: 'appSnapDownTitle',
      companyKey: 'appSnapDownCompany',
      dateKey: 'appSnapDownDate',
      descKey: 'appSnapDownDesc',
      catKey: 'appSnapDownCat',
      tags: ['JavaScript', 'Media Processing API', 'HD Stream Extraction', 'Responsive UI'],
    },
    {
      id: 'fakeinbox',
      type: 'app',
      name: 'Fake-Inbox',
      domain: 'fake-inbox.com',
      url: 'https://fake-inbox.com',
      icon: <Mail size={22} />,
      pillClass: 'exp-pill-amber',
      titleKey: 'appFakeInboxTitle',
      companyKey: 'appFakeInboxCompany',
      dateKey: 'appFakeInboxDate',
      descKey: 'appFakeInboxDesc',
      catKey: 'appFakeInboxCat',
      tags: ['PHP', 'Mail Server Integration', 'Privacy Protection', 'Web Automation'],
    },
    {
      id: 'camhost',
      type: 'app',
      name: 'CamHost',
      domain: 'camhost.space',
      url: 'https://camhost.space',
      icon: <HardDrive size={22} />,
      pillClass: 'exp-pill-cyan',
      titleKey: 'appCamHostTitle',
      companyKey: 'appCamHostCompany',
      dateKey: 'appCamHostDate',
      descKey: 'appCamHostDesc',
      catKey: 'appCamHostCat',
      tags: ['Vite', 'React', 'Telegram API', 'Cloud Storage', 'Modern UI'],
    },
    {
      id: '24hmovie',
      type: 'app',
      name: '24hMovie',
      domain: '24hmoive.site',
      url: 'https://24hmoive.site',
      icon: <Film size={22} />,
      pillClass: 'exp-pill-red',
      titleKey: 'appMovieTitle',
      companyKey: 'appMovieCompany',
      dateKey: 'appMovieDate',
      descKey: 'appMovieDesc',
      catKey: 'appMovieCat',
      tags: ['Web Streaming', 'Video Player Integration', 'Dark Cinema UI', 'SEO'],
    },
  ];

  // Practical Industry & Media Roles
  const roles = [
    {
      id: 'web-role',
      type: 'role',
      icon: <Code size={22} />,
      pillClass: '',
      titleKey: 'expWebTitle',
      companyKey: 'expWebCompany',
      dateKey: 'expWebDate',
      descKey: 'expWebDesc',
      tags: ['WordPress', 'React / Next.js', 'PHP', 'SEO Strategy', 'Blogger'],
    },
    {
      id: 'video-role',
      type: 'role',
      icon: <Video size={22} />,
      pillClass: 'exp-video-pill',
      titleKey: 'expVideoTitle',
      companyKey: 'expVideoCompany',
      dateKey: 'expVideoDate',
      descKey: 'expVideoDesc',
      tags: ['Directing', 'Cameraman', 'Video Editing', 'Color Grading', 'Storytelling'],
    },
    {
      id: 'print-role',
      type: 'role',
      icon: <Printer size={22} />,
      pillClass: 'exp-print-pill',
      titleKey: 'expPrintTitle',
      companyKey: 'expPrintCompany',
      dateKey: 'expPrintDate',
      descKey: 'expPrintDesc',
      tags: ['Wedding Cards', 'Ceremony Printing', 'Photography', 'Scanning & Copy', 'Client Support'],
    },
  ];

  const filterTabs = [
    { key: 'all', label: t.expFilterAll, count: webApps.length + roles.length },
    { key: 'apps', label: t.expFilterApps, count: webApps.length },
    { key: 'roles', label: t.expFilterRoles, count: roles.length },
  ];

  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => el.classList.add('visible'));
  }, [activeTab]);

  return (
    <div className="page-container container">
      {/* Header */}
      <div className="section-header reveal visible">
        <span className="section-badge">{t.expTitle}</span>
        <h1 className="section-title">{t.expHeading}</h1>
        <p className="section-subtitle">{t.expSubtitle}</p>
      </div>

      {/* Metrics / Highlights Strip */}
      <div className="exp-metrics-grid reveal visible">
        <div className="glass-card exp-metric-card">
          <div className="exp-metric-val">7+</div>
          <div className="exp-metric-title">{t.expStatsApps}</div>
          <div className="exp-metric-sub">{t.expStatsAppsSub}</div>
        </div>
        <div className="glass-card exp-metric-card">
          <div className="exp-metric-val">1 Year</div>
          <div className="exp-metric-title">{t.expStatsWeb}</div>
          <div className="exp-metric-sub">{t.expStatsWebSub}</div>
        </div>
        <div className="glass-card exp-metric-card">
          <div className="exp-metric-val">2+ Yrs</div>
          <div className="exp-metric-title">{t.expStatsMedia}</div>
          <div className="exp-metric-sub">{t.expStatsMediaSub}</div>
        </div>
        <div className="glass-card exp-metric-card">
          <div className="exp-metric-val">100%</div>
          <div className="exp-metric-title">{t.expStatsPrivacy}</div>
          <div className="exp-metric-sub">{t.expStatsPrivacySub}</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="exp-filter-nav reveal visible">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`exp-filter-btn ${activeTab === tab.key ? 'active' : ''}`}
            id={`exp-tab-${tab.key}`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Section: Live Web Apps */}
      {(activeTab === 'all' || activeTab === 'apps') && (
        <div className="exp-section-block">
          <div className="exp-section-title-wrap reveal visible">
            <div className="exp-section-indicator">
              <Zap size={18} />
            </div>
            <div>
              <h2 className="exp-section-heading">{t.expSectionApps}</h2>
              <p className="exp-section-lead">{t.expSectionAppsSub}</p>
            </div>
          </div>

          <div className="exp-apps-grid">
            {webApps.map((app, i) => (
              <div
                key={app.id}
                className="glass-card exp-card exp-app-card visible"
              >
                <div className="exp-card-inner">
                  {/* Top Bar: Icon Pill, Status Badge & Domain */}
                  <div className="exp-header-row">
                    <div className={`exp-icon-pill ${app.pillClass}`}>
                      {app.icon}
                    </div>
                    <div className="exp-card-meta">
                      <div className="exp-meta-topline">
                        <span className="exp-live-badge">
                          <span className="exp-live-dot" />
                          {t.expLiveBadge}
                        </span>
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-domain-pill"
                          title={`Open ${app.domain}`}
                        >
                          <Globe size={11} />
                          <span>{app.domain}</span>
                        </a>
                      </div>

                      <h3 className="exp-card-title">{t[app.titleKey]}</h3>
                      <div className="exp-card-category">{t[app.catKey]}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="exp-card-body">{t[app.descKey]}</p>
                </div>

                {/* Tech Stack Tags */}
                <ul className="exp-tags-row">
                  {app.tags.map((tag) => (
                    <li key={tag} className="exp-tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* CTA Action: Direct Live Site Link */}
                <div className="exp-action-row">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-visit-link"
                    id={`visit-${app.id}`}
                  >
                    <span>{t.expVisitBtn}</span>
                    <ExternalLink size={14} className="exp-link-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Section: Practical Industry & Media Roles */}
      {(activeTab === 'all' || activeTab === 'roles') && (
        <div className="exp-section-block">
          <div className="exp-section-title-wrap reveal">
            <div className="exp-section-indicator role-indicator">
              <Layers size={18} />
            </div>
            <div>
              <h2 className="exp-section-heading">{t.expSectionRoles}</h2>
              <p className="exp-section-lead">{t.expSectionRolesSub}</p>
            </div>
          </div>

          <div className="experience-grid">
            {roles.map((exp, i) => (
              <div
                key={exp.id}
                className="glass-card exp-card visible"
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
                    <li key={tag} className="exp-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
