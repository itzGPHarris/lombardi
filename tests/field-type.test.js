// Typed text is never smaller than 16 px (AGENTS.md rule 17, spec §2 "Building the types", issue C88).
// iOS Safari zooms the page when a field under 16 px takes focus and leaves it zoomed, so every input
// and text area in src must set its text in a style that resolves to 16 px or larger. The test reads
// each field's class from its CSS module, follows composes and the type tokens in src/tokens.css, and
// fails on any field it can't resolve as well as on any that resolves too small.
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '..');
const src = join(root, 'src');
const MIN_PX = 16;
// Inputs that take no typed text, so Safari never zooms on them.
const NOT_TYPED = new Set(['checkbox', 'radio', 'hidden', 'range', 'color', 'file', 'button', 'submit', 'reset', 'image']);

const tokens = Object.fromEntries(
  [...readFileSync(join(src, 'tokens.css'), 'utf8').matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((match) => [match[1], match[2].trim()]),
);

function jsxFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return jsxFiles(path);
    return entry.name.endsWith('.jsx') ? [path] : [];
  });
}

// The opening tag of every <input> and <textarea>, read to its closing > with braces balanced, so an
// arrow function in an attribute doesn't end the tag early.
function fieldTags(source) {
  const tags = [];
  for (const match of source.matchAll(/<(input|textarea)\b/g)) {
    let depth = 0;
    let quote = null;
    let index = match.index + match[0].length;
    for (; index < source.length; index += 1) {
      const char = source[index];
      if (quote) { if (char === quote) quote = null; continue; }
      if (char === '"' || char === "'" || char === '`') quote = char;
      else if (char === '{') depth += 1;
      else if (char === '}') depth -= 1;
      else if (char === '>' && depth === 0) break;
    }
    const tag = source.slice(match.index, index + 1);
    tags.push({ element: match[1], tag, line: source.slice(0, match.index).split('\n').length });
  }
  return tags;
}

// The declarations of the rules whose whole selector is .name, following composes within the module.
function declarations(css, name, seen = new Set()) {
  if (seen.has(name)) return [];
  seen.add(name);
  const found = [];
  for (const rule of css.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
    const selectors = rule[1].split(',').map((selector) => selector.trim());
    if (!selectors.includes(`.${name}`)) continue;
    for (const declaration of rule[2].matchAll(/([\w-]+)\s*:\s*([^;]+)/g)) {
      const [, property, value] = declaration;
      if (property === 'composes') {
        for (const other of value.trim().split(/\s+/)) found.push(...declarations(css, other, seen));
      } else found.push({ property, value: value.trim() });
    }
  }
  return found;
}

function resolveVar(value, depth = 0) {
  if (depth > 10) return value;
  return value.replace(/var\((--[\w-]+)\)/g, (_, name) => {
    if (!(name in tokens)) throw new Error(`${name} is not in src/tokens.css`);
    return resolveVar(tokens[name], depth + 1);
  });
}

// The size in px a font or font-size declaration resolves to, or null when it can't be resolved.
export function fontSizePx({ property, value }) {
  const resolved = resolveVar(value);
  if (property === 'font-size') {
    const px = resolved.match(/^([\d.]+)px$/);
    return px ? Number(px[1]) : null;
  }
  // The font shorthand: the size is the length just before the slash, or the last length before the family.
  const size = resolved.match(/([\d.]+)px\s*\//) ?? resolved.match(/([\d.]+)px\s+[^\d]/);
  return size ? Number(size[1]) : null;
}

function typedFields() {
  return jsxFiles(src).flatMap((file) => {
    const source = readFileSync(file, 'utf8');
    const where = relative(root, file);
    return fieldTags(source)
      .filter(({ element, tag }) => element === 'textarea' || !NOT_TYPED.has(tag.match(/\btype="([^"]+)"/)?.[1]))
      .map((field) => {
        const name = field.tag.match(/className=\{styles\.(\w+)\}/)?.[1];
        const sheet = source.match(/import styles from '([^']+\.module\.css)'/)?.[1];
        return { ...field, where: `${where}:${field.line}`, name, cssFile: sheet && resolve(dirname(file), sheet) };
      });
  });
}

describe('typed text is 16 px or larger (AGENTS.md rule 17, issue C88)', () => {
  const fields = typedFields();

  it('finds the fields, including the capture bar and the shared TextInput', () => {
    const where = fields.map((field) => field.where).join('\n');
    expect(where).toMatch(/src\/components\/Coach\/CaptureBar\.jsx/);
    expect(where).toMatch(/src\/components\/shared\/TextInput\.jsx/);
    expect(fields.length).toBeGreaterThanOrEqual(10);
  });

  it.each(fields.map((field) => [field.where, field]))('%s sets its text at 16 px or larger', (_, field) => {
    expect(field.name, `${field.where} has no className={styles.…} to check`).toBeTruthy();
    expect(field.cssFile, `${field.where} imports no CSS module`).toBeTruthy();
    const css = readFileSync(field.cssFile, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    const fonts = declarations(css, field.name).filter(({ property }) => property === 'font' || property === 'font-size');
    expect(fonts.length, `.${field.name} in ${relative(root, field.cssFile)} sets no font, so the browser's default (under 16 px) applies`).toBeGreaterThan(0);
    for (const font of fonts) {
      const px = fontSizePx(font);
      expect(px, `.${field.name}: ${font.property}: ${font.value} does not resolve to a px size`).not.toBeNull();
      expect(px, `.${field.name}: ${font.property}: ${font.value} resolves to ${px}px`).toBeGreaterThanOrEqual(MIN_PX);
    }
  });

  it('would catch a field set in Body, the style C88 found', () => {
    expect(fontSizePx({ property: 'font', value: 'var(--text-body)' })).toBe(15);
    expect(fontSizePx({ property: 'font', value: 'var(--text-body-large)' })).toBe(17);
  });
});
