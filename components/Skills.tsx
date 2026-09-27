import React from 'react';
import { SKILLS } from '../constants';
import { useI18n } from '../context/I18nContext';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const Skills: React.FC = () => {
  const { t } = useI18n();

  return (
    <Section
      id="skills"
      index="03"
      title={t.skills.title}
      label={t.skills.label}
      layout="side-alt"
      headingMotion="slide-right"
      bodyMotion="wipe-left"
    >
      <Reveal>
        <p className="mb-10 max-w-xl text-[15px] leading-relaxed text-pretty text-line/55">
          {t.skills.note}
        </p>
      </Reveal>

      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {SKILLS.map((group, index) => (
          <Reveal key={group.category} delay={Math.min(index, 5) * 0.04}>
            <div className="border-t border-line/10 pt-4">
              <h3 className="font-mono text-[10px] tracking-[0.3em] text-line/35 uppercase">
                {group.category}
              </h3>
              <ul className="mt-3.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line/12 px-3 py-1 text-[12px] tracking-tight text-line/75 transition-colors hover:border-line/40 hover:text-current"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
