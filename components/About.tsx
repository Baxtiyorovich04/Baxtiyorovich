import React from 'react';
import { SITE, STATS } from '../constants';
import { useI18n } from '../context/I18nContext';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const About: React.FC = () => {
  const { t } = useI18n();

  return (
    <Section
      id="about"
      index="02"
      title={t.about.title}
      label={t.about.label}
      layout="side"
      headingMotion="slide-left"
      bodyMotion="wipe-up"
    >
      <div className="grid gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12">
        <Reveal className="shrink-0">
          <picture>
            {SITE.avatarWebp.endsWith('.webp') ? (
              <source srcSet={SITE.avatarWebp} type="image/webp" />
            ) : null}
            <img
              src={SITE.avatar}
              alt={`Portrait of ${SITE.name}`}
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
              className="size-28 rounded-2xl border border-line/10 object-cover grayscale transition-all duration-700 hover:grayscale-0 md:size-40"
            />
          </picture>
        </Reveal>

        <div className="space-y-5">
          {t.about.body.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <p className="text-[15px] leading-relaxed text-pretty text-line/70 md:text-base">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.labelKey} className="bg-paper p-5 dark:bg-ink">
              <dt className="sr-only">{t.about.statLabels[stat.labelKey]}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight tabular-nums md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-[11px] leading-snug tracking-tight text-line/45">
                  {t.about.statLabels[stat.labelKey]}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
};

export default About;
