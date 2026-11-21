import AppFrame from './AppFrame.jsx';
import Foot from './Foot.jsx';
import TitleBar from './TitleBar.jsx';
import Monogram from '../shared/Monogram.jsx';
import TabBar from '../shared/TabBar.jsx';
import styles from './Layout.module.css';

// A tab list: the game plan, Team and Kids (spec §2). The title bar holds the tab's actions and the
// monogram, the large title and everything beneath it scroll, and the tab bar is anchored at the
// foot, with the capture bar above it on the game plan. The game plan's week strip, passed as
// `stuck`, holds under the title bar, and `wide` lets the game plan open into its seven columns.
export default function TabListShell({ title, actions, stuck, capture, wide = false, children }) {
  return (
    <AppFrame wide={wide}>
      <TitleBar title={title} right={<>{actions}<Monogram /></>} />
      {stuck && <div className={styles.stuck}>{stuck}</div>}
      <main className={styles.content}>{children}</main>
      <Foot>
        {capture}
        <TabBar />
      </Foot>
    </AppFrame>
  );
}
