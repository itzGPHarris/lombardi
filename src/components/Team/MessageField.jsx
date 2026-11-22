import { useState } from 'react';
import Button from '../shared/Button.jsx';
import styles from './Team.module.css';

// The field at the foot of a chat or a group (spec §10): her words to people, not to the coach, so it
// carries Send rather than the capture bar's arrow. Return starts a new line; only Send sends, which
// plays in Stage 6 (C-05c, C-06c).
export default function MessageField({ placeholder, send }) {
  const [text, setText] = useState('');
  return (
    <div className={styles.fieldBar}>
      <textarea className={styles.field} rows={1} value={text} placeholder={placeholder} aria-label={placeholder} onChange={(event) => setText(event.target.value)} />
      {send && text.trim() && <Button kind="primary">{send}</Button>}
    </div>
  );
}
