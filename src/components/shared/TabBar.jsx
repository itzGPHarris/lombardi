import Icon from './Icon.jsx';
import { tabs } from '../../copy/navigation.js';
import { useNavigation } from '../Layout/navigation.js';
import styles from './TabBar.module.css';

// The five tabs across the foot of a phone (spec §2), drawn as the library's Tab Bar (150:327).
// Tapping the active tab again takes the page back to the top.
export default function TabBar() {
  const { tab, openTab } = useNavigation();
  return (
    <nav className={styles.bar} aria-label="Tabs">
      {tabs.map((item) => {
        const active = item.id === tab;
        return (
          <button
            key={item.id}
            type="button"
            className={styles.tab}
            aria-current={active ? 'page' : undefined}
            onClick={() => (active ? window.scrollTo({ top: 0, behavior: 'smooth' }) : openTab(item.id))}
          >
            <Icon name={item.icon} />
            <span className={styles.label}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
