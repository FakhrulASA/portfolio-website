import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);

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
        <nav>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;