// The view models for the tabs beside Today (Stage 5): Coach, the game plan, Team, Kids and Settings,
// with the pages each opens. Pure functions only. Each reads the moment's state from the seed, with
// the steps that have played, so every tab shows the household as it stands at that moment
// (fixtures section 2, "Every tab at every moment"). Nothing reads the clock.
import { applySteps, countInWords, fill, letterDay, lookups } from './today.js';
import { formatTime } from './calendar.js';
import { fillDates, relativeDay } from './dateTokens.js';
import * as coachWords from '../copy/coach.js';
import { editorial as editorialWords } from '../copy/today.js';
import { confirm, intro } from '../copy/onboarding.js';
import * as gamePlanWords from '../copy/gamePlan.js';
import * as requestWords from '../copy/requests.js';

const capitalize = (text) => text.replace(/^\w/, (letter) => letter.toUpperCase());
const sameDay = (a, b) => a.week === b.week && a.day === b.day;

// The household at a moment: its state after the steps that have played, the demo time, and the
// seed's lookups over it.
export function momentAt(seed, momentId, played = 0) {
  const moment = seed.moments.find((entry) => entry.id === momentId) ?? seed.moments[0];
  const { state, now } = applySteps(moment, played);
  return { moment, state, now, find: lookups(seed, state), anchor: seed.meta.demoWeekStart };
}

// A day heading in the conversation, said from today: Today, Yesterday, This Monday or Last Monday
// (fixtures section 4, "Day headings in the conversation").
export function conversationDay(time, now, anchor) {
  return capitalize(relativeDay(time, now, anchor));
}

// ---------------------------------------------------------------------------------------------
// Coach (spec §6): the conversation up to the moment, oldest at the top, under a heading for each day.

function sourceLine(capture, time, now, anchor) {
  if (!capture) return null;
  // A source named for what it is, such as "the Cedar Grove Elementary newsletter", needs no medium;
  // one named for who sent it says how it came, such as "Westview Kindergarten · email, today".
  const day = relativeDay(capture.received ?? time, now, anchor);
  const named = capture.sourceName.startsWith('the ');
  return fill(coachWords.sourceLink, { source: capture.sourceName, day: named || !capture.medium ? day : `${capture.medium}, ${day}` });
}

const onboardingOnly = new Set(['make-draft']);

function messageView(entry, { seed, articles, now, anchor, find, conversation }) {
  const text = (value) => (value ? fillDates(value, { demoWeekStart: anchor, now }) : null);
  const capture = entry.capture ? seed.captures.find((item) => item.id === entry.capture) : null;
  const base = { id: entry.id, from: entry.from, kind: entry.kind };
  if (entry.from === 'parent') {
    if (entry.kind === 'voice-note') {
      return { ...base, kind: 'voice-note', label: fill(coachWords.voiceNote, { minutes: capture?.duration }), text: `"${entry.text}"` };
    }
    if (capture?.original === 'asset:rotation-calendar') return { ...base, kind: 'photo', photo: 'rotation-calendar', alt: capture.label };
    // A message she shared from another app shows as she shared it: its author's name and words.
    if (!entry.text && capture?.text) {
      const author = find.person(capture.author)?.name ?? capture.sourceName;
      return { ...base, kind: 'shared', text: `${author}: ${capture.text}` };
    }
    return { ...base, kind: 'text', text: entry.text };
  }
  const view = { ...base, text: text(entry.text) };
  if (entry.lead) view.lead = text(entry.lead);
  if (entry.source) view.source = sourceLine(capture, entry.at, now, anchor);
  if (entry.confirm) {
    const choice = find.child(entry.confirm.chosen);
    view.confirm = {
      question: confirm[entry.confirm.kind],
      chosen: choice && fill(confirm.choice, { child: choice.name, grade: choice.gradeShort }),
    };
  }
  // In the history the welcome shows without its tick boxes and Next, which belong to onboarding
  // (fixtures C-00, "The other tabs"), and the same holds for the hand-off's button that made the
  // draft and its link back into the capture bar: both act on onboarding, which is over.
  if (entry.kind === 'taught' && entry.greeting) {
    view.greeting = fill(intro.greeting, { person: find.person(entry.greeting)?.name });
  }
  const actions = (entry.actions ?? []).filter((action) => !onboardingOnly.has(action.action));
  if (actions.length) view.actions = actions.map((action) => ({ label: action.label, action: action.action }));
  if (entry.options) {
    view.options = entry.options.map((option) => ({
      id: option.id,
      title: option.title,
      text: option.text,
      recommended: option.recommended,
      chosen: !!option.result && conversation.includes(option.result),
    }));
  }
  if (entry.basedOn) view.basedOn = entry.basedOn;
  if (entry.article && articles[entry.article]) {
    const article = articles[entry.article];
    view.article = { id: article.id, line: fill(editorialWords.line, { minutes: article.readMinutes }), title: article.title };
  }
  if (entry.addToAppointment) {
    const item = find.item(entry.addToAppointment.item);
    view.addToAppointment = { label: entry.addToAppointment.label, done: item?.note === entry.addToAppointment.note, after: entry.addToAppointment.coachAfter };
  }
  return view;
}

export function coachView({ seed, articles = {}, momentId, played = 0 }) {
  const { state, now, find, anchor } = momentAt(seed, momentId, played);
  const conversation = state.conversation ?? [];
  const days = [];
  for (const id of conversation) {
    const entry = seed.conversation.find((message) => message.id === id);
    if (!entry) continue;
    // A message without its own time belongs to the moment it arrived in.
    const time = entry.at?.day ? entry.at : now;
    let day = days.at(-1);
    if (!day || !sameDay(day.time, time)) {
      day = { time, heading: conversationDay(time, now, anchor), messages: [] };
      days.push(day);
    }
    // A photo she gave the coach shows before its read-back when the conversation holds no message
    // of hers for it, as her first capture in onboarding (fixtures C-00, "The other tabs").
    const capture = entry.from === 'coach' && entry.kind === 'read-back' && entry.capture
      ? seed.captures.find((item) => item.id === entry.capture) : null;
    const hers = conversation.some((other) => seed.conversation.find((message) => message.id === other)?.from === 'parent'
      && seed.conversation.find((message) => message.id === other)?.capture === entry.capture);
    if (capture?.medium === 'photo' && !hers) {
      day.messages.push({ id: `${entry.id}-photo`, from: 'parent', kind: 'photo', photo: capture.original, alt: capture.label });
    }
    day.messages.push(messageView(entry, { seed, articles, now, anchor, find, conversation }));
  }
  return { now, days: days.map(({ heading, messages }) => ({ heading, messages })) };
}

// ---------------------------------------------------------------------------------------------
// The game plan (spec §8; fixtures section 2, "The game plan holds the week"): the week strip, the
// review card, the days of this week with past days folded, and next week beneath them.

const dayIds = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const dayIndex = (time) => time.week * 7 + dayIds.indexOf(time.day);
const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Items in the plan the game plan draws as rows. A stop that belongs to another item's row, such
// as a child's stop on Friday's carpool, is drawn only on Today's trip pass (issue D13).
function planRows(find) {
  return find.items.filter((item) => item.inPlan && !item.partOf);
}

function ownerView(item, find, parentId) {
  const status = item.status?.state;
  const asked = status && status !== 'proposed' && item.status.person ? find.person(item.status.person) : null;
  if (asked) {
    const name = asked.shortName ?? asked.name;
    const label = { asked: requestWords.statusAsked, accepted: requestWords.statusYes, declined: requestWords.statusCant }[status];
    return { kind: 'person', initial: asked.name[0], name: asked.name, status, label: label && fill(label, { person: name }) };
  }
  if (item.owner === parentId) return { kind: 'you', label: gamePlanWords.you };
  if (!item.owner) return { kind: 'none', label: gamePlanWords.needsAnOwner };
  const person = find.person(item.owner);
  return { kind: 'person', initial: person.name[0], name: person.name, status: null, label: person.name };
}

function conflictText(mark, item, find, now, anchor) {
  const other = find.item(mark.with);
  const elsewhere = other && !(other.time.week === item.time.week && other.time.day === item.time.day);
  return elsewhere ? `${mark.label} ${relativeDay(other.time, now, anchor)}` : mark.label;
}

export function marksView(item, find, now, anchor) {
  return (item.marks ?? []).map((mark) => (mark.kind === 'conflict'
    ? { kind: 'conflict', label: gamePlanWords.conflict, other: conflictText(mark, item, find, now, anchor) }
    : { kind: 'updated', label: gamePlanWords.updated }));
}

function timeLabel(item) {
  if (item.time.time) return formatTime(item.time.time);
  return item.type === 'task' ? gamePlanWords.anytime : gamePlanWords.allDay;
}

function rowText(item, find) {
  const text = item.agendaText ?? item.title;
  const letter = item.type === 'trip' && item.children.length ? letterDay(item, find) : null;
  return letter ? `${text} · ${letter}` : text;
}

function rowView(item, ctx) {
  const { find, now, anchor, parentId } = ctx;
  const marks = marksView(item, find, now, anchor);
  const answerer = item.status?.person ? find.person(item.status.person) : null;
  const quiet = item.kind === 'routine' && !item.status && !marks.length && !item.note && !item.answerNote;
  return {
    id: item.id,
    time: timeLabel(item),
    chips: item.children,
    calendarMark: !!item.fromCalendar,
    text: rowText(item, find),
    quiet,
    marks,
    note: item.note ?? null,
    answerNote: item.answerNote && answerer ? `${answerer.shortName ?? answerer.name}: ${item.answerNote}` : null,
    owner: ownerView(item, find, parentId),
  };
}

// Earlier first: all-day items, then the day in time order, then anytime tasks.
function byTime(a, b) {
  const rank = (item) => (item.time.time ? 1 : item.type === 'task' ? 2 : 0);
  return rank(a) - rank(b) || (a.time.time ?? '').localeCompare(b.time.time ?? '');
}

// Something on a day that needs her decision puts the dot under it: an item nobody owns, a "can't",
// a conflict, or something waiting for her on the review card (spec §8, "Week strip").
function needsHer(item) {
  return (!item.owner && !item.status) || item.status?.state === 'declined' || (item.marks ?? []).some((mark) => mark.kind === 'conflict');
}

// A day opens expanded by itself when it holds a "can't" or a conflict (fixtures C-06b), as today
// and tomorrow always do. An item that needs an owner marks the day with the dot and leaves it
// closed (fixtures C-04, Saturday).
function opensItself(item) {
  return item.status?.state === 'declined' || (item.marks ?? []).some((mark) => mark.kind === 'conflict');
}

function countLabel(count) {
  return count === 1 ? gamePlanWords.oneItem : fill(gamePlanWords.items, { count });
}

function dayHeading(time, now) {
  const offset = dayIndex(time) - dayIndex(now);
  if (offset === 0) return gamePlanWords.today;
  if (offset === 1 && time.week === now.week) return gamePlanWords.tomorrow;
  return weekdayNames[dayIds.indexOf(time.day)];
}

function dayView(week, day, items, review, ctx, { thin }) {
  const { now } = ctx;
  const time = { week, day, time: null };
  const offset = dayIndex(time) - dayIndex(now);
  const rows = items.filter((item) => item.time.week === week && item.time.day === day).sort(byTime);
  const waiting = review.some((item) => item.time.week === week && item.time.day === day);
  const key = `${week}.${day}`;
  const base = {
    key,
    time,
    heading: dayHeading(time, now),
    dot: waiting || rows.some(needsHer),
  };
  if (offset === 0) {
    // A timed item is done once its time has passed, and a task once she has ticked it.
    const done = rows.filter((item) => (item.type === 'task' ? item.done : item.time.time && item.time.time <= now.time));
    const left = rows.filter((item) => !done.includes(item));
    if (!left.length && done.length) {
      return { ...base, folded: true, count: fill(gamePlanWords.done, { count: done.length }), label: fill(gamePlanWords.todayDone, { count: done.length }), open: false, rows: done.map((item) => rowView(item, ctx)) };
    }
    return { ...base, open: true, count: done.length ? fill(gamePlanWords.done, { count: done.length }) : countLabel(left.length), rows: left.map((item) => rowView(item, ctx)) };
  }
  if (!rows.length) {
    return { ...base, empty: true, open: false, count: null, emptyText: gamePlanWords.nothingPlanned, emptyLine: thin ? gamePlanWords.emptyDayLine : null, rows: [] };
  }
  return {
    ...base,
    open: (offset === 1 && week === now.week) || rows.some(opensItself),
    count: countLabel(rows.length),
    rows: rows.map((item) => rowView(item, ctx)),
  };
}

function reviewCardView(review, ctx) {
  if (!review.length) return null;
  const { find, now, anchor } = ctx;
  const days = [];
  for (const item of [...review].sort((a, b) => dayIndex(a.time) - dayIndex(b.time) || byTime(a, b))) {
    let day = days.at(-1);
    if (!day || dayIndex(day.time) !== dayIndex(item.time)) {
      day = { time: item.time, label: fill(gamePlanWords.reviewDay, { day: relativeDay(item.time, now, anchor) }), items: [] };
      days.push(day);
    }
    const text = item.time.time ? `${rowText(item, find)}, ${formatTime(item.time.time)}` : rowText(item, find);
    day.items.push({ id: item.id, chips: item.children, calendarMark: !!item.fromCalendar, text, marks: marksView(item, find, now, anchor) });
  }
  const count = review.length;
  return {
    heading: count === 1 ? gamePlanWords.reviewOne : fill(gamePlanWords.reviewMany, { count: capitalize(countInWords(count)) }),
    days: days.map(({ label, items }) => ({ label, items })),
    addAll: count > 1 ? gamePlanWords.addThemAll : null,
  };
}

export function gamePlanView({ seed, momentId, played = 0, opened = [] }) {
  const { state, now, find, anchor } = momentAt(seed, momentId, played);
  const parentId = seed.people.find((person) => person.group === 'parent')?.id;
  const ctx = { find, now, anchor, parentId };
  // Opening an item clears its Updated mark (spec §8, "Behavior notes").
  const items = planRows(find).map((item) => (opened.includes(item.id)
    ? { ...item, marks: (item.marks ?? []).filter((mark) => mark.kind !== 'updated') } : item));
  const review = (state.reviewCard ?? []).map((id) => find.item(id)).filter(Boolean);
  const todayIndex = dayIds.indexOf(now.day);
  // On Sunday, once nothing is left this week, the agenda opens at next week and the review card
  // counts next week (spec §8, "Review card"; fixtures C-09).
  const leftThisWeek = items.some((item) => item.time.week === now.week && dayIndex(item.time) >= dayIndex(now)
    && (dayIndex(item.time) > dayIndex(now) || !item.time.time || item.time.time > now.time));
  const weekOver = now.day === 'sun' && !leftThisWeek;
  const thisWeek = items.filter((item) => item.time.week === now.week);
  const thin = !thisWeek.some((item) => item.kind === 'this-week');
  const cardWeek = weekOver ? now.week + 1 : now.week;
  const cardItems = review.filter((item) => item.time.week === cardWeek);
  const nextWaiting = review.filter((item) => item.time.week === now.week + 1 && !weekOver);

  const pastDays = weekOver ? dayIds : dayIds.slice(0, todayIndex);
  const past = thisWeek.filter((item) => pastDays.includes(item.time.day));
  const days = weekOver ? [] : dayIds.slice(todayIndex).map((day) => dayView(now.week, day, items, review, ctx, { thin }));
  const nextWeekDays = dayIds.map((day) => {
    const view = dayView(now.week + 1, day, items, review, ctx, { thin: false });
    // Under the Next week heading the days read Monday to Sunday, and Monday opens when it is tomorrow.
    return { ...view, heading: weekdayNames[dayIds.indexOf(day)], open: view.open || (weekOver && day === 'mon') };
  });
  const stripWeek = weekOver ? now.week + 1 : now.week;
  const allDays = [...days, ...nextWeekDays];
  return {
    now,
    reviewCard: reviewCardView(cardItems, ctx),
    strip: {
      label: weekOver ? gamePlanWords.nextWeek : null,
      days: dayIds.map((day, index) => {
        const view = allDays.find((entry) => entry.key === `${stripWeek}.${day}`);
        return {
          key: `${stripWeek}.${day}`,
          letter: gamePlanWords.weekStrip[index],
          today: stripWeek === now.week && day === now.day,
          past: stripWeek === now.week && index < todayIndex,
          dot: !!view?.dot,
        };
      }),
    },
    past: past.length ? {
      label: fill(gamePlanWords.earlierThisWeek, { count: past.length }),
      // Drawn as a day's heading: the words before the count, then the count.
      heading: gamePlanWords.earlierThisWeek.split(' · ')[0],
      count: fill(gamePlanWords.done, { count: past.length }),
      days: pastDays.map((day) => {
        const rows = past.filter((item) => item.time.day === day).sort(byTime);
        return { key: `${now.week}.${day}`, heading: weekdayNames[dayIds.indexOf(day)], count: countLabel(rows.length), rows: rows.map((item) => rowView(item, ctx)) };
      }).filter((day) => day.rows.length),
    } : null,
    days,
    nextWeek: {
      heading: gamePlanWords.nextWeek,
      open: weekOver,
      sentence: nextWaiting.length ? (nextWaiting.length === 1 ? gamePlanWords.reviewOne : fill(gamePlanWords.reviewMany, { count: capitalize(countInWords(nextWaiting.length)) })) : null,
      days: nextWeekDays,
    },
  };
}

// ---------------------------------------------------------------------------------------------
// An item's page (spec §8, "Item page"; fixtures section 3, "Item pages in the demo"): the item and
// its day, time and place, then Owner, Note, the source, Backup plans and the way to move it. A part
// with nothing in it is left out.

function itemSource(item, find, now, anchor, seed) {
  const [source] = item.source ?? [];
  if (!source || source === 'you') return gamePlanWords.fromYou;
  if (source === 'calendar') return gamePlanWords.fromCalendar;
  const capture = seed.captures.find((entry) => entry.id === source);
  if (!capture) return null;
  if (!capture.received?.day) {
    return fill(coachWords.sourceLink, { source: capture.sourceName, day: `${capture.medium}, ${gamePlanWords.lastWeek}` });
  }
  return sourceLine(capture, capture.received, now, anchor);
}

// The coach's backups for an item: the run it is a stop on, or the run of the item it conflicts
// with, while the decision is still open. The recommendation is the coach's sentence on the card for
// that run, with the card's button (spec §8: the same seed data as the Leave sheet).
function backupsFor(item, ctx, seed) {
  const { find, now, anchor } = ctx;
  const open = item.status?.state === 'declined' || (item.marks ?? []).some((mark) => mark.kind === 'conflict');
  if (!open) return null;
  const related = [item.id, ...(item.marks ?? []).filter((mark) => mark.kind === 'conflict').map((mark) => mark.with)];
  const run = seed.runs.find((entry) => entry.backups?.length && entry.stops.some((stop) => related.includes(stop.item)));
  if (!run) return null;
  const card = seed.coachCards.find((entry) => entry.secondary?.action === `open-leave-sheet:${run.id}`);
  const dates = (text) => (text ? fillDates(text, { demoWeekStart: anchor, now }) : text);
  // The card ends with the coach's recommendation, its sentence beginning "I'd".
  const text = card ? dates(card.text) : '';
  const recommendation = text.includes("I'd") ? text.slice(text.indexOf("I'd")) : null;
  return {
    recommendation: recommendation && { text: recommendation, button: card.button && { label: dates(card.button.label), line: card.button.line ?? null } },
    plans: run.backups.map((backup) => ({ label: `Plan ${backup.label} · ${dates(backup.coachLine)}`, button: { label: dates(backup.button.label) } })),
    noMore: dates(run.coachNoMoreBackups) ?? null,
    find,
  };
}

export function itemPageView({ seed, momentId, played = 0, itemId, opened = [] }) {
  const { now, find, anchor } = momentAt(seed, momentId, played);
  const parentId = seed.people.find((person) => person.group === 'parent')?.id;
  const ctx = { find, now, anchor, parentId };
  const found = find.item(itemId);
  if (!found) return null;
  const item = opened.includes(itemId) ? { ...found, marks: (found.marks ?? []).filter((mark) => mark.kind !== 'updated') } : found;
  const suggested = item.status?.state === 'proposed' && !item.inPlan;
  const place = item.place && item.place !== 'home' ? find.place(item.place)?.name : null;
  const when = [capitalize(relativeDay(item.time, now, anchor)), timeLabel(item), place].filter(Boolean).join(' · ');
  const owner = suggested ? { kind: 'none', label: gamePlanWords.needsAnOwner } : ownerView(item, find, parentId);
  const answerer = item.status?.person ? find.person(item.status.person) : null;
  const backups = backupsFor(item, ctx, seed);
  return {
    id: item.id,
    chips: item.children,
    calendarMark: !!item.fromCalendar,
    title: item.title,
    when,
    marks: marksView(item, find, now, anchor),
    suggested: suggested ? { label: gamePlanWords.suggested, add: gamePlanWords.addToTheGamePlan, dismiss: gamePlanWords.noThanks } : null,
    owner: {
      heading: gamePlanWords.owner,
      ...owner,
      // She can ask for help with anything not already asked of someone or answered.
      askForHelp: !suggested && owner.kind !== 'person' ? gamePlanWords.askForHelp : null,
    },
    answerNote: item.answerNote && answerer ? `${answerer.shortName ?? answerer.name}: ${item.answerNote}` : null,
    note: suggested ? null : { heading: gamePlanWords.note, text: item.note ?? null, placeholder: gamePlanWords.addANote },
    source: itemSource(item, find, now, anchor, seed),
    backups: backups && { heading: gamePlanWords.backupPlans, recommendation: backups.recommendation, plans: backups.plans, noMore: backups.noMore },
    move: item.fromCalendar ? { calendar: gamePlanWords.changeInCalendar } : { label: gamePlanWords.moveToAnotherDate },
    takeOut: item.fromCalendar && item.kind === 'this-week' ? gamePlanWords.takeOut : null,
  };
}

// Ask for help (fixtures C-04, the library run): everyone who can receive a request, her circle
// first. Dr. Ortiz and Karen Moss are left out, because MVP holds only their practices' numbers.
export function askForHelpView({ seed, momentId, played = 0, itemId }) {
  const { now, find, anchor } = momentAt(seed, momentId, played);
  const item = find.item(itemId);
  if (!item) return null;
  const reachable = seed.people.filter((person) => person.group !== 'parent' && (person.hasMVP || person.contact?.kind === 'mobile'));
  const row = (person) => ({ id: person.id, name: person.name, initial: person.name[0], line: person.line, onMvp: person.hasMVP ? gamePlanWords.onMvp : null });
  const day = relativeDay(item.time, now, anchor);
  return {
    heading: gamePlanWords.askForHelp,
    line: item.time.time ? `${item.title} · ${day}, ${formatTime(item.time.time)}` : `${item.title} · ${day}`,
    groups: [
      { heading: gamePlanWords.circle, people: reachable.filter((person) => person.group === 'circle').map(row) },
      { heading: gamePlanWords.people, people: reachable.filter((person) => person.group === 'people').map(row) },
    ],
    next: gamePlanWords.next,
  };
}
