import AdultAvatar from '../shared/AdultAvatar.jsx';
import ChildChip from '../shared/ChildChip.jsx';
import Icon from '../shared/Icon.jsx';
import CalendarMark from '../Calendar/CalendarMark.jsx';
import { family } from '../../copy/people.js';
import styles from './LaterToday.module.css';

// Later today (spec §5): the rest of the day as a list, each row with the time it starts in a column,
// its chips, the calendar mark and the item. What is done drops off, and a line in Meta at the foot
// says how much. Someone else's item carries their initial and their answer.
const answerIcons = { asked: 'hourglass', accepted: 'thumbs-up', declined: 'thumbs-down' };

export function Chips({ chips, childName }) {
  const names = chips.map(childName).filter(Boolean);
  return names.map((name) => <ChildChip key={name} name={name} family={name === family} />);
}

export default function LaterToday({ later, childName }) {
  return (
    <section className={styles.later} aria-labelledby="later-today">
      <h2 id="later-today" className={styles.heading}>{later.heading}</h2>
      {later.rows.length > 0 && (
        <ul className={styles.rows}>
          {later.rows.map((row) => (
            <li key={row.id} className={styles.row}>
              <span className={styles.time}>{row.time}</span>
              <Chips chips={row.chips} childName={childName} />
              {row.calendarMark && <CalendarMark />}
              <span className={styles.text}>{row.text}</span>
              {row.updated && <span className={styles.mark}><Icon name="mark-changed" /></span>}
              {row.owner && (
                <span className={styles.owner}>
                  <AdultAvatar initial={row.owner.initial} label={row.owner.name} />
                  {row.owner.status && answerIcons[row.owner.status] && <Icon name={answerIcons[row.owner.status]} />}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
      {later.countLine && <p className={styles.count}>{later.countLine}</p>}
    </section>
  );
}
