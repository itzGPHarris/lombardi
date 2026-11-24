import { useEffect, useState } from 'react';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import Notice from '../shared/Notice.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import ReminderItem, { NewReminderItem } from '../Today/ReminderItem.jsx';
import { fill } from '../../demo/today.js';
import { checklist, coachCard } from '../../copy/today.js';
import { draft as words } from '../../copy/onboarding.js';
import styles from './Draft.module.css';

// The draft week (0c, 2853:12011), which she can change before the account (spec §3, standing
// decisions 13 and 14; issue O46). The heading names the child and the dates, then each school day is
// a card with its date, letter and meaning. A day with reminders and the week's school event are coach
// suggestions: each is marked Suggested and ends with Keep, Change and Skip, sharing the width. A day
// with no reminders asks for nothing. "Tell the MVP Coach what's wrong" sits under the cards, and
// keeping the plan ends the page (0c-c, 3282:17819).
//
// On arrival the reminders show without Remove, so the page reads as a plan rather than a form. Keep
// takes away the tag and leaves Kept with Undo. Skip folds the card to its title over Skipped, with
// Undo. Change on a day opens Remove on each reminder, "Add something else for" the child and Done
// (0c-d, 3282:17866); removing a reminder raises the notice with Undo at the foot. Change on the event
// opens the capture conversation (issue O41).
//
// The Suggested tag is local to the frames and ReminderItem has no read-only variant in the library,
// so the tag is drawn here from tokens and the read-only row is ReminderItem without onRemove (O39).
export default function Draft({ child, dates, days, notice, keep, scrollToKeep, act, onBack }) {
  const [adding, setAdding] = useState(null);

  // The development link for 0c-c opens the page at its end, as the frame draws it.
  // The app sets each screen to the top as it opens, so this waits a frame.
  useEffect(() => {
    if (!scrollToKeep) return undefined;
    const frame = requestAnimationFrame(() => window.scrollTo(0, document.documentElement.scrollHeight));
    return () => cancelAnimationFrame(frame);
  }, [scrollToKeep]);

  return (
    <OnboardingShell
      onBack={onBack}
      foot={notice ? <Notice text={notice} onUndo={() => act({ type: 'UNDO_REMOVE' })} onDismiss={() => act({ type: 'DISMISS_NOTICE' })} /> : <span />}
    >
      <div className={styles.draft}>
        <h1 className={styles.heading}>{`${fill(words.heading, { child })} ${dates}`}</h1>
        <div className={styles.cards}>
          {days.map((day) => (
            <DayCard key={day.index} day={day} child={child} adding={adding === day.index} setAdding={setAdding} act={act} />
          ))}
        </div>
        <Button kind="text" className={styles.tellCoach} onClick={() => act({ type: 'TELL_COACH' })}>{words.tellCoach}</Button>
        {keep}
      </div>
    </OnboardingShell>
  );
}

function DayCard({ day, child, adding, setAdding, act }) {
  const { state, index } = day;
  const row = index;
  const skipped = state === 'skipped';
  const changing = state === 'changing';
  const tagged = state === 'suggested' || state === 'changing';

  return (
    <section className={styles.card} aria-label={skipped ? day.folded : day.title}>
      <div className={styles.cardHead}>
        <div className={styles.cardTitle}>
          <p className={styles.title}>{skipped ? day.folded : day.title}</p>
          <p className={styles.meaning}>{skipped ? words.skipped : day.meaning}</p>
        </div>
        {tagged && <span className={styles.tag}>{words.suggested}</span>}
        {skipped && <Button kind="text" onClick={() => act({ type: 'UNDO_CARD', row })}>{coachCard.undo}</Button>}
      </div>

      {!skipped && (day.reminders?.length > 0 || (changing && adding)) && (
        <ul className={styles.reminders}>
          {(day.reminders ?? []).map((reminder) => (
            <ReminderItem
              key={reminder.key}
              row={{ key: reminder.key, kind: 'item', text: reminder.text, ticked: false }}
              onTick={() => {}}
              onRemove={changing ? () => act({ type: 'REMOVE_REMINDER', key: reminder.key }) : undefined}
              onCancelChoosing={() => {}}
            />
          ))}
          {changing && adding && (
            <NewReminderItem
              placeholder={fill(checklist.newRowPlaceholder, { child })}
              onAdd={(text) => { setAdding(null); act({ type: 'ADD_REMINDER', row, text }); }}
              onDrop={() => setAdding(null)}
            />
          )}
        </ul>
      )}

      {changing && !adding && (
        <Button kind="text" icon="add" full onClick={() => setAdding(row)}>
          {fill(checklist.addSomethingElse, { child })}
        </Button>
      )}
      {changing && (
        <Button kind="secondary" full onClick={() => { setAdding(null); act({ type: 'DONE' }); }}>{words.done}</Button>
      )}

      {state === 'suggested' && (
        <div className={styles.choices}>
          <Button kind="secondary" className={styles.choice} onClick={() => act({ type: 'KEEP', row })}>{words.keep}</Button>
          <Button
            kind="outlined"
            className={styles.choice}
            onClick={() => act(day.kind === 'event' ? { type: 'TELL_COACH' } : { type: 'CHANGE', row })}
          >
            {words.change}
          </Button>
          <Button kind="outlined" className={styles.choice} onClick={() => act({ type: 'SKIP', row })}>{words.skip}</Button>
        </div>
      )}

      {state === 'kept' && (
        <div className={styles.status}>
          <span className={styles.kept}><Icon name="check" />{words.kept}</span>
          <Button kind="text" onClick={() => act({ type: 'UNDO_CARD', row })}>{coachCard.undo}</Button>
        </div>
      )}
    </section>
  );
}
