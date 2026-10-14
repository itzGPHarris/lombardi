import { household, formatTime } from '../../demo/session';
import copy from '../../copy/interface.json';
import Icon from './Icon';
import styles from './shared.module.css';
export function OwnerLabel({ owner }) {
  const name = owner === 'charlotte' ? copy.you : household.people.find(p => p.id === owner)?.name || copy.nobody;
  return <span className={styles.owner}>{!owner && <Icon name="unowned" />}{name}</span>;
}
export function StatusMark({ status, person }) {
  if (!status) return null;
  const labels = { Proposed: copy.suggested, Asked: `${copy.asked} ${person}`, Accepted: `${person}${copy.accepted}`, Declined: `${person}${copy.declined}` };
  return <span className={styles.status}><Icon name={status} />{labels[status]}</span>;
}
export function PlanItem({ item }) {
  return <div className={styles.planItem}>
    <div><span className={styles.mono}>{formatTime(item.time.time)}</span><p>{item.title}</p>
      {item.fromCalendar && <span className={styles.source}><Icon name="calendar-mark" />{copy.calendar}</span>}
      <StatusMark status={item.status} person={household.people.find(p => p.id === item.owner)?.name} />
    </div><OwnerLabel owner={item.owner} />
  </div>;
}
export function Monogram({ person, name }) {
  const initial = person === 'charlotte' ? 'C' : name[0];
  return <span className={styles.monogram} data-person={person} aria-hidden="true">{initial}</span>;
}
