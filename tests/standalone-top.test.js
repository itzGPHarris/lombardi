// The room above the first row (issues C81 and C89, spec §2). Opened from the Home Screen, the page
// runs under the status bar, so --layout-status is the status bar's inset plus the frames' 8. In the
// browser it keeps the frames' 56. Neither jsdom nor any other DOM library is in the repository, and
// none of them evaluates env() or display-mode, so the test reads the CSS as text: it checks the
// standalone rule derives the offset from env(safe-area-inset-top), the browser value is the token's
// 56, and every fixed top row takes its top from --layout-status rather than a value of its own.
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const src = join(resolve(import.meta.dirname, '..'), 'src');
const read = (path) => readFileSync(join(src, path), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

const layout = read('styles/layout.css');
const tokens = read('tokens.css');
const shells = read('components/Layout/Layout.module.css');
const sheet = read('components/shared/Sheet.module.css');

// The declarations of one rule, found by its selector at the top level of a CSS file.
function rule(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = css.match(new RegExp(`(?:^|})\\s*${escaped}\\s*{([^}]*)}`));
  return match ? match[1] : null;
}

describe('the room above the first row', () => {
  it('keeps the frames\' 56 in the browser', () => {
    expect(tokens).toMatch(/--layout-status:\s*var\(--space-56\);/);
    expect(tokens).toMatch(/--space-56:\s*56px;/);
  });

  it('is the status bar\'s inset plus the frames\' 8 when opened from the Home Screen', () => {
    expect(layout).toMatch(/--safe-top:\s*env\(safe-area-inset-top,\s*0px\);/);
    const standalone = layout.match(/@media\s*\(display-mode:\s*standalone\)\s*{([\s\S]*?)}\s*}/);
    expect(standalone, 'a display-mode: standalone rule in src/styles/layout.css').not.toBeNull();
    const value = standalone[1].match(/--layout-status:\s*([^;]+);/)?.[1].trim();
    expect(value).toBe('calc(var(--safe-top) + var(--space-8))');
  });

  it('places every fixed top row from --layout-status', () => {
    for (const selector of ['.titleBar', '.fixedHeader', '.topBar', '.todayHeader']) {
      const declarations = rule(shells, selector);
      expect(declarations, `${selector} in Layout.module.css`).not.toBeNull();
      expect(declarations, selector).toMatch(/padding:\s*var\(--layout-status\)\s/);
      expect(declarations, selector).toMatch(/top:\s*0;/);
    }
    expect(rule(shells, '.topBar:empty, .topBar[data-empty]')).toMatch(/min-height:\s*var\(--layout-status\)/);
  });

  it('leaves the tall sheet the same room above it as the first row', () => {
    expect(rule(sheet, '.sheet')).toMatch(/max-height:\s*calc\(100dvh - var\(--layout-status\)\)/);
    expect(rule(sheet, ".sheet[data-height='tall']")).toMatch(/height:\s*calc\(100dvh - var\(--layout-status\)\)/);
  });
});
