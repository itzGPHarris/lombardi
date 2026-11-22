import { useState } from 'react';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import ReminderItem, { NewReminderItem } from './ReminderItem.jsx';
import { checklist as words } from '../../copy/today.js';
import { fill } from '../../demo/today.js';
import styles from './ReminderGroup.module.css';

// One group of a checklist (spec §5, "When a checklist is finished"; library ReminderGroup 2999:39284):
// a child's items under the child's name in the children's indigo, or her own tasks under "Before you
// leave home" in ink. A child's group ends with "Add something else for" the child. When every row is
// ticked the group folds to one line with a check and the count, and tapping the line opens it again
// with every row still ticked.
export default function ReminderGroup({ group, evening, onTick, onOpen, onRemove, onAdd }) {
  const [choosing, setChoosing] = useState(null);
  const [adding, setAdding] = useState(false);
  const choices = evening
    ? [{ id: 'once', label: words.justTonight }, { id: 'always', label: words.everyNight }]
    : [{ id: 'once', label: words.justToday }, { id: 'always', label: words.everyDay }];

  return (
    <div className={styles.group} data-own={group.own || undefined}>
      <div className={styles.fold} data-folded={group.folded || undefined}>
        <div className={styles.foldInner}>
          <h3 className={styles.heading}>{group.heading}</h3>
          <ul className={styles.rows}>
            {group.rows.map((row) => (
              <ReminderItem
                key={row.key}
                row={row}
                onTick={() => onTick(group, row)}
                onRemove={() => setChoosing(row.key)}
                choosing={choosing === row.key}
                choices={choices}
                onChoose={(choice) => { setChoosing(null); onRemove(group, row, choice.id); }}
                onCancelChoosing={() => setChoosing(null)}
              />
            ))}
            {adding && (
              <NewReminderItem
                placeholder={fill(words.newRowPlaceholder, { child: group.child })}
                onAdd={(text) => { setAdding(false); onAdd(group, text); }}
                onDrop={() => setAdding(false)}
              />
            )}
          </ul>
          {!group.own && !adding && (
            <Button kind="text" icon="add" full className={styles.add} onClick={() => setAdding(true)}>
              {fill(words.addSomethingElse, { child: group.child })}
            </Button>
          )}
        </div>
      </div>
      {group.folded && (
        <button type="button" className={styles.foldedLine} onClick={() => onOpen(group)} aria-expanded="false">
          <span className={styles.foldedCheck}><Icon name="check" /></span>
          <span>{group.foldedLine}</span>
        </button>
      )}
    </div>
  );
}
