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

export function momentState(householdId, momentId, carry = {}) {
  const household = householdById(householdId);
  const { moments } = household.seed;
  const moment = moments.find((entry) => entry.id === momentId) ?? moments[0];
  return {
    householdId: household.id,
    momentId: moment.id,
    now: moment.time,
    ...placeFor(moment.opensOn),
    stack: [],
    switcherOpen: false,
    // The presenter's own choices carry over a jump; nothing of the household's does.
    phoneFrame: carry.phoneFrame ?? false,
    coachMode: carry.coachMode ?? 'scripted',
  };
}

export function initialSession({ householdId = households[0].id, momentId } = {}) {
  return momentState(householdId, momentId);
}

export function sessionReducer(state, action) {
  switch (action.type) {
    case 'JUMP': return momentState(state.householdId, action.momentId, state);
    case 'RESET': return momentState(state.householdId, householdById(state.householdId).seed.moments[0].id, state);
    case 'SWITCH_HOUSEHOLD': return momentState(action.householdId, undefined, state);
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
