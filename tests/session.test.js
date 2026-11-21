import { describe, expect, it } from 'vitest';
import { initialSession, placeFor, sessionReducer } from '../src/demo/session.js';
import stub from '../src/data/households/charlotte.json';

// Spec §15, "Charlotte's moments": C-00 to C-15 without C-14.
const specMoments = ['C-00', 'C-01', 'C-02', 'C-03', 'C-03a', 'C-03b', 'C-04', 'C-04b', 'C-05', 'C-05b', 'C-05c', 'C-06', 'C-06b',
  'C-06c', 'C-07', 'C-08', 'C-08b', 'C-09', 'C-10', 'C-11', 'C-12', 'C-13', 'C-15'];

describe('the household session', () => {
  it('holds the moments spec §15 lists, in order', () => {
    expect(stub.moments.map((moment) => moment.id)).toEqual(specMoments);
  });

  it('opens on C-00 at the splash (issue X3)', () => {
    const session = initialSession();
    expect(session).toMatchObject({ householdId: 'charlotte', momentId: 'C-00', still: 'splash', viewAs: null, stack: [] });
    expect(session.now).toEqual({ week: -1, day: 'mon', time: '20:30' });
  });

  it('jumps to a moment and leaves nothing behind', () => {
    let session = initialSession();
    session = sessionReducer(session, { type: 'OPEN_TAB', tab: 'team' });
    session = sessionReducer(session, { type: 'PUSH', page: 'settings' });
    session = sessionReducer(session, { type: 'VIEW_AS', person: 'edward' });
    session = sessionReducer(session, { type: 'OPEN_SWITCHER' });
    session = sessionReducer(session, { type: 'JUMP', momentId: 'C-03' });
    expect(session).toMatchObject({ momentId: 'C-03', tab: 'today', still: null, viewAs: null, stack: [], switcherOpen: false });
    expect(session.now).toEqual({ week: 0, day: 'mon', time: '07:25' });
  });

  it('keeps the presenter\'s own choices across a jump', () => {
    let session = sessionReducer(initialSession(), { type: 'SET_COACH_MODE', mode: 'live' });
    session = sessionReducer(session, { type: 'SET_PHONE_FRAME', on: true });
    session = sessionReducer(session, { type: 'JUMP', momentId: 'C-08' });
    expect(session).toMatchObject({ coachMode: 'live', phoneFrame: true, tab: 'coach' });
  });

  it('resets the household to its first moment', () => {
    const session = sessionReducer(sessionReducer(initialSession(), { type: 'JUMP', momentId: 'C-13' }), { type: 'RESET' });
    expect(session).toMatchObject({ momentId: 'C-00', still: 'splash', viewAs: null });
  });

  it('opens each moment where spec §15 says it opens', () => {
    expect(placeFor('coach')).toEqual({ tab: 'coach', still: null, viewAs: null });
    expect(placeFor('lock-screen')).toEqual({ tab: 'today', still: 'lock-screen', viewAs: null });
    expect(placeFor('view-as:edward')).toEqual({ tab: 'today', still: null, viewAs: 'edward' });
    expect(placeFor('view-as:edward-notification')).toEqual({ tab: 'today', still: 'notification', viewAs: 'edward' });
  });

  it('starts the phone frame\'s iframe on the moment it was given', () => {
    expect(initialSession({ momentId: 'C-06b' })).toMatchObject({ momentId: 'C-06b', tab: 'today' });
    expect(initialSession({ momentId: 'C-99' })).toMatchObject({ momentId: 'C-00' });
  });
});
