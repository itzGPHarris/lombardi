import StillShell from '../Layout/StillShell.jsx';
import SteamStars from '../shared/SteamStars.jsx';
import mug from '../../assets/brand/mug.svg';
import mugStar from '../../assets/brand/mug-star.svg';
import wordmarkMvp from '../../assets/brand/wordmark-mvp.svg';
import wordmarkFull from '../../assets/brand/wordmark-full.svg';
import Entrance from './Entrance.jsx';
import { splash } from '../../copy/onboarding.js';
import styles from './Splash.module.css';

// The splash (0s, 2853:12205): the MVP mark with "Most Valuable Parent" beneath it, and the steam
// stars rising from the mug. It holds until she taps, and a long press opens the switcher.
export default function Splash({ onNext }) {
  return (
    <StillShell surface="canvas" navigation={false} onTap={onNext}>
      <div className={styles.splash} role="img" aria-label={splash}>
        <Entrance order={0} className={styles.steam}>
          <span className={styles.mug}>
            <img src={mug} alt="" />
            <img className={styles.mugStar} src={mugStar} alt="" />
          </span>
          <SteamStars className={styles.stars} />
        </Entrance>
        <Entrance order={1} className={styles.wordmark}><img src={wordmarkMvp} alt="" /></Entrance>
        <Entrance order={2} className={styles.wordmark}><img src={wordmarkFull} alt="" /></Entrance>
      </div>
    </StillShell>
  );
}
