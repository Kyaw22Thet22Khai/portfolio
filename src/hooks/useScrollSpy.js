import { useEffect, useState, useRef } from "react";

/**
 * useScrollSpy
 * Highlights the section whose top and bottom contain a document-space line at `window.scrollY + offset`.
 * Fallback: last section whose top passed the line; bottom-of-page: last section.
 */
export default function useScrollSpy(ids = [], offset = 96) {
  const [activeId, setActiveId] = useState(null);
  const tickingRef = useRef(false);
  const activeRef = useRef(null);

  useEffect(() => {
    if (!ids.length || typeof window === "undefined") return;

    const computeActive = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      if (!elements.length) return;

      const lineY = window.scrollY + offset;
      const nearBottom =
        Math.ceil(window.scrollY + window.innerHeight) >=
        Math.floor(document.documentElement.scrollHeight) - 2;

      let bestId = null;

      // 1) Prefer the section that contains the line
      for (const el of elements) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.offsetHeight;
        if (top <= lineY && lineY < bottom) {
          bestId = el.id;
          break;
        }
      }

      // 2) If none contain the line, choose last section whose top passed the line
      if (!bestId) {
        let lastPassed = null;
        for (const el of elements) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= lineY) lastPassed = el.id;
          else break;
        }
        bestId = lastPassed || elements[0].id;
      }

      // 3) Bottom edge: ensure last section is active
      if (nearBottom) bestId = elements[elements.length - 1].id;

      if (bestId && bestId !== activeRef.current) {
        activeRef.current = bestId;
        setActiveId(bestId);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        computeActive();
        tickingRef.current = false;
      });
    };

    computeActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join("|"), offset]);

  return activeId;
}
