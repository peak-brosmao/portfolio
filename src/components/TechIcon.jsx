import React from 'react';

/**
 * Authentic SVG Vector Logos & Icons (Zero Emojis)
 */
export const TechIcon = ({ name, size = 22, className = '' }) => {
  const s = size;

  switch (name) {
    case 'telegram':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      );

    case 'facebook':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );

    case 'x':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );

    case 'youtube':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );

    case 'linkedin':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );

    case 'phone':
    case 'phone-telegram':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      );

    case 'email':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      );

    case 'react':
      return (
        <svg width={s} height={s} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );

    case 'nextjs':
      return (
        <svg width={s} height={s} viewBox="0 0 180 180" fill="none" className={className}>
          <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="black"/>
          </mask>
          <g mask="url(#mask0_next)">
            <circle cx="90" cy="90" r="90" fill="#000000" stroke="#ffffff" strokeWidth="6"/>
            <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#paint0_linear_next)"/>
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'nodejs':
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" fill="#339933"/>
          <path d="M16 6.5L25 11.7V20.3L16 25.5L7 20.3V11.7L16 6.5Z" fill="#FFFFFF"/>
          <path d="M16 9.5L22 13V19L16 22.5L10 19V13L16 9.5Z" fill="#339933"/>
        </svg>
      );

    case 'cpp':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" className={className}>
          <path fill="#00599C" d="M64 14 14 42.8v56.5L64 128l50-28.7V42.8L64 14z"/>
          <path fill="#004482" d="M64 22.3 21.2 47v48.2L64 119.7l42.8-24.5V47L64 22.3z"/>
          <path fill="#659AD2" d="M64 34.6 31.8 53.2v35.8L64 107.4l32.2-18.4V53.2L64 34.6z"/>
          <path fill="#FFF" d="M63.8 51.5c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3c5.3 0 9.9-2.9 12.4-7.2l-6.4-3.7c-1.3 2.2-3.6 3.7-6 3.7-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4c2.5 0 4.7 1.4 6 3.7l6.4-3.7c-2.4-4.3-7-7.2-12.4-7.2zm21.5 10.7v3.6h-3.6v3.6h3.6V73h3.6v-3.6h3.6v-3.6h-3.6v-3.6h-3.6zm10.7 0v3.6h-3.6v3.6h3.6V73h3.6v-3.6h3.6v-3.6h-3.6v-3.6H96z"/>
        </svg>
      );

    case 'java':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="#f89820"/>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#5382a1"/>
          <line x1="6" y1="1" x2="6" y2="4" stroke="#e76f00"/>
          <line x1="10" y1="1" x2="10" y2="4" stroke="#e76f00"/>
          <line x1="14" y1="1" x2="14" y2="4" stroke="#e76f00"/>
        </svg>
      );

    case 'php':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" className={className}>
          <path fill="#777BB4" d="M64 21C28.7 21 0 39.8 0 63c0 23.1 28.7 42 64 42s64-18.9 64-42c0-23.2-28.7-42-64-42z"/>
          <path fill="#FFF" d="M33.4 46.2h-12L13.1 81.8h9.8l2.5-12.4h5.7c8.1 0 13.9-4.8 15.6-13.3 1.6-8.2-2.7-9.9-13.3-9.9zm-4.3 14.8h-4.3l2.2-10.9h4.3c3.6 0 5.6.8 4.8 4.7-.7 3.5-3.3 6.2-7 6.2zm37.3-14.8h-9.8L48.3 81.8h9.8l2.8-14.2h10.4l-2.8 14.2h9.8L86.6 46.2h-9.8l-2.5 12.8H63.9l2.5-12.8zm39.1 0h-12l-8.3 35.6h9.8l2.5-12.4h5.7c8.1 0 13.9-4.8 15.6-13.3 1.6-8.2-2.7-9.9-13.3-9.9zm-4.3 14.8h-4.3l2.2-10.9h4.3c3.6 0 5.6.8 4.8 4.7-.7 3.5-3.3 6.2-7 6.2z"/>
        </svg>
      );

    case 'wordpress':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" className={className}>
          <path fill="#21759B" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.9C32.1 121.9 6.1 95.9 6.1 64c0-13.2 4.4-25.4 11.9-35.1l35.8 98.1c-3.1 1.9-6.3 3.4-9.8 4.9zm41.1-26.6c4.6-7.8 7.3-16.9 7.3-26.6 0-14.4-6-27.4-15.6-36.6l23.5 64.3c-4.3-.4-10.8-.9-15.2-1.1zm-38.3 2.9L49.3 46.8c3.8-.2 7.3-.5 7.3-.5 3.3-.4 2.9-5.2-.4-5.2 0 0-9.9.8-16.3.8-6 0-16-.8-16-.8-3.3 0-3.7 4.9-.4 5.2 0 0 3.3.3 6.9.5l10.3 30.8-14.5 43.4c-6.9-7.9-11-18.2-11-29.4 0-13.9 6.3-26.3 16.2-34.7L54 98.2h.1l12.7-36.9-9.1-24.9c3.3-.2 6.5-.5 6.5-.5 3.3-.4 2.9-5.2-.4-5.2 0 0-9.9.8-16.3.8-1.5 0-3.3-.1-5.3-.2C50.2 25.4 56.9 22.9 64 22.9c13.7 0 25.9 6.5 33.7 16.6-.7 0-1.4.1-2.1.1-6 0-10.3 5.2-10.3 10.7 0 4.9 2.8 9.1 5.8 14 2.4 4 5.2 8.9 5.2 16.1 0 4.9-1.9 10.6-4.4 18l-15.1-40.2h.1z"/>
        </svg>
      );

    case 'blogger':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="28" fill="#FF5722"/>
          <path fill="#FFF" d="M84 40H44c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V52c0-6.6-5.4-12-12-12zm-30 18c0-3.3 2.7-6 6-6h12c3.3 0 6 2.7 6 6s-2.7 6-6 6H60c-3.3 0-6-2.7-6-6zm20 30H56c-3.3 0-6-2.7-6-6s2.7-6 6-6h18c3.3 0 6 2.7 6 6s-2.7 6-6 6z"/>
        </svg>
      );

    case 'html5':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" className={className}>
          <path fill="#E44D26" d="M19.2 114.7 8.5 0h111l-10.7 114.7-44.8 12.4z"/>
          <path fill="#F16529" d="M64 116.8l36.5-10.1 8.9-95.7H64z"/>
          <path fill="#EBEBEB" d="M64 48.9H47.4l-1.1-12.8H64V24H33.8l3.4 37.8H64zm0 39.8-18.7-5-1.2-13.4H31.9l2.3 26.2 29.8 8.3z"/>
          <path fill="#FFF" d="M64 48.9h16.6l-1.6 17.5-15 4.1V82l18.7-5.1 2.4-26.6h-21.1zm0-24.9h30.2l-1.1 12.1H64z"/>
        </svg>
      );

    case 'css3':
      return (
        <svg width={s} height={s} viewBox="0 0 128 128" className={className}>
          <path fill="#1572B6" d="M19.2 114.7 8.5 0h111l-10.7 114.7-44.8 12.4z"/>
          <path fill="#33A9DC" d="M64 116.8l36.5-10.1 8.9-95.7H64z"/>
          <path fill="#EBEBEB" d="M64 49.3H47.4l-1.1-12.8H64V24.4H33.8l3.4 37.8H64zm0 42.1-18.7-5-1.2-13.4H31.9l2.3 26.2 29.8 8.3z"/>
          <path fill="#FFF" d="M64 49.3h16.6l-1.6 17.5-15 4.1V82l18.7-5.1 2.4-26.6h-21.1zm0-24.9h30.2l-1.1 12.1H64z"/>
        </svg>
      );

    case 'video':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
          <line x1="7" y1="2" x2="7" y2="22"/>
          <line x1="17" y1="2" x2="17" y2="22"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <line x1="2" y1="7" x2="7" y2="7"/>
          <line x1="2" y1="17" x2="7" y2="17"/>
          <line x1="17" y1="17" x2="22" y2="17"/>
          <line x1="17" y1="7" x2="22" y2="7"/>
        </svg>
      );

    case 'camera':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      );

    case 'print':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="6 9 6 2 18 2 18 9"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <rect x="6" y="14" width="12" height="8"/>
        </svg>
      );

    case 'design':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      );

    case 'word':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2b579a"/>
          <polyline points="14 2 14 8 20 8" stroke="#2b579a"/>
          <path d="M9 13l2 5 2-5" stroke="#2b579a"/>
        </svg>
      );

    case 'excel':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#217346"/>
          <polyline points="14 2 14 8 20 8" stroke="#217346"/>
          <line x1="8" y1="13" x2="16" y2="17" stroke="#217346"/>
          <line x1="16" y1="13" x2="8" y2="17" stroke="#217346"/>
        </svg>
      );

    case 'robot':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4"/>
          <line x1="8" y1="16" x2="8" y2="16"/>
          <line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      );

    case 'itc':
      return (
        <img 
          src="/img/itc-logo.png" 
          alt="ITC Seal" 
          width={s} 
          height={s} 
          style={{ 
            width: `${s}px`, 
            height: `${s}px`, 
            objectFit: 'contain', 
            borderRadius: '50%',
            background: '#ffffff',
            padding: '1px',
            display: 'inline-block',
            verticalAlign: 'middle',
            boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
          }} 
          className={className} 
        />
      );

    case 'university':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      );

    case 'award':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      );

    case 'mentor':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );

    default:
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      );
  }
};
