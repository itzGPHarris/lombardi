import styles from './shared.module.css';
// An adult, shown as an outlined circle with their initial. Children use ChildChip instead.
export default function AdultAvatar({ name }) {
  return <span className={styles.adultAvatar} role="img" aria-label={name}>{name[0]}</span>;
}
