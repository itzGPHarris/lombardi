// How each scripted step plays (spec §15). A moment's steps, written in the seed, play in order as the
// presenter taps. This table says, for each step, which tap plays it and what kind of step it is:
//
// - own: her change to her own plan from the coach card or the Coach tab. Undo plays it back while
//   the card keeps the thread.
// - edit: her direct edit in the game plan. No Undo, because a change she makes herself she changes
//   back herself (spec §8).
// - send: she taps Send, Post or "Send from" on a draft. Never undone, because it has gone (§9).
// - answer: a request's answer, played from the recipient's "Yes, I can" in View as (§9, §15).
// - arrival: a step with no tap of hers, such as a reply arriving or the share from WhatsApp in C-01.
//   It plays from Play the next step in the household switcher, never on a timer (issue C80).
// - clock: the demo clock moving on, such as a stop coming due. It plays from Play the next step too.
//
// A tap plays its step only when that step is the next one, so a tap out of order changes nothing.
// The triggers are identifiers kept in code, so the seed and its schema gain no keys.
//
// notify names what she hears when the step plays: the notification the fixtures write for an answer
// or a message, the line for a reply in a group, or "Sent to the coach" after the share (§7, §9, §10).
// Where the fixtures write no line, such as Min-jung's yes in C-06 or Edward's message in C-05c, the
// step plays with no notification (docs/issues.csv).

import { sentToTheCoach } from '../copy/coach.js';
import { notificationYes } from '../copy/requests.js';
import { messageNotifications, repliedToYourPost } from '../copy/team.js';

const table = {
  'C-00': [
    { kind: 'own', trigger: 'card:cc-first-board' },
    { kind: 'clock', trigger: 'checklist-folded' },
    { kind: 'clock' },
  ],
  'C-01': [
    // The share from WhatsApp: "Sent to the coach", and she is back on the Coach tab.
    { kind: 'arrival', notify: { copy: 'sentToTheCoach' }, tab: 'coach' },
    { kind: 'own', trigger: 'voice:coach' },
    { kind: 'own', trigger: 'option:c01-options:edward-both' },
  ],
  'C-02': [
    { kind: 'send', trigger: 'send:req-edward-thu' },
    { kind: 'answer', trigger: 'answer:req-edward-thu', notify: { request: 'req-edward-thu' } },
  ],
  'C-03': [
    { kind: 'send', trigger: 'send:wa-carpool-yes' },
    { kind: 'clock' },
  ],
  'C-03a': [
    { kind: 'own', trigger: 'capture:today' },
    // The coach card holds "Reading your photo…" for two seconds, as on 0r (fixtures C-03a).
    { kind: 'clock', trigger: 'read:cc-flyer' },
    { kind: 'own', trigger: 'card:cc-flyer' },
  ],
  'C-03b': [{ kind: 'clock' }, { kind: 'clock' }, { kind: 'clock' }],
  'C-04': [
    { kind: 'edit', trigger: 'review-add:tue-tutoring-second' },
    { kind: 'edit', trigger: 'move:tue-tutoring-second' },
    // Her two notes. Each shows as soon as she saves it, and the step plays once both are saved.
    { kind: 'edit', trigger: 'notes:fri-tutoring-mallory+fri-picture-day-mallory' },
    { kind: 'send', trigger: 'send:req-edward-library' },
    { kind: 'edit', trigger: 'open-item:tue-violin-alexis' },
  ],
  'C-04b': [{ kind: 'answer', trigger: 'answer:req-edward-library', notify: { request: 'req-edward-library' } }],
  'C-05': [
    { kind: 'send', trigger: 'post:cedar-grove-parents' },
    { kind: 'arrival', notify: { reply: 'reply-jenna', group: 'cedar-grove-parents' } },
    { kind: 'arrival', notify: { reply: 'reply-min-jung', group: 'cedar-grove-parents' } },
  ],
  'C-05b': [{ kind: 'own', trigger: 'open-card:westview' }],
  'C-05c': [
    { kind: 'send', trigger: 'send-chat:chat-edward-claire' },
    { kind: 'arrival', notify: { message: 'm-ec-2' } },
    { kind: 'arrival', notify: { message: 'm-ec-3' } },
    { kind: 'send', trigger: 'send-chat:chat-edward-claire' },
  ],
  'C-06': [
    { kind: 'own', trigger: 'other-options:cc-mallory-pickup' },
    { kind: 'send', trigger: 'send:req-min-jung-thu' },
    { kind: 'send', trigger: 'send:mail-pickup-note' },
    { kind: 'answer', trigger: 'answer:req-min-jung-thu', notify: { request: 'req-min-jung-thu' } },
  ],
  'C-06b': [
    { kind: 'send', trigger: 'send:req-reyes-fri' },
    { kind: 'answer', trigger: 'answer:req-reyes-fri', notify: { request: 'req-reyes-fri' } },
  ],
  'C-06c': [
    { kind: 'send', trigger: 'send-chat:chat-claire' },
    { kind: 'arrival', notify: { message: 'm-c-2' } },
  ],
  'C-08b': [{ kind: 'own', trigger: 'add-to-item:fri-checkup-mallory' }],
  'C-09': [
    { kind: 'own', trigger: 'card:cc-harvest-fair' },
    { kind: 'send', trigger: 'send:req-reyes-fair' },
    { kind: 'own', trigger: 'capture:game-plan' },
  ],
};

export function stepsFor(momentId) {
  return table[momentId] ?? [];
}

// The step a tap would play now, if any.
export function nextStep(momentId, played) {
  return stepsFor(momentId)[played] ?? null;
}

// Play the next step plays only a step with no tap of hers.
export const presenterKinds = ['arrival', 'clock'];

export function playsFromPresenter(step) {
  return Boolean(step && presenterKinds.includes(step.kind));
}

// Whether a tap plays the next step.
export function playsFromTrigger(step, trigger) {
  return Boolean(step && step.trigger && step.trigger === trigger);
}

// Undo is offered only after her own change, never after a send or anyone else's step.
export function undoable(step) {
  return step?.kind === 'own';
}

// The line she hears when a step plays, or null.
export function notificationFor(seed, step) {
  const notify = step?.notify;
  if (!notify) return null;
  if (notify.copy === 'sentToTheCoach') return sentToTheCoach;
  if (notify.request) return notificationYes[notify.request] ?? null;
  if (notify.message) return messageNotifications[notify.message] ?? null;
  if (notify.reply) {
    const group = seed.groups.find((entry) => entry.id === notify.group);
    const reply = group?.posts.flatMap((post) => post.replies ?? []).find((entry) => entry.id === notify.reply);
    const person = seed.people.find((entry) => entry.id === reply?.by);
    if (!group || !person) return null;
    return repliedToYourPost.replace('{person}', person.name).replace('{group}', group.name);
  }
  return null;
}
