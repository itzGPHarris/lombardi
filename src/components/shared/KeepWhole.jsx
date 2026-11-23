import styles from './KeepWhole.module.css';

// Keeps a phone number on one line, so a narrow row never breaks it at a hyphen, such as "707-" at
// the end of one line and "555-0170" on the next. The words are unchanged.
const phone = /(\(?\d{3}\)?[-. ]\d{3}-\d{4}|\d{3}-\d{4})/;

export default function KeepWhole({ text }) {
  return text.split(phone).map((part, index) => (index % 2 === 1 ? <span key={index} className={styles.whole}>{part}</span> : part));
}
