import { useEffect, useRef } from 'react';
import Button from '../shared/Button.jsx';
import CoachDot from '../shared/CoachDot.jsx';
import styles from './ReadBackStrip.module.css';

// The read-back strip (spec §8, "Read-back strip"): when she gives the coach something through the
// capture bar on the game plan, the coach's line rises above the bar, with its dot and tint and a
// label naming the day. When something is unresolved it carries one button and Other options; when
// nothing is, as with the pumpkin in C-09, it says what is in the plan and has no button. It goes when
// she scrolls or taps elsewhere, and what it says stays in the plan. It rises over standard, and with
// reduced motion it appears in place (spec §19, "Motion").
export default function ReadBackStrip({ strip, onGone, onButton, onOther }) {
  const ref = useRef(null);
  useEffect(() => {
    const scrolled = () => onGone();
    const tapped = (event) => { if (!ref.current?.contains(event.target)) onGone(); };
    // The scroll that brings the bar into view as the strip arrives does not send it away.
    const frame = requestAnimationFrame(() => {
      window.addEventListener('scroll', scrolled, { passive: true });
      document.addEventListener('pointerdown', tapped);
    });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scrolled);
      document.removeEventListener('pointerdown', tapped);
    };
  }, [onGone]);
  return (
    <section ref={ref} className={styles.strip} role="status" aria-label={strip.label}>
      <p className={styles.label}><CoachDot />{strip.label}</p>
      <p className={styles.text}>{strip.text}</p>
      {strip.button && (
        <>
          <Button kind="primary" full onClick={onButton}>{strip.button.label}</Button>
          {strip.button.line && <p className={styles.line}>{strip.button.line}</p>}
        </>
      )}
      {strip.other && <Button kind="text" onClick={onOther}>{strip.other}</Button>}
    </section>
  );
}
