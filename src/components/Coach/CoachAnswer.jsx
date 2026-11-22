import Button from '../shared/Button.jsx';
import Actions from './MessageActions.jsx';
import { basedOn } from '../../copy/coach.js';
import styles from './Coach.module.css';

// An answer to her question (spec §6): the answer in Body, its buttons, the link that adds her
// question to an appointment and the coach's line once it has, "Based on" with the family details
// it used, and at most one MVP Editorial article. Adding her question to an appointment is her own
// note on the plan item, so it carries no Updated mark (spec §6, "Add to an appointment").
export default function CoachAnswer({ message, onAction, onAddToItem, onOpenArticle }) {
  return (
    <div className={styles.coach}>
      <p className={styles.text}>{message.text}</p>
      <Actions actions={message.actions} onAction={onAction} />
      {message.addToAppointment && (message.addToAppointment.done
        ? <p className={styles.text}>{message.addToAppointment.after}</p>
        : <Button kind="text" className={styles.link} onClick={() => onAddToItem?.(message.addToAppointment.item)}>{message.addToAppointment.label}</Button>)}
      <div className={styles.basedOn}>
        <p className={styles.basedOnHeading}>{basedOn}</p>
        <p className={styles.basedOnList}>{message.basedOn.join(' · ')}</p>
      </div>
      {message.article && (
        <button type="button" className={styles.article} onClick={() => onOpenArticle?.(message.article.id)}>
          <span className={styles.articleLine}>{message.article.line}</span>
          <span className={styles.articleTitle}>{message.article.title}</span>
        </button>
      )}
    </div>
  );
}
