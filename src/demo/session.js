import { householdById, households } from './households.js';
import { onboardingReducer, startOnboarding } from './onboarding.js';

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
// branch names a choice she made that the scripted path does not take, such as skipping her first
// capture or picking Plan B on her first board, which the moment's seed writes under "branches".
export function emptyToday(branch = null) {
  return {
    ticks: {}, openedGroups: [], openedChecklists: [], removed: {}, added: {}, reminders: {}, cardAnswers: {},
    leaveOverrides: {}, sheet: null, sheetClosed: false, notice: null, passShown: null, foldsDrawn: [], branch,
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
    // Undo returns the card to its recommendation and the plan to the scripted path.
    case 'UNDO_CARD': return { ...today, cardAnswers: { ...today.cardAnswers, [action.card]: null }, branch: null };
    // A backup on the Leave sheet that changes only her plan: the card shows her choice, and the plan
    // follows the moment's branch for it.
    case 'CHOOSE_BRANCH': return { ...today, branch: action.branch, cardAnswers: { ...today.cardAnswers, [action.card]: action.branch }, sheet: null, sheetClosed: true };
    case 'SET_REMINDER': return { ...today, reminders: { ...today.reminders, [action.key]: action.reminder }, sheet: null, sheetClosed: true };
    case 'SAVE_LEAVE': return { ...today, leaveOverrides: { ...today.leaveOverrides, [action.run]: action.overrides }, sheet: null, sheetClosed: true };
    case 'OPEN_SHEET': return { ...today, sheet: action.sheet, sheetClosed: false };
    // A sheet the seed opened in a step stays closed once she closes it.
    case 'CLOSE_SHEET': return { ...today, sheet: null, sheetClosed: true };
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
  const place = placeFor(moment.opensOn);
  // A moment that opens on the splash runs onboarding from the start with the seed's answers (spec §3).
  // Development only: the start parameters can open it at one of its screens or failure states.
  const onboarding = place.still === 'splash' && moment.state?.onboarding
    ? startOnboarding(household.seed, moment, carry.onboarding)
    : null;
  return {
    householdId: household.id,
    momentId: moment.id,
    now: moment.time,
    // Steps played within the moment, and a demo time inside it. Both stay at the moment's start in
    // the app until Stage 6 plays steps as the presenter taps. The development-only start parameters
    // set them, so every Today state can be opened for evidence.
    played: carry.played ?? 0,
    at: carry.at ?? null,
    notifications: carry.notifications ?? null,
    ...place,
    onboarding,
    // Counts every jump, so the screens remount and nothing she typed, no timer and no entrance is
    // left behind, even when the presenter jumps to the moment already showing (spec §15).
    visit: (carry.visit ?? 0) + 1,
    playedFrom: null,
    stack: [],
    switcherOpen: false,
    // The presenter's own choices carry over a jump; nothing of the household's does.
    phoneFrame: carry.phoneFrame ?? false,
    coachMode: carry.coachMode ?? 'scripted',
    today: emptyToday(),
  };
}

export function initialSession({ householdId = households[0].id, momentId, played, at, tab, notifications, onboarding, branch } = {}) {
  const session = momentState(householdId, momentId, { played, at, notifications, onboarding });
  // Development only: open her first board on one of its branches, such as 0i-d or 0i-g.
  const withBranch = branch ? { ...session, onboarding: null, still: null, today: emptyToday(branch) } : session;
  return tab ? { ...withBranch, tab, still: null, onboarding: null } : withBranch;
}

// Only the presenter's own choices carry over a jump, with the count of jumps.
const presenter = (state) => ({ phoneFrame: state.phoneFrame, coachMode: state.coachMode, visit: state.visit });

export function sessionReducer(state, action) {
  switch (action.type) {
    case 'JUMP': return momentState(state.householdId, action.momentId, presenter(state));
    case 'RESET': return momentState(state.householdId, householdById(state.householdId).seed.moments[0].id, presenter(state));
    case 'SWITCH_HOUSEHOLD': return momentState(action.householdId, undefined, presenter(state));
    case 'TODAY': return { ...state, today: todayReducer(state.today, action.action) };
    case 'ONBOARDING': return state.onboarding ? { ...state, onboarding: onboardingReducer(state.onboarding, action.action) } : state;
    // Not now on the account prompt ends the session: nothing she entered is kept, and the app starts
    // again at the splash (spec §3, "Leaving before the account starts over").
    case 'START_OVER': return momentState(state.householdId, state.momentId, presenter(state));
    // The coach's introduction hands her to her first board on Today. If she skipped the capture, the
    // board follows the moment's branch for it (0i-d).
    case 'FINISH_ONBOARDING': return {
      ...state,
      onboarding: null,
      still: null,
      tab: 'today',
      today: emptyToday(state.onboarding?.flags.skippedCapture ? 'skipped-capture' : null),
    };
    // Her answer plays the moment's scripted step for it, such as agreeing on her first board (0i-c),
    // and Undo plays it back. playedFrom holds where the moment stood before she answered.
    case 'PLAY': return { ...state, played: action.played, at: null, playedFrom: action.from ?? null };
    // Development only: plays steps inside the moment without a jump, so the motion a step brings can
    // be recorded for evidence before Stage 6 plays steps as the presenter taps.
    case 'DEV_PLAY': return { ...state, played: action.played, at: action.at ?? null };
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
