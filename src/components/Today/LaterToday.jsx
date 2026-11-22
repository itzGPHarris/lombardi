import PlanRow from '../GamePlan/PlanRow.jsx';
import { updated as updatedLabel } from '../../copy/gamePlan.js';
import styles from './LaterToday.module.css';

// Later today (spec §5): the rest of the day as a list, each row with the time it starts in a column,
// its chips, the calendar mark and the item. What is done drops off, and a line in Meta at the foot
// says how much. Someone else's item carries their initial and their answer. Each row is the same
// PlanRow the game plan draws, so a row reads alike on both.
const asPlanRow = (row) => ({
  ...row,
  marks: row.updated ? [{ kind: 'updated', label: updatedLabel }] : [],
  owner: row.owner ? { kind: 'person', ...row.owner } : null,
});

export default function LaterToday({ later, childName }) {
  return (
    <section className={styles.later} aria-labelledby="later-today">
      <h2 id="later-today" className={styles.heading}>{later.heading}</h2>
      {later.rows.length > 0 && (
        <ul className={styles.rows}>
          {later.rows.map((row) => (
            <li key={row.id}><PlanRow row={asPlanRow(row)} childName={childName} /></li>
          ))}
        </ul>
      )}
      {later.countLine && <p className={styles.count}>{later.countLine}</p>}
    </section>
  );
}
