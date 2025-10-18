import { useMemo, useState } from 'react';
import SectionHeading from '../components/common/SectionHeading.jsx';
import hero from '../data/hero.js';
import contact from '../data/contact.js';
import socialLinks from '../data/social.js';
import { useLocale } from '../context/LocaleContext.jsx';

const icons = {
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 7.5 8-5.5H4l8 5.5Zm0 2.3L4 8v10h16V8l-8 5.8Z"
      />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 2h2.3a1 1 0 0 1 1 .86l.6 4a1 1 0 0 1-.52 1l-1.7.87a11.05 11.05 0 0 0 5.22 5.22l.87-1.7a1 1 0 0 1 1-.52l4 .6a1 1 0 0 1 .86 1v2.28a1 1 0 0 1-.93 1 16 16 0 0 1-14.95-15A1 1 0 0 1 6.6 2Z"
      />
    </svg>
  )
};

const initialForm = { name: '', phone: '', email: '', message: '' };

const Contact = () => {
  const { locale } = useLocale();
  const heroData = hero[locale];
  const contactData = contact[locale];
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const apiBaseUrl = useMemo(() => import.meta.env.VITE_API_BASE_URL || '', []);

  const infoCards = [
    {
      type: 'email',
      label: contactData.labels.email,
      value: heroData.email,
      href: `mailto:${heroData.email}`
    },
    {
      type: 'phone',
      label: contactData.labels.phone,
      value: heroData.phone,
      href: `tel:${heroData.phone.replace(/[^+\d]/g, '')}`
    }
  ];

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: contactData.form.validation.required });
      return false;
    }

    const emailPattern =
      // eslint-disable-next-line no-control-regex
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(formData.email)) {
      setStatus({ type: 'error', message: contactData.form.validation.email });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setStatus({ type: 'pending', message: '' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || 'Request failed');
      }

      setStatus({ type: 'success', message: contactData.form.success });
      setFormData(initialForm);
    } catch (error) {
      console.error('[Contact] send-message error', error);
      setStatus({ type: 'error', message: contactData.form.error });
    } finally {
      setSubmitting(false);
    }
  };

  const statusClass = status.type ? `contact-form__status contact-form__status--${status.type}` : 'contact-form__status';

  return (
    <section id="contact" className="section section--contact">
      <div className="shell section__inner contact-shell">
        <div className="contact-layout">
          <div className="contact-info">
            <SectionHeading {...contactData.heading} />
            <p className="contact-intro">{contactData.intro}</p>

            <div className="contact-info__cards">
              {infoCards.map((card) => (
                <a key={card.type} className="contact-card" href={card.href}>
                  <span className={`contact-card__icon contact-card__icon--${card.type}`}>{icons[card.type]}</span>
                  <span className="contact-card__text">
                    <span className="contact-card__label">{card.label}</span>
                    <span className="contact-card__value">{card.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-follow">
              <span className="contact-follow__label">{contactData.labels.follow}</span>
              <div className="contact-follow__links">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 className="contact-form__title">{contactData.form.title}</h3>
            <p className="contact-form__description">{contactData.form.description}</p>

            <div className="contact-form__grid">
              <label className="input-field">
                <span className="sr-only">{contactData.form.placeholders.name}</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder={contactData.form.placeholders.name}
                  value={formData.name}
                  onChange={handleChange('name')}
                  disabled={submitting}
                  required
                />
              </label>
              <label className="input-field">
                <span className="sr-only">{contactData.form.placeholders.email}</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={contactData.form.placeholders.email}
                  value={formData.email}
                  onChange={handleChange('email')}
                  disabled={submitting}
                  required
                />
              </label>
              <label className="input-field">
                <span className="sr-only">{contactData.form.placeholders.phone}</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder={contactData.form.placeholders.phone}
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  disabled={submitting}
                  required
                />
              </label>
              <label className="input-field input-field--full">
                <span className="sr-only">{contactData.form.placeholders.message}</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={contactData.form.placeholders.message}
                  value={formData.message}
                  onChange={handleChange('message')}
                  disabled={submitting}
                  required
                />
              </label>
            </div>

            <div className="contact-form__footer">
              {status.message ? <p className={statusClass}>{status.message}</p> : <span className={statusClass} />}
              <button className="button button--primary contact-form__submit" type="submit" disabled={submitting}>
                {submitting ? contactData.form.sending : contactData.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
