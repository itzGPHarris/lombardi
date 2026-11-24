import { useState } from 'react';
import Button from '../shared/Button.jsx';
import Choice from '../shared/Choice.jsx';
import ReviewRow from './ReviewRow.jsx';
import { Field } from './parts.jsx';
import { household as words } from '../../copy/onboarding.js';
import styles from './Schools.module.css';

// The household and the adults who help, as rows on the school screen (0f, 2853:13052; issue O36):
// under "Your household", "How is your household set up?" showing her choice, which opens the four
// choices in place, and "Language at home" showing English, the only working option in the prototype;
// under "Who else helps?", a row for each adult with the name over the relationship, which opens the
// Name and Relationship fields, and "+ Add someone", which opens the line and the two fields for a new
// adult. The adults become the first members of her circle.
export default function HouseholdRows({ entries, set, setHelper, addHelper }) {
  const [open, setOpen] = useState(null);
  const toggle = (row) => setOpen(open === row ? null : row);
  const adding = open === 'new';
  return (
    <>
      <section className={styles.section} aria-labelledby="your-household">
        <h2 id="your-household" className={styles.subheading}>{words.heading}</h2>
        <div className={styles.card}>
          <ReviewRow title={words.question} detail={entries.setup || null} open={open === 'setup'} onOpen={() => toggle('setup')}>
            {open === 'setup' && (
              <div className={styles.choices}>
                {words.choices.map((choice) => (
                  <Choice key={choice} selected={entries.setup === choice} onClick={() => { set('setup', choice); setOpen(null); }}>{choice}</Choice>
                ))}
              </div>
            )}
          </ReviewRow>
          <div className={styles.selectRow}>
            <ReviewRow title={words.language} detail={entries.language} />
            {/* English is the only working option in the prototype (spec §3). */}
            <select aria-label={words.language} className={styles.overlay} value={entries.language} onChange={(event) => set('language', event.target.value)}>
              <option value={entries.language}>{entries.language}</option>
            </select>
          </div>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="who-else-helps">
        <h2 id="who-else-helps" className={styles.subheading}>{words.subheading}</h2>
        {entries.helpers.some((helper) => helper.name.trim()) && (
          <div className={styles.card}>
            {entries.helpers.map((helper, index) => (helper.name.trim() || open === index) && (
              <ReviewRow key={index} title={helper.name} detail={helper.relationship} open={open === index} onOpen={() => toggle(index)}>
                {open === index && <HelperFields helper={helper} index={index} setHelper={setHelper} />}
              </ReviewRow>
            ))}
          </div>
        )}
        {adding ? (
          <div className={styles.adding}>
            <p className={styles.line}>{words.line}</p>
            <HelperFields helper={entries.helpers.at(-1)} index={entries.helpers.length - 1} setHelper={setHelper} />
          </div>
        ) : (
          <Button kind="text" className={styles.addSomeone} onClick={() => { addHelper(); setOpen('new'); }}>{words.addSomeone}</Button>
        )}
      </section>
    </>
  );
}

function HelperFields({ helper, index, setHelper }) {
  return (
    <div className={styles.pair}>
      <Field id={`helper-name-${index}`} label={words.name} value={helper.name} onChange={(name) => setHelper(index, { name })} />
      <Field id={`helper-relationship-${index}`} label={words.relationship} value={helper.relationship} onChange={(relationship) => setHelper(index, { relationship })} />
    </div>
  );
}
