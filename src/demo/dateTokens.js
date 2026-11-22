// Date tokens in seed strings (spec §16, "Demo time"; AGENTS.md rule 2). A seed, article or copy
// file never types a calendar date, so a string that shows one carries a token that the demo
// calendar fills in from meta.demoWeekStart:
//
//   {date:W.day}   the month and day, such as "Oct. 19" for {date:1.mon}
//   {month:W.day}  the month in full, such as "October", for the prepared documents' read-backs
//   {rel:W.day}    the day said from the day she reads it, such as "this Friday", "tomorrow" or
//                  "next Friday, Oct. 23" (fixtures section 4, "Every day says which week it is in")
//
// W is the week relative to the demo week and day runs from mon to sun.
import { dateOf, days } from './calendar.js';

const monthNames = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
const fullMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const tokenPattern = /\{(date|month|rel):(-?\d+)\.(mon|tue|wed|thu|fri|sat|sun)\}/g;

export function monthDay(demoTime, demoWeekStart) {
  const date = dateOf(demoTime, demoWeekStart);
  return `${monthNames[date.month - 1]} ${date.day}`;
}

// Fixtures section 4: today, tomorrow and yesterday; "this" for any other day in the same Monday
// to Sunday week; "last" for the week before; "next", the day and the date for the week after; and
// the day and the date beyond that.
export function relativeDay(demoTime, now, demoWeekStart) {
  const index = (time) => time.week * 7 + days.indexOf(time.day);
  const offset = index(demoTime) - index(now);
  const weekday = dateOf(demoTime, demoWeekStart).weekday;
  if (offset === 0) return 'today';
  if (offset === 1) return 'tomorrow';
  if (offset === -1) return 'yesterday';
  const weeks = demoTime.week - now.week;
  if (weeks === 0) return `this ${weekday}`;
  if (weeks === -1) return `last ${weekday}`;
  if (weeks === 1) return `next ${weekday}, ${monthDay(demoTime, demoWeekStart)}`;
  return `${weekday}, ${monthDay(demoTime, demoWeekStart)}`;
}

export function fillDates(text, { demoWeekStart, now }) {
  return text.replace(tokenPattern, (_, kind, week, day) => {
    const time = { week: Number(week), day, time: null };
    if (kind === 'date') return monthDay(time, demoWeekStart);
    if (kind === 'month') return fullMonthNames[dateOf(time, demoWeekStart).month - 1];
    if (!now) throw new Error(`A {rel:…} token needs the demo time it is read at: ${text}`);
    return relativeDay(time, now, demoWeekStart);
  });
}

// A month in full with its year, such as "October 2016", for a birth month on the children screen.
export function monthYear({ month, year }) {
  return `${fullMonthNames[month - 1]} ${year}`;
}

// The days a draft covers, such as "Oct. 6 to 9", or "Oct. 30 to Nov. 2" across a month's end
// (fixtures section 4, "Heading of the draft").
export function dateRange(first, last, demoWeekStart) {
  const start = dateOf(first, demoWeekStart);
  const end = dateOf(last, demoWeekStart);
  const tail = start.month === end.month ? `${end.day}` : monthDay(last, demoWeekStart);
  return `${monthDay(first, demoWeekStart)} to ${tail}`;
}
