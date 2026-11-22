import styles from './Coach.module.css';

// Her voice note (library VoiceNote 2706:45006): the player, its length and the transcript in her own
// words, self-corrections included, at the right because it is hers. Nothing plays in the prototype.
// The library draws its play glyph inside the component, and the Icons page has no name for it, so
// the player's round button is drawn here in CSS (docs/issues.csv).
export default function VoiceNote({ label, text }) {
  return (
    <div className={styles.voiceNote}>
      <div className={styles.player} aria-hidden="true">
        <span className={styles.play} />
        <span className={styles.waveform} />
      </div>
      <p className={styles.voiceLabel}>{label}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
