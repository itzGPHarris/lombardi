import { useEffect, useRef } from 'react';
import Icon from '../shared/Icon.jsx';
import MomentList from './MomentList.jsx';
import ViewAs from './ViewAs.jsx';
import PhoneFrameControl from './PhoneFrame.jsx';
import DebugMenu from './DebugMenu.jsx';
import { households } from '../../demo/households.js';
import { nextStep, playsFromPresenter } from '../../demo/steps.js';
import * as words from '../../copy/demo.js';
import styles from './Demo.module.css';

// The hidden presenter control (spec §15). It opens from a long press on the parent's monogram, on
// every tab and at every size, and is never part of a screen. It switches households, jumps to a
// moment, shows a moment from the recipient's side, chooses the phone frame, resets the household
// and holds the debug menu. Play the next step plays the moment's next step when it has no tap of
// hers, such as a reply arriving, and is unavailable otherwise (spec §15, issue C80).
export default function HouseholdSwitcher({ session, dispatch, household, embedded, onPhoneFrame }) {
  const panelRef = useRef(null);
  useEffect(() => {
    panelRef.current?.focus();
    const onKey = (event) => { if (event.key === 'Escape') dispatch({ type: 'CLOSE_SWITCHER' }); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [dispatch]);
  return (
    <div className={styles.layer}>
      <div className={styles.scrim} onClick={() => dispatch({ type: 'CLOSE_SWITCHER' })} aria-hidden="true" />
      <section ref={panelRef} className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="switcher-title" tabIndex={-1}>
        <header className={styles.panelHeader}>
          <h2 id="switcher-title" className={styles.panelTitle}>{words.switcherTitle}</h2>
          <button type="button" className={styles.iconButton} aria-label={words.close} onClick={() => dispatch({ type: 'CLOSE_SWITCHER' })}>
            <Icon name="close" />
          </button>
        </header>
        <ul className={styles.choices}>
          {households.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={styles.choice}
                aria-pressed={item.id === session.householdId}
                onClick={() => dispatch({ type: 'SWITCH_HOUSEHOLD', householdId: item.id })}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <MomentList seed={household.seed} current={session.momentId} onJump={(momentId) => dispatch({ type: 'JUMP', momentId })} />
        <ViewAs household={household} current={session.viewAs} onChoose={(person) => dispatch({ type: 'VIEW_AS', person })} />
        <PhoneFrameControl on={session.phoneFrame || embedded} onChange={onPhoneFrame} />
        <section className={styles.section}>
          <button
            type="button"
            className={styles.secondary}
            disabled={!playsFromPresenter(nextStep(session.momentId, session.played))}
            onClick={() => dispatch({ type: 'NEXT_STEP' })}
          >
            {words.playNextStep}
          </button>
          <button type="button" className={styles.secondary} onClick={() => dispatch({ type: 'RESET' })}>{words.reset}</button>
        </section>
        <DebugMenu session={session} household={household} onCoachMode={(mode) => dispatch({ type: 'SET_COACH_MODE', mode })} />
      </section>
    </div>
  );
}
