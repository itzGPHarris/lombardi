import { useEffect, useMemo } from 'react';
import ConversationShell from '../Layout/ConversationShell.jsx';
import MessageField from './MessageField.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { chatView } from '../../demo/tabs.js';
import { nextScripted } from '../../demo/steps.js';
import styles from './Team.module.css';

// A chat with her circle (spec §10, "Chat"; frames 2853:13424 and 2853:13442): Back and the other
// people's names, who sees it, the messages oldest first with hers at the right, and the Message
// field with Send. The tab bar hides while it is open. Opening it clears its "1 new".
export default function ChatPage({ chatId }) {
  const { session, dispatch, household } = useSession();
  const view = useMemo(
    () => chatView({ seed: household.seed, momentId: session.momentId, played: session.played, chatId }),
    [household.seed, session.momentId, session.played, chatId],
  );
  // Opening it clears its "1 new", and so does a message arriving while it is open.
  useEffect(() => { dispatch({ type: 'SEEN', id: chatId }); }, [dispatch, chatId, session.played]);
  const scripted = nextScripted(household.seed, session.momentId, session.played);
  const trigger = `send-chat:${chatId}`;
  const words = scripted?.entry.trigger === trigger
    ? household.seed.chats.find((chat) => chat.id === chatId)?.messages.find((message) => message.id === scripted.step.set.chats[chatId].messages.at(-1))?.text
    : '';
  if (!view) return null;
  const field = <MessageField placeholder={view.field} send={view.send} scripted={words} onSend={() => dispatch({ type: 'STEP', trigger })} />;
  return (
    <ConversationShell title={view.name} opensAtEnd newest={view.messages.length} field={field}>
      <p className={styles.privacy}>{view.privacy}</p>
      <div className={styles.messages}>
        {view.messages.map((message) => (
          <div key={message.id} className={styles.message} data-mine={message.mine || undefined}>
            <p className={styles.messageMeta}>{message.author} · {message.when}</p>
            <p className={styles.messageText}>{message.text}</p>
          </div>
        ))}
      </div>
    </ConversationShell>
  );
}
