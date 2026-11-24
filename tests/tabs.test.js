// The tabs beside Today at every moment (Stage 5): each view model checked against what the fixtures
// write for that tab at that moment (fixtures section 2, "Every tab at every moment").
import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import { articles } from '../src/demo/articles.js';
import {
  askForHelpView, chatView, childPageView, coachView, composerView, gamePlanView, groupView, itemPageView, kidsView, membersView,
  articleView, personPageView, schoolCardView, settingsView, teamView,
} from '../src/demo/tabs.js';

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
    // The naming line and "Whose calendar is this?" come before the read-back, in the 0a order
    // (fixtures 3.56 C-00, "Coach, as shown"; issue O36).
    expect(kinds).toEqual(['photo', 'read-back', 'read-back', 'read-back', 'text', 'plan', 'taught']);
    const [, naming, readBack, , , handoff, welcome] = messages(view);
    expect(naming.text).toBe("This is Westview Kindergarten's calendar for October.");
    expect(naming.confirm).toEqual({ question: 'Whose calendar is this?', chosen: 'Mallory · K' });
    expect(readBack.text).toMatch(/^Westview Kindergarten uses a six-day letter rotation\./);
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

describe('Team', () => {
  it('on her first night: no chats, no groups, Edward and Claire in her circle with no word on MVP (fixtures C-00)', () => {
    const view = teamView({ seed, momentId: 'C-00' });
    expect(view.chats).toEqual([]);
    expect(view.groups).toEqual([]);
    expect(view.noGroups).toBe("No groups yet. Create one for the parents who share your children's week.");
    expect(view.people.map((person) => [person.name, person.line, person.onMvp, !!person.circle])).toEqual([
      ['Edward', 'Your husband', null, true], ['Claire', 'Your sister', null, true],
    ]);
  });

  it('on Monday before C-01: no chats yet, the group she made last week, everyone in one list with her circle first', () => {
    const view = teamView({ seed, momentId: 'C-01' });
    expect(view.chats).toEqual([]);
    expect(view.groups).toEqual([expect.objectContaining({ name: 'Cedar Grove parents', members: '8 members', latest: 'You created this group last week.' })]);
    expect(view.people.map((person) => `${person.initial} ${person.name}${person.onMvp ? ' · On MVP' : ''}${person.circle ? ' · Circle' : ''}`)).toEqual([
      'E Edward · On MVP · Circle', 'C Claire · On MVP · Circle', 'L Dr. Lena Ortiz · Circle', 'K Karen Moss · Circle', 'R Ms. Reyes · Circle',
      'M Min-jung Park · On MVP', 'J Jenna Okafor · On MVP', 'T Tom Alvarez · On MVP', 'G Grace Liu · On MVP', 'D Dev Raman · On MVP',
      'N Nina Brooks · On MVP', 'R Rafael Costa · On MVP',
    ]);
  });

  it('on Wednesday at 5:00pm: Claire\'s reply unread, newest first, and the dot (fixtures C-06c)', () => {
    const view = teamView({ seed, momentId: 'C-06c', played: 2 });
    expect(view.chats.map((chat) => [chat.name, chat.latest, chat.when, chat.unread])).toEqual([
      ['Claire', "Claire: Yes, see you at 6:30. I'll bring dessert.", '4:58pm', '1 new'],
      ['Edward and Claire', 'You: Sunday night it is.', 'Yesterday', null],
    ]);
    expect(view.groups[0].latest).toBe('Min-jung Park: Sophie sees Dana Whitfield there and really likes her. She had a wait list in the spring, so I\'d ask soon.');
    expect(view.unread).toBe(1);
    expect(teamView({ seed, momentId: 'C-06c', played: 2, seen: ['chat-claire'] }).unread).toBe(0);
  });

  it('person pages as the fixtures write them on Wednesday', () => {
    const page = (id, momentId = 'C-06c', played = 2) => personPageView({ seed, momentId, played, personId: id });
    const lanes = (view) => view.thisWeek.rows.map((row) => [row.time, row.text, row.owner?.status ?? null]);
    expect(page('edward', 'C-06')).toMatchObject({ line: 'Your husband · On MVP', contact: { label: 'Mobile', number: '707-555-0101' } });
    expect(page('edward', 'C-06').actions.map((action) => action.label)).toEqual(['Message', 'Call']);
    expect(lanes(page('edward', 'C-06')).map(([day, , status]) => [day, status])).toEqual([['Thu', 'accepted'], ['Thu', 'declined'], ['Sat', 'accepted']]);
    expect(page('claire').thisWeek.rows).toEqual([]);
    expect(page('claire').thisWeek.empty).toBe("Nothing in this week's plan with Claire.");
    expect(page('dr-ortiz')).toMatchObject({ line: 'Pediatrician, Northside Pediatrics · Not on MVP', contact: { label: 'Northside Pediatrics', number: '707-555-0160' } });
    expect(page('dr-ortiz').actions.map((action) => action.label)).toEqual(['Call']);
    expect(lanes(page('dr-ortiz'))).toEqual([['Fri', 'Checkup, Northside Pediatrics, 3:30pm', null]]);
    expect(page('ms-reyes').actions.map((action) => action.label)).toEqual(['Call', 'Text']);
    expect(lanes(page('ms-reyes'))).toEqual([['Fri', 'Tutoring with Ms. Reyes, Westview Kindergarten library, 3:00pm', 'accepted']]);
    expect(lanes(page('min-jung'))).toEqual([['Mon', 'Carpool to Cedar Grove Elementary, 7:40am', null], ['Thu', 'Pick up at Westview Kindergarten, 2:30pm', 'accepted']]);
    expect(lanes(page('karen-moss'))).toEqual([['Mon', 'Therapy, Brightwater Family Therapy, 3:30pm', null]]);
    expect(page('jenna').groups.items.map((group) => group.name)).toEqual(['Cedar Grove parents']);
    expect(page('tom').thisWeek.empty).toBe("Nothing in this week's plan with Tom.");
  });

  it('the chat with Edward and Claire, the group and its members', () => {
    const chat = chatView({ seed, momentId: 'C-06c', chatId: 'chat-edward-claire' });
    expect(chat.privacy).toBe("Only you, Edward and Claire see this chat. The MVP Coach doesn't read it.");
    expect(chat.messages.map((message) => message.author)).toEqual(['You', 'Claire', 'Edward', 'You']);
    const group = groupView({ seed, momentId: 'C-05', played: 3, groupId: 'cedar-grove-parents' });
    expect(group.posts[0].replies.map((reply) => reply.author)).toEqual(['Min-jung Park', 'Jenna Okafor']);
    expect(groupView({ seed, momentId: 'C-05', groupId: 'cedar-grove-parents' }).posts).toEqual([]);
    expect(membersView({ seed, groupId: 'cedar-grove-parents' }).people[0]).toMatchObject({ name: 'You', line: null });
  });

  it('the composer for her circle and her people', () => {
    const view = composerView({ seed, momentId: 'C-05c' });
    expect(view.circle.people.map((person) => person.name)).toEqual(['Edward', 'Claire']);
    expect(view.circle.notOnMvp.map((person) => person.name)).toEqual(['Dr. Lena Ortiz', 'Karen Moss', 'Ms. Reyes']);
    expect(view.people).toEqual([{ id: 'cedar-grove-parents', name: 'Cedar Grove parents', line: '8 members' }]);
  });
});

describe('Kids', () => {
  const card = (momentId, schoolId, played = 0, opened = []) => schoolCardView({ seed, momentId, played, schoolId, opened });
  const section = (view, id) => view.sections.find((entry) => entry.id === id);
  const texts = (entry) => entry.facts.map((fact) => (fact.label ? `${fact.label} ${fact.text}` : fact.text));

  it('the tab lists both girls and both schools, with the Updated mark where a card has changed', () => {
    expect(kidsView({ seed, momentId: 'C-01' }).children.map((child) => [child.name, child.line])).toEqual([
      ['Alexis', 'Fourth grade · Cedar Grove Elementary'], ['Mallory', 'Kindergarten · Westview Kindergarten'],
    ]);
    expect(kidsView({ seed, momentId: 'C-01' }).schools.map((school) => [school.name, school.children, school.updated])).toEqual([
      ['Westview Kindergarten', 'Mallory', null], ['Cedar Grove Elementary', 'Alexis', 'Updated'],
    ]);
    expect(kidsView({ seed, momentId: 'C-05b' }).schools[0].updated).toBe('Updated');
    expect(kidsView({ seed, momentId: 'C-05b', played: 1 }).schools[0].updated).toBeNull();
  });

  it('child pages on Monday and on her first night', () => {
    expect(childPageView({ seed, momentId: 'C-01', childId: 'mallory' })).toMatchObject({
      title: 'Mallory · 6 · Kindergarten',
      school: { text: 'Westview Kindergarten · Ms. Hollis, Room 3' },
    });
    const first = childPageView({ seed, momentId: 'C-00', childId: 'alexis' });
    expect(first.school.text).toBe('Cedar Grove Elementary');
    expect(first.everyWeek.items.map((item) => [item.text, item.calendarMark])).toEqual([
      ['Dance, Studio Ten Dance, Wednesdays 3:45pm', true], ['Therapy, Brightwater Family Therapy, Mondays 3:30pm', true],
    ]);
    expect(first.goingWith.items).toEqual([]);
    expect(first.goingWith.empty).toBe('Nothing goes with Alexis on a set day yet.');
  });

  it('the Westview Kindergarten card on Monday', () => {
    const view = card('C-01', 'westview');
    expect(view.sections.map((entry) => entry.id)).toEqual(['hours', 'contacts', 'rules', 'calendar', 'rotation', 'documents']);
    expect(texts(section(view, 'calendar'))).toEqual(['Picture day, this Friday', 'Harvest fair, next Friday, Oct. 23, 3:00pm to 5:00pm', 'Fir Hollow Farm field trip, Thursday, Oct. 29']);
    expect(section(view, 'rotation').line).toBe('This week: Monday B · Tuesday C · Wednesday D · Thursday E · Friday F');
    expect(texts(section(view, 'documents'))).toEqual(['Rotation calendar, photo, last week', 'Family contact list, photo, last week']);
    expect(section(view, 'contacts').facts[2]).toMatchObject({ label: 'Changes to who picks up:', text: 'through the family portal', source: 'From the family contact list · photo' });
  });

  it('the Westview Kindergarten card after the pickup email, with the earlier version kept (C-05b)', () => {
    const view = card('C-05b', 'westview');
    const changed = section(view, 'contacts').facts.find((fact) => fact.id === 'wv-pickup-changes-email');
    expect(changed).toMatchObject({ text: 'pickups@westviewk.org, by 11:00am on the day', updated: 'Updated' });
    expect(changed.history).toEqual([{ text: 'Changes to who picks up: through the family portal', until: 'Until today' }]);
    expect(texts(section(view, 'documents'))).toEqual([
      'Pickup change email, today', 'Fall food drive flyer, photo, yesterday', 'Rotation calendar, photo, last week', 'Family contact list, photo, last week',
    ]);
    expect(section(card('C-05b', 'westview', 0, ['wv-pickup-changes-email']), 'contacts').facts.find((fact) => fact.id === 'wv-pickup-changes-email').updated).toBeNull();
  });

  it('the Cedar Grove Elementary card on Monday and on her first night', () => {
    const view = card('C-01', 'cedar-grove');
    expect(texts(section(view, 'hours'))).toEqual(['8:00am to 2:45pm', 'Pickup at the Oak Street gate', 'Early dismissal this Thursday at 1:30pm']);
    expect(section(view, 'hours').facts[2].updated).toBe('Updated');
    expect(view.sections.map((entry) => entry.id)).not.toContain('rotation');
    expect(texts(section(view, 'documents'))).toEqual(['Weekly newsletter, yesterday', 'Weekly newsletters from earlier weeks']);
    const first = card('C-00', 'cedar-grove');
    expect(first.sections.map((entry) => texts(entry))).toEqual([['Starts 8:00am']]);
    expect(first.emptyLine).toBe('Send the MVP Coach a handout or an email from Cedar Grove Elementary, and it fills this card in.');
    expect(section(card('C-00', 'westview'), 'rotation').line).toBe('This week: Monday C · Tuesday D · Wednesday E · Thursday F · Friday A');
  });
});

describe('MVP Editorial', () => {
  it('the article view shows the label line, the title and Today\'s reason, and holds back the byline and body (R15)', () => {
    expect(articleView({ seed, articles, articleId: 'conference' })).toEqual({
      id: 'conference', line: 'MVP Editorial · 3 min read', title: 'Fifteen minutes with the teacher: making a conference count',
      reason: 'Because Cedar Grove Elementary conferences are this week.', approved: false,
    });
    expect(articleView({ seed, articles, articleId: 'picture-day' })).toMatchObject({ line: 'MVP Editorial · 4 min read', reason: null, approved: false });
  });
});

describe('Settings', () => {
  it('holds Charlotte\'s six cards with her values, as fixtures section 3 writes them', () => {
    const view = settingsView({ seed });
    expect(view.cards.map((card) => card.heading)).toEqual([
      'Your account', 'Your calendar and forwarding address', 'What the coach adds for you', 'Notifications', 'Language at home', 'Privacy',
    ]);
    const rows = (id) => view.cards.find((card) => card.id === id).rows;
    expect(rows('account').map((row) => [row.label, row.value ?? row.link])).toEqual([
      ['Name', 'Charlotte'], ['Email', 'charlotte@mail.example'], ['Your age range', 'Add your age range'], ['Plan', 'Family'], ['Billing', 'Manage billing'],
    ]);
    expect(rows('calendar').map((row) => row.value ?? row.link)).toEqual([
      'Google Calendar, connected', 'Disconnect Google Calendar', 'charlotte-k7m@forward.mvp.example', 'Copy the address', 'The Cedar Grove Elementary newsletter',
    ]);
    expect(rows('coach-adds').map((row) => [row.label, row.on])).toEqual([
      ['Events from your Google Calendar', true], ['School-day changes for Alexis and Mallory', true], ['Trips you can take yourself', true],
    ]);
    expect(rows('notifications').map((row) => row.label)).toEqual(['Notifications', 'Reminder the night before a library day']);
    expect(rows('language')).toEqual([{ label: 'Language', value: 'English' }]);
    expect(rows('privacy').map((row) => row.text)).toHaveLength(2);
  });
});
