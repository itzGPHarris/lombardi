import Button from '../shared/Button.jsx';
import Choice from '../shared/Choice.jsx';
import Icon from '../shared/Icon.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import { Field, StepCounter } from './parts.jsx';
import { household as words } from '../../copy/onboarding.js';
import styles from './Onboarding.module.css';
import own from './Household.module.css';

// Your household (0g, 3088:12922), 04 of 04: the household type, the language at home, and, under the
// subheading "Who else helps?", the adults she counts on. 0g and 0h are one screen since November 20,
// 2026 (issues O22 and O24). The adults become the first members of her circle. Done stays at the foot.
export default function Household({ entries, set, setHelper, addHelper, onDone, onBack }) {
  return (
    <OnboardingShell onBack={onBack} counter={<StepCounter step={4} />} primary={<Button kind="primary" full onClick={onDone}>{words.done}</Button>}>
      <div className={styles.page} data-top="none">
        <h1 className={styles.headline}>{words.heading}</h1>
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
      </div>
    </OnboardingShell>
  );
}
