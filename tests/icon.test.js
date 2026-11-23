import { expect, it } from 'vitest';
import { iconNames } from '../src/components/shared/Icon.jsx';

// The names on the Icons page of mvp-design-library (page 147:163), read on November 20, 2026, with
// home and school added on November 23, 2026 (T75, T91).
const libraryNames = [
  'add', 'add-circle', 'attach', 'back', 'calendar-mark', 'camera', 'check', 'check-circle', 'close', 'coach', 'copy',
  'edit', 'file', 'game-plan', 'give-to-coach', 'history', 'location', 'more', 'phase-afternoon', 'phase-morning',
  'phase-tonight', 'phone', 'search', 'settings', 'team', 'today', 'voice', 'kids-heights', 'reminder', 'directions',
  'update-calendar', 'external-link', 'send-to-coach', 'mark-conflict', 'mark-nobody-yet', 'message', 'chevron-right',
  'mark-changed', 'thumbs-up', 'thumbs-down', 'hourglass', 'clock', 'home', 'school',
];

it('draws every icon on the library Icons page, by its library name and no other', () => {
  expect([...iconNames].sort()).toEqual([...libraryNames].sort());
});
