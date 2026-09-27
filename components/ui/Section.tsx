import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionId } from '../../types';
import Reveal, { RevealMotion } from './Reveal';

/**
 * How the heading column sits relative to the body. Each section picks a
 * different one so the page does not read as seven copies of one template.
 */
export type SectionLayout =
  | 'side'      // narrow sticky heading column on the left, body on the right
  | 'side-alt'  // mirrored: body on the left, sticky heading on the right
  | 'stacked'   // full-width heading above a full-width body
  | 'wide';     // full-width body, heading inline and compact

interface SectionProps {
  id: SectionId;
  /** Zero-padded ordinal, e.g. "03". */
  index: string;
  title: string;
  /** Small kicker above the heading. */
  label: string;
  children: ReactNode;
  layout?: SectionLayout;
  /** Entrance choreography for the heading block. */
  headingMotion?: RevealMotion;
  /** Entrance choreography for the body. */
  bodyMotion?: RevealMotion;
  className?: string;
}

const GRIDS: Record<SectionLayout, string> = {
  side: 'grid gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16',
  'side-alt': 'grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] lg:gap-16',
  stacked: 'flex flex-col gap-10',
  wide: 'flex flex-col gap-8',
};

const Section: React.FC<SectionProps> = ({
  id,
  index,
  title,
  label,
  children,
  layout = 'side',
  headingMotion = 'rise',
  bodyMotion = 'rise',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isMirrored = layout === 'side-alt';

  const headingPosition =
    layout === 'side'
      ? 'lg:sticky lg:top-28 lg:self-start'
      : isMirrored
        ? // Rendered first for screen readers, moved to the right column visually
          'lg:sticky lg:top-28 lg:order-2 lg:self-start'
        : layout === 'wide'
          ? 'flex flex-wrap items-baseline gap-x-5 gap-y-1'
          : '';

  const heading = (
    <div className={headingPosition}>
      <Reveal motionName={headingMotion}>
        <p className="font-mono text-[11px] tracking-[0.35em] text-line/35 uppercase">
          {index} — {label}
        </p>
        <h2
          id={`${id}-heading`}
          className={`text-3xl font-semibold tracking-tight text-balance md:text-4xl ${
            layout === 'stacked' ? 'mt-3 md:text-5xl' : 'mt-3'
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );

  const body = (
    <Reveal
      motionName={bodyMotion}
      delay={0.08}
      className={`min-w-0 ${isMirrored ? 'lg:order-1' : ''}`}
    >
      {children}
    </Reveal>
  );

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative scroll-mt-24 border-t border-line/10 py-20 md:py-28 ${className}`}
    >
      {/* Hairline that draws itself across the section top as it enters */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px origin-left bg-line/35"
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className={GRIDS[layout]}>
        {heading}
        {body}
      </div>
    </section>
  );
};

export default Section;
