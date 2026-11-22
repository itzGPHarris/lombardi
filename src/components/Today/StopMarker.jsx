import styles from './StopMarker.module.css';

// The marker on each row of a trip timetable (spec §5, standing decision 26; library StopMarker
// 3088:12996). Current marks the row she acts on next in a solid cerulean circle, Ahead is in primary
// ink and Behind is muted. The library draws each marker with icon/place-home or icon/place-school,
// which the Icon component cannot take until its list of library names includes them, so the markers
// are drawn as their circles alone for now (see docs/issues.csv).
export default function StopMarker({ place, state }) {
  return <span className={styles.marker} data-place={place} data-state={state} aria-hidden="true" />;
}
