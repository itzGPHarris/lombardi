// Today's view model (spec §5, fixtures section 2 "Today shows today"). Pure functions only: the seed
// names which departure leads Now at each moment and step, and everything Today draws is worked out
// here from the seed, the demo time and what she has done in the session. Nothing reads the clock.
import { compareDemoTimes, datelineParts, formatDateline, formatTime, minutesBetween, minutesOf, phaseOf } from './calendar.js';
import { fillDates, relativeDay } from './dateTokens.js';
import * as words from '../copy/today.js';

// ---------------------------------------------------------------------------------------------
// Words: a template from src/copy is filled only with names from the seed or values worked out here.

export function fill(template, values) {
  return template.replace(/\{([a-z0-9]+)\}/g, (match, key) => (values[key] === undefined ? match : String(values[key])));
}

const capitalize = (text) => text.replace(/^\w/, (letter) => letter.toUpperCase());

// Small counts said in words, as the Leave sheet's "five minutes before pickup" says them.
const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
export function countInWords(count) {
  if (count <= 20) return numberWords[count];
  if (count % 5 === 0 && count <= 60) return { 25: 'twenty-five', 30: 'thirty', 35: 'thirty-five', 40: 'forty', 45: 'forty-five', 50: 'fifty', 55: 'fifty-five', 60: 'sixty' }[count];
  return String(count);
}

// ---------------------------------------------------------------------------------------------
// Demo time helpers

export function at(day, time) {
  return { week: day.week, day: day.day, time };
}

export function addMinutes(time, minutes) {
  const total = minutesOf(time) + minutes;
  const clamped = Math.max(0, Math.min(total, 24 * 60 - 1));
  return `${String(Math.floor(clamped / 60)).padStart(2, '0')}:${String(clamped % 60).padStart(2, '0')}`;
}

const sameDay = (a, b) => a.week === b.week && a.day === b.day;

// ---------------------------------------------------------------------------------------------
// The state at a moment: the moment's own state, then the steps that have played, in order
// (spec §15). A step's `set` changes the household and its `show` changes what is on screen.

function mergeOverlay(list = [], changes = {}) {
  const byId = new Map(list.map((entry) => [entry.id, entry]));
  for (const [id, change] of Object.entries(changes)) byId.set(id, { ...(byId.get(id) ?? { id }), ...change });
  return [...byId.values()];
}

function mergeToday(today = {}, show = {}) {
  const next = { ...today };
  for (const [key, value] of Object.entries(show)) {
    // A `now` that names its kind is a new departure and replaces the old one. One without a kind
    // changes the departure already on screen, such as its owner or its ticks.
    if (key === 'now' && value && today.now && !value.kind) {
      next.now = { ...today.now, ...value, checklist: value.checklist === undefined ? today.now.checklist : value.checklist && { ...today.now.checklist, ...value.checklist } };
    } else next[key] = value;
  }
  return next;
}

// A branch is a choice she makes inside a moment that the scripted path does not take, such as
// skipping the first capture (0i-d) or picking Plan B on her first board (0i-g). Its Today merges over
// the moment's Today, and its items over the plan, the same way a step's do.
export function applyBranch(moment, played, branchName) {
  const base = applySteps(moment, played);
  const branch = branchName ? moment.branches?.[branchName] : null;
  if (!branch) return base;
  let { state } = base;
  if (branch.set?.items) state = { ...state, planItems: mergeOverlay(state.planItems, branch.set.items) };
  if (branch.today) state = { ...state, today: mergeToday(state.today, branch.today) };
  return { ...base, state, now: branch.at ?? base.now };
}

export function applySteps(moment, played = 0) {
  const steps = (moment.steps ?? []).slice(0, Math.max(0, played));
  let state = moment.state ?? {};
  let now = moment.time;
  let sheet = null;
  for (const step of steps) {
    now = step.at;
    const set = step.set ?? {};
    state = {
      ...state,
      planItems: set.items ? mergeOverlay(state.planItems, set.items) : state.planItems,
      reminders: set.reminders ? mergeOverlay(state.reminders, set.reminders) : state.reminders,
      requests: set.requests ? mergeOverlay(state.requests, set.requests) : state.requests,
    };
    if (step.show?.today !== undefined) state = { ...state, today: mergeToday(state.today, step.show.today) };
    if (step.show?.sheet !== undefined) sheet = step.show.sheet;
  }
  return { state, now, sheet };
}

// ---------------------------------------------------------------------------------------------
// Lookups

export function lookups(seed, state) {
  const overlay = new Map((state.planItems ?? []).map((entry) => [entry.id, entry]));
  const items = new Map(seed.planItems.map((item) => [item.id, { ...item, ...(overlay.get(item.id) ?? {}), base: item }]));
  const reminderOverlay = new Map((state.reminders ?? []).map((entry) => [entry.id, entry]));
  return {
    anchor: seed.meta.demoWeekStart,
    item: (id) => items.get(id),
    items: [...items.values()],
    place: (id) => seed.places.find((place) => place.id === id),
    child: (id) => seed.children.find((child) => child.id === id),
    person: (id) => seed.people.find((person) => person.id === id),
    run: (id) => seed.runs.find((run) => run.id === id),
    school: (placeId) => seed.schools.find((school) => school.id === placeId),
    drive: (from, to) => seed.travel.find((leg) => (leg.from === from && leg.to === to) || (leg.from === to && leg.to === from))?.minutes,
    reminder: (target) => {
      const base = seed.reminders.find((entry) => entry.target === target);
      return base && { ...base, ...(reminderOverlay.get(base.id) ?? {}) };
    },
    coachCard: (id) => seed.coachCards.find((card) => card.id === id),
  };
}

// The letter day follows the school's name on the school run (spec §5, "Later today"): the item at
// a school with a rotation that starts when the school day does.
export function letterDay(item, find) {
  if (!item?.place || !item.time?.time) return null;
  const school = find.school(item.place);
  const letter = school?.rotation?.[String(item.time.week)]?.[item.time.day];
  if (!letter || school.startTime !== item.time.time) return null;
  return fill(words.laterToday.letterDay, { letter });
}

const withLetter = (text, letter) => (letter ? `${text} · ${letter}` : text);

// ---------------------------------------------------------------------------------------------
// The status pill (spec §5, "A leg from start to finish")

export function legStage(now, leaveTime) {
  const left = minutesBetween(now, leaveTime);
  if (left > 15) return 'coming-up';
  if (left > 0) return 'getting-close';
  if (left > -5) return 'time-to-leave';
  return 'running-late';
}

export function countdown(minutes) {
  if (minutes < 60) return fill(words.statusPill.inMinutes, { minutes });
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest ? fill(words.statusPill.inHours, { count: hours, minutes: rest }) : fill(words.statusPill.inHoursOnly, { count: hours });
}

export function statusPill({ now, leaveTime, needsOwner, anchor }) {
  if (needsOwner) return { stage: 'plain', text: words.statusPill.needsOwner };
  if (!sameDay(now, leaveTime)) return { stage: 'plain', text: capitalize(relativeDay(leaveTime, now, anchor)) };
  const stage = legStage(now, leaveTime);
  if (stage === 'time-to-leave') return { stage, text: words.statusPill.timeToLeave };
  if (stage === 'running-late') return { stage, text: words.statusPill.runningLate };
  return { stage, text: countdown(minutesBetween(now, leaveTime)) };
}

// ---------------------------------------------------------------------------------------------
// Runs

// A run with the leaving times she has changed on the Leave sheet.
export function runWith(run, overrides) {
  if (!run || !overrides) return run;
  return { ...run, stops: run.stops.map((stop, index) => (overrides[index] ? { ...stop, leaveAt: overrides[index] } : stop)) };
}

// When she reaches each stop, from the leaving time of the stop before and the drive.
export function arrivals(run, find) {
  return run.stops.map((stop, index) => {
    if (index === 0) return null;
    const before = run.stops[index - 1];
    const drive = find.drive(before.place, stop.place);
    return before.leaveAt && drive !== undefined ? addMinutes(before.leaveAt, drive) : null;
  });
}

function childrenAboard(run, index) {
  const aboard = new Set();
  run.stops.slice(0, index + 1).forEach((stop) => {
    stop.on.forEach((child) => aboard.add(child));
    stop.off.forEach((child) => aboard.delete(child));
  });
  return [...aboard];
}

// The leg the clock gives: the leg whose stop is not yet due. A leg leaves Now when its stop comes
// due, and the next leg on the run takes over from that stop.
export function legFromClock(run, now) {
  const index = run.stops.findIndex((stop, stopIndex) => stopIndex > 0 && stop.dueAt && compareDemoTimes(now, at(run.day, stop.dueAt)) < 0);
  return index > 0 ? index - 1 : null;
}

function placeName(find, id) {
  return find.place(id)?.name;
}

// ---------------------------------------------------------------------------------------------
// The checklist (spec §5, "When a checklist is finished")

export function groupKey(passKey, index) {
  return `${passKey}#${index}`;
}

function checklistView({ checklist, passKey, find, ticks, local, evening, leaveTime, now, forTomorrowOpen }) {
  if (!checklist?.groups?.length) return null;
  const seededTicks = new Set(checklist.ticked ?? []);
  const groups = checklist.groups.map((group, index) => {
    const key = groupKey(passKey, index);
    const removed = new Set(local.removed?.[key] ?? []);
    const added = local.added?.[key] ?? [];
    const rows = [...group.items.filter((entry) => typeof entry !== 'string' || !removed.has(entry)), ...added].map((entry) => {
      if (typeof entry === 'string') {
        const rowKey = `${key}:${entry}`;
        return { key: rowKey, kind: 'item', text: entry, ticked: ticks[rowKey] ?? seededTicks.has(entry) };
      }
      const task = find.item(entry.task);
      const rowKey = `${key}:${entry.task}`;
      return { key: rowKey, kind: 'task', text: task.title, contact: task.reach?.text, button: task.reach?.button, action: task.reach?.action, ticked: ticks[rowKey] ?? false };
    });
    const allTicked = rows.length > 0 && rows.every((row) => row.ticked);
    const child = group.child ? find.child(group.child) : null;
    const heading = group.own ? words.checklist.ownTasks : (child?.name ?? group.label);
    const folded = allTicked && !(local.openedGroups ?? []).includes(key);
    const foldedLine = group.own
      ? fill(words.checklist.foldedOwnTasks, { count: rows.length })
      : fill(words.checklist.foldedGroup, { child: heading, count: rows.length });
    return { key, own: !!group.own, child: child?.name, heading, rows, allTicked, folded, foldedLine };
  });
  const allTicked = groups.every((group) => group.allTicked);
  const folded = allTicked && !(local.openedChecklists ?? []).includes(passKey);
  const phase = phaseOf(leaveTime);
  const dayWord = relativeDay(leaveTime, now, find.anchor);
  const doneLine = evening && !forTomorrowOpen
    ? fill(words.checklist.foldedEveningReady, { day: dayWord, phase })
    : fill(words.checklist.foldedChecklist, { time: formatTime(leaveTime.time) });
  return {
    key: passKey,
    heading: evening ? fill(words.checklist.eveningHeading, { day: dayWord, phase }) : null,
    groups,
    allTicked,
    folded,
    doneLine,
    // Removing a repeating item asks how long for: tonight or every night in the evening, today or
    // every day during the day.
    evening,
  };
}

// ---------------------------------------------------------------------------------------------
// Now

function legPass({ now: nowState, find, clock, local }) {
  const run = runWith(find.run(nowState.run), local.leaveOverrides?.[nowState.run]);
  const from = nowState.from ?? 0;
  const stop = run.stops[from];
  const next = run.stops[from + 1];
  const leaveTime = at(run.day, stop.leaveAt);
  const item = next?.item ? find.item(next.item) : null;
  const drive = find.drive(stop.place, next.place);
  const pill = statusPill({ now: clock, leaveTime, needsOwner: nowState.needsOwner, anchor: find.anchor });
  const late = pill.stage === 'time-to-leave' || pill.stage === 'running-late';
  const arriveAt = late ? addMinutes(clock.time, drive) : addMinutes(stop.leaveAt, drive);
  const pickup = next.on.length > 0;
  const tomorrow = !sameDay(clock, leaveTime);

  let nextStation = null;
  const after = run.stops[from + 2];
  if (after && from + 2 === run.stops.length - 1 && after.place === 'home' && next.leaveAt) {
    nextStation = fill(words.pass.thenHome, { time: formatTime(addMinutes(next.leaveAt, find.drive(next.place, 'home'))) });
  } else if (after && after.dueAt) {
    nextStation = fill(words.pass.then, { place: placeName(find, after.place), time: formatTime(after.dueAt) });
  }

  // When the morning is two trips, the pass says when she leaves for the second (0i-g).
  if (nowState.then) {
    const then = find.run(nowState.then.run);
    const to = then.stops.find((entry, index) => index > 0 && entry.place !== 'home');
    nextStation = fill(words.pass.thenAt, { time: formatTime(then.stops[0].leaveAt), from: spokenPlace(find.place(then.stops[0].place)), to: placeName(find, to.place) });
  }

  const children = new Set([...childrenAboard(run, from), ...(item?.children ?? []).filter((child) => find.child(child))]);
  const conflict = item?.marks?.find((mark) => mark.kind === 'conflict');
  return {
    kind: 'leg',
    key: `leg:${run.id}:${from}:${tomorrow ? 'day' : 'today'}`,
    runId: run.id,
    reminderKey: `${run.id}:${from}`,
    leavesFrom: stop.place,
    title: nowState.title ?? (item ? withLetter(item.spoken ?? item.title, letterDay(item, find)) : null),
    titleCalendarMark: !!item?.fromCalendar,
    conflict: conflict ? `${words.pass.conflict} ${conflict.label}` : null,
    tint: children.size ? 'kid' : 'subtle',
    time: formatTime(stop.leaveAt),
    leaveTime,
    pill,
    route: [placeName(find, stop.place), placeName(find, next.place)],
    opensLeaveSheet: true,
    nextStation: tomorrow && !nowState.then ? null : nextStation,
    fields: [
      { label: words.fieldLabels.drive, value: fill(words.fieldValues.minutes, { minutes: drive }) },
      { label: words.fieldLabels.arrive, value: formatTime(arriveAt), late: !!next.dueAt && minutesOf(arriveAt) > minutesOf(next.dueAt) },
      next.dueAt && { label: pickup ? words.fieldLabels.pickup : words.fieldLabels.starts, value: formatTime(next.dueAt) },
    ].filter(Boolean),
    late,
  };
}

function withSomeonePass({ now: nowState, find, clock }) {
  const item = find.item(nowState.departure);
  const leaveTime = at(item.time, nowState.leaveAt);
  const tomorrow = !sameDay(clock, leaveTime);
  return {
    kind: 'with-someone',
    key: `with:${item.id}:${tomorrow ? 'day' : 'today'}`,
    reminderKey: item.id,
    leavesFrom: 'home',
    title: item.spoken ?? item.title,
    tint: item.children.length ? 'kid' : 'subtle',
    time: formatTime(nowState.leaveAt),
    leaveTime,
    pill: statusPill({ now: clock, leaveTime, needsOwner: nowState.needsOwner, anchor: find.anchor }),
    route: [placeName(find, 'home'), placeName(find, item.place)],
    opensLeaveSheet: false,
    nextStation: null,
    fields: [
      { label: words.fieldLabels.with, value: item.rideWith },
      { label: words.fieldLabels.starts, value: formatTime(nowState.starts) },
    ],
    family: item.rideWith,
    childName: find.child(item.children[0])?.name,
  };
}

// A trip with more than one child and more than one stop (spec §5, standing decision 21). The top of
// the pass shows the trip before it starts and the next leg once it is under way, and the timetable
// shows every departure and stop.
function tripPass({ now: nowState, find, clock, local }) {
  const run = runWith(find.run(nowState.run), local.leaveOverrides?.[nowState.run]);
  const arrive = arrivals(run, find);
  const last = run.stops.length - 1;
  const rows = [];
  run.stops.forEach((stop, index) => {
    const place = find.place(stop.place);
    if (index === 0) rows.push({ key: 'leave-0', time: stop.leaveAt, text: words.timetable.leaveHome, marker: place.kind, stop: 0 });
    else if (index === last) rows.push({ key: 'back', time: arrive[index], text: words.timetable.backHome, marker: place.kind, stop: index });
    else {
      const item = find.item(stop.item);
      const letter = letterDay(item, find);
      rows.push({
        key: `arrive-${index}`, time: arrive[index], place: place.name, marker: place.kind, stop: index,
        chips: item?.children ?? [],
        meta: [item?.stopLabel, letter, item?.time?.time && fill(words.fields.starts, { time: formatTime(item.time.time) })].filter(Boolean).join(' · '),
      });
      if (index + 1 < last) rows.push({ key: `leave-${index}`, time: stop.leaveAt, text: fill(words.timetable.leave, { place: place.name }), marker: place.kind, stop: index });
    }
  });
  const started = sameDay(clock, run.day) && compareDemoTimes(clock, at(run.day, run.stops[0].leaveAt)) >= 0;
  const nextIndex = started ? rows.findIndex((row) => row.time && compareDemoTimes(clock, at(run.day, row.time)) < 0) : 0;
  const timetable = rows.map((row, index) => ({ ...row, time: row.time && formatTime(row.time), state: index < nextIndex ? 'behind' : index === nextIndex ? 'next' : 'ahead' }));

  // Under way, the top of the pass is the next leg: the seed's `next` stop, or the one the clock gives.
  const heading = started ? (nowState.next ?? (legFromClock(run, clock) ?? 0) + 1) : null;
  if (heading) {
    const from = heading - 1;
    const stop = run.stops[from];
    const to = run.stops[heading];
    const item = find.item(to.item);
    const leaveTime = at(run.day, stop.leaveAt);
    return {
      kind: 'trip', key: `trip:${run.id}`, leg: `${run.id}:${from}`, runId: run.id, reminderKey: `${run.id}:${from}`, leavesFrom: stop.place,
      title: item ? item.spoken ?? item.title : null,
      tint: 'kid', time: formatTime(stop.leaveAt), leaveTime,
      pill: statusPill({ now: clock, leaveTime, anchor: find.anchor }),
      route: [placeName(find, stop.place), placeName(find, to.place)],
      opensLeaveSheet: true, nextStation: null, timetable,
    };
  }
  const leaveTime = at(run.day, run.stops[0].leaveAt);
  return {
    kind: 'trip', key: `trip:${run.id}`, leg: `${run.id}:start`, runId: run.id, reminderKey: `${run.id}:0`, leavesFrom: run.stops[0].place,
    title: run.title,
    tint: 'kid', time: formatTime(run.stops[0].leaveAt), leaveTime,
    pill: statusPill({ now: clock, leaveTime, needsOwner: nowState.needsOwner, anchor: find.anchor }),
    route: run.stops.slice(0, last).map((stop) => placeName(find, stop.place)),
    // The pass opens the Leave sheet for the trip, as 0i-a draws it with its chevron, even while the
    // trip needs an owner; Remind me waits until she owns it.
    opensLeaveSheet: true,
    nextStation: null,
    timetable,
  };
}

function actionsFor(pass, nowState, { find, clock, local }) {
  const list = nowState.actions ?? [];
  const reminder = movedReminder(local.reminders?.[pass.reminderKey], pass, clock) ?? seededReminder(pass, find, clock);
  const actions = [];
  for (const action of list) {
    if (action === 'directions') actions.push({ id: 'directions', label: words.actions.directions, icon: 'directions' });
    if (action === 'remind' || action === 'remind-leave-home') {
      // Remind me goes away from the leaving time, because a reminder can no longer help.
      if (pass.pill.stage === 'time-to-leave' || pass.pill.stage === 'running-late') continue;
      const base = action === 'remind-leave-home' ? words.actions.remindMeLeaveHome : words.actions.remindMe;
      if (reminder?.set && reminder.at) {
        actions.push({ id: 'remind', label: fill(words.actions.reminderAt, { time: formatTime(reminder.at) }), icon: 'reminder', active: true, reminder });
      } else {
        actions.push({ id: 'remind', label: reminder?.fired ? words.actions.remindMeAgain : base, icon: 'reminder', reminder });
      }
    }
  }
  return actions;
}

// A reminder she set keeps its offset from the leaving time, so it moves when she changes when she
// leaves on the Leave sheet. If its new time has already passed, it is removed and the button reads
// Remind me again (spec §5, "The Leave sheet").
const offsets = { 5: -5, 15: -15, 30: -30, leave: 0 };
function movedReminder(reminder, pass, clock) {
  if (!reminder?.set || !(reminder.choice in offsets)) return reminder;
  const goesOff = addMinutes(pass.leaveTime.time, offsets[reminder.choice]);
  if (compareDemoTimes(at(pass.leaveTime, goesOff), clock) <= 0) return { set: false, fired: true };
  return { ...reminder, at: goesOff };
}

// A reminder the seed has set for a run, which belongs to the run's first departure, with the time it
// goes off.
function seededReminder(pass, find, clock) {
  if (!pass.runId || pass.reminderKey !== `${pass.runId}:0`) return null;
  const reminder = find.reminder(pass.runId);
  if (!reminder) return null;
  const run = find.run(pass.runId);
  const goesOff = reminder.minutesBefore === null ? run.stops[0].leaveAt : addMinutes(run.stops[0].leaveAt, -reminder.minutesBefore);
  return { ...reminder, at: goesOff, fired: reminder.fired || (reminder.set && compareDemoTimes(clock, at(run.day, goesOff)) >= 0) };
}

export function nowView({ today, find, clock, local, forTomorrowOpen }) {
  const nowState = today?.now;
  if (!nowState) return null;
  let pass;
  if (nowState.kind === 'leg') pass = legPass({ now: nowState, find, clock, local });
  else if (nowState.kind === 'with-someone') pass = withSomeonePass({ now: nowState, find, clock });
  else if (nowState.kind === 'trip') pass = tripPass({ now: nowState, find, clock, local });
  else return null;
  const checklist = checklistView({
    checklist: nowState.checklist, passKey: pass.key, find, ticks: local.ticks ?? {}, local,
    evening: !!nowState.checklist?.evening, leaveTime: pass.leaveTime, now: clock, forTomorrowOpen,
  });
  return { ...pass, checklist, actions: actionsFor(pass, nowState, { find, clock, local }) };
}

// When nothing timed is left today (spec §5, "What leads Now"): the line above the pass says why,
// and the pass shows her next departure on a later day. No moment in the demo reaches it.
export function nothingLeftLine({ timedToday, legsDone, anythingLeft }) {
  if (!timedToday) return words.nothingLeft.nothingToDrive;
  if (legsDone && anythingLeft) return words.nothingLeft.nothingElseToDrive;
  return words.nothingLeft.nothingElse;
}

export function nextDeparture(seed, clock) {
  return [...seed.runs]
    .filter((run) => run.stops[0]?.leaveAt)
    .map((run) => ({ run, leaveTime: at(run.day, run.stops[0].leaveAt) }))
    .filter(({ leaveTime }) => compareDemoTimes(leaveTime, clock) > 0 && !sameDay(leaveTime, clock))
    .sort((a, b) => compareDemoTimes(a.leaveTime, b.leaveTime))[0] ?? null;
}

// ---------------------------------------------------------------------------------------------
// The coach card (spec §5, "The coach card")

export function coachCardLabel(card, clock, anchor) {
  if (!card.day) return words.coachCard.label;
  // A card about a whole week, such as the Sunday look-ahead (spec §5).
  if (!card.day.day) return words.coachCard.labelNextWeek;
  return fill(words.coachCard.labelFor, { day: relativeDay({ ...card.day, time: null }, clock, anchor) });
}

export function coachCardView({ today, seed, clock, local }) {
  const ref = today?.coachCard;
  if (!ref) return null;
  if (ref.id === 'coachEmptyWeek') {
    return {
      id: ref.id, state: 'open', label: words.coachCard.label, text: words.coachCard.coachEmptyWeek, asksForCapture: true,
      captureButtons: [
        { id: 'photo', label: words.coachCard.takeAPhoto, icon: 'camera' },
        { id: 'file', label: words.coachCard.attachAFile, icon: 'attach' },
        { id: 'voice', label: words.coachCard.talkOrType, icon: 'voice' },
      ],
    };
  }
  const card = seed.coachCards.find((entry) => entry.id === ref.id);
  if (!card) return null;
  const answer = local.cardAnswers?.[card.id] ?? (ref.state === 'open' ? null : ref.state);
  const dates = (text) => text && fillDates(text, { demoWeekStart: seed.meta.demoWeekStart, now: clock });
  const base = {
    id: card.id,
    label: coachCardLabel(card, clock, seed.meta.demoWeekStart),
    text: dates(card.text),
    button: card.button && { ...card.button, label: dates(card.button.label) },
    secondary: card.secondary && { ...card.secondary, label: dates(card.secondary.label) },
  };
  if (!answer) return { ...base, state: 'open' };
  const after = card.after?.[answer];
  if (!after) return { ...base, state: 'open' };
  return {
    ...base,
    state: answer === 'agree' ? 'agree' : 'choice',
    answer,
    chosenText: dates(after.chosenText),
    followUp: dates(after.text),
    nextButton: after.button && { ...after.button, label: dates(after.button.label) },
    link: after.link,
    meta: after.meta ?? null,
  };
}

// ---------------------------------------------------------------------------------------------
// Later today (spec §5, "Later today")

function owners(item, find, parentId) {
  if (!item.owner || item.owner === parentId) return null;
  const person = find.person(item.owner);
  return person ? { initial: person.name[0], name: person.name, status: item.status?.state ?? null } : null;
}

export function laterTodayView({ today, seed, find, clock }) {
  const ids = today?.laterToday;
  if (!ids) return null;
  const parentId = seed.people.find((person) => person.group === 'parent')?.id;
  const timedToday = find.items.filter((item) => item.inPlan && item.type !== 'task' && item.time?.time && sameDay(item.time, clock));
  if (!ids.length && !timedToday.length) return null;
  const listed = new Set(ids);
  const done = timedToday.filter((item) => !listed.has(item.id) && minutesOf(item.time.time) <= minutesOf(clock.time)).length;
  const rows = ids.map((id) => find.item(id)).filter(Boolean).map((item) => ({
    id: item.id,
    time: item.type === 'task' && !item.time?.time ? words.laterToday.anytime : formatTime(item.time.time),
    chips: item.children,
    calendarMark: !!item.fromCalendar,
    updated: (item.marks ?? []).some((mark) => mark.kind === 'updated'),
    text: withLetter(item.laterTodayText ?? item.title, letterDay(item, find)),
    owner: owners(item, find, parentId),
  }));
  const countLine = done ? fill(minutesOf(clock.time) < 12 * 60 ? words.laterToday.doneThisMorning : words.laterToday.doneToday, { count: done }) : null;
  return { heading: words.laterToday.heading, rows, countLine };
}

// ---------------------------------------------------------------------------------------------
// For tomorrow (spec §5, "The evening")

export function forTomorrowView({ today, find, clock, local }) {
  const rows = today?.forTomorrow;
  if (!rows?.length) return null;
  return rows.map((row) => {
    if (!row.run) {
      const item = find.item(row.item);
      return { key: `tomorrow:${item.id}`, runId: null, time: formatTime(item.time.time), chips: item.children, text: row.text, checklist: null };
    }
    const run = runWith(find.run(row.run), local.leaveOverrides?.[row.run]);
    const time = run.stops[0].leaveAt;
    const first = run.stops[1];
    const item = first?.item ? find.item(first.item) : null;
    const passKey = `tomorrow:${row.run}`;
    const checklist = checklistView({
      checklist: { groups: row.groups }, passKey, find, ticks: local.ticks ?? {}, local,
      evening: false, leaveTime: at(run.day, time), now: clock, forTomorrowOpen: true,
    });
    return { key: passKey, runId: run.id, time: formatTime(time), text: withLetter(row.text, letterDay(item, find)), checklist };
  });
}

// ---------------------------------------------------------------------------------------------
// MVP Editorial (spec §12)

export function editorialView({ today, seed, articles }) {
  const id = today?.editorial;
  if (!id) return null;
  const article = articles[id];
  const pick = seed.recommended.find((entry) => entry.article === id);
  if (!article || !pick) return null;
  return {
    id,
    line: article.readMinutes ? fill(words.editorial.line, { minutes: article.readMinutes }) : null,
    title: article.title,
    reason: pick.reason,
  };
}

// ---------------------------------------------------------------------------------------------
// Today, whole

export function todayView({ seed, articles, momentId, played = 0, at: atTime, local = {} }) {
  const moment = seed.moments.find((entry) => entry.id === momentId) ?? seed.moments[0];
  const { state, now: stepTime, sheet } = applyBranch(moment, played, local.branch);
  const clock = atTime ? { ...stepTime, time: atTime } : stepTime;
  const find = lookups(seed, state);
  const today = state.today ?? null;
  const parts = datelineParts(clock, seed.meta.demoWeekStart, { eveningFrom: seed.meta.eveningFrom ?? '19:00' });
  const evening = parts.phase === 'evening';
  const forTomorrow = forTomorrowView({ today, find, clock, local });
  const forTomorrowOpen = !!forTomorrow?.some((row) => row.checklist && !row.checklist.allTicked);
  const now = nowView({ today, find, clock, local, forTomorrowOpen });
  const coachCard = coachCardView({ today, seed, clock, local });
  return {
    clock,
    momentId: moment.id,
    dateline: { text: formatDateline(parts), icon: parts.icon, phase: parts.phase },
    now,
    coachCard,
    laterToday: evening ? null : laterTodayView({ today, seed, find, clock }),
    forTomorrow,
    editorial: editorialView({ today, seed, articles }),
    // The capture bar hides while the coach card asks for a capture (0i-d).
    captureHidden: !!coachCard?.asksForCapture,
    sheet,
    find,
    state,
  };
}

// ---------------------------------------------------------------------------------------------
// The Leave sheet (spec §5, "The Leave sheet"): her run as a line of stations, each with the time she
// leaves it. A leaving time she changes ripples down the line: each later stop's leaving time becomes
// the later of its own and the time she reaches it, so a stop she is already early for keeps its time
// (fixtures C-03b). A late arrival is stated in the warning ink and never blocked.

const spokenPlace = (place) => (place.kind === 'home' ? place.name.toLowerCase() : place.name);

export function rippleRun(run, find, changes = {}) {
  const leave = run.stops.map((stop) => stop.leaveAt ?? null);
  const reach = run.stops.map(() => null);
  for (let index = 0; index < run.stops.length; index += 1) {
    if (index > 0 && leave[index - 1]) {
      const drive = find.drive(run.stops[index - 1].place, run.stops[index].place);
      reach[index] = drive === undefined ? null : addMinutes(leave[index - 1], drive);
    }
    if (changes[index]) leave[index] = changes[index];
    else if (leave[index] && reach[index] && minutesOf(reach[index]) > minutesOf(leave[index])) leave[index] = reach[index];
  }
  return { leave, reach };
}

// The earliest she can leave a stop: never before she reaches it, and never before it is due.
export function earliestLeave(run, find, index, changes) {
  if (index === 0) return null;
  const { reach } = rippleRun(run, find, changes);
  return [reach[index], run.stops[index].dueAt].filter(Boolean).sort((a, b) => minutesOf(b) - minutesOf(a))[0] ?? null;
}

function reachLine(stop, item, place, time) {
  if (!stop.dueAt) return null;
  const difference = minutesOf(time) - minutesOf(stop.dueAt);
  const pickup = stop.on.length > 0;
  const values = { place: place.name, time: formatTime(time), count: countInWords(Math.abs(difference)), item: item?.conflictName ?? item?.stopLabel?.toLowerCase() ?? item?.title };
  if (difference === 0) return { text: fill(words.leaveSheet.youReachOnTime, values), late: false };
  const template = pickup
    ? (difference < 0 ? words.leaveSheet.youReachBeforePickup : words.leaveSheet.youReachAfterPickup)
    : (difference < 0 ? words.leaveSheet.youReachBeforeStart : words.leaveSheet.youReachAfterStart);
  return { text: fill(template, values), late: difference > 0 };
}

export function leaveSheetView({ runId, find, clock, local, draft = {}, open = null }) {
  const saved = local.leaveOverrides?.[runId] ?? {};
  const base = find.run(runId);
  const changes = { ...saved, ...draft };
  const run = runWith(base, changes);
  const { leave, reach } = rippleRun(base, find, changes);
  const last = base.stops.length - 1;
  const first = base.stops.find((stop, index) => index > 0 && stop.place !== 'home');
  const firstLeave = at(base.day, leave[0] ?? base.stops[0].leaveAt);
  const phase = phaseOf(firstLeave);
  const dayWord = relativeDay(firstLeave, clock, find.anchor);
  const from = spokenPlace(find.place(base.stops[0].place));
  const to = find.place(first.place).name;
  const tomorrow = dayWord === 'tomorrow';
  const stopCount = base.stops.filter((stop) => stop.place !== 'home').length;
  let line = null;
  if (sameDay(firstLeave, clock)) line = fill(words.leaveSheet.lineToday, { phase, count: stopCount });
  else if (!tomorrow) line = fill(words.leaveSheet.lineDay, { day: capitalize(dayWord), phase });

  const stations = base.stops.map((stop, index) => {
    const place = find.place(stop.place);
    const item = stop.item ? find.item(stop.item) : null;
    const conflict = item?.marks?.find((mark) => mark.kind === 'conflict');
    const isLast = index === last;
    const station = {
      index,
      home: place.kind === 'home',
      place: place.name,
      item: item && {
        time: item.time?.time ? formatTime(item.time.time) : null,
        chips: item.children,
        calendarMark: !!item.fromCalendar,
        text: item.stopLabel ?? item.title,
      },
      note: conflict ? `${words.pass.conflict} ${conflict.label}` : item?.fromCalendar ? words.leaveSheet.changeInCalendar : null,
      backAround: isLast && reach[index] ? { label: words.leaveSheet.backAround.replace('{time}', '').trim(), time: formatTime(reach[index]) } : null,
      leaveLabel: !isLast && leave[index] ? fill(words.leaveSheet.leaveAt, { from: spokenPlace(place) }) : null,
      leaveAt: !isLast ? leave[index] : null,
      changed: changes[index] !== undefined && changes[index] !== base.stops[index].leaveAt,
      open: open === index,
      reach: null,
    };
    return station;
  });
  // The "You reach" line: under the station she is changing, for the stop it leads to, and under any
  // later stop she would now reach after it is due.
  stations.forEach((station, index) => {
    if (index === 0) return;
    const stop = base.stops[index];
    const line = reach[index] && reachLine(stop, stop.item ? find.item(stop.item) : null, find.place(stop.place), reach[index]);
    if (!line) return;
    if (open === index - 1) stations[index - 1].reach = line;
    else if (Object.keys(draft).length && line.late) station.lateReach = line;
  });

  return {
    runId,
    heading: tomorrow ? fill(words.leaveSheet.headingDay, { from, to, day: dayWord }) : fill(words.leaveSheet.heading, { from, to }),
    line,
    changed: Object.keys(draft).some((index) => draft[index] !== (saved[index] ?? base.stops[index].leaveAt)),
    stations,
    backups: (base.backups ?? []).map((backup) => ({ ...backup, prefix: backup.label === 'B' ? words.leaveSheet.planB : words.leaveSheet.planC })),
    noMoreBackups: base.coachNoMoreBackups ?? null,
    run,
  };
}

// ---------------------------------------------------------------------------------------------
// The reminder sheet (spec §5, "Reminders and directions"): 15 minutes before, 30 minutes before and
// when it's time to leave, offering only the choices still ahead, the first preselected, and five
// minutes before when fewer than two are left. For a child leaving with someone else, the last choice
// names the family, and there is no traffic check.

const article = (group) => group?.replace(/^The /, 'the ');

export function reminderSheetView({ pass, find, clock, local }) {
  const leaveTime = pass.leaveTime;
  const key = pass.reminderKey;
  const leaveAt = leaveTime.time;
  const ahead = (time) => compareDemoTimes(at(leaveTime, time), clock) > 0;
  const withSomeone = pass.kind === 'with-someone';
  const from = spokenPlace(find.place(pass.leavesFrom));
  const choices = [
    { id: '15', at: addMinutes(leaveAt, -15), label: fill(words.reminderSheet.minutesBefore, { time: formatTime(addMinutes(leaveAt, -15)), minutes: 15 }) },
    { id: '30', at: addMinutes(leaveAt, -30), label: fill(words.reminderSheet.minutesBefore, { time: formatTime(addMinutes(leaveAt, -30)), minutes: 30 }) },
    withSomeone
      ? { id: 'leave', at: leaveAt, label: fill(words.reminderSheet.whenFamilyComes, { time: formatTime(leaveAt), group: article(pass.family) }) }
      : { id: 'leave', at: leaveAt, label: fill(words.reminderSheet.whenTimeToLeave, { from, time: formatTime(leaveAt) }) },
  ].filter((choice) => ahead(choice.at));
  if (choices.length < 2 && ahead(addMinutes(leaveAt, -5))) {
    choices.unshift({ id: '5', at: addMinutes(leaveAt, -5), label: fill(words.reminderSheet.minutesBefore, { time: formatTime(addMinutes(leaveAt, -5)), minutes: 5 }) });
  }
  const set = local.reminders?.[key];
  const destination = pass.route.at(-1);
  return {
    key,
    heading: withSomeone ? words.reminderSheet.headingWithSomeone : fill(words.reminderSheet.headingLeave, { from }),
    line: withSomeone
      ? fill(words.reminderSheet.lineWithSomeone, { time: pass.time, child: pass.childName, group: article(pass.family) })
      : fill(words.reminderSheet.line, { time: pass.time, place: destination }),
    choices,
    selected: set?.set ? set.choice : choices[0]?.id,
    isSet: !!set?.set,
  };
}
