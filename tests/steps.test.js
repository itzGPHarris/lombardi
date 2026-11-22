// How the scripted steps play (spec §15, issue C80): each tap plays only its own step, in order; Play
// the next step plays only a step with no tap of hers; Undo follows only her own change; a step never
// writes to her calendar; and a day that gains a conflict opens by itself (spec §8, G51).
import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import { initialSession, sessionReducer } from '../src/demo/session.js';
import { notificationFor, stepsFor } from '../src/demo/steps.js';
import { gamePlanView, itemPageView } from '../src/demo/tabs.js';

const at = (momentId) => sessionReducer(initialSession(), { type: 'JUMP', momentId });
const play = (session, ...actions) => actions.reduce((state, action) => sessionReducer(state, action), session);
const step = (trigger) => ({ type: 'STEP', trigger });
const next = { type: 'NEXT_STEP' };

describe('the step table', () => {
  it('names one entry for every step the seed scripts, and no more', () => {
    for (const moment of seed.moments) {
      expect(stepsFor(moment.id).length, moment.id).toBe(moment.steps?.length ?? 0);
    }
  });

  it('gives every step a kind, and a trigger to every step she or a recipient plays', () => {
    for (const moment of seed.moments) {
      for (const entry of stepsFor(moment.id)) {
        expect(['own', 'edit', 'send', 'answer', 'arrival', 'clock']).toContain(entry.kind);
        if (['own', 'edit', 'send', 'answer'].includes(entry.kind)) expect(entry.trigger, moment.id).toBeTruthy();
      }
    }
  });

  it('never writes to her calendar (AGENTS.md rule 4)', () => {
    for (const moment of seed.moments) {
      for (const entry of moment.steps ?? []) expect(Object.keys(entry.set ?? {})).not.toContain('calendar');
    }
  });
});

describe('playing steps', () => {
  it('plays a tap\'s step only when it is the next one', () => {
    const session = at('C-02');
    expect(play(session, step('answer:req-edward-thu')).played).toBe(0);
    expect(play(session, step('send:req-edward-thu')).played).toBe(1);
    expect(play(session, step('send:req-edward-thu'), step('send:req-edward-thu')).played).toBe(1);
  });

  it('plays from Play the next step only a step with no tap of hers', () => {
    expect(play(at('C-02'), next).played).toBe(0);
    // A request's answer plays from the recipient's "Yes, I can", not from the presenter.
    expect(play(at('C-02'), step('send:req-edward-thu'), next).played).toBe(1);
    expect(play(at('C-02'), step('send:req-edward-thu'), step('answer:req-edward-thu')).played).toBe(2);
    // The share from WhatsApp in C-01 plays from the presenter, with "Sent to the coach", and returns
    // her to the Coach tab.
    const shared = play(at('C-01'), { type: 'OPEN_TAB', tab: 'today' }, { type: 'OPEN_SWITCHER' }, next);
    expect(shared).toMatchObject({ played: 1, tab: 'coach', switcherOpen: false, arrival: { text: 'Sent to the coach' } });
  });

  it('keeps Undo only after her own change, never after a send or anyone else\'s step', () => {
    expect(play(at('C-08b'), step('add-to-item:fri-checkup-mallory')).playedFrom).toBe(0);
    expect(play(at('C-02'), step('send:req-edward-thu')).playedFrom).toBeNull();
    expect(play(at('C-05'), step('post:cedar-grove-parents'), next).playedFrom).toBeNull();
  });

  it('raises the notification the fixtures write for each arrival', () => {
    expect(play(at('C-02'), step('send:req-edward-thu'), step('answer:req-edward-thu')).arrival.text)
      .toBe('Edward: yes to both pickups this Thursday.');
    expect(play(at('C-05'), step('post:cedar-grove-parents'), next).arrival.text)
      .toBe('Jenna Okafor replied to your post in Cedar Grove parents.');
    expect(play(at('C-06c'), step('send-chat:chat-claire'), next).arrival.text)
      .toBe("Claire: Yes, see you at 6:30. I'll bring dessert.");
    // The fixtures write no line for Edward's message in C-05c, so it arrives without one.
    expect(notificationFor(seed, stepsFor('C-05c')[2])).toBeNull();
  });

  it('leaves nothing behind after a jump', () => {
    const played = play(at('C-02'), step('send:req-edward-thu'), step('answer:req-edward-thu'));
    expect(play(played, { type: 'JUMP', momentId: 'C-02' })).toMatchObject({ played: 0, arrival: null, playedFrom: null });
  });
});

describe('a day that gains a conflict opens by itself (spec §8, G51)', () => {
  const day = (view, key) => [...view.days, ...view.nextWeek.days].find((entry) => entry.key === key);

  it('opens Thursday when yoga runs into Mallory\'s pickup in C-01, and keeps Wednesday closed with its dot', () => {
    const before = gamePlanView({ seed, momentId: 'C-01', played: 1 });
    const after = gamePlanView({ seed, momentId: 'C-01', played: 2 });
    expect(day(before, '0.thu').open).toBe(false);
    expect(day(after, '0.thu').open).toBe(true);
    // Wednesday's carpool only needs an owner, so Wednesday keeps its dot and stays closed.
    expect(day(after, '0.wed')).toMatchObject({ open: false, dot: true });
  });

  it('opens next Friday when the harvest fair runs into tutoring in C-09', () => {
    const before = gamePlanView({ seed, momentId: 'C-09', played: 0 });
    const after = gamePlanView({ seed, momentId: 'C-09', played: 1 });
    expect(day(before, '1.fri').open).toBe(false);
    expect(day(after, '1.fri').open).toBe(true);
  });
});

describe('working the game plan (spec §8)', () => {
  it('shows a note she saves before the moment\'s step plays, and plays it once both notes are in (C-04)', () => {
    const notes = { 'fri-tutoring-mallory': 'Tell Ms. Reyes Tuesdays at 3:00 work from next week.' };
    const friday = gamePlanView({ seed, momentId: 'C-04', played: 2, notes }).days.find((day) => day.key === '0.fri');
    expect(friday.rows.find((row) => row.id === 'fri-tutoring-mallory').note).toBe(notes['fri-tutoring-mallory']);
    const trigger = stepsFor('C-04')[2].trigger;
    expect(trigger).toBe('notes:fri-tutoring-mallory+fri-picture-day-mallory');
    expect(play(at('C-04'), step('review-add:tue-tutoring-second'), step('move:tue-tutoring-second'), step(trigger)).played).toBe(3);
  });

  it('offers the days of this week and next in the move picker, said from today (C-04)', () => {
    const view = itemPageView({ seed, momentId: 'C-04', played: 1, itemId: 'tue-tutoring-second' });
    expect(view.move.days[0]).toEqual({ key: '0.mon', label: 'Today' });
    expect(view.move.days.find((day) => day.key === '1.tue').label).toBe('Next Tuesday, Oct. 20');
    expect(view.move).toMatchObject({ day: '0.tue', time: '15:00', save: 'Save' });
  });

  it('shows "Change this in Google Calendar." on a calendar item, never a way to move it (AGENTS.md rule 4)', () => {
    const view = itemPageView({ seed, momentId: 'C-06b', itemId: 'fri-checkup-mallory' });
    expect(view.move).toEqual({ calendar: 'Change this in Google Calendar.' });
  });

  it('raises the read-back strip on the game plan after the pumpkin in C-09, with no button', () => {
    const strip = gamePlanView({ seed, momentId: 'C-09', played: 3 }).readBackStrip;
    expect(strip).toEqual({ label: 'MVP Coach · for next Friday, Oct. 23', text: "A small pumpkin is on Mallory's list for the harvest fair next Friday, Oct. 23." });
    expect(gamePlanView({ seed, momentId: 'C-09', played: 2 }).readBackStrip).toBeNull();
  });
});
