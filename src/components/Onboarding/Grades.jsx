import { useEffect, useRef } from 'react';
import Icon from '../shared/Icon.jsx';
import { grades } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';

// The list box for a grade, the part 0k-b drew (2858:11639) until it joined the welcome (issue O35).
// Tapping it opens the list over the field below it with the grade selected, as 0w-b (2863:11708)
// shows with Alexis's list open.
export function GradeField({ index, label, grade, open, onOpen, onChoose }) {
  const listRef = useRef(null);
  // The open list shows six whole grades with the selected one third, as 0w-b draws it.
  useEffect(() => {
    const list = listRef.current;
    if (!open || !list) return;
    const selected = list.querySelector('[aria-selected="true"]');
    if (selected) list.scrollTop = selected.offsetTop - selected.offsetHeight * 2 - parseFloat(getComputedStyle(list).paddingTop);
  }, [open]);
  const id = `grade-${index}`;
  return (
    <div className={`${styles.field} ${styles.gradeField}`} data-open={open || undefined}>
      <span className={styles.fieldLabel} id={`${id}-label`}>{label}</span>
      <button type="button" className={styles.box} aria-haspopup="listbox" aria-expanded={open} aria-labelledby={`${id}-label`} onClick={onOpen}>
        <span className={styles.boxValue}>{grade}</span>
        <span className={styles.chevron}><Icon name="chevron-right" /></span>
      </button>
      {open && (
        <ul className={styles.list} role="listbox" aria-labelledby={`${id}-label`} ref={listRef}>
          {grades.map((option) => (
            <li key={option}>
              <button type="button" role="option" aria-selected={option === grade} className={styles.option} onClick={() => onChoose(option)}>
                <span>{option}</span>
                {option === grade && <span className={styles.optionCheck}><Icon name="check" /></span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
