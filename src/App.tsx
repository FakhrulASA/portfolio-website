import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
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
    </Router>
  );
};

export default App;