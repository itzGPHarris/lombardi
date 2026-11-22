// Onboarding, C-00 (spec §3; fixtures section 2, "Onboarding", and C-00). The flow runs from the
// splash to the coach's introduction, then lands on her first board on Today. Everything she enters is
// held in the session only, and a jump, Reset or Not now on the account prompt starts it again at the
// splash with Charlotte's answers from the seed (spec §3, standing decision 2).
import { dateOf, formatTime, parseAnchor } from './calendar.js';
import { dateRange, monthYear } from './dateTokens.js';
import { fill } from './today.js';
import * as words from '../copy/onboarding.js';

// Spec §3, "Prototype timing": the prototype reads nothing, so each thinking screen lasts two seconds.
// Getting ready takes as long as its steps, each one the motion token's slow duration (spec §19).
export const THINKING_MS = 2000;

// The screens in the order she meets them, with the layout type each is built in (docs/screen-map.md).
export const screens = {
  '0s': { type: 'still' },
  '0w': { type: 'onboarding' },
  '0k': { type: 'onboarding', back: '0w' },
  '0k-b': { type: 'onboarding', back: '0k' },
  '0a': { type: 'onboarding', back: '0k-b' },
  '0v': { type: 'onboarding', back: '0a' },
  '0r': { type: 'still' },
  '0b': { type: 'onboarding' },
  '0t': { type: 'still' },
  '0c': { type: 'onboarding' },
  '0e': { type: 'onboarding', back: '0c', step: 1 },
  '0e-p': { type: 'onboarding', back: '0e' },
  '0q': { type: 'onboarding', back: '0e-p', step: 2 },
  '0q-b': { type: 'still', step: 2 },
  '0q-c': { type: 'onboarding', back: '0q', step: 2 },
  '0f': { type: 'onboarding', step: 3 },
  '0g': { type: 'onboarding', back: '0f', step: 4 },
  '0p': { type: 'still' },
  '0j': { type: 'onboarding' },
};
export const STEPS = 4;

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
  const list = words.grades.list;
  if (age < 4) return list[0];
  const index = Math.min(age - 4 + 1, list.length - 1);
  return list[index];
}

// How a grade reads inside a sentence, such as "fourth grade" or "kindergarten".
export function gradeInSentence(grade) {
  return grade === 'Pre-K' ? grade : grade.charAt(0).toLowerCase() + grade.slice(1);
}

export function gradesHeading(children) {
  if (children.length === 1) return fill(words.grades.headingOne, { child: children[0].name, grade: gradeInSentence(children[0].grade) });
  if (children.length === 2) {
    return fill(words.grades.headingTwo, {
      child: children[0].name, grade: gradeInSentence(children[0].grade),
      child2: children[1].name, grade2: gradeInSentence(children[1].grade),
    });
  }
  return words.grades.headingMany;
}

// Charlotte's answers, as the seed writes them for C-00, so every field opens filled as the frames
// draw it. She can change any of them.
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
    fromCapture: entry.fromCapture,
    age: '',
  }));
  return {
    screen,
    failure,
    entries: {
      name: answers.name,
      zip: seed.meta.zip,
      children,
      schools,
      email: '',
      setup: answers.household.setup,
      language: answers.household.language,
      helpers: answers.household.helpers.map(({ name, relationship }) => ({ name, relationship })),
    },
    flags: {
      skippedWelcome: false,
      skippedCapture: false,
      captureKind: null,
      // The read-back preselects the child whose grade matches the document's (fixtures C-00).
      chosenChild: seed.conversation.find((entry) => entry.capture === answers.capture && entry.confirm)?.confirm.chosen ?? null,
      pendingCalendar: null,
      calendar: null,
      gradeListOpen: null,
      ticks: { ...answers.ticks },
    },
  };
}

export function onboardingReducer(state, action) {
  const flags = (changes) => ({ ...state, flags: { ...state.flags, ...changes } });
  switch (action.type) {
    case 'GO': return { ...state, screen: action.screen, failure: null, flags: { ...state.flags, gradeListOpen: null } };
    case 'BACK': {
      const back = action.to ?? screens[state.screen]?.back;
      return back ? { ...state, screen: back, failure: null, flags: { ...state.flags, gradeListOpen: null } } : state;
    }
    case 'SET': return { ...state, entries: { ...state.entries, [action.field]: action.value } };
    case 'SET_ROW': return {
      ...state,
      entries: { ...state.entries, [action.field]: state.entries[action.field].map((row, index) => (index === action.index ? { ...row, ...action.value } : row)) },
    };
    case 'ADD_ROW': return { ...state, entries: { ...state.entries, [action.field]: [...state.entries[action.field], action.value] } };
    case 'SKIP_WELCOME': return { ...state, screen: '0k', flags: { ...state.flags, skippedWelcome: true } };
    case 'SKIP_CAPTURE': return { ...state, screen: '0e', flags: { ...state.flags, skippedCapture: true, captureKind: null } };
    // A photo is checked first; a file or a voice note goes straight to reading, because there is
    // nothing to frame (fixtures C-00).
    case 'CAPTURE': return { ...state, screen: action.kind === 'photo' ? '0v' : '0r', flags: { ...state.flags, captureKind: action.kind, skippedCapture: false } };
    case 'OPEN_GRADE_LIST': return flags({ gradeListOpen: state.flags.gradeListOpen === action.index ? null : action.index });
    case 'CHOOSE_GRADE': return {
      ...state,
      entries: { ...state.entries, children: state.entries.children.map((child, index) => (index === action.index ? { ...child, grade: action.grade } : child)) },
      flags: { ...state.flags, gradeListOpen: null },
    };
    case 'CHOOSE_CHILD': return flags({ chosenChild: action.child });
    case 'ASK_CALENDAR': return { ...state, screen: '0q-b', flags: { ...state.flags, pendingCalendar: action.calendar } };
    case 'ALLOW_CALENDAR': return { ...state, screen: '0q-c', flags: { ...state.flags, calendar: state.flags.pendingCalendar, pendingCalendar: null } };
    case 'CANCEL_CALENDAR': return { ...state, screen: '0q', flags: { ...state.flags, pendingCalendar: null } };
    case 'SKIP_CALENDAR': return { ...state, screen: '0f', flags: { ...state.flags, calendar: null } };
    case 'TICK': return flags({ ticks: { ...state.flags.ticks, [action.tick]: !state.flags.ticks[action.tick] } });
    case 'FAIL': return { ...state, failure: action.failure };
    default: return state;
  }
}

// Back from the school screen returns to the calendar screen she left, connected or not.
export function backFrom(state) {
  if (state.screen === '0f') return state.flags.calendar ? '0q-c' : '0q';
  return screens[state.screen]?.back ?? null;
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
