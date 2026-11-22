import { useEffect, useMemo } from 'react';
import ConversationShell from '../Layout/ConversationShell.jsx';
import Button from '../shared/Button.jsx';
import MessageField from './MessageField.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { groupView } from '../../demo/tabs.js';
import styles from './Team.module.css';

// A group's page (spec §10, "Group and post"; frame 2853:13352): Back and its name, "8 members · See
// members", New post, then the posts newest first, each with its replies, and "You created this group
// last week." at the end, with the note above the reply field. Opening it clears its "1 new".
export default function GroupPage({ groupId }) {
  const { session, dispatch, household } = useSession();
  const { openPage } = useNavigation();
  const view = useMemo(
    () => groupView({ seed: household.seed, momentId: session.momentId, played: session.played, groupId }),
    [household.seed, session.momentId, session.played, groupId],
  );
  useEffect(() => { dispatch({ type: 'SEEN', id: groupId }); }, [dispatch, groupId, session.played]);
  if (!view) return null;
  const entry = (item) => (
    <div className={styles.postHead}>
      <span className={styles.postAuthor}>{item.author}</span>
      <span className={styles.when}>{item.when}</span>
    </div>
  );
  return (
    <ConversationShell title={view.name} field={<><p className={styles.groupPrivacy}>{view.privacy}</p><MessageField placeholder={view.reply} /></>}>
      <div className={styles.groupTop}>
        <p className={styles.groupMembers}>
          {view.members} · <Button kind="text" onClick={() => openPage('members', groupId)}>{view.seeMembers}</Button>
        </p>
        <Button kind="outlined" onClick={() => openPage('compose', `people:${groupId}`)}>{view.newPost}</Button>
      </div>
      <div className={styles.posts}>
        {view.posts.map((post) => (
          <article key={post.id} className={styles.post}>
            {entry(post)}
            <p className={styles.messageText}>{post.text}</p>
            {post.replies.map((reply) => (
              <div key={reply.id} className={styles.reply}>
                {entry(reply)}
                <p className={styles.messageText}>{reply.text}</p>
              </div>
            ))}
          </article>
        ))}
        <p className={styles.created}>{view.created}</p>
      </div>
    </ConversationShell>
  );
}
