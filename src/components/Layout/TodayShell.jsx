import { useLayoutEffect, useRef, useState } from 'react';
import AppFrame from './AppFrame.jsx';
import Foot from './Foot.jsx';
import TabBar from '../shared/TabBar.jsx';
import styles from './Layout.module.css';

// Today (spec §2 and §5, "Scrolling"). Nothing is fixed at the top: the header and Now hold in place
// on paper, and the canvas sheet with the coach card, Later today and MVP Editorial scrolls up over
// them, the dateline and the monogram included. The capture bar and the tab bar are anchored at the
// foot. When the header and Now are taller than the space above the foot, the whole page scrolls as
// one with the sheet directly under Now (§5, "A tall Now").
export default function TodayShell({ header, sheet, capture }) {
  const headerRef = useRef(null);
  const footRef = useRef(null);
  const [tall, setTall] = useState(false);
  useLayoutEffect(() => {
    const measure = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const footHeight = footRef.current?.offsetHeight ?? 0;
      setTall(headerHeight > window.innerHeight - footHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (headerRef.current) observer.observe(headerRef.current);
    if (footRef.current) observer.observe(footRef.current);
    window.addEventListener('resize', measure);
    return () => { observer.disconnect(); window.removeEventListener('resize', measure); };
  }, []);
  return (
    <AppFrame surface="card">
      <div ref={headerRef} className={styles.todayHeader} data-tall={tall || undefined}>{header}</div>
      <div className={styles.todaySheet}>{sheet}</div>
      <div ref={footRef} className={styles.todayFootWrap}>
        <Foot surface="canvas">
          {capture}
          <TabBar />
        </Foot>
      </div>
    </AppFrame>
  );
}
