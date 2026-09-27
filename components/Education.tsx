import React from 'react';
import { SPOKEN_LANGUAGES } from '../constants';
import { useI18n } from '../context/I18nContext';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const Education: React.FC = () => {
  const { t } = useI18n();

  return (
    <Section
      id="education"
      index="06"
      title={t.education.title}
      label={t.education.label}
      layout="side"
      headingMotion="slide-left"
      bodyMotion="slide-right"
    >
      <ol className="space-y-5">
        {t.education.items.map((item, index) => (
          <Reveal as="li" key={item.school} delay={index * 0.06}>
            <article className="rounded-xl border border-line/10 p-6 transition-colors hover:border-line/25 md:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{item.school}</h3>
                <span className="font-mono text-[11px] tracking-[0.15em] text-line/40">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-line/50">{item.program}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-pretty text-line/65">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.12}>
        <div className="mt-12 border-t border-line/10 pt-8">
          <h3 className="font-mono text-[10px] tracking-[0.3em] text-line/35 uppercase">
            {t.education.languagesTitle}
          </h3>

          <ul className="mt-6 space-y-6">
            {SPOKEN_LANGUAGES.map((lang, index) => (
              <li key={lang.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[15px] font-medium tracking-tight">{lang.name}</span>
                  <span className="text-[12px] text-line/45">
                    {t.education[lang.levelKey]} · {lang.cefr}
                  </span>
                </div>
                <div
                  className="mt-2.5 h-px w-full bg-line/12"
                  role="img"
                  aria-label={`${lang.name}: ${t.education[lang.levelKey]} (${lang.cefr})`}
                >
                  <div
                    className="h-full origin-left bg-line/70 transition-[width] duration-1000 ease-out"
                    style={{ width: `${lang.value}%`, transitionDelay: `${index * 120}ms` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[12px] text-line/35">{t.education.cefrNote}</p>
        </div>
      </Reveal>
    </Section>
  );
};

export default Education;
