import { useRef } from 'react';
import Button from '../shared/Button.jsx';
import CoachDot from '../shared/CoachDot.jsx';
import Icon from '../shared/Icon.jsx';
import { coachCard as words } from '../../copy/today.js';
import styles from './CoachCard.module.css';

// The coach card, the only card on Today (spec §5, "The coach card"; library CoachCard 2760:40211).
// It makes one recommendation with one button, and after she answers it keeps the thread: the
// recommendation stays in muted ink, then "Agreed" or the plan she chose beside a cerulean check, then
// only what comes next. It fades in while rising when it first appears, and its content crossfades when
// she answers, so the card never jumps (spec §19, "Coach card").
export default function CoachCard({ card, onButton, onSecondary, onNext, onUndo, onCapture }) {
  const firstState = useRef(card.state);
  const answered = card.state !== firstState.current;
  const after = card.state !== 'open';
  return (
    <article className={styles.card} aria-label={card.label}>
      <p className={styles.label}><CoachDot /><span>{card.label}</span></p>
      <div className={styles.body} key={card.state} data-crossfade={answered || undefined}>
        <p className={styles.text} data-muted={after || undefined}>{card.text}</p>
        {!after && (
          <>
            {card.button && <Button kind="primary" full onClick={() => onButton(card)}>{card.button.label}</Button>}
            {card.captureButtons?.map((button) => (
              <Button key={button.id} kind="outlined" full icon={button.icon} onClick={() => onCapture?.(card, button)}>{button.label}</Button>
            ))}
            {card.button?.line && <p className={styles.line}>{card.button.line}</p>}
            {card.secondary && <Button kind="text" className={styles.secondary} onClick={() => onSecondary(card)}>{card.secondary.label}</Button>}
          </>
        )}
        {after && (
          <>
            <p className={styles.answer} data-chosen={card.state === 'choice' || undefined}>
              <span className={styles.check}><Icon name="check" /></span>
              <span>{card.state === 'agree' ? words.agreed : card.chosenText}</span>
            </p>
            {card.followUp && <p className={styles.text}>{card.followUp}</p>}
            {card.nextButton && (
              <Button kind="primary" full icon={card.nextButton.external ? 'external-link' : undefined} onClick={() => onNext(card)}>
                {card.nextButton.label}
              </Button>
            )}
            {card.nextButton?.line && <p className={styles.line}>{card.nextButton.line}</p>}
            {(card.link || card.meta) && (
              <div className={styles.footer}>
                {card.link ? <Button kind="text" onClick={() => onUndo(card)}>{card.link}</Button> : <span />}
                {card.meta && <p className={styles.meta}>{card.meta}</p>}
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}
