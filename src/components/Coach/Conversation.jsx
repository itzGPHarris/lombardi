import Actions from './MessageActions.jsx';
import Choice from '../shared/Choice.jsx';
import Options from './Options.jsx';
import VoiceNote from './VoiceNote.jsx';
import CoachAnswer from './CoachAnswer.jsx';
import photo from '../../assets/captures/rotation-calendar.jpg';
import styles from './Coach.module.css';

// The Coach tab's conversation (spec §6, frame 2853:13617), oldest at the top under a heading for each
// day. What she says sits at the right in her own words; what the coach says is plain Body text on the
// page, never a bubble, so it reads as a helper rather than a chat partner (library CoachMessage).
// The buttons under a message and the coach's options play the moment's steps.
function Hers({ message }) {
  if (message.kind === 'voice-note') return <div className={styles.hers}><VoiceNote label={message.label} text={message.text} /></div>;
  if (message.kind === 'photo') {
    return <div className={styles.hers}><span className={styles.bubble}><img className={styles.photo} src={photo} alt={message.alt} /></span></div>;
  }
  return <div className={styles.hers}><p className={styles.bubble}>{message.text}</p></div>;
}

function Coach({ message, onAction, onChoose, onAddToItem, onOpenArticle }) {
  if (message.kind === 'options') return <Options message={message} onChoose={onChoose} />;
  if (message.kind === 'answer') return <CoachAnswer message={message} onAction={onAction} onAddToItem={onAddToItem} onOpenArticle={onOpenArticle} />;
  return (
    <div className={styles.coach}>
      {message.greeting && <p className={styles.text}>{message.greeting}</p>}
      <p className={styles.text}>{message.text}</p>
      {message.confirm && (
        <div className={styles.confirm} role="group" aria-label={message.confirm.question}>
          <p className={styles.text}>{message.confirm.question}</p>
          <div><Choice selected check>{message.confirm.chosen}</Choice></div>
        </div>
      )}
      {message.source && <p className={styles.source}>{message.source}</p>}
      <Actions actions={message.actions} onAction={onAction} />
    </div>
  );
}

export default function Conversation({ days, onAction, onChoose, onAddToItem, onOpenArticle }) {
  return (
    <div className={styles.conversation}>
      {days.map((day) => (
        <section key={day.heading} className={styles.day} aria-label={day.heading}>
          <h2 className={styles.dayHeading}>{day.heading}</h2>
          {day.messages.map((message) => (message.from === 'parent'
            ? <Hers key={message.id} message={message} />
            : <Coach key={message.id} message={message} onAction={onAction} onChoose={onChoose} onAddToItem={onAddToItem} onOpenArticle={onOpenArticle} />))}
        </section>
      ))}
    </div>
  );
}
