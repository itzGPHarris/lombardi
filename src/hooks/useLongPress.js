import { useRef } from 'react';

// A long press for the monogram, which opens the household switcher (spec §15). A short tap does
// the control's own job. Works with touch, pen and mouse, and cancels the phone's own long-press menu.
const PRESS_MS = 600;
const MOVE_TOLERANCE = 10;

export default function useLongPress(onLongPress, onTap) {
  const state = useRef({ timer: 0, fired: false, x: 0, y: 0 });
  function clear() { clearTimeout(state.current.timer); state.current.timer = 0; }
  return {
    onPointerDown(event) {
      if (event.button !== undefined && event.button !== 0) return;
      clear();
      state.current.fired = false;
      state.current.x = event.clientX;
      state.current.y = event.clientY;
      state.current.timer = setTimeout(() => { state.current.fired = true; state.current.timer = 0; onLongPress(); }, PRESS_MS);
    },
    onPointerMove(event) {
      if (!state.current.timer) return;
      if (Math.abs(event.clientX - state.current.x) > MOVE_TOLERANCE || Math.abs(event.clientY - state.current.y) > MOVE_TOLERANCE) clear();
    },
    onPointerUp: clear,
    onPointerLeave: clear,
    onPointerCancel: clear,
    onContextMenu(event) { event.preventDefault(); },
    onClick(event) {
      if (state.current.fired) { event.preventDefault(); state.current.fired = false; return; }
      onTap?.(event);
    },
  };
}
