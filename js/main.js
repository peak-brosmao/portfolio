/**
 * PEAK BROS MAO Portfolio - peakbrosmao.me
 * Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // State variables
  let currentLang = localStorage.getItem('pbm_lang') || 'en';
  let currentTheme = localStorage.getItem('pbm_theme') || 'dark';
  let typewriterTimeout = null;

  // DOM Elements
  const htmlElem = document.documentElement;
  const bodyElem = document.body;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const siteHeader = document.getElementById('siteHeader');
  const typewriterText = document.getElementById('typewriterText');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  const skillTabBtns = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');
  const contactForm = document.getElementById('contactForm');
  const copyBtns = document.querySelectorAll('[data-copy]');

  // --- 1. Theme Management ---
  function applyTheme(theme) {
    currentTheme = theme;
    if (theme === 'light') {
      htmlElem.setAttribute('data-theme', 'light');
      themeIcon.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>`;
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      htmlElem.removeAttribute('data-theme');
      themeIcon.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>`;
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    }
    localStorage.setItem('pbm_theme', theme);
  }

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  // Apply initial theme
  applyTheme(currentTheme);

  // --- 2. Language & Translations ---
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pbm_lang', lang);
    htmlElem.setAttribute('lang', lang);
    
    if (lang === 'km') {
      bodyElem.classList.add('lang-km');
      langLabel.textContent = 'English';
      langToggleBtn.setAttribute('title', 'Switch to English');
    } else {
      bodyElem.classList.remove('lang-km');
      langLabel.textContent = 'ភាសាខ្មែរ';
      langToggleBtn.setAttribute('title', 'Switch to Khmer');
    }

    const dict = translations[lang];
    if (!dict) return;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Restart typewriter with translated roles
    startTypewriter();
  }

  langToggleBtn.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'km' : 'en';
    setLanguage(newLang);
    showToast(newLang === 'km' ? 'បានប្តូរទៅជាភាសាខ្មែរ' : 'Switched to English');
  });

  // --- 3. Dynamic Typewriter Effect ---
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function startTypewriter() {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeRole();
  }

  function typeRole() {
    const roles = translations[currentLang]?.heroRoles || translations.en.heroRoles;
    const currentText = roles[roleIndex % roles.length];

    if (isDeleting) {
      charIndex--;
      typewriterText.textContent = currentText.substring(0, charIndex);
    } else {
      charIndex++;
      typewriterText.textContent = currentText.substring(0, charIndex);
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      typeSpeed = 400; // Pause before new word
    }

    typewriterTimeout = setTimeout(typeRole, typeSpeed);
  }

  // --- 4. Mobile Navigation Drawer ---
  mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    mobileNavToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  });

  // --- 5. Sticky Header & Scroll Spy ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (navLink) {
        if (scrollPosition >= top && scrollPosition < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  });

  // --- 6. Skills Tab Filtering ---
  skillTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 7. Toast Notification & Copy to Clipboard ---
  let toastTimer = null;
  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-copy');
      if (!val) return;

      navigator.clipboard.writeText(val).then(() => {
        const copySuccess = translations[currentLang]?.copiedToast || "Copied to clipboard!";
        showToast(`${copySuccess} (${val})`);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = val;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${val}`);
      });
    });
  });

  // --- 8. Contact Form Handling ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const subject = document.getElementById('formSubject').value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Generate mailto link
      const mailtoUrl = `mailto:contact@peakbrosmao.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
      window.location.href = mailtoUrl;

      showToast(translations[currentLang]?.formSuccessMsg || 'Thank you! Redirecting to email...');
      contactForm.reset();
    });
  }

  // --- 9. Initial Load Setup ---
  setLanguage(currentLang);
});
