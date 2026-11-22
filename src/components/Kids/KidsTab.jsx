import { useMemo } from 'react';
import TabListShell from '../Layout/TabListShell.jsx';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { kidsView } from '../../demo/tabs.js';
import styles from './Kids.module.css';

// The Kids tab (spec §11; frame 2853:13654): each child with the grade and school beneath, each school
// with the children who go there and the Updated mark when anything on its card has changed, and Add a
// school at the foot. No initial or chip, because the row is the child. Kids carries no capture bar.
export function UpdatedMark({ label }) {
  return <span className={styles.updated}><Icon name="mark-changed" /><span>{label}</span></span>;
}

export default function KidsTab() {
  const { session, household } = useSession();
  const { openPage } = useNavigation();
  const view = useMemo(
    () => kidsView({ seed: household.seed, momentId: session.momentId, played: session.played, opened: session.kids?.opened ?? [] }),
    [household.seed, session.momentId, session.played, session.kids],
  );
  const list = (heading, rows, kind) => (
    <section className={styles.section} aria-label={heading}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      <ul className={styles.list}>
        {rows.map((row) => (
          <li key={row.id}>
            <button type="button" className={styles.row} onClick={() => openPage(kind, row.id)}>
              <span className={styles.rowText}>
                <span className={styles.rowName}>{row.name}</span>
                <span className={styles.rowLine}>{row.line ?? row.children}</span>
                {row.updated && <UpdatedMark label={row.updated} />}
              </span>
              <span className={styles.chevron}><Icon name="chevron-right" /></span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
  return (
    <TabListShell title={view.title}>
      <div className={styles.tab}>
        {list(view.sections.kids, view.children, 'child')}
        {list(view.sections.schools, view.schools, 'school')}
        <Button kind="outlined" full onClick={() => openPage('add-school')}>{view.addASchool}</Button>
      </div>
    </TabListShell>
  );
}
