import styles from './Layout.module.css';

// What a shell anchors at the foot. It is sticky at the bottom of the column, so the page itself
// scrolls, and it rides on --keyboard-inset so it sits directly above the keyboard (spec §2).
export default function Foot({ surface, children }) {
  return <div className={styles.foot} data-surface={surface}>{children}</div>;
}
