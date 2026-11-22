import starOne from '../../assets/brand/steam-star-1.svg';
import starTwo from '../../assets/brand/steam-star-2.svg';
import starThree from '../../assets/brand/steam-star-3.svg';
import styles from './SteamStars.module.css';

// The steam stars (spec §19, "Motion"; splash 2853:12205). Three small stars rise from the mark like
// steam, a third of a loop apart, so one is always rising, and they keep moving wherever they appear.
// One component, because Alpha 2 puts the same stars over the brand header on Ruth's web page. The
// parent places the layer where the steam leaves the mark; the stars climb from there. Under reduced
// motion they stand still where each one rests.
export default function SteamStars({ className = '' }) {
  return (
    <span className={`${styles.stars} ${className}`} aria-hidden="true">
      <img className={styles.star} data-star="1" src={starOne} alt="" />
      <img className={styles.star} data-star="2" src={starTwo} alt="" />
      <img className={styles.star} data-star="3" src={starThree} alt="" />
    </span>
  );
}
