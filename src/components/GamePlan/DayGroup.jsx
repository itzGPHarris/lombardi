import Icon from '../shared/Icon.jsx';
import PlanRow from './PlanRow.jsx';
import { collapsed, open as openWord } from '../../copy/gamePlan.js';
import styles from './GamePlan.module.css';

// A day in the game plan (spec §8, "Day"; library DayGroup 2849:23449). Collapsed shows the heading
// with its count and the dot. Open wraps the day's rows in a container on bg/subtle at radius/md,
// which is not a card. Tapping the heading opens or closes it, and its rows expand or collapse
// (spec §19, "Days open and close"). An empty day says so, with the quiet line in a thin week.
export default function DayGroup({ day, open, onToggle, childName, onOpen, id }) {
  if (day.empty) {
    return (
      <div className={styles.day} id={id} data-key={day.key}>
        <div className={styles.dayHeading}>
          <span className={styles.dayName}>{day.heading}</span>
          <span className={styles.dayCount}>{day.emptyText}</span>
        </div>
        {day.emptyLine && <p className={styles.emptyLine}>{day.emptyLine}</p>}
      </div>
    );
  }
  const label = `${day.label ?? day.heading}, ${day.count}, ${open ? openWord : collapsed}`;
  return (
    <div className={styles.day} id={id} data-key={day.key} data-open={open || undefined}>
      <button type="button" className={styles.dayHeading} aria-expanded={open} aria-label={label} onClick={onToggle}>
        <span className={styles.dayName}>{day.heading}</span>
        <span className={styles.dayCount}>{day.count}</span>
        {day.dot && <span className={styles.dot} data-on aria-hidden="true" />}
        <span className={styles.chevron}><Icon name="chevron-right" /></span>
      </button>
      <div className={styles.rowsWrap} inert={!open || undefined} aria-hidden={!open || undefined}>
        <div className={styles.rows}>
          {day.rows.map((row) => <PlanRow key={row.id} row={row} childName={childName} onOpen={onOpen} />)}
        </div>
      </div>
    </div>
  );
}
