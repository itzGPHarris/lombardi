// T27: every leaving time follows one rule (fixtures "Dates, times and places", spec §5 and §16).
// A leaving time is the next stop's due time, minus the drive, minus five minutes, rounded down to
// five minutes, and a leg never leaves a stop before that stop is due.
import { describe, expect, it } from 'vitest';
import charlotte from '../src/data/households/charlotte.json';
import { formatTime, minutesOf } from '../src/demo/calendar.js';

const toTime = (minutes) => `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

function drive(from, to) {
  const leg = charlotte.travel.find((entry) => (entry.from === from && entry.to === to) || (entry.from === to && entry.to === from));
  if (!leg) throw new Error(`No travel time from ${from} to ${to}`);
  return leg.minutes;
}

export function leavingTime(stop, next) {
  const rule = Math.floor((minutesOf(next.dueAt) - drive(stop.place, next.place) - 5) / 5) * 5;
  return toTime(stop.dueAt ? Math.max(rule, minutesOf(stop.dueAt)) : rule);
}

const legs = charlotte.runs.flatMap((run) => run.stops.slice(0, -1).map((stop, index) => ({ run, stop, next: run.stops[index + 1] })));

describe('leaving times (T27)', () => {
  it('follows the rule on every leg that heads to a stop with a due time', () => {
    const timed = legs.filter(({ next }) => next.dueAt);
    expect(timed.length).toBeGreaterThan(0);
    const wrong = timed.filter(({ stop, next }) => stop.leaveAt !== leavingTime(stop, next))
      .map(({ run, stop, next }) => `${run.id}: leave ${stop.place} at ${stop.leaveAt}, the rule gives ${leavingTime(stop, next)}`);
    expect(wrong).toEqual([]);
  });

  it('never leaves a stop before it is due', () => {
    const early = legs.filter(({ stop }) => stop.dueAt && stop.leaveAt && minutesOf(stop.leaveAt) < minutesOf(stop.dueAt));
    expect(early.map(({ run, stop }) => `${run.id} ${stop.place}`)).toEqual([]);
  });

  it('gives every run a leaving time from its first stop', () => {
    expect(charlotte.runs.filter((run) => run.stops.length && !run.stops[0].leaveAt).map((run) => run.id)).toEqual([]);
  });

  it('has a fixed travel time for every leg a run drives', () => {
    const missing = legs.filter(({ stop, next }) => {
      try { drive(stop.place, next.place); return false; } catch { return true; }
    });
    expect(missing.map(({ run, stop, next }) => `${run.id}: ${stop.place} to ${next.place}`)).toEqual([]);
  });

  it('shows each For tomorrow departure at its run\'s leaving time', () => {
    const rows = charlotte.moments.flatMap((moment) => [moment.state?.today, ...Object.values(moment.branches ?? {}).map((branch) => branch.today)])
      .flatMap((today) => today?.forTomorrow ?? []).filter((row) => row.run);
    expect(rows.length).toBeGreaterThan(0);
    for (const row of rows) {
      const run = charlotte.runs.find((entry) => entry.id === row.run);
      expect(row.text, row.run).toContain(`at ${formatTime(run.stops[0].leaveAt)} `);
    }
  });
});
