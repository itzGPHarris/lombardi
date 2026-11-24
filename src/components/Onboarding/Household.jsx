import Button from '../shared/Button.jsx';
import Choice from '../shared/Choice.jsx';
import Icon from '../shared/Icon.jsx';
import { Field } from './parts.jsx';
import { household as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Household.module.css';

// The household on the school screen (0f), the parts 0g drew (3088:12922) until it joined the school
// screen in fixtures 3.54 (issue O35): under the subheading "Your household", the household type and
// the language at home, then, under "Who else helps?", the adults she counts on, who become the first
// members of her circle.
export default function HouseholdFields({ entries, set, setHelper, addHelper }) {
  return (
    <>
      <section className={own.section} aria-labelledby="your-household">
        <h2 id="your-household" className={own.subheading}>{words.heading}</h2>
        <div className={own.section} role="group" aria-labelledby="household-setup">
          <p id="household-setup" className={styles.line}>{words.question}</p>
          <div className={own.choices}>
            {words.choices.map((choice) => (
              <Choice key={choice} selected={entries.setup === choice} onClick={() => set('setup', choice)}>{choice}</Choice>
            ))}
          </div>
        </div>
        <label className={styles.field} htmlFor="household-language">
          <span className={styles.fieldLabel}>{words.language}</span>
          <span className={styles.box}>
            <span className={styles.boxValue}>{entries.language}</span>
            <span className={styles.chevron}><Icon name="chevron-right" /></span>
            {/* English is the only working option in the prototype (spec §3). */}
            <select id="household-language" className={styles.overlay} value={entries.language} onChange={(event) => set('language', event.target.value)}>
              <option value={entries.language}>{entries.language}</option>
            </select>
          </span>
        </label>
      </section>
      <section className={own.section} aria-labelledby="who-else-helps">
        <h2 id="who-else-helps" className={own.subheading}>{words.subheading}</h2>
        <p className={styles.line}>{words.line}</p>
        <div className={own.helpers}>
          {entries.helpers.map((helper, index) => (
            <div key={index} className={styles.pair}>
              <Field id={`helper-name-${index}`} label={words.name} value={helper.name} onChange={(name) => setHelper(index, { name })} />
              <Field id={`helper-relationship-${index}`} label={words.relationship} value={helper.relationship} onChange={(relationship) => setHelper(index, { relationship })} />
            </div>
          ))}
        </div>
        <Button kind="text" className={own.addSomeone} onClick={addHelper}>{words.addSomeone}</Button>
      </section>
    </>
  );
}
