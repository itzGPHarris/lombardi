import Icon from '../shared/Icon.jsx';
import styles from './StopMarker.module.css';

// The marker on each station of the Leave sheet and each row of a trip timetable (spec §5, standing
// decision 26; library StopMarker 355:1192). The place's kind in the seed chooses the glyph: home,
// school, or a dot for any other place. The state says where she is on the run: Current is the place
// she leaves next, in the cerulean circle, Behind is a place she has left, in muted ink, and Ahead is
// every other place (T91).
const glyphs = { home: 'home', school: 'school' };

export default function StopMarker({ place, state = 'ahead' }) {
  const glyph = glyphs[place];
  return (
    <span className={styles.marker} data-state={state} aria-hidden="true">
      {glyph ? <Icon name={glyph} /> : <span className={styles.dot} />}
    </span>
  );
}
