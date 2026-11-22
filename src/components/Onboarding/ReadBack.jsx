import Button from '../shared/Button.jsx';
import Choice from '../shared/Choice.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import CaptureBar from '../Coach/CaptureBar.jsx';
import photo from '../../assets/captures/rotation-calendar.jpg';
import { fill } from '../../demo/today.js';
import { coachLabel, confirm, failures, handOff } from '../../copy/onboarding.js';
import styles from './ReadBack.module.css';

// The read-back and hand-off (0b, 2853:11972), as a conversation in the fixtures' order: her photo,
// the coach's read-back, the control that confirms whose calendar it is, the coach's one question,
// her answer, then the hand-off with the button that starts the draft. "Something's not right" puts
// her in the capture bar with the read-back still in view. A capture that cannot be read replaces the
// read-back with its own state (spec §3), which the prototype shows only on request.
export default function ReadBack({ conversation, choices, chosen, onChoose, draftChild, unreadable, onMake, onRetake, onChooseAnother, alt }) {
  const [readBack, question, answer, handoff] = conversation;
  const focusCapture = () => document.querySelector('[data-capture-field]')?.focus();
  return (
    <OnboardingShell foot={<div className={styles.capture}><CaptureBar /></div>}>
      <div className={styles.conversation}>
        <div className={styles.mine}>
          <span className={styles.photoBubble}><img className={styles.photo} src={photo} alt={alt} /></span>
        </div>
        {unreadable ? (
          <div className={styles.coach}>
            <p className={styles.label}>{coachLabel}</p>
            <p className={styles.voice}>{failures.unreadable}</p>
            <div className={styles.actions}>
              <Button kind="primary" full onClick={onRetake}>{failures.retakePhoto}</Button>
              <Button kind="outlined" full onClick={onChooseAnother}>{failures.chooseAnother}</Button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.coach}>
              <p className={styles.label}>{coachLabel}</p>
              <p className={styles.voice}>{readBack.text}</p>
            </div>
            <div className={styles.confirm} role="group" aria-labelledby="confirm-question">
              <p id="confirm-question" className={styles.voice}>{confirm[readBack.confirm.kind]}</p>
              <div className={styles.choices}>
                {choices.map((choice) => (
                  <Choice key={choice.id} selected={choice.id === chosen} check onClick={() => onChoose(choice.id)}>
                    {fill(confirm.choice, { child: choice.name, grade: choice.short })}
                  </Choice>
                ))}
              </div>
            </div>
            <div className={styles.coach}>
              <p className={styles.label}>{coachLabel}</p>
              <p className={styles.voice}>{question.text}</p>
            </div>
            <div className={styles.mine}>
              <p className={styles.bubble}>{answer.text}</p>
            </div>
            <div className={styles.coach}>
              <p className={styles.label}>{coachLabel}</p>
              <p className={styles.voice}>{handoff.text}</p>
              <div className={styles.actions}>
                <Button kind="primary" full onClick={onMake}>{fill(handOff.make, { child: draftChild })}</Button>
                <Button kind="text" className={styles.link} onClick={focusCapture}>{handOff.somethingWrong}</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </OnboardingShell>
  );
}
