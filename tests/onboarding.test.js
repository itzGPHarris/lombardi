import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import {
  backFrom, childrenInWords, draftDates, gradesHeading, introRecap, onboardingReducer, startOnboarding, suggestGrade,
} from '../src/demo/onboarding.js';
import { monthYear } from '../src/demo/dateTokens.js';
import { initialSession, sessionReducer } from '../src/demo/session.js';

const c00 = seed.moments.find((moment) => moment.id === 'C-00');
const start = () => startOnboarding(seed, c00);
const play = (state, ...actions) => actions.reduce(onboardingReducer, state);

describe('onboarding opens with what the fixtures write for C-00 (spec §3)', () => {
  it('fills every field with Charlotte\'s answers', () => {
    const { screen, entries } = start();
    expect(screen).toBe('0s');
    expect(entries).toMatchObject({ name: 'Charlotte', zip: '00123', setup: 'Two parents', language: 'English' });
    expect(entries.children.map((child) => [child.name, monthYear(child.birth)])).toEqual([['Alexis', 'October 2016'], ['Mallory', 'September 2020']]);
    expect(entries.schools.map((school) => [school.school, school.startTime])).toEqual([['Cedar Grove Elementary', '8:00am'], ['Westview Kindergarten', '8:30am']]);
    expect(entries.helpers).toEqual([{ name: 'Edward', relationship: 'Husband' }, { name: 'Claire', relationship: 'Sister' }]);
  });

  it('suggests each grade from the birth month against a September 1 cutoff', () => {
    for (const child of start().entries.children) {
      expect(child.grade).toBe(seed.children.find((entry) => entry.id === child.id).gradeLabel);
    }
    expect(suggestGrade({ month: 8, year: 2021 }, seed.meta.demoWeekStart)).toBe('Kindergarten');
    expect(suggestGrade({ month: 9, year: 2021 }, seed.meta.demoWeekStart)).toBe('Pre-K');
    expect(suggestGrade({ month: 1, year: 2024 }, seed.meta.demoWeekStart)).toBe('Not in school yet');
  });

  it('writes the grades heading for one, two and three or more children', () => {
    const { children } = start().entries;
    expect(gradesHeading(children)).toBe('Alexis is likely in fourth grade, and Mallory is likely in kindergarten.');
    expect(gradesHeading(children.slice(1))).toBe('Mallory is likely in kindergarten.');
    expect(gradesHeading([...children, children[0]])).toBe('Here are the grades the MVP Coach suggests.');
  });

  it('dates the draft and names the children as the screens say them', () => {
    expect(draftDates(c00.state.onboarding.draft, seed.meta.demoWeekStart)).toBe('Oct. 6 to 9');
    expect(childrenInWords(start().entries.children)).toBe('Alexis and Mallory');
  });
});

describe('she moves through onboarding in the fixtures\' order', () => {
  it('walks Charlotte\'s path from the splash to the coach\'s introduction', () => {
    const go = (screen) => ({ type: 'GO', screen });
    const state = play(start(),
      go('0w'), go('0k'), go('0k-b'), go('0a'), { type: 'CAPTURE', kind: 'photo' });
    expect(state.screen).toBe('0v');
    const connected = play(state, go('0r'), go('0b'), go('0t'), go('0c'), go('0e'), go('0e-p'), go('0q'),
      { type: 'ASK_CALENDAR', calendar: 'Google Calendar' }, { type: 'ALLOW_CALENDAR' });
    expect(connected).toMatchObject({ screen: '0q-c', flags: { calendar: 'Google Calendar', skippedCapture: false } });
    expect(play(connected, go('0f'), go('0g'), go('0p'), go('0j')).screen).toBe('0j');
  });

  it('skips the welcome to the children screen and the capture to the account', () => {
    expect(play(start(), { type: 'SKIP_WELCOME' })).toMatchObject({ screen: '0k', flags: { skippedWelcome: true } });
    expect(play(start(), { type: 'SKIP_CAPTURE' })).toMatchObject({ screen: '0e', flags: { skippedCapture: true } });
  });

  it('reads a file or a voice note without checking a photo first', () => {
    expect(play(start(), { type: 'CAPTURE', kind: 'file' }).screen).toBe('0r');
    expect(play(start(), { type: 'CAPTURE', kind: 'voice' }).screen).toBe('0r');
  });

  it('cancels the calendar permission back to the calendar screen, and Not now goes on without one', () => {
    const asked = play(start(), { type: 'ASK_CALENDAR', calendar: 'Outlook' });
    expect(asked).toMatchObject({ screen: '0q-b', flags: { pendingCalendar: 'Outlook' } });
    expect(play(asked, { type: 'CANCEL_CALENDAR' })).toMatchObject({ screen: '0q', flags: { calendar: null } });
    expect(play(start(), { type: 'SKIP_CALENDAR' })).toMatchObject({ screen: '0f', flags: { calendar: null } });
  });
});

describe('the demo returns to C-00 with a clean state (spec §15)', () => {
  const dirty = () => {
    const session = initialSession();
    return sessionReducer(session, { type: 'ONBOARDING', action: { type: 'SET', field: 'name', value: 'Someone else' } });
  };

  it('opens on the splash with the seed\'s answers', () => {
    const session = initialSession();
    expect(session.onboarding.screen).toBe('0s');
    expect(session.onboarding.entries.name).toBe('Charlotte');
  });

  it('Not now on the account prompt starts again at the splash and keeps nothing', () => {
    const session = sessionReducer(dirty(), { type: 'START_OVER' });
    expect(session.onboarding.screen).toBe('0s');
    expect(session.onboarding.entries.name).toBe('Charlotte');
  });

  it('a jump to C-00, from another moment or from C-00 itself, and Reset each start fresh and remount', () => {
    const before = dirty();
    const fromC00 = sessionReducer(before, { type: 'JUMP', momentId: 'C-00' });
    const fromC03 = sessionReducer(sessionReducer(before, { type: 'JUMP', momentId: 'C-03' }), { type: 'JUMP', momentId: 'C-00' });
    const reset = sessionReducer(before, { type: 'RESET' });
    for (const session of [fromC00, fromC03, reset]) {
      expect(session.onboarding).toMatchObject({ screen: '0s', failure: null, entries: { name: 'Charlotte' }, flags: { skippedWelcome: false, skippedCapture: false, calendar: null } });
      expect(session.visit).toBeGreaterThan(before.visit);
    }
    expect(sessionReducer(before, { type: 'JUMP', momentId: 'C-03' }).onboarding).toBeNull();
  });

  it('the coach\'s introduction hands her to her first board, on the skipped-capture branch if she skipped', () => {
    const finished = sessionReducer(initialSession(), { type: 'FINISH_ONBOARDING' });
    expect(finished).toMatchObject({ onboarding: null, still: null, tab: 'today', today: { branch: null } });
    const skipped = sessionReducer(sessionReducer(initialSession(), { type: 'ONBOARDING', action: { type: 'SKIP_CAPTURE' } }), { type: 'FINISH_ONBOARDING' });
    expect(skipped.today.branch).toBe('skipped-capture');
  });
});

describe('the coach\'s introduction says only what MVP learned on her path (fixtures C-00, "If she skipped a step"; O32)', () => {
  const welcome = seed.conversation.find((entry) => entry.id === 'c00-welcome');
  const path = (flags = {}, entries = {}) => {
    const state = start();
    return introRecap(welcome, { flags: { ...state.flags, calendar: 'Google Calendar', ...flags }, entries: { ...state.entries, ...entries } });
  };

  it('on Charlotte\'s path reads as C-00 writes it', () => {
    expect(path()).toBe(welcome.text);
  });

  it('leaves out the rotation without a capture, the calendar without one, and her circle without anyone added', () => {
    expect(path({ skippedCapture: true })).not.toContain('library on A days');
    expect(path({ calendar: null })).not.toContain('repeat every week');
    expect(path({ calendar: 'Outlook' })).toContain('on your Outlook, and they are in your plan.');
    expect(path({}, { helpers: [{ name: '', relationship: '' }] })).not.toContain('in your circle');
    expect(path({ skippedCapture: true, calendar: null }, { helpers: [] })).toBe(
      'Here is what I have so far. Alexis is in fourth grade at Cedar Grove Elementary and Mallory is in kindergarten at Westview Kindergarten.',
    );
  });
});

describe('Back on every onboarding and setup screen after 0w (spec §2, O30)', () => {
  it('returns each screen to the one before it, past the still screens', () => {
    const state = start();
    const from = (screen, flags = {}) => backFrom({ ...state, screen, flags: { ...state.flags, ...flags } });
    expect(['0k', '0k-b', '0a', '0v', '0b', '0c', '0e-p', '0j'].map((screen) => from(screen))).toEqual(['0w', '0k', '0k-b', '0a', '0v', '0b', '0e', '0g']);
    expect(from('0b', { captureKind: 'file' })).toBe('0a');
  });
});
