// The demo calendar (AGENTS.md rule 2, spec §15 and §16, fixtures section 2, "Dates, times and
// places"). Every time in a seed is a demo time, { week, day, time }: weeks relative to the demo
// week, a weekday from mon to sun, and a 24-hour time or null for all day. The only calendar date is
// meta.demoWeekStart, the demo week's Monday. Every date is worked out from that anchor, and the
// device clock is never read.
//
// Dates are worked out on calendar days in UTC, so the device's time zone and daylight saving
// cannot move a day. A demo time is never turned into a real instant: its time stays a string,
// and America/Los_Angeles is only the zone the story is told in.

export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// Fixtures section 2: months abbreviated as in the Ready for dev frames. They live here, in code,
// because every date on screen is worked out rather than typed into a seed or copy file.
const monthNames = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
const phaseIcons = { morning: 'phase-morning', afternoon: 'phase-afternoon', evening: 'phase-tonight' };

export function parseAnchor(iso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso ?? '');
  if (!match) throw new Error(`meta.demoWeekStart must be an ISO date such as the demo week's Monday; got ${iso}`);
  const [y, m, d] = match.slice(1).map(Number);
  if (new Date(Date.UTC(y, m - 1, d)).getUTCDay() !== 1) throw new Error(`meta.demoWeekStart must be a Monday; got ${iso}`);
  return { y, m, d };
}

function dayIndex(day) {
  const index = days.indexOf(day);
  if (index < 0) throw new Error(`A demo day runs from mon to sun; got ${day}`);
  return index;
}

// The calendar date of a demo time's day.
export function dateOf({ week, day }, demoWeekStart) {
  const { y, m, d } = parseAnchor(demoWeekStart);
  const date = new Date(Date.UTC(y, m - 1, d + week * 7 + dayIndex(day)));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate(), weekday: weekdayNames[(date.getUTCDay() + 6) % 7] };
}

export function minutesOf(time) {
  if (time === null || time === undefined) return 0;
  const match = /^(\d{2}):(\d{2})$/.exec(time);
  if (!match) throw new Error(`A demo time is 24-hour, such as "14:15"; got ${time}`);
  return Number(match[1]) * 60 + Number(match[2]);
}

// Minutes from the start of the demo week, so two demo times can be ordered and subtracted.
function absoluteMinutes({ week, day, time }) {
  return ((week * 7 + dayIndex(day)) * 24 * 60) + minutesOf(time);
}

// Negative when a is earlier than b. Decides what has passed.
export function compareDemoTimes(a, b) {
  return Math.sign(absoluteMinutes(a) - absoluteMinutes(b));
}

// The minutes from a to b, for countdowns such as "in 15 min".
export function minutesBetween(a, b) {
  return absoluteMinutes(b) - absoluteMinutes(a);
}

// Spec §5, "Phase of the day": morning from midnight to noon, afternoon from noon until the board
// turns to tomorrow, and evening from 7:00pm, or after the last activity scheduled past 7:00pm,
// which the seed supplies as eveningFrom once it holds plan items.
export function phaseOf({ time }, { eveningFrom = '19:00' } = {}) {
  const minutes = minutesOf(time);
  if (minutes < 12 * 60) return 'morning';
  if (minutes < minutesOf(eveningFrom)) return 'afternoon';
  return 'evening';
}

// The parts of Today's dateline, such as "Monday morning, Oct. 12", with the phase icon's name.
export function datelineParts(demoTime, demoWeekStart, options) {
  const date = dateOf(demoTime, demoWeekStart);
  const phase = phaseOf(demoTime, options);
  return { weekday: date.weekday, phase, month: monthNames[date.month - 1], day: date.day, icon: phaseIcons[phase] };
}

// A day heading in the household switcher, such as "Monday, Oct. 12" (fixtures section 4, "Demo
// controls").
export function formatDay(demoTime, demoWeekStart) {
  const date = dateOf(demoTime, demoWeekStart);
  return `${date.weekday}, ${monthNames[date.month - 1]} ${date.day}`;
}

export function formatDateline(parts) {
  return `${parts.weekday} ${parts.phase}, ${parts.month} ${parts.day}`;
}

// Fixtures section 4: every time carries am or pm with no space, such as "7:25am" and "12:00pm".
export function formatTime(time) {
  const minutes = minutesOf(time);
  const hours = Math.floor(minutes / 60);
  const suffix = hours < 12 ? 'am' : 'pm';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${String(minutes % 60).padStart(2, '0')}${suffix}`;
}
