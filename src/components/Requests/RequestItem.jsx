import Button from '../shared/Button.jsx';
import { Chips } from '../GamePlan/PlanRow.jsx';
import styles from './Requests.module.css';

// One item on a request: the day, any child the words don't name as a chip, the item, then its two
// buttons, or the answer given with Change (spec §9, "Each item is answered on its own").
export default function RequestItem({ row, childName, answer, words, onYes, onNo, onChange }) {
  return (
    <div className={styles.item}>
      <p className={styles.itemRow}>
        {row.day && <span className={styles.itemDay}>{row.day}</span>}
        {row.chips.length > 0 && <span className={styles.itemChips}><Chips chips={row.chips} childName={childName} /></span>}
        <span className={styles.itemLabel}>{row.label}</span>
      </p>
      {answer ? (
        <p className={styles.answer}>
          <span className={styles.answerText}>{answer}</span>
          <Button kind="text" onClick={onChange}>{words.change}</Button>
        </p>
      ) : (
        <div className={styles.answerButtons}>
          <Button kind="secondary" onClick={onYes}>{words.yes}</Button>
          <Button kind="outlined" onClick={onNo}>{words.no}</Button>
        </div>
      )}
    </div>
  );
}
