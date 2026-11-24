import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import photo from '../../assets/captures/rotation-calendar.jpg';
import { checkPhoto as words } from '../../copy/onboarding.js';
import styles from './StagedPhoto.module.css';
import base from '../Onboarding/Onboarding.module.css';

// The staged camera's photo check for capture on Today (fixtures C-03a): the photo at full width, then
// Use this photo or Retake. The prototype has no camera, so Retake shows the same prepared photo again,
// and a capture whose prepared photo is not in the repository shows a plain tile in its place
// (docs/issues.csv). Onboarding checked its photo on a screen like this (0v) until fixtures 3.56 moved
// the check into the capture conversation (0a-b, issue O36).
export default function StagedPhoto({ onUse, onRetake, alt, onBack, src = photo }) {
  return (
    <OnboardingShell
      onBack={onBack}
      primary={(
        <div className={base.buttons}>
          <Button kind="primary" full onClick={onUse}>{words.use}</Button>
          <Button kind="outlined" full onClick={onRetake}>{words.retake}</Button>
        </div>
      )}
    >
      <div className={styles.photoPage}>
        {src ? <img className={styles.photo} src={src} alt={alt} /> : <div className={styles.placeholder} role="img" aria-label={alt} />}
      </div>
    </OnboardingShell>
  );
}
