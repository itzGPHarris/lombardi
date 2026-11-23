import Icon from '../shared/Icon.jsx';
import styles from './Coach.module.css';

// Her voice note (library VoiceNote 2706:45006): the player, its length and the transcript in her own
// words, self-corrections included, at the right because it is hers. Nothing plays in the prototype.
// The play glyph is icon/play from the library's Icons page, in the round button (K10).
export default function VoiceNote({ label, text }) {
  return (
    <div className={styles.voiceNote}>
      <div className={styles.player} aria-hidden="true">
        <span className={styles.play}><Icon name="play" /></span>
        <span className={styles.waveform} />
      </div>
      <p className={styles.voiceLabel}>{label}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
