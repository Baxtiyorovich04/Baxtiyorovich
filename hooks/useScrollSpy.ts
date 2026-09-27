import { useEffect, useState } from 'react';
import { SectionId } from '../types';

/**
 * Tracks which section is currently in view.
 *
 * Uses a single IntersectionObserver over all sections and picks the entry
 * closest to the top of the viewport, which behaves better than per-section
 * observers when sections have very different heights.
 */
export const useScrollSpy = (ids: SectionId[], offset = 96): SectionId => {
  const [activeId, setActiveId] = useState<SectionId>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) return;

        const topMost = [...visible.values()].sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        )[0];

        setActiveId(topMost.target.id as SectionId);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));

    // At the very bottom the last section may never win on rootMargin alone.
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setActiveId(ids[ids.length - 1]);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids, offset]);

  return activeId;
};
