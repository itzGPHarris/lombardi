import { afterEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkProject, inspectContent, main, parseContent } from '../scripts/voicecheck.mjs';

const temporary = [];
afterEach(async () => {
  vi.restoreAllMocks();
  await Promise.all(temporary.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});
async function project() {
  const root = await mkdtemp(join(tmpdir(), 'mvp-voicecheck-'));
  temporary.push(root);
  return root;
}
async function content(root, path, value) {
  const file = join(root, path);
  await mkdir(join(file, '..'), { recursive: true });
  await writeFile(file, value);
}
const rules = (value, options) => inspectContent(value, options).errors.map((error) => error.rule);

describe('content rules', () => {
  it('accepts demo times, versions, phone numbers and ordinary modal verbs', () => {
    expect(rules({ fixturesVersion: '3.9', zip: '00123', phone: '555-0140', time: { week: -2, day: 'mon', time: '14:15' }, coachCards: [{ text: 'You may ask Mallory to march with Alexis on Monday.' }] })).toEqual([]);
  });
  it.each(['October', 'oct', 'May', 'March', '12 may', 'march 12', '2026-10-08', '10/08/2026', '8.10.2026', '10/08', '2026'])('rejects calendar content: %s', (text) => {
    expect(rules({ text }).length).toBeGreaterThan(0);
  });
  it('checks numeric year fields too', () => expect(rules({ year: 2026 })).toContain('calendar-year'));
  it('finds coach text in full moment snapshots, options and follow-ups', () => {
    const result = inspectContent({ moments: [{ state: { conversation: [{ from: 'Coach', text: 'Okay, choose a slot.', options: [{ title: 'A buffer—then pickup.' }] }], coachCards: [{ text: 'Thursday · Alright, choose a lane.' }] } }] });
    expect(result.errors.map((error) => error.rule)).toEqual(expect.arrayContaining(['coach-opener', 'coach-planner-word', 'em-dash']));
    expect(result.errors.every((error) => error.path.startsWith('$.moments[0].state.'))).toBe(true);
  });
  it('does not impose coach language on parents, request drafts or articles', () => {
    expect(rules({ conversation: [{ from: 'Parent', text: 'Okay, the window is open—leave it.' }], requests: [{ text: 'Alright, leave a buffer.' }] })).toEqual([]);
    expect(rules({ body: 'Okay, leave a buffer.' }, { article: true })).toEqual([]);
  });
  it('rejects em dashes in request drafts and articles', () => {
    expect(rules({ requests: [{ text: 'I can drive—call me.' }] })).toContain('em-dash');
    expect(rules({ body: 'One—two.' }, { article: true })).toContain('em-dash');
  });
  it('checks dates throughout copy, even outside coach speech', () => {
    expect(rules({ parent: { text: 'October 8' }, labels: ['2026'] })).toEqual(expect.arrayContaining(['month-name', 'calendar-year']));
  });
  it('does not treat references as coach speech', () => {
    expect(rules({ coachCards: [{ id: 'buffer', result: 'next-slot', text: 'Mallory leaves on Monday.' }] })).toEqual([]);
  });
});

describe('static modules and project coverage', () => {
  it('parses literal exports without executing code, including escaped violations', () => {
    const data = parseContent('export const coachGreeting = "Okay, a slot\\u2014Monday."; export default {week: -2};', '.js');
    expect(rules(data)).toEqual(expect.arrayContaining(['coach-opener', 'coach-planner-word', 'em-dash']));
  });
  it.each(['export default makeCopy();', 'export default `October ${day}`;', 'import x from "./x.js"; export default x;', 'export default {...other};'])('rejects uncheckable dynamic content: %s', (source) => {
    expect(() => parseContent(source, '.js')).toThrow();
  });
  it('reports invalid and unsupported content instead of silently skipping it', async () => {
    const root = await project();
    await content(root, 'src/data/households/broken.json', '{');
    await content(root, 'src/copy/labels.ts', 'export default "October";');
    const result = await checkProject(root);
    expect(result.errors).toHaveLength(2);
    expect(result.errors.every((error) => error.rule === 'invalid-content')).toBe(true);
  });
  it('scans nested directories and reports file and JSON path', async () => {
    const root = await project();
    await content(root, 'src/data/households/charlotte.json', JSON.stringify({ moments: [{ state: { coachCards: [{ text: 'Okay, a buffer.' }] } }] }));
    await content(root, 'src/data/articles/one.json', '{"body":"Monday—Tuesday"}');
    await content(root, 'src/copy/nested/labels.js', 'export const labels = {title: "October"};');
    const result = await checkProject(root);
    expect(result.files).toBe(3);
    expect(result.empty).toEqual([]);
    expect(result.errors).toEqual(expect.arrayContaining([expect.objectContaining({ file: 'src/data/households/charlotte.json', path: '$.moments[0].state.coachCards[0].text', rule: 'coach-opener' })]));
  });
  it('warns on an empty scaffold and fails strict readiness', async () => {
    const root = await project();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(await main([], root)).toBe(0);
    expect(warning).toHaveBeenCalledWith(expect.stringContaining('NOT VALIDATED'));
    expect(await main(['--require-content'], root)).toBe(1);
  });
  it('strict readiness needs nonempty content in all three directories', async () => {
    const root = await project();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    for (const directory of ['households', 'articles']) await content(root, `src/data/${directory}/one.json`, '{"text":"Monday"}');
    await content(root, 'src/copy/labels.json', '{}');
    expect(await main(['--require-content'], root)).toBe(1);
    await content(root, 'src/copy/labels.json', '{"today":"Today"}');
    expect(await main(['--require-content'], root)).toBe(0);
  });
});
