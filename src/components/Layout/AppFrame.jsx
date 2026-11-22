import Sidebar from '../shared/Sidebar.jsx';
import useVisualViewport from '../../hooks/useVisualViewport.js';
import styles from './Layout.module.css';

// Every shell renders inside the frame. On a phone the column is the screen. From 768 the sidebar
// takes the tab bar's place and the column sits beside it, centered at the phone's width, or up to
// the content maximum for the game plan (spec §2, "At wider screens", §19). Onboarding has no tab bar,
// so it has no sidebar either, and its column stays centered at the phone's width (navigation off).
export default function AppFrame({ wide = false, surface = 'card', navigation = true, children }) {
  useVisualViewport();
  return (
    <div className={styles.frame} data-surface={surface} data-navigation={navigation ? undefined : 'off'}>
      {navigation && <Sidebar />}
      <div className={styles.column} data-width={wide ? 'wide' : 'phone'}>{children}</div>
    </div>
  );
}
