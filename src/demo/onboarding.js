// Onboarding, C-00 (spec §3; fixtures section 2, "Onboarding", and C-00). The flow runs from the
// splash to the coach's introduction, then lands on her first board on Today. Everything she enters is
// held in the session only, and a jump, Reset or Not now on the account prompt starts it again at the
// splash with Charlotte's answers from the seed (spec §3, standing decision 2). Charlotte's path is ten
// screens before her first board (fixtures 3.56, issues O35 and O36).
import { dateOf, formatTime, parseAnchor } from './calendar.js';
import { dateRange, monthYear, relativeDay } from './dateTokens.js';
import * as words from '../copy/onboarding.js';

// Spec §3, "Prototype timing": the prototype reads nothing, so the capture conversation's reading line
// and the thinking screen for the draft each last two seconds. Getting ready takes as long as its
// steps, each one the motion token's slow duration (spec §19).
export const THINKING_MS = 2000;

// The ten screens in the order she meets them, with the layout type each is built in and where Back
// goes (docs/screen-map.md, spec §3, issues O35 and O36). The capture conversation (0a) holds the
// photo's preview, the reading, the question of whose it is, the read-back and the hand-off as
// states, and the account sheet with nothing captured (0c-b) opens over it. The calendar's
// permission (0q-b) is a sheet over 0q and its connected state (0q-d) is 0q itself. 0v, 0r, 0b, 0k,
// 0k-b, 0e, 0q-c, 0g and 0h are retired and never reached. Onboarding has no step counter (spec §3,
// standing decision 4).
export const screens = {
  '0s': { type: 'still' },
  '0w': { type: 'onboarding' },
  '0a': { type: 'conversation', back: '0w' },
  '0t': { type: 'still' },
  '0c': { type: 'onboarding', back: '0a' },
  '0e-p': { type: 'onboarding', back: '0c' },
  '0q': { type: 'onboarding', back: '0e-p' },
  '0f': { type: 'onboarding', back: '0q' },
  '0p': { type: 'still' },
  '0j': { type: 'onboarding', back: '0f' },
};

// The steps of the capture conversation, one screen from the coach's request to the hand-off (0a to
// 0a-e): she is asked (ask), checks the photo (preview), the coach reads it (reading), names it and
// asks whose it is (confirm), reads it back and asks its one question (question), and once she has
// answered, hands off (handoff).
export const capturePhases = ['ask', 'preview', 'reading', 'confirm', 'question', 'handoff'];

// The school year a birth month is measured against: the one that started on the September before the
// demo week, worked out from meta.demoWeekStart.
function schoolYear(demoWeekStart) {
  const { y, m } = parseAnchor(demoWeekStart);
  return m >= 9 ? y : y - 1;
}

// The grade the MVP Coach suggests from a birth month, against a September 1 cutoff (fixtures
// Appendix A, "Grade cutoff"). A child born in September or later turns that age after the cutoff.
export function suggestGrade(birth, demoWeekStart) {
  const age = schoolYear(demoWeekStart) - birth.year - (birth.month >= 9 ? 1 : 0);
  const list = words.grades;
  if (age < 4) return list[0];
  const index = Math.min(age - 4 + 1, list.length - 1);
  return list[index];
}

// How a grade reads inside a sentence, such as "fourth grade" or "kindergarten".
export function gradeInSentence(grade) {
  return grade === 'Pre-K' ? grade : grade.charAt(0).toLowerCase() + grade.slice(1);
}

const emptyDraft = () => ({ removed: [], added: {}, event: 'suggested', notice: null });

// The development links open a state of a screen by its fixtures ID (README). Each names a state that
// exists; a retired ID opens the splash.
const states = {
  '0w-b': { screen: '0w', flags: { gradeListOpen: 0 } },
  '0w-c': { screen: '0w', allChildren: true },
  '0a-b': { screen: '0a', flags: { capture: 'preview', captureKind: 'photo' } },
  '0a-c': { screen: '0a', flags: { capture: 'reading', captureKind: 'photo' } },
  '0a-d': { screen: '0a', flags: { capture: 'confirm', captureKind: 'photo' } },
  '0a-e': { screen: '0a', flags: { capture: 'handoff', captureKind: 'photo', chosen: true } },
  '0c-b': { screen: '0a', flags: { accountSheet: true, skippedCapture: true } },
  '0c-c': { screen: '0c', flags: { scrollToKeep: true } },
  '0c-d': { screen: '0c', draftEdited: true },
  '0q-b': { screen: '0q', flags: { permissionFor: 'calendar' } },
  '0q-d': { screen: '0q', flags: { calendar: 'calendar' } },
  '0f-b': { screen: '0f', flags: { calendar: 'calendar' }, missingStart: 0 },
};
// A link straight to a screen after the welcome opens it as Charlotte reaches it: both children named,
// and from the school screen on, her Google Calendar connected.
const afterWelcome = ['0a', '0t', '0c', '0e-p', '0q', '0f', '0p', '0j'];
const afterCalendar = ['0f', '0p', '0j'];

// Charlotte's answers, as the seed writes them for C-00, so every field opens filled as the frames
// draw it. She can change any of them. The welcome opens with the first child, and "+ Add another
// child" brings the next of hers before a blank one (fixtures 3.56 C-00, 0w-c).
export function startOnboarding(seed, moment, { screen = '0s', failure = null } = {}) {
  const answers = moment.state.onboarding;
  const year = dateOf(moment.time, seed.meta.demoWeekStart).year;
  const children = answers.children.map(({ child, birth }) => {
    const known = seed.children.find((entry) => entry.id === child);
    const born = { month: birth.month, year: year - birth.yearsBefore };
    return { id: child, name: known.name, birth: born, grade: suggestGrade(born, seed.meta.demoWeekStart) };
  });
  const schools = answers.schools.map((entry) => ({
    child: entry.child,
    school: seed.places.find((place) => place.id === entry.school).name,
    startTime: formatTime(entry.startTime),
    source: entry.source ?? null,
    missing: false,
    age: '',
  }));
  const state = states[screen] ?? (screens[screen] ? { screen, flags: afterCalendar.includes(screen) ? { calendar: 'calendar' } : {} } : { screen: '0s' });
  const allChildren = state.allChildren || afterWelcome.includes(state.screen);
  const calendarName = seed.calendar.name;
  const stateFlags = Object.fromEntries(Object.entries(state.flags ?? {}).map(([key, value]) => [key, value === 'calendar' ? calendarName : value]));
  if (stateFlags.chosen) {
    stateFlags.chosenChild = answers.draft.child;
    delete stateFlags.chosen;
  }
  const draft = emptyDraft();
  if (state.draftEdited) {
    // 0c-d: the library book removed, with its notice, and back-to-school night added.
    const library = answers.draft.rows.findIndex((row) => row.checklistItem && row.letter === 'A');
    draft.removed = [`${library}`];
    draft.event = 'added';
    draft.notice = `${library}`;
  }
  if (state.missingStart !== undefined) {
    schools[state.missingStart] = { ...schools[state.missingStart], startTime: '', missing: true };
  }
  return {
    screen: state.screen,
    failure,
    entries: {
      name: answers.name,
      zip: seed.meta.zip,
      children: allChildren ? children : children.slice(0, 1),
      // The children she has yet to add, in order, so the demo path fills them in as the fixtures do.
      toAdd: allChildren ? [] : children.slice(1),
      schools,
      email: '',
      setup: answers.household.setup,
      language: answers.household.language,
      helpers: answers.household.helpers.map(({ name, relationship }) => ({ name, relationship })),
    },
    flags: {
      skippedCapture: false,
      accountSheet: false,
      capture: 'ask',
      captureKind: null,
      // No child is chosen until she taps one (spec §3, standing decision 12).
      chosenChild: null,
      // "Something's not right" or "Tell the MVP Coach what's wrong" puts her back in the capture bar.
      correcting: false,
      draft,
      scrollToKeep: false,
      permissionFor: null,
      calendar: null,
      gradeListOpen: null,
      ticks: { ...answers.ticks },
      ...stateFlags,
    },
  };
}

export function onboardingReducer(state, action) {
  const flags = (changes) => ({ ...state, flags: { ...state.flags, ...changes } });
  const draft = (changes) => flags({ draft: { ...state.flags.draft, ...changes } });
  const leave = (screen, changes = {}) => ({
    ...state, screen, failure: null, flags: { ...state.flags, gradeListOpen: null, scrollToKeep: false, ...changes },
  });
  switch (action.type) {
    case 'GO': return leave(action.screen);
    case 'BACK': {
      // A sheet over the screen closes first, the way Back closes 0c-b (fixtures C-00).
      if (state.screen === '0a' && state.flags.accountSheet) return flags({ accountSheet: false });
      if (state.screen === '0q' && state.flags.permissionFor) return flags({ permissionFor: null });
      const back = backFrom(state);
      if (!back) return state;
      // Back from the plan screen with nothing captured returns to the account sheet over 0a.
      if (state.screen === '0e-p' && state.flags.skippedCapture) return leave('0a', { accountSheet: true, correcting: false });
      return leave(back, { correcting: false });
    }
    case 'SET': return { ...state, entries: { ...state.entries, [action.field]: action.value } };
    case 'SET_ROW': return {
      ...state,
      entries: { ...state.entries, [action.field]: state.entries[action.field].map((row, index) => (index === action.index ? { ...row, ...action.value } : row)) },
    };
    case 'ADD_ROW': return { ...state, entries: { ...state.entries, [action.field]: [...state.entries[action.field], action.value] } };
    // "+ Add another child" brings her next child's fields, filled as the fixtures write them, then a
    // blank child's (0w-c).
    case 'ADD_CHILD': {
      const [next, ...rest] = state.entries.toAdd;
      const child = next ?? { id: null, name: '', birth: null, grade: words.grades[0] };
      return { ...state, entries: { ...state.entries, children: [...state.entries.children, child], toAdd: rest } };
    }
    case 'OPEN_GRADE_LIST': return flags({ gradeListOpen: state.flags.gradeListOpen === action.index ? null : action.index });
    // A birth month brings the grade the MVP Coach suggests for it, which she can change (spec §3).
    case 'SET_BIRTH': return {
      ...state,
      entries: {
        ...state.entries,
        children: state.entries.children.map((child, index) => (index === action.index
          ? { ...child, birth: action.birth, grade: suggestGrade(action.birth, action.demoWeekStart) }
          : child)),
      },
    };
    case 'CHOOSE_GRADE': return {
      ...state,
      entries: { ...state.entries, children: state.entries.children.map((child, index) => (index === action.index ? { ...child, grade: action.grade } : child)) },
      flags: { ...state.flags, gradeListOpen: null },
    };
    // The capture conversation (0a to 0a-e). A photo is checked in place first; a file or a voice note
    // goes straight to reading, because there is nothing to frame (fixtures C-00).
    case 'CAPTURE': return { ...state, failure: null, flags: { ...state.flags, capture: action.kind === 'photo' ? 'preview' : 'reading', captureKind: action.kind, skippedCapture: false, accountSheet: false } };
    case 'USE_PHOTO': return flags({ capture: 'reading' });
    case 'READ_AGAIN': return { ...state, failure: null, flags: { ...state.flags, capture: 'reading' } };
    case 'READ_DONE': return state.flags.capture === 'reading' ? flags({ capture: 'confirm' }) : state;
    case 'CHOOSE_ANOTHER': return { ...state, failure: null, flags: { ...state.flags, capture: 'ask', captureKind: null } };
    // Her tap is the confirmation, and the read-back follows (spec §3, standing decision 12).
    case 'CHOOSE_CHILD': return state.flags.capture === 'confirm' ? flags({ chosenChild: action.child, capture: 'question' }) : state;
    case 'ANSWER': return flags({ capture: 'handoff', correcting: false });
    case 'CORRECT': return flags({ correcting: true });
    // "Tell the MVP Coach what's wrong" reopens the capture conversation at the hand-off, in the
    // capture bar. The corrected-draft round trip is not built (docs/issues.csv).
    case 'TELL_COACH': return leave('0a', { capture: 'handoff', correcting: true });
    case 'SKIP_CAPTURE': return flags({ accountSheet: true, skippedCapture: true, captureKind: null, capture: 'ask' });
    // The draft (0c): removing a reminder takes it off straight away and raises the notice with Undo,
    // for every reminder, because the draft has no "Just tonight" or "Every night" (docs/issues.csv).
    case 'REMOVE_REMINDER': return draft({ removed: [...state.flags.draft.removed, action.key], notice: action.key });
    case 'UNDO_REMOVE': return draft({ removed: state.flags.draft.removed.filter((row) => row !== state.flags.draft.notice), notice: null });
    case 'DISMISS_NOTICE': return draft({ notice: null });
    case 'ADD_REMINDER': return draft({ added: { ...state.flags.draft.added, [action.row]: [...(state.flags.draft.added[action.row] ?? []), action.text] } });
    case 'EVENT': return draft({ event: action.choice });
    // The calendar (0q): the permission is a sheet over the screen (0q-b), and allowing it shows the
    // connected state on the same screen (0q-d, F40).
    case 'ASK_CALENDAR': return flags({ permissionFor: action.calendar });
    case 'ALLOW_CALENDAR': return flags({ calendar: state.flags.permissionFor, permissionFor: null });
    case 'CANCEL_CALENDAR': return flags({ permissionFor: null });
    case 'SKIP_CALENDAR': return leave('0f', { calendar: null, permissionFor: null });
    case 'TICK': return flags({ ticks: { ...state.flags.ticks, [action.tick]: !state.flags.ticks[action.tick] } });
    case 'FAIL': return { ...state, failure: action.failure };
    default: return state;
  }
}

// Back is on every onboarding and setup screen after 0w (spec §2, issue O30). It skips the still
// screens between, so Back from the draft returns to the hand-off in the capture conversation, and
// Back from the plan screen returns to the draft, or, with nothing captured, to the account sheet over
// 0a. A sheet over the screen closes first (onboardingReducer, BACK).
export function backFrom(state) {
  if (state.screen === '0e-p' && state.flags.skippedCapture) return '0a';
  return screens[state.screen]?.back ?? null;
}

// Where a school's start time came from, if the coach has it on this path: the calendar photo only
// when she made the capture, her calendar only when she connected it (fixtures 3.56 C-00, 0f).
export function startTimeSource(entry, flags) {
  if (entry.missing) return null;
  if (entry.source === 'capture') return flags.skippedCapture ? null : 'capture';
  if (entry.source === 'calendar') return flags.calendar ? 'calendar' : null;
  return null;
}

// The draft's rows as the draft shows them, with her edits: each school day with its reminders, less
// any she removed and with any she added, and the suggested event as she left it (0c, 0c-d).
export function draftView(draftAnswers, edits) {
  return draftAnswers.rows.map((row, index) => {
    if (row.event) return { index, kind: 'event', row, event: edits.event };
    const all = [
      ...(row.checklistItem ? [{ key: `${index}`, text: row.checklistItem }] : []),
      ...(edits.added[index] ?? []).map((text, added) => ({ key: `${index}-${added}`, text, added: true })),
    ];
    const reminders = all.filter((reminder) => !edits.removed.includes(reminder.key));
    return { index, kind: 'day', row, reminders, hasReminders: all.length > 0 };
  });
}

// Continue on the welcome works once every child has a name and a birth month (spec §3, issue O18).
export function welcomeComplete(children) {
  return children.length > 0 && children.every((child) => child.name.trim() && child.birth);
}

// The children she named, in order, joined as the getting ready screen says them.
export function childrenInWords(children) {
  const names = children.map((child) => child.name).filter(Boolean);
  if (names.length <= 1) return names.join('');
  return `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;
}

// The draft's dates, such as "Oct. 6 to 9", from its first and last day.
export function draftDates(draft, demoWeekStart) {
  return dateRange(draft.rows[0].day, draft.rows.at(-1).day, demoWeekStart);
}

export { monthYear };

// The reminder a key names on the draft and the row it belongs to, for the notice after removing it.
export function draftReminder(draftAnswers, edits, key) {
  const [index, added] = key.split('-').map(Number);
  const row = draftAnswers.rows[index];
  const text = Number.isNaN(added) || added === undefined ? row?.checklistItem : edits.added[index]?.[added];
  return row && text ? { row, text } : null;
}

// The day a removed reminder was for, said from the night of C-00, such as "tomorrow" or "this Friday".
export function reminderDay(row, now, demoWeekStart) {
  return relativeDay(row.day, now, demoWeekStart);
}

// The coach's introduction says only what MVP learned on her path (fixtures C-00, "If she skipped a
// step"; issue O32): the opening and the grades always, the rotation only after a capture, the
// calendar only when she connected one, named as she connected it, and her circle only when she added
// someone on the school screen.
export function introRecap(welcome, { flags, entries }) {
  const applies = {
    always: true,
    capture: !flags.skippedCapture,
    calendar: !!flags.calendar,
    helpers: (entries.helpers ?? []).some((helper) => helper.name?.trim()),
  };
  return welcome.recap
    .filter((sentence) => applies[sentence.kind])
    .map((sentence) => sentence.text.replace('{calendar}', flags.calendar ?? ''))
    .join(' ');
}
