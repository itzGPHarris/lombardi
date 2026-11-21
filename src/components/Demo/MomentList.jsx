import { moments as heading } from '../../copy/demo.js';
import styles from './Demo.module.css';

// Jumps the household to a moment by ID (spec §15). Each moment opens in the state the fixtures
// describe, whatever was tapped before.
export default function MomentList({ moments, current, onJump }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{heading}</h3>
      <ol className={styles.moments}>
        {moments.map((moment) => (
          <li key={moment.id}>
            <button type="button" className={styles.moment} aria-current={moment.id === current ? 'true' : undefined} onClick={() => onJump(moment.id)}>
              <span className={styles.momentId}>{moment.id}</span>
              <span className={styles.momentLabel}>{moment.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
