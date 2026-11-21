// Entry point for the alpha.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/fonts.js';
import './tokens.css';
import './styles/layout.css';
import './styles/global.css';
import App from './App.jsx';

const params = new URLSearchParams(window.location.search);
const root = createRoot(document.getElementById('root'));

// The shell gallery exists only in development, for comparing shells with their reference boards.
if (import.meta.env.DEV && params.has('shell')) {
  const { default: ShellGallery } = await import('./demo/ShellGallery.jsx');
  root.render(<StrictMode><ShellGallery type={params.get('shell')} scrolled={params.has('scrolled')} parentInitial="C" /></StrictMode>);
} else {
  root.render(<StrictMode><App /></StrictMode>);
}
