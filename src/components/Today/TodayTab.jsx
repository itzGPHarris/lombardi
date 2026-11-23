import { useCallback, useEffect, useMemo } from 'react';
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
import useActions from '../../hooks/useActions.js';
import { nextScripted } from '../../demo/steps.js';
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
// The card's buttons play the moment's steps or open what they name (src/hooks/useActions.js).
export default function TodayTab() {
  const { session, dispatch, household } = useSession();
  const { openPage } = useNavigation();
  const run = useActions();
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
  const onCardShown = useCallback((key) => today({ type: 'CARD_SHOWN', key }), [today]);
  const openLeave = (runId, at = null) => today({ type: 'OPEN_SHEET', sheet: { kind: 'leave', run: runId, at } });
  const onAction = (action, pass) => {
    if (action.id === 'remind') today({ type: 'OPEN_SHEET', sheet: { kind: 'reminder', pass: pass.key } });
  };
  // Agreeing plays the moment's step for it when the seed scripts one, such as her first board turning
  // to Tomorrow (0i-c), so the pass changes with the card. Otherwise the card alone keeps the answer.
  const moment = seed.moments.find((entry) => entry.id === session.momentId);
  const onCardButton = (card) => {
    if (run(card.button.action)) return;
    // Adding what the coach read from someone else's document, such as the cans in C-03a or the
    // harvest fair in C-09, is her decision, and the moment's step for it plays (spec §5).
    if (/^add-(going-with|item):/.test(card.button.action)) {
      dispatch({ type: 'STEP', trigger: `card:${card.id}` });
      return;
    }
    if (card.button.action !== 'accept') return;
    const index = (moment?.steps ?? []).findIndex((step, at) => at >= session.played
      && step.show?.today?.coachCard?.id === card.id && step.show.today.coachCard.state === 'agree');
    if (index >= 0) dispatch({ type: 'PLAY', played: index + 1, from: session.played });
    else today({ type: 'ANSWER_CARD', card: card.id, answer: 'agree' });
  };
  const onCardUndo = (card) => {
    if (session.playedFrom !== null && session.playedFrom !== undefined && !local.cardAnswers[card.id]) {
      dispatch({ type: 'PLAY', played: session.playedFrom });
    } else today({ type: 'UNDO_CARD', card: card.id });
  };
  const onCardSecondary = (card) => {
    const [kind, target] = card.secondary.action.split(':');
    if (kind === 'open-leave-sheet') {
      // In C-06 opening the backups is the moment's first step.
      dispatch({ type: 'STEP', trigger: `other-options:${card.id}` });
      openLeave(target, 'backups');
    } else run(card.secondary.action);
  };
  const onCardNext = (card) => run(card.nextButton.action);

  // Capture on Today (spec §5, "A capture from Today lands on the coach card"; fixtures C-03a): what
  // she types and the photo from the staged camera go to the coach together, and the read-back lands
  // on the coach card, where she is. The card reads for two seconds, as 0r does.
  const scripted = nextScripted(seed, session.momentId, session.played);
  const captureStep = scripted?.entry.trigger === 'capture:today' ? scripted.step : null;
  const captureId = captureStep?.set.captures?.[0];
  const typed = captureId ? seed.captures.find((capture) => capture.id === captureId)?.typed ?? '' : '';
  const photo = local.photo ? { alt: seed.captures.find((capture) => capture.id === local.photo)?.sourceName } : null;
  const give = () => {
    dispatch({ type: 'STEP', trigger: 'capture:today' });
    today({ type: 'CLEAR_CAPTURE' });
  };
  const readingCard = view.coachCard?.state === 'reading' ? view.coachCard.id : null;
  useEffect(() => {
    if (!readingCard) return undefined;
    const timer = window.setTimeout(() => dispatch({ type: 'STEP', trigger: `read:${readingCard}` }), 2000);
    return () => window.clearTimeout(timer);
  }, [readingCard, dispatch]);

  const now = view.now;
  // The next morning between drop-offs (0i-h) has nothing beneath the pass, so the sheet is hidden.
  const sheetEmpty = !view.coachCard && !view.laterToday && !view.forTomorrow && !view.editorial;
  const sheet = sheetEmpty ? null : (
    <div className={styles.sheet}>
      {view.coachCard && (
        <CoachCard
          key={view.coachCard.id}
          card={view.coachCard}
          shown={local.cardsShown.includes(view.coachCard.id)}
          onShown={onCardShown}
          onButton={onCardButton}
          onSecondary={onCardSecondary}
          onNext={onCardNext}
          onUndo={onCardUndo}
        />
      )}
      {view.laterToday && <LaterToday later={view.laterToday} childName={childName} />}
      {view.forTomorrow && <TomorrowStarts rows={view.forTomorrow} childName={childName} onLeave={(row) => openLeave(row.runId)} />}
      {view.editorial && <RecommendsCard editorial={view.editorial} onOpen={(id) => openPage('article', id)} />}
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
            {!view.captureHidden && (
              <CaptureBar
                scripted={typed}
                value={local.captureText}
                onChange={(text) => today({ type: 'CAPTURE_TEXT', text })}
                photo={photo}
                onCamera={() => { if (captureId && !local.photo) openPage('camera', captureId); }}
                onGive={give}
              />
            )}
          </>
        )}
      />
      <TodaySheets view={view} />
    </>
  );
}
