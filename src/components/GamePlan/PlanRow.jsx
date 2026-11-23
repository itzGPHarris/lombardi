import AdultAvatar from '../shared/AdultAvatar.jsx';
import ChildChip from '../shared/ChildChip.jsx';
import Icon from '../shared/Icon.jsx';
import CalendarMark from '../Calendar/CalendarMark.jsx';
import { family } from '../../copy/people.js';
import styles from './PlanRow.module.css';

// One item in the plan, laid out as a lane (library PlanRow 2849:23414): the time it starts in a
// column, the chips, the calendar mark and the item, and at the right the owner or the person's
// answer, with the marks and her note beneath. Later today on Today, the game plan's days and a
// person page's This week all draw their rows with it. Quiet is a routine item with nothing on it,
// in muted ink. Stacked sets the time above the item, for the narrow columns of the wide game plan.
// A person page's lanes set their three-letter day in the Label style, as the frames draw it.
// Nothing here relies on color alone: each mark has its own shape and words.
const answerIcons = { asked: 'hourglass', accepted: 'thumbs-up', declined: 'thumbs-down' };

export function Chips({ chips, childName }) {
  const names = chips.map(childName).filter(Boolean);
  return names.map((name) => <ChildChip key={name} name={name} family={name === family} />);
}

export function Marks({ marks }) {
  if (!marks?.length) return null;
  return (
    <span className={styles.marks}>
      {marks.map((mark) => (mark.kind === 'conflict' ? (
        <span key={`${mark.kind}${mark.other}`} className={styles.conflict}>
          <Icon name="mark-conflict" />
          <span className={styles.markLabel}>{mark.label}</span>
          <span className={styles.markOther}>{mark.other}</span>
        </span>
      ) : (
        <span key={mark.kind} className={styles.updated}>
          <Icon name="mark-changed" />
          <span className={styles.markLabel}>{mark.label}</span>
        </span>
      )))}
    </span>
  );
}

// The owner at the right: "You", "Needs an owner" with its mark, or the person's outlined initial and
// the icon for their answer. A person page leaves the initial off, because the page is theirs.
export function Owner({ owner, initial = true }) {
  if (!owner) return null;
  if (owner.kind === 'person') {
    return (
      <span className={styles.owner} aria-label={owner.label} role="img">
        {initial && <AdultAvatar initial={owner.initial} label={owner.name} />}
        {owner.status && answerIcons[owner.status] && <span className={styles.answer}><Icon name={answerIcons[owner.status]} /></span>}
      </span>
    );
  }
  if (owner.kind === 'none') {
    return <span className={styles.owner}><span className={styles.answer}><Icon name="mark-nobody-yet" /></span><span className={styles.ownerText}>{owner.label}</span></span>;
  }
  return <span className={styles.owner}><span className={styles.ownerText}>{owner.label}</span></span>;
}

export default function PlanRow({ row, childName, onOpen, initial = true, highlight = false, stacked = false, dayLabel = false }) {
  const body = (
    <>
      <span className={styles.time}>{row.time}</span>
      <span className={styles.main}>
        <span className={styles.itemRow}>
          <Chips chips={row.chips} childName={childName} />
          {row.calendarMark && <CalendarMark />}
          <span className={styles.text}>{row.text}</span>
        </span>
        <Marks marks={row.marks} />
        {row.note && <span className={styles.note}>{row.note}</span>}
        {row.answerNote && <span className={styles.note}>{row.answerNote}</span>}
      </span>
      <Owner owner={row.owner} initial={initial} />
    </>
  );
  const props = { id: `row-${row.id}`, className: styles.row, 'data-quiet': row.quiet || undefined, 'data-highlight': highlight || undefined, 'data-stacked': stacked || undefined, 'data-day': dayLabel || undefined };
  return onOpen
    ? <button type="button" {...props} onClick={() => onOpen(row.id)}>{body}</button>
    : <div {...props}>{body}</div>;
}
