import { useLayoutEffect, useRef, useState } from 'react';
import AppFrame from './AppFrame.jsx';
import Foot from './Foot.jsx';
import Monogram from '../shared/Monogram.jsx';
import TabBar from '../shared/TabBar.jsx';
import styles from './Layout.module.css';

// Today (spec §2 and §5, "Scrolling"; issue T36). Nothing is fixed at the top: the header and Now
// form one sticky block on paper, stacked below the canvas sheet, so the sheet with the coach card,
// Later today and MVP Editorial scrolls up over them, the dateline and the monogram included, as far
// as the top of the screen. The page itself scrolls, never a box inside it. The capture bar and the
// tab bar are anchored at the foot. When the block is taller than the space above the foot, it is not
// sticky and the whole page scrolls as one, with the sheet directly under Now (§5, "A tall Now",
// issue P2). The block's height is measured as it renders and whenever it changes, such as when a
// checklist folds or Now moves to another departure, so the rule holds on every phone. A control in a
// covered header or Now that takes keyboard focus scrolls the page back to the top so it can be seen.
// The header is one line: the dateline at the left and the monogram at the right.
export default function TodayShell({ dateline, now, sheet, capture }) {
  const headerRef = useRef(null);
  const footRef = useRef(null);
  const [tall, setTall] = useState(false);
  const [footHeight, setFootHeight] = useState(0);
  useLayoutEffect(() => {
    const measure = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const foot = footRef.current?.offsetHeight ?? 0;
      const viewport = window.visualViewport?.height ?? window.innerHeight;
      setFootHeight(foot);
      setTall(headerHeight > viewport - foot);
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (headerRef.current) observer.observe(headerRef.current);
    if (footRef.current) observer.observe(footRef.current);
    window.addEventListener('resize', measure);
    return () => { observer.disconnect(); window.removeEventListener('resize', measure); };
  }, []);
  // A covered control that takes focus brings the header and Now back into view.
  // The browser scrolls the focused control into view first, so the page goes back to the top on the
  // next frame.
  const onFocus = () => {
    if (tall) return;
    requestAnimationFrame(() => { if (window.scrollY > 0) window.scrollTo({ top: 0 }); });
  };

  return (
    <AppFrame surface="card">
      <div ref={headerRef} className={styles.todayHeader} data-tall={tall || undefined} onFocus={onFocus}>
        <div className={styles.todayHeaderRow}>
          <div className={styles.todayDateline}>{dateline}</div>
          <Monogram />
        </div>
        {now}
      </div>
      {/* With nothing beneath Now (0i-h), the sheet is hidden and the foot stays at the bottom. */}
      {sheet
        ? <div className={styles.todaySheet} style={{ '--today-foot': `${footHeight}px` }}>{sheet}</div>
        : <div className={styles.todayNoSheet} />}
      <div ref={footRef} className={styles.todayFootWrap}>
        <Foot surface="canvas">
          {capture}
          <TabBar />
        </Foot>
      </div>
    </AppFrame>
  );
}
