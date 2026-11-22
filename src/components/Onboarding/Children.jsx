import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import { Field, Mark, PickerField } from './parts.jsx';
import { monthYear } from '../../demo/onboarding.js';
import { fill } from '../../demo/today.js';
import { children as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';

const pad = (number) => String(number).padStart(2, '0');

// Who are you planning for (0k, 2853:12050): each child's first name and birth month and year. The
// heading names her unless she skipped the welcome. There is no skip, because every later screen
// depends on knowing the children.
export default function Children({ entries, flags, setChild, addChild, onContinue, onBack }) {
  const heading = !flags.skippedWelcome && entries.name ? fill(words.heading, { person: entries.name }) : words.headingNoName;
  return (
    <OnboardingShell onBack={onBack} primary={<Button kind="primary" full onClick={onContinue}>{words.continue}</Button>}>
      <div className={styles.page}>
        <div className={styles.intro}>
          <Entrance order={0}><Mark /></Entrance>
          <Entrance order={1} as="h1" className={styles.headline}>{heading}</Entrance>
        </div>
        <Entrance order={3} className={styles.fields}>
          {entries.children.map((child, index) => (
            <div key={child.id ?? index} className={styles.group}>
              <Field id={`child-${index}`} label={words.firstName} value={child.name} onChange={(name) => setChild(index, { name })} />
              <PickerField label={words.birth} display={child.birth ? monthYear(child.birth) : ''} icon="calendar-mark">
                <input
                  className={styles.overlay}
                  type="month"
                  aria-label={words.birth}
                  value={child.birth ? `${child.birth.year}-${pad(child.birth.month)}` : ''}
                  onChange={(event) => {
                    const [year, month] = event.target.value.split('-').map(Number);
                    if (year && month) setChild(index, { birth: { year, month } });
                  }}
                />
              </PickerField>
            </div>
          ))}
          <Button kind="text" className={styles.add} onClick={addChild}>{words.addAnother}</Button>
        </Entrance>
      </div>
    </OnboardingShell>
  );
}
