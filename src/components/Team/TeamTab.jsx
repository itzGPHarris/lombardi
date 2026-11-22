import { useMemo } from 'react';
import TabListShell from '../Layout/TabListShell.jsx';
import Button from '../shared/Button.jsx';
import { ChatRow, GroupRow, PersonRow } from './TeamRows.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { teamView } from '../../demo/tabs.js';
import styles from './Team.module.css';

// The Team tab (spec §10; frames 2853:13188 and 2853:13221): New message in the title bar, then
// Chats, Groups and Team, where her circle comes first with the Circle tag and her people follow, and
// Add someone and New group below the lists. It shows the chats, posts and replies that exist at the
// moment, with "1 new" on what she hasn't opened. Team carries no capture bar.
export default function TeamTab() {
  const { session, household } = useSession();
  const { openPage } = useNavigation();
  const view = useMemo(
    () => teamView({ seed: household.seed, momentId: session.momentId, played: session.played, seen: session.team?.seen ?? [] }),
    [household.seed, session.momentId, session.played, session.team],
  );
  return (
    <TabListShell title={view.title} actions={<Button kind="primary" className={styles.nowrap} onClick={() => openPage('compose', 'circle')}>{view.newMessage}</Button>}>
      <div className={styles.tab}>
        <section className={styles.section} aria-labelledby="team-chats">
          <h2 id="team-chats" className={styles.sectionHeading}>{view.sections.chats}</h2>
          {view.chats.length ? view.chats.map((chat) => <ChatRow key={chat.id} chat={chat} onOpen={(id) => openPage('chat', id)} />)
            : <p className={styles.emptyLine}>{view.noChats}</p>}
        </section>
        <section className={styles.section} aria-labelledby="team-groups">
          <h2 id="team-groups" className={styles.sectionHeading}>{view.sections.groups}</h2>
          {view.groups.length ? view.groups.map((group) => <GroupRow key={group.id} group={group} onOpen={(id) => openPage('group', id)} />)
            : <p className={styles.emptyLine}>{view.noGroups}</p>}
        </section>
        <section className={styles.section} aria-labelledby="team-people">
          <h2 id="team-people" className={styles.sectionHeading}>{view.sections.team}</h2>
          {view.people.map((person) => <PersonRow key={person.id} person={person} onOpen={(id) => openPage('person', id)} />)}
        </section>
        <div className={styles.buttons}>
          <Button kind="outlined" onClick={() => openPage('add-someone')}>{view.addSomeone}</Button>
          <Button kind="outlined" onClick={() => openPage('new-group')}>{view.newGroup}</Button>
        </div>
      </div>
    </TabListShell>
  );
}
