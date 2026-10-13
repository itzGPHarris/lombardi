import copy from '../../copy/interface.json';
import styles from './shared.module.css';
// A child's first name as a label on a plan item. The chip replaces the name in the row's text,
// and a row involving every child takes one group chip (group={2} or group={3}) instead of one each.
// Chips are for children only: adults use AdultAvatar, and "You" stays plain text.
export default function ChildChip({ name, group, size = 'default' }) {
  return <span className={styles.childChip} data-size={size}>{group ? copy.childGroup[group] : name}</span>;
}
