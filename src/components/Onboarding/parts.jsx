import markArt from '../../assets/brand/mark-small.svg';
import Icon from '../shared/Icon.jsx';
import { STEPS } from '../../demo/onboarding.js';
import { stepCounter } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import counter from './StepCounter.module.css';

// The small MVP mark above an onboarding headline (0w, 0k, 0a, 0r, 0t, 0p).
export function Mark() {
  return <img className={styles.mark} src={markArt} alt="" />;
}

// The step counter on the four setup screens (StepCounter 2716:55011, four segments since O24).
export function StepCounter({ step }) {
  return (
    <div className={counter.counter}>
      <p className={counter.label}>{stepCounter.replace('{count}', step)}</p>
      <div className={counter.segments} aria-hidden="true">
        {Array.from({ length: STEPS }, (_, index) => <span key={index} className={counter.segment} data-done={index < step || undefined} />)}
      </div>
    </div>
  );
}

// A labeled text field, filled with what she entered, with a helper line beneath it where the
// fixtures write one, such as "Shown under their name on your Team." on Add someone.
export function Field({ label, value, onChange, type = 'text', inputMode, autoComplete, id, helper }) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.box}>
        <input id={id} className={styles.input} type={type} inputMode={inputMode} autoComplete={autoComplete} value={value} onChange={(event) => onChange(event.target.value)} />
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
