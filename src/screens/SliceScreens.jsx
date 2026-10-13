import copy from '../copy/interface.json';
import article from '../data/articles/teacher-conference.json';
import { useHousehold } from '../demo/SessionContext';
import { PlanItem } from '../components/shared/PlanItem';
import { Tasks } from '../components/Today/TodayTab';
import styles from './screens.module.css';

export function ArticleView() {
  return <article className={styles.article}><p className={styles.metadata}>{copy.recommended} · {article.topic} · {article.readingTime}</p><h1>{article.title}</h1><p className={styles.byline}>{article.byline}</p>{article.body.map(p => <p key={p}>{p}</p>)}</article>;
}
export function RequestDraft() {
  const {state, dispatch} = useHousehold();
  return <section className={styles.draft}><h1 id="draft-address">{copy.to} {state.requests[0].to}</h1><textarea aria-labelledby="draft-address" value={state.draftText} onChange={e=>dispatch({type:'EDIT_DRAFT',text:e.target.value})} /><div className={styles.send}><p>{copy.disclaimer}</p><button disabled={!state.draftText.trim()} onClick={()=>dispatch({type:'HANDOFF'})}>{copy.handoff}</button></div></section>;
}
export function HandoffSheet() {
  const {state,dispatch} = useHousehold();
  return <section className={styles.handoff}><h1>{state.requests[0].app}</h1><h2>{state.requests[0].to}</h2><div className={styles.incoming}><strong>{copy.jenna}</strong><p>{copy.jennaMessage}</p></div><div className={styles.outgoing}><p>{state.draftText}</p></div>{!state.handoffSent && <button onClick={()=>dispatch({type:'STAGED_SEND'})}>{copy.send}</button>}{state.handoffSent && <button onClick={()=>dispatch({type:'NAVIGATE',view:'game-plan'})}>{copy.tabs[2].label}</button>}</section>;
}
export function WednesdayPlan() {
  const { state } = useHousehold();
  return <section className={styles.plan}><h1>{copy.days.wed}</h1>{state.planItems.filter(i=>i.time.day==='wed').map(item=><PlanItem item={item} key={item.id} />)}<Tasks /></section>;
}
export function SettingsPlaceholder() {
  return <section className={styles.settings}><h1>{copy.settings}</h1><ul>{copy.settingsHeadings.map(label=><li key={label}>{label}</li>)}</ul></section>;
}
