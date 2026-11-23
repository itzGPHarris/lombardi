import { useMemo, useState } from 'react';
import AppFrame from '../Layout/AppFrame.jsx';
import Foot from '../Layout/Foot.jsx';
import StillShell from '../Layout/StillShell.jsx';
import Monogram from '../shared/Monogram.jsx';
import TabBar from '../shared/TabBar.jsx';
import PhaseHeader from '../Today/PhaseHeader.jsx';
import RequestCard from './RequestCard.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { recipientView } from '../../demo/requests.js';
import { wordmark } from '../../copy/navigation.js';
import styles from './Requests.module.css';

// The recipient's side through View as (spec §9 and §15). Someone with MVP sees their own Today: their
// monogram, the dateline and the requests Charlotte has sent them, and nothing else of her plan
// (AGENTS.md rule 6). Their other tabs are not part of the demo. Someone without MVP sees the text
// message with its link, and the link opens the web page, which needs no account.
export default function RecipientView({ personId }) {
  const { session, dispatch, household } = useSession();
  const seed = household.seed;
  const view = useMemo(
    () => recipientView({ seed, momentId: session.momentId, played: session.played, personId }),
    [seed, session.momentId, session.played, personId],
  );
  const [page, setPage] = useState(false);
  const childName = (id) => seed.children.find((child) => child.id === id)?.name;
  const answer = (requestId) => dispatch({ type: 'STEP', trigger: `answer:${requestId}` });
  if (!view) return <StillShell />;
  const cards = view.cards.map((card) => <RequestCard key={card.id} card={card} childName={childName} onAnswer={answer} keepsText={!view.hasMVP} />);

  if (!view.hasMVP) {
    // The text message, until she follows its link; a request sent with no code opens the page.
    if (view.message?.link && !page) {
      return (
        <StillShell surface="canvas" navigation={false}>
          <div className={styles.still}>
            <p className={styles.bubble}>
              {view.message.text}
              {' '}
              <button type="button" className={styles.link} onClick={() => setPage(true)}>{view.message.link}</button>
            </p>
          </div>
        </StillShell>
      );
    }
    return (
      <StillShell surface="canvas" navigation={false} scrolls>
        <div className={styles.web}>
          <p className={styles.wordmark}>{wordmark}</p>
          {cards}
        </div>
      </StillShell>
    );
  }

  return (
    <AppFrame surface="canvas">
      <header className={styles.recipientHeader}>
        <PhaseHeader dateline={view.dateline} />
        <Monogram />
      </header>
      <main className={styles.recipient}>{cards}</main>
      <Foot surface="canvas"><TabBar /></Foot>
    </AppFrame>
  );
}
