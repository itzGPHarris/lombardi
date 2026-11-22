import { useEffect, useState } from 'react';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import StillShell from '../Layout/StillShell.jsx';
import { Mark } from './parts.jsx';
import { gettingReady as words } from '../../copy/onboarding.js';
import styles from './GettingReady.module.css';
import base from './Onboarding.module.css';

// The motion token's slow duration, read from src/tokens.css, so each step takes exactly as long as
// its bar takes to fill (spec §19, "Getting ready steps").
function slowMs() {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--motion-duration-slow').trim();
  return value.endsWith('ms') ? parseFloat(value) : parseFloat(value) * 1000;
}

// Getting everything ready (0p, 2853:12907): its steps finish in turn, each marked waiting, working or
// done, with no percentage, and the screen moves on to the coach's introduction when the last step
// that applies has finished. Account creation that fails replaces the steps, keeps everything she
// entered and offers Try again (spec §3), which the prototype shows only on request.
export default function GettingReady({ steps, failed, onDone, onTryAgain }) {
  const [finished, setFinished] = useState(0);
  useEffect(() => {
    if (failed) return undefined;
    if (finished >= steps.length) {
      onDone();
      return undefined;
    }
    const timer = setTimeout(() => setFinished((count) => count + 1), slowMs());
    return () => clearTimeout(timer);
  }, [failed, finished, steps.length, onDone]);

  return (
    <StillShell surface="canvas" navigation={false}>
      <div className={styles.ready}>
        <Mark />
        <h1 className={base.headline}>{words.headline}</h1>
        {failed ? (
          <div className={styles.failure} role="alert">
            <p className={base.line}>{words.failed}</p>
            <Button kind="primary" full onClick={onTryAgain}>{words.tryAgain}</Button>
          </div>
        ) : (
          <ol className={styles.steps}>
            {steps.map((step, index) => {
              const state = index < finished ? 'done' : index === finished ? 'working' : 'waiting';
              return (
                <li key={step} className={styles.step} data-state={state}>
                  <span className={styles.label}>{step}</span>
                  <span className={styles.check} aria-hidden="true">{state === 'done' && <Icon name="check" />}</span>
                  <span className={styles.track} aria-hidden="true"><span className={styles.fill} /></span>
                </li>
              );
            })}
          </ol>
        )}
        <p className={base.line}>{words.line}</p>
      </div>
    </StillShell>
  );
}
