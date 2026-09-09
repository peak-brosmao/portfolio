import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from './TechIcon';
import { ArrowUp, Mail, Send, Heart } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { to: '/',             label: t.navHome },
    { to: '/about',        label: t.navAbout },
    { to: '/education',    label: t.navEducation },
    { to: '/skills',       label: t.navSkills },
    { to: '/experience',   label: t.navExperience },
    { to: '/achievements', label: t.navAchievements },
    { to: '/contact',      label: t.navContact },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-glass-box">
          {/* Gradient top accent bar */}
          <div className="footer-top-bar" />

          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <div className="footer-brand-header">
                <img src="/img/profile.jpg" alt="PEAK BROSMAO" className="footer-avatar" />
                <div>
                  <h3 className="footer-brand-name">PEAK <span>BROSMAO</span></h3>
                  <span className="footer-brand-role">GIC Computer Science • Web • Media</span>
                </div>
              </div>
              <p className="footer-brand-desc">{t.footerDesc}</p>

              <div className="footer-social-row">
                <a href="https://t.me/peak_brosmao" target="_blank" rel="noopener noreferrer"
                   className="footer-social-btn" title="Telegram">
                  <TechIcon name="telegram" size={17} />
                </a>
                <a href="https://www.facebook.com/peakbrosmao" target="_blank" rel="noopener noreferrer"
                   className="footer-social-btn" title="Facebook">
                  <TechIcon name="facebook" size={17} />
                </a>
                <a href="https://x.com/peak_brosmao" target="_blank" rel="noopener noreferrer"
                   className="footer-social-btn" title="X (Twitter)">
                  <TechIcon name="x" size={15} />
                </a>
                <a href="https://www.youtube.com/@peak_brosmao" target="_blank" rel="noopener noreferrer"
                   className="footer-social-btn" title="YouTube">
                  <TechIcon name="youtube" size={17} />
                </a>
                <a href="https://www.linkedin.com/in/peak-brosmao-2a5304389/" target="_blank" rel="noopener noreferrer"
                   className="footer-social-btn" title="LinkedIn">
                  <TechIcon name="linkedin" size={16} />
                </a>
                <a href="mailto:contact@peakbrosmao.me"
                   className="footer-social-btn" title="Email">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-section-title">{t.footerLinksTitle}</h4>
              <ul className="footer-nav-list">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Channels */}
            <div>
              <h4 className="footer-section-title">{t.footerContactTitle}</h4>
              <ul className="footer-contact-list">
                <li>
                  <a href="mailto:contact@peakbrosmao.me" className="footer-contact-link">
                    <Mail size={15} color="var(--accent-secondary)" />
                    <span>contact@peakbrosmao.me</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/peak_brosmao" target="_blank" rel="noopener noreferrer"
                     className="footer-contact-link">
                    <TechIcon name="telegram" size={15} />
                    <span>t.me/peak_brosmao</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/peakbrosmao" target="_blank" rel="noopener noreferrer"
                     className="footer-contact-link">
                    <TechIcon name="facebook" size={15} />
                    <span>facebook.com/peakbrosmao</span>
                  </a>
                </li>
              </ul>

              <Link to="/contact" className="footer-cta-btn">
                <Send size={14} />
                <span>{t.heroCtaContact}</span>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} <strong>PEAK BROSMAO</strong>.{' '}
              {t.footerRights}{' '}
              <a href="https://peakbrosmao.me" target="_blank" rel="noopener noreferrer">
                peakbrosmao.me
              </a>
            </p>
            <button
              className="footer-scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
