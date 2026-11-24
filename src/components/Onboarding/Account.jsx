import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import Sheet from '../shared/Sheet.jsx';
import { Field } from './parts.jsx';
import { back } from '../../copy/navigation.js';
import { accountPrompt as words } from '../../copy/onboarding.js';
import layout from '../Layout/Layout.module.css';
import own from './Account.module.css';

// The one field the account asks for: the email the school writes to, with its placeholder and helper
// line (fixtures 3.56 section 4). Her name is already known from the welcome, and there is no Continue
// with Apple, because the account has to match how the school reaches her (issue O36).
function EmailField({ id, email, setEmail }) {
  return (
    <Field
      id={id}
      label={words.emailLabel}
      placeholder={words.email}
      helper={words.helper}
      type="email"
      autoComplete="email"
      value={email}
      onChange={setEmail}
    />
  );
}

// Keeping the plan, at the end of the draft page under a hairline (0c-c, 3282:17819): the heading,
// its line, the email field, Continue and Not now. Continue goes on to the plan screen and creates
// nothing; Not now ends the session.
export function KeepPlan({ heading, email, setEmail, onContinue, onNotNow, sectionRef }) {
  return (
    <section ref={sectionRef} className={own.keep} aria-labelledby="keep-plan">
      <h2 id="keep-plan" className={own.heading}>{heading}</h2>
      <p className={own.line}>{words.line}</p>
      <EmailField id="keep-email" email={email} setEmail={setEmail} />
      <div className={own.actions}>
        <Button kind="primary" full onClick={onContinue}>{words.continue}</Button>
        <Button kind="text" onClick={onNotNow}>{words.notNow}</Button>
      </div>
    </section>
  );
}

// The account sheet over the capture conversation when she skipped the capture (0c-b, 3282:18620):
// "Create your account", the email field and Continue, with no line, no Not now and no Close. Back
// closes it, so the screen's Back is laid over the scrim where the top bar holds it (fixtures C-00;
// Greg's correction 2 on the onboarding plan).
export function AccountSheet({ open, email, setEmail, onContinue, onBack }) {
  return (
    <Sheet
      open={open}
      onClose={onBack}
      bare
      heading={words.headingNoCapture}
      above={(
        <div className={`${layout.topBar} ${own.overScrim}`}>
          <button type="button" className={layout.topBarBack} aria-label={back} onClick={onBack}>
            <Icon name="back" />
          </button>
        </div>
      )}
      footer={<Button kind="primary" full onClick={onContinue}>{words.continue}</Button>}
    >
      <div className={own.sheetBody}>
        <EmailField id="account-email" email={email} setEmail={setEmail} />
      </div>
    </Sheet>
  );
}
