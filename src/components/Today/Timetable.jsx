import ChildChip from '../shared/ChildChip.jsx';
import StopMarker from './StopMarker.jsx';
import styles from './Timetable.module.css';

// A trip pass's timetable (spec §5, "Now"), drawn on RouteStation's rail: one row for each departure
// and each stop, with the time at the left. Rows behind her are muted, the row she acts on next is
// bold with its marker in a cerulean circle, and the rows ahead stay in full ink. The rail stops above
// and below each marker rather than running through it.
export default function Timetable({ rows, childName }) {
  return (
    <ol className={styles.timetable}>
      {rows.map((row, index) => (
        <li key={row.key} className={styles.row} data-state={row.state} aria-current={row.state === 'next' ? 'step' : undefined}>
          <span className={styles.rail} data-first={index === 0 || undefined} data-last={index === rows.length - 1 || undefined}>
            <span className={styles.railTop} />
            <StopMarker place={row.marker} state={row.state} />
            <span className={styles.railBottom} />
          </span>
          <span className={styles.time}>{row.time}</span>
          <span className={styles.stop}>
            {row.place ? (
              <>
                <span className={styles.line}>
                  {row.chips.map((child) => <ChildChip key={child} name={childName(child)} faded={row.state === 'behind'} />)}
                  <span className={styles.text}>{row.place}</span>
                </span>
                <span className={styles.meta}>{row.meta}</span>
              </>
            ) : <span className={styles.line}><span className={styles.text}>{row.text}</span></span>}
          </span>
        </li>
      ))}
    </ol>
  );
}
