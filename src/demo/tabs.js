// The view models for the tabs beside Today (Stage 5): Coach, the game plan, Team, Kids and Settings,
// with the pages each opens. Pure functions only. Each reads the moment's state from the seed, with
// the steps that have played, so every tab shows the household as it stands at that moment
// (fixtures section 2, "Every tab at every moment"). Nothing reads the clock.
import { applySteps, fill, lookups } from './today.js';
import { fillDates, relativeDay } from './dateTokens.js';
import * as coachWords from '../copy/coach.js';
import { editorial as editorialWords } from '../copy/today.js';
import { confirm, intro } from '../copy/onboarding.js';

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
