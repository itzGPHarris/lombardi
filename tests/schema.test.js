import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { validateSchema } from '../scripts/validate-schema.mjs';
import householdSchema from '../src/data/schema/household.schema.json';
import articleSchema from '../src/data/schema/article.schema.json';
import charlotte from '../src/data/households/charlotte.json';

const articlesDir = join(import.meta.dirname, '../src/data/articles');
const articles = readdirSync(articlesDir).filter((name) => name.endsWith('.json'))
  .map((name) => JSON.parse(readFileSync(join(articlesDir, name), 'utf8')));

// Spec §16's top-level keys, in its order, plus runs, which §16 defines as an object but leaves out
// of the list (see docs/issues.csv).
const specKeys = ['meta', 'people', 'children', 'schools', 'places', 'travel', 'calendar', 'planItems', 'rules', 'captures',
  'requests', 'groups', 'chats', 'conversation', 'coachCards', 'reminders', 'recommended', 'moments'];

// Spec §15, "Charlotte's moments": C-00 to C-15 without C-14.
const specMoments = ['C-00', 'C-01', 'C-02', 'C-03', 'C-03a', 'C-03b', 'C-04', 'C-04b', 'C-05', 'C-05b', 'C-05c', 'C-06', 'C-06b',
  'C-06c', 'C-07', 'C-08', 'C-08b', 'C-09', 'C-10', 'C-11', 'C-12', 'C-13', 'C-15'];

describe('the household seed', () => {
  it('matches the schema written from spec §16', () => {
    expect(validateSchema(charlotte, householdSchema)).toEqual([]);
  });

  it('holds exactly the top-level keys spec §16 lists, plus runs', () => {
    expect(Object.keys(charlotte).sort()).toEqual([...specKeys, 'runs'].sort());
  });

  it('holds the moments spec §15 lists, in order, with full state from C-00 to C-09', () => {
    expect(charlotte.moments.map((moment) => moment.id)).toEqual(specMoments);
    const demoWeek = charlotte.moments.slice(0, specMoments.indexOf('C-10'));
    for (const moment of demoWeek) expect(moment.state, moment.id).toBeDefined();
  });

  it('gives every moment the state of every plan item, so any moment can be opened first (spec §16)', () => {
    const ids = charlotte.planItems.map((item) => item.id);
    for (const moment of charlotte.moments.filter((entry) => entry.state)) {
      expect(moment.state.planItems.map((item) => item.id), moment.id).toEqual(ids);
    }
  });

  it('uses every identifier once', () => {
    const lists = ['people', 'children', 'schools', 'places', 'planItems', 'runs', 'captures', 'requests', 'groups', 'chats', 'conversation', 'coachCards', 'reminders'];
    const ids = lists.flatMap((key) => charlotte[key].map((entry) => `${key}:${entry.id}`));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('refers only to people, children, places and items that exist', () => {
    const has = (key) => new Set(charlotte[key].map((entry) => entry.id));
    const people = has('people');
    const kids = new Set([...has('children'), 'family']);
    const places = has('places');
    const items = has('planItems');
    const problems = [];
    const check = (set, value, where) => { if (value !== null && value !== undefined && !set.has(value)) problems.push(`${where}: ${value}`); };
    for (const item of charlotte.planItems) {
      item.children.forEach((child) => check(kids, child, `planItems ${item.id} child`));
      check(places, item.place, `planItems ${item.id} place`);
    }
    for (const run of charlotte.runs) for (const stop of run.stops) {
      check(places, stop.place, `runs ${run.id} place`);
      check(items, stop.item, `runs ${run.id} item`);
    }
    for (const leg of charlotte.travel) { check(places, leg.from, 'travel from'); check(places, leg.to, 'travel to'); }
    for (const event of charlotte.calendar.events) check(items, event.planItem, `calendar ${event.id}`);
    for (const request of charlotte.requests) {
      check(people, request.to, `requests ${request.id}`);
      (request.items ?? []).forEach((entry) => check(items, entry.item, `requests ${request.id} item`));
    }
    for (const moment of charlotte.moments.filter((entry) => entry.state)) {
      for (const state of moment.state.planItems) {
        check(people, state.owner, `${moment.id} ${state.id} owner`);
        check(people, state.status?.person, `${moment.id} ${state.id} status`);
        state.marks.forEach((mark) => check(items, mark.with, `${moment.id} ${state.id} mark`));
      }
      moment.state.reviewCard.forEach((id) => check(items, id, `${moment.id} reviewCard`));
      moment.state.conversation.forEach((id) => check(has('conversation'), id, `${moment.id} conversation`));
      moment.state.captures.forEach((id) => check(has('captures'), id, `${moment.id} captures`));
      const card = moment.state.today?.coachCard?.id;
      if (card && card !== 'coachEmptyWeek') check(has('coachCards'), card, `${moment.id} coach card`);
    }
    expect(problems).toEqual([]);
  });

  it('pairs each recommended article with an article file', () => {
    const ids = new Set(articles.map((article) => article.id));
    for (const entry of charlotte.recommended) expect(ids.has(entry.article), entry.article).toBe(true);
  });
});

describe('the MVP Editorial articles', () => {
  it.each(articles.map((article) => [article.id, article]))('%s matches the article schema', (_, article) => {
    expect(validateSchema(article, articleSchema)).toEqual([]);
  });

  it('shows no byline or body until an article is approved (issue R15)', () => {
    for (const article of articles.filter((entry) => !entry.approved)) {
      expect(article.byline).toBeNull();
      expect(article.body).toBeNull();
    }
  });
});
