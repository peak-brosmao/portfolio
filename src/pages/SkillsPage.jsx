import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from '../components/TechIcon';

export const SkillsPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const skills = [
    {
      id: 'html5',
      name: 'HTML5 & CSS3',
      category: 'web',
      catLabel: t.skillWebDevCat,
      level: t.skillLevelAdvanced,
      levelKey: 'advanced',
      progress: 82,
      iconName: 'html5',
    },
    {
      id: 'react',
      name: 'React & Next.js',
      category: 'web',
      catLabel: t.catFrontend,
      level: t.skillLevelLearning,
      levelKey: 'learning',
      progress: 35,
      iconName: 'react',
    },
    {
      id: 'cpp',
      name: 'C++ & Java (ITC GIC)',
      category: 'web',
      catLabel: t.skillsCurrentStudy,
      level: t.skillLevelLearning,
      levelKey: 'learning',
      progress: 28,
      iconName: 'cpp',
    },
    {
      id: 'php',
      name: 'PHP & Backend Basics',
      category: 'web',
      catLabel: t.catBackend,
      level: t.skillLevelIntermediate,
      levelKey: 'intermediate',
      progress: 32,
      iconName: 'php',
    },
    {
      id: 'wordpress',
      name: 'WordPress & Blogger',
      category: 'web',
      catLabel: t.catCms,
      level: t.skillLevelAdvanced,
      levelKey: 'advanced',
      progress: 78,
      iconName: 'wordpress',
    },
    {
      id: 'video',
      name: 'Video Editing & Directing',
      category: 'video',
      catLabel: t.skillMediaCat,
      level: t.skillLevelAdvanced,
      levelKey: 'advanced',
      progress: 88,
      iconName: 'video',
    },
    {
      id: 'camera',
      name: 'Camera & Cinematography',
      category: 'video',
      catLabel: t.catCamera,
      level: t.skillLevelIntermediate,
      levelKey: 'intermediate',
      progress: 75,
      iconName: 'camera',
    },
    {
      id: 'print',
      name: 'Printing & Copy Press',
      category: 'print',
      catLabel: t.skillPrintCat,
      level: t.skillLevelAdvanced,
      levelKey: 'advanced',
      progress: 90,
      iconName: 'print',
    },
    {
      id: 'design',
      name: 'Poster & Graphic Design',
      category: 'print',
      catLabel: t.catDesign,
      level: t.skillLevelIntermediate,
      levelKey: 'intermediate',
      progress: 72,
      iconName: 'design',
    },
    {
      id: 'word',
      name: 'Microsoft Word & Excel',
      category: 'print',
      catLabel: t.skillToolsCat,
      level: t.skillLevelAdvanced,
      levelKey: 'advanced',
      progress: 92,
      iconName: 'word',
    },
  ];

  const tabs = [
    { key: 'all',   label: t.tabAllSkills },
    { key: 'web',   label: t.tabWebDev },
    { key: 'video', label: t.tabVideo },
    { key: 'print', label: t.tabPrint },
  ];

  const filtered = filter === 'all' ? skills : skills.filter((s) => s.category === filter);

  const levelClass = (key) => {
    if (key === 'learning')     return 'learning';
    if (key === 'intermediate') return 'intermediate';
    return '';
  };

  return (
    <div className="page-container container">
      <div className="section-header reveal">
        <span className="section-badge">{t.skillsTitle}</span>
        <h1 className="section-title">{t.skillsHeading}</h1>
        <p className="section-subtitle">{t.skillsSubtitle}</p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-filter-nav">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`skill-tab-btn ${filter === tab.key ? 'active' : ''}`}
            onClick={() => setFilter(tab.key)}
            id={`skills-tab-${tab.key}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filtered.map((skill, i) => (
          <div
            key={skill.id}
            className={`glass-card skill-card reveal reveal-delay-${Math.min(i % 4 + 1, 5)}`}
          >
            <div className="skill-card-top">
              <div className="skill-badge-icon">
                <TechIcon name={skill.iconName} size={26} />
              </div>
              <span className={`skill-level-tag ${levelClass(skill.levelKey)}`}>
                {skill.level}
              </span>
            </div>

            <h4 className="skill-name">{skill.name}</h4>
            <div className="skill-category-label">{skill.catLabel}</div>

            <div className="skill-progress-wrap">
              <div className="skill-progress-header">
                <span className="skill-category-label" style={{ fontSize: '0.74rem' }}>
                  Proficiency
                </span>
                <span className="skill-progress-pct">{skill.progress}%</span>
              </div>
              <div className="skill-progress-track">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
