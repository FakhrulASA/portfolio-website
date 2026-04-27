import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Prevent browser from restoring last scroll position on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
// Always start at the top, clearing any leftover hash
window.scrollTo(0, 0);
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);