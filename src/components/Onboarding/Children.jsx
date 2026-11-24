import { Field, PickerField } from './parts.jsx';
import { GradeField } from './Grades.jsx';
import { monthYear } from '../../demo/onboarding.js';
import { fill } from '../../demo/today.js';
import { welcome as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';

const pad = (number) => String(number).padStart(2, '0');

// One child on the welcome (0w): the first name and birth month and year, the parts 0k drew
// (2853:12050) until it joined the welcome (issue O35), then the grade the MVP Coach suggests once the
// birth month is filled in, as a list box she can change.
export default function ChildFields({ child, index, open, onChange, onBirth, onOpen, onChoose }) {
  return (
    <div className={styles.group}>
      <Field id={`child-${index}`} label={words.firstName} value={child.name} onChange={(name) => onChange({ name })} />
      <PickerField label={words.birth} display={child.birth ? monthYear(child.birth) : ''} icon="calendar-mark">
        <input
          className={styles.overlay}
          type="month"
          aria-label={words.birth}
          value={child.birth ? `${child.birth.year}-${pad(child.birth.month)}` : ''}
          onChange={(event) => {
            const [year, month] = event.target.value.split('-').map(Number);
            if (year && month) onBirth({ year, month });
          }}
        />
      </PickerField>
      {child.birth && (
        <GradeField
          index={index}
          label={fill(words.grade, { child: child.name })}
          grade={child.grade}
          open={open}
          onOpen={onOpen}
          onChoose={onChoose}
        />
      )}
    </div>
  );
}
