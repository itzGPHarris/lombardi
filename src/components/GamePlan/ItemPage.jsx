import { useMemo, useState } from 'react';
import PageShell from '../Layout/PageShell.jsx';
import Button from '../shared/Button.jsx';
import CoachDot from '../shared/CoachDot.jsx';
import Icon from '../shared/Icon.jsx';
import { Chips, Marks, Owner } from './PlanRow.jsx';
import { useNavigation } from '../Layout/navigation.js';
import { useSession } from '../../demo/SessionContext.js';
import { itemPageView } from '../../demo/tabs.js';
import { nextScripted, playsFromTrigger, triggerItems } from '../../demo/steps.js';
import useActions from '../../hooks/useActions.js';
import * as people from '../../copy/people.js';
import styles from './ItemPage.module.css';

// An item's page (spec §8, "Item page"; frame 2853:14433 and the item pages added on Oct. 18): a page
// with Back, not a sheet, because asking someone, a draft and the backups all lead to another screen.
// It reads the item at the moment from the seed. What she does here is hers and carries no mark:
//
// - Add to the game plan, on a suggested item, plays the moment's step for it and returns her to the
//   agenda, where the item lands.
// - Her note is edited in place and shows under the item. In C-04 the field fills in the note the
//   fixtures write, and the moment's step plays once both of her notes are saved.
// - Move to another date or time opens a day and time picker in place, with Save. A move the moment
//   scripts plays its step and returns her to the agenda, where the item lands on its new day. A
//   calendar item shows "Change this in Google Calendar." instead, because MVP never writes to her
//   calendar (AGENTS.md rule 4).
// - A backup does what it does on the Leave sheet: an ask opens its draft, a call is staged, and a
//   choice that changes only her plan follows the moment's branch (spec §5, "Plan B and Plan C").
export default function ItemPage({ itemId }) {
  const { session, dispatch, household } = useSession();
  const { openPage, back } = useNavigation();
  const run = useActions();
  const seed = household.seed;
  const local = session.gamePlan;
  const view = useMemo(
    () => itemPageView({ seed, momentId: session.momentId, played: session.played, itemId, opened: local?.opened ?? [], notes: local?.notes ?? {} }),
    [seed, session.momentId, session.played, itemId, local?.opened, local?.notes],
  );
  const scripted = nextScripted(seed, session.momentId, session.played);
  const [note, setNote] = useState(null);
  const [moving, setMoving] = useState(null);
  if (!view) return <PageShell title="" />;
  const childName = (id) => (id === 'family' ? people.family : seed.children.find((child) => child.id === id)?.name);
  const plan = (action) => dispatch({ type: 'GAME_PLAN', action });
  const plays = (trigger) => playsFromTrigger(scripted?.entry, trigger);
  const land = (key, said) => { plan({ type: 'LAND', id: view.id, key, said }); back(); };

  const add = () => {
    const trigger = `review-add:${view.id}`;
    if (!plays(trigger)) return;
    dispatch({ type: 'STEP', trigger });
    land(view.move.day, 'added');
  };

  // Her note, edited in place.
  const notesTrigger = scripted?.entry.trigger?.startsWith('notes:') ? scripted.entry.trigger : null;
  const scriptedNote = notesTrigger && triggerItems(notesTrigger).includes(view.id) ? scripted.step.set.items[view.id]?.note : null;
  const startNote = () => setNote(view.note.text ?? scriptedNote ?? '');
  const saveNote = () => {
    const text = note.trim();
    plan({ type: 'SAVE_NOTE', id: view.id, text });
    setNote(null);
    if (notesTrigger) {
      const saved = { ...(local?.notes ?? {}), [view.id]: text };
      if (triggerItems(notesTrigger).every((id) => saved[id])) dispatch({ type: 'STEP', trigger: notesTrigger });
    }
  };

  // Move to another date or time: the picker opens on the day the moment scripts, if it scripts one.
  const moveTrigger = `move:${view.id}`;
  const target = plays(moveTrigger) ? scripted.step.set.items[view.id]?.time : null;
  const startMove = () => setMoving({
    day: target ? `${target.week}.${target.day}` : view.move.day,
    time: target?.time ?? view.move.time ?? '',
  });
  const saveMove = () => {
    const chosen = moving;
    setMoving(null);
    if (target && chosen.day === `${target.week}.${target.day}` && chosen.time === target.time) {
      dispatch({ type: 'STEP', trigger: moveTrigger });
      land(chosen.day, 'moved');
    }
  };

  const backup = (button, card) => {
    const [kind, branch] = button.action.split(':');
    if (kind === 'choose') {
      const moment = seed.moments.find((entry) => entry.id === session.momentId);
      if (card && moment?.branches?.[branch]) dispatch({ type: 'TODAY', action: { type: 'CHOOSE_BRANCH', branch, card } });
      return;
    }
    run(button.action);
  };

  return (
    <PageShell title={view.title} above={view.chips.length ? <Chips chips={view.chips} childName={childName} /> : null}>
      <div className={styles.page}>
        <div className={styles.header}>
          <p className={styles.when}>{view.when}</p>
          <Marks marks={view.marks} />
          {view.suggested && (
            <div className={styles.suggested}>
              <span className={styles.suggestedMark}>{view.suggested.label}</span>
              <div className={styles.suggestedActions}>
                <Button kind="primary" onClick={add}>{view.suggested.add}</Button>
                <Button kind="text">{view.suggested.dismiss}</Button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.owner}>
          <div className={styles.ownerText}>
            <p className={styles.label}>{view.owner.heading}</p>
            <p className={styles.ownerValue}>
              {view.owner.kind === 'person' && <Owner owner={view.owner} />}
              <span>{view.owner.label}</span>
            </p>
            {view.answerNote && <p className={styles.answerNote}>{view.answerNote}</p>}
          </div>
          {view.owner.askForHelp && <Button kind="text" onClick={() => openPage('ask-for-help', view.id)}>{view.owner.askForHelp}</Button>}
        </div>

        {view.note && (
          <div className={styles.note}>
            <p className={styles.label}>{view.note.heading}</p>
            {note === null ? (
              <button type="button" className={styles.noteField} data-empty={!view.note.text || undefined} onClick={startNote}>
                {view.note.text ?? view.note.placeholder}
              </button>
            ) : (
              <>
                {/* Editing in place: the field takes focus as it opens. */}
                <textarea className={styles.noteField} rows={2} value={note} aria-label={view.note.heading} autoFocus onChange={(event) => setNote(event.target.value)} />
                <Button kind="primary" className={styles.move} onClick={saveNote}>{view.note.save}</Button>
              </>
            )}
          </div>
        )}

        {view.source && (
          <p className={styles.source}>
            {view.calendarMark && <Icon name="calendar-mark" />}
            {view.source}
          </p>
        )}

        {view.backups && (
          <section className={styles.backups} aria-label={view.backups.heading}>
            <h2 className={styles.backupsHeading}><CoachDot />{view.backups.heading}</h2>
            {view.backups.recommendation && (
              <>
                <p className={styles.text}>{view.backups.recommendation.text}</p>
                <Button kind="primary" full onClick={() => backup(view.backups.recommendation.button, view.backups.recommendation.card)}>
                  {view.backups.recommendation.button.label}
                </Button>
                {view.backups.recommendation.button.line && <p className={styles.line}>{view.backups.recommendation.button.line}</p>}
              </>
            )}
            {view.backups.plans.map((entry) => (
              <div key={entry.label} className={styles.plan}>
                <p className={styles.text}>{entry.label}</p>
                <Button kind="outlined" full onClick={() => backup(entry.button, view.backups.recommendation?.card)}>{entry.button.label}</Button>
              </div>
            ))}
            {view.backups.noMore && <p className={styles.noMore}>{view.backups.noMore}</p>}
          </section>
        )}

        {view.move.calendar && <p className={styles.line}>{view.move.calendar}</p>}
        {!view.move.calendar && !moving && <Button kind="text" className={styles.move} onClick={startMove}>{view.move.label}</Button>}
        {moving && (
          <div className={styles.picker} role="group" aria-label={view.move.label}>
            <select className={styles.pickerField} value={moving.day} aria-label={view.move.label} onChange={(event) => setMoving({ ...moving, day: event.target.value })}>
              {view.move.days.map((day) => <option key={day.key} value={day.key}>{day.label}</option>)}
            </select>
            <input className={styles.pickerField} type="time" value={moving.time} aria-label={view.move.label} onChange={(event) => setMoving({ ...moving, time: event.target.value })} />
            <Button kind="primary" onClick={saveMove}>{view.move.save}</Button>
          </div>
        )}
        {view.takeOut && <Button kind="text" className={styles.move}>{view.takeOut}</Button>}
      </div>
    </PageShell>
  );
}
