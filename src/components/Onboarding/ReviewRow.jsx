import Icon from '../shared/Icon.jsx';
import styles from './Schools.module.css';

// A row in the style of the library's ListRow: a title over a detail line, with a chevron, that opens
// to change it. The library's ListRow has one detail line and truncates it, which cuts off the source
// marks this screen depends on, so the build lets the detail wrap to a second line (issue O38).
export default function ReviewRow({ title, detail, open, onOpen, children }) {
  return (
    <div className={styles.rowWrap}>
      <button type="button" className={styles.row} aria-expanded={onOpen ? Boolean(open) : undefined} onClick={onOpen}>
        <span className={styles.rowText}>
          <span className={styles.title}>{title}</span>
          {detail && <span className={styles.detail}>{detail}</span>}
        </span>
        <span className={styles.chevron}><Icon name="chevron-right" /></span>
      </button>
      {children}
    </div>
  );
}
