import { describe, expect, it } from 'vitest';
import { compareDemoTimes, dateOf, datelineParts, formatDateline, formatTime, minutesBetween, parseAnchor, phaseOf } from '../src/demo/calendar.js';
import stub from '../src/data/households/charlotte.json';

const anchor = stub.meta.demoWeekStart;
const at = (id) => stub.moments.find((moment) => moment.id === id).time;
const dateline = (id) => formatDateline(datelineParts(at(id), anchor));

describe('the demo calendar', () => {
  it('works out each moment\'s dateline from meta.demoWeekStart', () => {
    expect(dateline('C-00')).toBe('Monday evening, Oct. 5');
    expect(dateline('C-03')).toBe('Monday morning, Oct. 12');
    expect(dateline('C-03b')).toBe('Monday afternoon, Oct. 12');
    expect(dateline('C-06')).toBe('Wednesday morning, Oct. 14');
    expect(dateline('C-07')).toBe('Wednesday evening, Oct. 14');
    expect(dateline('C-09')).toBe('Sunday evening, Oct. 18');
    expect(dateline('C-10')).toBe('Monday evening, Oct. 19');
    expect(dateline('C-13')).toBe('Friday afternoon, Oct. 23');
    expect(dateline('C-15')).toBe('Monday morning, Oct. 26');
  });

  it('crosses months and years from the anchor alone', () => {
    expect(dateOf({ week: 3, day: 'mon' }, anchor)).toMatchObject({ month: 11, day: 2, weekday: 'Monday' });
    expect(formatDateline(datelineParts({ week: 3, day: 'mon', time: '08:00' }, anchor))).toBe('Monday morning, Nov. 2');
    expect(dateOf({ week: 0, day: 'thu' }, '2026-12-28')).toMatchObject({ year: 2026, month: 12, day: 31 });
    expect(dateOf({ week: 0, day: 'fri' }, '2026-12-28')).toMatchObject({ year: 2027, month: 1, day: 1 });
  });

  it('moves the whole demo when the anchor moves', () => {
    expect(formatDateline(datelineParts(at('C-03'), '2027-03-01'))).toBe('Monday morning, March 1');
  });

  it('refuses an anchor that is not a Monday', () => {
    expect(() => parseAnchor('2026-10-13')).toThrow(/Monday/);
    expect(() => parseAnchor('Oct 12')).toThrow(/ISO/);
  });

  it('names the phase of the day and its icon', () => {
    expect(phaseOf({ time: '11:59' })).toBe('morning');
    expect(phaseOf({ time: '12:00' })).toBe('afternoon');
    expect(phaseOf({ time: '18:59' })).toBe('afternoon');
    expect(phaseOf({ time: '19:00' })).toBe('evening');
    expect(phaseOf({ time: '19:30' }, { eveningFrom: '20:00' })).toBe('afternoon');
    expect(datelineParts(at('C-07'), anchor).icon).toBe('phase-tonight');
    expect(datelineParts(at('C-03'), anchor).icon).toBe('phase-morning');
    expect(datelineParts(at('C-03b'), anchor).icon).toBe('phase-afternoon');
  });

  it('orders demo times and counts the minutes between them', () => {
    expect(compareDemoTimes(at('C-00'), at('C-03'))).toBe(-1);
    expect(compareDemoTimes(at('C-03'), at('C-03'))).toBe(0);
    expect(compareDemoTimes(at('C-15'), at('C-13'))).toBe(1);
    expect(minutesBetween(at('C-03'), { week: 0, day: 'mon', time: '07:40' })).toBe(15);
    expect(minutesBetween(at('C-07'), { week: 0, day: 'thu', time: '06:55' })).toBe(585);
  });

  it('writes times with am or pm and no space', () => {
    expect(formatTime('07:25')).toBe('7:25am');
    expect(formatTime('12:00')).toBe('12:00pm');
    expect(formatTime('00:05')).toBe('12:05am');
    expect(formatTime('21:10')).toBe('9:10pm');
  });
});
