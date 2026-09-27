import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE } from '../constants';
import { useI18n } from '../context/I18nContext';

const Footer: React.FC = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/10 py-10">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-[12px] text-line/40">
          <p>
            © {year} {SITE.name}. {t.common.rights}
          </p>
          <p className="text-line/30">{t.common.builtWith}</p>
        </div>

        <a
          href="#home"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-line/12 px-4 py-2 text-[12px] tracking-tight text-line/55 transition-colors hover:border-line/40 hover:text-current"
        >
          <ArrowUp className="size-3.5" aria-hidden="true" />
          {t.common.backToTop}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
