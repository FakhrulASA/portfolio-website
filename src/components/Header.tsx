import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);
  const [light, setLight] = useState(false);

  /* Apply theme on mount — default is dark unless user previously chose light */
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isLight = saved === 'light';
    setLight(isLight);
    document.body.classList.toggle('light', isLight);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.body.classList.toggle('light', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? Math.round((window.scrollY / docH) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const links = [
    { href: '#home', id: 'home', label: 'Home' },
    { href: '#about', id: 'about', label: 'About' },
    { href: '#projects', id: 'projects', label: 'Projects' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />
      <div className="nav-container">
        <a href="#home" className="nav-brand">FA</a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ul className="nav-links">
            {links.map(({ href, id, label }) => (
              <li key={id}>
                <a
                  href={href}
                  className={`nav-link${activeSection === id ? ' active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
            title={light ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {light ? (
              /* Moon icon — click to go dark */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              /* Sun icon — click to go light */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;