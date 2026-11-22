import PlanRow from './PlanRow.jsx';
import styles from './GamePlan.module.css';

// The game plan from the tablet width (spec §2 and §8, "At wider screens"): the week strip becomes the
// headings of seven columns and stays under the title bar, with each day's rows stacked beneath its
// heading, and next week beneath this one. The review card stays across the top.
function Column({ day, strip, childName, onOpen, past }) {
  return (
    <section className={styles.column} data-past={past || undefined} aria-label={day ? `${day.heading}, ${day.count ?? day.emptyText}` : undefined}>
      <div className={styles.columnHead}>
        <span className={styles.weekDay} data-today={strip?.today || undefined} data-past={strip?.past || undefined}>
          <span className={styles.disc}>{strip?.letter}</span>
          <span className={styles.dot} data-on={strip?.dot || undefined} aria-hidden="true" />
        </span>
        {day && <span className={styles.columnName}>{day.heading}</span>}
        {day && <span className={styles.dayCount}>{day.count ?? day.emptyText}</span>}
      </div>
      <div className={styles.columnRows}>
        {day?.rows.map((row) => <PlanRow key={row.id} row={row} childName={childName} onOpen={onOpen} stacked />)}
      </div>
    </section>
  );
}

export default function WeekColumns({ view, childName, onOpen }) {
  const thisWeek = [...(view.past?.days ?? []).map((day) => ({ ...day, past: true })), ...view.days];
  const nextWeek = view.nextWeek.days;
  const letters = view.strip.days.map((day) => day.letter);
  const week = (days, strip) => strip.map((entry) => {
    const day = days.find((candidate) => candidate.key?.endsWith(`.${entry.key.split('.')[1]}`));
    return <Column key={entry.key} day={day} strip={entry} childName={childName} onOpen={onOpen} past={day?.past} />;
  });
  const nextStrip = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((key, index) => ({
    key: `${view.now.week + 1}.${key}`, letter: letters[index], dot: nextWeek[index]?.dot,
  }));
  return (
    <div className={styles.columns}>
      {view.past && view.nextWeek.open && <p className={styles.dayCount}>{view.past.label}</p>}
      {!view.nextWeek.open && <div className={styles.week}>{week(thisWeek, view.strip.days)}</div>}
      <h2 className={styles.columnsHeading}>{view.nextWeek.heading}</h2>
      {view.nextWeek.sentence && <p className={styles.nextSentence}>{view.nextWeek.sentence}</p>}
      <div className={styles.week}>{week(nextWeek, nextStrip)}</div>
    </div>
  );
}
