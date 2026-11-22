import Button from '../shared/Button.jsx';
import ChildChip from '../shared/ChildChip.jsx';
import CalendarMark from '../Calendar/CalendarMark.jsx';
import { leaveSheet as words } from '../../copy/today.js';
import { formatTime } from '../../demo/calendar.js';
import styles from './RouteLine.module.css';

// Her run as a line of stations on a rail (spec §5, "The Leave sheet"; library RouteStation). Each
// station has the place, the item there with its chips and start time, and "Leave at" with the time
// she leaves, drawn as the one control on the sheet. Tapping it opens it in place with "5 min earlier"
// and "5 min later", and a line beneath gives the result. Home is a station only where the run starts
// or ends there, and the last station reads "Back around" and the time.
export function RouteStation({ station, childName, onOpen, onStep, earliest }) {
  return (
    <li className={styles.station} data-home={station.home || undefined}>
      <span className={styles.rail} aria-hidden="true"><span className={styles.dot} /></span>
      <div className={styles.body}>
        <p className={styles.place}>{station.place}</p>
        {station.item && (
          <p className={styles.item}>
            {station.item.time && <span className={styles.time}>{station.item.time}</span>}
            {station.item.chips.map((child) => childName(child) && <ChildChip key={child} name={childName(child)} />)}
            {station.item.calendarMark && <CalendarMark />}
            <span>{station.item.text}</span>
          </p>
        )}
        {station.note && <p className={styles.note}>{station.note}</p>}
        {station.lateReach && <p className={styles.reach} data-late>{station.lateReach.text}</p>}
        {station.leaveLabel && (
          <div className={styles.leave}>
            <span>{station.leaveLabel}</span>
            <button
              type="button"
              className={styles.control}
              data-open={station.open || undefined}
              aria-expanded={station.open}
              onClick={() => onOpen(station.index)}
            >
              {formatTime(station.leaveAt)}
            </button>
          </div>
        )}
        {station.open && (
          <>
            <div className={styles.steps}>
              <Button kind="outlined" disabled={earliest && station.leaveAt <= earliest} onClick={() => onStep(station.index, -5)}>{words.earlier}</Button>
              <Button kind="outlined" onClick={() => onStep(station.index, 5)}>{words.later}</Button>
            </div>
            {station.reach && <p className={styles.reach} data-late={station.reach.late || undefined} aria-live="polite">{station.reach.text}</p>}
          </>
        )}
        {station.backAround && <p className={styles.back}>{station.backAround}</p>}
      </div>
    </li>
  );
}

export default function RouteLine({ stations, childName, onOpen, onStep, earliestFor }) {
  return (
    <ol className={styles.line}>
      {stations.map((station) => (
        <RouteStation key={station.index} station={station} childName={childName} onOpen={onOpen} onStep={onStep} earliest={earliestFor(station.index)} />
      ))}
    </ol>
  );
}
