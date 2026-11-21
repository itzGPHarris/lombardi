import Icon from './Icon.jsx';
import { settings, tabs, wordmark } from '../../copy/navigation.js';
import { useNavigation } from '../Layout/navigation.js';
import styles from './Sidebar.module.css';

// From tablet width up the tab bar becomes this sidebar: the wordmark, the same five tabs in the
// same order, then Settings at the foot below a rule (spec §2, "At wider screens").
export default function Sidebar() {
  const { tab, openTab, openSettings } = useNavigation();
  return (
    <aside className={styles.sidebar}>
      <p className={styles.wordmark}>{wordmark}</p>
      <nav aria-label="Tabs">
        <ul className={styles.list}>
          {tabs.map((item) => {
            const active = item.id === tab;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={styles.item}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => (active ? window.scrollTo({ top: 0, behavior: 'smooth' }) : openTab(item.id))}
                >
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.foot}>
        <button type="button" className={styles.item} aria-current={tab === 'settings' ? 'page' : undefined} onClick={openSettings}>
          <Icon name="settings" />
          <span>{settings}</span>
        </button>
      </div>
    </aside>
  );
}
