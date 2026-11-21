import AppFrame from './AppFrame.jsx';
import FixedHeader from './FixedHeader.jsx';
import Foot from './Foot.jsx';
import BackLink from '../shared/BackLink.jsx';
import styles from './Layout.module.css';

// A composer: new message, a post, a request draft, a draft handed to another app, Add someone and
// New group (spec §2). The title bar holds Back and the heading, the fields and the message scroll,
// and the primary button, such as Send, is anchored at the foot. The tab bar is hidden.
export default function ComposerShell({ heading, onBack, primary, children }) {
  return (
    <AppFrame>
      <FixedHeader title={heading} back={<BackLink onBack={onBack} />} />
      <main className={styles.content}>{children}</main>
      <Foot>
        <div className={styles.primaryFoot}>{primary}</div>
      </Foot>
    </AppFrame>
  );
}
