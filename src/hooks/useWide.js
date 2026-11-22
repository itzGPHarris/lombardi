import { useSyncExternalStore } from 'react';

// True from the tablet breakpoint up, where the game plan opens into seven columns (spec §2 and §19).
// CSS media queries cannot read a custom property, so the width is read from the breakpoint token.
function query() {
  const width = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-tablet').trim() || '768px';
  return window.matchMedia(`(min-width: ${width})`);
}

function subscribe(callback) {
  const media = query();
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

export default function useWide() {
  return useSyncExternalStore(subscribe, () => query().matches, () => false);
}
