import { useLayoutEffect, useRef, useState } from 'react';
import Icon from '../shared/Icon.jsx';
import { captureBar as words } from '../../copy/today.js';
import styles from './CaptureBar.module.css';

// The capture bar (spec §2, "Getting things in"; library CaptureBar 2986:26036), shared by Today, the
// game plan and the Coach tab. It is a field, not a button: the placeholder, then attach, camera and
// microphone. While she has typed text the arrow "Give this to the coach" joins them. Past one line the
// text takes the full width and grows up to five lines, with the controls on a row beneath. What the
// coach does with it is scripted per moment, and Stage 6 wires it (C-03a); until then the arrow keeps
// what she typed.
const MAX_LINES = 5;

export default function CaptureBar({ onGive }) {
  const [text, setText] = useState('');
  const [multiline, setMultiline] = useState(false);
  const fieldRef = useRef(null);

  useLayoutEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    field.style.height = 'auto';
    const lineHeight = parseFloat(getComputedStyle(field).lineHeight);
    const lines = Math.round(field.scrollHeight / lineHeight);
    field.style.height = `${Math.min(lines, MAX_LINES) * lineHeight}px`;
    setMultiline(lines > 1);
  }, [text]);

  const controls = (
    <span className={styles.controls}>
      <button type="button" className={styles.control} aria-label={words.attach}><Icon name="attach" /></button>
      <button type="button" className={styles.control} aria-label={words.camera}><Icon name="camera" /></button>
      <button type="button" className={styles.control} aria-label={words.microphone}><Icon name="voice" /></button>
      {text.trim() && (
        <button type="button" className={styles.give} aria-label={words.give} onClick={() => onGive?.(text.trim())}>
          <Icon name="give-to-coach" />
        </button>
      )}
    </span>
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.bar} data-multiline={multiline || undefined}>
        <textarea
          ref={fieldRef}
          data-capture-field
          className={styles.field}
          rows={1}
          value={text}
          placeholder={words.placeholder}
          aria-label={words.placeholder}
          onChange={(event) => setText(event.target.value)}
        />
        {controls}
      </div>
    </div>
  );
}
