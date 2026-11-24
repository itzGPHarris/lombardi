import { useEffect, useState } from 'react';
import Button from '../shared/Button.jsx';
import Notice from '../shared/Notice.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import ReminderItem, { NewReminderItem } from '../Today/ReminderItem.jsx';
import { fill } from '../../demo/today.js';
import { checklist } from '../../copy/today.js';
import { draft as words } from '../../copy/onboarding.js';
import styles from './Draft.module.css';

// The draft week (0c, 2853:12011), which she can change before the account (spec §3, standing decision
// 13; issue O36): the heading, the dates in Meta and the coach's line, then each remaining school day
// with its reminders as ReminderItem rows with Remove, "Add something else for" the child after each
// day with reminders, and the suggested event with Add to the plan and Not this time. "Tell the MVP
// Coach what's wrong" sits under the rows, and keeping the plan ends the page (0c-c, 3282:17819).
//
// Removing a reminder takes it off straight away and raises the notice with Undo at the foot (0c-d,
// 3282:17866), for every reminder: the draft has no "Just tonight" or "Every night" (docs/issues.csv).
// Adding back-to-school night takes away its Suggested label and its buttons; Not this time takes the
// event off the draft.
export default function Draft({ child, dates, line, days, notice, keep, scrollToKeep, act, onBack }) {
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
        <header className={styles.header}>
          <h1 className={styles.heading}>{fill(words.heading, { child })}</h1>
          <p className={styles.dates}>{dates}</p>
          <p className={styles.line}>{line}</p>
        </header>
        <div className={styles.rows}>
          {days.map((day) => {
            if (day.kind === 'event') {
              if (day.event === 'declined') return null;
              return (
                <div key={day.index} className={styles.day}>
                  <div className={styles.dayRow}>
                    <span className={styles.event}>{day.title}</span>
                    {day.event === 'suggested' && <span className={styles.suggested}>{words.suggested}</span>}
                  </div>
                  {day.event === 'suggested' && (
                    <div className={styles.choices}>
                      <Button kind="secondary" onClick={() => act({ type: 'EVENT', choice: 'added' })}>{words.addToPlan}</Button>
                      <Button kind="outlined" onClick={() => act({ type: 'EVENT', choice: 'declined' })}>{words.notThisTime}</Button>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div key={day.index} className={styles.day}>
                <div className={styles.dayRow}>
                  <span className={styles.dayName}>{day.title}</span>
                  <span className={styles.meaning}>{day.meaning}</span>
                </div>
                {day.reminders.length > 0 && (
                  <ul className={styles.reminders}>
                    {day.reminders.map((reminder) => (
                      <ReminderItem
                        key={reminder.key}
                        row={{ key: reminder.key, kind: 'item', text: reminder.text, ticked: false }}
                        onTick={() => {}}
                        onRemove={() => act({ type: 'REMOVE_REMINDER', key: reminder.key })}
                        onCancelChoosing={() => {}}
                      />
                    ))}
                  </ul>
                )}
                {adding === day.index && (
                  <ul className={styles.reminders}>
                    <NewReminderItem
                      placeholder={fill(checklist.newRowPlaceholder, { child })}
                      onAdd={(text) => { setAdding(null); act({ type: 'ADD_REMINDER', row: day.index, text }); }}
                      onDrop={() => setAdding(null)}
                    />
                  </ul>
                )}
                {day.hasReminders && adding !== day.index && (
                  <Button kind="text" icon="add" full className={styles.add} onClick={() => setAdding(day.index)}>
                    {fill(checklist.addSomethingElse, { child })}
                  </Button>
                )}
              </div>
            );
          })}
        </div>
        <Button kind="text" className={styles.tellCoach} onClick={() => act({ type: 'TELL_COACH' })}>{words.tellCoach}</Button>
        {keep}
      </div>
    </OnboardingShell>
  );
}
