import { householdById, households } from './households.js';
import { onboardingReducer, startOnboarding } from './onboarding.js';
import { fillDates } from './dateTokens.js';
import { conflictNotice, conflictNoticeLink } from '../copy/gamePlan.js';
import { nextStep, notificationFor, playsFromPresenter, playsFromTrigger, stepsFor, undoable } from './steps.js';

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
    // What she is giving the coach through the capture bar: her words and a photo from the staged
    // camera, kept while the camera is open (fixtures C-03a).
    captureText: '', photo: null,
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
    case 'CAPTURE_TEXT': return { ...today, captureText: action.text };
    case 'ATTACH': return { ...today, photo: action.capture };
    case 'CLEAR_CAPTURE': return { ...today, captureText: '', photo: null };
    case 'PASS_SHOWN': return today.passShown === action.key ? today : { ...today, passShown: action.key };
    case 'FOLD_DRAWN': return today.foldsDrawn.includes(action.key) ? today : { ...today, foldsDrawn: [...today.foldsDrawn, action.key] };
    default: return today;
  }
}

// What she has opened or closed on the game plan, which stays as she left it until she leaves the
// game plan (spec §8, "Day"), and the items she has opened, whose Updated mark has cleared. Her notes
// and the items she has opened stay until she jumps to another moment. landing is the item she has
// just added or moved, which takes the coach's tint on its day (spec §8, "She sees where an item
// lands"); strip is the read-back strip she has sent away; notice is a conflict notice above the bar.
export function emptyGamePlan(opened = [], notes = {}) {
  return { days: {}, pastOpen: false, opened, notes, landing: null, stripGone: false, notice: null };
}

export function gamePlanReducer(gamePlan, action) {
  switch (action.type) {
    case 'TOGGLE_DAY': return { ...gamePlan, days: { ...gamePlan.days, [action.key]: action.open } };
    case 'TOGGLE_PAST': return { ...gamePlan, pastOpen: !gamePlan.pastOpen };
    case 'OPEN_ITEM': return gamePlan.opened.includes(action.id) ? gamePlan : { ...gamePlan, opened: [...gamePlan.opened, action.id] };
    case 'SAVE_NOTE': return { ...gamePlan, notes: { ...gamePlan.notes, [action.id]: action.text } };
    case 'LAND': return { ...gamePlan, landing: { id: action.id, key: action.key, said: action.said } };
    case 'CLEAR_LANDING': return { ...gamePlan, landing: null };
    case 'STRIP_GONE': return gamePlan.stripGone ? gamePlan : { ...gamePlan, stripGone: true };
    case 'NOTICE': return { ...gamePlan, notice: action.notice };
    case 'DISMISS_NOTICE': return { ...gamePlan, notice: null };
    default: return gamePlan;
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
    // Steps played within the moment, and a demo time inside it. Steps play as the presenter taps
    // (src/demo/steps.js). The development-only start parameters set them, so every state can be
    // opened for evidence.
    played: carry.played ?? 0,
    at: carry.at ?? null,
    notifications: carry.notifications ?? null,
    ...place,
    onboarding,
    // Counts every jump, so the screens remount and nothing she typed, no timer and no entrance is
    // left behind, even when the presenter jumps to the moment already showing (spec §15).
    visit: (carry.visit ?? 0) + 1,
    playedFrom: null,
    // The notification for the last step that brought her one, such as Edward's yes (spec §9, §10).
    arrival: null,
    stack: [],
    switcherOpen: false,
    // The presenter's own choices carry over a jump; nothing of the household's does.
    phoneFrame: carry.phoneFrame ?? false,
    coachMode: carry.coachMode ?? 'scripted',
    today: emptyToday(),
    gamePlan: emptyGamePlan(),
    // The chats and groups she has opened in this moment, each with the step it was opened at, so a
    // message that arrives after she has looked brings "1 new" back (spec §10).
    team: { seen: {} },
    // The school card facts she has opened, whose Updated mark has cleared (spec §11).
    kids: { opened: [] },
  };
}

export function initialSession({ householdId = households[0].id, momentId, played, at, tab, notifications, onboarding, branch, page, viewAs, notice } = {}) {
  const opening = momentState(householdId, momentId, { played, at, notifications, onboarding });
  // Development only: a moment opened with steps played shows the last one's notification, so the
  // evidence can show what she hears.
  const last = opening.played ? stepsFor(opening.momentId)[opening.played - 1] : null;
  const text = last ? notificationFor(householdById(opening.householdId).seed, last) : null;
  const session = text ? { ...opening, arrival: { text, key: `${opening.momentId}:${opening.played}` } } : opening;
  // Development only: open her first board on one of its branches, such as 0i-d or 0i-g.
  const withBranch = branch ? { ...session, onboarding: null, still: null, today: emptyToday(branch) } : session;
  const tabbed = tab ? { ...withBranch, tab, still: null, onboarding: null } : withBranch;
  // Development only: open the moment from a recipient's side.
  const viewed = viewAs ? { ...tabbed, viewAs, tab: 'today', still: null, onboarding: null } : tabbed;
  // Development only: the conflict notice above the bar on the game plan, which no moment raises
  // (spec §8; fixtures section 2, "A new conflict reaches her as a notice").
  const demoWeekStart = householdById(viewed.householdId).seed.meta.demoWeekStart;
  const opened = notice === 'conflict' ? {
    ...viewed,
    gamePlan: { ...viewed.gamePlan, notice: { text: conflictNotice, link: fillDates(conflictNoticeLink, { demoWeekStart }), day: '0.mon' } },
  } : viewed;
  // Development only: open a page inside the tab, written as kind:id.
  if (!page) return opened;
  const colon = page.indexOf(':');
  const [kind, id] = colon < 0 ? [page, null] : [page.slice(0, colon), page.slice(colon + 1)];
  return { ...opened, stack: [{ kind, id }] };
}

// Plays the moment's next step. Undo is kept only after her own change from the coach card or the
// Coach tab, never after a send or anyone else's step (spec §5, §9). A step that brings her a
// notification raises it, and one that returns her to a tab, such as the share in C-01, opens it.
function playStep(state, step) {
  const seed = householdById(state.householdId).seed;
  const text = notificationFor(seed, step);
  const moved = step.tab && step.tab !== state.tab;
  return {
    ...state,
    played: state.played + 1,
    at: null,
    playedFrom: undoable(step) ? state.played : null,
    arrival: text ? { text, key: `${state.momentId}:${state.played + 1}` } : state.arrival,
    ...(moved ? { tab: step.tab, still: null, stack: [] } : {}),
  };
}

// Only the presenter's own choices carry over a jump, with the count of jumps.
const presenter = (state) => ({ phoneFrame: state.phoneFrame, coachMode: state.coachMode, visit: state.visit });

export function sessionReducer(state, action) {
  switch (action.type) {
    case 'JUMP': return momentState(state.householdId, action.momentId, presenter(state));
    case 'RESET': return momentState(state.householdId, householdById(state.householdId).seed.moments[0].id, presenter(state));
    case 'SWITCH_HOUSEHOLD': return momentState(action.householdId, undefined, presenter(state));
    case 'TODAY': return { ...state, today: todayReducer(state.today, action.action) };
    case 'SEEN': return state.team?.seen?.[action.id] === state.played ? state : { ...state, team: { seen: { ...state.team?.seen, [action.id]: state.played } } };
    case 'OPEN_FACT': return (state.kids?.opened ?? []).includes(action.id) ? state : { ...state, kids: { opened: [...(state.kids?.opened ?? []), action.id] } };
    case 'GAME_PLAN': return { ...state, gamePlan: gamePlanReducer(state.gamePlan ?? emptyGamePlan(), action.action) };
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
    // A tap of hers, or of the recipient's in View as, plays the next step when it is the step that
    // tap plays. Any other tap changes nothing, so the story never jumps ahead (spec §15).
    case 'STEP': {
      const step = nextStep(state.momentId, state.played);
      return playsFromTrigger(step, action.trigger) ? playStep(state, step) : state;
    }
    // Play the next step, in the household switcher, plays a step with no tap of hers, such as a reply
    // arriving or the share from WhatsApp in C-01. Nothing plays on a timer (issue C80).
    case 'NEXT_STEP': {
      const step = nextStep(state.momentId, state.played);
      const closed = { ...state, switcherOpen: false };
      return playsFromPresenter(step) ? playStep(closed, step) : closed;
    }
    case 'DISMISS_ARRIVAL': return { ...state, arrival: null };
    case 'DEV_PLAY': return { ...state, played: action.played, at: action.at ?? null };
    case 'VIEW_AS': return { ...state, viewAs: action.person, still: null, tab: 'today', stack: [], switcherOpen: false };
    case 'SET_PHONE_FRAME': return { ...state, phoneFrame: action.on, switcherOpen: false };
    case 'SET_COACH_MODE': return { ...state, coachMode: action.mode };
    case 'OPEN_SWITCHER': return { ...state, switcherOpen: true };
    case 'CLOSE_SWITCHER': return { ...state, switcherOpen: false };
    // Leaving the game plan returns its days to how the game plan always opens.
    case 'OPEN_TAB': return {
      ...state, tab: action.tab, still: null, stack: [],
      gamePlan: action.tab === state.tab ? state.gamePlan : emptyGamePlan(state.gamePlan?.opened, state.gamePlan?.notes),
    };
    // Opening a page or going Back counts, so the page fades in (spec §19, "Pages"); a tab change does
    // not, because tabs change at once.
    case 'PUSH': return { ...state, stack: [...state.stack, action.page], pageMoves: (state.pageMoves ?? 0) + 1 };
    case 'POP': return { ...state, stack: state.stack.slice(0, -1), pageMoves: (state.pageMoves ?? 0) + 1 };
    default: return state;
  }
}
