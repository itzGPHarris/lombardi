import starOne from '../../assets/brand/steam-star-1.svg';
import starTwo from '../../assets/brand/steam-star-2.svg';
import starThree from '../../assets/brand/steam-star-3.svg';
import styles from './SteamStars.module.css';

// The steam stars (spec §19, "Motion"; splash 2853:12205). Three small stars rise from the mark like
// steam, a third of a loop apart, so one is always rising, and they keep moving wherever they appear.
// One component, because Alpha 2 puts the same stars over the brand header on Ruth's web page. The
// parent places the layer where the steam leaves the mark; the stars climb from there. Under reduced
// motion they stand still where each one rests. They are drawn in brand-star, the saffron that
// nothing else uses, because amber belongs to the coach (spec §19, issue O29).
export default function SteamStars({ className = '' }) {
  return (
    <span className={`${styles.stars} ${className}`} aria-hidden="true">
      {[starOne, starTwo, starThree].map((star, index) => (
        // The image keeps the star's own size; the span paints it in brand-star through its shape.
        <span key={star} className={styles.star} data-star={index + 1} style={{ '--star-shape': `url(${JSON.stringify(star)})` }}>
          <img className={styles.shape} src={star} alt="" />
        </span>
      ))}
    </span>
  );
}
