import AppFrame from './AppFrame.jsx';
import Foot from './Foot.jsx';
import BackLink from '../shared/BackLink.jsx';
import { useNavigation } from './navigation.js';
import useLongPress from '../../hooks/useLongPress.js';
import styles from './Layout.module.css';

// Onboarding and setup, 0w to 0j except the thinking screens (spec §2). The top bar holds Back and,
// on setup screens, the step counter. The content scrolls, and the primary button and the skip link
// are anchored at the foot. There is no tab bar. Onboarding has no monogram, so a long press on the
// top bar opens the household switcher (issue X4).
export default function OnboardingShell({ onBack, counter, primary, skip, children }) {
  const { openSwitcher } = useNavigation();
  const press = useLongPress(openSwitcher);
  return (
    <AppFrame>
      <div className={styles.topBar} {...press}>
        <div className={styles.barLeft}>{onBack && <BackLink onBack={onBack} />}</div>
        <div className={styles.barRight}>{counter}</div>
      </div>
      <main className={styles.content}>{children}</main>
      <Foot>
        <div className={styles.primaryFoot}>
          {primary}
          {skip}
        </div>
      </Foot>
    </AppFrame>
  );
}
