import { useCallback, useMemo } from 'react';
import TodayShell from '../Layout/TodayShell.jsx';
import CaptureBar from '../Coach/CaptureBar.jsx';
import RecommendsCard from '../Recommends/RecommendsCard.jsx';
import Notice from '../shared/Notice.jsx';
import PhaseHeader from './PhaseHeader.jsx';
import NowPass from './NowPass.jsx';
import CoachCard from './CoachCard.jsx';
import LaterToday from './LaterToday.jsx';
import TomorrowStarts from './TomorrowStarts.jsx';
import TodaySheets from './TodaySheets.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { todayView } from '../../demo/today.js';
import { articles } from '../../demo/articles.js';
import * as people from '../../copy/people.js';
import styles from './TodayTab.module.css';

// Today (spec §5): the header and Now on paper, then the coach card, Later today and MVP Editorial on
// the canvas sheet, which rises over them as she scrolls. In the evening the pass is tomorrow's first
// departure, and For tomorrow takes Later today's place. Every state comes from the seed at the
// moment's demo time; what she does here lives in the session until she jumps to another moment.
//
// Taps that open a draft, a post, a call, a site or a capture are drawn and wired in Stage 6, when
// the scripted steps play (docs/backlog.md).
export default function TodayTab() {
  const { session, dispatch, household } = useSession();
  const { openTab } = useNavigation();
  const seed = household.seed;
  const local = session.today;
  const view = useMemo(
    () => todayView({ seed, articles, momentId: session.momentId, played: session.played, at: session.at, local }),
    [seed, session.momentId, session.played, session.at, local],
  );
  const today = useCallback((action) => dispatch({ type: 'TODAY', action }), [dispatch]);
  const childName = useCallback((id) => {
    if (id === 'family') return people.family;
    if (id === 'both') return people.both;
    return view.find.child(id)?.name;
  }, [view.find]);

  const onShown = useCallback((key) => today({ type: 'PASS_SHOWN', key }), [today]);
  const openLeave = (runId, at = null) => today({ type: 'OPEN_SHEET', sheet: { kind: 'leave', run: runId, at } });
  const onAction = (action, pass) => {
    if (action.id === 'remind') today({ type: 'OPEN_SHEET', sheet: { kind: 'reminder', pass: pass.key } });
  };
  const onCardButton = (card) => {
    if (card.button.action === 'accept') today({ type: 'ANSWER_CARD', card: card.id, answer: 'agree' });
  };
  const onCardSecondary = (card) => {
    const [kind, target] = card.secondary.action.split(':');
    if (kind === 'open-leave-sheet') openLeave(target, 'backups');
  };
  const onCardNext = (card) => {
    const [kind, target] = card.nextButton.action.split(':');
    if (kind === 'open-tab') openTab(target);
  };

  const now = view.now;
  const sheet = (
    <div className={styles.sheet}>
      {view.coachCard && (
        <CoachCard
          key={view.coachCard.id}
          card={view.coachCard}
          onButton={onCardButton}
          onSecondary={onCardSecondary}
          onNext={onCardNext}
          onUndo={(card) => today({ type: 'UNDO_CARD', card: card.id })}
        />
      )}
      {view.laterToday && <LaterToday later={view.laterToday} childName={childName} />}
      {view.forTomorrow && <TomorrowStarts rows={view.forTomorrow} onLeave={(row) => openLeave(row.runId)} />}
      {view.editorial && <RecommendsCard editorial={view.editorial} />}
    </div>
  );

  return (
    <>
      <TodayShell
        dateline={<PhaseHeader dateline={view.dateline} />}
        now={now && (
          <NowPass
            key={now.key}
            pass={now}
            shown={local.passShown === now.key}
            onShown={onShown}
            onLeave={(pass) => openLeave(pass.runId)}
            onAction={onAction}
            childName={childName}
          />
        )}
        sheet={sheet}
        capture={(
          <>
            {local.notice && (
              <Notice
                text={local.notice.text}
                onUndo={() => today(local.notice.undo)}
                onDismiss={() => today({ type: 'DISMISS_NOTICE' })}
              />
            )}
            {!view.captureHidden && <CaptureBar />}
          </>
        )}
      />
      <TodaySheets view={view} />
    </>
  );
}
