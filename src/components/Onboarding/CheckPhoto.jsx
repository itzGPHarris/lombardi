import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import photo from '../../assets/captures/rotation-calendar.jpg';
import { checkPhoto as words } from '../../copy/onboarding.js';
import styles from './CheckPhoto.module.css';
import base from './Onboarding.module.css';

// Check the photo (0v, 2853:11916): the photo at full width, then Use this photo or Retake. The
// prototype has no camera, so Retake shows the same prepared photo again. The photo is the board's own
// until Greg supplies the October one (issues O9, O18).
export default function CheckPhoto({ onUse, onRetake, alt }) {
  return (
    <OnboardingShell
      primary={(
        <div className={base.buttons}>
          <Button kind="primary" full onClick={onUse}>{words.use}</Button>
          <Button kind="outlined" full onClick={onRetake}>{words.retake}</Button>
        </div>
      )}
    >
      <div className={styles.photoPage}>
        <img className={styles.photo} src={photo} alt={alt} />
      </div>
    </OnboardingShell>
  );
}
