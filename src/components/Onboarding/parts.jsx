import markArt from '../../assets/brand/mark-small.svg';
import Icon from '../shared/Icon.jsx';
import styles from './Onboarding.module.css';

// The small MVP mark above an onboarding headline (0w, 0t, 0p).
export function Mark() {
  return <img className={styles.mark} src={markArt} alt="" />;
}

// A labeled text field (library TextInput), filled with what she entered, with a placeholder and a
// helper line beneath it where the fixtures write them, such as the email on 0c-c.
export function Field({ label, value, onChange, type = 'text', inputMode, autoComplete, id, helper, placeholder }) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.box}>
        <input id={id} className={styles.input} type={type} inputMode={inputMode} autoComplete={autoComplete} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
      </span>
      {helper && <span className={styles.helper}>{helper}</span>}
    </label>
  );
}

// A field that shows its value in words, with a native control laid over it, such as the birth month,
// so the phone's own picker opens when she taps it.
export function PickerField({ label, display, icon, children }) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.box}>
        <span className={styles.boxValue}>{display}</span>
        {icon && <span className={styles.boxIcon}><Icon name={icon} /></span>}
        {children}
      </span>
    </div>
  );
}
