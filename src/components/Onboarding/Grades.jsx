import { useEffect, useRef } from 'react';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import { Mark } from './parts.jsx';
import { gradesHeading } from '../../demo/onboarding.js';
import { fill } from '../../demo/today.js';
import { grades as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';

// The grades the MVP Coach suggests (0k-b, 2858:11639). Each grade is a list box with a chevron, and
// tapping one opens the list over the field below it with the grade selected (0k-c, 2863:11708).
export default function Grades({ entries, flags, onOpen, onChoose, onContinue, onBack }) {
  return (
    <OnboardingShell onBack={onBack} primary={<Button kind="primary" full onClick={onContinue}>{words.continue}</Button>}>
      <div className={styles.page}>
        <div className={styles.intro}>
          <Entrance order={0}><Mark /></Entrance>
          <Entrance order={1} as="h1" className={styles.headline}>{gradesHeading(entries.children)}</Entrance>
        </div>
        <Entrance order={2} as="p" className={styles.line}>{words.line}</Entrance>
        <Entrance order={3} className={styles.fields}>
          {entries.children.map((child, index) => (
            // Each child's grade sits in its own group, divided by a hairline, as 0k-b draws it.
            <div key={child.id ?? index} className={styles.group}>
            <GradeField
              index={index}
              label={fill(words.label, { child: child.name })}
              grade={child.grade}
              open={flags.gradeListOpen === index}
              onOpen={() => onOpen(index)}
              onChoose={(grade) => onChoose(index, grade)}
            />
            </div>
          ))}
        </Entrance>
      </div>
    </OnboardingShell>
  );
}

function GradeField({ index, label, grade, open, onOpen, onChoose }) {
  const listRef = useRef(null);
  // The open list shows six whole grades with the selected one third, as 0k-c draws it.
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
          {words.list.map((option) => (
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
