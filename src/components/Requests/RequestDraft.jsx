import { useMemo, useState } from 'react';
import ComposerShell from '../Layout/ComposerShell.jsx';
import Button from '../shared/Button.jsx';
import RequestItem from './RequestItem.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { draftView } from '../../demo/requests.js';
import styles from './Requests.module.css';

// The draft (spec §9, "The draft screen"): a composer with Back, the address line, the text the coach
// drafted in her voice for her to change, a preview of the recipient's buttons, and Send at the foot.
// Nothing goes until she taps Send or "Send from" the app it is handed to (AGENTS.md rule 3). Sending
// plays the moment's step for it and returns her where she was; Back changes nothing. A request has
// no Undo once it has gone (spec §5). A handoff is staged: it returns her at once, and its task is on
// her list (spec §9, "Every handoff leaves a task").
export default function RequestDraft({ requestId }) {
  const { session, dispatch, household } = useSession();
  const { back } = useNavigation();
  const seed = household.seed;
  const view = useMemo(
    () => draftView({ seed, momentId: session.momentId, played: session.played, requestId }),
    [seed, session.momentId, session.played, requestId],
  );
  const [text, setText] = useState(view?.text ?? '');
  const childName = (id) => seed.children.find((child) => child.id === id)?.name;
  if (!view) return <ComposerShell heading="" onBack={back} />;
  const send = () => {
    dispatch({ type: 'STEP', trigger: `send:${view.id}` });
    back();
    // Sent from Ask for help, she returns to the item's page, which now shows the person asked.
    if (session.stack.at(-2)?.kind === 'ask-for-help') back();
  };
  return (
    <ComposerShell heading="" onBack={back} primary={<Button kind="primary" full disabled={!text.trim()} onClick={send}>{view.send}</Button>}>
      <div className={styles.draft}>
        <p className={styles.to}>{view.to}</p>
        <textarea className={styles.textBox} rows={2} value={text} aria-label={view.to} onChange={(event) => setText(event.target.value)} />
        {view.answers && (
          <>
            <p className={styles.answersLine}>{view.answers.line}</p>
            {/* The recipient's buttons, previewed: they do nothing on her side. */}
            {view.answers.rows.map((row) => (
              <div key={row.id} inert>
                <RequestItem row={row} childName={childName} words={view.answers} />
              </div>
            ))}
          </>
        )}
      </div>
    </ComposerShell>
  );
}
