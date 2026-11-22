import { householdById, households } from './households.js';

// One session per household (spec §17): the moment, the demo time, where she is in the app, and the
// presenter's controls. Nothing is saved, so a reload starts again on C-00 (spec §15, issue X3).
// A jump builds the state afresh from the seed, so nothing from before it is left behind.
const tabs = ['today', 'coach', 'game-plan', 'team', 'kids'];

// What a moment opens on: a tab, a still screen such as the splash or the lock screen, or the
// recipient's side through View as.
export function placeFor(opensOn) {
  if (tabs.includes(opensOn)) return { tab: opensOn, still: null, viewAs: null };
  if (opensOn?.startsWith('view-as:')) {
    const [person, still] = opensOn.slice('view-as:'.length).split('-notification');
    return { tab: 'today', still: still === undefined ? null : 'notification', viewAs: person };
  }
  return { tab: 'today', still: opensOn ?? null, viewAs: null };
}

// What she does on Today during a moment (spec §5): her ticks, what she has removed or added, the
// reminders she sets, her answers on the coach card, the leaving times she changes, the sheet that is
// open and the notice above the capture bar. It lives for the moment and clears on any jump (§15).
// passShown and foldsDrawn hold which pass has already swung in and which folds have already drawn
// their check, so neither replays when she comes back to Today from another tab (spec §19, "Motion").
export function emptyToday() {
  return {
    ticks: {}, openedGroups: [], openedChecklists: [], removed: {}, added: {}, reminders: {}, cardAnswers: {},
    leaveOverrides: {}, sheet: null, notice: null, passShown: null, foldsDrawn: [],
  };
}

const without = (list, value) => list.filter((entry) => entry !== value);

export function todayReducer(today, action) {
  switch (action.type) {
    case 'TICK': {
      const ticked = !action.ticked;
      const next = { ...today, ticks: { ...today.ticks, [action.row]: ticked } };
      // Ticking the last row of a group folds it again, and ticking the last row of all folds the
      // checklist again. Unticking leaves an opened group open.
      if (ticked && action.completesGroup) next.openedGroups = without(today.openedGroups, action.group);
      if (ticked && action.completesChecklist) next.openedChecklists = without(today.openedChecklists, action.checklist);
      // Unticking unfolds the checklist, so the check draws in again when it folds again.
      if (!ticked) next.foldsDrawn = without(today.foldsDrawn, action.checklist);
      return next;
    }
    case 'OPEN_GROUP': return { ...today, openedGroups: [...without(today.openedGroups, action.group), action.group] };
    case 'OPEN_CHECKLIST': return { ...today, openedChecklists: [...without(today.openedChecklists, action.checklist), action.checklist] };
    case 'REMOVE_ROW': return {
      ...today,
      removed: { ...today.removed, [action.group]: [...(today.removed[action.group] ?? []), action.item] },
      notice: action.notice ? { text: action.notice, undo: { type: 'RESTORE_ROW', group: action.group, item: action.item } } : null,
    };
    case 'RESTORE_ROW': return { ...today, removed: { ...today.removed, [action.group]: without(today.removed[action.group] ?? [], action.item) }, notice: null };
    case 'ADD_ROW': return { ...today, added: { ...today.added, [action.group]: [...(today.added[action.group] ?? []), action.text] } };
    case 'ANSWER_CARD': return { ...today, cardAnswers: { ...today.cardAnswers, [action.card]: action.answer } };
    case 'UNDO_CARD': return { ...today, cardAnswers: { ...today.cardAnswers, [action.card]: null } };
    case 'SET_REMINDER': return { ...today, reminders: { ...today.reminders, [action.key]: action.reminder }, sheet: null };
    case 'SAVE_LEAVE': return { ...today, leaveOverrides: { ...today.leaveOverrides, [action.run]: action.overrides }, sheet: null };
    case 'OPEN_SHEET': return { ...today, sheet: action.sheet };
    case 'CLOSE_SHEET': return { ...today, sheet: null };
    case 'DISMISS_NOTICE': return { ...today, notice: null };
    case 'PASS_SHOWN': return today.passShown === action.key ? today : { ...today, passShown: action.key };
    case 'FOLD_DRAWN': return today.foldsDrawn.includes(action.key) ? today : { ...today, foldsDrawn: [...today.foldsDrawn, action.key] };
    default: return today;
  }
}

export function momentState(householdId, momentId, carry = {}) {
  const household = householdById(householdId);
  const { moments } = household.seed;
  const moment = moments.find((entry) => entry.id === momentId) ?? moments[0];
  return {
    householdId: household.id,
    momentId: moment.id,
    now: moment.time,
    // Steps played within the moment, and a demo time inside it. Both stay at the moment's start in
    // the app until Stage 6 plays steps as the presenter taps. The development-only start parameters
    // set them, so every Today state can be opened for evidence.
    played: carry.played ?? 0,
    at: carry.at ?? null,
    ...placeFor(moment.opensOn),
    stack: [],
    switcherOpen: false,
    // The presenter's own choices carry over a jump; nothing of the household's does.
    phoneFrame: carry.phoneFrame ?? false,
    coachMode: carry.coachMode ?? 'scripted',
    today: emptyToday(),
  };
}

export function initialSession({ householdId = households[0].id, momentId, played, at, tab } = {}) {
  const session = momentState(householdId, momentId, { played, at });
  return tab ? { ...session, tab, still: null } : session;
}

// Only the presenter's own choices carry over a jump.
const presenter = (state) => ({ phoneFrame: state.phoneFrame, coachMode: state.coachMode });

export function sessionReducer(state, action) {
  switch (action.type) {
    case 'JUMP': return momentState(state.householdId, action.momentId, presenter(state));
    case 'RESET': return momentState(state.householdId, householdById(state.householdId).seed.moments[0].id, presenter(state));
    case 'SWITCH_HOUSEHOLD': return momentState(action.householdId, undefined, presenter(state));
    case 'TODAY': return { ...state, today: todayReducer(state.today, action.action) };
    case 'VIEW_AS': return { ...state, viewAs: action.person, still: null, tab: 'today', stack: [], switcherOpen: false };
    case 'SET_PHONE_FRAME': return { ...state, phoneFrame: action.on, switcherOpen: false };
    case 'SET_COACH_MODE': return { ...state, coachMode: action.mode };
    case 'OPEN_SWITCHER': return { ...state, switcherOpen: true };
    case 'CLOSE_SWITCHER': return { ...state, switcherOpen: false };
    case 'OPEN_TAB': return { ...state, tab: action.tab, still: null, stack: [] };
    case 'PUSH': return { ...state, stack: [...state.stack, action.page] };
    case 'POP': return { ...state, stack: state.stack.slice(0, -1) };
    default: return state;
  }
}
