import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let destroy: (() => void) | undefined;
    let frame = 0;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      destroy = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
      };
    });

    return () => destroy?.();
  }, []);
}
