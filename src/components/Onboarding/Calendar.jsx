import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import StillShell from '../Layout/StillShell.jsx';
import Entrance from './Entrance.jsx';
import { StepCounter } from './parts.jsx';
import { fill } from '../../demo/today.js';
import { calendar as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Calendar.module.css';

// Connect your calendar (0q, 2853:13014), 02 of 04. Each calendar opens the staged permission screen
// with its name; Not now goes on to the school screen and connecting stays in Settings. MVP reads her
// calendar and never changes it (AGENTS.md rule 4).
export function Calendar({ onPick, onSkip, onBack }) {
  return (
    <OnboardingShell
      onBack={onBack}
      counter={<StepCounter step={2} />}
      skip={<Button kind="text" className={styles.link} onClick={onSkip}>{words.notNow}</Button>}
    >
      <div className={styles.page} data-top="none">
        <Entrance order={1} as="h1" className={styles.headline}>{words.heading}</Entrance>
        <Entrance order={2} as="p" className={styles.line}>{words.line}</Entrance>
        <Entrance order={3} className={`${styles.buttons} ${own.choices}`}>
          {words.choices.map((choice) => <Button key={choice} kind="primary" full onClick={() => onPick(choice)}>{choice}</Button>)}
        </Entrance>
      </div>
    </OnboardingShell>
  );
}

// The calendar's permission, staged and generic (0q-b, 2853:13034): the calendar's name in plain text,
// with no logo, over the screen she came from. Allow connects nothing in the prototype.
export function CalendarPermission({ calendar, onAllow, onCancel }) {
  return (
    <StillShell surface="canvas" navigation={false}>
      <div className={own.permissionScreen}>
        <div className={own.behind} aria-hidden="true">
          <div className={own.behindBar}><span className={own.behindBack}><Icon name="back" /></span><StepCounter step={2} /></div>
          <p className={styles.headline}>{words.heading}</p>
          <p className={styles.line}>{words.line}</p>
        </div>
        <section className={own.permission} role="dialog" aria-modal="true" aria-labelledby="permission-ask">
          <p className={styles.line}>{calendar}</p>
          <h1 id="permission-ask" className={own.ask}>{words.permission}</h1>
          <div className={styles.buttons}>
            <Button kind="primary" full onClick={onAllow}>{words.allow}</Button>
            <Button kind="outlined" full onClick={onCancel}>{words.cancel}</Button>
          </div>
        </section>
      </div>
    </StillShell>
  );
}

// Connected (0q-c, 2853:13176): the connection, then Continue.
export function Connected({ calendar, onContinue, onBack }) {
  return (
    <OnboardingShell onBack={onBack} counter={<StepCounter step={2} />} primary={<Button kind="primary" full onClick={onContinue}>{words.continue}</Button>}>
      <div className={styles.page} data-top="none">
        <h1 className={styles.headline}>{words.heading}</h1>
        <p className={own.connected}>
          <span className={own.connectedCheck}><Icon name="check" /></span>
          <span>{fill(words.connected, { calendar })}</span>
        </p>
      </div>
    </OnboardingShell>
  );
}
