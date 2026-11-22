import AdultAvatar from '../shared/AdultAvatar.jsx';
import Icon from '../shared/Icon.jsx';
import styles from './Team.module.css';

// The rows on the Team tab (library ChatRow 2760:40404, GroupRow 2760:40614, PersonRow 3093:12955).
// Unread shows as the words "1 new", never as a dot or a color alone.
export function ChatRow({ chat, onOpen }) {
  return (
    <button type="button" className={styles.row} onClick={() => onOpen(chat.id)}>
      <span className={styles.avatars}><AdultAvatar initial={chat.initials[chat.initials.length - 1]} label={chat.name} /></span>
      <span className={styles.rowText}>
        <span className={styles.rowName}>{chat.name}</span>
        <span className={styles.preview}>{chat.latest}</span>
      </span>
      <span className={styles.rowRight}>
        <span className={styles.when}>{chat.when}</span>
        {chat.unread && <span className={styles.unread}>{chat.unread}</span>}
      </span>
    </button>
  );
}

export function GroupRow({ group, onOpen }) {
  return (
    <button type="button" className={styles.row} onClick={() => onOpen(group.id)}>
      <span className={styles.groupMark}><Icon name="team" /></span>
      <span className={styles.rowText}>
        <span className={styles.rowName}>{group.name}</span>
        <span className={styles.members}>{group.members}</span>
        <span className={styles.preview}>{group.latest}</span>
      </span>
      <span className={styles.rowRight}>
        {group.when && <span className={styles.when}>{group.when}</span>}
        {group.unread && <span className={styles.unread}>{group.unread}</span>}
      </span>
    </button>
  );
}

export function CircleTag({ tag }) {
  return <span className={styles.circleTag} aria-label={tag.accessible}>{tag.label}</span>;
}

export function PersonRow({ person, onOpen }) {
  return (
    <button type="button" className={styles.row} data-center onClick={() => onOpen(person.id)}>
      <AdultAvatar initial={person.initial} label={person.name} />
      <span className={styles.rowText}>
        <span className={styles.rowName}>{person.name}</span>
        {person.line && <span className={styles.line}>{person.line}</span>}
      </span>
      {person.onMvp && <span className={styles.when}>{person.onMvp}</span>}
      {person.circle && <CircleTag tag={person.circle} />}
      <span className={styles.chevron}><Icon name="chevron-right" /></span>
    </button>
  );
}
