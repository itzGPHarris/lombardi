import { createContext, useContext, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon.jsx';
import { close } from '../../copy/navigation.js';
import styles from './Sheet.module.css';

// The one pattern for every sheet (spec §2, the library's Sheet 256:489): SheetHeader with the
// grabber, Close and the heading, a body, and SheetFooter with the primary button and its link.
// A compact sheet fits its content, and only a tall sheet scrolls, inside itself, because it is an
// overlay. The scrim covers the tab bar and the capture bar. Dragging the sheet down closes it, the
// same as Close and Escape. A sheet never opens another sheet: rendering one inside another throws.
const InsideSheet = createContext(false);
const DRAG_TO_CLOSE = 96;

export function SheetHeader({ heading, line, headingId, onClose, dragHandlers }) {
  return (
    <div className={styles.header}>
      <div className={styles.top} {...dragHandlers}>
        <span className={styles.spacer} />
        <span className={styles.grabberRow}><span className={styles.grabber} /></span>
        <button type="button" className={styles.close} aria-label={close} onClick={onClose}>
          <Icon name="close" />
        </button>
      </div>
      {heading && <h2 id={headingId} className={styles.heading}>{heading}</h2>}
      {line && <p className={styles.line}>{line}</p>}
    </div>
  );
}

export function SheetFooter({ children }) {
  return <div className={styles.footer}>{children}</div>;
}

export default function Sheet({ open, onClose, heading, line, tall = false, footer, children }) {
  const nested = useContext(InsideSheet);
  const headingId = useId();
  const sheetRef = useRef(null);
  const drag = useRef({ startY: 0, dy: 0, active: false });

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
  if (!open) return null;

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
      <div className={styles.layer}>
        <div className={styles.scrim} onClick={onClose} aria-hidden="true" />
        <div
          ref={sheetRef}
          className={styles.sheet}
          data-height={tall ? 'tall' : 'compact'}
          role="dialog"
          aria-modal="true"
          aria-labelledby={heading ? headingId : undefined}
          tabIndex={-1}
        >
          <SheetHeader heading={heading} line={line} headingId={headingId} onClose={onClose} dragHandlers={dragHandlers} />
          <div className={styles.body}>{children}</div>
          {footer && <SheetFooter>{footer}</SheetFooter>}
        </div>
      </div>
    </InsideSheet.Provider>,
    document.body,
  );
}
