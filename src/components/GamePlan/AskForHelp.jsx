import { useMemo, useState } from 'react';
import PageShell from '../Layout/PageShell.jsx';
import Button from '../shared/Button.jsx';
import PeoplePicker from '../shared/PeoplePicker.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { askForHelpView } from '../../demo/tabs.js';
import styles from './ItemPage.module.css';

// Ask for help (frame 2853:15877; fixtures C-04, the library run): everyone who can receive a request,
// her circle first, then Next, which opens the request drafted in her voice (spec §8, §9). The demo
// drafts only the requests the fixtures write, such as the library run to Edward in C-04, so Next
// waits until she chooses someone the moment has a draft for.
export default function AskForHelp({ itemId }) {
  const { session, household } = useSession();
  const { openPage } = useNavigation();
  const [chosen, setChosen] = useState([]);
  const view = useMemo(
    () => askForHelpView({ seed: household.seed, momentId: session.momentId, played: session.played, itemId }),
    [household.seed, session.momentId, session.played, itemId],
  );
  if (!view) return <PageShell title="" />;
  const draft = household.seed.requests.find((request) => request.to === chosen[0] && request.items?.some((entry) => entry.item === itemId));
  return (
    <PageShell title={view.heading}>
      <div className={styles.page}>
        <p className={styles.when}>{view.line}</p>
        <PeoplePicker groups={view.groups} single chosen={chosen} onChange={setChosen} />
        <Button kind="primary" full disabled={!draft} onClick={() => openPage('draft', draft.id)}>{view.next}</Button>
      </div>
    </PageShell>
  );
}
