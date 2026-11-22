import { useMemo } from 'react';
import PageShell from '../Layout/PageShell.jsx';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import PlanRow from '../GamePlan/PlanRow.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { personPageView } from '../../demo/tabs.js';
import * as people from '../../copy/people.js';
import styles from './Team.module.css';

// A person's page (spec §10, "Person page"; frames 2853:13256 to 2853:13327 and 2853:15972 to
// 2853:16031): their line and whether they have MVP, Message, Call and Text as they apply, how to
// reach them, this week as lanes with the answer icon and no initial, then the chats she shares with
// someone in her circle or the groups one of her people is in. Message opens her chat with them
// alone, or the composer with only them chosen. Call and Text are staged and go nowhere (spec §10).
export default function PersonPage({ personId }) {
  const { session, household } = useSession();
  const { openPage } = useNavigation();
  const seed = household.seed;
  const view = useMemo(
    () => personPageView({ seed, momentId: session.momentId, played: session.played, personId }),
    [seed, session.momentId, session.played, personId],
  );
  if (!view) return <PageShell title="" />;
  const childName = (id) => (id === 'family' ? people.family : seed.children.find((child) => child.id === id)?.name);
  const message = () => {
    const alone = view.chats?.items.find((chat) => seed.chats.find((entry) => entry.id === chat.id)?.members.length === 1);
    if (alone) openPage('chat', alone.id);
    else openPage('compose', `circle:${view.id}`);
  };
  return (
    <PageShell title={view.name}>
      <div className={styles.page}>
        <p className={styles.personLine}>{view.line}</p>
        {view.actions.length > 0 && (
          <div className={styles.actions}>
            {view.actions.map((action, index) => (
              <Button key={action.id} kind={index === 0 && action.id === 'message' ? 'primary' : 'outlined'} onClick={action.id === 'message' ? message : undefined}>{action.label}</Button>
            ))}
          </div>
        )}
        {view.contact && (
          <div className={styles.contact}>
            <p className={styles.contactLabel}>{view.contact.label}</p>
            <p className={styles.contactNumber}>{view.contact.number}</p>
          </div>
        )}
        <section className={styles.pageSection} aria-labelledby="this-week">
          <h2 id="this-week" className={styles.sectionHeading}>{view.thisWeek.heading}</h2>
          {view.thisWeek.rows.length
            ? view.thisWeek.rows.map((row) => <PlanRow key={row.id} row={row} childName={childName} initial={false} dayLabel />)
            : <p className={styles.emptyLine}>{view.thisWeek.empty}</p>}
        </section>
        {[view.chats && ['chat', view.chats], view.groups && ['group', view.groups]].filter(Boolean).map(([kind, list]) => (
          <section key={kind} className={styles.pageSection} data-ruled aria-label={list.heading}>
            <h2 className={styles.sectionHeading}>{list.heading}</h2>
            {list.items.map((item) => (
              <button key={item.id} type="button" className={styles.linkRow} onClick={() => openPage(kind, item.id)}>
                <span>{item.name}</span>
                <span className={styles.chevron}><Icon name="chevron-right" /></span>
              </button>
            ))}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
