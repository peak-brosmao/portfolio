import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Languages, Zap } from 'lucide-react';

export const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme, isAnimating } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t.navHome },
    { to: '/about', label: t.navAbout },
    { to: '/education', label: t.navEducation },
    { to: '/skills', label: t.navSkills },
    { to: '/experience', label: t.navExperience },
    { to: '/achievements', label: t.navAchievements },
    { to: '/contact', label: t.navContact }
  ];

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo: ONLY PEAK BROSMAO (no domain subtext) */}
        <Link to="/" className="brand-logo" onClick={() => setMobileOpen(false)}>
          <img src="/img/profile.jpg" alt="PEAK BROSMAO" className="brand-avatar-mini" />
          <div className="brand-info">
            <span className="brand-title">
              PEAK <span>BROSMAO</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          {/* Bilingual Switcher */}
          <button
            className="lang-switch-btn"
            onClick={toggleLang}
            title={lang === 'en' ? 'ប្តូរទៅភាសាខ្មែរ' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <Languages size={17} />
            <span>{lang === 'en' ? 'ភាសាខ្មែរ' : 'English'}</span>
          </button>

          {/* Theme Toggle with smooth morphing animation */}
          <button
            className={`theme-toggle-btn ${theme} ${isAnimating ? 'animating' : ''}`}
            onClick={(e) => toggleTheme(e)}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            <span className="theme-toggle-icon-wrap">
              {theme === 'dark' ? (
                <Sun size={19} className="theme-icon sun-icon" />
              ) : (
                <Moon size={19} className="theme-icon moon-icon" />
              )}
            </span>
          </button>

          {/* Connect CTA Button */}
          <Link to="/contact" className="cta-hire-btn" onClick={() => setMobileOpen(false)}>
            <Zap size={15} />
            <span>{t.hireMeBtn}</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
