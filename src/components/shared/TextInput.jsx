import styles from './TextInput.module.css';

// The library's TextInput (3285:17000): a label in Body strong, a 44 px field in Body on the control
// surface, and an optional helper line in Meta, centered beneath it. A field labeled by a line
// elsewhere on the screen, such as keeping the plan's line on 0c, takes that line's id as labelledBy
// and shows no label of its own (issues O46, O48).
export default function TextInput({ id, label, labelledBy, helper, value, onChange, type = 'text', inputMode, autoComplete, placeholder }) {
  return (
    <div className={styles.textInput}>
      {!labelledBy && <label className={styles.label} htmlFor={id}>{label}</label>}
      <span className={styles.field}>
        <input
          id={id}
          className={styles.input}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          value={value}
          placeholder={placeholder}
          aria-labelledby={labelledBy}
          aria-describedby={helper ? `${id}-helper` : undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      </span>
      {helper && <p id={`${id}-helper`} className={styles.helper}>{helper}</p>}
    </div>
  );
}
