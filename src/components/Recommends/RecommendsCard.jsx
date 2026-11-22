import styles from './RecommendsCard.module.css';

// MVP Editorial on Today (spec §5 and §12; library RecommendsCard 2519:1286): at most one article, with
// the label line, the title in Voice at semibold and one reason line beginning "Because". It is not a
// card, so it sits on the sheet under a hairline, and it never carries the coach's dot or tint. Its
// title and reading time are placeholders until an approved article arrives (issue R15). Tapping it
// opens the article.
export default function RecommendsCard({ editorial, onOpen }) {
  return (
    <article className={styles.editorial}>
      <button type="button" className={styles.open} onClick={() => onOpen?.(editorial.id)}>
      {editorial.line && <p className={styles.line}>{editorial.line}</p>}
      <h2 className={styles.title}>{editorial.title}</h2>
      <p className={styles.reason}>{editorial.reason}</p>
      </button>
    </article>
  );
}
