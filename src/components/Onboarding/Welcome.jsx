import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import { Field, Mark } from './parts.jsx';
import { welcome as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';

// The welcome (0w, 2853:12929): her first name and zip code. Continue is enabled with both fields
// filled (issue O18), and Skip for now goes on to the children screen without her name.
export default function Welcome({ entries, set, onContinue, onSkip }) {
  return (
    <OnboardingShell
      primary={<Button kind="primary" full onClick={onContinue}>{words.continue}</Button>}
      skip={<Button kind="text" className={styles.link} onClick={onSkip}>{words.skip}</Button>}
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
      </div>
    </OnboardingShell>
  );
}
