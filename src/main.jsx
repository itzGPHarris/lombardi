// Entry point for the alpha. Stage 1 of the alpha build replaces the empty root below with the shell
// (docs/backlog.md, "Stage 1: Scaffold"). The October build of C-03 is in archive/ and is never copied from.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';

createRoot(document.getElementById('root')).render(<StrictMode />);
