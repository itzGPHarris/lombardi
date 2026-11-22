import { useCallback } from 'react';
import ReminderGroup from './ReminderGroup.jsx';
import ChecklistDone from './ChecklistDone.jsx';
import { checklist as words } from '../../copy/today.js';
import { fill } from '../../demo/today.js';
import { useSession } from '../../demo/SessionContext.js';
import styles from './Checklist.module.css';

// The grouped checklist under Now, the evening reminders on tomorrow's pass, and each departure's
// list under For tomorrow (spec §5). The same rows serve all three, and nothing here edits the plan:
// ticks, removals and additions belong to the departure in the running app.
export default function Checklist({ checklist, foldsWhole = true }) {
  const { session, dispatch } = useSession();
  const today = (action) => dispatch({ type: 'TODAY', action });
  const drawn = session.today.foldsDrawn.includes(checklist.key);
  const onDrawn = useCallback(() => dispatch({ type: 'TODAY', action: { type: 'FOLD_DRAWN', key: checklist.key } }), [dispatch, checklist.key]);

  const tick = (group, row) => {
    const completesGroup = !row.ticked && group.rows.every((other) => other.key === row.key || other.ticked);
    const completesChecklist = completesGroup && checklist.groups.every((other) => other.key === group.key || other.allTicked);
    today({ type: 'TICK', row: row.key, ticked: row.ticked, group: group.key, checklist: checklist.key, completesGroup, completesChecklist });
  };

  const remove = (group, row, how) => {
    // The notice's words are written for the evening's "Just tonight" and for "Every night" or
    // "Every day". Fixtures section 4 has no line for "Just today", so it removes the row quietly.
    let notice = null;
    if (how === 'always') notice = fill(words.noticeUntilAdded, { item: row.text, child: group.child });
    else if (checklist.evening) notice = fill(words.noticeTonight, { item: row.text, child: group.child });
    today({ type: 'REMOVE_ROW', group: group.key, item: row.text, notice });
  };

  if (foldsWhole && checklist.folded) {
    return (
      <div className={styles.checklist}>
        <ChecklistDone text={checklist.doneLine} drawn={drawn} onDrawn={onDrawn} onOpen={() => today({ type: 'OPEN_CHECKLIST', checklist: checklist.key })} />
      </div>
    );
  }
  return (
    <div className={styles.checklist}>
      {checklist.heading && <h3 className={styles.heading}>{checklist.heading}</h3>}
      {checklist.groups.map((group) => (
        <ReminderGroup
          key={group.key}
          group={group}
          evening={checklist.evening}
          onTick={tick}
          onOpen={() => today({ type: 'OPEN_GROUP', group: group.key })}
          onRemove={remove}
          onAdd={(target, text) => today({ type: 'ADD_ROW', group: target.key, text })}
        />
      ))}
    </div>
  );
}
