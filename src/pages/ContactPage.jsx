import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from '../components/TechIcon';
import { Send, MapPin, Copy, Mail, Check } from 'lucide-react';

export const ContactPage = ({ onCopy }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);

    // Formspree submission — replace YOUR_FORM_ID with your actual Formspree ID
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Fallback to mailto if Formspree not configured
        const mailto = `mailto:contact@peakbrosmao.me?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailto;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // Network error — fallback to mailto
      const mailto = `mailto:contact@peakbrosmao.me?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailto;
    } finally {
      setSending(false);
    }
  };

  const channels = [
    {
      id: 'email',
      icon: <TechIcon name="email" size={18} />,
      title: t.contactOfficialEmail,
      display: 'contact@peakbrosmao.me',
      href: 'mailto:contact@peakbrosmao.me',
      copyVal: 'contact@peakbrosmao.me',
    },
    {
      id: 'telegram',
      icon: <TechIcon name="telegram" size={18} />,
      title: t.channelTelegram,
      display: 't.me/peak_brosmao',
      href: 'https://t.me/peak_brosmao',
      copyVal: 'https://t.me/peak_brosmao',
    },
    {
      id: 'facebook',
      icon: <TechIcon name="facebook" size={18} />,
      title: t.channelFacebook,
      display: 'facebook.com/peakbrosmao',
      href: 'https://www.facebook.com/peakbrosmao',
      copyVal: 'https://www.facebook.com/peakbrosmao',
    },
    {
      id: 'x',
      icon: <TechIcon name="x" size={16} />,
      title: t.channelX,
      display: 'x.com/peak_brosmao',
      href: 'https://x.com/peak_brosmao',
      copyVal: 'https://x.com/peak_brosmao',
    },
    {
      id: 'youtube',
      icon: <TechIcon name="youtube" size={18} />,
      title: t.channelYoutube,
      display: 'youtube.com/@peak_brosmao',
      href: 'https://www.youtube.com/@peak_brosmao',
      copyVal: 'https://www.youtube.com/@peak_brosmao',
    },
    {
      id: 'linkedin',
      icon: <TechIcon name="linkedin" size={17} />,
      title: t.channelLinkedin,
      display: 'linkedin.com/in/peak-brosmao',
      href: 'https://www.linkedin.com/in/peak-brosmao-2a5304389/',
      copyVal: 'https://www.linkedin.com/in/peak-brosmao-2a5304389/',
    },
  ];

  return (
    <div className="page-container container">
      <div className="section-header reveal">
        <span className="section-badge">{t.contactTitle}</span>
        <h1 className="section-title">{t.contactHeading}</h1>
        <p className="section-subtitle">{t.contactSubtitle}</p>
      </div>

      <div className="contact-grid">

        {/* Direct Channels */}
        <div className="glass-card contact-info-card reveal reveal-delay-1">
          <div>
            <h3>{t.directChannels}</h3>
            <p>{t.contactSub}</p>
          </div>

          <div className="contact-channels-list">
            {channels.map((ch) => (
              <div key={ch.id} className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">{ch.icon}</div>
                  <div className="channel-details">
                    <span className="channel-title">{ch.title}</span>
                    <a
                      href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="channel-value"
                    >
                      {ch.display}
                    </a>
                  </div>
                </div>
                <button
                  className="copy-mini-btn"
                  onClick={() => onCopy(ch.copyVal)}
                  id={`copy-${ch.id}-btn`}
                >
                  <Copy size={12} />
                  <span>{t.copyBtn}</span>
                </button>
              </div>
            ))}

            {/* Location — no copy */}
            <div className="contact-channel-item">
              <div className="channel-icon-label">
                <div className="channel-icon"><MapPin size={18} /></div>
                <div className="channel-details">
                  <span className="channel-title">{t.contactLocation}</span>
                  <span className="channel-value">{t.contactLocationVal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="glass-card contact-form-card reveal reveal-delay-2">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="formName">
                  {t.formNamePlaceholder}
                </label>
                <input
                  id="formName"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.formNamePlaceholder}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="formEmail">
                  {t.formEmailPlaceholder}
                </label>
                <input
                  id="formEmail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.formEmailPlaceholder}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="formSubject">
                {t.formSubjectPlaceholder}
              </label>
              <input
                id="formSubject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder={t.formSubjectPlaceholder}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="formMessage">
                {t.formMessagePlaceholder}
              </label>
              <textarea
                id="formMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder={t.formMessagePlaceholder}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={sending}
              id="contact-submit-btn"
            >
              {sending ? (
                <>
                  <span style={{ opacity: 0.7 }}>Sending…</span>
                </>
              ) : (
                <>
                  <Send size={17} />
                  <span>{t.formSubmitBtn}</span>
                </>
              )}
            </button>

            {submitted && (
              <div className="form-alert-success" role="alert">
                <Check size={16} strokeWidth={3} />
                <span>{t.formSuccessMsg}</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};
