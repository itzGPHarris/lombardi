import Checklist from './Checklist.jsx';
import ChildChip from '../shared/ChildChip.jsx';
import { forTomorrow as words } from '../../copy/today.js';
import styles from './TomorrowStarts.module.css';

// For tomorrow (spec §5, "The evening"): her later departures tomorrow that take a child, each with its
// own items grouped by child, so nothing she packs tonight appears twice. Each row opens the Leave sheet
// for its leg. Each group folds on its own, and the departure keeps its row.
// A start nobody owns yet shows its start time and the child's chip, and opens nothing, because there
// is no leg to leave for (0i-d).
export default function TomorrowStarts({ rows, onLeave, childName }) {
  return (
    <section className={styles.tomorrow} aria-labelledby="for-tomorrow">
      <h2 id="for-tomorrow" className={styles.heading}>{words.heading}</h2>
      {rows.map((row) => (
        <div key={row.key} className={styles.departure}>
          {row.runId ? (
            <button type="button" className={styles.row} onClick={() => onLeave(row)}>
              <span className={styles.time}>{row.time}</span>
              <span className={styles.text}>{row.text}</span>
            </button>
          ) : (
            <p className={styles.row}>
              <span className={styles.time}>{row.time}</span>
              {row.chips?.map((chip) => <ChildChip key={chip} name={childName(chip)} />)}
              <span className={styles.text}>{row.text}</span>
            </p>
          )}
          {row.checklist && <Checklist checklist={row.checklist} foldsWhole={false} />}
        </div>
      ))}
    </section>
  );
}
