// Today's view model (spec §5): what Now, the coach card, Later today and For tomorrow show at each
// moment and step, checked against the words fixtures section 3 gives for that moment.
import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import conference from '../src/data/articles/conference.json';
import {
  applySteps, countdown, leaveSheetView, legFromClock, legStage, lookups, nextDeparture, nothingLeftLine, reminderSheetView, statusPill, todayView,
} from '../src/demo/today.js';

const articles = { conference };
const view = (momentId, played = 0, at, local) => todayView({ seed, articles, momentId, played, at, local });
const monday = (time) => ({ week: 0, day: 'mon', time });

describe('the status pill (spec §5, "A leg from start to finish")', () => {
  const leave = monday('14:15');
  it('counts down plainly while more than 15 minutes are left', () => {
    expect(statusPill({ now: monday('13:59'), leaveTime: leave, anchor: seed.meta.demoWeekStart })).toEqual({ stage: 'coming-up', text: 'in 16 min' });
  });
  it('takes the warning ink from 15 minutes before', () => {
    expect(statusPill({ now: monday('14:00'), leaveTime: leave })).toEqual({ stage: 'getting-close', text: 'in 15 min' });
    expect(statusPill({ now: monday('14:14'), leaveTime: leave })).toEqual({ stage: 'getting-close', text: 'in 1 min' });
  });
  it('reads Time to leave from the leaving time, and Running late from five minutes after it', () => {
    expect(statusPill({ now: monday('14:15'), leaveTime: leave }).text).toBe('Time to leave');
    expect(statusPill({ now: monday('14:19'), leaveTime: leave }).text).toBe('Time to leave');
    expect(statusPill({ now: monday('14:20'), leaveTime: leave }).text).toBe('Running late');
    expect(legStage(monday('14:21'), leave)).toBe('running-late');
  });
  it('says hours as the fixtures do', () => {
    expect(countdown(150)).toBe('in 2 hr 30 min');
    expect(countdown(60)).toBe('in 1 hr');
    expect(countdown(35)).toBe('in 35 min');
  });
  it('names the day on a pass for a later day, and reads Needs an owner when nobody owns it', () => {
    const anchor = seed.meta.demoWeekStart;
    expect(statusPill({ now: { week: 0, day: 'wed', time: '21:10' }, leaveTime: { week: 0, day: 'thu', time: '06:55' }, anchor }).text).toBe('Tomorrow');
    expect(statusPill({ now: monday('09:00'), leaveTime: { week: 0, day: 'fri', time: '15:10' }, anchor }).text).toBe('This Friday');
    expect(statusPill({ now: monday('09:00'), leaveTime: leave, needsOwner: true, anchor }).text).toBe('Needs an owner');
  });
});

describe('Now at each moment, as fixtures section 3 shows it', () => {
  it('C-03 at 7:25am: Alexis leaves with the Parks', () => {
    const { now, dateline, laterToday, coachCard, editorial } = view('C-03');
    expect(dateline.text).toBe('Monday morning, Oct. 12');
    expect(now).toMatchObject({ title: "Alexis takes the Parks' carpool to Cedar Grove Elementary", time: '7:40am', route: ['Home', 'Cedar Grove Elementary'], opensLeaveSheet: false });
    expect(now.pill).toEqual({ stage: 'getting-close', text: 'in 15 min' });
    expect(now.fields).toEqual([{ label: 'With', value: 'The Parks' }, { label: 'Starts', value: '8:00am' }]);
    expect(now.checklist.groups[0].rows.map((row) => row.text)).toEqual(['Lunch and snack', 'Library book, due today', 'Water bottle, with lots of ice']);
    expect(now.actions.map((action) => action.label)).toEqual(['Remind me']);
    expect(coachCard.label).toBe('MVP Coach · for this Wednesday');
    expect(laterToday.rows.map((row) => `${row.time} ${row.text}`)).toEqual([
      '8:30am To Westview Kindergarten · B day', '2:30pm Pick up at Westview Kindergarten', '2:45pm Pick up at Cedar Grove Elementary', '3:30pm Brightwater Family Therapy, with Mallory',
    ]);
    expect(laterToday.rows[3].calendarMark).toBe(true);
    expect(laterToday.countLine).toBeNull();
    expect(editorial).toMatchObject({ line: 'MVP Editorial · 3 min read', reason: 'Because Cedar Grove Elementary conferences are this week.' });
  });

  it('C-03 at 7:40am: Mallory\'s departure moves up, and one thing is done', () => {
    const { now, laterToday } = view('C-03', 2);
    expect(now).toMatchObject({ title: 'Drop Mallory off at Westview Kindergarten · B day', time: '8:15am', route: ['Home', 'Westview Kindergarten'] });
    expect(now.pill.text).toBe('in 35 min');
    expect(now.fields.map((field) => `${field.label} ${field.value}`)).toEqual(['Drive 10 min', 'Arrive 8:25am', 'Starts 8:30am']);
    expect(now.actions.map((action) => action.label)).toEqual(['Remind me', 'Directions']);
    expect(laterToday.countLine).toBe('1 done this morning');
  });

  it('C-03b at 2:05pm: the first leg, its reminder gone off', () => {
    const { now, laterToday, coachCard } = view('C-03b', 1, '14:05');
    expect(now).toMatchObject({ title: 'Pick Mallory up at Westview Kindergarten', time: '2:15pm', nextStation: 'Then Cedar Grove Elementary, 2:45pm' });
    expect(now.pill.text).toBe('in 10 min');
    expect(now.fields.map((field) => `${field.label} ${field.value}`)).toEqual(['Drive 10 min', 'Arrive 2:25pm', 'Pickup 2:30pm']);
    expect(now.actions.map((action) => action.label)).toEqual(['Remind me again', 'Directions']);
    expect(laterToday.countLine).toBe('2 done today');
    expect(coachCard).toBeNull();
  });

  it('C-03b at 2:31pm: the next leg takes over, and Remind me goes', () => {
    const { now, laterToday } = view('C-03b', 2);
    expect(now).toMatchObject({ title: 'Pick Alexis up at Cedar Grove Elementary', time: '2:30pm', route: ['Westview Kindergarten', 'Cedar Grove Elementary'], checklist: null });
    expect(now.pill.text).toBe('Time to leave');
    expect(now.actions.map((action) => action.label)).toEqual(['Directions']);
    expect(laterToday.countLine).toBe('3 done today');
  });

  it('C-03b at 2:46pm: the leg to therapy, with the calendar mark on its title', () => {
    const { now, laterToday } = view('C-03b', 3);
    expect(now).toMatchObject({ title: "Alexis's therapy at Brightwater Family Therapy", titleCalendarMark: true, time: '3:05pm', nextStation: 'Then home, about 4:35pm' });
    expect(now.pill.text).toBe('in 19 min');
    expect(now.fields.map((field) => `${field.label} ${field.value}`)).toEqual(['Drive 20 min', 'Arrive 3:25pm', 'Starts 3:30pm']);
    expect(laterToday.countLine).toBe('4 done today');
  });

  it('running late at 2:21pm: Arrive shows the real arrival in the warning ink', () => {
    const { now } = view('C-03b', 1, '14:21');
    expect(now.pill.text).toBe('Running late');
    expect(now.fields[1]).toEqual({ label: 'Arrive', value: '2:31pm', late: true });
    expect(now.actions.map((action) => action.label)).toEqual(['Directions']);
  });

  it('C-06: the leg to Westview Kindergarten with her task, and the card for tomorrow', () => {
    const { now, coachCard, laterToday } = view('C-06');
    expect(now.pill.text).toBe('in 2 hr 30 min');
    expect(now.checklist.groups.map((group) => group.heading)).toEqual(['Alexis', 'Before you leave home']);
    expect(now.checklist.groups[1].rows[0]).toMatchObject({ kind: 'task', text: 'Call Brightwater Family Therapy to ask for Dana Whitfield', button: 'Call' });
    expect(coachCard).toMatchObject({ label: 'MVP Coach · for tomorrow', state: 'open', secondary: { label: 'Other options' } });
    expect(laterToday.countLine).toBe('2 done this morning');
  });

  it('C-06 after Plan B: the card keeps the thread with the plan she chose and no Undo', () => {
    const { coachCard } = view('C-06', 2);
    expect(coachCard).toMatchObject({ state: 'choice', link: null, meta: 'Game plan updated' });
    expect(coachCard.chosenText).toMatch(/^Min-jung collects Hana/);
  });

  it('C-06 after she agrees: Agreed, the next step and Undo', () => {
    const { coachCard } = view('C-06', 0, undefined, { cardAnswers: { 'cc-mallory-pickup': 'agree' } });
    expect(coachCard).toMatchObject({ state: 'agree', link: 'Undo', meta: 'Game plan updated', nextButton: { label: 'Book at Willow Yoga', external: true } });
  });

  it('C-06b: in 1 hr, and both tasks before she leaves', () => {
    const { now, coachCard, laterToday } = view('C-06b');
    expect(now.pill.text).toBe('in 1 hr');
    expect(now.checklist.groups[1].rows.map((row) => row.button)).toEqual(['Call', 'Send from Mail']);
    expect(coachCard.label).toBe('MVP Coach · for this Friday');
    expect(coachCard.text).toContain('next Tuesday, Oct. 20.');
    expect(laterToday.countLine).toBe('2 done today');
  });

  it('C-07: the evening turns to tomorrow\'s pass, with For tomorrow on the sheet', () => {
    const { now, dateline, laterToday, forTomorrow, coachCard } = view('C-07');
    expect(dateline.text).toBe('Wednesday evening, Oct. 14');
    expect(now).toMatchObject({ title: 'Take Alexis to orchestra at Cedar Grove Elementary', time: '6:55am', pill: { stage: 'plain', text: 'Tomorrow' } });
    expect(now.fields.map((field) => `${field.label} ${field.value}`)).toEqual(['Drive 12 min', 'Arrive 7:07am', 'Starts 7:15am']);
    expect(now.checklist.heading).toBe('Reminders for tomorrow morning');
    expect(now.actions.map((action) => action.label)).toEqual(['Remind me to leave home']);
    expect(forTomorrow.map((row) => `${row.time} ${row.text}`)).toEqual([
      '8:15am Leave home at 8:15am to take Mallory to Westview Kindergarten · E day',
      '3:55pm Leave home at 3:55pm to take Mallory to ballet at Studio Ten Dance',
    ]);
    expect(laterToday).toBeNull();
    expect(coachCard).toBeNull();
  });

  it('C-09: Sunday evening, the carpool tomorrow and the card for next week', () => {
    const { now, coachCard, forTomorrow } = view('C-09');
    expect(now).toMatchObject({ kind: 'with-someone', pill: { text: 'Tomorrow' }, opensLeaveSheet: false });
    expect(now.actions.map((action) => action.label)).toEqual(['Remind me']);
    expect(coachCard.label).toBe('MVP Coach · for next week');
    expect(forTomorrow[0].text).toBe('Leave home at 8:15am to take Mallory to Westview Kindergarten · A day');
  });

  it('her first board: the trip pass needs an owner, then turns to Tomorrow when she agrees', () => {
    const arrival = view('C-00').now;
    expect(arrival).toMatchObject({ kind: 'trip', title: 'Take Alexis and Mallory to school', pill: { text: 'Needs an owner' }, route: ['Home', 'Cedar Grove Elementary', 'Westview Kindergarten'] });
    expect(arrival.timetable.map((row) => `${row.time} ${row.text ?? `${row.place} · ${row.meta}`}`)).toEqual([
      '7:40am Leave home', '7:52am Cedar Grove Elementary · Drop off · Starts 8:00am', '8:10am Leave Cedar Grove Elementary',
      '8:22am Westview Kindergarten · Drop off · D day · Starts 8:30am', '8:40am Back home',
    ]);
    expect(arrival.actions).toEqual([]);
    const agreed = view('C-00', 1).now;
    expect(agreed.pill.text).toBe('Tomorrow');
    expect(agreed.actions.map((action) => action.label)).toEqual(['Remind me to leave home']);
  });

  it('her first board, ready for the morning: the reminders fold to the evening line', () => {
    const { now } = view('C-00', 2);
    expect(now.checklist).toMatchObject({ folded: true, doneLine: 'Everything is ready for tomorrow morning.' });
  });

  it('the next morning (0i-h): the top of the trip pass is the next leg, and the stops behind her are muted', () => {
    const { now } = view('C-00', 3);
    expect(now).toMatchObject({ title: 'Drop Mallory off at Westview Kindergarten', time: '8:10am', route: ['Cedar Grove Elementary', 'Westview Kindergarten'] });
    expect(now.pill.text).toBe('in 5 min');
    expect(now.timetable.map((row) => row.state)).toEqual(['behind', 'behind', 'next', 'ahead', 'ahead']);
    expect(now.actions.map((action) => action.label)).toEqual(['Directions']);
  });

  it('moments with no Today words show only what the seed gives (T72, T73)', () => {
    for (const id of ['C-01', 'C-02', 'C-04', 'C-04b', 'C-05b', 'C-05c', 'C-06c', 'C-08', 'C-08b']) {
      const shown = view(id);
      expect(shown.now, id).toBeNull();
      expect(shown.laterToday, id).toBeNull();
      expect(shown.editorial, id).toBeNull();
    }
    expect(view('C-05')).toMatchObject({ now: null, coachCard: { label: 'MVP Coach' } });
  });
});

describe('the checklist folds (spec §5, "When a checklist is finished")', () => {
  it('folds a child\'s group to its count, and the whole list to the leaving time', () => {
    const { now } = view('C-03');
    const ticks = Object.fromEntries(now.checklist.groups[0].rows.map((row) => [row.key, true]));
    const folded = view('C-03', 0, undefined, { ticks }).now.checklist;
    expect(folded.groups[0]).toMatchObject({ folded: true, foldedLine: 'Alexis · 3 packed' });
    expect(folded).toMatchObject({ folded: true, doneLine: 'Everything is packed for 7:40am' });
    const opened = view('C-03', 0, undefined, { ticks, openedChecklists: [now.checklist.key] }).now.checklist;
    expect(opened.folded).toBe(false);
    expect(opened.groups[0].folded).toBe(true);
  });

  it('counts her own tasks as done', () => {
    const { now } = view('C-06b');
    const ticks = Object.fromEntries(now.checklist.groups[1].rows.map((row) => [row.key, true]));
    expect(view('C-06b', 0, undefined, { ticks }).now.checklist.groups[1].foldedLine).toBe('Before you leave · 2 done');
  });

  it('says packed in the evening while anything for tomorrow is still open', () => {
    const { now } = view('C-07');
    const ticks = Object.fromEntries(now.checklist.groups[0].rows.map((row) => [row.key, true]));
    expect(view('C-07', 0, undefined, { ticks }).now.checklist.doneLine).toBe('Everything is packed for 6:55am');
  });
});

describe('the seed and the clock agree about the leg', () => {
  // Checked where the seed names the leg: a moment's start and each step that shows a new Now. A step
  // that changes something elsewhere, such as an answer on another person's screen, leaves Today as it
  // was, and what Today shows then is written with Stage 6's steps (see docs/issues.csv).
  it('every moment and step that names a leg names the one the clock gives', () => {
    for (const moment of seed.moments) {
      for (let played = 0; played <= (moment.steps ?? []).length; played += 1) {
        if (played > 0 && !moment.steps[played - 1].show?.today?.now?.kind) continue;
        const { state, now: clock } = applySteps(moment, played);
        const shown = state?.today?.now;
        if (shown?.kind !== 'leg' || shown.tomorrow) continue;
        const run = lookups(seed, state).run(shown.run);
        expect(legFromClock(run, clock), `${moment.id} after ${played} steps`).toBe(shown.from ?? 0);
      }
    }
  });
});

describe('when nothing timed is left today (spec §5, "What leads Now")', () => {
  it('says why the pass is for another day', () => {
    expect(nothingLeftLine({ timedToday: false })).toBe('Nothing to drive to today.');
    expect(nothingLeftLine({ timedToday: true, legsDone: true, anythingLeft: true })).toBe('Nothing else to drive to today.');
    expect(nothingLeftLine({ timedToday: true, legsDone: true, anythingLeft: false })).toBe('Nothing else today.');
  });
  it('finds her next departure on a later day', () => {
    expect(nextDeparture(seed, { week: 0, day: 'sun', time: '11:15' }).run.id).toBe('run-w1-mon-am-mallory');
  });
});

describe('the Leave sheet (spec §5, "The Leave sheet")', () => {
  const sheetAt = (draft = {}, open = null) => {
    const { find, clock } = view('C-03b', 1, '14:06');
    return leaveSheetView({ runId: 'run-mon-pm', find, clock, local: {}, draft, open });
  };

  it('draws her afternoon run as a line, as C-03b does', () => {
    const sheet = sheetAt();
    expect(sheet.heading).toBe('Leave home for Westview Kindergarten');
    expect(sheet.line).toBe('This afternoon · 3 stops');
    expect(sheet.stations.map((station) => station.leaveLabel && `${station.leaveLabel} ${station.leaveAt}`)).toEqual([
      'Leave home at 14:15', 'Leave Westview Kindergarten at 14:30', 'Leave Cedar Grove Elementary at 15:05', 'Leave Brightwater Family Therapy at 16:15', null,
    ]);
    expect(sheet.stations[3].note).toBe('Change this in Google Calendar.');
    expect(sheet.stations[4].backAround).toEqual({ label: 'Back around', time: '4:35pm' });
    expect(sheet.changed).toBe(false);
  });

  it('says where she arrives when she opens a leaving time', () => {
    expect(sheetAt({}, 0).stations[0].reach).toEqual({ text: 'You reach Westview Kindergarten at 2:25pm, five minutes before pickup.', late: false });
  });

  it('ripples a later leaving time down the line, and states every late arrival', () => {
    const sheet = sheetAt({ 0: '14:25' }, 0);
    expect(sheet.changed).toBe(true);
    expect(sheet.stations[0].reach).toEqual({ text: 'You reach Westview Kindergarten at 2:35pm, five minutes after pickup.', late: true });
    expect(sheet.stations[1].leaveAt).toBe('14:35');
    expect(sheet.stations[2].lateReach).toEqual({ text: 'You reach Cedar Grove Elementary at 2:47pm, two minutes after pickup.', late: true });
    expect(sheet.stations[2].leaveAt).toBe('15:05');
    expect(sheet.stations[4].backAround).toEqual({ label: 'Back around', time: '4:35pm' });
  });

  it('names the day and its backups for tomorrow\'s run', () => {
    const { find, clock } = view('C-06');
    const sheet = leaveSheetView({ runId: 'run-thu-yoga', find, clock, local: {} });
    expect(sheet.heading).toBe('Leave home for Willow Yoga tomorrow');
    expect(sheet.line).toBeNull();
    expect(sheet.stations[1].note).toBe("Conflict: Mallory's pickup");
    expect(sheet.stations[2].backAround).toEqual({ label: 'Back around', time: '3:25pm' });
    expect(sheet.backups.map((backup) => `${backup.prefix} ${backup.button.label}`)).toEqual(['Plan B · Ask Min-jung', 'Plan C · Skip yoga this week']);
  });
});

describe('the reminder sheet (spec §5, "Reminders and directions")', () => {
  const sheetFor = (momentId, played, at, local = {}) => {
    const shown = view(momentId, played, at, local);
    return reminderSheetView({ pass: shown.now, find: shown.find, clock: shown.clock, local });
  };
  const labels = (sheet) => sheet.choices.map((choice) => choice.label);

  it('offers the three choices when all are ahead', () => {
    const sheet = sheetFor('C-06');
    expect(sheet.heading).toBe('Remind me to leave home');
    expect(sheet.line).toBe('For 2:15pm · Westview Kindergarten');
    expect(labels(sheet)).toEqual(['At 2:00pm · 15 min before', 'At 1:45pm · 30 min before', "When it's time to leave home · at 2:15pm, with traffic checked"]);
    expect(sheet.selected).toBe('15');
  });

  it('adds five minutes before when fewer than two choices are left', () => {
    expect(labels(sheetFor('C-03b', 1, '14:05'))).toEqual(['At 2:10pm · 5 min before', "When it's time to leave home · at 2:15pm, with traffic checked"]);
  });

  it('names the family when a child leaves with someone else', () => {
    const sheet = sheetFor('C-03');
    expect(sheet.heading).toBe('Remind me');
    expect(sheet.line).toBe('For 7:40am · Alexis leaves home with the Parks');
    expect(labels(sheet)).toEqual(['At 7:35am · 5 min before', 'At 7:40am · when the Parks come']);
  });

  it('reminds her to leave the stop she is at', () => {
    const sheet = sheetFor('C-03b', 3);
    expect(sheet.heading).toBe('Remind me to leave Cedar Grove Elementary');
    expect(sheet.line).toBe('For 3:05pm · Brightwater Family Therapy');
    expect(labels(sheet)).toEqual(['At 2:50pm · 15 min before', "When it's time to leave Cedar Grove Elementary · at 3:05pm, with traffic checked"]);
    expect(view('C-03b', 3).now.actions[0].label).toBe('Remind me');
  });

  it('moves a set reminder with the leaving time, and removes it once its time has passed', () => {
    const reminders = { 'run-wed-pm:0': { set: true, at: '14:00', choice: '15' } };
    expect(view('C-06', 0, undefined, { reminders }).now.actions[0].label).toBe('Reminder at 2:00pm');
    const later = { reminders, leaveOverrides: { 'run-wed-pm': { 0: '14:25' } } };
    expect(view('C-06', 0, undefined, later).now.actions[0].label).toBe('Reminder at 2:10pm');
    const passed = { reminders, leaveOverrides: { 'run-wed-pm': { 0: '11:55' } } };
    expect(view('C-06', 0, undefined, passed).now.actions[0].label).toBe('Remind me again');
  });
});
