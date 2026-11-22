import styles from './Coach.module.css';
import { recommends } from '../../copy/coach.js';

// The coach's options (spec §6, "Options"; library OptionCard 2760:40639): what changed, the coach's
// reading of the day, then two or three ways it could go, the recommended one first with its tag.
// The option she chose shows its radio filled, and every option stays in view after she chooses.
export default function Options({ message }) {
  return (
    <div className={styles.coach}>
      {message.lead && <p className={styles.text}>{message.lead}</p>}
      {message.text && <p className={styles.text}>{message.text}</p>}
      <div className={styles.options}>
        {message.options.map((option) => (
          <div key={option.id} className={styles.option} data-chosen={option.chosen || undefined}>
            <div className={styles.optionTop}>
              <span className={styles.radio} data-on={option.chosen || undefined} aria-hidden="true" />
              {option.recommended && <span className={styles.tag}>{recommends}</span>}
            </div>
            <p className={styles.optionTitle}>{option.title}</p>
            <p className={styles.text}>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
