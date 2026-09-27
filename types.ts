export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'education'
  | 'contact';

export type Language = 'uz' | 'ru' | 'en';

export interface NavItem {
  id: SectionId;
  /** Zero-padded index rendered next to the label, e.g. "01". */
  index: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

/**
 * One set of screenshots of a single kind.
 *
 * A group is never mixed — it is all desktop or all phone — so the frame is
 * decided once by a boolean rather than by a control in the UI.
 */
export interface MediaGroup {
  /** true → phone screenshots (portrait, contained). false → desktop screenshots. */
  mobile: boolean;
  /** One or more images, in display order. */
  images: string[];
}

export interface Project {
  /** Stable key so the same project can be matched across languages. */
  id: string;
  title: string;
  /** e.g. "UDEVS" or "Freelance" — rendered as the context chip. */
  type: string;
  /** Short one-liner shown under the title. */
  tagline: string;
  description: string;
  /** What the author personally owned on the project. */
  role: string;
  /** 2–3 outcome statements. Keep them concrete. */
  highlights: string[];
  stack: string[];
  year: string;
  link?: string;
  links?: ProjectLink[];
}

/**
 * Project id → its media groups. Language-independent, edited in one place.
 *
 * A list rather than a single group, because a product can ship on more than
 * one surface: Formula is a phone app *and* an admin panel, and forcing that
 * into one boolean would mean dropping half the work. Each group keeps its own
 * frame, and the slider pages through them in order.
 */
export type ProjectMediaMap = Record<string, MediaGroup[]>;

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Stat {
  value: string;
  labelKey: 'experience' | 'projects' | 'users' | 'team';
}

export interface TranslationSchema {
  nav: Record<SectionId, string>;
  hero: {
    greeting: string;
    role: string;
    availability: string;
    intro: string;
    ctaWork: string;
    ctaContact: string;
    scroll: string;
  };
  about: {
    title: string;
    label: string;
    body: string[];
    statLabels: Record<Stat['labelKey'], string>;
  };
  skills: {
    title: string;
    label: string;
    note: string;
  };
  experience: {
    title: string;
    label: string;
    current: string;
    items: {
      company: string;
      /** Short label beside the company name, e.g. "Co-Founder". */
      tag?: string;
      period: string;
      location: string;
      role: string;
      summary: string;
      bullets: string[];
      /** Shows the green “current” badge. */
      active: boolean;
    }[];
  };
  education: {
    title: string;
    label: string;
    items: {
      school: string;
      program: string;
      period: string;
      description: string;
    }[];
    languagesTitle: string;
    native: string;
    professional: string;
    intermediate: string;
    cefrNote: string;
  };
  projects: {
    title: string;
    label: string;
    note: string;
    viewSite: string;
    role: string;
    stack: string;
    impact: string;
    private: string;
    caseStudy: string;
    closeCase: string;
    /** Alt text pattern, e.g. "MEDPAY — desktop screenshot 2 of 3". */
    shotAlt: string;
    desktop: string;
    mobile: string;
    prevShot: string;
    nextShot: string;
    gallery: string;
  };
  contact: {
    title: string;
    label: string;
    heading: string;
    body: string;
    emailCta: string;
    location: string;
    responseTime: string;
  };
  common: {
    connect: string;
    menu: string;
    close: string;
    downloadResume: string;
    backToTop: string;
    skipToContent: string;
    toggleTheme: string;
    rights: string;
    builtWith: string;
  };
}
