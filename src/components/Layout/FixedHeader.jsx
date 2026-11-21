import styles from './Layout.module.css';

// The fixed title bar of a conversation or a composer: Back or nothing at the left, the title in
// the header style, and the monogram on the Coach tab. Nothing in it fades (spec §2, issue C39).
export default function FixedHeader({ title, back, right }) {
  return (
    <div className={styles.fixedHeader}>
      {back && <div className={styles.barRow}><div className={styles.barLeft}>{back}</div></div>}
      <div className={styles.fixedTitleRow}>
        <h1 className={styles.fixedTitle}>{title}</h1>
        {right && <div className={styles.barRight}>{right}</div>}
      </div>
    </div>
  );
}
