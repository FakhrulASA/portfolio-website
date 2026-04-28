import React, { useState } from 'react';

const FORMBOLD_ID = process.env.REACT_APP_FORMBOLD_FORM_ID;

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) errors.email = 'Email is required.';
  else if (!EMAIL_RE.test(form.email)) errors.email = 'Enter a valid email address.';
  if (!form.subject.trim()) errors.subject = 'Subject is required.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const contacts = [
    { icon: '✉️', label: 'Email', value: 'fakhrulasa@gmail.com', href: 'mailto:fakhrulasa@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/siddiqei', href: 'https://linkedin.com/in/siddiqei' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/FakhrulASA', href: 'https://github.com/FakhrulASA' },
    { icon: '✍️', label: 'Blog', value: 'fakhrulasa.blog', href: 'https://fakhrulasa.hashnode.dev' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field error as the user types
    const errs: any = fieldErrors;
    if (errs[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    if (!FORMBOLD_ID) {
      setStatus('error');
      setErrorMsg('Form is not configured yet. Please check back soon.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`https://formbold.com/s/${FORMBOLD_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`Server returned ${res.status}`);
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <div className="page">
      <section className="section">
        <div className="section-header reveal">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">
            Open to exciting opportunities, collaborations, or just a chat about mobile engineering.
            Based in Dhaka, Bangladesh — available globally.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-list">
            {contacts.map((c, i) => (
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`contact-info-item reveal-left delay-${i + 1}`}
                key={c.label}
              >
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-info-label">{c.label}</div>
                  <div className="contact-info-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {status === 'success' ? (
            <div className="contact-success reveal-right visible">
              <div className="contact-success-icon">✓</div>
              <h3 className="contact-success-title">Message Sent!</h3>
              <p className="contact-success-desc">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button className="btn-submit" onClick={() => setStatus('idle')}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form reveal-right" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className={`form-input${fieldErrors.name ? ' input-error' : ''}`}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className={`form-input${fieldErrors.email ? ' input-error' : ''}`}
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className={`form-input${fieldErrors.subject ? ' input-error' : ''}`}
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
                {fieldErrors.subject && <span className="field-error">{fieldErrors.subject}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-textarea${fieldErrors.message ? ' input-error' : ''}`}
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                />
                {fieldErrors.message && <span className="field-error">{fieldErrors.message}</span>}
              </div>
              {status === 'error' && (
                <p className="form-error">{errorMsg}</p>
              )}
              <button type="submit" className="btn-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;