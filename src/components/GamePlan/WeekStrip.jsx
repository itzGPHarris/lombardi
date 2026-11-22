import styles from './GamePlan.module.css';

// The week strip (spec §8; library WeekDay 2760:39793): each day's letter in a disc, today ringed,
// the day she is reading filled with the interactive tint, past days muted, and a dot under any day
// holding a decision, a shape that reads in grayscale. Once she reads next week it says so. Tapping a
// day opens it and scrolls to it.
export default function WeekStrip({ strip, reading, onDay }) {
  return (
    <div className={styles.strip}>
      {strip.label && <p className={styles.stripLabel}>{strip.label}</p>}
      <div className={styles.stripDays}>
        {strip.days.map((day) => (
          <button
            key={day.key}
            type="button"
            className={styles.weekDay}
            data-today={day.today || undefined}
            data-past={day.past || undefined}
            data-reading={day.key === reading || undefined}
            aria-current={day.key === reading ? 'date' : undefined}
            onClick={() => onDay(day.key)}
          >
            <span className={styles.disc}>{day.letter}</span>
            <span className={styles.dot} data-on={day.dot || undefined} aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
