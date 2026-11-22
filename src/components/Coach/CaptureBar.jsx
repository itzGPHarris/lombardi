import { useLayoutEffect, useRef, useState } from 'react';
import Icon from '../shared/Icon.jsx';
import { captureBar as words } from '../../copy/today.js';
import styles from './CaptureBar.module.css';

// The capture bar (spec §2, "Getting things in"; library CaptureBar 2986:26036), shared by Today, the
// game plan and the Coach tab. It is a field, not a button: the placeholder, then attach, camera and
// microphone. While she has typed text the arrow "Give this to the coach" joins them. Past one line the
// text takes the full width and grows up to five lines, with the controls on a row beneath. What the
// coach does with it is scripted per moment (spec §7, "Prototype"): each control hands its tap to the
// screen that holds the bar, which plays the moment's step for it or does nothing when there is none.
// In a moment that scripts what she types, the field fills in the fixtures' words as it takes focus,
// so the presenter only taps (C-03a, C-09). A photo she has taken waits above the text as a small
// thumbnail until she gives it to the coach. The screen can hold the text itself (value and
// onChange), so it survives the staged camera.
const MAX_LINES = 5;

export default function CaptureBar({ onGive, onAttach, onCamera, onVoice, scripted = '', value, onChange, photo = null }) {
  const [own, setOwn] = useState('');
  const text = value ?? own;
  const setText = onChange ?? setOwn;
  const fill = () => { if (!text && scripted) setText(scripted); };
  const [multiline, setMultiline] = useState(false);
  const fieldRef = useRef(null);

  useLayoutEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    field.style.height = 'auto';
    const lineHeight = parseFloat(getComputedStyle(field).lineHeight);
    // An empty field measures one line: the placeholder never makes the bar multi-line, even where
    // it wraps at 390.
    const lines = text ? Math.round(field.scrollHeight / lineHeight) : 1;
    field.style.height = `${Math.min(lines, MAX_LINES) * lineHeight}px`;
    setMultiline(lines > 1);
  }, [text]);

  const controls = (
    <span className={styles.controls}>
      <button type="button" className={styles.control} aria-label={words.attach} onClick={onAttach}><Icon name="attach" /></button>
      <button type="button" className={styles.control} aria-label={words.camera} onClick={onCamera}><Icon name="camera" /></button>
      <button type="button" className={styles.control} aria-label={words.microphone} onClick={onVoice}><Icon name="voice" /></button>
      {(text.trim() || photo) && (
        <button type="button" className={styles.give} aria-label={words.give} onClick={() => { onGive?.(text.trim()); setText(''); }}>
          <Icon name="give-to-coach" />
        </button>
      )}
    </span>
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.bar} data-multiline={multiline || photo || undefined}>
        {photo && <span className={styles.thumbnail} role="img" aria-label={photo.alt} />}
        <textarea
          ref={fieldRef}
          data-capture-field
          className={styles.field}
          rows={1}
          value={text}
          placeholder={words.placeholder}
          aria-label={words.placeholder}
          onFocus={fill}
          onChange={(event) => setText(event.target.value)}
        />
        {controls}
      </div>
    </div>
  );
}
