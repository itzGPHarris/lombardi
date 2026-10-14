import { useHousehold } from '../../demo/SessionContext';
import { countdown, formatTime, household, visibleDepartures, minutes } from '../../demo/session';
import copy from '../../copy/interface.json';
import article from '../../data/articles/teacher-conference.json';
import Icon from '../shared/Icon';
import { Monogram } from '../shared/PlanItem';
import styles from './Today.module.css';

function GoingWithList({ departure }) {
  const { state, dispatch } = useHousehold();
  const child = household.children.find(c => c.id === departure.child);
  return <fieldset className={styles.checklist}><legend>{copy.goingWith} {child.name}</legend>
    {departure.goingWith.map(item => <label key={item.id}><input type="checkbox" checked={!!state.checked[item.id]} onChange={() => dispatch({ type: 'TOGGLE_CHECK', id: item.id })} /><span>{item.text}</span></label>)}
  </fieldset>;
}
export function Departure({ departure, leading }) {
  const { state } = useHousehold();
  const child = household.children.find(c => c.id === departure.child);
  return <section className={`${styles.departure} ${leading ? styles.leading : ''}`} aria-label={`${formatTime(departure.time.time)} · ${departure.line}`}>
    <div className={styles.departureHeader}><Monogram person={child.id} name={child.name} /><h2><span>{formatTime(departure.time.time)}</span> · {departure.line}</h2><span className={styles.countdown}>{countdown(departure.time.time, state.time.time)}</span></div>
    <GoingWithList departure={departure} />
  </section>;
}
export function CoachCard() {
  const { state, dispatch } = useHousehold();
  const card = state.coachCards[0];
  if (!card) return null;
  return <section className={styles.coach} aria-label={copy.tabs[1].label}><div className={styles.coachHeading}><Icon name="coach" /><h2>{copy.days[card.day]}</h2></div><p>{card.text}</p>
    <div className={styles.actions}><button className={styles.primary} onClick={() => dispatch({ type: 'NAVIGATE', view: 'draft' })}>{card.actions[0]}</button><button onClick={() => dispatch({ type: 'DISMISS_COACH' })}>{card.actions[1]}</button></div>
    <button className={styles.link} onClick={() => dispatch({ type: 'NAVIGATE', view: 'game-plan' })}>{card.link}</button>
  </section>;
}
function DayRows() {
  const { state } = useHousehold();
  return <div className={styles.dayRows}>{state.dayRows.map(row => <section key={row.person} className={styles.personRow} data-person={row.person}>
    <h2><Monogram person={row.person} name={row.name} />{row.name}</h2>
    <div className={styles.cells}>{row.cells.map((text, i) => <div key={copy.columns[i]} className={styles.cell}>
      <h3>{copy.columns[i]}</h3><p className={row.person === 'alexis' && i === 0 && minutes(state.time.time) >= 460 ? styles.passed : undefined}>{text}
        {row.person === 'alexis' && i === 2 && <Icon name="calendar-mark" label={copy.calendar} />}</p>
    </div>)}</div>
  </section>)}</div>;
}
// Time coordinates encode fixture start times only. Where end times are unknown,
// render a stop rather than inventing a duration. School bars have fixture end times.
function DayGrid() {
  const { state } = useHousehold();
  const pos = time => `${(minutes(time) - 420) / 660 * 100}%`;
  return <div className={styles.gridScroll} tabIndex="0" role="region" aria-label={`${copy.tabs[0].label} · ${copy.days.mon}`}><div className={styles.grid}>
    <div className={styles.axis}><span />{Array.from({ length: 12 }, (_, i) => <span key={i}>{i + 7 > 12 ? i - 5 : i + 7} {i < 5 ? 'am' : 'pm'}</span>)}</div>
    {state.dayRows.map(row => <div className={styles.gridRow} key={row.person} data-person={row.person}><h2><Monogram person={row.person} name={row.name} />{row.name}</h2><div className={styles.track}>
      <span className={styles.now} style={{left:pos(state.time.time)}}><span>{formatTime(state.time.time)}</span></span>
      {row.person === 'edward' ? <div className={styles.work}>{row.cells[0]}</div> : state.dayGrid[row.person].map((item,i) => <div key={i} className={`${styles.gridItem} ${item.end ? styles.bar : styles.stop} ${item.riding ? styles.riding : ''}`} style={{left:pos(item.start),width:item.end ? `${(minutes(item.end)-minutes(item.start))/660*100}%` : undefined, '--level':item.level}}><span>{item.text}{item.calendar && <Icon name="calendar-mark" label={copy.calendar} />}</span></div>)}
    </div><span className={styles.home}>{row.cells[3]}</span></div>)}
  </div></div>;
}
export function Tasks() {
  const { state, dispatch } = useHousehold();
  if (!state.tasks.length) return null;
  return <div className={styles.tasks}>{state.tasks.map(task => <label key={task.id}><input type="checkbox" checked={task.checked} onChange={() => dispatch({type:'TOGGLE_TASK',id:task.id})} /><span>{task.title}</span><span>{copy.you}</span></label>)}</div>;
}
export default function TodayTab() {
  const { state, dispatch } = useHousehold();
  return <div className={styles.today}>
    <div className={styles.top}>{visibleDepartures(state).map((d,i) => <Departure key={d.id} departure={d} leading={i === 0} />)}<div className={styles.wideCoach}><CoachCard /></div></div>
    <DayRows /><DayGrid /><Tasks /><div className={styles.phoneCoach}><CoachCard /></div>
    <button className={styles.article} onClick={() => dispatch({type:'NAVIGATE',view:'article'})}><span className={styles.articleMeta}>{copy.recommended} · {article.topic} · {article.readingTime}</span><h2>{article.title}</h2><span>{household.recommended[0].reason}</span></button>
  </div>;
}
