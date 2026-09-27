import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { MARQUEE_ITEMS, SITE } from '../constants';
import { useI18n } from '../context/I18nContext';

const [surname, given = ''] = SITE.name.toLocaleUpperCase('en-US').split(/\s+/);
const NAME_LINES = [given, surname].filter(Boolean);

const Hero: React.FC = () => {
  const { t } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" aria-labelledby="home-heading" className="relative scroll-mt-24 pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Background texture — decorative only */}
      {/* Full-bleed: the hero sits inside a max-w-6xl padded container, so the
          texture is pulled out to the viewport width to reach both edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="bg-grid mask-fade-y absolute inset-0 text-line/[0.05] [--grid-cell:44px] md:[--grid-cell:72px]" />
        <div className="absolute -top-1/3 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-line/[0.04] blur-[140px]" />
      </div>

      <div className="flex flex-col gap-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line/12 py-1.5 pr-3.5 pl-2.5 text-[11px] tracking-tight text-line/60">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            {t.hero.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-tight text-line/40">
            <MapPin className="size-3" aria-hidden="true" />
            {t.hero.greeting}
          </span>
        </motion.div>

        <h1 id="home-heading" className="leading-[0.86] font-semibold tracking-[-0.045em]">
          <span className="sr-only">
            {SITE.name} — {t.hero.role}
          </span>
          {NAME_LINES.map((line, lineIndex) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                aria-hidden="true"
                initial={shouldReduceMotion ? false : { y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.08 * lineIndex, ease: [0.16, 1, 0.3, 1] }}
                className="block text-[clamp(2.75rem,12vw,9rem)]"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="grid gap-8 border-t border-line/10 pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
        >
          <p className="max-w-xl text-base leading-relaxed text-pretty text-line/70 md:text-lg">
            {t.hero.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-line px-5 py-3 text-[13px] font-medium tracking-tight text-paper transition-opacity hover:opacity-80 dark:text-ink"
            >
              {t.hero.ctaWork}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line/20 px-5 py-3 text-[13px] font-medium tracking-tight transition-colors hover:border-line/50"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div
        aria-hidden="true"
        className="mask-fade-x relative mt-14 flex overflow-hidden border-y border-line/10 py-4 select-none"
      >
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 motion-reduce:animate-none">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-8 font-mono text-[11px] tracking-[0.2em] whitespace-nowrap text-line/35 uppercase"
            >
              {item}
              <span className="text-line/15">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.35em] text-line/30 uppercase">
        <ArrowDown className="size-3 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
        {t.hero.scroll}
      </div>
    </section>
  );
};

export default Hero;
