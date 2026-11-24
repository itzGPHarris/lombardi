import { useEffect } from 'react';
import Button from '../shared/Button.jsx';
import Choice from '../shared/Choice.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import CaptureBar from '../Coach/CaptureBar.jsx';
import { ThinkingDots } from './Thinking.jsx';
import photo from '../../assets/captures/rotation-calendar.jpg';
import { THINKING_MS, capturePhases } from '../../demo/onboarding.js';
import { fill } from '../../demo/today.js';
import { checkPhoto, coachFirstCapture, coachLabel, confirm, failures, firstCapture, handOff, thinking } from '../../copy/onboarding.js';
import styles from './CaptureConversation.module.css';

// The capture conversation (0a to 0a-e, spec §3, issue O36), one screen from the coach's request to the
// hand-off, built like the Coach tab: the coach's lines at full width under "MVP Coach:" in Voice, her
// photo and her words at the right, and whatever the step needs anchored at the foot.
//
// - 0a (2853:11894): the coach's line, and Take a photo, Attach a file, Talk or type and Skip for now.
// - 0a-b (2853:11916): the photo as a large preview in place of the three buttons, with Use this photo
//   and Retake. The prototype has no camera, so Retake shows the same prepared photo.
// - 0a-c (2853:11922): the photo moves into the conversation as her message, and the coach's reading
//   line shows with the thinking dots for two seconds.
// - 0a-d (3282:17800): the coach names the capture and asks whose it is, with no child chosen, and the
//   capture bar at the foot.
// - 0a-e (2853:11972): after her tap, the read-back and the coach's one question; her answer, typed in
//   the capture bar, then the hand-off, with Make Mallory's plan and "Something's not right" at the foot.
//
// The photo is Greg's October placeholder, the September sheet relabeled, so nothing the coach says is
// read from it: every fact comes from the fixtures (issue O18). The failure states, an unreadable
// capture and a slow read, show only from the development links.
export default function CaptureConversation({
  flags, failure, naming, readBack, question, answer, handoff, choices, draftChild, alt,
  act, onBack, onMake, sheet,
}) {
  const { capture, captureKind, chosenChild, correcting } = flags;
  const step = capturePhases.indexOf(capture);
  const reached = (phase) => step >= capturePhases.indexOf(phase);
  const reading = capture === 'reading';
  const unreadable = failure === 'unreadable' && reached('confirm');
  const slow = failure === 'slow-read' && reading;

  // The coach reads for two seconds, then names what it read (spec §3, "Prototype timing").
  useEffect(() => {
    if (!reading || slow) return undefined;
    const timer = setTimeout(() => act({ type: 'READ_DONE' }), THINKING_MS);
    return () => clearTimeout(timer);
  }, [reading, slow, act]);

  // The conversation opens at its newest message and follows each one that joins it, as the Coach tab
  // does (spec §6), so the frames for 0a-d and 0a-e show the end of it.
  useEffect(() => {
    if (step < 1) return undefined;
    const frame = requestAnimationFrame(() => window.scrollTo(0, document.documentElement.scrollHeight));
    return () => cancelAnimationFrame(frame);
  }, [step, correcting]);

  const readingLine = { photo: thinking.photo, file: thinking.file, voice: thinking.listening }[captureKind ?? 'photo'];

  let foot;
  if (capture === 'ask') {
    foot = (
      <div className={styles.foot}>
        <div className={styles.buttons}>
          <Button kind="primary" full icon="camera" onClick={() => act({ type: 'CAPTURE', kind: 'photo' })}>{firstCapture.takeAPhoto}</Button>
          <Button kind="outlined" full icon="file" onClick={() => act({ type: 'CAPTURE', kind: 'file' })}>{firstCapture.attachAFile}</Button>
          <Button kind="outlined" full icon="voice" onClick={() => act({ type: 'CAPTURE', kind: 'voice' })}>{firstCapture.talkOrType}</Button>
        </div>
        <Button kind="text" className={styles.underlined} onClick={() => act({ type: 'SKIP_CAPTURE' })}>{firstCapture.skip}</Button>
      </div>
    );
  } else if (capture === 'preview') {
    foot = (
      <div className={styles.foot}>
        <div className={styles.buttons}>
          <Button kind="primary" full onClick={() => act({ type: 'USE_PHOTO' })}>{checkPhoto.use}</Button>
          <Button kind="outlined" full onClick={() => act({ type: 'CAPTURE', kind: 'photo' })}>{checkPhoto.retake}</Button>
        </div>
      </div>
    );
  } else if (unreadable) {
    foot = (
      <div className={styles.foot}>
        <div className={styles.buttons}>
          <Button kind="primary" full onClick={() => act({ type: 'CAPTURE', kind: 'photo' })}>{failures.retakePhoto}</Button>
          <Button kind="outlined" full onClick={() => act({ type: 'CHOOSE_ANOTHER' })}>{failures.chooseAnother}</Button>
        </div>
      </div>
    );
  } else if (capture === 'handoff' && !correcting) {
    foot = (
      <div className={styles.foot}>
        <Button kind="primary" full onClick={onMake}>{fill(handOff.make, { child: draftChild })}</Button>
        <Button kind="text" onClick={() => act({ type: 'CORRECT' })}>{handOff.somethingWrong}</Button>
      </div>
    );
  } else if (capture === 'confirm' || capture === 'question' || correcting) {
    // She answers the coach's question in the capture bar, which fills in Charlotte's reply as it takes
    // focus. After "Something's not right" the bar takes her correction, which the prototype does not
    // script, and giving it returns her to the hand-off.
    foot = (
      <div className={styles.bar}>
        <CaptureBar
          key={correcting ? 'correcting' : capture}
          scripted={capture === 'question' ? answer.text : ''}
          onGive={capture === 'question' || correcting ? () => act({ type: 'ANSWER' }) : undefined}
        />
      </div>
    );
  }

  return (
    <OnboardingShell onBack={onBack} foot={foot ?? <span />}>
      <div className={styles.conversation}>
        <div className={styles.coach}>
          <p className={styles.label}>{coachLabel}</p>
          <p className={styles.voice}>{coachFirstCapture}</p>
        </div>
        {capture === 'preview' && <img className={styles.preview} src={photo} alt={alt} />}
        {reached('reading') && (
          <div className={styles.mine}>
            <span className={styles.photoBubble}><img className={styles.thumbnail} src={photo} alt={alt} /></span>
          </div>
        )}
        {reading && (
          <div className={styles.coach} role="status">
            <p className={styles.voice}>{readingLine}</p>
            {slow ? (
              <div className={styles.slow}>
                <p className={styles.voice}>{failures.slow}</p>
                <Button kind="primary" full onClick={() => act({ type: 'READ_AGAIN' })}>{failures.tryAgain}</Button>
              </div>
            ) : <ThinkingDots />}
          </div>
        )}
        {unreadable && (
          <div className={styles.coach}>
            <p className={styles.label}>{coachLabel}</p>
            <p className={styles.voice}>{failures.unreadable}</p>
          </div>
        )}
        {!unreadable && reached('confirm') && (
          <div className={styles.coach}>
            <p className={styles.label}>{coachLabel}</p>
            <p className={styles.voice}>{naming.text}</p>
            <div className={styles.confirm} role="group" aria-labelledby="confirm-question">
              <p id="confirm-question" className={styles.voice}>{confirm[naming.confirm.kind]}</p>
              <div className={styles.choices}>
                {choices.map((choice) => (
                  <Choice key={choice.id} selected={choice.id === chosenChild} check onClick={() => act({ type: 'CHOOSE_CHILD', child: choice.id })}>
                    {fill(confirm.choice, { child: choice.name, grade: choice.short })}
                  </Choice>
                ))}
              </div>
            </div>
          </div>
        )}
        {!unreadable && reached('question') && (
          <>
            <div className={styles.coach}>
              <p className={styles.label}>{coachLabel}</p>
              <p className={styles.voice}>{readBack.text}</p>
            </div>
            <div className={styles.coach}>
              <p className={styles.label}>{coachLabel}</p>
              <p className={styles.voice}>{question.text}</p>
            </div>
          </>
        )}
        {!unreadable && reached('handoff') && (
          <>
            <div className={styles.mine}><p className={styles.bubble}>{answer.text}</p></div>
            <div className={styles.coach}>
              <p className={styles.label}>{coachLabel}</p>
              <p className={styles.voice}>{handoff.text}</p>
            </div>
          </>
        )}
      </div>
      {sheet}
    </OnboardingShell>
  );
}
