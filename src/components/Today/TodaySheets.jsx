import { useCallback, useMemo, useState } from 'react';
import LeaveSheet from './LeaveSheet.jsx';
import ReminderSheet from './ReminderSheet.jsx';
import { useSession } from '../../demo/SessionContext.js';
import { reminderSheetView } from '../../demo/today.js';
import * as people from '../../copy/people.js';

// The sheets on Today (spec §5, "Sheets"): the Leave sheet and the reminder sheet. One sheet at a time,
// and each closes before anything it leads to opens (spec §2, "Sheets never nest"). A sheet keeps its
// content while it slides away.
export default function TodaySheets({ view }) {
  const { session, dispatch, household } = useSession();
  const local = session.today;
  const today = useCallback((action) => dispatch({ type: 'TODAY', action }), [dispatch]);
  const close = useCallback(() => today({ type: 'CLOSE_SHEET' }), [today]);
  const childName = (id) => (id === 'family' ? people.family : view.find.child(id)?.name);

  // A sheet the seed opens in a step, such as Thursday's Leave sheet at its backups in C-06, or one she
  // opened herself.
  const seeded = useMemo(() => (view.sheet?.leave ? { kind: 'leave', run: view.sheet.leave, at: view.sheet.at } : null), [view.sheet]);
  const current = local.sheet ?? (local.sheetClosed ? null : seeded);
  const [last, setLast] = useState(current);
  if (current && current !== last) setLast(current);
  const shown = current ?? last;

  const pass = view.now;
  const reminder = shown?.kind === 'reminder' && pass ? reminderSheetView({ pass, find: view.find, clock: view.clock, local }) : null;

  // A backup that changes only her plan works like accepting from the card; one that asks someone or
  // calls somewhere opens its draft or call in Stage 6, after the sheet has closed.
  const choose = (backup) => {
    const [kind, plan] = backup.button.action.split(':');
    // A call is handed to her phone app, staged in the prototype, and leaves no task (spec §5, §9).
    if (kind === 'call') { close(); return; }
    if (kind === 'choose') {
      const card = view.coachCard;
      const moment = household.seed.moments.find((entry) => entry.id === session.momentId);
      // The plan follows the moment's branch for the backup where the seed writes one (0i-g, C-06's
      // Plan C), and the card shows her choice either way.
      if (card && moment?.branches?.[plan]) today({ type: 'CHOOSE_BRANCH', branch: plan, card: card.id });
      else if (card && household.seed.coachCards.find((entry) => entry.id === card.id)?.after?.[plan]) today({ type: 'ANSWER_CARD', card: card.id, answer: plan });
      close();
    }
  };

  return (
    <>
      <LeaveSheet
        open={current?.kind === 'leave'}
        runId={shown?.kind === 'leave' ? shown.run : null}
        scrollTo={shown?.at}
        find={view.find}
        clock={view.clock}
        local={local}
        childName={childName}
        onSave={(run, overrides) => today({ type: 'SAVE_LEAVE', run, overrides })}
        onChoose={choose}
        onClose={close}
      />
      <ReminderSheet
        open={current?.kind === 'reminder'}
        sheet={reminder}
        notifications={session.notifications ?? household.seed.meta.notifications}
        onSet={(sheet, choice) => today({ type: 'SET_REMINDER', key: sheet.key, reminder: { set: true, at: choice.at, choice: choice.id } })}
        onRemove={(sheet) => today({ type: 'SET_REMINDER', key: sheet.key, reminder: { set: false } })}
        onClose={close}
      />
    </>
  );
}
