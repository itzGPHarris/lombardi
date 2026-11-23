// Requests (spec §9): the draft in her voice, and the recipient's side through View as, which shows
// only what she has sent that person (AGENTS.md rules 3 and 6).
import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import { draftView, recipientView } from '../src/demo/requests.js';

describe('the draft', () => {
  it('addresses Edward, previews his buttons on each item and sends from MVP (C-02)', () => {
    const view = draftView({ seed, momentId: 'C-02', requestId: 'req-edward-thu' });
    expect(view.to).toBe('To Edward');
    expect(view.answers.line).toBe('Edward answers each item with');
    expect(view.answers.rows.map((row) => `${row.day} · ${row.label}`)).toEqual([
      'This Thursday · Pick Alexis up at Cedar Grove Elementary, 1:30pm',
      'This Thursday · Pick Mallory up at Westview Kindergarten, 2:30pm',
    ]);
    expect(view.send).toBe('Send');
  });

  it('hands the Westview Kindergarten note to Mail, addressed from the card (C-06)', () => {
    const view = draftView({ seed, momentId: 'C-06', played: 2, requestId: 'mail-pickup-note' });
    expect(view.to).toBe('To Westview Kindergarten, pickup changes · pickups@westviewk.org');
    expect(view.answers).toBeNull();
    expect(view.send).toBe('Send from Mail');
  });

  it('draws Mallory as a chip where the words don\'t name her (C-06b)', () => {
    const [row] = draftView({ seed, momentId: 'C-06b', requestId: 'req-reyes-fri' }).answers.rows;
    expect(row).toMatchObject({ day: 'This Friday', chips: ['mallory'], label: 'Tutoring with Ms. Reyes, Westview Kindergarten library, 3:00pm' });
  });
});

describe('the recipient\'s side', () => {
  it('shows Edward nothing before Charlotte sends, then the card with her words (C-02)', () => {
    expect(recipientView({ seed, momentId: 'C-02', personId: 'edward' }).cards).toEqual([]);
    const view = recipientView({ seed, momentId: 'C-02', played: 1, personId: 'edward' });
    expect(view.dateline.text).toBe('Monday morning, Oct. 12');
    expect(view.cards).toHaveLength(1);
    expect(view.cards[0]).toMatchObject({
      heading: 'Charlotte is asking you to pick Alexis and Mallory up this Thursday.',
      sent: 'Sent 6:40am',
      answered: false,
      scripted: { items: ['thu-pickup-alexis-early', 'thu-pickup-mallory'] },
    });
  });

  it('shows Edward the library run only, sent yesterday, with the note to fill in (C-04b)', () => {
    const view = recipientView({ seed, momentId: 'C-04b', personId: 'edward' });
    expect(view.cards.map((card) => card.id)).toEqual(['req-edward-library']);
    expect(view.cards[0].sent).toBe('Sent yesterday, 8:52pm');
    expect(view.cards[0].scripted.note).toBe("We'll get lunch after and be home by 1:00pm.");
    const after = recipientView({ seed, momentId: 'C-04b', played: 1, personId: 'edward' }).cards[0];
    expect(after).toMatchObject({ answered: true, yourNote: "Your note: We'll get lunch after and be home by 1:00pm." });
  });

  it('opens Edward\'s card on his change in C-06, with no step to play', () => {
    const [card] = recipientView({ seed, momentId: 'C-06', personId: 'edward' }).cards;
    expect(card.sent).toBe('Sent this Monday, 6:40am');
    expect(card.changing).toMatchObject({ item: 'thu-pickup-mallory' });
    expect(card.scripted).toBeNull();
  });

  it('sends Ms. Reyes a text with the link, then the web page (C-06b)', () => {
    const view = recipientView({ seed, momentId: 'C-06b', played: 1, personId: 'ms-reyes' });
    expect(view.message).toEqual({ text: 'Charlotte sent you a request through MVP. You can answer here:', link: 'mvp.example/r/k7m2' });
    expect(view.cards[0]).toMatchObject({ sent: 'Sent 1:20pm', words: { noMvpNeeded: "You don't need MVP to answer." } });
  });

  it('dates the C-09 text from the step that sent it', () => {
    const [card] = recipientView({ seed, momentId: 'C-09', played: 2, personId: 'ms-reyes' }).cards;
    expect(card.sent).toBe('Sent 7:31pm');
    expect(card.heading).toBe("Charlotte is asking you to skip Mallory's tutoring next Friday, Oct. 23.");
  });
});
