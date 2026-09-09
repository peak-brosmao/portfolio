import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedBg } from './components/AnimatedBg';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';
import { MaintenancePage } from './pages/MaintenancePage';

export const App = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // ─── Global Scroll Reveal ───────────────────────────────────────────────────
  // Runs after every route change so every page's .reveal elements animate in.
  useEffect(() => {
    // Small delay so the DOM has painted the new page before we observe
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 60); // 60ms gives React time to render the new page

    return () => clearTimeout(timer);
  }, [location.pathname]);
  // ────────────────────────────────────────────────────────────────────────────

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setToastMessage(`Copied: ${text}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2600);
      });
    } else {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setToastMessage(`Copied: ${text}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2600);
    }
  };

  return (
    <div className="app-layout">
      {/* Dynamic Animated Particle & Nebula Canvas */}
      <AnimatedBg theme={theme} />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Page Routing */}
      <main className="main-content">
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/about"        element={<AboutPage onCopy={handleCopy} />} />
          <Route path="/education"    element={<EducationPage />} />
          <Route path="/skills"       element={<SkillsPage />} />
          <Route path="/experience"   element={<ExperiencePage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact"      element={<ContactPage onCopy={handleCopy} />} />
          <Route path="*"             element={<MaintenancePage pageTitle="Page" />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Clipboard Notification */}
      <Toast message={toastMessage} show={showToast} />
    </div>
  );
};
