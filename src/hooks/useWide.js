import { useSyncExternalStore } from 'react';

// True from the desktop breakpoint up, where the game plan opens into seven columns. Between the
// tablet and desktop widths it keeps its agenda in the centered column (spec §2, §8 and §19, issue G52).
// CSS media queries cannot read a custom property, so the width is read from the breakpoint token.
function query() {
  const width = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-desktop').trim() || '1280px';
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
