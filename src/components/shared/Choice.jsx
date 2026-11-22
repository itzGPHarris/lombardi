import Icon from './Icon.jsx';
import styles from './Choice.module.css';

// A single choice in a group (library Choice 2760:40453): the household type on 0g, the child a
// capture is for on 0b, and later the audience on the Team composer. Selected takes the interactive
// color and the label stays in text, so a choice never relies on color alone. Where the frame draws a
// check on the selected choice, as under the read-back on 0b, it is shown too.
export default function Choice({ selected = false, check = false, onClick, children }) {
  return (
    <button type="button" className={styles.choice} aria-pressed={selected} onClick={onClick}>
      {check && selected && <span className={styles.check}><Icon name="check" /></span>}
      <span>{children}</span>
    </button>
  );
}
