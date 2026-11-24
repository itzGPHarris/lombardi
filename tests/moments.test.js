import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import MomentList from '../src/components/Demo/MomentList.jsx';
import { momentGroups } from '../src/demo/moments.js';
import { initialSession, sessionReducer } from '../src/demo/session.js';
import seed from '../src/data/households/charlotte.json';

// Spec §15 and issue X6: the switcher groups its moments by week and day, reads each as its time and
// title, and a moment the seed holds no state for reads Coming soon and can't be opened.
const withState = seed.moments.filter((moment) => moment.state).map((moment) => moment.id);
const withoutState = seed.moments.filter((moment) => !moment.state).map((moment) => moment.id);

// Each rendered row, keyed by its title, which is unique among Charlotte's moments.
function renderedRows() {
  const html = renderToStaticMarkup(createElement(MomentList, { seed, current: 'C-03', onJump: () => {} }));
  const rows = {};
  for (const [, attributes, inner] of html.matchAll(/<button([^>]*)>(.*?)<\/button>/g)) {
    const moment = seed.moments.find((entry) => inner.includes(`>${entry.label.replace(/'/g, '&#x27;')}<`));
    rows[moment.id] = { disabled: attributes.includes('aria-disabled="true"'), current: attributes.includes('aria-current="true"'), soon: inner.includes('Coming soon') };
  }
  return rows;
}

describe('the switcher\'s moments', () => {
  it('has moments both with and without state to check', () => {
    expect(withState.length).toBeGreaterThan(0);
    expect(withoutState.length).toBeGreaterThan(0);
  });

  it('marks every moment without state as Coming soon and disabled', () => {
    const rows = renderedRows();
    expect(Object.keys(rows).sort()).toEqual(seed.moments.map((moment) => moment.id).sort());
    for (const id of withoutState) expect(rows[id], id).toMatchObject({ disabled: true, soon: true });
    for (const id of withState) expect(rows[id], id).toMatchObject({ disabled: false, soon: false });
  });

  it('keeps the current moment marked', () => {
    const rows = renderedRows();
    expect(Object.entries(rows).filter(([, row]) => row.current).map(([id]) => id)).toEqual(['C-03']);
  });

  it('opens every moment with state', () => {
    const start = initialSession();
    for (const id of withState) expect(sessionReducer(start, { type: 'JUMP', momentId: id }).momentId, id).toBe(id);
  });

  it('does nothing when a moment without state is jumped to', () => {
    const start = sessionReducer(initialSession(), { type: 'JUMP', momentId: 'C-03' });
    for (const id of withoutState) expect(sessionReducer(start, { type: 'JUMP', momentId: id }), id).toBe(start);
  });

  it('groups the moments under Charlotte\'s week and the weekend she is away, then by day', () => {
    const groups = momentGroups(seed);
    expect(groups.map((group) => group.title)).toEqual(["Charlotte's week", 'The weekend Charlotte is away']);
    const days = (group) => group.days.map((day) => [day.title, day.rows.map((row) => row.id)]);
    expect(days(groups[0])).toEqual([
      ['Monday, Oct. 5', ['C-00']],
      ['Monday, Oct. 12', ['C-01', 'C-02', 'C-03', 'C-03a', 'C-03b', 'C-04']],
      ['Tuesday, Oct. 13', ['C-04b', 'C-05', 'C-05b', 'C-05c']],
      ['Wednesday, Oct. 14', ['C-06', 'C-06b', 'C-06c', 'C-07']],
      ['Thursday, Oct. 15', ['C-08', 'C-08b']],
      ['Sunday, Oct. 18', ['C-09']],
    ]);
    expect(days(groups[1])).toEqual([
      ['Monday, Oct. 19', ['C-10', 'C-11']],
      ['Tuesday, Oct. 20', ['C-12']],
      ['Friday, Oct. 23', ['C-13']],
      ['Monday, Oct. 26', ['C-15']],
    ]);
  });

  it('reads each row as its time and its title from the fixtures heading', () => {
    const row = momentGroups(seed)[0].days[1].rows[0];
    expect(row).toEqual({ id: 'C-01', time: '6:15am', title: 'Charlotte talks to the coach', available: true });
  });
});
