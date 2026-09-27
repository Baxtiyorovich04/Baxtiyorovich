import React from 'react';
import { ArrowUpRight, Clock, Download, Github, Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '../constants';
import { useI18n } from '../context/I18nContext';
import Section from './ui/Section';
import Reveal from './ui/Reveal';

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.964 17.297c-.123.379-.248.74-.522.746-.273.007-.355-.364-.487-.718l-1.71-5.614 10.331-7.839c.238-.179.416-.082.34.204l-1.758 7.105-6.115 6.116zm10.011-14.617l-21.663 8.215c-.969.367-.96.872-.176 1.098l5.537 1.729 2.112 6.547c.28.864.475 1.187 1.184 1.187.483 0 .674-.219.934-.466.19-.18 1.345-1.309 2.643-2.545l5.499 4.05c1.01.558 1.732.27 1.982-.938l3.6-16.041c.187-.833-.318-1.216-1.152-.836z" />
  </svg>
);

const Contact: React.FC = () => {
  const { t } = useI18n();

  const telegramName = SITE.telegram.split('/').filter(Boolean).pop() ?? '';
  const githubName = SITE.github.split('/').filter(Boolean).pop() ?? '';

  const channels = [
    { href: `mailto:${SITE.email}`, Icon: Mail, label: t.contact.email, value: SITE.email, external: false },
    { href: SITE.telegram, Icon: TelegramIcon, label: 'Telegram', value: `@${telegramName}`, external: true },
    ...(SITE.github
      ? [{ href: SITE.github, Icon: Github, label: 'GitHub', value: githubName, external: true }]
      : []),
    { href: `tel:${SITE.phone}`, Icon: Phone, label: t.contact.phone, value: SITE.phoneDisplay, external: false },
  ];

  return (
    <Section
      id="contact"
      index="07"
      title={t.contact.title}
      label={t.contact.label}
      layout="stacked"
      headingMotion="zoom-blur"
      bodyMotion="wipe-up"
    >
      <Reveal>
        <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-balance md:text-3xl">
          {t.contact.heading}
        </h3>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-pretty text-line/60">
          {t.contact.body}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-line px-5 py-3 text-[13px] font-medium tracking-tight text-paper transition-opacity hover:opacity-80 dark:text-ink"
          >
            <Mail className="size-4" aria-hidden="true" />
            {t.contact.emailCta}
          </a>
          <a
            href={SITE.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line/20 px-5 py-3 text-[13px] font-medium tracking-tight transition-colors hover:border-line/50"
          >
            <Download className="size-4" aria-hidden="true" />
            {t.common.downloadResume}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line/10 bg-line/10 sm:grid-cols-2">
          {channels.map(({ href, Icon, label, value, external }) => (
            <li key={label} className="bg-paper dark:bg-ink">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-line/[0.03]"
              >
                <Icon className="size-4 shrink-0 text-line/40 transition-colors group-hover:text-current" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] tracking-[0.25em] text-line/35 uppercase">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate text-[13.5px] tracking-tight">{value}</span>
                </span>
                <ArrowUpRight className="size-3.5 shrink-0 text-line/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-line/60" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-line/40">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3" aria-hidden="true" />
            {t.contact.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3" aria-hidden="true" />
            {t.contact.responseTime}
          </span>
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
