import AppFrame from './AppFrame.jsx';
import styles from './Layout.module.css';

// A still screen: the splash, the thinking screens, getting ready, a notification, the staged
// calendar permission and Ms. Reyes's web page (spec §2). Nothing is fixed and nothing scrolls,
// except Ms. Reyes's web page, which scrolls as any web page does.
export default function StillShell({ scrolls = false, surface = 'card', children }) {
  return (
    <AppFrame surface={surface}>
      <main className={styles.still} data-scrolls={scrolls || undefined}>{children}</main>
    </AppFrame>
  );
}
