import styles from './StatusPill.module.css';

// The status pill beside the leaving time (spec §5, "A leg from start to finish"; library StatusPill
// 2749:19539). Plain while more than 15 minutes are left, the countdown in the warning ink from 15
// minutes before, "Time to leave" filled from the leaving time, and "Running late" in the warning
// fill from five minutes after it. The words change at every stage, so it never relies on color.
export default function StatusPill({ pill }) {
  return <span className={styles.pill} data-stage={pill.stage}>{pill.text}</span>;
}
