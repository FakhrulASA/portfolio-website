import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: '📱',
      title: 'MyGP',
      subtitle: 'MIAKI · Grameenphone',
      desc: 'The largest self-service telecom app in Bangladesh with 20M+ MAU. Led architecture, performance (150% faster launch), and payment integration including bKash Gateway.',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'bKash SDK', 'SSL Pinning'],
    },
    {
      icon: '💳',
      title: 'upay',
      subtitle: 'UCB Fintech',
      desc: 'Secure digital wallet serving 10M users with P2P & Merchant capabilities. Implemented ML Kit e-KYC, QR Payments, Tokenization, and achieved 99.8% crash-free rate.',
      tags: ['Android', 'Kotlin', 'ML Kit', 'QR Payments', 'Clean Architecture', 'LeakCanary'],
    },
    {
      icon: '🇧🇩',
      title: 'Ami Probashi',
      subtitle: 'Bangla Trac Group',
      desc: 'Official government platform for migrant workers scaling to 5M+ users. Built NID scanning, TensorFlow OCR, modular architecture, and secure government API integrations.',
      tags: ['Android', 'Java/Kotlin', 'TensorFlow', 'NID Scanning', 'Payment Gateways'],
    },
    {
      icon: '📰',
      title: 'Neuz',
      subtitle: 'Open Source · GitHub',
      desc: 'Native Android global news aggregator with location-based filtering algorithms to deliver country-specific news instantly to users worldwide.',
      tags: ['Android', 'Kotlin', 'News API', 'Location Filtering', 'MVVM'],
    },
    {
      icon: '📦',
      title: 'Scoper',
      subtitle: 'Open Source Library · GitHub',
      desc: 'Published Android library simplifying scoped storage access on Android 11+. Provides clean APIs for file management following Android storage best practices.',
      tags: ['Android Library', 'Kotlin', 'Scoped Storage', 'Android 11+', 'Open Source'],
    },
    {
      icon: '🏠',
      title: 'Property Studio',
      subtitle: 'PropTech · Play Store',
      desc: 'Cross-platform Flutter property management solution backed by Spring Boot/PostgreSQL with integrated IoT modules for smart home automation.',
      tags: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'IoT'],
    },
    {
      icon: '🎉',
      title: 'EventaBd',
      subtitle: 'Event Management · Live',
      desc: 'Multi-platform event management system using Jetpack Compose with end-to-end encryption for user data privacy and real-time updates.',
      tags: ['Android', 'Jetpack Compose', 'Kotlin', 'E2E Encryption'],
    },
    {
      icon: '🎥',
      title: 'The Gen',
      subtitle: 'Social Streaming Platform',
      desc: 'High-performance video streaming and social media application with optimized data protocols for low-latency media playback and real-time user interactions.',
      tags: ['Android', 'Kotlin', 'ExoPlayer', 'WebRTC', 'WebSocket'],
    },
  ];

  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Mobile applications and libraries I've built — from fintech platforms
            serving millions of users to open-source tools for the developer community.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-icon">{p.icon}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-subtitle">{p.subtitle}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;