import { useEffect } from 'react';
import AppFrame from './AppFrame.jsx';
import FixedHeader from './FixedHeader.jsx';
import Foot from './Foot.jsx';
import BackLink from '../shared/BackLink.jsx';
import Monogram from '../shared/Monogram.jsx';
import TabBar from '../shared/TabBar.jsx';
import styles from './Layout.module.css';

// A conversation: the Coach tab, a chat and a group's page (spec §2). The title bar is fixed and its
// title does not fade, and it holds the monogram on the Coach tab or Back on a chat. The messages
// scroll, and the capture bar or message field is anchored at the foot. It opens at the newest. Only the Coach tab, which is
// a tab, keeps the tab bar beneath it; a chat or a group's page hides it, as Messages does.
export default function ConversationShell({ title, isTab = false, onBack, field, opensAtEnd = false, newest = null, children }) {
  // A conversation opens at its newest message (spec §6), after the app has set the page to the top,
  // and goes to the newest again when a message joins it, such as a reply arriving (newest changes).
  useEffect(() => {
    if (!opensAtEnd) return undefined;
    const frame = requestAnimationFrame(() => window.scrollTo(0, document.documentElement.scrollHeight));
    return () => cancelAnimationFrame(frame);
  }, [opensAtEnd, newest]);
  return (
    <AppFrame>
      <FixedHeader title={title} back={isTab ? null : <BackLink onBack={onBack} />} right={isTab ? <Monogram /> : null} />
      <main className={styles.content}>{children}</main>
      <Foot>
        {field}
        {isTab && <TabBar />}
      </Foot>
    </AppFrame>
  );
}
