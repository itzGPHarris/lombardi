import { useCallback, useEffect, useMemo, useState } from 'react';
import TabListShell from '../Layout/TabListShell.jsx';
import CaptureBar from '../Coach/CaptureBar.jsx';
import Icon from '../shared/Icon.jsx';
import WeekStrip from './WeekStrip.jsx';
import ReviewCard from './ReviewCard.jsx';
import DayGroup from './DayGroup.jsx';
import WeekColumns from './WeekColumns.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { gamePlanView } from '../../demo/tabs.js';
import useWide from '../../hooks/useWide.js';
import * as people from '../../copy/people.js';
import { title } from '../../copy/gamePlan.js';
import styles from './GamePlan.module.css';

// The game plan (spec §8): the review card when anything is hers to choose, the week strip that
// sticks under the title bar, then the days, with past days folded, today and tomorrow open, and next
// week beneath. From the desktop width it opens into seven columns, and below it the agenda keeps the
// centered column (issue G52). It reads the week from the seed at
// the moment; adding, moving and asking play in Stage 6.
const dayId = (key) => `day-${key.replace('.', '-')}`;

export default function GamePlanTab() {
  const { session, dispatch, household } = useSession();
  const { openPage } = useNavigation();
  const wide = useWide();
  const local = session.gamePlan;
  const view = useMemo(
    () => gamePlanView({ seed: household.seed, momentId: session.momentId, played: session.played, opened: local.opened }),
    [household.seed, session.momentId, session.played, local.opened],
  );
  const childName = useCallback((id) => {
    if (id === 'family') return people.family;
    if (id === 'both') return people.both;
    return household.seed.children.find((child) => child.id === id)?.name;
  }, [household.seed]);
  const plan = (action) => dispatch({ type: 'GAME_PLAN', action });
  const isOpen = (day) => local.days[day.key] ?? day.open;
  const openItem = (id) => { plan({ type: 'OPEN_ITEM', id }); openPage('item', id); };

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
    />
  );

  return (
    <TabListShell title={title} wide={wide} capture={<div className={styles.capture}><CaptureBar /></div>}>
      {view.reviewCard && <ReviewCard card={view.reviewCard} childName={childName} onOpen={openItem} />}
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
