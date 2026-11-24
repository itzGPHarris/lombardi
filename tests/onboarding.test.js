import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import {
  backFrom, childrenInWords, draftDates, draftOutcome, draftReminder, draftView, introRecap, isEmail, onboardingReducer, reminderDay,
  screens, seedWithDraft, startOnboarding, startTimeSource, suggestGrade, welcomeComplete,
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

// The requirement changed with fixtures 3.57 and spec 0.58 (issue O46): the reminders show without
// Remove on arrival, every coach suggestion ends with Keep, Change and Skip in place of Add to the
// plan and Not this time, and 0c-d shows Tuesday kept, Thursday open in Change, back-to-school night
// skipped and Friday left alone. These tests replace the 3.56 draft's.
describe('every suggestion on the draft can be kept, changed or skipped (0c, O46)', () => {
  const draft = c00.state.onboarding.draft;
  const view = (state) => draftView(draft, state.flags.draft);
  const card = (state, letter) => view(state).find((day) => (letter ? day.row.letter === letter : day.kind === 'event'));
  const reminders = (state) => view(state).filter((day) => day.kind === 'day').flatMap((day) => day.reminders.map((reminder) => reminder.text));
  const row = (letter) => card(start(), letter).index;

  it('opens with each day with reminders and the event suggested, and Wednesday for reference', () => {
    expect(view(start()).map((day) => [day.row.letter ?? day.row.event, day.state])).toEqual([
      ['D', 'suggested'], ['E', 'reference'], ['F', 'suggested'], ['Back-to-school night', 'suggested'], ['A', 'suggested'],
    ]);
    expect(reminders(start())).toEqual(['Sneakers', 'Sneakers', 'Library book']);
  });

  it('Keep leaves Kept with Undo, and Skip folds the card with Undo back to the state it had', () => {
    const kept = play(start(), { type: 'KEEP', row: row('D') });
    expect(card(kept, 'D').state).toBe('kept');
    expect(card(play(kept, { type: 'UNDO_CARD', row: row('D') }), 'D').state).toBe('suggested');
    const skipped = play(kept, { type: 'SKIP', row: row('D') });
    expect(card(skipped, 'D').state).toBe('skipped');
    expect(card(play(skipped, { type: 'UNDO_CARD', row: row('D') }), 'D').state).toBe('kept');
    const event = play(start(), { type: 'SKIP', row: row() });
    expect(card(play(event, { type: 'UNDO_CARD', row: row() })).state).toBe('suggested');
  });

  it('removes and adds reminders only inside Change, with the notice and Undo, and Done keeps the day', () => {
    const library = card(start(), 'A').reminders[0].key;
    expect(reminders(play(start(), { type: 'REMOVE_REMINDER', key: library }))).toEqual(['Sneakers', 'Sneakers', 'Library book']);
    const open = play(start(), { type: 'CHANGE', row: row('A') });
    expect(card(open, 'A').state).toBe('changing');
    const removed = play(open, { type: 'REMOVE_REMINDER', key: library });
    expect(reminders(removed)).toEqual(['Sneakers', 'Sneakers']);
    const notice = draftReminder(draft, removed.flags.draft, removed.flags.draft.notice);
    expect([notice.text, reminderDay(notice.row, c00.time, seed.meta.demoWeekStart)]).toEqual(['Library book', 'this Friday']);
    expect(reminders(play(removed, { type: 'UNDO_REMOVE' }))).toEqual(['Sneakers', 'Sneakers', 'Library book']);
    const added = play(open, { type: 'ADD_REMINDER', row: row('A'), text: 'Rain boots' }, { type: 'ADD_REMINDER', row: row('D'), text: 'Hat' });
    expect(card(added, 'A').reminders.map((reminder) => reminder.text)).toEqual(['Library book', 'Rain boots']);
    expect(card(added, 'D').reminders.map((reminder) => reminder.text)).toEqual(['Sneakers']);
    expect(card(play(added, { type: 'DONE' }), 'A').state).toBe('kept');
  });

  it('Change on back-to-school night opens the capture conversation in the capture bar, and the card waits', () => {
    const changed = play(start(), { type: 'GO', screen: '0c' }, { type: 'TELL_COACH' });
    expect(changed).toMatchObject({ screen: '0a', flags: { capture: 'handoff', correcting: true } });
    expect(card(changed).state).toBe('suggested');
  });

  it('opens 0c-d with Tuesday kept, Thursday in Change, back-to-school night skipped and Friday left alone', () => {
    const edited = startOnboarding(seed, c00, { screen: '0c-d' });
    expect(view(edited).map((day) => day.state)).toEqual(['kept', 'reference', 'changing', 'skipped', 'suggested']);
    expect(edited.flags.draft.notice).toBeNull();
  });

  it('"Tell the MVP Coach what\'s wrong" reopens the capture conversation at the hand-off, in the capture bar', () => {
    expect(play(start(), { type: 'GO', screen: '0c' }, { type: 'TELL_COACH' })).toMatchObject({ screen: '0a', flags: { capture: 'handoff', correcting: true } });
  });
});

describe('keeping the plan waits for an email (0c, 0c-b, 0c-c; O46)', () => {
  it('holds Continue until the field holds an email', () => {
    expect(['', 'charlotte', 'charlotte@', 'charlotte@mail', ' charlotte@mail.example ', 'charlotte@mail.example'].map(isEmail))
      .toEqual([false, false, false, false, true, true]);
  });

  it('opens 0c-c with her email typed, and 0c with the field empty', () => {
    expect(startOnboarding(seed, c00, { screen: '0c-c' }).entries.email).toBe('charlotte@mail.example');
    expect(startOnboarding(seed, c00, { screen: '0c' }).entries.email).toBe('');
  });
});

describe('Continue keeps every card she didn\'t skip, and her first board shows it (spec §3, standing decision 14)', () => {
  const draft = c00.state.onboarding.draft;
  const rows = draft.rows;
  const at = (test) => rows.findIndex(test);
  const tuesday = at((row) => row.letter === 'D');
  const thursday = at((row) => row.letter === 'F');
  const friday = at((row) => row.letter === 'A');
  const event = at((row) => row.event);
  const outcome = (...actions) => draftOutcome(draft, play(start(), ...actions).flags.draft);
  const firstBoard = (kept) => {
    const moment = seedWithDraft(seed, kept).moments.find((entry) => entry.id === 'C-00');
    return {
      item: moment.state.planItems.find((item) => item.id === 'w-1-thu-back-to-school'),
      reviewCard: moment.state.reviewCard,
      checklist: moment.state.today.now.checklist.groups.find((group) => group.child === 'mallory').items,
    };
  };
  const seeded = ['Sneakers and socks by the door', 'Lunchbox', 'Snack bag', 'Water bottle'];

  it('leaving every card alone keeps them Suggested, and the board is the seed\'s', () => {
    const untouched = outcome();
    expect(untouched.cards).toEqual({ [tuesday]: 'suggested', [thursday]: 'suggested', [event]: 'suggested', [friday]: 'suggested' });
    expect(firstBoard(untouched)).toEqual({ item: expect.objectContaining({ inPlan: false, status: { state: 'proposed' } }), reviewCard: ['w-1-thu-back-to-school'], checklist: seeded });
  });

  it('keeping every card puts back-to-school night on Thursday as hers, and the checklist is the same', () => {
    const kept = outcome(...[tuesday, thursday, event, friday].map((index) => ({ type: 'KEEP', row: index })));
    expect(Object.values(kept.cards)).toEqual(['kept', 'kept', 'kept', 'kept']);
    expect(firstBoard(kept)).toEqual({ item: expect.objectContaining({ inPlan: true, owner: 'charlotte', status: null }), reviewCard: [], checklist: seeded });
  });

  it('skipping back-to-school night takes it off the plan and the review card', () => {
    expect(firstBoard(outcome({ type: 'SKIP', row: event }))).toEqual({ item: expect.objectContaining({ inPlan: false, status: null }), reviewCard: [], checklist: seeded });
  });

  it('skipping Tuesday, or removing its sneakers, takes them off tonight\'s checklist, and what she adds joins it', () => {
    const withoutSneakers = seeded.slice(1);
    expect(firstBoard(outcome({ type: 'SKIP', row: tuesday })).checklist).toEqual(withoutSneakers);
    expect(firstBoard(outcome({ type: 'CHANGE', row: tuesday }, { type: 'REMOVE_REMINDER', key: `${tuesday}` })).checklist).toEqual(withoutSneakers);
    expect(firstBoard(outcome({ type: 'CHANGE', row: tuesday }, { type: 'ADD_REMINDER', row: tuesday, text: 'Rain boots' })).checklist).toEqual([...seeded, 'Rain boots']);
    expect(firstBoard(outcome({ type: 'CHANGE', row: friday }, { type: 'REMOVE_REMINDER', key: `${friday}` })).checklist).toEqual(seeded);
  });

  // O47: the coach card's follow-up after she agrees has a shorter form once nothing waits on the
  // review card (fixtures 3.57 section 4, "Coach card after she agrees").
  it('the coach follow-up drops the review-card sentence when she kept or skipped back-to-school night', () => {
    const followUps = (kept) => {
      const card = seedWithDraft(seed, kept).coachCards.find((entry) => entry.id === 'cc-first-board');
      return [card.after.agree.text, card.after['plan-b'].text];
    };
    const full = 'The rest of this week is in your game plan. Back-to-school night at Westview Kindergarten this Thursday is the one thing waiting there for you to add.';
    const short = 'The rest of this week is in your game plan.';
    expect(followUps(outcome())).toEqual([full, full]);
    expect(followUps(outcome({ type: 'KEEP', row: tuesday }))).toEqual([full, full]);
    expect(followUps(outcome({ type: 'KEEP', row: event }))).toEqual([short, short]);
    expect(followUps(outcome({ type: 'SKIP', row: event }))).toEqual([short, short]);
  });

  // O47: each draft reminder reaches the checklist through the Rule that creates it (spec §16, "Rule").
  it('finds the checklist item each draft reminder becomes through its Rule', () => {
    const created = rows.filter((entry) => entry.checklistItem)
      .map((entry) => [entry.checklistItem, seed.rules.find((rule) => rule.goingWith === entry.goingWith)?.checklistItem]);
    expect(created).toEqual([['Sneakers', 'Sneakers and socks by the door'], ['Sneakers', 'Sneakers and socks by the door'], ['Library book', 'Library book']]);
  });

  it('a day still open in Change at Continue is kept', () => {
    expect(outcome({ type: 'CHANGE', row: friday }).cards[friday]).toBe('kept');
  });

  it('carries to her first board through the session, and a jump starts without it', () => {
    let session = initialSession({ momentId: 'C-00' });
    const act = (action) => { session = sessionReducer(session, { type: 'ONBOARDING', action }); };
    act({ type: 'GO', screen: '0c' });
    act({ type: 'SKIP', row: event });
    act({ type: 'KEEP_PLAN', outcome: draftOutcome(draft, session.onboarding.flags.draft) });
    expect(session.onboarding.screen).toBe('0e-p');
    session = sessionReducer(session, { type: 'FINISH_ONBOARDING' });
    expect(session.draftOutcome.cards[event]).toBe('skipped');
    expect(sessionReducer(session, { type: 'JUMP', momentId: 'C-00' }).draftOutcome).toBeNull();
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
