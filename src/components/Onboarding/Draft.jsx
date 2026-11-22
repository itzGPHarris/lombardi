import Button from '../shared/Button.jsx';
import OnboardingShell from '../Layout/OnboardingShell.jsx';
import { fill } from '../../demo/today.js';
import { accountPrompt, draft as words } from '../../copy/onboarding.js';
import styles from './Draft.module.css';

// The draft week (0c, 2853:12011): the draft's heading, the days it covers in Meta, the coach's line,
// then each remaining school day and the week's school event, marked Suggested. The account prompt
// slides up from below once the draft has shown (spec §19). Create account goes on to the account
// screen, and Not now ends the session.
export default function Draft({ child, dates, line, rows, onCreate, onNotNow }) {
  const prompt = (
    <section className={styles.prompt} aria-labelledby="account-prompt">
      <h2 id="account-prompt" className={styles.promptHeading}>{fill(accountPrompt.heading, { child })}</h2>
      <p className={styles.promptLine}>{accountPrompt.line}</p>
      <div className={styles.promptButtons}>
        <Button kind="primary" full onClick={onCreate}>{accountPrompt.create}</Button>
        <Button kind="outlined" full onClick={onNotNow}>{accountPrompt.notNow}</Button>
      </div>
    </section>
  );
  return (
    <OnboardingShell foot={prompt}>
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
