import Icon from '../shared/Icon.jsx';
import styles from './Coach.module.css';
import { recommends } from '../../copy/coach.js';

// The coach's options (spec §6, "Options"; library OptionCard 2760:40639): what changed, the coach's
// reading of the day, then two or three ways it could go, the recommended one first with its tag.
// The option she chose shows icon/radio-on and the others icon/radio-off (K10), and every option
// stays in view after she chooses.
// Until she chooses, each option is a control, and choosing one plays the moment's step for it (C-01).
export default function Options({ message, onChoose }) {
  const open = onChoose && !message.options.some((option) => option.chosen);
  return (
    <div className={styles.coach}>
      {message.lead && <p className={styles.text}>{message.lead}</p>}
      {message.text && <p className={styles.text}>{message.text}</p>}
      <div className={styles.options}>
        {message.options.map((option) => {
          const body = (
            <>
              <div className={styles.optionTop}>
                <span className={styles.radio}><Icon name={option.chosen ? 'radio-on' : 'radio-off'} /></span>
                {option.recommended && <span className={styles.tag}>{recommends}</span>}
              </div>
              <p className={styles.optionTitle}>{option.title}</p>
              <p className={styles.text}>{option.text}</p>
            </>
          );
          return open ? (
            <button key={option.id} type="button" className={styles.option} onClick={() => onChoose(message.id, option.id)}>{body}</button>
          ) : (
            <div key={option.id} className={styles.option} data-chosen={option.chosen || undefined}>{body}</div>
          );
        })}
      </div>
    </div>
  );
}
