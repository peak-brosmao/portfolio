import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from '../components/TechIcon';
import { 
  Send, 
  MapPin, 
  Copy, 
  Check
} from 'lucide-react';

export const ContactPage = ({ onCopy }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailto = `mailto:contact@peakbrosmao.me?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-container container">
      <div className="section-header">
        <span className="section-badge">{t.contactTitle}</span>
        <h1 className="section-title">{t.contactHeading}</h1>
        <p className="section-subtitle">{t.contactSubtitle}</p>
      </div>

      <div className="contact-grid">
        {/* Direct Channels Card */}
        <div className="glass-card contact-info-card">
          <div>
            <h3>{t.directChannels}</h3>
            <p>{t.contactSub}</p>

            <div className="contact-channels-list">
              {/* Official Domain Email ONLY (Personal Gmail deleted as requested) */}
              <div className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">
                    <TechIcon name="email" size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">{t.contactOfficialEmail}</span>
                    <a href="mailto:contact@peakbrosmao.me" className="channel-value">
                      contact@peakbrosmao.me
                    </a>
                  </div>
                </div>
                <button
                  className="copy-mini-btn"
                  onClick={() => onCopy('contact@peakbrosmao.me')}
                >
                  <Copy size={13} />
                  <span>{t.copyBtn}</span>
                </button>
              </div>



              {/* Telegram Username with official Telegram icon */}
              <div className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">
                    <TechIcon name="telegram" size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">{t.channelTelegram}</span>
                    <a
                      href="https://t.me/peak_brosmao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value"
                    >
                      t.me/peak_brosmao
                    </a>
                  </div>
                </div>
                <button
                  className="copy-mini-btn"
                  onClick={() => onCopy('https://t.me/peak_brosmao')}
                >
                  <Copy size={13} />
                  <span>{t.copyBtn}</span>
                </button>
              </div>

              {/* Facebook Profile with official Facebook logo */}
              <div className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">
                    <TechIcon name="facebook" size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">{t.channelFacebook}</span>
                    <a
                      href="https://www.facebook.com/peakbrosmao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value"
                    >
                      facebook.com/peakbrosmao
                    </a>
                  </div>
                </div>
                <button
                  className="copy-mini-btn"
                  onClick={() => onCopy('https://www.facebook.com/peakbrosmao')}
                >
                  <Copy size={13} />
                  <span>{t.copyBtn}</span>
                </button>
              </div>

              {/* X (Twitter) with official X logo */}
              <div className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">
                    <TechIcon name="x" size={16} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">{t.channelX}</span>
                    <a
                      href="https://x.com/peak_brosmao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value"
                    >
                      x.com/peak_brosmao
                    </a>
                  </div>
                </div>
                <button
                  className="copy-mini-btn"
                  onClick={() => onCopy('https://x.com/peak_brosmao')}
                >
                  <Copy size={13} />
                  <span>{t.copyBtn}</span>
                </button>
              </div>

              {/* YouTube Channel with official YouTube logo */}
              <div className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">
                    <TechIcon name="youtube" size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">{t.channelYoutube}</span>
                    <a
                      href="https://www.youtube.com/@peak_brosmao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value"
                    >
                      youtube.com/@peak_brosmao
                    </a>
                  </div>
                </div>
                <button
                  className="copy-mini-btn"
                  onClick={() => onCopy('https://www.youtube.com/@peak_brosmao')}
                >
                  <Copy size={13} />
                  <span>{t.copyBtn}</span>
                </button>
              </div>

              {/* LinkedIn Profile with official LinkedIn logo */}
              <div className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">
                    <TechIcon name="linkedin" size={17} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">{t.channelLinkedin}</span>
                    <a
                      href="https://www.linkedin.com/in/peak-brosmao-2a5304389/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-value"
                    >
                      linkedin.com/in/peak-brosmao
                    </a>
                  </div>
                </div>
                <button
                  className="copy-mini-btn"
                  onClick={() =>
                    onCopy('https://www.linkedin.com/in/peak-brosmao-2a5304389/')
                  }
                >
                  <Copy size={13} />
                  <span>{t.copyBtn}</span>
                </button>
              </div>

              {/* Location */}
              <div className="contact-channel-item">
                <div className="channel-icon-label">
                  <div className="channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-title">{t.contactLocation}</span>
                    <span className="channel-value">{t.contactLocationVal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="glass-card contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="formName">
                  {t.formNamePlaceholder}
                </label>
                <input
                  type="text"
                  id="formName"
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
                  type="email"
                  id="formEmail"
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
                type="text"
                id="formSubject"
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
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Send size={18} />
              <span>{t.formSubmitBtn}</span>
            </button>

            {submitted && (
              <div className="form-alert-success">
                <Check size={18} color="#10b981" />
                <span>{t.formSuccessMsg}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
