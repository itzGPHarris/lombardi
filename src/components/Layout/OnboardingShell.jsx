import AppFrame from './AppFrame.jsx';
import Foot from './Foot.jsx';
import Icon from '../shared/Icon.jsx';
import { useNavigation } from './navigation.js';
import useLongPress from '../../hooks/useLongPress.js';
import { back } from '../../copy/navigation.js';
import styles from './Layout.module.css';

// Onboarding and setup, 0w to 0j except the thinking screens (spec §2). The top bar holds Back, which
// the frames draw as an arrow, and on setup screens the step counter. The content scrolls, and the
// primary button and the skip link are anchored at the foot. There is no tab bar, so there is no
// sidebar at wider sizes either. Onboarding has no monogram, so a long press on the top bar opens the
// household switcher (issue X4).
export default function OnboardingShell({ onBack, counter, primary, skip, foot, children }) {
  const { openSwitcher } = useNavigation();
  const press = useLongPress(openSwitcher);
  return (
    <AppFrame surface="canvas" navigation={false}>
      <div className={styles.topBar} data-empty={!onBack && !counter ? true : undefined} {...press}>
        {onBack && (
          <button type="button" className={styles.topBarBack} aria-label={back} onClick={onBack}>
            <Icon name="back" />
          </button>
        )}
        {counter && <div className={styles.topBarCounter}>{counter}</div>}
      </div>
      <main className={styles.content}>{children}</main>
      <Foot surface="canvas">
        {foot ?? (
          <div className={styles.primaryFoot}>
            {primary}
            {skip}
          </div>
        )}
      </Foot>
    </AppFrame>
  );
}
