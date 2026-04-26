import React from 'react';

const Contact: React.FC = () => {
  const contacts = [
    { icon: '✉️', label: 'Email', value: 'fakhrulasa@gmail.com', href: 'mailto:fakhrulasa@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+880 130 803 5653', href: 'tel:+8801308035653' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/siddiqei', href: 'https://linkedin.com/in/siddiqei' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/FakhrulASA', href: 'https://github.com/FakhrulASA' },
    { icon: '✍️', label: 'Blog', value: 'fakhrulasa.blog', href: 'https://fakhrulasa.blog' },
  ];

  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">
            Open to exciting opportunities, collaborations, or just a chat about mobile engineering.
            Based in Dhaka, Bangladesh — available globally.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-list">
            {contacts.map((c) => (
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                className="contact-info-item"
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
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input className="form-input" type="text" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button type="submit" className="btn-submit">Send Message →</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;