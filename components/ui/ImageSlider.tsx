import React, { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaGroup } from '../../types';

interface ImageSliderProps {
  /** Screenshot groups, in display order. Each keeps its own frame. */
  groups: MediaGroup[];
  /**
   * How many phone screenshots share one slide. Phone shots are narrow enough
   * to sit several across; a desktop shot always takes the full width.
   */
  mobilePerView?: number;
  /** Alt text is built as `${altBase} — ${n}/${total}`. */
  altBase: string;
  labels: {
    prev: string;
    next: string;
    gallery: string;
  };
  /** Larger treatment used inside the case study. */
  expanded?: boolean;
  /** Applied when the current slide is desktop. */
  desktopClassName?: string;
  /** Applied when the current slide is phone — usually a fixed height. */
  mobileClassName?: string;
  className?: string;
}

interface Slide {
  mobile: boolean;
  images: string[];
  /** Column count, so a short final slide keeps the same cell size. */
  columns: number;
  /** 1-based index of the first image, counted across all groups. */
  offset: number;
}

const buildSlides = (groups: MediaGroup[], mobilePerView: number): Slide[] => {
  const slides: Slide[] = [];
  let seen = 0;

  for (const group of groups) {
    const columns = group.mobile ? mobilePerView : 1;
    for (let i = 0; i < group.images.length; i += columns) {
      slides.push({
        mobile: group.mobile,
        images: group.images.slice(i, i + columns),
        columns,
        offset: seen + i + 1,
      });
    }
    seen += group.images.length;
  }

  return slides;
};

/**
 * Shows a project's screenshots, paging when they do not fit on one slide.
 *
 * Nothing here is toggled by the visitor: each group's `mobile` flag decides
 * its frame, and `mobilePerView` decides how many phone shots share a slide.
 * When everything fits on one slide, no controls render at all.
 */
const ImageSlider: React.FC<ImageSliderProps> = ({
  groups,
  mobilePerView = 1,
  altBase,
  labels,
  expanded = false,
  desktopClassName = '',
  mobileClassName = '',
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();
  const regionId = useId();

  const slides = useMemo(() => buildSlides(groups, mobilePerView), [groups, mobilePerView]);
  const total = useMemo(() => groups.reduce((sum, g) => sum + g.images.length, 0), [groups]);
  const hasPaging = slides.length > 1;

  const go = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(((next % slides.length) + slides.length) % slides.length);
    },
    [index, slides.length],
  );

  // Reset when the project underneath changes.
  useEffect(() => {
    setIndex(0);
  }, [groups, mobilePerView]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!hasPaging) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(index - 1);
    }
  };

  if (slides.length === 0) return null;

  const slide = slides[index];

  /*
   * In the case study the screenshot is the point, so it is never cropped —
   * `expanded` is checked before anything else. Cropping is only acceptable on
   * a card, where a desktop shot is a thumbnail and its top edge is enough.
   */
  const fit = expanded
    ? 'object-contain p-1'
    : slide.mobile
      ? 'object-contain p-2'
      : 'object-cover object-top';

  const motionProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { opacity: 0, x: direction * 44 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction * -44 },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div
      id={regionId}
      role={hasPaging ? 'group' : undefined}
      aria-roledescription={hasPaging ? 'carousel' : undefined}
      aria-label={hasPaging ? labels.gallery : undefined}
      tabIndex={hasPaging ? 0 : undefined}
      onKeyDown={onKeyDown}
      className={`group/slider relative overflow-hidden bg-line/[0.03] transition-[height] duration-300 ${
        expanded ? 'rounded-xl' : 'rounded-lg'
      } ${slide.mobile ? mobileClassName : desktopClassName} ${className}`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          {...motionProps}
          drag={hasPaging && !shouldReduceMotion ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.14}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(index + 1);
            else if (info.offset.x > 60) go(index - 1);
          }}
          className="absolute inset-0 grid size-full gap-2"
          style={{ gridTemplateColumns: `repeat(${slide.columns}, minmax(0, 1fr))` }}
        >
          {slide.images.map((src, slot) => (
            <img
              key={src}
              src={src}
              alt={`${altBase} — ${slide.offset + slot}/${total}`}
              loading="lazy"
              decoding="async"
              draggable={false}
              className={`size-full ${fit}`}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {hasPaging && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={labels.prev}
            aria-controls={regionId}
            className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full border border-line/12 bg-paper/85 p-1.5 opacity-0 backdrop-blur transition-opacity group-hover/slider:opacity-100 group-focus-within/slider:opacity-100 focus-visible:opacity-100 dark:bg-ink/85"
          >
            <ChevronLeft className="size-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={labels.next}
            aria-controls={regionId}
            className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full border border-line/12 bg-paper/85 p-1.5 opacity-0 backdrop-blur transition-opacity group-hover/slider:opacity-100 group-focus-within/slider:opacity-100 focus-visible:opacity-100 dark:bg-ink/85"
          >
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </button>

          <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center">
            <div className="flex items-center gap-1.5 rounded-full bg-ink/45 px-2.5 py-1.5 backdrop-blur">
              {slides.map((s, i) => (
                <button
                  key={`${s.offset}-${i}`}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`${labels.gallery} ${i + 1}/${slides.length}`}
                  aria-current={i === index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === index ? 'w-4 bg-paper' : 'w-1 bg-paper/45 hover:bg-paper/70'
                  }`}
                />
              ))}
            </div>
          </div>

          <span aria-live="polite" className="sr-only">
            {index + 1} / {slides.length}
          </span>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
