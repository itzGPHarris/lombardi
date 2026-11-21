import AppFrame from './AppFrame.jsx';
import Foot from './Foot.jsx';
import TitleBar from './TitleBar.jsx';
import BackLink from '../shared/BackLink.jsx';
import TabBar from '../shared/TabBar.jsx';
import styles from './Layout.module.css';

// A page opened inside a tab: a person, a child, a school card, an article, a group's members and
// Settings (spec §2). The title bar holds Back and the page's actions, with no monogram. The large
// title and everything beneath it scroll, and the tab bar is anchored at the foot.
export default function PageShell({ title, actions, onBack, children }) {
  return (
    <AppFrame>
      <TitleBar title={title} left={<BackLink onBack={onBack} />} right={actions} />
      <main className={styles.content}>{children}</main>
      <Foot>
        <TabBar />
      </Foot>
    </AppFrame>
  );
}
