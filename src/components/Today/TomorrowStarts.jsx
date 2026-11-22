import Checklist from './Checklist.jsx';
import { forTomorrow as words } from '../../copy/today.js';
import styles from './TomorrowStarts.module.css';

// For tomorrow (spec §5, "The evening"): her later departures tomorrow that take a child, each with its
// own items grouped by child, so nothing she packs tonight appears twice. Each row opens the Leave sheet
// for its leg. Each group folds on its own, and the departure keeps its row.
export default function TomorrowStarts({ rows, onLeave }) {
  return (
    <section className={styles.tomorrow} aria-labelledby="for-tomorrow">
      <h2 id="for-tomorrow" className={styles.heading}>{words.heading}</h2>
      {rows.map((row) => (
        <div key={row.key} className={styles.departure}>
          <button type="button" className={styles.row} onClick={() => onLeave(row)}>
            <span className={styles.time}>{row.time}</span>
            <span className={styles.text}>{row.text}</span>
          </button>
          {row.checklist && <Checklist checklist={row.checklist} foldsWhole={false} />}
        </div>
      ))}
    </section>
  );
}
