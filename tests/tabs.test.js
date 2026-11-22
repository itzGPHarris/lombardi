// The tabs beside Today at every moment (Stage 5): each view model checked against what the fixtures
// write for that tab at that moment (fixtures section 2, "Every tab at every moment").
import { describe, expect, it } from 'vitest';
import seed from '../src/data/households/charlotte.json';
import { articles } from '../src/demo/articles.js';
import { coachView } from '../src/demo/tabs.js';

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
