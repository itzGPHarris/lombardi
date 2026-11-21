import { useEffect, useRef, useState } from 'react';
import copy from '../copy/interface.json';
import presenter from '../demo/presenter-copy.json';
import { phase, formatTime } from '../demo/session';
import { useHousehold } from '../demo/SessionContext';
import Icon from '../components/shared/Icon';
import TodayTab from '../components/Today/TodayTab';
import { ArticleView, HandoffSheet, RequestDraft, SettingsPlaceholder, WednesdayPlan } from '../screens/SliceScreens';
import styles from './shell.module.css';

function Navigation() {
  const {state,dispatch}=useHousehold();
  const active = state.view === 'game-plan' ? 'game-plan' : 'today';
  return <nav className={styles.navigation} aria-label={copy.product}><div className={styles.wordmark}>{copy.product}</div><div className={styles.tabs}>{copy.tabs.map(tab=><button key={tab.id} disabled={!['today','game-plan'].includes(tab.id)} aria-current={active===tab.id?'page':undefined} onClick={()=>dispatch({type:'NAVIGATE',view:tab.id})}><Icon name={tab.id}/><span>{tab.label}</span></button>)}</div><button className={styles.settings} onClick={()=>dispatch({type:'NAVIGATE',view:'settings'})}><Icon name="settings"/>{copy.settings}</button></nav>;
}
function Modal({ name, phone, setPhone, close }) {
  const {state,dispatch}=useHousehold();
  const ref=useRef(null);
  const isDemo=name==='demo';
  useEffect(()=>{
    const returnTo=document.activeElement;
    ref.current.showModal();
    return ()=>{ if(returnTo?.isConnected) returnTo.focus(); };
  },[]);
  return <dialog ref={ref} className={styles.modal} onCancel={e=>{e.preventDefault();close();}} aria-labelledby="modal-title"><h2 id="modal-title">{isDemo?presenter.title:copy.add}</h2>
    {isDemo?<><p>{presenter.household} · {state.momentId}</p><button onClick={()=>{dispatch({type:'OPEN_MOMENT',id:'C-03'});}}>{presenter.moment}</button><button onClick={()=>dispatch({type:'RESET'})}>{presenter.reset}</button><fieldset><legend>{presenter.time}: {formatTime(state.time.time)}</legend><button onClick={()=>dispatch({type:'RESET'})}>{presenter.times[0]}</button><button onClick={()=>dispatch({type:'ADVANCE'})}>{presenter.times[1]}</button></fieldset><button aria-pressed={phone} onClick={()=>setPhone(!phone)}>{phone?presenter.responsive:presenter.phone}</button></>:copy.captureChoices.map(label=><button disabled key={label}>{label}</button>)}
    <button onClick={close}>{copy.back}</button></dialog>;
}
export default function Shell() {
  const {state,dispatch}=useHousehold();
  const [phone,setPhone]=useState(()=>new URLSearchParams(window.location.search).get('frame')==='phone');
  const [demoOpen,setDemoOpen]=useState(false);
  const scroller=useRef(null);
  const heading=useRef(null);
  const timer=useRef(null);
  const longPressed=useRef(false);
  const page=['article','draft','handoff','settings'].includes(state.view);
  useEffect(()=>{
    function shortcut(e){ if(e.ctrlKey && e.shiftKey && e.code==='KeyD'){e.preventDefault();setDemoOpen(v=>!v);} }
    window.addEventListener('keydown',shortcut);
    return ()=>{window.removeEventListener('keydown',shortcut);clearTimeout(timer.current);};
  },[]);
  useEffect(()=>{scroller.current?.scrollTo(0,0); if(!document.querySelector('dialog[open]')) heading.current?.focus();},[state.view,state.revision]);
  const openSettings=()=>{if(longPressed.current){longPressed.current=false;return;}dispatch({type:'NAVIGATE',view:'settings'});};
  const startPress=()=>{longPressed.current=false;timer.current=setTimeout(()=>{longPressed.current=true;setDemoOpen(true);},650);};
  const stopPress=()=>clearTimeout(timer.current);
  return <div className={phone?styles.stage:undefined}><div className={`${styles.app} ${phone?styles.phone:''}`} data-layout={phone?'phone':'responsive'}>
    <Navigation/><div className={styles.viewport} ref={scroller}>
      <header className={styles.header}><div className={styles.title} ref={heading} tabIndex="-1">
        {state.view==='today'?<><Icon name={`phase-${phase(state.time.time)}`}/><h1>{copy.phase[phase(state.time.time)]}</h1><span className={styles.day}>{copy.days[state.time.day]}</span></>:<span className={styles.brand}>{state.view==='game-plan'?copy.tabs[2].label:copy.product}</span>}
      </div>{page?<button onClick={()=>dispatch({type:'BACK'})}><Icon name="back"/>{copy.back}</button>:<button className={styles.monogram} aria-label={copy.settingsLabel} onClick={openSettings} onPointerDown={startPress} onPointerUp={stopPress} onPointerCancel={stopPress} onPointerLeave={stopPress} onContextMenu={e=>e.preventDefault()}>C</button>}</header>
      <main className={styles.content}>{state.view==='today'&&<TodayTab/>}{state.view==='game-plan'&&<WednesdayPlan/>}{state.view==='article'&&<ArticleView/>}{state.view==='draft'&&<RequestDraft/>}{state.view==='handoff'&&<HandoffSheet/>}{state.view==='settings'&&<SettingsPlaceholder/>}</main>
    </div>{state.view==='today'&&<button className={styles.add} onClick={()=>dispatch({type:'MODAL',name:'add'})}><Icon name="add"/>{copy.add}</button>}
    {(demoOpen||state.modal)&&<Modal name={demoOpen?'demo':state.modal} phone={phone} setPhone={setPhone} close={()=>{setDemoOpen(false);dispatch({type:'MODAL',name:null});}}/>}
  </div></div>;
}
