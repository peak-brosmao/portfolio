import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from '../components/TechIcon';
import {
  Send, ArrowRight, Mail, GraduationCap,
  Award, Flame, FolderGit2, Sparkles, Code2, Video, Trophy
} from 'lucide-react';

export const HomePage = () => {
  const { t } = useLanguage();

  // Typewriter
  const [roleIndex,  setRoleIndex]  = useState(0);
  const [charIndex,  setCharIndex]  = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t.heroRoles;
    const current = roles[roleIndex % roles.length];
    let timer;

    if (isDeleting) {
      timer = charIndex > 0
        ? setTimeout(() => setCharIndex((c) => c - 1), 38)
        : setTimeout(() => { setIsDeleting(false); setRoleIndex((r) => r + 1); }, 200);
    } else {
      timer = charIndex < current.length
        ? setTimeout(() => setCharIndex((c) => c + 1), 72)
        : setTimeout(() => setIsDeleting(true), 2400);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, t.heroRoles]);

  const displayedText = t.heroRoles[roleIndex % t.heroRoles.length].substring(0, charIndex);

  return (
    <div className="home-page-wrap">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero-section" id="hero">
        <div className="container hero-grid">

          {/* Left Content */}
          <div className="hero-content-col reveal">

            {/* Availability Badge */}
            <div className="hero-badge-wrap">
              <span className="badge-pulse" />
              <span>{t.heroStatus}</span>
            </div>

            <p className="hero-greeting">{t.heroGreeting}</p>
            <h1 className="hero-name">{t.heroName}</h1>

            {/* Typewriter */}
            <div className="hero-typewriter-box">
              <span>{t.heroImA}</span>
              <span className="typewriter-text">{displayedText}</span>
              <span className="typewriter-cursor" />
            </div>

            <p className="hero-bio">{t.heroBio}</p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-primary" id="hero-contact-btn">
                <Send size={17} />
                <span>{t.heroCtaContact}</span>
              </Link>

              <a
                href="https://t.me/peak_brosmao"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-telegram"
                id="hero-telegram-btn"
              >
                <TechIcon name="telegram" size={17} />
                <span>{t.heroCtaTelegram}</span>
              </a>

              <Link to="/experience" className="btn-outline" id="hero-portfolio-btn">
                <span>{t.heroCtaCv}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Social Pills */}
            <div className="hero-social-pills">
              <a href="https://t.me/peak_brosmao" target="_blank" rel="noopener noreferrer"
                 className="social-pill" title="Telegram (@peak_brosmao)">
                <TechIcon name="telegram" size={18} />
              </a>
              <a href="https://www.facebook.com/peakbrosmao" target="_blank" rel="noopener noreferrer"
                 className="social-pill" title="Facebook">
                <TechIcon name="facebook" size={18} />
              </a>
              <a href="https://x.com/peak_brosmao" target="_blank" rel="noopener noreferrer"
                 className="social-pill" title="X (Twitter)">
                <TechIcon name="x" size={16} />
              </a>
              <a href="https://www.youtube.com/@peak_brosmao" target="_blank" rel="noopener noreferrer"
                 className="social-pill" title="YouTube">
                <TechIcon name="youtube" size={18} />
              </a>
              <a href="https://www.linkedin.com/in/peak-brosmao-2a5304389/" target="_blank" rel="noopener noreferrer"
                 className="social-pill" title="LinkedIn">
                <TechIcon name="linkedin" size={17} />
              </a>
              <a href="mailto:contact@peakbrosmao.me" className="social-pill" title="Email">
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="hero-visual-wrap">
            <div className="portrait-glow-backdrop" />

            {/* ITC Chip */}
            <div className="floating-chip chip-itc">
              <div className="chip-icon-box">
                <img src="/img/itc-logo.png" alt="ITC" className="chip-itc-logo" />
              </div>
              <div className="chip-text">
                <span className="chip-title">{t.chipItcTitle}</span>
                <span className="chip-sub">{t.chipItcSub}</span>
              </div>
            </div>

            {/* Portrait Ring */}
            <div className="portrait-frame">
              <div className="portrait-inner">
                <img src="/img/profile.jpg" alt="PEAK BROSMAO" className="portrait-img" />
              </div>
            </div>

            {/* Creative Chip */}
            <div className="floating-chip chip-creative">
              <div className="chip-icon-box">
                <TechIcon name="video" size={19} />
              </div>
              <div className="chip-text">
                <span className="chip-title">{t.chipCreativeTitle}</span>
                <span className="chip-sub">{t.chipCreativeSub}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BANNER ═══════════════ */}
      <div className="stats-banner-wrap">
        <div className="container">
          <div className="stats-grid reveal">
            <div className="stat-item">
              <div className="stat-icon-wrap stat-itc">
                <img src="/img/itc-logo.png" alt="ITC" className="stat-itc-logo" />
              </div>
              <div>
                <div className="stat-value">{t.statYearUni}</div>
                <div className="stat-sub">{t.statYearUniSub}</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap stat-award">
                <Award size={22} />
              </div>
              <div>
                <div className="stat-value">{t.statGradB}</div>
                <div className="stat-sub">{t.statGradBSub}</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap stat-exp">
                <Flame size={22} />
              </div>
              <div>
                <div className="stat-value">{t.statExp}</div>
                <div className="stat-sub">{t.statExpSub}</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrap stat-projects">
                <FolderGit2 size={22} />
              </div>
              <div>
                <div className="stat-value">{t.statProjects}</div>
                <div className="stat-sub">{t.statProjectsSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ HUB GRID ═══════════════ */}
      <section className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">{t.hubBadge}</span>
            <h2 className="section-title">{t.hubTitle}</h2>
            <p className="section-subtitle">{t.hubSubtitle}</p>
          </div>

          <div className="hub-pages-grid">
            {/* About — wide */}
            <Link to="/about" className="glass-card hub-card reveal reveal-delay-1">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Sparkles size={22} color="var(--accent-primary)" />
                </div>
                <ArrowRight size={19} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navAbout}</h3>
              <p className="hub-card-desc">{t.hubAboutDesc}</p>
            </Link>

            {/* Education */}
            <Link to="/education" className="glass-card hub-card reveal reveal-delay-2">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <GraduationCap size={22} color="var(--accent-secondary)" />
                </div>
                <ArrowRight size={19} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navEducation}</h3>
              <p className="hub-card-desc">{t.hubEduDesc}</p>
            </Link>

            {/* Skills */}
            <Link to="/skills" className="glass-card hub-card reveal reveal-delay-1">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Code2 size={22} color="var(--accent-amber)" />
                </div>
                <ArrowRight size={19} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navSkills}</h3>
              <p className="hub-card-desc">{t.hubSkillsDesc}</p>
            </Link>

            {/* Experience */}
            <Link to="/experience" className="glass-card hub-card reveal reveal-delay-2">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Video size={22} color="var(--accent-secondary)" />
                </div>
                <ArrowRight size={19} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navExperience}</h3>
              <p className="hub-card-desc">{t.hubExpDesc}</p>
            </Link>

            {/* Achievements */}
            <Link to="/achievements" className="glass-card hub-card reveal reveal-delay-3">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Trophy size={22} color="var(--accent-amber)" />
                </div>
                <ArrowRight size={19} className="hub-arrow" />
              </div>
              <h3 className="hub-card-title">{t.navAchievements}</h3>
              <p className="hub-card-desc">{t.hubAchieveDesc}</p>
            </Link>

            {/* Contact */}
            <Link to="/contact" className="glass-card hub-card reveal reveal-delay-3">
              <div className="hub-card-header">
                <div className="hub-icon-wrap">
                  <Send size={22} color="var(--accent-emerald)" />
                </div>
                <ArrowRight size={19} className="hub-arrow" />
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
