import React, { ReactNode } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

/**
 * Entrance choreographies. Each section picks its own so no two arrive the
 * same way — content slides in from the edge it belongs to, is uncovered by a
 * travelling mask, or unfolds in place.
 */
export type RevealMotion =
  | 'rise'
  | 'slide-left'
  | 'slide-right'
  | 'wipe-up'
  | 'wipe-left'
  | 'unfold'
  | 'zoom-blur';

const EASE = [0.16, 1, 0.3, 1] as const;

/*
 * `shown` is a function of the stagger delay rather than a static object.
 * A variant's own `transition` beats the component's `transition` prop, so
 * passing delay through `custom` is the only way it survives.
 */
const VARIANTS: Record<RevealMotion, Variants> = {
  rise: {
    hidden: { opacity: 0, y: 26 },
    shown: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    }),
  },

  'slide-left': {
    hidden: { opacity: 0, x: -70, filter: 'blur(6px)' },
    shown: (delay: number) => ({
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: EASE, delay },
    }),
  },

  'slide-right': {
    hidden: { opacity: 0, x: 70, filter: 'blur(6px)' },
    shown: (delay: number) => ({
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: EASE, delay },
    }),
  },

  // Uncovered by a mask travelling upward — the content barely moves itself.
  'wipe-up': {
    hidden: { opacity: 0, y: 34, clipPath: 'inset(100% 0% 0% 0%)' },
    shown: (delay: number) => ({
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 0.95, ease: EASE, delay },
    }),
  },

  'wipe-left': {
    hidden: { opacity: 0, x: -18, clipPath: 'inset(0% 100% 0% 0%)' },
    shown: (delay: number) => ({
      opacity: 1,
      x: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 0.9, ease: EASE, delay },
    }),
  },

  // Tips forward out of a slight 3D rotation.
  unfold: {
    hidden: { opacity: 0, rotateX: -14, y: 40, transformPerspective: 1200 },
    shown: (delay: number) => ({
      opacity: 1,
      rotateX: 0,
      y: 0,
      transformPerspective: 1200,
      transition: { duration: 0.9, ease: EASE, delay },
    }),
  },

  'zoom-blur': {
    hidden: { opacity: 0, scale: 1.06, filter: 'blur(10px)' },
    shown: (delay: number) => ({
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.95, ease: EASE, delay },
    }),
  },
};

/**
 * Wipe animations fully clip their own box. IntersectionObserver treats that
 * clip as the visible area, so a box clipped to nothing never counts as
 * on screen and the animation never starts. The observer sits on an unclipped
 * wrapper; the clip itself runs on the child, driven by the same variant.
 */
const OBSERVER_VARIANTS: Variants = {
  hidden: {},
  shown: (delay: number) => ({
    transition: { delay, duration: 0 },
  }),
};

interface RevealProps {
  children: ReactNode;
  /** Which choreography to use. Defaults to a plain rise. */
  motionName?: RevealMotion;
  /** Stagger offset in seconds. */
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'span' | 'p';
}

/**
 * Animates content the first time it enters the viewport.
 * Collapses to a plain wrapper when the visitor prefers reduced motion, so
 * nothing is ever hidden behind an animation that will not run.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  motionName = 'rise',
  delay = 0,
  className,
  as = 'div',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const Component = motion[as];
  const viewport = { once: true, margin: '-70px' } as const;
  const clipped = motionName === 'wipe-up' || motionName === 'wipe-left';

  if (clipped) {
    return (
      <Component
        className={className}
        custom={delay}
        variants={OBSERVER_VARIANTS}
        initial="hidden"
        whileInView="shown"
        viewport={viewport}
      >
        <motion.div custom={delay} variants={VARIANTS[motionName]}>
          {children}
        </motion.div>
      </Component>
    );
  }

  return (
    <Component
      className={className}
      custom={delay}
      variants={VARIANTS[motionName]}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
    >
      {children}
    </Component>
  );
};

export default Reveal;
