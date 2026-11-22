import Icon from './Icon.jsx';
import { tabs } from '../../copy/navigation.js';
import { useNavigation } from '../Layout/navigation.js';
import { unreadLabel } from '../../copy/team.js';
import { fill } from '../../demo/today.js';
import styles from './TabBar.module.css';

// The five tabs across the foot of a phone (spec §2), drawn as the library's Tab Bar (150:327).
// Tapping the active tab again takes the page back to the top. Team carries a dot when anything on it
// is unread, and its label says how many (spec §10).
export default function TabBar() {
  const { tab, teamUnread, openTab } = useNavigation();
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
            aria-label={item.id === 'team' && teamUnread ? fill(unreadLabel, { count: teamUnread }) : undefined}
            onClick={() => (active ? window.scrollTo({ top: 0, behavior: 'smooth' }) : openTab(item.id))}
          >
            <span className={styles.iconWrap}>
              <Icon name={item.icon} />
              {item.id === 'team' && teamUnread > 0 && <span className={styles.dot} />}
            </span>
            <span className={styles.label}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
