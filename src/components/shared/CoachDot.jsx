import styles from './CoachDot.module.css';

// The coach's solid dot (spec §4). It sits beside the coach's label and carries no meaning of its own.
export default function CoachDot() {
  return <span className={styles.dot} aria-hidden="true" />;
}
