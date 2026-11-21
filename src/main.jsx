// Entry point for the alpha. The shell arrives with Stage 1's second line (docs/backlog.md).
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/fonts.js';
import './tokens.css';
import './styles/layout.css';
import './styles/global.css';

createRoot(document.getElementById('root')).render(<StrictMode />);
