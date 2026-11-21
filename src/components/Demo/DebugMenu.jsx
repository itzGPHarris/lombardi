import { datelineParts, formatDateline, formatTime } from '../../demo/calendar.js';
import * as words from '../../copy/demo.js';
import styles from './Demo.module.css';

// The debug menu (spec §15): the current moment and demo time, and the coach's source. The live
// model is never on in a presented demo, and it is not wired until its Netlify function exists.
export default function DebugMenu({ session, household, onCoachMode }) {
  const parts = datelineParts(session.now, household.seed.meta.demoWeekStart);
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{words.debugMenu}</h3>
      <dl className={styles.facts}>
        <div><dt>{words.currentMoment}</dt><dd>{session.momentId}</dd></div>
        <div><dt>{words.demoTime}</dt><dd>{formatDateline(parts)}, {formatTime(session.now.time)}</dd></div>
      </dl>
      <div className={styles.row}>
        <button type="button" className={styles.choice} aria-pressed={session.coachMode === 'scripted'} onClick={() => onCoachMode('scripted')}>{words.scriptedResponses}</button>
        <button type="button" className={styles.choice} aria-pressed={session.coachMode === 'live'} onClick={() => onCoachMode('live')}>{words.liveModel}</button>
      </div>
    </section>
  );
}
