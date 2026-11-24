import appleLogo from '../../assets/brand/apple-logo.svg';
import Button from '../shared/Button.jsx';
import { Field } from './parts.jsx';
import { accountPrompt as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Account.module.css';

// The account prompt, anchored at the foot (0c, 2853:12011), with the sign-in that 0e (2853:12979)
// asked on a screen of its own until fixtures 3.54 (issue O35): Continue with Apple, the email field,
// Continue and Not now. Her name is already known from the welcome. Either way of signing in goes on
// to the plan screen, and nothing is created. Over 0a, when she skipped the capture, it is headed
// "Create your account" and has no line and no Not now (0c-b).
export default function AccountPrompt({ heading, line, email, setEmail, onContinue, onNotNow }) {
  return (
    <section className={own.prompt} aria-labelledby="account-prompt">
      <h2 id="account-prompt" className={own.heading}>{heading}</h2>
      {line && <p className={own.line}>{line}</p>}
      <div className={own.signIn}>
        <button type="button" className={own.apple} onClick={onContinue}>
          <img className={own.appleLogo} src={appleLogo} alt="" />
          <span>{words.apple}</span>
        </button>
        <Field id="account-email" label={words.email} type="email" autoComplete="email" value={email} onChange={setEmail} />
        <Button kind="primary" full onClick={onContinue}>{words.continue}</Button>
        {onNotNow && <Button kind="text" className={styles.link} onClick={onNotNow}>{words.notNow}</Button>}
      </div>
    </section>
  );
}
