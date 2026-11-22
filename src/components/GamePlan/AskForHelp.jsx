import { useMemo } from 'react';
import PageShell from '../Layout/PageShell.jsx';
import Button from '../shared/Button.jsx';
import PeoplePicker from '../shared/PeoplePicker.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { askForHelpView } from '../../demo/tabs.js';
import styles from './ItemPage.module.css';

// Ask for help (frame 2853:15877; fixtures C-04, the library run): everyone who can receive a request,
// her circle first, then Next, which opens the request drafted in her voice in Stage 6.
export default function AskForHelp({ itemId }) {
  const { session, household } = useSession();
  const view = useMemo(
    () => askForHelpView({ seed: household.seed, momentId: session.momentId, played: session.played, itemId }),
    [household.seed, session.momentId, session.played, itemId],
  );
  if (!view) return <PageShell title="" />;
  return (
    <PageShell title={view.heading}>
      <div className={styles.page}>
        <p className={styles.when}>{view.line}</p>
        <PeoplePicker groups={view.groups} single />
        <Button kind="primary" full disabled>{view.next}</Button>
      </div>
    </PageShell>
  );
}
