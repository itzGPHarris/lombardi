import { useEffect, useState } from 'react';
import Button from './Button.jsx';
import { coachCard } from '../../copy/today.js';
import styles from './Notice.module.css';

// A notice above the capture bar for about four seconds, with one line and Undo (spec §5, "The
// evening"), or a notification with no Undo (Arrival.jsx). A screen reader is told at once, and the
// prototype keeps the four seconds, because it cannot tell whether VoiceOver is on.
//
// A conflict notice (spec §8, "A new conflict reaches her as a notice") carries a link that names
// where it goes, and it is the one notice that moves: it rises in over standard and goes over
// standard (spec §19, "Motion", "Conflict notice"). With reduced motion it appears and goes in place.
const SHOWN_FOR = 4000;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Notice({ text, onUndo, onDismiss, link, onLink, rises = false }) {
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (rises && !reduced()) setLeaving(true);
      else onDismiss();
    }, SHOWN_FOR);
    return () => window.clearTimeout(timer);
  }, [text, onDismiss, rises]);
  return (
    <div
      className={styles.notice}
      data-undo={onUndo || link ? true : undefined}
      data-rises={rises || undefined}
      data-leaving={leaving || undefined}
      role="status"
      onAnimationEnd={leaving ? onDismiss : undefined}
    >
      <p className={styles.text}>{text}</p>
      {onUndo && <Button kind="text" onClick={onUndo}>{coachCard.undo}</Button>}
      {link && <Button kind="text" onClick={onLink}>{link}</Button>}
    </div>
  );
}
