import { createContext, useContext, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon.jsx';
import { close } from '../../copy/navigation.js';
import styles from './Sheet.module.css';

// The one pattern for every sheet (spec §2, the library's Sheet 256:489): SheetHeader with the
// grabber, Close and the heading, a body, and SheetFooter with the primary button and its link.
// A compact sheet fits its content, and only a tall sheet scrolls, inside itself, because it is an
// overlay. The scrim covers the tab bar and the capture bar. Dragging the sheet down closes it, the
// same as Close and Escape. A sheet never opens another sheet: rendering one inside another throws.
// It slides up from the bottom of the screen while the scrim fades in, and slides back down while
// the scrim fades out, as on iOS (spec §19, "Sheets"). Under reduced motion both fade without sliding.
// A bare sheet, as onboarding draws the account sheet (0c-b) and the staged calendar permission (0q-b),
// has no grabber, no Close and no drag, and a tap on the scrim does nothing: it closes only through its
// own buttons or the screen's Back, which `above` can lay over the scrim (fixtures C-00).
const InsideSheet = createContext(false);
const DRAG_TO_CLOSE = 96;

export function SheetHeader({ heading, line, headingId, onClose, dragHandlers, bare = false }) {
  return (
    <div className={styles.header} data-bare={bare || undefined}>
      {!bare && (
      <div className={styles.top} {...dragHandlers}>
        <span className={styles.spacer} />
        <span className={styles.grabberRow}><span className={styles.grabber} /></span>
        <button type="button" className={styles.close} aria-label={close} onClick={onClose}>
          <Icon name="close" />
        </button>
      </div>
      )}
      {heading && <h2 id={headingId} className={styles.heading}>{heading}</h2>}
      {line && <p className={styles.line}>{line}</p>}
    </div>
  );
}

export function SheetFooter({ children }) {
  return <div className={styles.footer}>{children}</div>;
}

export default function Sheet({ open, onClose, heading, line, tall = false, footer, children, bodyRef, bare = false, above = null }) {
  const nested = useContext(InsideSheet);
  const headingId = useId();
  const sheetRef = useRef(null);
  const drag = useRef({ startY: 0, dy: 0, active: false });
  // The sheet stays on screen while it slides away, and leaves once its closing animation ends.
  const [shown, setShown] = useState(open);
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setShown(true);
  }
  const closing = shown && !open;

  useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    function onKey(event) { if (event.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    sheetRef.current?.focus();
    return () => { root.style.overflow = previous; document.removeEventListener('keydown', onKey); };
  }, [open, onClose]);

  if (nested) throw new Error('A sheet never opens another sheet (spec §2). Close this sheet first.');
  if (!shown) return null;

  const dragHandlers = {
    onPointerDown(event) {
      drag.current = { startY: event.clientY, dy: 0, active: true };
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    onPointerMove(event) {
      if (!drag.current.active) return;
      drag.current.dy = Math.max(0, event.clientY - drag.current.startY);
      sheetRef.current.style.transform = `translateY(${drag.current.dy}px)`;
    },
    onPointerUp() {
      if (!drag.current.active) return;
      drag.current.active = false;
      sheetRef.current.style.transform = '';
      if (drag.current.dy > DRAG_TO_CLOSE) onClose();
    },
  };
  dragHandlers.onPointerCancel = dragHandlers.onPointerUp;

  return createPortal(
    <InsideSheet.Provider value>
      <div className={styles.layer} data-closing={closing || undefined} data-bare={bare || undefined}>
        <div className={styles.scrim} onClick={closing || bare ? undefined : onClose} aria-hidden="true" />
        {above && <div className={styles.above}>{above}</div>}
        <div
          ref={sheetRef}
          className={styles.sheet}
          data-height={tall ? 'tall' : 'compact'}
          data-bare={bare || undefined}
          onAnimationEnd={(event) => { if (closing && event.target === event.currentTarget) setShown(false); }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={heading ? headingId : undefined}
          tabIndex={-1}
        >
          <SheetHeader heading={heading} line={line} headingId={headingId} onClose={onClose} dragHandlers={dragHandlers} bare={bare} />
          <div className={styles.body} ref={bodyRef}>{children}</div>
          {footer && <SheetFooter>{footer}</SheetFooter>}
        </div>
      </div>
    </InsideSheet.Provider>,
    document.body,
  );
}
