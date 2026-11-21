import { useNavigation } from './navigation.js';
import useLongPress from '../../hooks/useLongPress.js';
import styles from './Layout.module.css';

// The fixed title bar of a conversation or a composer: Back or nothing at the left, the title in
// the header style, and the monogram on the Coach tab. Nothing in it fades (spec §2, issue C39).
// Without a monogram, a long press on the bar opens the household switcher (issue X4).
export default function FixedHeader({ title, back, right }) {
  const { openSwitcher } = useNavigation();
  const press = useLongPress(openSwitcher);
  return (
    <div className={styles.fixedHeader} {...(right ? {} : press)}>
      {back && <div className={styles.barRow}><div className={styles.barLeft}>{back}</div></div>}
      <div className={styles.fixedTitleRow}>
        <h1 className={styles.fixedTitle}>{title}</h1>
        {right && <div className={styles.barRight}>{right}</div>}
      </div>
    </div>
  );
}
