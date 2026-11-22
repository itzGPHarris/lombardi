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
  // The phone frame loads the app in an iframe at the moment it was showing (spec §15). Otherwise
  // the prototype opens on the first household's first moment, C-00 at the splash (issue X3).
  const embedded = params.get('embedded') === '1';
  const start = embedded ? { householdId: params.get('household') ?? undefined, momentId: params.get('moment') ?? undefined } : {};
  // Development only, never in a build: open a moment on a tab with some of its scripted steps
  // played and the demo clock at a time inside it, such as /?moment=C-03b&steps=2&at=14:05, so every
  // Today state can be compared with its frame. Presenters play steps from Stage 6. &notifications=
  // stages the reminder sheet's notifications-off states.
  if (import.meta.env.DEV && params.has('moment') && !embedded) {
    Object.assign(start, {
      momentId: params.get('moment'),
      played: Number(params.get('steps') ?? 0),
      at: params.get('at') ?? undefined,
      tab: params.get('tab') ?? 'today',
      // The staged notification states on the reminder sheet: off-never-asked or off-declined.
      notifications: params.get('notifications') ?? undefined,
    });
  }
  root.render(<StrictMode><App start={start} embedded={embedded} /></StrictMode>);
}
