import { useEffect } from 'react';

// Spec §2, "The title bar": as the large title passes under the title bar it fades out and the
// small title fades in at the center of the bar. The fade follows the scroll position, not a timer.
// When the phone asks for reduced motion, the two titles swap at the halfway point.
export function fadeProgress(barBottom, titleTop, titleHeight) {
  if (titleHeight <= 0) return 0;
  return Math.min(1, Math.max(0, (barBottom - titleTop) / titleHeight));
}

export default function useTitleFade(barRef, largeRef, smallRef) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    function update() {
      frame = 0;
      const bar = barRef.current;
      const large = largeRef.current;
      const small = smallRef.current;
      if (!bar || !large || !small) return;
      const titleBox = large.getBoundingClientRect();
      let progress = fadeProgress(bar.getBoundingClientRect().bottom, titleBox.top, titleBox.height);
      if (reduce.matches) progress = progress >= 0.5 ? 1 : 0;
      large.style.opacity = String(1 - progress);
      small.style.opacity = String(progress);
      small.toggleAttribute('inert', progress < 0.5);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduce.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduce.removeEventListener('change', schedule);
    };
  }, [barRef, largeRef, smallRef]);
}
