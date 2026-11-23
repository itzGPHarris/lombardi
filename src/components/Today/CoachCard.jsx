import { useEffect, useRef, useState } from 'react';
import Button from '../shared/Button.jsx';
import CoachDot from '../shared/CoachDot.jsx';
import Icon from '../shared/Icon.jsx';
import { coachCard as words } from '../../copy/today.js';
import styles from './CoachCard.module.css';

// The coach card, the only card on Today (spec §5, "The coach card"; library CoachCard 2760:40211).
// It makes one recommendation with one button, and after she answers it keeps the thread: the
// recommendation stays in muted ink, then "Agreed" or the plan she chose beside a cerulean check, then
// only what comes next. It fades in while rising when it first appears, and its content crossfades when
// she answers, so the card never jumps (spec §19, "Coach card"). Like the pass, it does not fade in
// again when she comes back to Today from another tab.
export default function CoachCard({ card, shown = false, onShown, onButton, onSecondary, onNext, onUndo, onCapture }) {
  const [appear] = useState(!shown);
  useEffect(() => { if (!shown) onShown?.(card.id); }, [shown, onShown, card.id]);
  const firstState = useRef(card.state);
  const answered = card.state !== firstState.current;
  const after = card.state !== 'open';
  // While the coach reads a capture: the label and the line saying so (fixtures C-03a).
  if (card.state === 'reading') {
    return (
      <article className={styles.card} data-appear={appear || undefined} aria-label={card.label} aria-busy="true">
        <p className={styles.label}><CoachDot /><span>{card.label}</span></p>
        <p className={styles.text}>{card.text}</p>
      </article>
    );
  }
  return (
    <article className={styles.card} data-appear={appear || undefined} aria-label={card.label}>
      <p className={styles.label}><CoachDot /><span>{card.label}</span></p>
      <div className={styles.body} key={card.state} data-crossfade={answered || undefined}>
        {/* After she adds what the coach read from a capture, the card says only how the plan stands
            (spec §5; fixtures C-03a). */}
        {!(after && card.fromCapture) && <p className={styles.text} data-muted={after || undefined}>{card.text}</p>}
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
            {!card.fromCapture && (
              <p className={styles.answer} data-chosen={card.state === 'choice' || undefined}>
                <span className={styles.check}><Icon name="check" /></span>
                <span>{card.state === 'agree' ? words.agreed : card.chosenText}</span>
              </p>
            )}
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
