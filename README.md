# Portfolio — Izzatillayev Javohir

Personal site of **Izzatillayev Javohir**, front-end developer in Tashkent, Uzbekistan.
Live at **[javohirdev.org.uz](https://javohirdev.org.uz)**.

A single-page portfolio in three languages (English, Uzbek, Russian) with a light and
dark theme, built as a small showcase of how I structure a front-end project.

---

## Stack

| Area       | Choice                                     |
| ---------- | ------------------------------------------ |
| Framework  | React 19 + TypeScript (strict-ish, no `any`) |
| Build      | Vite 6                                     |
| Styling    | Tailwind CSS v4 (CSS-first config, no JS config file) |
| Motion     | Framer Motion, gated on `prefers-reduced-motion` |
| Icons      | lucide-react                               |

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run typecheck  # tsc --noEmit
npm run build      # typecheck, then production build into dist/
npm run preview    # serve the production build
```

Node 20 or newer.

## Project layout

```
index.html            Document shell — meta, JSON-LD, no-flash theme script
index.css             Tailwind entry, design tokens, base layer, custom utilities
index.tsx             React entry point
App.tsx               Page composition and scroll-spy wiring
constants.ts          All content: copy, projects, skills — three locales
types.ts              Shared types, including the translation schema
context/
  I18nContext.tsx     Language state, persisted, syncs <html lang>
  ThemeContext.tsx    Theme state, follows the OS until the user chooses
hooks/
  useScrollSpy.ts     Single IntersectionObserver over all sections
components/
  ui/Section.tsx      Section shell — four layouts, per-section choreography
  ui/Reveal.tsx       Seven scroll-triggered entrances, no-ops under reduced motion
  ui/ImageSlider.tsx  One screenshot, or a slider when there is more than one
  ui/Modal.tsx        Focus-trapped dialog used for project case studies
  ScrollWheel.tsx     Decorative ship's-wheel scroll indicator on the right edge
  Header, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
public/projects/      Project screenshots, listed in PROJECT_MEDIA
public/               Static assets, icons, sitemap, manifest, CV
```

## Adding project screenshots

`PROJECT_MEDIA` in `constants.ts` is the only place screenshots are configured.
Each project is a list of groups, and a group is all one kind:

```ts
kansler: [
  {
    mobile: false,                  // false → desktop shots, true → phone shots
    images: ['/projects/kansler-1.webp', '/projects/kansler-2.webp'],
  },
],
```

A product that ships on more than one surface gets one group per surface. The
slider pages through them in order and switches frame as it goes:

```ts
formula: [
  { mobile: false, images: ['/projects/formula-d1.webp', /* … */] },  // admin panel
  { mobile: true,  images: ['/projects/formula-m1.webp', /* … */] },  // phone app
],
```

Drop the files into `public/projects/` and list them. There is no device toggle
in the UI — the data says what each screenshot is, so the visitor never has to.

How many share a slide follows from the flag:

| `mobile` | On a card | In the case study |
| -------- | --------- | ----------------- |
| `true`   | up to 3 phone shots side by side | one at a time |
| `false`  | one desktop shot | one at a time |

So three phone shots need no paging at all, while three desktop shots page
through one by one. Controls only appear when something does not fit —
arrows on hover, dots, arrow keys, and swipe.

## A few decisions worth explaining

**One source of truth for copy.** Every string lives in `constants.ts`, typed against
`TranslationSchema` in `types.ts`. Adding a field to one locale without the other two
is a compile error, so translations cannot silently drift.

**Borders use a token, not `currentColor`.** `border-current/12` on an element that
also sets `text-current/45` resolves to roughly 5% opacity, because `currentColor`
picks up the faded text colour. A `--ui-line` variable that flips between themes keeps
every tint predictable.

**Scroll spy uses one observer.** A single `IntersectionObserver` over all sections
picks the entry closest to the top of the viewport, which behaves correctly when
sections differ wildly in height — unlike one observer per section.

**Each section arrives differently.** `Section` has four layouts and `Reveal`
has seven entrance choreographies — slide from either edge, clip-path wipes, a
3D unfold, a focus-in zoom. Every section uses a distinct pairing, so the page
does not read as one template repeated seven times.

**Motion is opt-out by default.** `Reveal` returns a plain element when
`prefers-reduced-motion` is set, the scroll wheel does not render at all, and
the CSS base layer collapses animation and transition durations. Nothing
important is hidden behind an animation that may never run.

**The scroll wheel is decorative on purpose.** It mirrors the active section
rather than owning it, and is `aria-hidden` and non-interactive: the header nav
is the real control, so the wheel cannot become a keyboard trap or a second
source of truth.

**No flash of the wrong theme.** A tiny inline script in `index.html` applies the
stored theme class before first paint; `ThemeContext` mirrors the same logic.

## Contact

- Email — [markpomidorchik@gmail.com](mailto:markpomidorchik@gmail.com)
- Telegram — [@baxtiyorovich_292](https://t.me/baxtiyorovich_292)
- GitHub — [Baxtiyorovich04](https://github.com/Baxtiyorovich04)
