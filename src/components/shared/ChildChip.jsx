import styles from './ChildChip.module.css';

// A child's name chip (spec §4, "How people are shown"; library ChildChip 2716:52591). Children are
// filled, the whole household is the outlined Family chip, and a group chip such as "Both" names
// every child in a row. Faded marks a chip on a timetable row behind her.
export default function ChildChip({ name, family = false, faded = false }) {
  return <span className={styles.chip} data-family={family || undefined} data-faded={faded || undefined}>{name}</span>;
}
