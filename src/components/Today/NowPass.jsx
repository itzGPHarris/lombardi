import { useEffect, useRef, useState } from 'react';
import Button from '../shared/Button.jsx';
import Icon from '../shared/Icon.jsx';
import CalendarMark from '../Calendar/CalendarMark.jsx';
import StatusPill from './StatusPill.jsx';
import PassFields from './PassFields.jsx';
import Timetable from './Timetable.jsx';
import Checklist from './Checklist.jsx';
import { pass as words } from '../../copy/today.js';
import styles from './NowPass.module.css';

// Now, laid out as a boarding pass (spec §5, "Now"; standing decisions 11, 12, 21 and 24). The tinted
// pass holds the title, the leaving time with its status pill over a rule, and the route with the next
// station. Under it on the paper sit the fields, or a trip's timetable, then a dashed line, the grouped
// checklist, a second dashed line and the actions. The pass is a surface for the trip, not a card.
//
// The pass swings in when it shows a departure she has not seen yet in this session: when Today first
// appears after a jump, and whenever Now moves to a different departure. It does not swing when she
// comes back from another tab (spec §19, "Today's pass swings in"). A trip pass keeps its place while
// its top moves to the next leg, which crossfades in place ("Trip pass, next leg").
export default function NowPass({ pass, shown, onShown, onLeave, onAction, childName }) {
  const [swing] = useState(!shown);
  useEffect(() => { if (!shown) onShown(pass.key); }, [shown, onShown, pass.key]);

  const firstLeg = useRef(pass.leg);
  const legChanged = pass.leg !== firstLeg.current;

  const time = <span className={styles.time}>{pass.time}</span>;
  const route = (
    <span className={styles.route}>
      {pass.route.map((place, index) => (
        <span key={`${place}-${index}`}>
          {index > 0 && <><span aria-hidden="true"> → </span><span className={styles.hidden}> {words.routeArrowLabel} </span></>}
          {place}
        </span>
      ))}
    </span>
  );

  return (
    <section className={styles.now} data-swing={swing || undefined}>
      <div className={styles.pass} data-tint={pass.tint}>
        <div className={styles.top} key={pass.leg ?? pass.key} data-changed={legChanged || undefined}>
          {pass.title && (
            <p className={styles.title}>
              {pass.titleCalendarMark && <CalendarMark />}
              <span>{pass.title}</span>
            </p>
          )}
          {pass.conflict && <p className={styles.conflict}>{pass.conflict}</p>}
          {pass.opensLeaveSheet ? (
            <button type="button" className={styles.timeRow} onClick={() => onLeave(pass)}>{time}<StatusPill pill={pass.pill} /></button>
          ) : (
            <div className={styles.timeRow}>{time}<StatusPill pill={pass.pill} /></div>
          )}
          <div className={styles.routeBlock}>
            {pass.opensLeaveSheet ? (
              <button type="button" className={styles.routeRow} onClick={() => onLeave(pass)}>
                {route}
                <span className={styles.chevron}><Icon name="chevron-right" /></span>
              </button>
            ) : <div className={styles.routeRow}>{route}</div>}
            {pass.nextStation && <p className={styles.next}>{pass.nextStation}</p>}
          </div>
        </div>
      </div>
      <div className={styles.below}>
        {pass.fields && <PassFields fields={pass.fields} />}
        {pass.timetable && (
          <>
            <hr className={styles.perforation} />
            <Timetable rows={pass.timetable} childName={childName} />
          </>
        )}
        {pass.checklist && (
          <>
            <hr className={styles.perforation} />
            <Checklist checklist={pass.checklist} />
          </>
        )}
        {pass.actions.length > 0 && (
          <>
            <hr className={styles.perforation} />
            <div className={styles.actions}>
              {pass.actions.map((action) => (
                <Button key={action.id} kind="outlined" icon={action.icon} active={action.active} className={styles.action} onClick={() => onAction(action, pass)}>
                  {action.label}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
