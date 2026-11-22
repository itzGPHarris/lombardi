import { useState } from 'react';
import AdultAvatar from './AdultAvatar.jsx';
import Icon from './Icon.jsx';
import styles from './PeoplePicker.module.css';

// A list of people to choose from, under their group headings, each with an outlined initial, their
// line and "On MVP" when they have it: Ask for help on an item page, the circle in the composer and
// New group's members. Single lets one person be chosen; otherwise she ticks as many as she likes.
// A person who can't be chosen is shown with why, and no tick.
// It keeps its own choice, or follows `chosen` when the screen holds the choice with onChange, as the
// composer does so that Everyone on MVP and the ticks agree.
export default function PeoplePicker({ groups, single = false, chosen: held, onChange }) {
  const [own, setOwn] = useState([]);
  const controlled = held !== undefined && onChange !== undefined;
  const chosen = controlled ? held : own;
  const toggle = (id) => {
    const next = single ? [id] : chosen.includes(id) ? chosen.filter((entry) => entry !== id) : [...chosen, id];
    if (!controlled) setOwn(next);
    onChange?.(next);
  };
  return (
    <div className={styles.picker}>
      {groups.map((group) => (
        <section key={group.heading ?? 'people'} className={styles.group} aria-label={group.heading}>
          {group.heading && <h2 className={styles.heading}>{group.heading}</h2>}
          <ul className={styles.list}>
            {group.people.map((person) => (
              <li key={person.id}>
                <button
                  type="button"
                  className={styles.person}
                  role={single ? 'radio' : 'checkbox'}
                  aria-checked={chosen.includes(person.id)}
                  disabled={person.disabled}
                  onClick={() => toggle(person.id)}
                >
                  {person.initial && <AdultAvatar initial={person.initial} label={person.name} />}
                  <span className={styles.text}>
                    <span className={styles.name}>{person.name}</span>
                    {(person.line || person.onMvp) && <span className={styles.line}>{[person.line, person.onMvp].filter(Boolean).join(' · ')}</span>}
                  </span>
                  {person.disabled
                    ? <span className={styles.untickable} />
                    : <span className={styles.tick} data-on={chosen.includes(person.id) || undefined}>{chosen.includes(person.id) && <Icon name="check" />}</span>}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
