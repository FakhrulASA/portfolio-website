import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { number: '20M+', label: 'Users Reached' },
    { number: '5+', label: 'Years Experience' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '40%', label: 'Bug Reduction' },
  ];

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-avatar">FA</div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-name">Fakhrul Alam</h1>
          <p className="hero-title">
            Senior Software Engineer —{' '}
            <span>Android &amp; Flutter Specialist</span>
          </p>
          <p className="hero-desc">
            5+ years crafting high-performance mobile experiences for Digital Banking
            and Telecom sectors. Architecting scalable solutions for 20M+ users with
            deep expertise in Clean Architecture, Fintech Security, and TDD.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Projects →</Link>
            <Link to="/contact" className="btn-secondary">Get In Touch</Link>
          </div>
          <div className="hero-stats">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;