import { useLayoutEffect, useRef } from 'react';
import useTitleFade from '../../hooks/useTitleFade.js';
import { backToTopSuffix } from '../../copy/navigation.js';
import styles from './Layout.module.css';

// The title bar that tab lists and pages share, like Apple Music's (spec §2, "The title bar"). Its
// controls never move. The large title sits beneath it and scrolls with the page, and as it passes
// under the bar it fades out while the same words fade in, smaller, at the center of the bar. The
// small title takes her back to the top. The bar has no line and no shadow.
export default function TitleBar({ title, left, right, children }) {
  const barRef = useRef(null);
  const largeRef = useRef(null);
  const smallRef = useRef(null);
  useTitleFade(barRef, largeRef, smallRef);
  // The game plan's week strip sticks directly under the bar, so the bar's height is shared.
  useLayoutEffect(() => {
    const bar = barRef.current;
    const root = document.documentElement;
    const observer = new ResizeObserver(() => root.style.setProperty('--title-bar-height', `${bar.offsetHeight}px`));
    observer.observe(bar);
    return () => { observer.disconnect(); root.style.removeProperty('--title-bar-height'); };
  }, []);
  return (
    <>
      <div ref={barRef} className={styles.titleBar}>
        <div className={styles.barRow}>
          <div className={styles.barLeft}>{left}</div>
          <button
            ref={smallRef}
            type="button"
            className={styles.smallTitle}
            aria-label={`${title}${backToTopSuffix}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {title}
          </button>
          <div className={styles.barRight}>{right}</div>
        </div>
        {children}
      </div>
      <h1 ref={largeRef} className={styles.largeTitle}>{title}</h1>
    </>
  );
}
