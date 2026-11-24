import { useEffect } from 'react';
import Button from '../shared/Button.jsx';
import StillShell from '../Layout/StillShell.jsx';
import Entrance from './Entrance.jsx';
import { Mark } from './parts.jsx';
import { THINKING_MS } from '../../demo/onboarding.js';
import { failures } from '../../copy/onboarding.js';
import styles from './Thinking.module.css';
import base from './Onboarding.module.css';

// The thinking dots (library ThinkingDots 397:1936), on the thinking screen and under the coach's
// reading line in the capture conversation (0a-c), the same dots in both places (issue O27).
export function ThinkingDots() {
  return (
    <span className={styles.dots} aria-hidden="true">
      <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
    </span>
  );
}

// The thinking screen for the draft (0t, 2853:11947): the MVP mark and a line saying what the coach is
// doing. It moves on by itself. A wait longer than twenty seconds replaces it with the slow
// state and Try again (spec §3), which the prototype shows only on request.
export default function Thinking({ line, slow = false, onDone, onTryAgain }) {
  useEffect(() => {
    if (slow) return undefined;
    const timer = setTimeout(onDone, THINKING_MS);
    return () => clearTimeout(timer);
  }, [slow, onDone]);
  return (
    <StillShell surface="canvas" navigation={false}>
      <div className={styles.thinking}>
        <Entrance order={0}><Mark /></Entrance>
        <Entrance order={1} as="h1" className={base.headline}>{line}</Entrance>
        {!slow && <ThinkingDots />}
        {slow && (
          <div className={styles.failure} role="alert">
            <p className={base.line}>{failures.slow}</p>
            <Button kind="primary" full onClick={onTryAgain}>{failures.tryAgain}</Button>
          </div>
        )}
      </div>
    </StillShell>
  );
}
