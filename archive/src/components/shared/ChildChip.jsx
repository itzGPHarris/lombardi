import copy from '../../copy/interface.json';
import styles from './shared.module.css';
// A name label on a plan item. The chip replaces the name in the row's text, and a row involving
// every child takes one group chip (group={2} or group={3}) instead of one each. group="family" is the
// outlined chip for the whole household. Filled chips are for children only: a single adult uses
// AdultAvatar, and "You" stays plain text.
export default function ChildChip({ name, group, size = 'default' }) {
  return <span className={styles.childChip} data-size={size} data-kind={group === 'family' ? 'family' : undefined}>{group ? copy.childGroup[group] : name}</span>;
}
