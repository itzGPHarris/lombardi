import { useEffect, useState } from 'react';
import Icon from '../shared/Icon.jsx';
import styles from './ChecklistDone.module.css';

// The folded checklist (spec §5, "When a checklist is finished"): one line, a check that draws in
// once, then "Everything is packed for" and the leaving time, or in the evening "Everything is ready
// for" and the phase. The check draws only the first time this fold shows, and not again when she
// scrolls or comes back to Today. Nothing else happens: no praise, no coach line, no confetti.
export default function ChecklistDone({ text, drawn, onDrawn, onOpen }) {
  const [draw] = useState(!drawn);
  useEffect(() => { if (!drawn) onDrawn(); }, [drawn, onDrawn]);
  return (
    <button type="button" className={styles.done} onClick={onOpen} aria-expanded="false">
      <span className={styles.check} data-draw={draw || undefined}><Icon name="check" /></span>
      <span>{text}</span>
    </button>
  );
}
