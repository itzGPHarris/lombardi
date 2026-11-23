import { useCallback } from 'react';
import Notice from './Notice.jsx';
import styles from './Arrival.module.css';

// The notification for a step that brings her something, such as "Edward: yes to both pickups this
// Thursday." or "Sent to the coach" (spec §9, §10). The prototype draws it in the app, at the top of
// the screen, for about four seconds, on whichever tab she is on. No frame draws it and no row in the
// Motion table moves it, so it appears and goes in place (docs/issues.csv).
export default function Arrival({ arrival, dispatch }) {
  const dismiss = useCallback(() => dispatch({ type: 'DISMISS_ARRIVAL' }), [dispatch]);
  if (!arrival) return null;
  return (
    <div className={styles.layer}>
      <div className={styles.column}>
        <Notice key={arrival.key} text={arrival.text} onDismiss={dismiss} />
      </div>
    </div>
  );
}
