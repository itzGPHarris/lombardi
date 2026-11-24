import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import Entrance from './Entrance.jsx';
import { Mark } from './parts.jsx';
import { coachFirstCapture, firstCapture as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';

// Show me one thing (0a, 2853:11894): the coach's line as the headline, then the three ways in. A
// photo is checked first; a file or a voice note goes straight to reading. Skip for now opens the
// account prompt over this screen (0c-b, issue O35), and her first board then asks for one thing (0i-d).
export default function FirstCapture({ onCapture, onSkip, onBack, prompt }) {
  return (
    <OnboardingShell
      onBack={onBack}
      foot={prompt}
      primary={(
        <Entrance order={3} className={styles.buttons}>
          <Button kind="primary" full icon="camera" onClick={() => onCapture('photo')}>{words.takeAPhoto}</Button>
          <Button kind="outlined" full icon="file" onClick={() => onCapture('file')}>{words.attachAFile}</Button>
          <Button kind="outlined" full icon="voice" onClick={() => onCapture('voice')}>{words.talkOrType}</Button>
        </Entrance>
      )}
      skip={<Button kind="text" className={styles.link} onClick={onSkip}>{words.skip}</Button>}
    >
      <div className={styles.page}>
        <div className={styles.intro}>
          <Entrance order={0}><Mark /></Entrance>
          <Entrance order={1} as="h1" className={styles.headline}>{coachFirstCapture}</Entrance>
        </div>
      </div>
    </OnboardingShell>
  );
}
