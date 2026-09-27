import React from 'react';
import { useI18n } from '../context/I18nContext';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const Experience: React.FC = () => {
  const { t } = useI18n();

  return (
    <Section
      id="experience"
      index="04"
      title={t.experience.title}
      label={t.experience.label}
      layout="stacked"
      headingMotion="wipe-up"
      bodyMotion="unfold"
    >
      <div className="flex flex-col gap-6">
        {t.experience.items.map((item) => {
          const meta = [item.role, item.location].filter(Boolean).join(' · ');

          return (
            <Reveal key={item.company}>
              <article className="relative rounded-xl border border-line/10 p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {item.company}
                      </h3>
                      {item.tag ? (
                        <span className="text-[13px] font-medium tracking-tight text-line/45">
                          {item.tag}
                        </span>
                      ) : null}
                      {item.active ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 px-2.5 py-0.5 text-[10px] tracking-tight text-emerald-600 dark:text-emerald-400">
                          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                          {t.experience.current}
                        </span>
                      ) : null}
                    </div>
                    {meta ? <p className="mt-1.5 text-[13px] text-line/50">{meta}</p> : null}
                  </div>

                  {item.period ? (
                    <p className="font-mono text-[11px] tracking-[0.15em] text-line/40 uppercase">
                      {item.period}
                    </p>
                  ) : null}
                </div>

                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-pretty text-line/65">
                  {item.summary}
                </p>

                {item.bullets.length > 0 ? (
                  <ul className="mt-7 space-y-3 border-t border-line/8 pt-6">
                    {item.bullets.map((bullet, index) => (
                      <Reveal as="li" key={index} delay={Math.min(index, 6) * 0.03}>
                        <div className="group flex gap-3.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1 shrink-0 rounded-full bg-line/25 transition-colors group-hover:bg-line/70"
                          />
                          <span className="text-[14px] leading-relaxed text-pretty text-line/70 transition-colors group-hover:text-line/95 md:text-[15px]">
                            {bullet}
                          </span>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
