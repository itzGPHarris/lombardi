import Icon from '../shared/Icon.jsx';
import styles from './PhaseHeader.module.css';

// The dateline (spec §5, "Phase of the day"): the phase icon, then the day, the phase and the date in
// Title, on one line. The icon has no label of its own, because the dateline names the phase.
export default function PhaseHeader({ dateline }) {
  return (
    <div className={styles.header}>
      <span className={styles.icon}><Icon name={dateline.icon} /></span>
      <h1 className={styles.dateline}>{dateline.text}</h1>
    </div>
  );
}
