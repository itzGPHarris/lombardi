import { describe, expect, it } from 'vitest';
import { createSession, sessionReducer, visibleDepartures, countdown, phase, household } from '../src/demo/session';
const act = (state, type, data = {}) => sessionReducer(state, { type, ...data });

describe('C-03 session', () => {
  it('opens independently at fixture time with both departures and nobody on Wednesday carpool', () => {
    const s = createSession();
    expect(s.time).toEqual({week:0,day:'mon',time:'07:25'});
    expect(visibleDepartures(s).map(d=>countdown(d.time.time,s.time.time))).toEqual(['in 15 min','in 50 min']);
    expect(s.planItems.find(i=>i.id==='wed-carpool').owner).toBeNull();
    expect(s.tasks).toEqual([]);
  });
  it('checks independently without mutating the seed', () => {
    const s = act(createSession(),'TOGGLE_CHECK',{id:'alexis-library'});
    expect(s.checked).toEqual({'alexis-library':true});
    expect(act(s,'TOGGLE_CHECK',{id:'alexis-library'}).checked['alexis-library']).toBe(false);
    expect(act(s,'TOGGLE_CHECK',{id:'unknown'})).toBe(s);
    expect(household.moments[0].state.checked).toEqual({});
  });
  it('retires Alexis exactly at the scripted 7:40 step and preserves checks', () => {
    const s = act(act(createSession(),'TOGGLE_CHECK',{id:'alexis-water'}),'ADVANCE');
    expect(s.time.time).toBe('07:40');
    expect(visibleDepartures(s).map(d=>d.child)).toEqual(['mallory']);
    expect(countdown('08:15',s.time.time)).toBe('in 35 min');
    expect(s.checked['alexis-water']).toBe(true);
    expect(phase(s.time.time)).toBe('morning');
    expect(countdown('07:40','07:40')).toBeNull();
    expect(countdown('08:30','07:25')).toBe('in 1 hr 5 min');
  });
  it('viewing and editing the draft does not take the carpool', () => {
    let s=act(createSession(),'NAVIGATE',{view:'draft'});
    s=act(s,'EDIT_DRAFT',{text:'A parent edit'});
    s=act(s,'BACK');
    expect(s.planItems.find(i=>i.id==='wed-carpool').owner).toBeNull();
    expect(s.tasks).toHaveLength(0);
  });
  it('handoff assigns You without a status or Changed mark and leaves an unchecked task', () => {
    let s=act(createSession(),'NAVIGATE',{view:'draft'});
    s=act(s,'EDIT_DRAFT',{text:'A parent edit'});
    s=act(s,'HANDOFF');
    expect(s.planItems.find(i=>i.id==='wed-carpool')).toMatchObject({owner:'charlotte',status:null,marks:[]});
    expect(s.tasks).toHaveLength(1);
    expect(s.tasks[0].checked).toBe(false);
    expect(s.requests[0].text).toBe('A parent edit');
    expect(s.coachCards).toEqual([]);
    s=act(s,'STAGED_SEND');
    expect(s.handoffSent).toBe(true);
    expect(s.tasks[0].checked).toBe(false);
    s=act(s,'TOGGLE_TASK',{id:'reply-task'});
    expect(s.tasks[0].checked).toBe(true);
  });
  it('refuses an empty draft and handoff from another screen', () => {
    const initial=createSession();
    expect(act(initial,'HANDOFF')).toBe(initial);
    let s=act(initial,'NAVIGATE',{view:'draft'});
    s=act(s,'EDIT_DRAFT',{text:'  '});
    expect(act(s,'HANDOFF')).toBe(s);
  });
  it('Not this week dismisses the card without assigning an owner', () => {
    const s=act(createSession(),'DISMISS_COACH');
    expect(s.coachCards).toEqual([]);
    expect(s.planItems.find(i=>i.id==='wed-carpool').owner).toBeNull();
    expect(s.tasks).toEqual([]);
  });
  it('reset and reopening restore all content and navigation after interactions', () => {
    let s=act(createSession(),'TOGGLE_CHECK',{id:'alexis-library'});
    s=act(s,'ADVANCE');
    s=act(s,'NAVIGATE',{view:'draft'});
    s=act(s,'EDIT_DRAFT',{text:'An edited reply'});
    s=act(s,'HANDOFF');
    s=act(s,'STAGED_SEND');
    s=act(s,'TOGGLE_TASK',{id:'reply-task'});
    s=act(s,'NAVIGATE',{view:'article'});
    for(const reset of [{type:'RESET'},{type:'OPEN_MOMENT',id:'C-03'}]) {
      const restored=sessionReducer(s,reset);
      expect({...restored,revision:0}).toEqual(createSession());
      expect(restored.revision).toBe(1);
    }
  });
  it('rejects unsupported moments and ignores unavailable tabs', () => {
    expect(()=>createSession('C-06')).toThrow('Unsupported moment');
    const s=createSession();
    expect(act(s,'NAVIGATE',{view:'team'})).toBe(s);
  });
});
