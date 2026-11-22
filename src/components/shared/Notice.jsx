import { useEffect } from 'react';
import Button from './Button.jsx';
import { coachCard } from '../../copy/today.js';
import styles from './Notice.module.css';

// A notice above the capture bar for about four seconds, with one line and Undo (spec §5, "The
// evening"), or a notification with no Undo (Arrival.jsx). A screen reader is told at once, and the
// prototype keeps the four seconds, because it cannot tell whether VoiceOver is on.
const SHOWN_FOR = 4000;

export default function Notice({ text, onUndo, onDismiss }) {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, SHOWN_FOR);
    return () => window.clearTimeout(timer);
  }, [text, onDismiss]);
  return (
    <div className={styles.notice} data-undo={onUndo ? true : undefined} role="status">
      <p className={styles.text}>{text}</p>
      {onUndo && <Button kind="text" onClick={onUndo}>{coachCard.undo}</Button>}
    </div>
  );
}
