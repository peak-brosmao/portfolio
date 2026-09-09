import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Languages, Zap } from 'lucide-react';

export const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme, isAnimating } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for navbar shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change / escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

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
    <>
      {/* Mobile Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">

          {/* Brand */}
          <Link to="/" className="brand-logo" onClick={closeMobile} aria-label="Home">
            <img src="/img/profile.jpg" alt="PEAK BROSMAO" className="brand-avatar-mini" />
            <div className="brand-info">
              <span className="brand-title">PEAK <span>BROSMAO</span></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobile}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile-only CTA inside drawer */}
            <Link
              to="/contact"
              className="mobile-connect-btn"
              onClick={closeMobile}
            >
              <Zap size={16} />
              <span>{t.hireMeBtn}</span>
            </Link>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Language Toggle */}
            <button
              className="lang-switch-btn"
              onClick={toggleLang}
              title={lang === 'en' ? 'ប្តូរទៅភាសាខ្មែរ' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Languages size={16} />
              <span>{lang === 'en' ? 'KM' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              className={`theme-toggle-btn ${theme} ${isAnimating ? 'animating' : ''}`}
              onClick={(e) => toggleTheme(e)}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              <span className="theme-toggle-icon-wrap">
                {theme === 'dark'
                  ? <Sun  size={18} className="sun-icon"  />
                  : <Moon size={18} className="moon-icon" />
                }
              </span>
            </button>

            {/* Desktop CTA */}
            <Link to="/contact" className="cta-hire-btn" onClick={closeMobile}>
              <Zap size={14} />
              <span>{t.hireMeBtn}</span>
            </Link>

            {/* Hamburger */}
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
