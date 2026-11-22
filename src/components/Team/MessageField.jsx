import { useState } from 'react';
import Button from '../shared/Button.jsx';
import styles from './Team.module.css';

// The field at the foot of a chat or a group (spec §10): her words to people, not to the coach, so it
// carries Send rather than the capture bar's arrow. Return starts a new line; only Send sends. In a
// moment that scripts her message, such as "Sunday night it is." in C-05c, the field fills in the
// fixtures' words as it takes focus, and Send plays the step.
export default function MessageField({ placeholder, send, scripted = '', onSend }) {
  const [text, setText] = useState('');
  const fill = () => { if (!text && scripted) setText(scripted); };
  const sendIt = () => { onSend?.(text.trim()); setText(''); };
  return (
    <div className={styles.fieldBar}>
      <textarea className={styles.field} rows={1} value={text} placeholder={placeholder} aria-label={placeholder} onFocus={fill} onChange={(event) => setText(event.target.value)} />
      {send && text.trim() && <Button kind="primary" onClick={sendIt}>{send}</Button>}
    </div>
  );
}
