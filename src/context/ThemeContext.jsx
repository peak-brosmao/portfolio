import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pbm_theme') || 'dark';
  });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    localStorage.setItem('pbm_theme', theme);
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setIsAnimating(true);
    // Add smooth transition class to html root
    document.documentElement.classList.add('theme-transitioning');

    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      setIsAnimating(false);
    }, 550);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
