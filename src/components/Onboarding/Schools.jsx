import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import { Field, StepCounter } from './parts.jsx';
import { school as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Schools.module.css';

// Where do they go to school (0f, 2853:13052), 03 of 04: each child's school and start time, with the
// note under a school filled in from her capture. A child marked Not in school yet has an Age field in
// place of School and Start time. The screen scrolls, because it is taller than a phone.
export default function Schools({ kids, schools, notInSchool, capturedFrom, setSchool, onAdd, onContinue, onBack }) {
  return (
    <OnboardingShell onBack={onBack} counter={<StepCounter step={3} />} primary={<Button kind="primary" full onClick={onContinue}>{words.continue}</Button>}>
      <div className={styles.page} data-top="none">
        <h1 className={styles.headline}>{words.heading}</h1>
        <p className={styles.line}>{words.line}</p>
        {kids.map((child, index) => {
          const entry = schools[index] ?? {};
          return (
            <section key={child.id ?? index} className={styles.group} aria-labelledby={`school-${index}`}>
              <div>
                <h2 id={`school-${index}`} className={own.name}>{child.name}</h2>
                <p className={own.grade}>{child.grade}</p>
              </div>
              {child.grade === notInSchool ? (
                <Field id={`age-${index}`} label={words.age} inputMode="numeric" value={entry.age ?? ''} onChange={(age) => setSchool(index, { age })} />
              ) : (
                <>
                  <Field id={`school-name-${index}`} label={words.school} value={entry.school ?? ''} onChange={(school) => setSchool(index, { school, fromCapture: null })} />
                  {entry.fromCapture && capturedFrom && <p className={styles.note}>{words.fromCalendarPhoto}</p>}
                  <Field id={`start-${index}`} label={words.startTime} value={entry.startTime ?? ''} onChange={(startTime) => setSchool(index, { startTime })} />
                </>
              )}
            </section>
          );
        })}
        <Button kind="text" className={styles.add} onClick={onAdd}>{words.addAnother}</Button>
      </div>
    </OnboardingShell>
  );
}
