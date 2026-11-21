import { readFileSync } from 'node:fs';
import { expect, it } from 'vitest';
import household from '../src/data/households/charlotte.json';
import article from '../src/data/articles/teacher-conference.json';
import copy from '../src/copy/interface.json';
import { inspectContent } from '../scripts/voicecheck.mjs';

it('C-03 content matches the current fixtures verbatim', () => {
  const fixtures=readFileSync(new URL('../docs/story-fixtures.md',import.meta.url),'utf8');
  const state=household.moments[0].state;
  const strings=[state.coachCards[0].text,state.requests[0].text,state.requests[0].to,copy.task,article.title,article.byline,...article.body,...state.dayRows.flatMap(r=>r.cells),...state.departures.flatMap(d=>[d.line,...d.goingWith.map(i=>i.text)])];
  for(const text of strings) expect(fixtures, text).toContain(text);
});
it('seed, article and copy satisfy voice and date rules', () => {
  expect(inspectContent(household).errors).toEqual([]);
  expect(inspectContent(article,{article:true}).errors).toEqual([]);
  expect(inspectContent(copy).errors).toEqual([]);
});
it('moment, owner, child, request, calendar and article references resolve', () => {
  expect(household.moments.map(m=>m.id)).toEqual(['C-03']);
  const people=new Set(household.people.map(p=>p.id));
  const children=new Set(household.children.map(c=>c.id));
  for(const m of household.moments) {
    const ids=m.state.planItems.map(i=>i.id);
    expect(new Set(ids).size).toBe(ids.length);
    for(const item of m.state.planItems) {
      if(item.owner) expect(people.has(item.owner)).toBe(true);
      if(item.fromCalendar) expect(item).toMatchObject({owner:'charlotte',status:null});
      expect(item.time.time).toMatch(/^([01]\d|2[0-3]):[0-5]\d$/);
    }
    for(const d of m.state.departures) expect(children.has(d.child)).toBe(true);
    for(const request of m.state.requests) for(const id of request.items) expect(ids).toContain(id);
    for(const event of household.calendar.events) expect(ids).toContain(event.planItem);
  }
  expect(household.recommended[0].article).toBe(article.id);
});
