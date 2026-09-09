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
      progress: 50,
      iconName: 'html5'
    },
    {
      id: 'react',
      name: 'React & Next.js',
      category: 'web',
      catLabel: t.catFrontend,
      level: t.skillLevelLearning,
      progress: 10,
      iconName: 'react'
    },
    {
      id: 'cpp',
      name: 'C++ & Java (ITC GIC)',
      category: 'web',
      catLabel: t.skillsCurrentStudy,
      level: t.skillLevelLearning,
      progress: 10,
      iconName: 'cpp'
    },
    {
      id: 'php',
      name: 'PHP & Backend Basics',
      category: 'web',
      catLabel: t.catBackend,
      level: t.skillLevelIntermediate,
      progress: 10,
      iconName: 'php'
    },
    {
      id: 'wordpress',
      name: 'WordPress & Blogger (CMS)',
      category: 'web',
      catLabel: t.catCms,
      level: t.skillLevelAdvanced,
      progress: 50,
      iconName: 'wordpress'
    },
    {
      id: 'video',
      name: 'Video Editing & Directing',
      category: 'video',
      catLabel: t.skillMediaCat,
      level: t.skillLevelAdvanced,
      progress: 88,
      iconName: 'video'
    },
    {
      id: 'camera',
      name: 'Camera & Cinematography',
      category: 'video',
      catLabel: t.catCamera,
      level: t.skillLevelIntermediate,
      progress: 82,
      iconName: 'camera'
    },
    {
      id: 'print',
      name: 'Printing & Copy Press',
      category: 'print',
      catLabel: t.skillPrintCat,
      level: t.skillLevelAdvanced,
      progress: 90,
      iconName: 'print'
    },
    {
      id: 'design',
      name: 'Poster & Graphic Design',
      category: 'print',
      catLabel: t.catDesign,
      level: t.skillLevelIntermediate,
      progress: 80,
      iconName: 'design'
    },
    {
      id: 'word',
      name: 'Microsoft Word & Excel',
      category: 'print',
      catLabel: t.skillToolsCat,
      level: t.skillLevelAdvanced,
      progress: 95,
      iconName: 'word'
    }
  ];

  const filteredSkills =
    filter === 'all' ? skills : skills.filter((s) => s.category === filter);

  return (
    <div className="page-container container">
      <div className="section-header">
        <span className="section-badge">{t.skillsTitle}</span>
        <h1 className="section-title">{t.skillsHeading}</h1>
        <p className="section-subtitle">{t.skillsSubtitle}</p>
      </div>

      {/* Category Tabs */}
      <div className="skills-filter-nav">
        <button
          className={`skill-tab-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          {t.tabAllSkills}
        </button>
        <button
          className={`skill-tab-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          {t.tabWebDev}
        </button>
        <button
          className={`skill-tab-btn ${filter === 'video' ? 'active' : ''}`}
          onClick={() => setFilter('video')}
        >
          {t.tabVideo}
        </button>
        <button
          className={`skill-tab-btn ${filter === 'print' ? 'active' : ''}`}
          onClick={() => setFilter('print')}
        >
          {t.tabPrint}
        </button>
      </div>

      {/* Skills Grid with Real Logos */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="glass-card skill-card">
            <div className="skill-card-top">
              <div className="skill-badge-icon">
                <TechIcon name={skill.iconName} size={26} />
              </div>
              <span
                className={`skill-level-tag ${skill.level === t.skillLevelLearning ? 'learning' : ''
                  }`}
              >
                {skill.level}
              </span>
            </div>
            <h4 className="skill-name">{skill.name}</h4>
            <div className="skill-category-label">{skill.catLabel}</div>
            <div className="skill-progress-track">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
