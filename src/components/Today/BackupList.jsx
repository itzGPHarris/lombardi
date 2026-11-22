import Button from '../shared/Button.jsx';
import { leaveSheet as words } from '../../copy/today.js';
import styles from './BackupList.module.css';

// "Backup plans" at the foot of the Leave sheet (spec §5, "Plan B and Plan C"): up to two backups,
// each the coach's line and one button named for what it does, and the coach's line when there is no
// second honest backup.
export default function BackupList({ backups, noMoreBackups, onChoose, sectionRef }) {
  return (
    <section className={styles.backups} ref={sectionRef} aria-labelledby="backup-plans">
      <h3 id="backup-plans" className={styles.heading}>{words.backups}</h3>
      {backups.map((backup) => (
        <div key={backup.label} className={styles.backup}>
          <p className={styles.prefix}>{backup.prefix}</p>
          <p className={styles.line}>{backup.coachLine}</p>
          <Button kind="outlined" className={styles.button} onClick={() => onChoose(backup)}>{backup.button.label}</Button>
        </div>
      ))}
      {noMoreBackups && <p className={styles.line}>{noMoreBackups}</p>}
    </section>
  );
}
