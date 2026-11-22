import PageShell from '../Layout/PageShell.jsx';
import AdultAvatar from '../shared/AdultAvatar.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { membersView } from '../../demo/tabs.js';
import styles from './Team.module.css';

// A group's members (frame 2853:13371): You and the seven others, each with their line.
export default function MembersPage({ groupId }) {
  const { household } = useSession();
  const view = membersView({ seed: household.seed, groupId });
  if (!view) return <PageShell title="" />;
  return (
    <PageShell title={view.title}>
      <ul className={styles.memberList}>
        {view.people.map((person) => (
          <li key={person.id} className={styles.row} data-center>
            {person.initial && <AdultAvatar initial={person.initial} label={person.name} />}
            <span className={styles.rowText}>
              <span className={styles.rowName}>{person.name}</span>
              {person.line && <span className={styles.line}>{person.line}</span>}
            </span>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
