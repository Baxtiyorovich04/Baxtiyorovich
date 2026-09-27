import React, { useEffect, useMemo } from 'react';
import {
  MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { NavItem, SectionId } from '../types';
import { useI18n } from '../context/I18nContext';

/**
 * A half circle pinned to the right edge of the page.
 *
 * The disc turns like a ship's wheel as you scroll: section markers sit on the
 * rim at fixed angles, the rim rotates, and whichever marker reaches the three
 * o'clock position is the section you are reading. Spokes and handles make the
 * rotation legible — a plain rotating ring just reads as noise.
 *
 * Only the left half is visible; the remainder sits past the viewport edge, so
 * it costs almost no horizontal space.
 *
 * Decorative by design: it mirrors state rather than owning it, the header nav
 * is the real control, and the whole thing is `aria-hidden` and hidden below
 * xl and under reduced motion.
 */

const RADIUS = 132;
const LABEL_RADIUS = 98;
/** Degrees between adjacent sections on the rim. */
const STEP = 21;
const SPOKES = Array.from({ length: 12 }, (_, i) => i * 30);

const polar = (radius: number, degrees: number) => {
  const radians = (degrees * Math.PI) / 180;
  return { x: radius * Math.cos(radians), y: radius * Math.sin(radians) };
};

/** One marker on the rim, counter-rotated so it stays upright. */
const RimMarker: React.FC<{
  item: NavItem;
  angle: number;
  isActive: boolean;
  rotation: MotionValue<number>;
}> = ({ item, angle, isActive, rotation }) => {
  const upright = useTransform(rotation, (value) => -value - angle);
  const { x, y } = polar(LABEL_RADIUS, angle);

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
    >
      <motion.span
        style={{ rotate: upright }}
        className={`block font-mono text-[9px] tracking-[0.2em] whitespace-nowrap uppercase transition-colors duration-500 ${
          isActive ? 'text-line/85' : 'text-line/25'
        }`}
      >
        {item.index}
      </motion.span>
    </div>
  );
};

const ScrollWheel: React.FC<{ activeSection: SectionId }> = ({ activeSection }) => {
  const { t } = useI18n();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const activeIndex = useMemo(() => {
    const found = NAV_ITEMS.findIndex((item) => item.id === activeSection);
    return found === -1 ? 0 : found;
  }, [activeSection]);

  // Rotate so the active section lands at three o'clock. Driven by the active
  // section rather than raw scroll, so the wheel settles rather than drifting.
  const rotation = useSpring(0, { stiffness: 90, damping: 20, mass: 0.6 });

  useEffect(() => {
    rotation.set(-activeIndex * STEP);
  }, [activeIndex, rotation]);

  // Overall progress adds a small vertical sway, so the wheel still responds
  // while you are moving inside one long section.
  const sway = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  if (shouldReduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 right-0 z-30 hidden -translate-y-1/2 xl:block"
      style={{ width: RADIUS + 8, height: (RADIUS + 8) * 2 }}
    >
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ left: 8, width: RADIUS * 2, height: RADIUS * 2, rotate: rotation, y: sway }}
      >
        <svg viewBox="0 0 264 264" className="size-full text-line">
          <circle cx="132" cy="132" r="131" fill="none" stroke="currentColor" strokeOpacity="0.14" />
          <circle cx="132" cy="132" r="112" fill="none" stroke="currentColor" strokeOpacity="0.07" />

          {SPOKES.map((angle) => {
            const { x, y } = polar(131, angle);
            return (
              <line
                key={angle}
                x1="132"
                y1="132"
                x2={132 + x}
                y2={132 + y}
                stroke="currentColor"
                strokeOpacity={angle % 90 === 0 ? 0.14 : 0.06}
              />
            );
          })}

          {/* Handles at the cardinal points, as on a real wheel */}
          {[0, 90, 180, 270].map((angle) => {
            const { x, y } = polar(131, angle);
            return (
              <circle
                key={angle}
                cx={132 + x}
                cy={132 + y}
                r="4"
                fill="currentColor"
                fillOpacity="0.18"
              />
            );
          })}
        </svg>

        {NAV_ITEMS.map((item, index) => (
          <RimMarker
            key={item.id}
            item={item}
            angle={index * STEP}
            isActive={index === activeIndex}
            rotation={rotation}
          />
        ))}
      </motion.div>

      {/* Fixed readout at three o'clock — the part that does not turn */}
      <div className="absolute top-1/2 right-full flex -translate-y-1/2 items-center gap-3 pr-1">
        <motion.span
          key={activeSection}
          initial={{ opacity: 0, x: 12, filter: 'blur(4px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[10px] tracking-[0.3em] text-line/60 uppercase"
        >
          {t.nav[activeSection]}
        </motion.span>
        <span className="h-px w-7 bg-line/25" />
      </div>

      {/* Hub, sitting on the page edge */}
      <div
        className="absolute top-1/2 -translate-y-1/2 rounded-full border border-line/20 bg-paper dark:bg-ink"
        style={{ left: RADIUS - 1, width: 18, height: 18 }}
      >
        <span className="absolute inset-[5px] rounded-full bg-line/30" />
      </div>
    </div>
  );
};

export default ScrollWheel;
