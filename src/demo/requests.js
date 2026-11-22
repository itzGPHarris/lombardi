// Requests (spec §9): the draft she sends, and the recipient's side that View as shows (§15). Pure
// functions only, reading the moment's state from the seed with the steps that have played.
import { datelineParts, formatDateline, formatTime } from './calendar.js';
import { fillDates, relativeDay } from './dateTokens.js';
import { fill } from './today.js';
import { momentAt } from './tabs.js';
import { stepsFor } from './steps.js';
import * as words from '../copy/requests.js';

const capitalize = (text) => text.replace(/^\w/, (letter) => letter.toUpperCase());
const sameDay = (a, b) => a.week === b.week && a.day === b.day;

// Each item on a request: the day said from when it is read, such as "This Thursday", then the item in
// the words the fixtures give it. A child the words don't name, such as Mallory beside "Tutoring with
// Ms. Reyes", is drawn as a chip, as the frames draw it (fixtures section 4, "Each item on a request").
function itemRows(seed, request, find, now) {
  return (request.items ?? []).map(({ item: itemId, label }) => {
    const item = find.item(itemId) ?? seed.planItems.find((entry) => entry.id === itemId);
    const chips = (item?.children ?? []).filter((childId) => {
      const child = seed.children.find((entry) => entry.id === childId);
      return child && !label.includes(child.name);
    });
    return { id: itemId, day: item ? capitalize(relativeDay(item.time, now, seed.meta.demoWeekStart)) : null, chips, label };
  });
}

// The draft (spec §9, "The draft screen"; frames 2853:15379, 2853:15394, 2853:15411, 2853:15426 and
// 2853:15905): the address line, her text in an editable field, a preview of the recipient's buttons
// for a request in MVP or by text, and Send or "Send from" the app it is handed to.
export function draftView({ seed, momentId, played = 0, requestId }) {
  const request = seed.requests.find((entry) => entry.id === requestId);
  if (!request) return null;
  const { now, find, anchor } = momentAt(seed, momentId, played);
  const person = request.to ? seed.people.find((entry) => entry.id === request.to) : null;
  const handoff = request.channel === 'handoff';
  const addressee = handoff ? [request.toName, request.contact].filter(Boolean).join(' · ') : person?.name;
  const rows = handoff ? [] : itemRows(seed, request, find, now);
  return {
    id: request.id,
    to: fill(words.to, { person: addressee }),
    text: fillDates(request.text, { demoWeekStart: anchor, now }),
    answers: handoff ? null : {
      line: fill(rows.length > 1 ? words.answersEach : words.answersOne, { person: person?.shortName ?? person?.name }),
      rows,
      yes: words.yesICan,
      no: words.noICant,
    },
    send: handoff ? fill(words.sendFrom, { app: request.app }) : words.send,
  };
}

// When she sent a request: written in the seed, or the step that sent it in this moment.
function sentAt(seed, moment, played, request) {
  if (request.sent) return request.sent;
  const steps = (moment.steps ?? []).slice(0, played);
  return steps.find((step) => step.set?.requests?.[request.id]?.state === 'sent')?.at ?? null;
}

function sentLine(time, now, anchor) {
  if (!time) return null;
  if (sameDay(time, now)) return fill(words.sent, { time: formatTime(time.time) });
  return fill(words.sentOnDay, { day: relativeDay(time, now, anchor), time: formatTime(time.time) });
}

// The answer step that plays from the recipient's side in this moment, if it is the next step, with
// the answers it scripts, so the card knows which taps play it and which note to fill in.
function scriptedAnswer(seed, moment, played, requestId) {
  const next = stepsFor(moment.id)[played];
  if (next?.trigger !== `answer:${requestId}`) return null;
  return moment.steps[played].set.requests[requestId].answers;
}

// Edward changing his answer in C-06 (frame 2853:13559): his answer reached her at 11:40am, before the
// moment starts, so his card opens on the change with his note, and Send answer shows his card after
// it without playing a step.
const opensChanging = { 'C-06': { request: 'req-edward-thu', item: 'thu-pickup-mallory' } };

function requestCard(seed, moment, played, entry, ctx) {
  const request = seed.requests.find((item) => item.id === entry.id);
  const { now, find, anchor } = ctx;
  const answers = entry.answers ?? [];
  const rows = itemRows(seed, request, find, now).map((row) => {
    const answer = answers.find((item) => item.item === row.id);
    return { ...row, answer: answer ? (answer.answer === 'yes' ? words.yesICan : words.noICant) : null };
  });
  const note = answers.find((item) => item.note)?.note ?? null;
  const changing = opensChanging[moment.id]?.request === request.id ? opensChanging[moment.id] : null;
  const scripted = scriptedAnswer(seed, moment, played, request.id);
  return {
    id: request.id,
    heading: fillDates(request.heading, { demoWeekStart: anchor, now }),
    sent: sentLine(sentAt(seed, moment, played, request), now, anchor),
    text: fillDates(request.text, { demoWeekStart: anchor, now }),
    rows,
    answered: rows.every((row) => row.answer),
    yourNote: note ? `${words.yourNote} ${note}` : null,
    changing: changing && {
      item: changing.item,
      note,
      // After he sends it, his card shows the "can't" with the note, as the moment holds it.
    },
    scripted: scripted && {
      items: scripted.map((item) => item.item),
      note: scripted.find((item) => item.note)?.note ?? null,
    },
    words: {
      yes: words.yesICan,
      no: words.noICant,
      change: words.change,
      addNote: fill(words.addNoteFor, { person: seed.people.find((person) => person.group === 'parent')?.name }),
      sendAnswer: words.sendAnswer,
      after: request.channel === 'text-link' ? words.afterAnsweringWeb : words.afterAnswering,
      noMvpNeeded: request.channel === 'text-link' ? words.noMvpNeeded : null,
    },
  };
}

// What a request needs from its recipient now: one with an item still unanswered, or one sent or
// answered today, so his Today shows what is in front of him and not last week's answers.
function current(entry, request, moment, played, seed, now) {
  if (!request || entry.state === 'draft' || !entry.state) return false;
  const answers = entry.answers ?? [];
  if ((request.items ?? []).some(({ item }) => !answers.some((answer) => answer.item === item))) return true;
  const last = [sentAt(seed, moment, played, request), ...answers.map((answer) => answer.at)].filter(Boolean);
  return last.some((time) => sameDay(time, now));
}

// The recipient's side through View as (spec §9, "The recipient's view"; frames 2853:13508,
// 2853:13527, 2853:13541, 2853:13559, 2853:13578, 2853:13596, 2853:13601 and 2853:13611). Someone with
// MVP sees their own Today: their monogram, the dateline and the request cards Charlotte has sent them.
// Someone without MVP sees the text message with its link, then the web page.
export function recipientView({ seed, momentId, played = 0, personId }) {
  const { moment, state, now, find, anchor } = momentAt(seed, momentId, played);
  const person = seed.people.find((entry) => entry.id === personId);
  if (!person) return null;
  const ctx = { now, find, anchor };
  const cards = (state.requests ?? [])
    .map((entry) => ({ entry, request: seed.requests.find((item) => item.id === entry.id) }))
    .filter(({ entry, request }) => request?.to === personId && current(entry, request, moment, played, seed, now))
    .map(({ entry }) => requestCard(seed, moment, played, entry, ctx));
  const parts = datelineParts(now, anchor, { eveningFrom: seed.meta.eveningFrom ?? '19:00' });
  const textLink = !person.hasMVP;
  const latest = cards.at(-1);
  const latestRequest = latest && seed.requests.find((entry) => entry.id === latest.id);
  return {
    person: { id: person.id, name: person.name, initial: person.name[0] },
    hasMVP: person.hasMVP,
    dateline: { text: formatDateline(parts), icon: parts.icon },
    cards: textLink ? cards.slice(-1) : cards,
    // Someone without MVP: the text message and the link to the web page (fixtures C-06b).
    message: textLink && latestRequest ? {
      text: words.textMessage,
      link: latestRequest.code ? `${words.linkBase}${latestRequest.code}` : null,
    } : null,
  };
}
