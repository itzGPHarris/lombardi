import styles from './AdultAvatar.module.css';

// An adult, as an outlined initial (library AdultAvatar 2757:22331). Children never appear as
// initials. The label names the adult for a screen reader.
export default function AdultAvatar({ initial, label }) {
  return <span className={styles.avatar} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>{initial}</span>;
}
