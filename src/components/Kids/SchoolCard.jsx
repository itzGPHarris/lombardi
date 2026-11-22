import { useMemo, useState } from 'react';
import PageShell from '../Layout/PageShell.jsx';
import Button from '../shared/Button.jsx';
import Sheet from '../shared/Sheet.jsx';
import { UpdatedMark } from './KidsTab.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { schoolCardView } from '../../demo/tabs.js';
import styles from './Kids.module.css';

// A school card (spec §11, "School card"; frames 2853:13711 and 2853:13761): Hours, Contacts, Rules,
// Calendar, Rotation and Documents, with any section that holds nothing hidden. A fact shows where it
// came from, and the version it replaced, when she opens it, and opening a changed fact clears its
// Updated mark (spec §11, "Card fact"). Add to this card opens a sheet of the three ways to capture,
// addressed to the school; in the prototype each closes the sheet and adds nothing.
function CardFact({ fact, open, onOpen, earlierVersion }) {
  const opens = !!(fact.source || fact.history?.length);
  const body = (
    <>
      {fact.label && <span className={styles.factLabel}>{fact.label}</span>}
      <span className={styles.factText}>{fact.text}</span>
      {fact.updated && <UpdatedMark label={fact.updated} />}
      {open && fact.source && <span className={styles.factSource}>{fact.source}</span>}
      {open && fact.history?.map((entry) => (
        <span key={entry.text} className={styles.history}>
          <span className={styles.historyHeading}>{earlierVersion}</span>
          <span className={styles.factText}>{entry.text}</span>
          <span className={styles.factSource}>{entry.until}</span>
        </span>
      ))}
    </>
  );
  return opens
    ? <button type="button" className={styles.fact} aria-expanded={open} onClick={() => onOpen(fact.id)}>{body}</button>
    : <div className={styles.fact}>{body}</div>;
}

export default function SchoolCard({ schoolId }) {
  const { session, dispatch, household } = useSession();
  const view = useMemo(
    () => schoolCardView({ seed: household.seed, momentId: session.momentId, played: session.played, schoolId, opened: session.kids?.opened ?? [] }),
    [household.seed, session.momentId, session.played, schoolId, session.kids],
  );
  const [shown, setShown] = useState([]);
  const [sheet, setSheet] = useState(false);
  if (!view) return <PageShell title="" />;
  const open = (id) => {
    setShown((current) => (current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]));
    dispatch({ type: 'OPEN_FACT', id });
  };
  return (
    <PageShell title={view.title}>
      <div className={styles.page}>
        {view.sections.map((section) => (
          <section key={section.id} className={styles.block} aria-label={section.heading}>
            <h2 className={styles.blockHeading}>{section.heading}</h2>
            {section.line && <p className={styles.item}>{section.line}</p>}
            {section.facts.map((fact) => (
              <CardFact key={fact.id} fact={fact} open={shown.includes(fact.id)} onOpen={open} earlierVersion={view.earlierVersion} />
            ))}
          </section>
        ))}
        {view.emptyLine && <p className={styles.emptyLine}>{view.emptyLine}</p>}
        <Button kind="outlined" full onClick={() => setSheet(true)}>{view.addToCard}</Button>
      </div>
      <Sheet open={sheet} heading={view.sheet.heading} line={view.sheet.line} onClose={() => setSheet(false)}>
        <div className={styles.sheetActions}>
          {view.sheet.actions.map((action) => <Button key={action} kind="secondary" full onClick={() => setSheet(false)}>{action}</Button>)}
        </div>
      </Sheet>
    </PageShell>
  );
}
