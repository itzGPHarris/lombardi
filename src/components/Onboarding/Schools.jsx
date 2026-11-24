import { useState } from 'react';
import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import HouseholdRows from './Household.jsx';
import ReviewRow from './ReviewRow.jsx';
import { Field } from './parts.jsx';
import { startTimeSource } from '../../demo/onboarding.js';
import { fill } from '../../demo/today.js';
import { coachLabel, household, school as words } from '../../copy/onboarding.js';
import styles from './Schools.module.css';

// Where do they go to school (0f, 2853:13052): the coach's review of what it found (spec §3; issue
// O36). It has no heading and opens with the coach's line under "MVP Coach:" in Voice. Each child's row
// shows the name and the grade written out over the school, the start time and where they came from,
// "From your calendar photo" when she made the capture and "From your Google Calendar" when she
// connected it. A start time the coach could not find leaves the school alone on the row, and the coach
// asks for it over an empty field (0f-b, 3282:17908). Tapping a child's row opens the start time
// field. A child marked Not in school yet has an Age field in place of the school. The household and
// the adults who help sit beneath as rows, and Done is pinned at the foot.
//
// Mallory's "8:30am · From your calendar photo" is built as fixtures 3.56 states it. The placeholder
// photo prints no start time, so where it comes from is open (issue O18).
export default function Schools({ kids, schools, flags, notInSchool, entries, set, setSchool, setHelper, addHelper, onDone, onBack }) {
  const [open, setOpen] = useState(null);
  return (
    <OnboardingShell onBack={onBack} primary={<Button kind="primary" full onClick={onDone}>{household.done}</Button>}>
      <div className={styles.page}>
        <div className={styles.coach}>
          <p className={styles.label}>{coachLabel}</p>
          <p className={styles.voice}>{words.coachLine}</p>
        </div>
        <div className={styles.card}>
          {kids.map((child, index) => {
            const entry = schools[index] ?? {};
            const title = fill(words.childRow, { child: child.name, grade: child.grade });
            if (child.grade === notInSchool) {
              return (
                <div key={child.id ?? index} className={styles.rowWrap}>
                  <p className={styles.title}>{title}</p>
                  <Field id={`age-${index}`} label={words.age} inputMode="numeric" value={entry.age ?? ''} onChange={(age) => setSchool(index, { age })} />
                </div>
              );
            }
            const source = startTimeSource(entry, flags);
            const found = source && entry.startTime;
            const mark = source === 'capture' ? words.fromCalendarPhoto : null;
            const calendarMark = entry.source === 'calendar' && flags.calendar ? fill(words.fromCalendar, { calendar: flags.calendar }) : null;
            const detail = [entry.school, found ? entry.startTime : null, mark ?? calendarMark].filter(Boolean).join(' · ');
            const asking = !found;
            const editing = asking || open === index;
            return (
              <ReviewRow key={child.id ?? index} title={title} detail={detail} open={editing} onOpen={asking ? undefined : () => setOpen(open === index ? null : index)}>
                {editing && (
                  <div className={styles.ask}>
                    {asking && <p className={styles.voice}>{fill(words.missing, { child: child.name, school: entry.school })}</p>}
                    <Field
                      id={`start-${index}`}
                      label={fill(words.startTimeFor, { child: child.name })}
                      // A start time the coach asks for opens empty, until she types one.
                      value={asking && !entry.missing ? '' : entry.startTime ?? ''}
                      onChange={(startTime) => setSchool(index, { startTime, ...(asking ? { missing: true } : {}) })}
                    />
                  </div>
                )}
              </ReviewRow>
            );
          })}
        </div>
        <HouseholdRows entries={entries} set={set} setHelper={setHelper} addHelper={addHelper} />
      </div>
    </OnboardingShell>
  );
}
