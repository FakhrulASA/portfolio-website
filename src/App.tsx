import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <section id="home" style={{ scrollMarginTop: '80px' }}><Home /></section>
      <section id="about" style={{ scrollMarginTop: '80px' }}><About /></section>
      <section id="projects" style={{ scrollMarginTop: '80px' }}><Projects /></section>
      <section id="contact" style={{ scrollMarginTop: '80px' }}><Contact /></section>
      <footer className="footer">
        <p>
          © 2026 Fakhrul Alam ·{' '}
          <a href="https://github.com/FakhrulASA" target="_blank" rel="noreferrer">GitHub</a>
          {' · '}
          <a href="https://linkedin.com/in/siddiqei" target="_blank" rel="noreferrer">LinkedIn</a>
          {' · '}
          <a href="https://fakhrulasa.blog" target="_blank" rel="noreferrer">Blog</a>
        </p>
      </footer>
    </>
  );
};

export default App;