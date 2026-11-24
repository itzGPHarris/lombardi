import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import ChildFields from './Children.jsx';
import { Field, Mark } from './parts.jsx';
import { welcomeComplete } from '../../demo/onboarding.js';
import { welcome as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Welcome.module.css';

// The welcome (0w, 2853:12929): her first name and zip code, then, under "Who are you planning for?",
// each child's first name, birth month and year and suggested grade, which 0k and 0k-b asked on
// screens of their own until fixtures 3.54 (issue O35). Her name and zip code can be left blank, so
// there is no skip link, and Continue works once every child has a name and a birth month (issue O18).
// The screen scrolls while Continue stays pinned at the foot.
export default function Welcome({ entries, openGrade, set, setChild, setBirth, addChild, openGradeList, chooseGrade, onContinue }) {
  return (
    <OnboardingShell
      primary={<Button kind="primary" full disabled={!welcomeComplete(entries.children)} onClick={onContinue}>{words.continue}</Button>}
    >
      <div className={styles.page}>
        <div className={styles.intro}>
          <Entrance order={0}><Mark /></Entrance>
          <Entrance order={1} as="h1" className={styles.headline}>{words.headline}</Entrance>
        </div>
        <Entrance order={2} as="p" className={styles.line}>{words.line}</Entrance>
        <Entrance order={3} className={styles.fields}>
          <Field id="welcome-name" label={words.name} value={entries.name} autoComplete="given-name" onChange={(value) => set('name', value)} />
          <Field id="welcome-zip" label={words.zip} value={entries.zip} inputMode="numeric" autoComplete="postal-code" onChange={(value) => set('zip', value)} />
        </Entrance>
        <Entrance order={3} as="section" className={own.children} aria-labelledby="welcome-children">
          <h2 id="welcome-children" className={own.subheading}>{words.subheading}</h2>
          <p className={styles.line}>{words.gradesLine}</p>
          <div className={styles.fields}>
            {entries.children.map((child, index) => (
              <ChildFields
                key={child.id ?? index}
                child={child}
                index={index}
                open={openGrade === index}
                onChange={(value) => setChild(index, value)}
                onBirth={(birth) => setBirth(index, birth)}
                onOpen={() => openGradeList(index)}
                onChoose={(grade) => chooseGrade(index, grade)}
              />
            ))}
            <Button kind="text" className={styles.add} onClick={addChild}>{words.addAnother}</Button>
          </div>
        </Entrance>
      </div>
    </OnboardingShell>
  );
}
