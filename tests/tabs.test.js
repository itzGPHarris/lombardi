// The tabs beside Today at every moment (Stage 5): each view model checked against what the fixtures
// write for that tab at that moment (fixtures section 2, "Every tab at every moment").
import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import { articles } from '../src/demo/articles.js';
import { askForHelpView, coachView, gamePlanView, itemPageView } from '../src/demo/tabs.js';

const demoWeek = seed.moments.filter((moment) => /^C-0\d/.test(moment.id)).map((moment) => moment.id);
const messages = (view) => view.days.flatMap((day) => day.messages);

describe('Coach', () => {
  it('shows the conversation at every moment of the demo week, with a heading for each day', () => {
    for (const momentId of demoWeek) {
      const view = coachView({ seed, articles, momentId });
      expect(view.days.length, momentId).toBeGreaterThan(0);
      expect(view.days.at(-1).messages.length, momentId).toBeGreaterThan(0);
    }
  });

  it('on her first night holds onboarding under Today, from her photo to the welcome', () => {
    const view = coachView({ seed, articles, momentId: 'C-00' });
    expect(view.days.map((day) => day.heading)).toEqual(['Today']);
    const kinds = messages(view).map((message) => message.kind);
    expect(kinds).toEqual(['photo', 'read-back', 'read-back', 'text', 'plan', 'taught']);
    const [, readBack, , , handoff, welcome] = messages(view);
    expect(readBack.confirm).toEqual({ question: 'Whose calendar is this?', chosen: 'Mallory · K' });
    expect(handoff.actions).toBeUndefined();
    expect(welcome.greeting).toBe('Welcome to the team, Charlotte.');
  });

  it('names earlier days from the moment: Last Monday, This Monday, Yesterday and Today', () => {
    expect(coachView({ seed, articles, momentId: 'C-01' }).days.map((day) => day.heading))
      .toEqual(['Last Monday', 'Last Tuesday', 'Last Wednesday', 'Today']);
    expect(coachView({ seed, articles, momentId: 'C-06' }).days.map((day) => day.heading))
      .toEqual(['Last Monday', 'Last Tuesday', 'Last Wednesday', 'This Monday', 'Yesterday', 'Today']);
  });

  it('reads the newsletter back with its source said from today and its one button', () => {
    const readBack = messages(coachView({ seed, articles, momentId: 'C-01' })).find((message) => message.id === 'c01-readback');
    expect(readBack.source).toBe('From the Cedar Grove Elementary newsletter · yesterday');
    expect(readBack.actions.map((action) => action.label)).toEqual(['Show the newsletter']);
  });

  it('after the voice note, offers two ways for Thursday and fills the one she chose', () => {
    const view = coachView({ seed, articles, momentId: 'C-01', played: 3 });
    const voice = messages(view).find((message) => message.kind === 'voice-note');
    expect(voice.label).toBe('Voice note · 0:20');
    const options = messages(view).find((message) => message.kind === 'options').options;
    expect(options.map((option) => [option.title, option.recommended, option.chosen])).toEqual([
      ['Edward takes both pickups.', true, true],
      ['Plan B · You do both pickups and move yoga.', false, false],
    ]);
  });

  it('shows the Westview Kindergarten email with how it came', () => {
    const readBack = messages(coachView({ seed, articles, momentId: 'C-05b' })).find((message) => message.id === 'c05b-readback');
    expect(readBack.source).toBe('From Westview Kindergarten · email, today');
  });

  it('answers with Based on, one article for ideas, and a person for a medical question', () => {
    const c08 = messages(coachView({ seed, articles, momentId: 'C-08' })).find((message) => message.id === 'c08-answer');
    expect(c08.basedOn[0]).toBe('Mallory, 6, kindergarten at Westview Kindergarten');
    expect(c08.article).toMatchObject({ id: 'picture-day', line: 'MVP Editorial · 4 min read' });
    const before = messages(coachView({ seed, articles, momentId: 'C-08b' })).find((message) => message.id === 'c08b-answer');
    expect(before.article).toBeUndefined();
    expect(before.addToAppointment).toMatchObject({ label: "Add the cough to tomorrow's checkup", done: false });
    const after = messages(coachView({ seed, articles, momentId: 'C-08b', played: 1 })).find((message) => message.id === 'c08b-answer');
    expect(after.addToAppointment.done).toBe(true);
  });
});

describe('Game plan', () => {
  const rows = (day) => day.rows.map((row) => row.text);
  const find = (view, heading) => view.days.find((day) => day.heading === heading) ?? view.nextWeek.days.find((day) => day.heading === heading);

  it('shows a week at every moment of the demo week', () => {
    for (const momentId of demoWeek) {
      const view = gamePlanView({ seed, momentId });
      expect(view.days.length + view.nextWeek.days.length, momentId).toBeGreaterThan(0);
    }
  });

  it('on her first night: back-to-school night waits, today is folded and tomorrow is open (fixtures C-00)', () => {
    const view = gamePlanView({ seed, momentId: 'C-00', played: 1 });
    expect(view.reviewCard.heading).toBe('One update is waiting for your review.');
    expect(view.reviewCard.days).toEqual([{ label: 'For this Thursday', items: [expect.objectContaining({ text: 'Back-to-school night, 6:00pm' })] }]);
    expect(view.days.map((day) => [day.heading, day.count, day.open, day.dot])).toEqual([
      ['Today', '1 done', false, false], ['Tomorrow', '2 items', true, false], ['Wednesday', '3 items', false, false],
      ['Thursday', '3 items', false, true], ['Friday', '2 items', false, false], ['Saturday', null, false, false], ['Sunday', null, false, false],
    ]);
    expect(rows(view.days[1])).toEqual(['To Cedar Grove Elementary', 'To Westview Kindergarten · D day']);
    expect(view.days[1].rows.map((row) => row.owner.label)).toEqual(['You', 'You']);
    expect(view.days[5]).toMatchObject({ emptyText: 'Nothing is planned.', emptyLine: 'Tell the coach about this day, and it will suggest how it could go.' });
  });

  it('when she opens it in C-04: Monday is done, Tuesday is open with violin Updated, Saturday has the dot', () => {
    const view = gamePlanView({ seed, momentId: 'C-04' });
    expect(view.reviewCard.days[0]).toMatchObject({ label: 'For tomorrow' });
    expect(view.days[0]).toMatchObject({ heading: 'Today', count: '6 done', folded: true });
    expect(view.days[1]).toMatchObject({ heading: 'Tomorrow', count: '5 items', open: true });
    expect(view.days[1].rows.at(-1)).toMatchObject({ text: 'Violin, Lakeside Strings Music School', marks: [{ kind: 'updated', label: 'Updated' }] });
    expect(find(view, 'Saturday')).toMatchObject({ count: '1 item', open: false, dot: true });
    expect(find(view, 'Friday')).toMatchObject({ count: '7 items', open: false });
    expect(view.days.at(-1)).toMatchObject({ heading: 'Sunday', emptyText: 'Nothing is planned.', emptyLine: null });
  });

  it('when she closes it in C-04: no card, notes on Friday, the library run asked, the session next Tuesday', () => {
    const view = gamePlanView({ seed, momentId: 'C-04', played: 5 });
    expect(view.reviewCard).toBeNull();
    expect(view.days[1].rows.at(-1).marks).toEqual([]);
    const friday = find(view, 'Friday').rows;
    expect(friday.find((row) => row.id === 'fri-tutoring-mallory').note).toBe('Tell Ms. Reyes Tuesdays at 3:00 work from next week.');
    expect(find(view, 'Saturday').rows[0].owner).toMatchObject({ initial: 'E', status: 'asked', label: 'Asked Edward' });
    expect(view.nextWeek.days[1].rows.map((row) => row.id)).toContain('tue-tutoring-second');
  });

  it('draws Friday\'s carpool as one row, without its stops (D13)', () => {
    const friday = find(gamePlanView({ seed, momentId: 'C-04' }), 'Friday');
    const ids = friday.rows.map((row) => row.id);
    expect(ids).toContain('fri-carpool');
    expect(ids).not.toContain('fri-carpool-alexis');
    expect(ids).not.toContain('fri-carpool-mallory');
  });

  it('in C-06b: earlier days folded, today with 2 done, Friday open on its conflict', () => {
    const view = gamePlanView({ seed, momentId: 'C-06b' });
    expect(view.past).toMatchObject({ label: 'Earlier this week · 11 done', heading: 'Earlier this week', count: '11 done' });
    expect(view.days[0]).toMatchObject({ heading: 'Today', count: '2 done', open: true });
    expect(view.days[1].rows.map((row) => row.owner.label)).toContain('Edward: yes');
    const friday = find(view, 'Friday');
    expect(friday).toMatchObject({ count: '8 items', open: true, dot: true });
    const marks = Object.fromEntries(friday.rows.filter((row) => row.marks.length).map((row) => [row.id, row.marks[0].other]));
    expect(marks).toEqual({ 'fri-tutoring-mallory': 'the checkup', 'fri-checkup-mallory': 'tutoring' });
    expect(friday.rows.find((row) => row.id === 'fri-checkup-mallory').calendarMark).toBe(true);
  });

  it('on Sunday evening opens at next week, with the harvest fair waiting (fixtures C-09)', () => {
    const view = gamePlanView({ seed, momentId: 'C-09' });
    expect(view.days).toEqual([]);
    expect(view.strip.label).toBe('Next week');
    expect(view.nextWeek.open).toBe(true);
    expect(view.reviewCard.days[0]).toMatchObject({ label: 'For next Friday, Oct. 23' });
    expect(view.nextWeek.days[0].rows.find((row) => row.id === 'mon-violin-alexis-w1')).toMatchObject({ time: '4:45pm', marks: [{ kind: 'updated', label: 'Updated' }] });
  });

  it('clears an Updated mark once she has opened the item', () => {
    const view = gamePlanView({ seed, momentId: 'C-04', opened: ['tue-violin-alexis'] });
    expect(view.days[1].rows.at(-1).marks).toEqual([]);
  });
});

describe('Item pages', () => {
  const page = (momentId, itemId, played = 0) => itemPageView({ seed, momentId, played, itemId });

  it('the second tutoring session, suggested (fixtures C-04)', () => {
    expect(page('C-04', 'tue-tutoring-second')).toMatchObject({
      title: 'Second tutoring session, Westview Kindergarten library',
      when: 'Tomorrow · 3:00pm · Westview Kindergarten library',
      suggested: { label: 'Suggested', add: 'Add to the game plan', dismiss: 'No thanks' },
      owner: { label: 'Needs an owner', askForHelp: null },
      note: null,
      source: 'From Ms. Reyes · text, yesterday',
      move: { label: 'Move to another date or time' },
    });
  });

  it('picture day and the library run before and after Edward answers', () => {
    expect(page('C-04', 'fri-picture-day-mallory', 5)).toMatchObject({
      when: 'This Friday · All day · Westview Kindergarten',
      note: { text: 'Green dress, hanging in the laundry room.' },
      source: 'From Westview Kindergarten · email, last week',
    });
    expect(page('C-04', 'sat-library-run')).toMatchObject({ when: 'This Saturday · 10:00am', owner: { label: 'Needs an owner', askForHelp: 'Ask for help' }, source: 'From you' });
    expect(page('C-04b', 'sat-library-run', 1)).toMatchObject({
      owner: { label: 'Edward: yes', status: 'accepted' },
      answerNote: "Edward: We'll get lunch after and be home by 1:00pm.",
      marks: [{ kind: 'updated' }],
    });
  });

  it('Thursday\'s pages and the checkup in C-06b', () => {
    expect(page('C-06b', 'thu-yoga').source).toBe('From you · voice note, this Monday');
    expect(page('C-06b', 'thu-pickup-alexis-early').source).toBe('From the Cedar Grove Elementary newsletter · last Sunday');
    expect(page('C-06b', 'thu-ballet-mallory')).toMatchObject({ source: 'From your Google Calendar', move: { calendar: 'Change this in Google Calendar.' }, takeOut: null });
    const checkup = page('C-06b', 'fri-checkup-mallory');
    expect(checkup.backups.recommendation.text).toBe("I'd skip tutoring this Friday, because Mallory's new weekly tutoring with Ms. Reyes starts next Tuesday, Oct. 20.");
    expect(checkup.backups.plans[0].label).toBe('Plan B · Call Northside Pediatrics for a time after 3:45pm or on another day, and this Friday stays as it is.');
    expect(checkup.backups.noMore).toBe("I don't see another way that keeps both this Friday.");
    expect(checkup.takeOut).toBe('Take this out of the plan');
  });

  it('Ask for help lists her circle first, without the practices', () => {
    const view = askForHelpView({ seed, momentId: 'C-04', itemId: 'sat-library-run' });
    expect(view.line).toBe('Library run · this Saturday, 10:00am');
    expect(view.groups.map((group) => group.people.map((person) => person.name))).toEqual([
      ['Edward', 'Claire', 'Ms. Reyes'],
      ['Min-jung Park', 'Jenna Okafor', 'Tom Alvarez', 'Grace Liu', 'Dev Raman', 'Nina Brooks', 'Rafael Costa'],
    ]);
  });
});
