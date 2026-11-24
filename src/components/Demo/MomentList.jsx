import { momentGroups } from '../../demo/moments.js';
import { comingSoon, moments as heading } from '../../copy/demo.js';
import styles from './Demo.module.css';

// Jumps the household to a moment (spec §15, issue X6). Moments are grouped under Charlotte's week
// and the weekend she is away, then under each day, and each row reads as its time and its title.
// Each moment opens in the state the fixtures describe, whatever was tapped before. A moment the
// seed holds no state for yet stays in its place, reads Coming soon and does nothing when tapped.
export default function MomentList({ seed, current, onJump }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{heading}</h3>
      {momentGroups(seed).map((group) => (
        <section key={group.id} className={styles.momentGroup} aria-labelledby={`moments-${group.id}`}>
          <h4 id={`moments-${group.id}`} className={styles.momentGroupTitle}>{group.title}</h4>
          {group.days.map((day) => (
            <div key={day.title} className={styles.momentDay}>
              <h5 className={styles.momentDayTitle}>{day.title}</h5>
              <ol className={styles.moments}>
                {day.rows.map((row) => (
                  <li key={row.id}>
                    <button
                      type="button"
                      className={styles.moment}
                      aria-current={row.id === current ? 'true' : undefined}
                      aria-disabled={row.available ? undefined : 'true'}
                      onClick={row.available ? () => onJump(row.id) : undefined}
                    >
                      <span className={styles.momentTime}>{row.time}</span>
                      <span className={styles.momentText}>
                        <span className={styles.momentTitle}>{row.title}</span>
                        {row.available ? null : <span className={styles.momentSoon}>{comingSoon}</span>}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      ))}
    </section>
  );
}
