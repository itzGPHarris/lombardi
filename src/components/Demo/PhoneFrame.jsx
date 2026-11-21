import { useSyncExternalStore } from 'react';
import { fullDesktopLayout, phoneFrame } from '../../copy/demo.js';
import styles from './Demo.module.css';

// At desktop widths the app shows inside a phone frame or in its full desktop layout (spec §15).
const desktop = '(min-width: 1280px)';
function subscribe(callback) {
  const query = window.matchMedia(desktop);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
}
export function useIsDesktop() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(desktop).matches);
}

export default function PhoneFrameControl({ on, onChange }) {
  const isDesktop = useIsDesktop();
  if (!isDesktop && !on) return null;
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{phoneFrame}</h3>
      <div className={styles.row}>
        <button type="button" className={styles.choice} aria-pressed={on} onClick={() => onChange(true)}>{phoneFrame}</button>
        <button type="button" className={styles.choice} aria-pressed={!on} onClick={() => onChange(false)}>{fullDesktopLayout}</button>
      </div>
    </section>
  );
}

// The app inside the phone frame. The frame is an iframe, so the screens inside it lay out for a
// phone; the moment passes in through the address, and the iframe tells this page when the
// presenter turns the frame off from inside it.
export function PhoneFrameView({ householdId, momentId }) {
  const src = `${window.location.pathname}?embedded=1&household=${encodeURIComponent(householdId)}&moment=${encodeURIComponent(momentId)}`;
  return (
    <div className={styles.phoneStage}>
      <iframe className={styles.phone} src={src} title={phoneFrame} />
    </div>
  );
}
