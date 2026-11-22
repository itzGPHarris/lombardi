import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import TabListShell from '../Layout/TabListShell.jsx';
import CaptureBar from '../Coach/CaptureBar.jsx';
import Icon from '../shared/Icon.jsx';
import WeekStrip from './WeekStrip.jsx';
import ReviewCard from './ReviewCard.jsx';
import DayGroup from './DayGroup.jsx';
import WeekColumns from './WeekColumns.jsx';
import ReadBackStrip from './ReadBackStrip.jsx';
import Notice from '../shared/Notice.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { gamePlanView } from '../../demo/tabs.js';
import useWide from '../../hooks/useWide.js';
import { nextStep, playsFromTrigger } from '../../demo/steps.js';
import { relativeDay } from '../../demo/dateTokens.js';
import { fill } from '../../demo/today.js';
import * as people from '../../copy/people.js';
import { added, moved, title } from '../../copy/gamePlan.js';
import styles from './GamePlan.module.css';

// The game plan (spec §8): the review card when anything is hers to choose, the week strip that
// sticks under the title bar, then the days, with past days folded, today and tomorrow open, and next
// week beneath. From the desktop width it opens into seven columns, and below it the agenda keeps the
// centered column (issue G52). It reads the week from the seed at the moment. Adding from the review
// card, opening an item and giving the coach something play the moment's steps (src/demo/steps.js).
// An item she adds or moves lands where she can see it: its day opens, the agenda scrolls to it, and
// the row takes the coach's tint for about two seconds before fading back, with no mark left behind
// (spec §8, "She sees where an item lands"; §19, "Item lands"). With reduced motion the tint appears
// without fading and clears when she scrolls or taps, and a screen reader hears where it went.
const dayId = (key) => `day-${key.replace('.', '-')}`;
const HOLD = 2000;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function GamePlanTab() {
  const { session, dispatch, household } = useSession();
  const { openPage } = useNavigation();
  const wide = useWide();
  const local = session.gamePlan;
  const view = useMemo(
    () => gamePlanView({ seed: household.seed, momentId: session.momentId, played: session.played, opened: local.opened, notes: local.notes }),
    [household.seed, session.momentId, session.played, local.opened, local.notes],
  );
  const childName = useCallback((id) => {
    if (id === 'family') return people.family;
    if (id === 'both') return people.both;
    return household.seed.children.find((child) => child.id === id)?.name;
  }, [household.seed]);
  const plan = (action) => dispatch({ type: 'GAME_PLAN', action });
  const isOpen = (day) => local.days[day.key] ?? day.open;
  const step = (trigger) => {
    if (!playsFromTrigger(nextStep(session.momentId, session.played), trigger)) return false;
    dispatch({ type: 'STEP', trigger });
    return true;
  };
  const openItem = (id) => {
    plan({ type: 'OPEN_ITEM', id });
    // In C-04 opening violin, which clears its Updated mark, is the moment's last step.
    step(`open-item:${id}`);
    openPage('item', id);
  };
  // Add to the game plan, on the review card: the item joins its day as hers and lands there.
  const addFromReview = (id) => {
    const item = household.seed.planItems.find((entry) => entry.id === id);
    if (item && step(`review-add:${id}`)) plan({ type: 'LAND', id, key: `${item.time.week}.${item.time.day}`, said: 'added' });
  };

  // Where an item lands: open its day, bring it into view, hold the tint, then let it fade.
  const landing = local.landing;
  const [said, setSaid] = useState('');
  useEffect(() => {
    if (!landing) return undefined;
    const [week] = landing.key.split('.');
    if (Number(week) > view.now.week) plan({ type: 'TOGGLE_DAY', key: 'nextWeek', open: true });
    plan({ type: 'TOGGLE_DAY', key: landing.key, open: true });
    const [w, d] = landing.key.split('.');
    setSaid(fill(landing.said === 'moved' ? moved : added, { day: relativeDay({ week: Number(w), day: d, time: null }, view.now, household.seed.meta.demoWeekStart) }));
    const clear = () => plan({ type: 'CLEAR_LANDING' });
    if (!reducedMotion()) {
      const timer = window.setTimeout(clear, HOLD);
      return () => window.clearTimeout(timer);
    }
    // With reduced motion the tint stays until she scrolls or taps.
    let armed = false;
    const arm = window.setTimeout(() => { armed = true; }, 0);
    const onMove = () => { if (armed) clear(); };
    window.addEventListener('scroll', onMove, { passive: true });
    document.addEventListener('pointerdown', onMove);
    return () => {
      window.clearTimeout(arm);
      window.removeEventListener('scroll', onMove);
      document.removeEventListener('pointerdown', onMove);
    };
    // The landing runs once for each item that lands.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landing]);
  // Once its day has opened and the row is drawn, the agenda brings it into view, once.
  const brought = useRef(null);
  useLayoutEffect(() => {
    if (!landing || brought.current === landing) return;
    const row = document.getElementById(`row-${landing.id}`);
    if (!row || row.closest('[inert]')) return;
    brought.current = landing;
    row.scrollIntoView({ block: 'center' });
  });

  // The strip marks the day she is reading: the last day whose heading has reached the strip. At rest
  // only today's ring shows, as the frames draw it.
  const [reading, setReading] = useState(null);
  useEffect(() => {
    if (wide) return undefined;
    const onScroll = () => {
      const strip = document.querySelector(`.${styles.strip}`)?.getBoundingClientRect().bottom ?? 0;
      const passed = [...document.querySelectorAll('[data-key]')].filter((element) => element.getBoundingClientRect().top <= strip + 1);
      setReading(window.scrollY > 0 ? passed.at(-1)?.dataset.key ?? null : null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [wide]);

  // Tapping a day in the strip opens it and brings it to the strip.
  const goToDay = (key) => {
    const [week] = key.split('.');
    if (view.past?.days.some((day) => day.key === key) && !local.pastOpen) plan({ type: 'TOGGLE_PAST' });
    if (Number(week) > view.now.week && !view.nextWeek.open && local.days.nextWeek !== true) plan({ type: 'TOGGLE_DAY', key: 'nextWeek', open: true });
    plan({ type: 'TOGGLE_DAY', key, open: true });
    setReading(key);
    requestAnimationFrame(() => {
      const element = document.getElementById(dayId(key));
      const strip = document.querySelector(`.${styles.strip}`)?.getBoundingClientRect().bottom ?? 0;
      if (element) window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - strip);
    });
  };

  const stripGone = useCallback(() => dispatch({ type: 'GAME_PLAN', action: { type: 'STRIP_GONE' } }), [dispatch]);
  const dismissNotice = useCallback(() => dispatch({ type: 'GAME_PLAN', action: { type: 'DISMISS_NOTICE' } }), [dispatch]);
  const nextOpen = local.days.nextWeek ?? view.nextWeek.open;
  const day = (entry) => (
    <DayGroup
      key={entry.key}
      id={dayId(entry.key)}
      day={entry}
      open={isOpen(entry)}
      onToggle={() => plan({ type: 'TOGGLE_DAY', key: entry.key, open: !isOpen(entry) })}
      childName={childName}
      onOpen={openItem}
      highlight={landing?.id}
    />
  );

  return (
    <TabListShell
      title={title}
      wide={wide}
      capture={(
        <>
          {view.readBackStrip && !local.stripGone && <ReadBackStrip strip={view.readBackStrip} onGone={stripGone} />}
          {local.notice && (
            <Notice
              rises
              text={local.notice.text}
              link={local.notice.link}
              onLink={() => { plan({ type: 'DISMISS_NOTICE' }); goToDay(local.notice.day); }}
              onDismiss={dismissNotice}
            />
          )}
          <div className={styles.capture}><CaptureBar onGive={() => step('capture:game-plan')} /></div>
        </>
      )}
    >
      <p className={styles.said} aria-live="polite">{said}</p>
      {view.reviewCard && <ReviewCard card={view.reviewCard} childName={childName} onOpen={openItem} onAdd={addFromReview} />}
      {wide ? <WeekColumns view={view} childName={childName} onOpen={openItem} /> : (
        <>
          <WeekStrip strip={view.strip} reading={reading} onDay={goToDay} />
          <div className={styles.agenda}>
            {view.past && (
              <>
                <button type="button" className={styles.dayHeading} data-past aria-expanded={local.pastOpen} aria-label={view.past.label} onClick={() => plan({ type: 'TOGGLE_PAST' })}>
                  <span className={styles.dayName}>{view.past.heading}</span>
                  <span className={styles.dayCount}>{view.past.count}</span>
                  <span className={styles.chevron} data-open={local.pastOpen || undefined}><Icon name="chevron-right" /></span>
                </button>
                {local.pastOpen && view.past.days.map((entry) => day({ ...entry, open: false }))}
              </>
            )}
            {view.days.map(day)}
            <div className={styles.nextWeek} data-key={`${view.now.week + 1}.mon`}>
              <button
                type="button"
                className={styles.dayHeading}
                aria-expanded={nextOpen}
                onClick={() => plan({ type: 'TOGGLE_DAY', key: 'nextWeek', open: !nextOpen })}
              >
                <span className={styles.dayName}>{view.nextWeek.heading}</span>
                <span className={styles.chevron} data-open={nextOpen || undefined}><Icon name="chevron-right" /></span>
              </button>
              {view.nextWeek.sentence && <p className={styles.nextSentence}>{view.nextWeek.sentence}</p>}
              {nextOpen && <div className={styles.agenda}>{view.nextWeek.days.map(day)}</div>}
            </div>
          </div>
        </>
      )}
    </TabListShell>
  );
}
