import AppFrame from './AppFrame.jsx';
import Foot from './Foot.jsx';
import Icon from '../shared/Icon.jsx';
import { useNavigation } from './navigation.js';
import useLongPress from '../../hooks/useLongPress.js';
import { back } from '../../copy/navigation.js';
import styles from './Layout.module.css';

// Onboarding and setup, 0w to 0j except the thinking screens, and the capture conversation (0a), which
// shares its fixed top bar (spec §2). The top bar holds Back, which the frames draw as an arrow.
// Onboarding has no step counter (spec §3, standing decision 4). The content scrolls, and the
// primary button and the skip link are anchored at the foot. There is no tab bar, so there is no
// sidebar at wider sizes either. Onboarding has no monogram, so a long press on the top bar opens the
// household switcher (issue X4).
export default function OnboardingShell({ onBack, primary, skip, foot, children }) {
  const { openSwitcher } = useNavigation();
  const press = useLongPress(openSwitcher);
  return (
    <AppFrame surface="canvas" navigation={false}>
      <div className={styles.topBar} data-empty={!onBack ? true : undefined} {...press}>
        {onBack && (
          <button type="button" className={styles.topBarBack} aria-label={back} onClick={onBack}>
            <Icon name="back" />
          </button>
        )}
      </div>
      <main className={styles.content}>{children}</main>
      <Foot surface="canvas">
        {foot ?? (
          <div className={`${styles.primaryFoot} ${styles.onboardingFoot}`}>
            {primary}
            {skip}
          </div>
        )}
      </Foot>
    </AppFrame>
  );
}
