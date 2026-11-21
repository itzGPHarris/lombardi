import { useEffect } from 'react';

// Spec §2, "The keyboard" and "Building the types": anchored feet ride above the keyboard, and the
// tab bar does not. The keyboard's height is read from the visual viewport and set as
// --keyboard-inset on the root, and data-keyboard="open" is set while a field has the keyboard up,
// so the tab bar can step aside under it.
function isTextField(element) {
  if (!element) return false;
  if (element.isContentEditable || element.tagName === 'TEXTAREA') return true;
  return element.tagName === 'INPUT' && !['button', 'checkbox', 'radio', 'submit', 'range'].includes(element.type);
}

export default function useVisualViewport() {
  useEffect(() => {
    const viewport = window.visualViewport;
    const root = document.documentElement;
    function update() {
      const inset = viewport ? Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop) : 0;
      root.style.setProperty('--keyboard-inset', `${Math.round(inset)}px`);
      const open = isTextField(document.activeElement) && (inset > 0 || window.innerHeight < root.clientHeight);
      if (open) root.dataset.keyboard = 'open';
      else delete root.dataset.keyboard;
    }
    update();
    viewport?.addEventListener('resize', update);
    viewport?.addEventListener('scroll', update);
    document.addEventListener('focusin', update);
    document.addEventListener('focusout', update);
    return () => {
      viewport?.removeEventListener('resize', update);
      viewport?.removeEventListener('scroll', update);
      document.removeEventListener('focusin', update);
      document.removeEventListener('focusout', update);
    };
  }, []);
}
