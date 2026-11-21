import useLongPress from '../../hooks/useLongPress.js';
import { monogramLabel } from '../../copy/navigation.js';
import { useNavigation } from '../Layout/navigation.js';
import styles from './Monogram.module.css';

// The parent's monogram, and hers alone (spec §2, "The monogram and Back"). A tap opens Settings,
// and a long press opens the household switcher (spec §15). Drawn as the library's AdultAvatar.
export default function Monogram() {
  const { parentInitial, openSettings, openSwitcher } = useNavigation();
  const press = useLongPress(openSwitcher, openSettings);
  return (
    <button type="button" className={styles.target} aria-label={monogramLabel} {...press}>
      <span className={styles.monogram} aria-hidden="true">{parentInitial}</span>
    </button>
  );
}
