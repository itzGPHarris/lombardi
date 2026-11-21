import household from '../data/households/charlotte.json';
import copy from '../copy/interface.json';

export function minutes(time) {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
}
export function formatTime(time) {
  const [hour, minute] = time.split(':').map(Number);
  return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour < 12 ? 'am' : 'pm'}`;
}
export function countdown(departure, now) {
  const delta = minutes(departure) - minutes(now);
  if (delta <= 0) return null;
  return delta < 60 ? `in ${delta} min` : `in ${Math.floor(delta / 60)} hr ${delta % 60} min`;
}
export function visibleDepartures(state) {
  return state.departures.filter(d => d.time.day === state.time.day && minutes(d.time.time) > minutes(state.time.time));
}
export function phase(time) {
  const value = minutes(time);
  return value >= 19 * 60 ? 'tonight' : value >= 12 * 60 ? 'afternoon' : 'morning';
}
export function createSession(momentId = 'C-03') {
  const moment = household.moments.find(m => m.id === momentId);
  if (!moment) throw new Error(`Unsupported moment: ${momentId}`);
  return { ...structuredClone(moment.state), momentId, time: { ...moment.time }, view: moment.opensOn,
    returnView: 'today', modal: null, revision: 0, draftText: moment.state.requests[0].text, handoffSent: false };
}
export function sessionReducer(state, action) {
  switch (action.type) {
    case 'RESET': return { ...createSession(), revision: state.revision + 1 };
    case 'OPEN_MOMENT': return { ...createSession(action.id), revision: state.revision + 1 };
    case 'NAVIGATE':
      if (!['today', 'game-plan', 'settings', 'article', 'draft'].includes(action.view)) return state;
      return { ...state, view: action.view, returnView: state.view, modal: null };
    case 'BACK': return { ...state, view: state.view === 'handoff' ? 'game-plan' : state.returnView, returnView: 'today', modal: null };
    case 'MODAL': return { ...state, modal: action.name };
    case 'TOGGLE_CHECK': {
      if (!state.departures.some(d => d.goingWith.some(i => i.id === action.id))) return state;
      return { ...state, checked: { ...state.checked, [action.id]: !state.checked[action.id] } };
    }
    case 'ADVANCE': return { ...state, time: { ...household.moments[0].steps[0].time } };
    case 'DISMISS_COACH': return { ...state, coachCards: [] };
    case 'EDIT_DRAFT': return { ...state, draftText: action.text };
    case 'HANDOFF': {
      if (state.view !== 'draft' || !state.draftText.trim()) return state;
      return { ...state, view: 'handoff', returnView: 'game-plan', coachCards: [],
        planItems: state.planItems.map(item => item.id === 'wed-carpool' ? { ...item, owner: 'charlotte', status: null, marks: [] } : item),
        requests: state.requests.map(request => request.id === 'carpool-reply' ? { ...request, text: state.draftText, state: 'Handoff' } : request),
        tasks: state.tasks.length ? state.tasks : [{ id: 'reply-task', title: copy.task, owner: 'charlotte', status: null, marks: [], checked: false, time: { ...state.time } }],
      };
    }
    // This is a local stage only. It never sends a network request or confirms the MVP task.
    case 'STAGED_SEND': return state.view === 'handoff' ? { ...state, handoffSent: true } : state;
    case 'TOGGLE_TASK': return { ...state, tasks: state.tasks.map(t => t.id === action.id ? { ...t, checked: !t.checked } : t) };
    default: return state;
  }
}
export { household };
