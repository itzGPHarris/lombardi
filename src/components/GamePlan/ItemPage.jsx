import { useMemo } from 'react';
import PageShell from '../Layout/PageShell.jsx';
import Button from '../shared/Button.jsx';
import CoachDot from '../shared/CoachDot.jsx';
import Icon from '../shared/Icon.jsx';
import { Chips, Marks, Owner } from './PlanRow.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { itemPageView } from '../../demo/tabs.js';
import * as people from '../../copy/people.js';
import styles from './ItemPage.module.css';

// An item's page (spec §8, "Item page"; frame 2853:14433 and the item pages added on Oct. 18): a page
// with Back, not a sheet, because asking someone, a draft and the backups all lead to another screen.
// It reads the item at the moment from the seed. Adding, asking, a note, a backup and moving play
// in Stage 6; Ask for help already opens its page of people.
export default function ItemPage({ itemId }) {
  const { session, household } = useSession();
  const { openPage } = useNavigation();
  const seed = household.seed;
  const view = useMemo(
    () => itemPageView({ seed, momentId: session.momentId, played: session.played, itemId, opened: session.gamePlan?.opened ?? [] }),
    [seed, session.momentId, session.played, itemId, session.gamePlan?.opened],
  );
  if (!view) return <PageShell title="" />;
  const childName = (id) => (id === 'family' ? people.family : seed.children.find((child) => child.id === id)?.name);
  return (
    <PageShell title={view.title} above={view.chips.length ? <Chips chips={view.chips} childName={childName} /> : null}>
      <div className={styles.page}>
        <div className={styles.header}>
          <p className={styles.when}>{view.when}</p>
          <Marks marks={view.marks} />
          {view.suggested && (
            <div className={styles.suggested}>
              <span className={styles.suggestedMark}>{view.suggested.label}</span>
              <div className={styles.suggestedActions}>
                <Button kind="primary">{view.suggested.add}</Button>
                <Button kind="text">{view.suggested.dismiss}</Button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.owner}>
          <div className={styles.ownerText}>
            <p className={styles.label}>{view.owner.heading}</p>
            <p className={styles.ownerValue}>
              {view.owner.kind === 'person' && <Owner owner={view.owner} />}
              <span>{view.owner.label}</span>
            </p>
            {view.answerNote && <p className={styles.answerNote}>{view.answerNote}</p>}
          </div>
          {view.owner.askForHelp && <Button kind="text" onClick={() => openPage('ask-for-help', view.id)}>{view.owner.askForHelp}</Button>}
        </div>

        {view.note && (
          <div className={styles.note}>
            <p className={styles.label}>{view.note.heading}</p>
            <p className={styles.noteField} data-empty={!view.note.text || undefined}>{view.note.text ?? view.note.placeholder}</p>
          </div>
        )}

        {view.source && (
          <p className={styles.source}>
            {view.calendarMark && <Icon name="calendar-mark" />}
            {view.source}
          </p>
        )}

        {view.backups && (
          <section className={styles.backups} aria-label={view.backups.heading}>
            <h2 className={styles.backupsHeading}><CoachDot />{view.backups.heading}</h2>
            {view.backups.recommendation && (
              <>
                <p className={styles.text}>{view.backups.recommendation.text}</p>
                <Button kind="primary" full>{view.backups.recommendation.button.label}</Button>
                {view.backups.recommendation.button.line && <p className={styles.line}>{view.backups.recommendation.button.line}</p>}
              </>
            )}
            {view.backups.plans.map((plan) => (
              <div key={plan.label} className={styles.plan}>
                <p className={styles.text}>{plan.label}</p>
                <Button kind="outlined" full>{plan.button.label}</Button>
              </div>
            ))}
            {view.backups.noMore && <p className={styles.noMore}>{view.backups.noMore}</p>}
          </section>
        )}

        {view.move.calendar ? <p className={styles.line}>{view.move.calendar}</p> : <Button kind="text" className={styles.move}>{view.move.label}</Button>}
        {view.takeOut && <Button kind="text" className={styles.move}>{view.takeOut}</Button>}
      </div>
    </PageShell>
  );
}
