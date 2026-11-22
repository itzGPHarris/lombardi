import { useMemo } from 'react';
import PageShell from '../Layout/PageShell.jsx';
import Icon from '../shared/Icon.jsx';
import CalendarMark from '../Calendar/CalendarMark.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { childPageView } from '../../demo/tabs.js';
import styles from './Kids.module.css';

// A child's page (spec §11, "Child page"; frames 2853:13673 and 2853:13691): headed with the child's
// name, age and grade, with no monogram and no photograph; the school and teacher, which opens the
// school's card; what the child does every week, with the calendar mark on what came from her
// calendar; and what goes with the child by day.
export default function ChildPage({ childId }) {
  const { session, household } = useSession();
  const { openPage } = useNavigation();
  const view = useMemo(
    () => childPageView({ seed: household.seed, momentId: session.momentId, played: session.played, childId }),
    [household.seed, session.momentId, session.played, childId],
  );
  if (!view) return <PageShell title="" />;
  return (
    <PageShell title={view.title}>
      <div className={styles.page}>
        <section className={styles.block} aria-label={view.school.heading}>
          <h2 className={styles.blockHeading}>{view.school.heading}</h2>
          <button type="button" className={styles.item} data-link onClick={() => openPage('school', view.school.id)}>
            <span>{view.school.text}</span>
            <span className={styles.chevron}><Icon name="chevron-right" /></span>
          </button>
        </section>
        <section className={styles.block} aria-label={view.everyWeek.heading}>
          <h2 className={styles.blockHeading}>{view.everyWeek.heading}</h2>
          {view.everyWeek.items.map((item) => (
            <p key={item.id} className={styles.item}>{item.calendarMark && <CalendarMark />}<span>{item.text}</span></p>
          ))}
        </section>
        <section className={styles.block} aria-label={view.goingWith.heading}>
          <h2 className={styles.blockHeading}>{view.goingWith.heading}</h2>
          {view.goingWith.items.length
            ? view.goingWith.items.map((item) => <p key={item.id} className={styles.item}>{item.text}</p>)
            : <p className={styles.item} data-quiet>{view.goingWith.empty}</p>}
        </section>
      </div>
    </PageShell>
  );
}
