import PageShell from '../Layout/PageShell.jsx';
import Button from '../shared/Button.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { settingsView } from '../../demo/tabs.js';
import styles from './Settings.module.css';

// Settings (spec §13; frame 2853:15443): a page with Back, reached from the monogram on every tab and
// from the foot of the sidebar. A card for each thing she might come to change, each with its heading,
// a line saying what it holds, and label-and-value rows, with values in muted ink and links in
// cerulean. Every link and switch is staged and changes nothing, because no moment needs them.
function SettingsRow({ row, on }) {
  if (row.text) return <p className={styles.statement}>{row.text}</p>;
  if (!row.label) return <div className={styles.row}><Button kind="text">{row.link}</Button></div>;
  return (
    <div className={styles.row} data-stacked={row.stacked || undefined}>
      <span className={styles.label}>{row.label}</span>
      {row.value && <span className={styles.value}>{row.value}</span>}
      {row.link && <Button kind="text">{row.link}</Button>}
      {row.on !== undefined && (
        <span className={styles.switchRow}>
          <span className={styles.value}>{row.on ? on : null}</span>
          <span className={styles.switch} role="switch" aria-checked={row.on} aria-label={row.label} data-on={row.on || undefined}><span /></span>
        </span>
      )}
    </div>
  );
}

export default function SettingsPage() {
  const { household } = useSession();
  const view = settingsView({ seed: household.seed });
  return (
    <PageShell title={view.title} headline>
      <div className={styles.cards}>
        {view.cards.map((card) => (
          <section key={card.id} className={styles.card} aria-labelledby={`settings-${card.id}`}>
            <h2 id={`settings-${card.id}`} className={styles.heading}>{card.heading}</h2>
            <p className={styles.line}>{card.line}</p>
            <div className={styles.rows}>
              {card.rows.map((row) => <SettingsRow key={row.label ?? row.link ?? row.text} row={row} on={view.on} />)}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
