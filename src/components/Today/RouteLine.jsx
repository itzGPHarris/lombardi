import Button from '../shared/Button.jsx';
import ChildChip from '../shared/ChildChip.jsx';
import CalendarMark from '../Calendar/CalendarMark.jsx';
import StopMarker from './StopMarker.jsx';
import { leaveSheet as words } from '../../copy/today.js';
import { formatTime } from '../../demo/calendar.js';
import styles from './RouteLine.module.css';

// Her run as a line of stations on a rail (spec §5, "The Leave sheet"; library RouteStation 258:666).
// Each station carries a StopMarker on the rail for its kind of place and where she is on the run
// (standing decision 26, T91), then the place, the item there with its chips and start time, and
// "Leave at" with the time she leaves, drawn as the one control on the sheet. Tapping it opens it in
// place as RouteStation's Editing variants draw it: the leave row spans the station with a hairline
// beneath it, the time sits in the tinted picker on the right, "5 min earlier" and "5 min later" stack
// beneath the picker at its width, and a line beneath gives the result. Home is a station only where
// the run starts or ends there, and the last station reads "Back around" and the time. A later stop
// she would now reach late takes RouteStation's Late variant: a hairline under its item, the time
// across the leave row, and the "You reach" line beneath in the warning ink.
export function RouteStation({ station, childName, onOpen, onStep, earliest }) {
  return (
    <li className={styles.station} data-late={station.lateReach && !station.open ? true : undefined} aria-current={station.state === 'current' ? 'step' : undefined}>
      <span className={styles.rail} aria-hidden="true">
        <span className={styles.railTop} />
        <StopMarker place={station.kind} state={station.state} />
        <span className={styles.railBottom} />
      </span>
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
        {station.leaveLabel && (
          <div className={station.open ? styles.open : styles.leave}>
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
            {station.open && (
              <>
                <span className={styles.rule} aria-hidden="true" />
                <div className={styles.steps}>
                  <Button kind="outlined" full disabled={earliest && station.leaveAt <= earliest} onClick={() => onStep(station.index, -5)}>{words.earlier}</Button>
                  <Button kind="outlined" full onClick={() => onStep(station.index, 5)}>{words.later}</Button>
                </div>
                {station.reach && <p className={styles.reach} data-late={station.reach.late || undefined} aria-live="polite">{station.reach.text}</p>}
              </>
            )}
          </div>
        )}
        {station.lateReach && <p className={styles.reach} data-late>{station.lateReach.text}</p>}
        {station.backAround && <p className={styles.back}>{station.backAround.label} <span className={styles.backTime}>{station.backAround.time}</span></p>}
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
