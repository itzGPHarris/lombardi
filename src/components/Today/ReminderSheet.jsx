import { useState } from 'react';
import Sheet from '../shared/Sheet.jsx';
import Button from '../shared/Button.jsx';
import { reminderSheet as words } from '../../copy/today.js';
import styles from './ReminderSheet.module.css';

// The reminder sheet (spec §5, "Reminders and directions"). A reminder never sets itself: she picks
// one of the choices still ahead, the first preselected. Reopened on a reminder she has set, the choice
// is selected, the button reads Update reminder and Remove reminder sits beneath it. When notifications
// are off a line says so above the choices, with Open settings when she has said no before; both are
// staged in the prototype, and the reminder is kept either way.
export default function ReminderSheet({ open, sheet, notifications, onSet, onRemove, onClose }) {
  const [choice, setChoice] = useState(null);
  const [forKey, setForKey] = useState(sheet?.key);
  if (sheet?.key !== forKey) {
    setForKey(sheet?.key);
    setChoice(null);
  }
  if (!sheet) return <Sheet open={false} onClose={onClose} />;
  const selected = choice ?? sheet.selected;
  const footer = (
    <>
      <Button kind="primary" full onClick={() => onSet(sheet, sheet.choices.find((entry) => entry.id === selected))}>
        {sheet.isSet ? words.updateReminder : words.setReminder}
      </Button>
      {sheet.isSet && <Button kind="text" onClick={() => onRemove(sheet)}>{words.removeReminder}</Button>}
    </>
  );
  return (
    <Sheet open={open} onClose={onClose} heading={sheet.heading} line={sheet.line} footer={footer}>
      {notifications !== 'on' && (
        <div className={styles.off}>
          <p>{words.notificationsOff}</p>
          {notifications === 'off-declined' && <Button kind="text">{words.openSettings}</Button>}
        </div>
      )}
      <fieldset className={styles.choices}>
        <legend className={styles.legend}>{sheet.heading}</legend>
        {sheet.choices.map((entry) => (
          <label key={entry.id} className={styles.choice}>
            <input type="radio" name="reminder" className={styles.radio} checked={selected === entry.id} onChange={() => setChoice(entry.id)} />
            <span>{entry.label}</span>
          </label>
        ))}
      </fieldset>
    </Sheet>
  );
}
