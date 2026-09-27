import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Language, SectionId } from '../types';
import { NAV_ITEMS, SITE } from '../constants';
import { useI18n } from '../context/I18nContext';
import { useTheme } from '../context/ThemeContext';

const LANGUAGES: Language[] = ['en', 'uz', 'ru'];

interface HeaderProps {
  activeSection: SectionId;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { t, language, setLanguage } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page behind the mobile menu, and let Escape close it.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'border-b border-line/10 bg-paper/80 backdrop-blur-xl dark:bg-ink/80'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
          <a
            href="#home"
            className="group flex items-baseline gap-2 text-sm font-semibold tracking-tight"
            aria-label={`${SITE.name} — home`}
          >
            <span className="font-mono text-base">{SITE.initials}</span>
            {SITE.handle ? (
              <span className="hidden text-line/40 transition-colors group-hover:text-current sm:inline">
                {SITE.handle}
              </span>
            ) : null}
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.filter((item) => item.id !== 'home').map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative block rounded-full px-3.5 py-1.5 text-[13px] transition-colors ${
                        isActive ? 'text-current' : 'text-line/45 hover:text-line/80'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-line/8"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{t.nav[item.id]}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div
              role="group"
              aria-label="Language"
              className="hidden items-center gap-0.5 rounded-full border border-line/12 p-0.5 sm:flex"
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={language === lang}
                  className={`rounded-full px-2.5 py-1 font-mono text-[11px] uppercase transition-colors ${
                    language === lang
                      ? 'bg-line/10 text-current'
                      : 'text-line/40 hover:text-line/75'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.common.toggleTheme}
              className="rounded-full border border-line/12 p-2 transition-colors hover:border-line/35"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  {theme === 'dark' ? (
                    <Sun className="size-4" aria-hidden="true" />
                  ) : (
                    <Moon className="size-4" aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href={SITE.resume}
              // download
              target='_blank'
              className="hidden rounded-full bg-line px-4 py-2 text-[12px] font-medium tracking-tight text-paper transition-opacity hover:opacity-80 md:inline-block dark:text-ink"
            >
              {t.common.downloadResume}
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={t.common.menu}
              aria-expanded={isMenuOpen}
              className="rounded-full border border-line/12 p-2 transition-colors hover:border-line/35 lg:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-line/40"
          aria-hidden="true"
        />
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60 bg-paper lg:hidden dark:bg-ink"
            role="dialog"
            aria-modal="true"
            aria-label={t.common.menu}
          >
            <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-8">
              <span className="font-mono text-[11px] tracking-[0.35em] text-line/40 uppercase">
                {t.common.menu}
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label={t.common.close}
                autoFocus
                className="rounded-full border border-line/12 p-2"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="px-5 pt-6 md:px-8">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-baseline gap-4 border-b border-line/8 py-4 text-2xl font-semibold tracking-tight"
                    >
                      <span className="font-mono text-[11px] text-line/30">{item.index}</span>
                      <span className={activeSection === item.id ? '' : 'text-line/55'}>
                        {t.nav[item.id]}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    aria-pressed={language === lang}
                    className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase ${
                      language === lang
                        ? 'border-line/40 bg-line/10'
                        : 'border-line/12 text-line/45'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <a
                href={SITE.resume}
                download
                className="mt-6 inline-block rounded-full bg-line px-5 py-2.5 text-[13px] font-medium text-paper dark:text-ink"
              >
                {t.common.downloadResume}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
