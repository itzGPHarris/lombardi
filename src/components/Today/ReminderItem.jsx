import { useEffect, useRef } from 'react';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import { checklist as words } from '../../copy/today.js';
import styles from './ReminderItem.module.css';

// One row of a checklist on Today (spec §5, standing decision 25; library ReminderItem 3001:12372).
// The row sits in its own container in the children's tint, the check in a fixed column at the left,
// and the whole row outside its button ticks it. Item has a remove button; Task has its own button,
// such as Call, in place of it; Choosing asks how long to take a repeating item off; New is the row
// she types into after "Add something else for" a child.
export default function ReminderItem({ row, onTick, onRemove, choosing, choices, onChoose, onCancelChoosing, onTask }) {
  const rowRef = useRef(null);

  // Tapping anywhere else while she is choosing cancels the choice.
  useEffect(() => {
    if (!choosing) return undefined;
    const cancel = (event) => { if (!rowRef.current?.contains(event.target)) onCancelChoosing(); };
    document.addEventListener('pointerdown', cancel);
    return () => document.removeEventListener('pointerdown', cancel);
  }, [choosing, onCancelChoosing]);

  return (
    <li ref={rowRef} className={styles.row} data-ticked={row.ticked || undefined} onClick={choosing ? undefined : onTick}>
      <button type="button" className={styles.main} role="checkbox" aria-checked={row.ticked} disabled={choosing}>
        <span className={styles.checkColumn}>
          <span className={styles.check}>{row.ticked && <Icon name="check" />}</span>
        </span>
        <span className={styles.body}>
          <span className={styles.text}>{row.text}</span>
          {row.contact && <span className={styles.contact}>{row.contact}</span>}
        </span>
      </button>
      {row.kind === 'task' && (
        <Button kind="outlined" className={styles.taskButton} onClick={(event) => { event.stopPropagation(); onTask?.(row); }}>{row.button}</Button>
      )}
      {row.kind === 'item' && !choosing && (
        <button
          type="button"
          className={styles.remove}
          aria-label={`${words.removeLabel} ${row.text}`}
          onClick={(event) => { event.stopPropagation(); onRemove(row); }}
        >
          <Icon name="close" />
        </button>
      )}
      {choosing && (
        <span className={styles.choices}>
          {choices.map((choice) => (
            <Button key={choice.id} kind="outlined" onClick={(event) => { event.stopPropagation(); onChoose(choice); }}>{choice.label}</Button>
          ))}
        </span>
      )}
    </li>
  );
}

// The row she types into (ReminderItem's New state). Return adds what she typed, and leaving the
// field empty drops the row.
export function NewReminderItem({ placeholder, onAdd, onDrop }) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ block: 'nearest' });
  }, []);
  return (
    <li className={styles.row} data-new>
      <span className={styles.checkColumn}><span className={styles.check} /></span>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        aria-label={placeholder}
        enterKeyHint="done"
        onKeyDown={(event) => {
          if (event.key !== 'Enter') return;
          event.preventDefault();
          const text = event.currentTarget.value.trim();
          if (text) onAdd(text); else onDrop();
        }}
        onBlur={(event) => { if (!event.currentTarget.value.trim()) onDrop(); }}
      />
    </li>
  );
}
