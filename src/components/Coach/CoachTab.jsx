import { useMemo } from 'react';
import ConversationShell from '../Layout/ConversationShell.jsx';
import CaptureBar from './CaptureBar.jsx';
import Conversation from './Conversation.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { coachView } from '../../demo/tabs.js';
import { articles } from '../../demo/articles.js';
import { tabs } from '../../copy/navigation.js';
import styles from './Coach.module.css';

// The Coach tab (spec §6): a conversation with the fixed title bar, the monogram and the tab bar,
// the capture bar at its foot, and the conversation as it stands at the moment, read from the seed.
// It opens at the newest message, as a conversation does. What a message's buttons open plays in
// Stage 6; an attached article already opens its page.
export default function CoachTab() {
  const { session, household } = useSession();
  const { openPage } = useNavigation();
  const view = useMemo(
    () => coachView({ seed: household.seed, articles, momentId: session.momentId, played: session.played }),
    [household.seed, session.momentId, session.played],
  );
  const title = tabs.find((tab) => tab.id === 'coach').label;
  return (
    <ConversationShell title={title} isTab opensAtEnd field={<div className={styles.capture}><CaptureBar /></div>}>
      <Conversation days={view.days} onOpenArticle={(id) => openPage('article', id)} />
    </ConversationShell>
  );
}
