import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from './TechIcon';
import { ArrowUp, Mail, Send, Heart } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer-redesigned">
      <div className="container">
        {/* Main Footer Glass Card */}
        <div className="footer-glass-box">
          <div className="footer-grid-redesigned">
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

              {/* Social Icon Pills */}
              <div className="footer-social-row">
                <a
                  href="https://t.me/peak_brosmao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Telegram (@peak_brosmao)"
                >
                  <TechIcon name="telegram" size={18} />
                </a>

                <a
                  href="https://www.facebook.com/peakbrosmao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Facebook Profile"
                >
                  <TechIcon name="facebook" size={18} />
                </a>

                <a
                  href="https://x.com/peak_brosmao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="X (Twitter)"
                >
                  <TechIcon name="x" size={16} />
                </a>

                <a
                  href="https://www.youtube.com/@peak_brosmao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="YouTube Channel"
                >
                  <TechIcon name="youtube" size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/peak-brosmao-2a5304389/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="LinkedIn Profile"
                >
                  <TechIcon name="linkedin" size={17} />
                </a>

                <a
                  href="mailto:contact@peakbrosmao.me"
                  className="footer-social-btn"
                  title="Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="footer-links-col">
              <h4 className="footer-section-title">{t.footerLinksTitle}</h4>
              <ul className="footer-nav-list">
                <li><Link to="/">{t.navHome}</Link></li>
                <li><Link to="/about">{t.navAbout}</Link></li>
                <li><Link to="/education">{t.navEducation}</Link></li>
                <li><Link to="/skills">{t.navSkills}</Link></li>
                <li><Link to="/experience">{t.navExperience}</Link></li>
                <li><Link to="/achievements">{t.navAchievements}</Link></li>
                <li><Link to="/contact">{t.navContact}</Link></li>
              </ul>
            </div>

            {/* Direct Contact Channel Column */}
            <div className="footer-contact-col">
              <h4 className="footer-section-title">{t.footerContactTitle}</h4>
              <ul className="footer-contact-list">
                <li>
                  <a href="mailto:contact@peakbrosmao.me" className="footer-contact-link">
                    <Mail size={16} color="#06b6d4" />
                    <span>contact@peakbrosmao.me</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/peak_brosmao" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                    <TechIcon name="telegram" size={16} />
                    <span>t.me/peak_brosmao</span>
                  </a>
                </li>
              </ul>

              <div style={{ marginTop: '20px' }}>
                <Link to="/contact" className="footer-cta-btn">
                  <Send size={15} />
                  <span>{t.heroCtaContact}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} <strong>PEAK BROSMAO</strong>. {t.footerRights}
            </p>
            <button className="footer-scroll-top-btn" onClick={scrollToTop} aria-label="Back to top" title="Back to top">
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
