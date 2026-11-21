import { viewAs as heading } from '../../copy/demo.js';
import styles from './Demo.module.css';

// Shows the current moment from the recipient's side (spec §15 and §9). The recipient's other tabs
// are not part of the demo. Choosing the parent returns to her side.
export default function ViewAs({ household, current, onChoose }) {
  const people = [{ id: null, label: household.parent }, ...household.viewAs];
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{heading}</h3>
      <div className={styles.row}>
        {people.map((person) => (
          <button key={person.id ?? 'parent'} type="button" className={styles.choice} aria-pressed={person.id === current} onClick={() => onChoose(person.id)}>
            {person.label}
          </button>
        ))}
      </div>
    </section>
  );
}
