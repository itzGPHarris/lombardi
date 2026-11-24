import OnboardingShell from '../Layout/OnboardingShell.jsx';
import { fill } from '../../demo/today.js';
import { draft as words } from '../../copy/onboarding.js';
import styles from './Draft.module.css';

// The draft week (0c, 2853:12011): the draft's heading, the days it covers in Meta, the coach's line,
// then each remaining school day and the week's school event, marked Suggested. The account prompt,
// with the sign-in on it, slides up from below once the draft has shown (spec §19, issue O35).
export default function Draft({ child, dates, line, rows, prompt, onBack }) {
  return (
    <OnboardingShell onBack={onBack} foot={prompt}>
      <div className={styles.draft}>
        <header className={styles.header}>
          <h1 className={styles.heading}>{fill(words.heading, { child })}</h1>
          <p className={styles.dates}>{dates}</p>
          <p className={styles.line}>{line}</p>
        </header>
        <ul className={styles.rows}>
          {rows.map((row) => (
            <li key={row.key} className={styles.row} data-event={row.suggested || undefined}>
              <span className={styles.day}>{row.day}</span>
              <span className={styles.what}>{row.what}</span>
              {row.suggested && <span className={styles.suggested}>{words.suggested}</span>}
            </li>
          ))}
        </ul>
      </div>
    </OnboardingShell>
  );
}
