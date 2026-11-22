import styles from './PageFade.module.css';

// Pages (spec §19, "Motion"): opening a page inside a tab, or tapping Back, is a quick fade from one
// screen to the other, in both directions. Pages never push sideways. Tabs change at once, so only a
// page opening or closing changes the key. Under reduced motion the fade stays, because a fade
// slides nothing.
export default function PageFade({ pageKey, children }) {
  // The first screen after a jump or a reload appears at once; only a page opening or closing fades.
  return <div key={pageKey} className={pageKey ? styles.fade : undefined}>{children}</div>;
}
