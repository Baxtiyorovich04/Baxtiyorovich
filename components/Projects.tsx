import React, { useState } from 'react';
import { ArrowUpRight, Lock, Maximize2 } from 'lucide-react';
import { PROJECTS, PROJECT_MEDIA } from '../constants';
import { Project } from '../types';
import { useI18n } from '../context/I18nContext';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Modal from './ui/Modal';
import ImageSlider from './ui/ImageSlider';

/**
 * On a card, phone screenshots sit three across — they are narrow, and three
 * at once shows the flow rather than a single frozen screen. A desktop shot
 * needs the whole card to stay readable.
 */
const CARD_MOBILE_PER_VIEW = 3;

/**
 * Alt-text stem. A project with both a phone app and a web panel says so,
 * rather than claiming to be one or the other.
 */
const useAltBase = (project: Project) => {
  const { t } = useI18n();
  const groups = PROJECT_MEDIA[project.id] ?? [];
  const kinds = [...new Set(groups.map((g) => (g.mobile ? t.projects.mobile : t.projects.desktop)))];
  return `${project.title} — ${kinds.join(' / ')} ${t.projects.shotAlt}`;
};

/* ------------------------------------------------------------------ *
 * Card — image, name, one line, stack. Detail lives in the case study.
 * ------------------------------------------------------------------ */

interface CardProps {
  project: Project;
  delay: number;
  onOpen: (project: Project) => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, delay, onOpen }) => {
  const { t } = useI18n();
  const groups = PROJECT_MEDIA[project.id];
  const altBase = useAltBase(project);
  const links = project.links ?? (project.link ? [{ label: t.projects.viewSite, url: project.link }] : []);
  const primary = links[0];
  const headingId = `project-${project.id}`;

  return (
    <Reveal delay={delay} className="h-full">
      <article
        aria-labelledby={headingId}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line/10 transition-colors duration-300 hover:border-line/30"
      >
        <div className="relative border-b border-line/8 p-3 pb-0">
          {groups && (
            <ImageSlider
              groups={groups}
              mobilePerView={CARD_MOBILE_PER_VIEW}
              altBase={altBase}
              expanded={false}
              className="aspect-16/10"
              labels={{
                prev: t.projects.prevShot,
                next: t.projects.nextShot,
                gallery: `${project.title} — ${t.projects.gallery}`,
              }}
            />
          )}

          {/* z-10 keeps this above the image but under the slider's z-20 controls */}
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`${project.title} — ${t.projects.caseStudy}`}
            className="absolute inset-3 bottom-0 z-10 rounded-lg"
          >
            <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-ink/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[12px] font-medium tracking-tight text-ink dark:bg-ink dark:text-paper">
                <Maximize2 className="size-3.5" aria-hidden="true" />
                {t.projects.caseStudy}
              </span>
            </span>
          </button>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase">
            <span className="rounded-full border border-line/12 px-2 py-0.5 text-line/45">
              {project.type}
            </span>
            <span className="text-line/30">{project.year}</span>
          </div>

          <h3 id={headingId} className="mt-3 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-[13px] leading-snug text-pretty text-line/50">{project.tagline}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <li
                key={tech}
                className="rounded border border-line/10 px-1.5 py-0.5 font-mono text-[10px] tracking-tight text-line/50"
              >
                {tech}
              </li>
            ))}
            {project.stack.length > 4 && (
              <li className="px-1 py-0.5 font-mono text-[10px] text-line/35">
                +{project.stack.length - 4}
              </li>
            )}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="link-underline text-[12px] font-medium tracking-tight text-line/60 transition-colors hover:text-current"
            >
              {t.projects.caseStudy}
            </button>

            {primary ? (
              <a
                href={primary.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — ${t.projects.viewSite}`}
                className="rounded-full border border-line/12 p-1.5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-line/50"
              >
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            ) : (
              <span title={t.projects.private} className="p-1.5 text-line/25">
                <Lock className="size-3.5" aria-hidden="true" />
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

/* ------------------------------------------------------------------ *
 * Case study
 * ------------------------------------------------------------------ */

const CaseStudy: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useI18n();
  const groups = PROJECT_MEDIA[project.id];
  const altBase = useAltBase(project);
  const links = project.links ?? (project.link ? [{ label: t.projects.viewSite, url: project.link }] : []);

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-2 pr-12 font-mono text-[10px] tracking-[0.15em] uppercase">
        <span className="rounded-full border border-line/12 px-2 py-0.5 text-line/45">
          {project.type}
        </span>
        <span className="text-line/30">{project.year}</span>
      </div>

      <h2 id={`case-${project.id}`} className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        {project.title}
      </h2>
      <p className="mt-1.5 text-[14px] text-line/50">{project.tagline}</p>

      {groups && (
        <div className="mt-6 rounded-xl border border-line/10 p-3">
          {/* One at a time in the case study — here the screenshot is the point */}
          <ImageSlider
            groups={groups}
            mobilePerView={1}
            altBase={altBase}
            expanded
            /*
             * A desktop shot is 16:10, so the box matches it exactly and the
             * image fills without letterboxing. A phone shot is far taller
             * than wide — it gets a fixed height instead, and sits centred.
             */
            desktopClassName="aspect-16/10"
            mobileClassName="h-[clamp(320px,56dvh,620px)]"
            labels={{
              prev: t.projects.prevShot,
              next: t.projects.nextShot,
              gallery: `${project.title} — ${t.projects.gallery}`,
            }}
          />
        </div>
      )}

      <p className="mt-7 text-[15px] leading-relaxed text-pretty text-line/70">
        {project.description}
      </p>

      <div className="mt-7 grid gap-7 border-t border-line/8 pt-7 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-[10px] tracking-[0.28em] text-line/35 uppercase">
            {t.projects.role}
          </h3>
          <p className="mt-2.5 text-[14px] leading-relaxed text-pretty text-line/70">
            {project.role}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[10px] tracking-[0.28em] text-line/35 uppercase">
            {t.projects.stack}
          </h3>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-line/10 px-2 py-0.5 font-mono text-[10.5px] tracking-tight text-line/55"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 border-t border-line/8 pt-7">
        <h3 className="font-mono text-[10px] tracking-[0.28em] text-line/35 uppercase">
          {t.projects.impact}
        </h3>
        <ul className="mt-3 space-y-2.5">
          {project.highlights.map((highlight, index) => (
            <li key={index} className="flex gap-3">
              <span aria-hidden="true" className="mt-[8px] size-1 shrink-0 rounded-full bg-line/30" />
              <span className="text-[14px] leading-relaxed text-pretty text-line/70">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {links.length > 0 ? (
        <div className="mt-7 flex flex-wrap gap-3 border-t border-line/8 pt-7">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line/20 px-4 py-2 text-[12.5px] font-medium tracking-tight transition-colors hover:border-line/50"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-7 border-t border-line/8 pt-7 text-[12.5px] text-line/40">
          {t.projects.private}
        </p>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ *
 * Section
 * ------------------------------------------------------------------ */

const Projects: React.FC = () => {
  const { t, language } = useI18n();
  const projects = PROJECTS[language] ?? PROJECTS.en;
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      index="05"
      title={t.projects.title}
      label={t.projects.label}
      layout="wide"
      headingMotion="wipe-left"
      bodyMotion="rise"
    >
      <Reveal>
        <p className="mb-8 max-w-md text-[15px] leading-relaxed text-pretty text-line/55">
          {t.projects.note}
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={Math.min(index, 5) * 0.04}
            onOpen={setOpenProject}
          />
        ))}
      </div>

      <Modal
        isOpen={openProject !== null}
        onClose={() => setOpenProject(null)}
        labelledBy={openProject ? `case-${openProject.id}` : ''}
        closeLabel={t.projects.closeCase}
      >
        {openProject && <CaseStudy project={openProject} />}
      </Modal>
    </Section>
  );
};

export default Projects;
