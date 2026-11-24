import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import {
  backFrom, childrenInWords, draftDates, draftReminder, draftView, introRecap, onboardingReducer, reminderDay, screens,
  startOnboarding, startTimeSource, suggestGrade, welcomeComplete,
} from '../src/demo/onboarding.js';
import { monthYear } from '../src/demo/dateTokens.js';
import { initialSession, sessionReducer } from '../src/demo/session.js';

const c00 = seed.moments.find((moment) => moment.id === 'C-00');
const start = () => startOnboarding(seed, c00);
const play = (state, ...actions) => actions.reduce(onboardingReducer, state);

describe('onboarding opens with what the fixtures write for C-00 (spec §3)', () => {
  it('fills every field with Charlotte\'s answers, and the welcome opens with one child (O36)', () => {
    const { screen, entries } = start();
    expect(screen).toBe('0s');
    expect(entries).toMatchObject({ name: 'Charlotte', zip: '00123', setup: 'Two parents', language: 'English' });
    expect(entries.children.map((child) => [child.name, monthYear(child.birth)])).toEqual([['Alexis', 'October 2016']]);
    expect(entries.schools.map((school) => [school.school, school.startTime, school.source])).toEqual([
      ['Cedar Grove Elementary', '8:00am', 'calendar'], ['Westview Kindergarten', '8:30am', 'capture'],
    ]);
    expect(entries.helpers).toEqual([{ name: 'Edward', relationship: 'Husband' }, { name: 'Claire', relationship: 'Sister' }]);
  });

  it('"+ Add another child" brings Mallory\'s fields, then a blank child\'s (0w-c)', () => {
    const once = play(start(), { type: 'ADD_CHILD' });
    expect(once.entries.children.map((child) => [child.name, monthYear(child.birth)])).toEqual([['Alexis', 'October 2016'], ['Mallory', 'September 2020']]);
    const twice = play(once, { type: 'ADD_CHILD' });
    expect(twice.entries.children[2]).toMatchObject({ name: '', birth: null });
    expect(startOnboarding(seed, c00, { screen: '0w-c' }).entries.children).toHaveLength(2);
  });

  it('suggests each grade from the birth month against a September 1 cutoff', () => {
    for (const child of play(start(), { type: 'ADD_CHILD' }).entries.children) {
      expect(child.grade).toBe(seed.children.find((entry) => entry.id === child.id).gradeLabel);
    }
    expect(suggestGrade({ month: 8, year: 2021 }, seed.meta.demoWeekStart)).toBe('Kindergarten');
    expect(suggestGrade({ month: 9, year: 2021 }, seed.meta.demoWeekStart)).toBe('Pre-K');
    expect(suggestGrade({ month: 1, year: 2024 }, seed.meta.demoWeekStart)).toBe('Not in school yet');
  });

  it('suggests the grade again when she changes a birth month, and Continue waits for every name and birth month', () => {
    const changed = play(start(), { type: 'SET_BIRTH', index: 0, birth: { month: 8, year: 2021 }, demoWeekStart: seed.meta.demoWeekStart });
    expect(changed.entries.children[0]).toMatchObject({ birth: { month: 8, year: 2021 }, grade: 'Kindergarten' });
    expect(welcomeComplete(start().entries.children)).toBe(true);
    const added = play(start(), { type: 'ADD_CHILD' }, { type: 'ADD_CHILD' });
    expect(welcomeComplete(added.entries.children)).toBe(false);
    expect(welcomeComplete(play(added, { type: 'SET_ROW', field: 'children', index: 2, value: { name: 'Sam' } }).entries.children)).toBe(false);
  });

  it('dates the draft and names the children as the screens say them', () => {
    expect(draftDates(c00.state.onboarding.draft, seed.meta.demoWeekStart)).toBe('Oct. 6 to 9');
    expect(childrenInWords(play(start(), { type: 'ADD_CHILD' }).entries.children)).toBe('Alexis and Mallory');
  });
});

describe('she moves through onboarding in the fixtures\' order (O35, O36)', () => {
  const go = (screen) => ({ type: 'GO', screen });

  it('has ten screens before her first board, and none of the retired ones', () => {
    expect(Object.keys(screens)).toEqual(['0s', '0w', '0a', '0t', '0c', '0e-p', '0q', '0f', '0p', '0j']);
    for (const retired of ['0k', '0k-b', '0v', '0r', '0b', '0e', '0q-c', '0g', '0h']) {
      expect(screens[retired], retired).toBeUndefined();
      expect(startOnboarding(seed, c00, { screen: retired }).screen, retired).toBe('0s');
    }
  });

  it('walks Charlotte\'s captured path on one capture conversation, confirming the child before the read-back', () => {
    let state = play(start(), go('0w'), { type: 'ADD_CHILD' }, go('0a'), { type: 'CAPTURE', kind: 'photo' });
    expect(state).toMatchObject({ screen: '0a', flags: { capture: 'preview' } });
    state = play(state, { type: 'USE_PHOTO' }, { type: 'READ_DONE' });
    expect(state.flags).toMatchObject({ capture: 'confirm', chosenChild: null });
    // Nothing moves on until she taps a child.
    expect(play(state, { type: 'ANSWER' }).flags.capture).not.toBe('question');
    state = play(state, { type: 'CHOOSE_CHILD', child: 'mallory' });
    expect(state.flags).toMatchObject({ capture: 'question', chosenChild: 'mallory' });
    state = play(state, { type: 'ANSWER' });
    expect(state.flags.capture).toBe('handoff');
    state = play(state, go('0t'), go('0c'), go('0e-p'), go('0q'), { type: 'ASK_CALENDAR', calendar: 'Google Calendar' });
    expect(state).toMatchObject({ screen: '0q', flags: { permissionFor: 'Google Calendar', calendar: null } });
    state = play(state, { type: 'ALLOW_CALENDAR' });
    expect(state).toMatchObject({ screen: '0q', flags: { permissionFor: null, calendar: 'Google Calendar' } });
    expect(play(state, go('0f'), go('0p'), go('0j')).screen).toBe('0j');
  });

  it('a file or a voice note goes straight to reading', () => {
    expect(play(start(), { type: 'CAPTURE', kind: 'file' }).flags.capture).toBe('reading');
    expect(play(start(), { type: 'CAPTURE', kind: 'voice' }).flags.capture).toBe('reading');
  });

  it('skipping the capture opens the account sheet over 0a, and Back closes it (0c-b)', () => {
    const skipped = play(start(), go('0a'), { type: 'SKIP_CAPTURE' });
    expect(skipped).toMatchObject({ screen: '0a', flags: { accountSheet: true, skippedCapture: true } });
    expect(play(skipped, { type: 'BACK' })).toMatchObject({ screen: '0a', flags: { accountSheet: false } });
    expect(startOnboarding(seed, c00, { screen: '0c-b' })).toMatchObject({ screen: '0a', flags: { accountSheet: true, skippedCapture: true } });
    // Back from the plan screen returns to the sheet over 0a.
    expect(play(skipped, go('0e-p'), { type: 'BACK' })).toMatchObject({ screen: '0a', flags: { accountSheet: true } });
  });

  it('cancels the permission sheet with nothing connected, and Not now goes on without a calendar', () => {
    const asked = play(start(), go('0q'), { type: 'ASK_CALENDAR', calendar: 'Outlook' });
    expect(play(asked, { type: 'CANCEL_CALENDAR' })).toMatchObject({ screen: '0q', flags: { permissionFor: null, calendar: null } });
    expect(play(asked, { type: 'BACK' })).toMatchObject({ screen: '0q', flags: { permissionFor: null } });
    expect(play(start(), { type: 'SKIP_CALENDAR' })).toMatchObject({ screen: '0f', flags: { calendar: null } });
  });
});

describe('the draft can be changed before the account (0c, O36)', () => {
  const draft = c00.state.onboarding.draft;
  const view = (state) => draftView(draft, state.flags.draft);
  const reminders = (state) => view(state).filter((day) => day.kind === 'day').flatMap((day) => day.reminders.map((reminder) => reminder.text));

  it('shows each reminder, and an add link after each day with reminders', () => {
    const days = view(start());
    expect(reminders(start())).toEqual(['Sneakers', 'Sneakers', 'Library book']);
    expect(days.filter((day) => day.kind === 'day' && day.hasReminders).map((day) => day.row.letter)).toEqual(['D', 'F', 'A']);
    expect(days.find((day) => day.kind === 'event').event).toBe('suggested');
  });

  it('removes a reminder at once with a notice and Undo, and keeps the add link on its day', () => {
    const library = view(start()).find((day) => day.row.letter === 'A').reminders[0].key;
    const removed = play(start(), { type: 'REMOVE_REMINDER', key: library });
    expect(reminders(removed)).toEqual(['Sneakers', 'Sneakers']);
    expect(view(removed).find((day) => day.row.letter === 'A').hasReminders).toBe(true);
    const notice = draftReminder(draft, removed.flags.draft, removed.flags.draft.notice);
    expect([notice.text, reminderDay(notice.row, c00.time, seed.meta.demoWeekStart)]).toEqual(['Library book', 'this Friday']);
    expect(reminders(play(removed, { type: 'UNDO_REMOVE' }))).toEqual(['Sneakers', 'Sneakers', 'Library book']);
  });

  it('adds a reminder after a day, and the event takes her choice', () => {
    const tuesday = view(start()).find((day) => day.row.letter === 'D').index;
    const added = play(start(), { type: 'ADD_REMINDER', row: tuesday, text: 'Rain boots' });
    expect(view(added).find((day) => day.row.letter === 'D').reminders.map((reminder) => reminder.text)).toEqual(['Sneakers', 'Rain boots']);
    expect(view(play(start(), { type: 'EVENT', choice: 'added' })).find((day) => day.kind === 'event').event).toBe('added');
  });

  it('opens 0c-d with the library book removed and back-to-school night added', () => {
    const edited = startOnboarding(seed, c00, { screen: '0c-d' });
    expect(reminders(edited)).toEqual(['Sneakers', 'Sneakers']);
    expect(view(edited).find((day) => day.kind === 'event').event).toBe('added');
  });

  it('"Tell the MVP Coach what\'s wrong" reopens the capture conversation at the hand-off, in the capture bar', () => {
    expect(play(start(), { type: 'GO', screen: '0c' }, { type: 'TELL_COACH' })).toMatchObject({ screen: '0a', flags: { capture: 'handoff', correcting: true } });
  });
});

describe('the school screen shows where each start time came from (0f, O36)', () => {
  const entries = () => start().entries.schools;
  it('names the photo after a capture and the calendar once connected, and asks when it has neither', () => {
    const [alexis, mallory] = entries();
    expect(startTimeSource(alexis, { calendar: 'Google Calendar', skippedCapture: false })).toBe('calendar');
    expect(startTimeSource(mallory, { calendar: 'Google Calendar', skippedCapture: false })).toBe('capture');
    expect(startTimeSource(alexis, { calendar: null, skippedCapture: false })).toBeNull();
    expect(startTimeSource(mallory, { calendar: null, skippedCapture: true })).toBeNull();
  });
  it('opens 0f-b with Alexis\'s start time missing', () => {
    const missing = startOnboarding(seed, c00, { screen: '0f-b' });
    expect(missing.screen).toBe('0f');
    expect(missing.entries.schools[0]).toMatchObject({ startTime: '', missing: true });
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
      expect(session.onboarding).toMatchObject({ screen: '0s', failure: null, entries: { name: 'Charlotte' }, flags: { skippedCapture: false, calendar: null } });
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
  it('returns each screen to the one before it, past the still screens, and never reaches a retired one', () => {
    const state = start();
    const from = (screen, flags = {}) => backFrom({ ...state, screen, flags: { ...state.flags, ...flags } });
    expect(['0a', '0c', '0e-p', '0q', '0f', '0j'].map((screen) => from(screen))).toEqual(['0w', '0a', '0c', '0e-p', '0q', '0f']);
    expect(from('0e-p', { skippedCapture: true })).toBe('0a');
    expect(from('0w')).toBeNull();
    for (const screen of Object.keys(screens)) {
      const back = from(screen);
      if (back) expect(screens[back], `${screen} -> ${back}`).toBeDefined();
    }
  });
});
