import { useEffect, useRef, useState } from 'react';
import Sheet from '../shared/Sheet.jsx';
import Button from '../shared/Button.jsx';
import RouteLine from './RouteLine.jsx';
import BackupList from './BackupList.jsx';
import { leaveSheet as words } from '../../copy/today.js';
import { addMinutes, earliestLeave, leaveSheetView, rippleRun } from '../../demo/today.js';
import styles from './LeaveSheet.module.css';

// The Leave sheet, the one place Today changes a time (spec §5, "The Leave sheet"). It is tall and
// scrolls, headed with where she leaves from and where she is going, and draws her run as a line of
// stations. Five-minute steps change a leaving time and ripple down the line; Save appears only after
// she has changed a time and keeps it, and Close leaves everything as it was. Other options on the
// coach card opens it scrolled to the backups. A change she makes carries no Updated mark.
export default function LeaveSheet({ open, runId, scrollTo, find, clock, local, childName, onSave, onChoose, onClose }) {
  const [draft, setDraft] = useState({});
  const [openStation, setOpenStation] = useState(null);
  const [forRun, setForRun] = useState(runId);
  if (runId !== forRun) {
    setForRun(runId);
    setDraft({});
    setOpenStation(null);
  }
  const backupsRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!open || scrollTo !== 'backups' || !backupsRef.current || !bodyRef.current) return;
    bodyRef.current.scrollTop = backupsRef.current.offsetTop - bodyRef.current.offsetTop;
  }, [open, scrollTo, runId]);

  if (!runId) return <Sheet open={false} onClose={onClose} />;
  const saved = local.leaveOverrides?.[runId] ?? {};
  const sheet = leaveSheetView({ runId, find, clock, local, draft, open: openStation });

  const step = (index, minutes) => {
    const base = find.run(runId);
    const changes = { ...saved, ...draft };
    const current = rippleRun(base, find, changes).leave[index];
    let next = addMinutes(current, minutes);
    const earliest = earliestLeave(base, find, index, changes);
    if (earliest && next < earliest) next = earliest;
    setDraft({ ...draft, [index]: next });
  };

  return (
    <Sheet
      open={open}
      onClose={onClose}
      heading={sheet.heading}
      line={sheet.line}
      tall
      bodyRef={bodyRef}
      footer={sheet.changed ? <Button kind="primary" full onClick={() => onSave(runId, { ...saved, ...draft })}>{words.save}</Button> : null}
    >
      <p className={styles.instructions}>{words.instructions}</p>
      <RouteLine
        stations={sheet.stations}
        childName={childName}
        onOpen={(index) => setOpenStation(openStation === index ? null : index)}
        onStep={step}
        earliestFor={(index) => earliestLeave(find.run(runId), find, index, { ...saved, ...draft })}
      />
      {(sheet.backups.length > 0 || sheet.noMoreBackups) && (
        <BackupList backups={sheet.backups} noMoreBackups={sheet.noMoreBackups} onChoose={onChoose} sectionRef={backupsRef} />
      )}
    </Sheet>
  );
}
