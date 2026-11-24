import { formatDay, formatTime } from './calendar.js';
import { charlottesWeek, weekendAway } from '../copy/demo.js';

// The household switcher's moments as a reviewer reads the week (spec §15, issue X6): grouped under
// Charlotte's week and the weekend she is away, then under each day, and each row read as its time
// and its title. Everything is worked out from the seed, so there is no second list to keep.

// A moment opens only once the seed holds its state. Until then it reads Coming soon, so Alpha 2's
// moments open by themselves when the seed writes them.
export function momentAvailable(seed, momentId) {
  return Boolean(seed.moments.find((moment) => moment.id === momentId)?.state);
}

// The demo week and the night before it are Charlotte's week. C-10 to C-15 are the week after the
// demo week, the weekend Charlotte is away (spec §15).
function groupOf(moment) {
  return moment.time.week <= 0 ? { id: 'week', title: charlottesWeek } : { id: 'weekend', title: weekendAway };
}

export function momentGroups(seed) {
  const groups = [];
  for (const moment of seed.moments) {
    const group = groupOf(moment);
    let entry = groups.at(-1);
    if (entry?.id !== group.id) {
      entry = { ...group, days: [] };
      groups.push(entry);
    }
    const day = formatDay(moment.time, seed.meta.demoWeekStart);
    let dayEntry = entry.days.at(-1);
    if (dayEntry?.title !== day) {
      dayEntry = { title: day, rows: [] };
      entry.days.push(dayEntry);
    }
    dayEntry.rows.push({ id: moment.id, time: formatTime(moment.time.time), title: moment.label, available: Boolean(moment.state) });
  }
  return groups;
}
