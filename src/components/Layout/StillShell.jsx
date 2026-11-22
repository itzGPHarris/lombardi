import AppFrame from './AppFrame.jsx';
import { useNavigation } from './navigation.js';
import useLongPress from '../../hooks/useLongPress.js';
import styles from './Layout.module.css';

// A still screen: the splash, the thinking screens, getting ready, a notification, the staged
// calendar permission and Ms. Reyes's web page (spec §2). Nothing is fixed and nothing scrolls,
// except Ms. Reyes's web page, which scrolls as any web page does. A still screen has no monogram,
// so a long press anywhere on it opens the household switcher (issue X4).
export default function StillShell({ scrolls = false, surface = 'card', navigation = true, onTap, children }) {
  const { openSwitcher } = useNavigation();
  // A tap anywhere moves some still screens on, such as the splash. A long press opens the switcher
  // and does not count as a tap.
  const press = useLongPress(openSwitcher, onTap);
  return (
    <AppFrame surface={surface} navigation={navigation}>
      <main className={styles.still} data-scrolls={scrolls || undefined} {...press}>{children}</main>
    </AppFrame>
  );
}
