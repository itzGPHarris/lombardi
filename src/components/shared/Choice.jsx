import Icon from './Icon.jsx';
import styles from './Choice.module.css';

// A single choice in a group (library Choice 2760:40453): the household type on 0g, the child a
// capture is for on 0b, and later the audience on the Team composer. Selected takes the interactive
// color and the label stays in text, so a choice never relies on color alone. Where the frame draws a
// check on the selected choice, as under the read-back on 0b, it is shown too.
// Segment draws it as one half of a segmented control, as the Team composer's Circle | People: the
// chosen half on the control surface, the other on the interactive tint behind it.
export default function Choice({ selected = false, check = false, segment = false, onClick, children }) {
  return (
    <button type="button" className={styles.choice} data-segment={segment || undefined} aria-pressed={selected} onClick={onClick}>
      {check && selected && <span className={styles.check}><Icon name="check" /></span>}
      <span>{children}</span>
    </button>
  );
}
