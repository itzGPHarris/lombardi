// D3: every displayed string in the seed, the articles and the copy appears word for word in
// docs/story-fixtures.md (AGENTS.md rule 1). Values the demo calendar works out are filled in
// before the comparison, so a date is checked as it would appear on screen.
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { parseContent } from '../scripts/voicecheck.mjs';
import { days } from '../src/demo/calendar.js';
import { fillDates, tokenPattern } from '../src/demo/dateTokens.js';

const root = join(import.meta.dirname, '..');
const read = (path) => readFileSync(join(root, path), 'utf8');

// The source text: sections 1 to 4 and Appendix A. Appendices B and C are left out, because the
// change log quotes retired words, such as "village", that must not pass.
const fixturesFile = read('docs/story-fixtures.md');
const source = normalize(fixturesFile.slice(0, fixturesFile.indexOf('\n# Appendix B')));

function normalize(text) {
  return text
    .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/\*\*|`/g, '')
    .replace(/(^|\s)\*(\S)/g, '$1$2').replace(/(\S)\*(?=\s|$|[.,])/g, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/\s*\|\s*/g, '\n')
    .replace(/<br>/g, '\n')
    .replace(/[ \t]+/g, ' ');
}

// Keys whose strings are identifiers, references, enum values or demo times, never shown as they
// stand. A string under one of them must look like a token, so no prose can hide there.
const tokenKeys = new Set([
  'id', 'item', 'children', 'child', 'owner', 'person', 'members', 'place', 'from', 'to', 'school', 'forEvent', 'run', 'source',
  'capture', 'captures', 'article', 'planItem', 'practice', 'driver', 'repeatOf', 'replaces', 'with', 'by', 'author', 'action',
  'actions', 'kind', 'kinds', 'type', 'group', 'grade', 'state', 'provider', 'opensOn', 'day', 'days', 'time', 'at', 'dueAt',
  'leaveAt', 'startTime', 'endTime', 'starts', 'until', 'fixturesVersion', 'demoWeekStart', 'taskKind', 'entry', 'channel',
  'issue', 'part', 'slot', 'original', 'readBack', 'produces', 'reviewCard', 'conversation', 'choices', 'chosen', 'target',
  'departure', 'branch', 'leavesTask', 'reminder', 'greeting', 'letters', 'on', 'off', 'result', 'dependsOn', 'tab', 'leave',
  'reading', 'scope', 'answer', 'posts', 'replies', 'messages', 'laterToday', 'task', 'fromCalendar', 'calendar', 'icon',
  'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'setAt', 'sent', 'received', 'fact', 'goingWith', 'fromCapture',
]);
const token = /^(?:[A-Za-z0-9][A-Za-z0-9:._-]*|\d{2}:\d{2}|\d{4}-\d{2}-\d{2})$/;
// The one key that holds a note for the team rather than a displayed word: what a scripted step
// does, under each moment's steps (Greg's condition 3 on the Stage 2 plan).
const noteKeys = new Set(['change']);

// Template slots (Greg's condition 1 on the Stage 2 plan). Name slots take a name from the seed.
// Calendar slots take a value the demo calendar works out. Value slots take another value from the
// seed that is not free text, listed in the Stage 2 report for Greg to confirm.
const nameSlots = ['child', 'child2', 'children', 'person', 'people', 'place', 'from', 'to', 'group', 'school'];
const calendarSlots = ['time', 'day', 'phase', 'count', 'minutes'];
const valueSlots = ['item', 'letter', 'app', 'grade', 'grade2', 'calendar'];
const slotPattern = /\{([a-z0-9]+)\}/g;

// Fixtures section 4 has no rows for the household switcher yet (issue C74), so the presenter's
// copy is the one file this test does not check.
const exempt = { 'src/copy/demo.js': 'C74' };

function filesIn(directory) {
  return readdirSync(join(root, directory)).filter((name) => !name.startsWith('.')).flatMap((name) => {
    const path = join(directory, name);
    return statSync(join(root, path)).isDirectory() ? filesIn(path) : [path];
  });
}

const demoWeekStart = JSON.parse(read('src/data/households/charlotte.json')).meta.demoWeekStart;
// Every day of the three weeks the demo reads from, so a {rel:…} token is tried from each.
const readDays = [-1, 0, 1].flatMap((week) => days.map((day) => ({ week, day, time: null })));

function found(text) {
  return source.includes(normalize(text).trim());
}

function check(text) {
  if (text.match(tokenPattern)) {
    const fills = text.includes('{rel:')
      ? [...new Set(readDays.flatMap((now) => {
        const filled = fillDates(text, { demoWeekStart, now });
        return [filled, filled.replace(/^\w/, (letter) => letter.toUpperCase())];
      }))]
      : [fillDates(text, { demoWeekStart })];
    return { ok: fills.some((fill) => (fill.match(slotPattern) ? withoutSlots(fill).every(found) : found(fill))), kind: 'date' };
  }
  const slots = [...text.matchAll(slotPattern)].map((match) => match[1]);
  if (slots.length) {
    const unknown = slots.filter((slot) => ![...nameSlots, ...calendarSlots, ...valueSlots].includes(slot));
    if (unknown.length) return { ok: false, kind: 'slot', reason: `unknown slot ${unknown.join(', ')}` };
    return { ok: withoutSlots(text).every(found), kind: 'template' };
  }
  return { ok: found(text), kind: 'exact' };
}

function withoutSlots(text) {
  return text.split(slotPattern).filter((_, index) => index % 2 === 0).map((piece) => piece.trim()).filter((piece) => /[A-Za-z]/.test(piece));
}

function walk(value, path, visit, key = '') {
  if (Array.isArray(value)) value.forEach((entry, index) => walk(entry, `${path}[${index}]`, visit, key));
  else if (value && typeof value === 'object') for (const [childKey, entry] of Object.entries(value)) walk(entry, `${path}.${childKey}`, visit, childKey);
  else if (typeof value === 'string') visit(value, path, key);
}

// Copy files hold interface words under descriptive keys, so only their id and icon fields are
// identifiers.
const copyTokenKeys = new Set(['id', 'icon']);

function inspect(file, value, { checkKeys }) {
  const results = [];
  walk(value, '$', (text, path, key) => {
    if (checkKeys && noteKeys.has(key)) return results.push({ file, path, text, kind: 'note', ok: true });
    if (checkKeys ? tokenKeys.has(key) || /Ids?$/.test(key) : copyTokenKeys.has(key)) {
      return results.push({ file, path, text, kind: 'token', ok: token.test(text), reason: 'prose under a token key' });
    }
    results.push({ file, path, text, ...check(text) });
  });
  return results;
}

const results = [
  ...filesIn('src/data/households').map((file) => inspect(file, JSON.parse(read(file)), { checkKeys: true })),
  ...filesIn('src/data/articles').map((file) => inspect(file, JSON.parse(read(file)), { checkKeys: true })),
  ...filesIn('src/copy').filter((file) => !exempt[relative(root, join(root, file))])
    .map((file) => inspect(file, parseContent(read(file), extname(file)), { checkKeys: false })),
].flat();

describe('copy comes only from the fixtures (D3)', () => {
  it('checks every content folder', () => {
    for (const folder of ['src/data/households', 'src/data/articles', 'src/copy']) {
      expect(results.some((result) => result.file.startsWith(folder)), folder).toBe(true);
    }
  });

  it('finds every displayed string word for word in docs/story-fixtures.md', () => {
    const missing = results.filter((result) => !result.ok && result.kind !== 'token');
    expect(missing.map(({ file, path, text, reason }) => `${file} ${path}: ${reason ?? 'not in the fixtures'}: ${text}`)).toEqual([]);
  });

  it('keeps identifiers and references free of prose', () => {
    const prose = results.filter((result) => result.kind === 'token' && !result.ok);
    expect(prose.map(({ file, path, text }) => `${file} ${path}: ${text}`)).toEqual([]);
  });

  it('fails on words that are not in sections 1 to 4 or Appendix A', () => {
    // Retired words survive only in the change log, which the source text leaves out.
    for (const text of ['Nobody yet', 'Your village', 'MVP Recommends', 'Take Mallory to ballet at Studio Ten Dance']) {
      expect(check(text).ok, text).toBe(false);
    }
    expect(check('Remind me next Monday, {date:1.mon}').ok).toBe(true);
    expect(check('Remind me next Monday, {date:1.tue}').ok).toBe(false);
    expect(check('Leave {from} for {to}').ok).toBe(true);
    expect(check('Leave {free} for {to}').ok).toBe(false);
  });

  it('reports what it checked', () => {
    const count = (kind) => results.filter((result) => result.kind === kind).length;
    console.log(`D3: ${results.length} strings in ${new Set(results.map((result) => result.file)).size} files: `
      + `${count('exact')} exact, ${count('date')} with demo calendar dates, ${count('template')} templates, `
      + `${count('token')} identifiers, ${count('note')} step notes. Not checked: ${Object.entries(exempt).map(([file, issue]) => `${file} (${issue})`).join(', ')}.`);
    expect(results.length).toBeGreaterThan(0);
  });
});
