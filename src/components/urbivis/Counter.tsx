import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function Counter({
  to,
  decimals = 0,
  duration = 1600,
  prefix = "",
  suffix = "",
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(to * easeOut(t));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const check = () => {
      if (started) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
        started = true;
        window.removeEventListener("scroll", check);
        run();
      }
    };

    window.addEventListener("scroll", check, { passive: true });
    const poll = window.setInterval(check, 200);
    check();

    return () => {
      window.removeEventListener("scroll", check);
      window.clearInterval(poll);
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

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
