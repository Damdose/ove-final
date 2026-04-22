"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Extracts the leading numeric part of a string (e.g., "150+" -> 150, "98 %" -> 98).
 * Returns { num, prefix, suffix } so we can animate the number and keep the rest.
 */
function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*)([\d]+(?:[.,]\d+)?)(.*)/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  const num = parseFloat(match[2].replace(",", "."));
  return { num, prefix: match[1], suffix: match[3] };
}

/**
 * Count-up animation triggered when the element enters the viewport.
 * Displays `value` as-is on SSR, animates on the client.
 */
export function AnimatedCounter({
  value,
  className,
  duration = 1800,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const { num, prefix, suffix } = parseValue(value);
    if (num === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const isFloat = value.includes(",") || (value.includes(".") && !value.includes("..."));
        const start = performance.now();

        function tick(now: number) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * num;

          if (isFloat) {
            setDisplayed(`${prefix}${current.toFixed(1).replace(".", ",")}${suffix}`);
          } else {
            setDisplayed(`${prefix}${Math.round(current)}${suffix}`);
          }

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplayed(value);
          }
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
