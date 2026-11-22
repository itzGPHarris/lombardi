import appleLogo from '../../assets/brand/apple-logo.svg';
import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import { Field, StepCounter } from './parts.jsx';
import { account as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Account.module.css';

// Create your account (0e, 2853:12979), 01 of 04. Her name is already known from the welcome, so it
// asks only how she signs in. Both ways go on to the plan screen, and nothing is created. Back returns
// to the draft with the account prompt open.
export default function Account({ email, setEmail, onContinue, onBack }) {
  return (
    <OnboardingShell
      onBack={onBack}
      counter={<StepCounter step={1} />}
      primary={(
        <Entrance order={3} className={styles.buttons}>
          <button type="button" className={own.apple} onClick={onContinue}>
            <img className={own.appleLogo} src={appleLogo} alt="" />
            <span>{words.apple}</span>
          </button>
        </Entrance>
      )}
    >
      <div className={styles.page} data-top="none">
        <Entrance order={1} as="h1" className={styles.headline}>{words.heading}</Entrance>
        <Entrance order={2} className={styles.fields}>
          <Field id="account-email" label={words.email} type="email" autoComplete="email" value={email} onChange={setEmail} />
          <Button kind="primary" full onClick={onContinue}>{words.continue}</Button>
        </Entrance>
      </div>
    </OnboardingShell>
  );
}
