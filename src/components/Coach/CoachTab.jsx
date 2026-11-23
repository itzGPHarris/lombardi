import { useMemo } from 'react';
import ConversationShell from '../Layout/ConversationShell.jsx';
import CaptureBar from './CaptureBar.jsx';
import Conversation from './Conversation.jsx';
import { useNavigation } from '../Layout/navigation.js';
import useActions from '../../hooks/useActions.js';
import { useSession } from '../../demo/SessionContext.js';
import { coachView } from '../../demo/tabs.js';
import { articles } from '../../demo/articles.js';
import { tabs } from '../../copy/navigation.js';
import styles from './Coach.module.css';

// The Coach tab (spec §6): a conversation with the fixed title bar, the monogram and the tab bar,
// the capture bar at its foot, and the conversation as it stands at the moment, read from the seed.
// It opens at the newest message, as a conversation does. Choosing an option and talking to the coach
// play the moment's steps (src/demo/steps.js); an attached article opens its page.
export default function CoachTab() {
  const { session, dispatch, household } = useSession();
  const step = (trigger) => dispatch({ type: 'STEP', trigger });
  const { openPage } = useNavigation();
  const run = useActions();
  const view = useMemo(
    () => coachView({ seed: household.seed, articles, momentId: session.momentId, played: session.played }),
    [household.seed, session.momentId, session.played],
  );
  const title = tabs.find((tab) => tab.id === 'coach').label;
  return (
    <ConversationShell title={title} isTab opensAtEnd newest={session.played} field={<div className={styles.capture}><CaptureBar onVoice={() => step('voice:coach')} /></div>}>
      <Conversation
        days={view.days}
        onAction={(action) => run(action.action)}
        onChoose={(messageId, optionId) => step(`option:${messageId}:${optionId}`)}
        onAddToItem={(itemId) => step(`add-to-item:${itemId}`)}
        onOpenArticle={(id) => openPage('article', id)}
      />
    </ConversationShell>
  );
}
