import React from 'react';

interface Project {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  playStore?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      icon: '📱',
      title: 'MyGP',
      subtitle: 'MIAKI · Grameenphone',
      desc: 'The largest self-service telecom app in Bangladesh with 20M+ MAU. Led architecture, performance (150% faster launch), and payment integration including bKash Gateway.',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'MVVM', 'bKash SDK', 'SSL Pinning'],
      playStore: 'https://play.google.com/store/apps/details?id=com.portonics.mygp&hl=en',
    },
    {
      icon: '💳',
      title: 'upay',
      subtitle: 'UCB Fintech',
      desc: 'Secure digital wallet serving 10M users with P2P & Merchant capabilities. Implemented ML Kit e-KYC, QR Payments, Tokenization, and achieved 99.8% crash-free rate.',
      tags: ['Android', 'Kotlin', 'ML Kit', 'QR Payments', 'Clean Architecture', 'LeakCanary'],
      playStore: 'https://play.google.com/store/apps/details?id=bd.com.upay.customer&hl=bn',
    },
    {
      icon: '🇧🇩',
      title: 'Ami Probashi',
      subtitle: 'Bangla Trac Group',
      desc: 'Official government platform for migrant workers scaling to 5M+ users. Built NID scanning, TensorFlow OCR, modular architecture, and secure government API integrations.',
      tags: ['Android', 'Java/Kotlin', 'TensorFlow', 'NID Scanning', 'Payment Gateways'],
      playStore: 'https://play.google.com/store/apps/details?id=com.thane.amiprobashi&hl=bn',
    },
    {
      icon: '📰',
      title: 'Neuz',
      subtitle: 'Open Source · GitHub',
      desc: 'Native Android global news aggregator with location-based filtering algorithms to deliver country-specific news instantly to users worldwide.',
      tags: ['Android', 'Kotlin', 'News API', 'Location Filtering', 'MVVM'],
      github: 'https://github.com/FakhrulASA/Neuz',
    },
    {
      icon: '📦',
      title: 'Scoper',
      subtitle: 'Open Source Library · GitHub',
      desc: 'Published Android library simplifying scoped storage access on Android 11+. Provides clean APIs for file management following Android storage best practices.',
      tags: ['Android Library', 'Kotlin', 'Scoped Storage', 'Android 11+', 'Open Source'],
      github: 'https://github.com/FakhrulASA/Scoper',
    },
    {
      icon: '🏠',       
      title: 'Property Studio',
      subtitle: 'PropTech · Play Store',
      desc: 'Cross-platform Flutter property management solution backed by Spring Boot/PostgreSQL with integrated IoT modules for smart home automation.',
      tags: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'IoT'],
      playStore: 'https://play.google.com/store/apps/details?id=com.zuhabul.propertystudio',
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
              {(p.playStore || p.github) && (
                <div className="project-links">
                  {p.playStore && (
                    <a
                      href={p.playStore}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="project-link-btn project-link-play"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5c.5.28.5 1 0 1.28L4.5 21c-.5.33-1.5.33-1.5-.5z"/>
                      </svg>
                      Play Store
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="project-link-btn project-link-gh"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49C19.13 20.63 22 16.79 22 12.26 22 6.58 17.52 2 12 2z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;