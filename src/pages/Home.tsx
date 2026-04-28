import React, { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatItem: React.FC<{ number: string; label: string; triggered: boolean }> = ({ number, label, triggered }) => {
  const numericMatch = number.match(/^(\d+)/);
  const numericVal = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = number.replace(/^\d+/, '');
  const counted = useCountUp(numericVal, 1600, triggered);
  return (
    <div className="stat-item">
      <div className="stat-number">{triggered ? `${counted}${suffix}` : number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Home: React.FC = () => {
  const [statsTriggered, setStatsTriggered] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsTriggered(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '100M+', label: 'Users Reached' },
    { number: '6+', label: 'Years Experience' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '40%', label: 'Bug Reduction' },
  ];

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </div>
            <h1 className="hero-name">Fakhrul Alam</h1>
            <p className="hero-title">
              Senior Software Engineer —{' '}
              <span>Lead Full Stack Mobile Developer | AI-First Workflow & Integration</span>
            </p>
            <p className="hero-desc">
              6+ years crafting high-performance mobile experiences for Digital Banking
              and Telecom sectors. Architecting scalable solutions for 100M+ users with
              deep expertise in Clean Architecture, Fintech Security, and TDD.
            </p>
            <div className="hero-socials">
              <a href="https://linkedin.com/in/siddiqei" target="_blank" rel="noreferrer" className="hero-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/FakhrulASA" target="_blank" rel="noreferrer" className="hero-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49C19.13 20.63 22 16.79 22 12.26 22 6.58 17.52 2 12 2z"/>
                </svg>
                GitHub
              </a>
              <a href="https://fakhrulasa.hashnode.dev" target="_blank" rel="noreferrer" className="hero-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
                </svg>
                Blog
              </a>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
            <div className="hero-stats" ref={statsRef}>
              {stats.map((s) => (
                <StatItem key={s.label} number={s.number} label={s.label} triggered={statsTriggered} />
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-photo-wrapper">
              <span className="hero-photo-ring2" />
              <img src="/profile.png" alt="Fakhrul Alam" className="hero-avatar" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;