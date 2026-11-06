"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Faz os blocos com .reveal surgirem ao rolar nos navegadores sem animação ligada à
 * rolagem (ex.: Firefox). Onde o CSS já resolve, ou se a pessoa pediu menos movimento
 * no sistema, não faz nada.
 */
export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nativeSupport = CSS.supports("animation-timeline: view()");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (nativeSupport || reduced || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("motion-io");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
