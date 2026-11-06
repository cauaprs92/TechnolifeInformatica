"use client";

import { useEffect, useRef } from "react";

/**
 * Número que conta de 0 até `to` quando aparece na tela.
 * O HTML já sai com o valor final (sem JavaScript, leitores de tela e quem pediu menos
 * movimento veem o número certo); a contagem só troca o texto visível.
 */
export default function CountUp({
  to,
  prefix = "",
  duration = 1400,
}: {
  to: number;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Altera o mesmo nó de texto que o React criou, sem trocar a estrutura da página
    const show = (n: number) => {
      if (el.firstChild) el.firstChild.nodeValue = `${prefix}${n}`;
    };
    show(0);
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // mesma sensação do ease-out-expo
          show(Math.round(to * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      show(to);
    };
  }, [to, prefix, duration]);

  return (
    <>
      <span className="sr-only">{`${prefix}${to}`}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {`${prefix}${to}`}
      </span>
    </>
  );
}
