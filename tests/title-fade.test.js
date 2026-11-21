import { expect, it } from 'vitest';
import { fadeProgress } from '../src/hooks/useTitleFade.js';

// Spec §2: the fade follows how far the large title has passed under the title bar.
it('shows the large title at rest and the small title once the large one is under the bar', () => {
  expect(fadeProgress(100, 108, 32)).toBe(0);
  expect(fadeProgress(100, 84, 32)).toBe(0.5);
  expect(fadeProgress(100, 60, 32)).toBe(1);
  expect(fadeProgress(100, 0, 0)).toBe(0);
});
