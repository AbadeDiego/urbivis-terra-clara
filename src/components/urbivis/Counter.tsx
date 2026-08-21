import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function Counter({ to, decimals = 0, prefix = "", suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(to * easeOut(t));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          started = true;
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
