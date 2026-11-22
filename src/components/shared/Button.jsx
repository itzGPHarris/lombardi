import Icon from './Icon.jsx';
import styles from './Button.module.css';

// The library's Button (2760:37878). Primary for the one action that matters, Secondary for a second
// choice, Outlined for Remind me and Directions under Now with their icons, and Text for links such
// as Other options and Undo. Every kind is the tap target tall. Active is the set state of an Outlined
// button, such as "Reminder at 2:00pm", which the frames draw as the Secondary kind.
export default function Button({ kind = 'primary', icon, trailingIcon, active = false, full = false, children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      data-kind={kind}
      data-active={active || undefined}
      data-full={full || undefined}
      {...props}
    >
      {icon && <span className={styles.icon}><Icon name={icon} /></span>}
      <span className={styles.label}>{children}</span>
      {trailingIcon && <span className={styles.icon}><Icon name={trailingIcon} /></span>}
    </button>
  );
}
