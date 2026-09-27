import React from 'react';
import { SECTION_IDS } from './constants';
import { SectionId } from './types';
import { useScrollSpy } from './hooks/useScrollSpy';
import { I18nProvider, useI18n } from './context/I18nContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import ScrollWheel from './components/ScrollWheel';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SPY_IDS = SECTION_IDS as SectionId[];

const AppContent: React.FC = () => {
  const { t } = useI18n();
  const activeSection = useScrollSpy(SPY_IDS);

  return (
    // clip, not hidden: no scroll container, so the sticky header and
    // scroll-spy keep working while full-bleed children stay contained
    <div className="min-h-dvh overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-line focus:px-4 focus:py-2 focus:text-[13px] focus:text-paper dark:focus:text-ink"
      >
        {t.common.skipToContent}
      </a>

      <Header activeSection={activeSection} />

      <main id="main" className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>

      <ScrollWheel activeSection={activeSection} />
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  </ThemeProvider>
);

export default App;
