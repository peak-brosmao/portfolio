import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from '../components/TechIcon';
import { 
  Send, 
  ArrowRight, 
  Mail, 
  GraduationCap, 
  Award, 
  Flame, 
  FolderGit2, 
  Sparkles
} from 'lucide-react';

export const HomePage = () => {
  const { t } = useLanguage();

  // Typewriter effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t.heroRoles;
    const currentRole = roles[roleIndex % roles.length];

    let timer;
    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex((c) => c - 1), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => r + 1);
      }
    } else {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => setCharIndex((c) => c + 1), 75);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, t.heroRoles]);

  const currentRole = t.heroRoles[roleIndex % t.heroRoles.length];
  const displayedText = currentRole.substring(0, charIndex);

  return (
    <div className="home-page-wrap">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section" id="hero">
        <div className="container hero-grid">
          {/* Left Content */}
          <div className="hero-content-col">
            {/* Status Pulse Badge */}
            <div className="hero-badge-wrap">
              <span className="badge-pulse"></span>
              <span>{t.heroStatus}</span>
            </div>

            <p className="hero-greeting">{t.heroGreeting}</p>

            {/* Dynamic Name (PEAK BROSMAO in EN, ពៀក ប្រុសម៉ៅ in KM) */}
            <h1 className="hero-name">{t.heroName}</h1>

            {/* Dynamic Typewriter */}
            <div className="hero-typewriter-box">
              <span>{t.heroImA}</span>
              <span className="typewriter-text">{displayedText}</span>
              <span className="typewriter-cursor"></span>
            </div>

            <p className="hero-bio">{t.heroBio}</p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-primary">
                <Send size={18} />
                <span>{t.heroCtaContact}</span>
              </Link>

              <a
                href="https://t.me/peak_brosmao"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-telegram"
              >
                <TechIcon name="telegram" size={18} />
                <span>{t.heroCtaTelegram}</span>
              </a>

              <Link to="/experience" className="btn-outline">
                <span>{t.heroCtaCv}</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Verified Social Media Pills */}
            <div className="hero-social-pills">
              <a
                href="https://t.me/peak_brosmao"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="Telegram (@peak_brosmao)"
              >
                <TechIcon name="telegram" size={19} />
              </a>

              <a
                href="https://www.facebook.com/peakbrosmao"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="Facebook (/peakbrosmao)"
              >
                <TechIcon name="facebook" size={19} />
              </a>

              <a
                href="https://x.com/peak_brosmao"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="X Twitter (@peak_brosmao)"
              >
                <TechIcon name="x" size={17} />
              </a>

              <a
                href="https://www.youtube.com/@peak_brosmao"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="YouTube (@peak_brosmao)"
              >
                <TechIcon name="youtube" size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/peak-brosmao-2a5304389/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="LinkedIn Profile"
              >
                <TechIcon name="linkedin" size={18} />
              </a>

              <a
                href="mailto:contact@peakbrosmao.me"
                className="social-pill"
                title="Official Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Visual Frame */}
          <div className="hero-visual-wrap">
            <div className="portrait-glow-backdrop"></div>

            {/* Floating Chip 1: ITC GIC */}
            <div className="floating-chip chip-itc">
              <div className="chip-icon-box">
                <img src="/img/itc-logo.png" alt="ITC Logo" className="chip-itc-logo" />
              </div>
              <div className="chip-text">
                <span className="chip-title">{t.chipItcTitle}</span>
                <span className="chip-sub">{t.chipItcSub}</span>
              </div>
            </div>

            {/* Rotating Portrait Ring */}
            <div className="portrait-frame">
              <div className="portrait-inner">
                <img
                  src="/img/profile.jpg"
                  alt="PEAK BROSMAO"
                  className="portrait-img"
                />
              </div>
            </div>

            {/* Floating Chip 2: Creator & Developer */}
            <div className="floating-chip chip-creative">
              <div className="chip-icon-box">
                <TechIcon name="video" size={20} className="icon-cyan" />
              </div>
              <div className="chip-text">
                <span className="chip-title">{t.chipCreativeTitle}</span>
                <span className="chip-sub">{t.chipCreativeSub}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS BANNER ================= */}
      <div className="stats-banner-wrap">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon-wrap stat-itc">
                <img src="/img/itc-logo.png" alt="ITC Logo" className="stat-itc-logo" />
              </div>
              <div>
                <div className="stat-value">{t.statYearUni}</div>
                <div className="stat-sub">{t.statYearUniSub}</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap stat-award">
                <Award size={24} />
              </div>
              <div>
                <div className="stat-value">{t.statGradB}</div>
                <div className="stat-sub">{t.statGradBSub}</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap stat-exp">
                <Flame size={24} />
              </div>
              <div>
                <div className="stat-value">{t.statExp}</div>
                <div className="stat-sub">{t.statExpSub}</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap stat-projects">
                <FolderGit2 size={24} />
              </div>
              <div>
                <div className="stat-value">{t.statProjects}</div>
                <div className="stat-sub">{t.statProjectsSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= EXPLORE PORTFOLIO PAGES GRID ================= */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t.hubBadge}</span>
            <h2 className="section-title">{t.hubTitle}</h2>
            <p className="section-subtitle">{t.hubSubtitle}</p>
          </div>

          <div className="hub-pages-grid">
            {/* Hub Card: About */}
            <Link to="/about" className="glass-card hub-card">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Sparkles size={24} color="#6366f1" />
                </div>
                <ArrowRight size={20} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navAbout}</h3>
              <p className="hub-card-desc">{t.hubAboutDesc}</p>
            </Link>

            {/* Hub Card: Education */}
            <Link to="/education" className="glass-card hub-card">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <GraduationCap size={24} color="#06b6d4" />
                </div>
                <ArrowRight size={20} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navEducation}</h3>
              <p className="hub-card-desc">{t.hubEduDesc}</p>
            </Link>

            {/* Hub Card: Skills */}
            <Link to="/skills" className="glass-card hub-card">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <TechIcon name="react" size={26} />
                </div>
                <ArrowRight size={20} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navSkills}</h3>
              <p className="hub-card-desc">{t.hubSkillsDesc}</p>
            </Link>

            {/* Hub Card: Experience */}
            <Link to="/experience" className="glass-card hub-card">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <TechIcon name="video" size={24} />
                </div>
                <ArrowRight size={20} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navExperience}</h3>
              <p className="hub-card-desc">{t.hubExpDesc}</p>
            </Link>

            {/* Hub Card: Achievements */}
            <Link to="/achievements" className="glass-card hub-card">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Award size={24} color="#f59e0b" />
                </div>
                <ArrowRight size={20} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navAchievements}</h3>
              <p className="hub-card-desc">{t.hubAchieveDesc}</p>
            </Link>

            {/* Hub Card: Contact */}
            <Link to="/contact" className="glass-card hub-card">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Send size={24} color="#10b981" />
                </div>
                <ArrowRight size={20} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navContact}</h3>
              <p className="hub-card-desc">{t.hubContactDesc}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
