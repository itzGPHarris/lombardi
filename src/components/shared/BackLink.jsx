import { back } from '../../copy/navigation.js';
import { useNavigation } from '../Layout/navigation.js';
import styles from './BackLink.module.css';

// Back, at the top left of every page opened inside a tab (spec §2). The frames draw it as a word.
export default function BackLink({ onBack }) {
  const navigation = useNavigation();
  return (
    <button type="button" className={styles.back} onClick={onBack ?? navigation.back}>
      {back}
    </button>
  );
}
