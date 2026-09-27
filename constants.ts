import {
  NavItem,
  Project,
  ProjectMediaMap,
  SkillCategory,
  Language,
  Stat,
  TranslationSchema,
} from './types';

export const SITE = {
  name: 'Izzatillayev Javohir',
  initials: 'IJ',
  handle: '',
  url: 'https://javohirdev.org.uz',
  email: 'markpomidorchik@gmail.com',
  phone: '+998930602818',
  phoneDisplay: '+998 93 060 28 18',
  telegram: 'https://t.me/baxtiyorovich_292',
  linkedin: '',
  github: 'https://github.com/Baxtiyorovich04',
  resume: '/Javohir_CV.pdf',
  avatar: '/my_avatar.jpg',
  avatarWebp: '/my_avatar.jpg',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', index: '01' },
  { id: 'about', index: '02' },
  { id: 'skills', index: '03' },
  { id: 'experience', index: '04' },
  { id: 'projects', index: '05' },
  { id: 'education', index: '06' },
  { id: 'contact', index: '07' },
];

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const STATS: Stat[] = [
  { value: '2+', labelKey: 'experience' },
  { value: '10+', labelKey: 'projects' },
  { value: '50K+', labelKey: 'users' },
  { value: '40+', labelKey: 'team' },
];

/* ------------------------------------------------------------------ *
 * PROJECT MEDIA
 *
 * The only place screenshots are configured. Each project is a list of
 * groups, and each group has two fields:
 *
 *   mobile  false → desktop screenshots, shown in a wide frame
 *           true  → phone screenshots, shown upright and fully visible
 *
 *   images  one or more files, all of the same kind
 *
 * Most projects need a single group. A product that ships on more than one
 * surface gets one group per surface — Formula is a phone app *and* an admin
 * panel, and a single boolean would have meant dropping half the work. The
 * slider pages through the groups in order and switches frame as it goes.
 *
 * To use real screenshots: drop the files into public/projects/ and list
 * them here. Any format works (.png, .jpg, .webp, .svg) because the
 * component renders a plain <img>.
 * ------------------------------------------------------------------ */
export const PROJECT_MEDIA: ProjectMediaMap = {
  kansler: [
    {
      mobile: false,
      images: [
        '/projects/kansler-1.webp',
        '/projects/kansler-2.webp',
        '/projects/kansler-3.webp',
      ],
    },
  ],
  'central-tour': [
    {
      mobile: false,
      images: [
        '/projects/central-tour-1.webp',
        '/projects/central-tour-2.webp',
        '/projects/central-tour-3.webp',
        '/projects/central-tour-4.webp',
        '/projects/central-tour-5.webp',
      ],
    },
  ],
  centbed: [
    {
      mobile: false,
      images: [
        '/projects/centbed-1.webp',
        '/projects/centbed-2.webp',
        '/projects/centbed-3.webp',
        '/projects/centbed-4.webp',
      ],
    },
  ],
  orimedia: [
    {
      mobile: false,
      images: [
        '/projects/orimedia-1.webp',
        '/projects/orimedia-2.webp',
        '/projects/orimedia-3.webp',
        '/projects/orimedia-4.webp',
      ],
    },
  ],
  medpay: [
    {
      mobile: true,
      images: [
        '/projects/medpay-1.webp',
        '/projects/medpay-2.webp',
        '/projects/medpay-3.webp',
        '/projects/medpay-4.webp',
        '/projects/medpay-5.webp',
        '/projects/medpay-6.webp',
      ],
    },
  ],
  formula: [
    {
      mobile: false,
      images: [
        '/projects/formula-d1.webp',
        '/projects/formula-d2.webp',
        '/projects/formula-d3.webp',
      ],
    },
    {
      mobile: true,
      images: [
        '/projects/formula-m1.webp',
        '/projects/formula-m2.webp',
        '/projects/formula-m3.webp',
      ],
    },
  ],
  utas: [
    {
      mobile: false,
      images: [
        '/projects/utas-1.webp',
        '/projects/utas-2.webp',
        '/projects/utas-3.webp',
        '/projects/utas-4.webp',
      ],
    },
  ],
  fotinium: [
    {
      mobile: true,
      images: [
        '/projects/fotinium-1.webp',
        '/projects/fotinium-2.webp',
        '/projects/fotinium-3.webp',
      ],
    },
  ],
  hisobim: [
    {
      mobile: false,
      images: ['/projects/hisobim-d1.webp', '/projects/hisobim-d2.webp'],
    },
    {
      mobile: true,
      images: [
        '/projects/hisobim-m1.webp',
        '/projects/hisobim-m2.webp',
        '/projects/hisobim-m3.webp',
        '/projects/hisobim-m4.webp',
        '/projects/hisobim-m5.webp',
        '/projects/hisobim-m6.webp',
      ],
    },
  ],
  lifecar: [
    {
      mobile: false,
      images: ['/projects/lifecar-1.webp', '/projects/lifecar-2.webp'],
    },
  ],
};

/** Rendered in the scrolling marquee under the hero. */
export const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Redux Toolkit',
  'Zustand',
  'GraphQL',
  'WebSocket',
  'Micro-frontend',
  'Framer Motion',
  'React Native',
  'Flutter',
  'GitHub Actions',
];

export const SKILLS: SkillCategory[] = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript (ES2023)', 'HTML5', 'CSS3'] },
  { category: 'Frameworks', items: ['React 19', 'Next.js (App Router)', 'React Native', 'Gatsby.js', 'Flutter'] },
  {
    category: 'State & Data',
    items: ['Redux Toolkit', 'Zustand', 'TanStack Query'],
  },
  { category: 'Styling', items: ['Tailwind CSS', 'SCSS', 'CSS Modules', 'Framer Motion'] },
  { category: 'APIs', items: ['REST', 'GraphQL', 'WebSocket', 'Strapi (Headless CMS)'] },
  { category: 'Data viz', items: ['Recharts', 'Chart.js', 'SurveyJS', 'Virtualised tables'] },
  {
    category: 'UI Systems',
    items: ['Shadcn UI', 'MUI', 'Ant Design', 'Chakra UI', 'Design tokens', 'Storybook-style docs'],
  },
  {
    category: 'Architecture',
    items: ['NX Monorepo', 'Micro-frontend', 'RBAC', 'Feature-sliced design', 'SSR / ISR'],
  },
  { category: 'Quality', items: ['Vitest', 'Testing Library', 'ESLint', 'Prettier', 'Lighthouse'] },
  {
    category: 'DevOps',
    items: ['GitHub Actions', 'GitLab CI', 'Nginx', 'CI/CD pipelines'],
  },
  { category: 'Workflow', items: ['Git Flow', 'GitHub', 'Figma', 'Code review', 'AI-assisted dev'] },
];

/* ------------------------------------------------------------------ *
 * PROJECTS
 * NOTE: role / highlights / stack are written from the public surface
 * of each product — review the numbers before publishing.
 * ------------------------------------------------------------------ */
export const PROJECTS: Record<Language, Project[]> = {
  en: [
{
      id: 'kansler',
      title: 'Kansler.uz',
      type: 'UDEVS',
      year: '2025',
      tagline: 'B2B office supply for companies',
      description:
        'Bulk office supply for companies — everything from paper and furniture to cleaning products and food, on one contract. The buyer is a procurement manager, not a shopper: they order for a whole office, pay by bank transfer against a contract, and need an invoice, so the storefront is built around that rather than around impulse purchases.',
      role: 'Front-end developer — the storefront: home, catalogue and category pages, faceted filtering, product cards, cart and favourites, and the authentication screens.',
      highlights: [
        'Built faceted filtering where a price range slider and its two number inputs stay in sync, and long facet lists collapse behind a "show more" rather than running off the page',
        'Made the category tree, breadcrumbs and filter state readable from the URL, so a filtered catalogue can be sent to a colleague as a link',
        'Built product cards that carry their own image carousel and fall back to a proper empty state when a supplier sends no photo — common in a catalogue this wide',
        'Surfaced the B2B terms that actually close the sale — contract payment, Didox e-invoicing, delivery threshold, assigned manager — on the home page instead of burying them in a policy page',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://kansler.uz',
    },
{
      id: 'central-tour',
      title: 'Central Tour',
      type: 'UDEVS',
      year: '2025',
      tagline: 'B2C travel booking platform',
      description:
        'A booking platform for a full-cycle tour operator: flights, hotels, transfers and excursions, each with its own search, results and checkout. Four products behind one header — plus loyalty tiers, points, saved travellers and multi-currency, because a returning customer should not retype a passport number.',
      role: 'Front-end developer — the search shell shared by all four verticals, the hotel flow from search to room selection, and the account area with saved travellers and loyalty.',
      highlights: [
        'Built one search shell that four verticals plug into: the tabs swap the fields — origin and destination for flights, occupancy and dates for hotels — without swapping the page out from under you',
        'Handled the flight cases that break naive forms: multi-city routes, direct-only, passenger mix, and an origin/destination swap that keeps both inputs valid',
        'Built a traveller profile that stores passport series, expiry, issuing authority and citizenship once and reuses it at checkout, with inline validation on the fields that block a booking',
        'Shipped multi-currency and multi-language across the whole flow, so prices and dates stay consistent from search to confirmation',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://centraltour.uz',
    },
{
      id: 'centbed',
      title: 'CentBed',
      type: 'UDEVS',
      year: '2025 — 2026',
      tagline: 'B2B travel booking system for agencies',
      description:
        'The agency-facing half of the same travel platform as Central Tour. Here the user is a travel agent selling on: they book against a deposit balance, set their own markup over the supplier rate, and manage staff and sub-agents under one company account. Every screen has to be precise, because the agent is quoting a client from it.',
      role: 'Front-end developer — the hotel flow from search through rate comparison to guest details, and the agency back office.',
      highlights: [
        'Built rate-plan comparison as side-by-side cards: same room, different meal plan, refundability, payment timing and price, so an agent can pick in one glance instead of opening four pages',
        'Rendered cancellation rules as an explicit timeline — free until this date, this exact penalty after it, all times GMT — since this is the part a client will hold the agency to',
        'Implemented the markup layer, where an agency sets its own margin over the supplier price and sees both numbers without confusing one for the other',
        'Built the company account around real agency structure: licence and certificate uploads, staff, sub-agents, deposit balance and loyalty tier',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
    },
{
      id: 'orimedia',
      title: 'ORI Media',
      type: 'UDEVS',
      year: '2024 — 2025',
      tagline: 'E-book, audiobook and print store',
      description:
        'A reading platform for the Uzbek market: e-books, audiobooks and printed copies in one catalogue. A title can be bought outright, read online for a lower price, or listened to — so a single book page has to present several different purchase paths without becoming a wall of buttons.',
      role: 'Front-end developer — the storefront: home, category and search pages, the book detail page with its purchase paths, phone-number authentication, and the Latin/Cyrillic language switch.',
      highlights: [
        'Built the book page so buy, read-online and save sit side by side with prices visible, and details and reviews split into tabs rather than stacked',
        'Shipped a Latin/Cyrillic Uzbek switch across the whole interface, including the parts rendered from CMS content',
        'Implemented phone-number sign-in as a modal that keeps you on the book you were reading instead of redirecting away',
        'Made the home carousels and the category rail keyboard-reachable and swipeable, not mouse-only',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS', 'REST API', 'i18n'],
      link: 'https://orimedia.uz',
    },
{
      id: 'medpay',
      title: 'MEDPAY',
      type: 'UDEVS',
      year: '2025 — 2026',
      tagline: 'Clinic automation ecosystem',
      description:
        'An ecosystem that runs a clinic end to end, with a separate app for each side of the same visit. A patient browses lab tests and diagnostics, pays and collects results; a doctor writes prescriptions and reads the medical record; the clinic tracks orders, staff and settlement. One order is therefore seen three different ways, and each side ships as its own published app.',
      role: 'Front-end developer — the clinic and doctor workspaces, the shared component library the three roles are built from, and the mobile-facing screens.',
      highlights: [
        'Modelled an order as a set of line items with their own state, so an order can be part-paid and part-delivered — a single order-level status would have been wrong from day one',
        'Implemented role-based access control down to the component, so each role renders and requests only what it is allowed to see',
        'Built one component library shared by three role-scoped apps in an NX monorepo — three products in the stores, one set of tables and cards to maintain',
        'Built the clinic settlement view: a transaction ledger grouped by day with pending and accrued balances, ending in a payout action',
      ],
      stack: ['React', 'TypeScript', 'NX Monorepo', 'Redux Toolkit', 'WebSocket', 'RBAC'],
      links: [
        { label: 'medpay.uz', url: 'https://medpay.uz' },
        { label: 'Patient app', url: 'https://play.google.com/store/apps/details?id=io.udevs.medpay_patient' },
        { label: 'Doctor app', url: 'https://play.google.com/store/apps/details?id=com.udevs.medpaydoctor' },
        { label: 'Clinic app', url: 'https://play.google.com/store/apps/details?id=com.udevs.medpay.clinic' },
      ],
    },
{
      id: 'hisobim',
      title: 'Hisobim',
      type: 'UDEVS',
      year: '2026',
      tagline: 'Accounting platform, phone and web',
      description:
        'Accounting for a business, on both a phone and a full web back office: bank accounts pulled together across banks, cash flow, P&L, balance sheet and receivables. The same four financial views exist on both surfaces — an owner checks the balance on a phone, an accountant works the ledger on a desktop.',
      role: 'Front-end developer — the financial reporting views on both surfaces: cash flow, P&L, balance and the debt views, plus the charts behind them.',
      highlights: [
        'Turned the cash balance into an answer instead of a number: at the current burn rate, roughly 34 days of runway, with the month\u2019s forecast next to it',
        'Built receivables and payables around ageing buckets — 1–30, 30–90, 90+ days with the overdue share — and per-counterparty overdue days, which is how the number actually gets acted on',
        'Made the accounting tables work on a phone: months scroll horizontally with an explicit hint, and account codes stay attached to each line so the figures remain auditable',
        'Kept one chart language across cash flow, debt dynamics and P&L, so a figure means the same thing on the phone and in the back office',
      ],
      stack: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'REST API', 'Virtualised tables'],
    },
{
      id: 'formula',
      title: 'Formula',
      type: 'UDEVS',
      year: '2026',
      tagline: 'Health app + operator admin panel',
      description:
        'Two products that only make sense together. On the phone: courses, nutrition logging by photo, steps and daily goals. On the web: the panel the operator runs it from — retention and funnel analytics, subscriptions, promo codes, course content, and a drag-and-drop builder for the onboarding survey that decides what a new user is shown.',
      role: 'Front-end developer — the admin panel end to end, including the analytics views and the survey builder integration, plus app screens.',
      highlights: [
        'Built the funnel view around the drop-off, not the totals: opened → onboarded → left a number → purchased, so the operator sees which step is losing people rather than a single conversion figure',
        'Surfaced the metrics that predict churn — users inactive 14+ days, streak length, average session, repeat-payment rate — instead of only the numbers that look good',
        'Integrated a drag-and-drop survey builder with designer, logic and JSON views, so onboarding questions change without a release',
        'Wired the food log to a photo scan that returns calories and macros as an editable draft — the user confirms rather than trusts it blindly',
      ],
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'SurveyJS', 'REST API'],
    },
{
      id: 'fotinium',
      title: 'Fotinium',
      type: 'UDEVS',
      year: '2025',
      tagline: 'Personal health app',
      description:
        'A health app that puts several unrelated things in one place: a supplement marketplace, a personal medical record with lab history and documents, doctor booking on a monthly subscription, and wearable tracking synced with Apple Health. The hard part is not any one of them — it is making five tabs feel like one product.',
      role: 'Front-end developer — the marketplace and cart, the doctor booking and subscription screens, and the profile with its health-data connections.',
      highlights: [
        'Made the add-to-cart control morph into a quantity stepper in place, so adjusting an order never sends you to the cart and back',
        'Built doctor booking around a monthly subscription rather than a single fee, listing exactly what the price includes on the doctor card itself',
        'Designed the profile to hold both account settings and health-data connections — Apple Health, device tracking, family members — without turning into a settings dump',
        'Kept one visual language across a marketplace, a medical record and a booking flow, so the bottom tabs read as one app rather than three',
      ],
      stack: ['React Native', 'TypeScript', 'Zustand', 'REST API', 'Apple Health'],
    },
{
      id: 'utas',
      title: 'UTAS',
      type: 'UDEVS',
      year: '2025',
      tagline: 'University site with admissions CRM',
      description:
        'Tashkent University of Applied Sciences, front and back. The public side is a large multilingual content site — eight top-level sections, news, programmes and a Double Degree offer with Lincoln University College. Behind it sits the part applicants never see: an admissions CRM where staff work through the applications the site collects.',
      role: 'Front-end developer — the public site and its multilingual routing, the application form, and the admissions CRM the applications land in.',
      highlights: [
        'Closed the loop between the two halves: an application submitted on the public site arrives in the CRM as a row staff can filter, triage and move through New → Reviewed → Accepted',
        'Built the applications table with status and programme filters, search by name or phone, pagination and Excel export — because admissions staff still need the data in a spreadsheet',
        'Handled a Double Degree model with several study formats (1+1, 2+2, 4+0) across faculties and programmes, so the same form serves quite different paths',
        'Shipped the whole content site in several languages with correct locale metadata, and kept the media-heavy hero fast on mobile connections',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://utas.uz',
    },
{
      id: 'lifecar',
      title: 'Lifecar',
      type: 'Freelance',
      year: '2024 — 2025',
      tagline: 'Auto tuning studio, dark-first',
      description:
        'A site for an auto tuning studio in Tashkent: services, a parts shop and everything a customer needs to actually turn up — opening hours, two phone numbers, Telegram and directions. Dark-first, because that is what the workshop photography and the brand call for, with a light theme available for anyone who prefers it.',
      role: 'Sole developer — the whole thing, from design handoff through hosting, domain and handover to the client.',
      highlights: [
        'Built it dark-first with a working light theme rather than bolting light on later, so neither mode looks like the afterthought',
        'Added Uzbek and Russian across the site, since the customers here are split between the two',
        'Offered directions through both Yandex and Google Maps — in Uzbekistan, sending everyone to Google would lose half the customers',
        'Used skeleton placeholders while content loads, so the page holds its shape instead of jumping as the workshop photography arrives',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n', 'SEO'],
      link: 'https://lifecar.uz',
    },
  ],

  uz: [
{
      id: 'kansler',
      title: 'Kansler.uz',
      type: 'UDEVS',
      year: '2025',
      tagline: 'Kompaniyalar uchun B2B ofis ta’minoti',
      description:
        'Kompaniyalarni ulgurji ofis mahsulotlari bilan ta’minlash — qog‘ozdan mebelgacha, tozalash vositalaridan oziq-ovqatgacha, bitta shartnoma asosida. Bu yerdagi xaridor — oddiy iste’molchi emas, ta’minot menejeri: u butun ofis uchun buyurtma beradi, shartnoma bo‘yicha pul o‘tkazma qiladi va hisob-faktura oladi. Shuning uchun storefront impuls xaridga emas, aynan shu jarayonga qurilgan.',
      role: 'Front-end dasturchi — storefront: bosh sahifa, katalog va kategoriya sahifalari, fasetli filtrlash, mahsulot kartalari, savat va sevimlilar, hamda autentifikatsiya ekranlari.',
      highlights: [
        'Fasetli filtrlash qurdim: narx slideri va uning ikkita raqamli inputi bir-biri bilan sinxron ishlaydi, uzun filtr ro‘yxatlari esa sahifadan oshib ketmasdan “yana ko‘rsatish” ostiga yig‘iladi',
        'Kategoriya daraxti, breadcrumb va filtr holatini URL’dan o‘qiladigan qildim — filtrlangan katalogni hamkasbga havola qilib yuborish mumkin',
        'Mahsulot kartasiga o‘z rasm karuseli va yetkazib beruvchi surat bermagan holat uchun to‘g‘ri bo‘sh holat qo‘shdim — bunday keng katalogda bu tez-tez uchraydi',
        'Savdoni yakunlaydigan B2B shartlarni — shartnoma bo‘yicha to‘lov, Didox orqali hisob-faktura, yetkazib berish chegarasi, biriktirilgan menejer — alohida sahifaga ko‘mib qo‘ymasdan bosh sahifaga chiqardim',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://kansler.uz',
    },
{
      id: 'central-tour',
      title: 'Central Tour',
      type: 'UDEVS',
      year: '2025',
      tagline: 'B2C sayohat bron qilish platformasi',
      description:
        'To‘liq siklli turoperator uchun bron platformasi: aviabiletlar, mehmonxonalar, transferlar va ekskursiyalar — har birining o‘z qidiruvi, natijalari va to‘lov oqimi bilan. Bitta header ostida to‘rtta mahsulot, ustiga sodiqlik darajalari, ballar, saqlangan yo‘lovchilar va ko‘p valyuta: qaytib kelgan mijoz pasport raqamini qaytadan terishi kerak emas.',
      role: 'Front-end dasturchi — to‘rtala yo‘nalish ulanadigan umumiy qidiruv qobig‘i, mehmonxona oqimi (qidiruvdan nomer tanlashgacha) va saqlangan yo‘lovchilar hamda sodiqlik bilan shaxsiy kabinet.',
      highlights: [
        'To‘rtta yo‘nalish ulanadigan bitta qidiruv qobig‘ini qurdim: tablar maydonlarni almashtiradi — aviabilet uchun qayerdan/qayerga, mehmonxona uchun sana va mehmonlar soni — sahifani oyoq ostidan tortib olmasdan',
        'Oddiy formalarni sindiradigan aviabilet holatlarini hal qildim: murakkab marshrut, faqat to‘g‘ridan-to‘g‘ri reyslar, yo‘lovchilar tarkibi va ikkala inputni buzmaydigan qayerdan/qayerga almashtirgichi',
        'Pasport seriyasi, amal qilish muddati, kim berganligi va fuqaroligini bir marta saqlab, to‘lovda qayta ishlatadigan yo‘lovchi profilini qurdim — bronni to‘xtatadigan maydonlarda esa darhol validatsiya',
        'Butun oqim bo‘ylab ko‘p valyuta va ko‘p tilni chiqardim: narx va sanalar qidiruvdan tasdiqlashgacha izchil qoladi',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://centraltour.uz',
    },
{
      id: 'centbed',
      title: 'CentBed',
      type: 'UDEVS',
      year: '2025 — 2026',
      tagline: 'Agentliklar uchun B2B bron tizimi',
      description:
        'Central Tour bilan bir xil sayohat platformasining agentlik tomoni. Bu yerdagi foydalanuvchi — qayta sotuvchi turagent: u depozit balansidan bron qiladi, yetkazib beruvchi narxi ustiga o‘z ustamasini qo‘yadi va bitta kompaniya akkaunti ostida xodimlar hamda subagentlarni boshqaradi. Har bir ekran aniq bo‘lishi shart, chunki agent shu ekrandan mijozga narx aytadi.',
      role: 'Front-end dasturchi — mehmonxona oqimi (qidiruvdan tarif taqqoslash va mehmon ma’lumotlarigacha) va agentlik back office’i.',
      highlights: [
        'Tarif taqqoslashni yonma-yon kartalar shaklida qurdim: bir xil nomer, lekin ovqatlanish, qaytariladigan/qaytarilmaydigan, to‘lov vaqti va narxi har xil — agent to‘rtta sahifa ochmasdan bir qarashda tanlaydi',
        'Bekor qilish shartlarini aniq vaqt chizig‘i sifatida chizdim: shu sanagacha bepul, undan keyin aynan shuncha jarima, vaqtlar GMT bo‘yicha — chunki mijoz agentlikni aynan shu joydan ushlaydi',
        'Ustama qatlamini amalga oshirdim: agentlik yetkazib beruvchi narxi ustiga o‘z marjasini qo‘yadi va ikkala raqamni bir-biri bilan chalkashtirmasdan ko‘radi',
        'Kompaniya akkauntini haqiqiy agentlik tuzilmasi atrofida qurdim: litsenziya va sertifikat yuklash, xodimlar, subagentlar, depozit balansi va sodiqlik darajasi',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
    },
{
      id: 'orimedia',
      title: 'ORI Media',
      type: 'UDEVS',
      year: '2024 — 2025',
      tagline: 'Elektron, audio va bosma kitoblar do‘koni',
      description:
        'O‘zbek bozori uchun kitob platformasi: elektron, audio va bosma kitoblar bitta katalogda. Kitobni butunlay sotib olish, arzonroqqa onlayn o‘qish yoki tinglash mumkin — ya’ni bitta kitob sahifasi bir nechta sotib olish yo‘lini tugmalar devoriga aylanmasdan ko‘rsatishi kerak.',
      role: 'Front-end dasturchi — storefront: bosh sahifa, rukn va qidiruv sahifalari, sotib olish yo‘llari bilan kitob sahifasi, telefon raqami orqali autentifikatsiya va lotin/kirill almashtirgichi.',
      highlights: [
        'Kitob sahifasini shunday qurdimki, sotib olish, onlayn o‘qish va saqlash narxi bilan yonma-yon turadi, ma’lumot va fikrlar esa ustma-ust emas, tab’larga bo‘lingan',
        'Butun interfeys bo‘ylab lotin/kirill almashtirgichini chiqardim — CMS’dan keladigan kontent ham shunga bo‘ysunadi',
        'Telefon raqami bilan kirishni modal qilib qo‘ydim: foydalanuvchi o‘qiyotgan kitobidan boshqa sahifaga uloqtirilmaydi',
        'Bosh sahifadagi karusellar va rukn tasmasini faqat sichqoncha emas, klaviatura va swipe bilan ham boshqarsa bo‘ladigan qildim',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS', 'REST API', 'i18n'],
      link: 'https://orimedia.uz',
    },
{
      id: 'medpay',
      title: 'MEDPAY',
      type: 'UDEVS',
      year: '2025 — 2026',
      tagline: 'Klinika avtomatlashtirish ekotizimi',
      description:
        'Klinikani boshdan-oyoq boshqaradigan ekotizim: bitta tashrifning har bir tomoni uchun alohida ilova. Bemor tahlil va diagnostikani tanlaydi, to‘laydi va natijani oladi; shifokor tayinlov yozadi va tibbiy kartani o‘qiydi; klinika buyurtmalar, xodimlar va hisob-kitobni kuzatadi. Ya’ni bitta buyurtma uch xil ko‘rinishda namoyon bo‘ladi va har bir tomon alohida chop etilgan ilova sifatida chiqadi.',
      role: 'Front-end dasturchi — klinika va shifokor ilovalari, uchala rol quriladigan umumiy komponentlar kutubxonasi va mobil ekranlar.',
      highlights: [
        'Buyurtmani har biri o‘z holatiga ega qatorlar to‘plami sifatida modellashtirdim: buyurtma qisman to‘langan va qisman topshirilgan bo‘lishi mumkin — yagona umumiy status birinchi kundanoq noto‘g‘ri bo‘lardi',
        'Role-based access control’ni komponent darajasigacha tushirdim: har bir rol faqat ruxsat etilganini chizadi va so‘raydi',
        'NX monorepo ichida uchta rol ilovasi uchun bitta umumiy komponentlar kutubxonasini qurdim — do‘konlarda uchta mahsulot, qo‘llab-quvvatlash uchun esa bitta jadval va karta to‘plami',
        'Klinika uchun hisob-kitob ekranini qurdim: kunlar bo‘yicha guruhlangan tranzaksiyalar, kutilayotgan va jamg‘arilgan balans, oxirida kartaga o‘tkazish amali',
      ],
      stack: ['React', 'TypeScript', 'NX Monorepo', 'Redux Toolkit', 'WebSocket', 'RBAC'],
      links: [
        { label: 'medpay.uz', url: 'https://medpay.uz' },
        { label: 'Bemor ilovasi', url: 'https://play.google.com/store/apps/details?id=io.udevs.medpay_patient' },
        { label: 'Shifokor ilovasi', url: 'https://play.google.com/store/apps/details?id=com.udevs.medpaydoctor' },
        { label: 'Klinika ilovasi', url: 'https://play.google.com/store/apps/details?id=com.udevs.medpay.clinic' },
      ],
    },
{
      id: 'hisobim',
      title: 'Hisobim',
      type: 'UDEVS',
      year: '2026',
      tagline: 'Buxgalteriya platformasi: telefon va web',
      description:
        'Biznes uchun buxgalteriya — ham telefonda, ham to‘liq web back office’da: turli banklardagi hisoblar bir joyga yig‘iladi, cash flow, P&L, balans va qarzdorlik. Xuddi shu to‘rtta moliyaviy ko‘rinish ikkala yuzada ham bor: egasi balansni telefondan ko‘radi, buxgalter esa kompyuterda hisob yuritadi.',
      role: 'Front-end dasturchi — ikkala yuzadagi moliyaviy hisobot ko‘rinishlari: cash flow, P&L, balans va qarzdorlik, hamda ular ortidagi grafiklar.',
      highlights: [
        'Pul qoldig‘ini raqamdan javobga aylantirdim: joriy sarflash tezligida taxminan 34 kunlik zaxira, yonida esa oyning prognozi',
        'Debitor va kreditor qarzlarni yosh guruhlari atrofida qurdim — 1–30, 30–90, 90+ kun va muddati o‘tgan ulushi — hamda har bir kontragent bo‘yicha necha kun kechikkani; raqam aynan shundan keyin harakatga aylanadi',
        'Buxgalteriya jadvallarini telefonda ishlaydigan qildim: oylar gorizontal aylanadi va bu haqda aniq ishora bor, hisob kodlari esa har bir qatorga biriktirilgan — raqamlar tekshirib bo‘ladigan holda qoladi',
        'Cash flow, qarz dinamikasi va P&L bo‘ylab bitta grafik tilini saqladim: raqam telefonda ham, back office’da ham bir xil ma’noni bildiradi',
      ],
      stack: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'REST API', 'Virtualised tables'],
    },
{
      id: 'formula',
      title: 'Formula',
      type: 'UDEVS',
      year: '2026',
      tagline: 'Sog‘liq ilovasi + operator admin paneli',
      description:
        'Faqat birga ma’no kasb etadigan ikkita mahsulot. Telefonda: kurslar, ovqatni surat orqali hisobga olish, qadamlar va kunlik vazifalar. Webda: operator buni boshqaradigan panel — retention va voronka analitikasi, obunalar, promokodlar, kurs kontenti va yangi foydalanuvchiga nima ko‘rsatilishini hal qiladigan onboarding so‘rovnomasi uchun drag-and-drop konstruktor.',
      role: 'Front-end dasturchi — admin panel boshdan-oyoq, jumladan analitika ko‘rinishlari va so‘rovnoma konstruktori integratsiyasi, hamda ilova ekranlari.',
      highlights: [
        'Voronkani umumiy son atrofida emas, yo‘qotish nuqtasi atrofida qurdim: kirdi → onboardingdan o‘tdi → raqam qoldirdi → sotib oldi. Operator bitta konversiya foizini emas, qaysi qadam odam yo‘qotayotganini ko‘radi',
        'Faqat chiroyli ko‘rinadigan raqamlarni emas, ketishni oldindan aytadigan metrikalarni chiqardim: 14+ kun kirmaganlar, ketma-ket kunlar seriyasi, o‘rtacha sessiya, qayta to‘lov ulushi',
        'Designer, logic va JSON ko‘rinishlari bilan drag-and-drop so‘rovnoma konstruktorini integratsiya qildim — onboarding savollari reliz kutmasdan o‘zgaradi',
        'Ovqat jurnalini surat skaneriga uladim: kaloriya va makrolar tahrirlanadigan qoralama bo‘lib qaytadi — foydalanuvchi ko‘r-ko‘rona ishonmasdan tasdiqlaydi',
      ],
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'SurveyJS', 'REST API'],
    },
{
      id: 'fotinium',
      title: 'Fotinium',
      type: 'UDEVS',
      year: '2025',
      tagline: 'Shaxsiy sog‘liq ilovasi',
      description:
        'Bir-biriga o‘xshamaydigan bir nechta narsani bitta joyga yig‘adigan sog‘liq ilovasi: vitamin va qo‘shimchalar do‘koni, tahlil tarixi va hujjatlari bilan shaxsiy tibbiy karta, oylik obuna asosida shifokorga yozilish, hamda Apple Health bilan sinxronlanadigan qurilma trekingi. Qiyin joyi bularning bittasi emas — beshta tabni bitta mahsulotdek his qildirishda.',
      role: 'Front-end dasturchi — do‘kon va savat, shifokorga yozilish hamda obuna ekranlari, va sog‘liq ma’lumotlari ulanishlari bilan profil.',
      highlights: [
        'Savatga qo‘shish tugmasini o‘z o‘rnida miqdor stepperiga aylanadigan qildim — miqdorni o‘zgartirish uchun savatga borib qaytish shart emas',
        'Shifokorga yozilishni bir martalik to‘lov emas, oylik obuna asosida qurdim va narxga nima kirishini shifokor kartasining o‘zida ko‘rsatdim',
        'Profilni ham akkaunt sozlamalari, ham sog‘liq ma’lumotlari ulanishlarini — Apple Health, qurilma trekingi, yaqinlar — sozlamalar uyumiga aylanmasdan ushlaydigan qilib qurdim',
        'Do‘kon, tibbiy karta va yozilish oqimi bo‘ylab bitta vizual tilni saqladim — pastdagi tablar uchta emas, bitta ilovadek o‘qiladi',
      ],
      stack: ['React Native', 'TypeScript', 'Zustand', 'REST API', 'Apple Health'],
    },
{
      id: 'utas',
      title: 'UTAS',
      type: 'UDEVS',
      year: '2025',
      tagline: 'Universitet sayti va qabul CRM’i',
      description:
        'Toshkent Amaliy Fanlar Universiteti — old va orqa tomoni bilan. Ochiq tomoni katta ko‘p tilli kontent sayti: sakkizta asosiy bo‘lim, yangiliklar, yo‘nalishlar va Lincoln University College bilan Double Degree dasturi. Ortida esa abituriyent hech qachon ko‘rmaydigan qism turibdi: sayt yig‘gan arizalar bilan xodimlar ishlaydigan qabul CRM’i.',
      role: 'Front-end dasturchi — ochiq sayt va uning ko‘p tilli routingi, ariza formasi hamda arizalar tushadigan qabul CRM’i.',
      highlights: [
        'Ikki yarimni bir-biriga ulab yopdim: saytda topshirilgan ariza CRM’ga qator bo‘lib tushadi, xodim uni filtrlaydi va Yangi → Ko‘rib chiqilgan → Qabul qilingan bosqichlaridan o‘tkazadi',
        'Arizalar jadvalini status va dastur bo‘yicha filtr, ism yoki telefon bo‘yicha qidiruv, sahifalash va Excel eksport bilan qurdim — qabul komissiyasiga ma’lumot baribir jadval ko‘rinishida kerak bo‘ladi',
        'Double Degree modelini bir nechta o‘qish formati (1+1, 2+2, 4+0), fakultet va yo‘nalishlar kesimida ishlaydigan qildim — bitta forma butunlay boshqa yo‘llarga xizmat qiladi',
        'Butun kontent saytini bir necha tilda, to‘g‘ri locale metadata bilan chiqardim va media ko‘p hero’ni mobil internetda ham tez ushlab turdim',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://utas.uz',
    },
{
      id: 'lifecar',
      title: 'Lifecar',
      type: 'Freelance',
      year: '2024 — 2025',
      tagline: 'Avto tuning studiyasi, dark-first',
      description:
        'Toshkentdagi avto tuning studiyasi uchun sayt: xizmatlar, ehtiyot qismlar do‘koni va mijoz haqiqatan yetib kelishi uchun kerak bo‘lgan hamma narsa — ish vaqti, ikkita telefon, Telegram va yo‘l ko‘rsatish. Dark-first, chunki ustaxona fotosuratlari va brend shuni talab qiladi; yorug‘ tema esa xohlaganlar uchun mavjud.',
      role: 'Yagona dasturchi — hammasi: dizayndan hosting, domen va mijozga topshirishgacha.',
      highlights: [
        'Saytni dark-first qilib qurdim va yorug‘ temani keyin ilib qo‘ymadim — ikkala rejim ham keyingi ish bo‘lib ko‘rinmaydi',
        'Butun sayt bo‘ylab o‘zbek va rus tillarini qo‘shdim, chunki bu yerdagi mijozlar ikkiga bo‘lingan',
        'Yo‘l ko‘rsatishni ham Yandex, ham Google Maps orqali berdim — O‘zbekistonda hammani Google’ga yuborish mijozlarning yarmini yo‘qotish demak',
        'Kontent yuklanayotganda skeleton placeholder ishlatdim: ustaxona fotosuratlari kelganda sahifa sakramaydi, shaklini saqlab turadi',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n', 'SEO'],
      link: 'https://lifecar.uz',
    },
  ],

  ru: [
{
      id: 'kansler',
      title: 'Kansler.uz',
      type: 'UDEVS',
      year: '2025',
      tagline: 'B2B снабжение офиса для компаний',
      description:
        'Оптовое снабжение офиса — от бумаги и мебели до бытовой химии и продуктов, одним договором. Покупатель здесь не розничный клиент, а снабженец: он заказывает на весь офис, платит перечислением по договору и ждёт счёт-фактуру. Витрина построена вокруг этого сценария, а не вокруг импульсной покупки.',
      role: 'Front-end разработчик — витрина: главная, каталог и страницы категорий, фасетная фильтрация, карточки товаров, корзина и избранное, экраны авторизации.',
      highlights: [
        'Сделал фасетную фильтрацию, где ползунок цены и два числовых поля остаются синхронными, а длинные списки фасетов сворачиваются под «показать ещё», а не уезжают за пределы страницы',
        'Вынес дерево категорий, хлебные крошки и состояние фильтров в URL — отфильтрованный каталог можно отправить коллеге ссылкой',
        'Собрал карточку товара с собственной каруселью изображений и корректным пустым состоянием, когда поставщик не прислал фото — в таком широком каталоге это обычное дело',
        'Вывел B2B-условия, которые закрывают сделку — оплата по договору, счёт-фактура через Didox, порог бесплатной доставки, персональный менеджер — на главную, а не в отдельную страницу с условиями',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://kansler.uz',
    },
{
      id: 'central-tour',
      title: 'Central Tour',
      type: 'UDEVS',
      year: '2025',
      tagline: 'B2C платформа бронирования путешествий',
      description:
        'Платформа бронирования для туроператора полного цикла: авиабилеты, отели, трансферы и экскурсии, у каждого свой поиск, выдача и оформление. Четыре продукта под одной шапкой, плюс уровни лояльности, баллы, сохранённые пассажиры и мультивалютность — вернувшийся клиент не должен заново вбивать номер паспорта.',
      role: 'Front-end разработчик — общая оболочка поиска для всех четырёх вертикалей, отельный флоу от поиска до выбора номера и личный кабинет с пассажирами и лояльностью.',
      highlights: [
        'Собрал одну оболочку поиска, в которую подключаются четыре вертикали: вкладки меняют поля — откуда и куда для перелётов, даты и состав гостей для отелей — не выдёргивая страницу из-под пользователя',
        'Закрыл случаи перелётов, на которых ломаются наивные формы: сложный маршрут, только прямые рейсы, состав пассажиров и свап откуда/куда, сохраняющий оба поля валидными',
        'Сделал профиль пассажира, который один раз сохраняет серию и срок паспорта, кем выдан и гражданство и переиспользует их при оформлении, с валидацией на полях, блокирующих бронь',
        'Выпустил мультивалютность и мультиязычность на весь флоу: цены и даты остаются согласованными от поиска до подтверждения',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://centraltour.uz',
    },
{
      id: 'centbed',
      title: 'CentBed',
      type: 'UDEVS',
      year: '2025 — 2026',
      tagline: 'B2B система бронирования для агентств',
      description:
        'Агентская половина той же travel-платформы, что и Central Tour. Здесь пользователь — турагент, который перепродаёт: он бронирует с депозитного баланса, ставит свою наценку поверх тарифа поставщика и ведёт сотрудников и субагентов под одним аккаунтом компании. Каждый экран должен быть точным — агент называет по нему цену клиенту.',
      role: 'Front-end разработчик — отельный флоу от поиска через сравнение тарифов до данных гостей, и агентский бэк-офис.',
      highlights: [
        'Сделал сравнение тарифов карточками бок о бок: один номер, но разное питание, возвратность, момент оплаты и цена — агент выбирает с одного взгляда, а не открывая четыре страницы',
        'Отрисовал правила отмены явным таймлайном: до этой даты бесплатно, после — вот такой точный штраф, время по GMT, потому что именно за это клиент спросит с агентства',
        'Реализовал слой наценки: агентство ставит свою маржу поверх тарифа поставщика и видит обе цифры, не путая одну с другой',
        'Собрал аккаунт компании вокруг реальной структуры агентства: загрузка лицензии и сертификата, сотрудники, субагенты, депозитный баланс и уровень лояльности',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
    },
{
      id: 'orimedia',
      title: 'ORI Media',
      type: 'UDEVS',
      year: '2024 — 2025',
      tagline: 'Магазин электронных, аудио- и печатных книг',
      description:
        'Читательская платформа для узбекского рынка: электронные, аудио- и печатные книги в одном каталоге. Книгу можно купить целиком, прочитать онлайн дешевле или послушать — значит, одна страница книги должна показать несколько сценариев покупки, не превращаясь в стену кнопок.',
      role: 'Front-end разработчик — витрина: главная, страницы рубрик и поиска, страница книги со сценариями покупки, вход по номеру телефона и переключатель латиница/кириллица.',
      highlights: [
        'Собрал страницу книги так, что купить, читать онлайн и сохранить стоят рядом с ценами, а описание и отзывы разведены по вкладкам, а не свалены в столбик',
        'Выпустил переключатель узбекской латиницы и кириллицы на весь интерфейс, включая контент из CMS',
        'Реализовал вход по номеру телефона как модальное окно: пользователь остаётся на той книге, которую смотрел',
        'Сделал карусели на главной и ленту рубрик доступными с клавиатуры и свайпом, а не только мышью',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS', 'REST API', 'i18n'],
      link: 'https://orimedia.uz',
    },
{
      id: 'medpay',
      title: 'MEDPAY',
      type: 'UDEVS',
      year: '2025 — 2026',
      tagline: 'Экосистема автоматизации клиники',
      description:
        'Экосистема, которая ведёт клинику целиком: под каждую сторону одного визита — своё приложение. Пациент выбирает анализы и диагностику, оплачивает и получает результат; врач выписывает назначения и читает медкарту; клиника следит за заказами, персоналом и взаиморасчётами. Один заказ виден тремя разными способами, и каждая сторона выходит отдельным опубликованным приложением.',
      role: 'Front-end разработчик — приложения клиники и врача, общая библиотека компонентов, на которой собраны все три роли, и мобильные экраны.',
      highlights: [
        'Смоделировал заказ как набор позиций со своими статусами: заказ может быть частично оплачен и частично выдан — единый статус на весь заказ был бы ошибкой с первого дня',
        'Довёл role-based access control до уровня компонента: каждая роль рендерит и запрашивает только разрешённое',
        'Собрал одну библиотеку компонентов на три ролевых приложения в NX-монорепозитории — три продукта в сторах, но один набор таблиц и карточек в поддержке',
        'Сделал экран взаиморасчётов клиники: реестр транзакций по дням, балансы «в ожидании» и «накоплено» и вывод на карту',
      ],
      stack: ['React', 'TypeScript', 'NX Monorepo', 'Redux Toolkit', 'WebSocket', 'RBAC'],
      links: [
        { label: 'medpay.uz', url: 'https://medpay.uz' },
        { label: 'Приложение пациента', url: 'https://play.google.com/store/apps/details?id=io.udevs.medpay_patient' },
        { label: 'Приложение врача', url: 'https://play.google.com/store/apps/details?id=com.udevs.medpaydoctor' },
        { label: 'Приложение клиники', url: 'https://play.google.com/store/apps/details?id=com.udevs.medpay.clinic' },
      ],
    },
{
      id: 'hisobim',
      title: 'Hisobim',
      type: 'UDEVS',
      year: '2026',
      tagline: 'Бухгалтерия на телефоне и в вебе',
      description:
        'Учёт для бизнеса сразу на двух поверхностях: телефон и полноценный веб-бэкофис. Счета из разных банков собраны в одном месте, дальше — cash flow, P&L, баланс и задолженность. Одни и те же четыре финансовых разреза есть и там, и там: владелец смотрит остаток с телефона, бухгалтер ведёт учёт за компьютером.',
      role: 'Front-end разработчик — финансовые отчётные представления на обеих поверхностях: cash flow, P&L, баланс и задолженность, вместе с графиками под ними.',
      highlights: [
        'Превратил остаток денег в ответ, а не в цифру: при текущем темпе расходов хватит примерно на 34 дня, рядом — прогноз на месяц',
        'Построил дебиторку и кредиторку вокруг корзин просрочки — 1–30, 30–90, 90+ дней и доля просроченного — и дней просрочки по каждому контрагенту: именно после этого цифра превращается в действие',
        'Заставил бухгалтерские таблицы работать на телефоне: месяцы прокручиваются вбок с явной подсказкой, а коды счетов остаются при каждой строке, чтобы цифры оставались проверяемыми',
        'Удержал единый язык графиков в cash flow, динамике задолженности и P&L: цифра означает одно и то же и в телефоне, и в бэкофисе',
      ],
      stack: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'REST API', 'Virtualised tables'],
    },
{
      id: 'formula',
      title: 'Formula',
      type: 'UDEVS',
      year: '2026',
      tagline: 'Приложение о здоровье + админка оператора',
      description:
        'Два продукта, которые имеют смысл только вместе. В телефоне: курсы, учёт питания по фото, шаги и дневные цели. В вебе: панель, из которой оператор всем этим управляет — аналитика удержания и воронки, подписки, промокоды, контент курсов и drag-and-drop конструктор онбординг-опроса, от которого зависит, что увидит новый пользователь.',
      role: 'Front-end разработчик — админ-панель целиком, включая аналитику и интеграцию конструктора опросов, плюс экраны приложения.',
      highlights: [
        'Построил воронку вокруг точки отвала, а не вокруг итогов: зашли → прошли онбординг → оставили номер → купили. Оператор видит, какой шаг теряет людей, а не одну цифру конверсии',
        'Вывел метрики, предсказывающие отток — не открывали 14+ дней, длина серии, средняя сессия, доля повторных оплат — а не только те, что хорошо выглядят',
        'Интегрировал drag-and-drop конструктор опросов с режимами Designer, Logic и JSON: вопросы онбординга меняются без релиза',
        'Связал дневник питания со сканированием по фото: калории и БЖУ возвращаются черновиком, который пользователь подтверждает, а не принимает вслепую',
      ],
      stack: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'SurveyJS', 'REST API'],
    },
{
      id: 'fotinium',
      title: 'Fotinium',
      type: 'UDEVS',
      year: '2025',
      tagline: 'Приложение для здоровья',
      description:
        'Приложение, которое собирает в одном месте несколько несвязанных вещей: магазин добавок, личную медкарту с историей анализов и документами, запись к врачу по месячной подписке и трекинг носимых устройств с синхронизацией через Apple Health. Сложность не в каждой из них по отдельности, а в том, чтобы пять вкладок ощущались одним продуктом.',
      role: 'Front-end разработчик — магазин и корзина, экраны записи к врачу и подписки, профиль с подключениями данных о здоровье.',
      highlights: [
        'Сделал кнопку добавления в корзину превращающейся в счётчик количества на месте — чтобы менять заказ, не нужно уходить в корзину и обратно',
        'Построил запись к врачу вокруг месячной подписки, а не разового платежа, и вынес состав подписки прямо на карточку врача',
        'Спроектировал профиль так, чтобы он держал и настройки аккаунта, и подключения данных о здоровье — Apple Health, трекинг устройства, близкие — не превращаясь в свалку настроек',
        'Удержал единый визуальный язык через магазин, медкарту и запись, чтобы нижние вкладки читались как одно приложение, а не три',
      ],
      stack: ['React Native', 'TypeScript', 'Zustand', 'REST API', 'Apple Health'],
    },
{
      id: 'utas',
      title: 'UTAS',
      type: 'UDEVS',
      year: '2025',
      tagline: 'Сайт университета и CRM приёмной комиссии',
      description:
        'Ташкентский университет прикладных наук — с обеих сторон. Публичная часть — большой многоязычный контент-сайт: восемь основных разделов, новости, программы и Double Degree с Lincoln University College. За ней то, чего абитуриент не видит: CRM приёмной комиссии, куда попадают собранные сайтом заявки.',
      role: 'Front-end разработчик — публичный сайт и его многоязычная маршрутизация, форма заявки и CRM, в которую эти заявки приходят.',
      highlights: [
        'Замкнул обе половины: заявка, отправленная на сайте, приходит в CRM строкой, которую сотрудник фильтрует и проводит по статусам Новая → Рассмотрена → Принята',
        'Собрал таблицу заявок с фильтрами по статусу и программе, поиском по ФИО и телефону, пагинацией и экспортом в Excel — приёмной комиссии данные всё равно нужны таблицей',
        'Реализовал модель Double Degree с несколькими форматами обучения (1+1, 2+2, 4+0) в разрезе факультетов и программ: одна форма обслуживает совсем разные траектории',
        'Выпустил весь контент-сайт на нескольких языках с корректными locale-метаданными и удержал тяжёлый по медиа hero быстрым на мобильном интернете',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'i18n'],
      link: 'https://utas.uz',
    },
{
      id: 'lifecar',
      title: 'Lifecar',
      type: 'Freelance',
      year: '2024 — 2025',
      tagline: 'Студия авто-тюнинга, dark-first',
      description:
        'Сайт студии авто-тюнинга в Ташкенте: услуги, магазин запчастей и всё, что нужно клиенту, чтобы реально доехать — часы работы, два телефона, Telegram и маршрут. Dark-first, потому что этого требуют съёмка цеха и сам бренд; светлая тема есть для тех, кто её предпочитает.',
      role: 'Единственный разработчик — всё целиком: от передачи дизайна до хостинга, домена и сдачи заказчику.',
      highlights: [
        'Собрал сайт dark-first и сделал рабочую светлую тему сразу, а не прикрутил потом — ни один из режимов не выглядит доработкой',
        'Добавил узбекский и русский на весь сайт: клиенты здесь делятся между двумя языками',
        'Дал маршрут и через Яндекс, и через Google Maps — в Узбекистане отправить всех в Google значит потерять половину клиентов',
        'Использовал skeleton-заглушки на время загрузки, чтобы страница держала форму и не прыгала, пока подгружается съёмка цеха',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n', 'SEO'],
      link: 'https://lifecar.uz',
    },
  ],
};

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },

    hero: {
      greeting: 'Front-End Developer · Tashkent',
      role: 'Front-End Developer',
      availability: 'Open to new opportunities',
      intro:
        'I build production web applications with React and Next.js — from admin and CRM dashboards to client-facing products used by 50,000+ people.',
      ctaWork: 'See selected work',
      ctaContact: 'Get in touch',
      scroll: 'Scroll',
    },

    about: {
      title: 'About',
      label: 'Who I am',
      body: [
        'I am a front-end developer based in Tashkent, taking features from design handoff all the way to production. My work centers on building reliable web and mobile applications, including EcoChain — a recycling platform integrating smart RVMs (reverse vending machines), AI scanning, and hardware interfaces.',
        'I specialize in the core architectural side of the front end: role-based access control, multi-app monorepos, and business logic that requires precision from day one. Using React, Next.js, React Native (Expo), and Tailwind CSS, I focus on building resilient component APIs, handling complex state cleanly before QA, and ensuring responsive, fast performance on mid-range devices.',
        'Currently freelancing and building custom web, mobile, and IoT-integrated solutions, I bring a structured approach to modular development — whether working independently on full-cycle products or collaborating within engineering teams using Git Flow and systematic code reviews.',
      ],
      statLabels: {
        experience: 'Years in production',
        projects: 'Platforms shipped',
        users: 'People reached',
        team: 'Developers alongside',
      },
    },

    skills: {
      title: 'Skills',
      label: 'What I work with',
      note: 'Grouped by what I reach for day to day, not by what looks longest on a CV.',
    },

    experience: {
      title: 'Experience',
      label: 'Where I have worked',
      current: 'Current',
      items: [
        {
          company: 'Freelance',
          period: 'Aug 2025 — Present',
          location: 'Tashkent, Uzbekistan',
          role: 'Front-End & Mobile Developer',
          active: true,
          summary:
            'Building web platforms, mobile apps and IoT-integrated solutions for startups and local businesses.',
          bullets: [
            'Building high-performance SPAs and web apps using React, Next.js, Tailwind CSS and Python (NiceGUI)',
            'Crafting cross-platform mobile interfaces with React Native (Expo) and managing cloud backend logic via Firebase (Auth, Firestore, Security Rules)',
            'Structuring monorepo architectures and scalable component libraries to share UI tokens and logic across admin panels and user-facing apps',
            'Integrating microcontrollers (Raspberry Pi, Radxa, Arduino) with web-based monitoring dashboards and hardware display interfaces',
            'Leveraging AI tools for code scaffolding, rapid prototyping and component architecture without compromising code maintainability and security',
          ],
        },
        {
          company: 'EcoChain',
          tag: 'Co-Founder',
          period: 'Aug 2025 — Present',
          location: 'Tashkent, Uzbekistan',
          role: 'Front-End & Mobile Developer',
          active: true,
          summary:
            'Architecting and building EcoChain — Uzbekistan’s first AI and blockchain-driven Reverse Vending Machine (RVM) recycling ecosystem — alongside contract projects for local clients.',
          bullets: [
            'Developed the end-to-end web and mobile applications powering the EcoChain infrastructure, managing full lifecycle features from initial UI design through to release',
            'Designed interactive front-end and kiosk interfaces using React, Next.js, and Tailwind CSS for 55-inch RVM displays deployed at Inno Technopark',
            'Integrated web and mobile front-ends with Python/YOLOv8 computer vision models to provide real-time, 3-second bottle evaluation and feedback to users',
            'Built mobile flows in React Native (Expo) tracking plastic deposits, instant wallet credits in UEC stablecoins, and token redemptions for partner stores and bank payouts',
            'Implemented web interfaces to record immutable blockchain transaction logs (timestamp, location, plastic weight, grade) ensuring anti-fraud verification',
            'Structured administrative dashboards and corporate client portals for tracking Extended Producer Responsibility (EPR) compliance and NFT certificate issuing',
            'Configured Firebase Auth, Firestore real-time databases, and security rules to secure user account data, transaction history, and payout requests',
            'Optimized asset rendering and hardware display performance to maintain smooth interaction frame rates on embedded single-board display setups',
          ],
        },
      ],
    },

    education: {
      title: 'Education',
      label: 'How I got here',
      items: [
        {
          school: 'Najot Ta’lim',
          program: 'Front-End Development',
          period: '2024 — 2025',
          description:
            'Intensive front-end programme built around React and modern JavaScript, with production-style projects and regular code review.',
        },
        {
          school: 'Geeks',
          program: 'Back-End Development',
          period: '2024 — 2025',
          description:
            'Intensive back-end programme covering server-side architecture, APIs, and databases, with production-style projects and regular code review.',
        },
        {
          school: 'My School',
          program: 'English Language',
          period: '2023 — 2024',
          description:
            'English for professional communication — enough to work comfortably with international teams and English-only documentation.',
        },
      ],
      languagesTitle: 'Languages',
      native: 'Native',
      professional: 'Professional',
      intermediate: 'Intermediate',
      cefrNote: 'Levels follow the CEFR scale.',
    },

    projects: {
      title: 'Selected Work',
      label: 'What I have built',
      note: 'Ten platforms across healthcare, finance, publishing, travel, education and retail. Company work is credited to Udevs; the rest is mine end to end.',
      viewSite: 'Visit site',
      role: 'My role',
      stack: 'Stack',
      impact: 'What shipped',
      private: 'Private — available on request',
      caseStudy: 'Case study',
      closeCase: 'Close case study',
      shotAlt: 'screenshot',
      desktop: 'desktop',
      mobile: 'mobile',
      prevShot: 'Previous screenshot',
      nextShot: 'Next screenshot',
      gallery: 'Screenshots',
    },

    contact: {
      title: 'Contact',
      label: 'Let us talk',
      heading: 'Have a role or a project in mind?',
      body:
        'I read every message. If you are hiring for a front-end role, or need someone to take a product from design to production, send me a line.',
      emailCta: 'Send me an email',
      location: 'Zangiota, Tashkent Region · Open to hybrid and remote',
      responseTime: 'Usually replies within a day',
    },

    common: {
      connect: 'Connect',
      menu: 'Menu',
      close: 'Close',
      downloadResume: 'Download CV',
      backToTop: 'Back to top',
      skipToContent: 'Skip to content',
      toggleTheme: 'Toggle theme',
      rights: 'All rights reserved.',
      builtWith: 'Built with React, TypeScript and Tailwind CSS.',
    },
  },

  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      skills: 'Ko‘nikmalar',
      experience: 'Tajriba',
      projects: 'Loyihalar',
      education: 'Ta’lim',
      contact: 'Bog‘lanish',
    },

    hero: {
      greeting: 'Front-End Dasturchi · Toshkent',
      role: 'Front-End Dasturchi',
      availability: 'Yangi imkoniyatlarga ochiqman',
      intro:
        'React va Next.js bilan production darajasidagi veb-ilovalar quraman — admin va CRM panellardan tortib 50 000+ odam foydalanadigan mahsulotlargacha.',
      ctaWork: 'Loyihalarni ko‘rish',
      ctaContact: 'Bog‘lanish',
      scroll: 'Pastga',
    },

    about: {
      title: 'Men haqimda',
      label: 'Kimman',
      body: [
        'Toshkentda yashovchi front-end dasturchiman. Funksiyalarni dizayndan production’gacha olib boraman. Ishim ishonchli veb va mobil ilovalar qurish atrofida, jumladan EcoChain — aqlli RVM (qayta ishlash avtomatlari), AI skanerlash va apparat interfeyslarini birlashtirgan qayta ishlash platformasi.',
        'Front-end’ning arxitektura tomoniga ixtisoslashganman: role-based access control, ko‘p ilovali monorepo’lar va birinchi kundan aniq bo‘lishi kerak bo‘lgan biznes logika. React, Next.js, React Native (Expo) va Tailwind CSS bilan chidamli komponent API’lari, QA’dan oldin toza holat boshqaruvi va o‘rta darajadagi qurilmalarda tez, moslashuvchan ishlashga e’tibor beraman.',
        'Hozir frilanser sifatida maxsus veb, mobil va IoT yechimlarini quraman. Modulli ishlab chiqishga tizimli yondashaman — to‘liq siklli mahsulotni mustaqil olib borsam ham, Git Flow va muntazam code review bilan muhandislik jamoasida ishlasam ham.',
      ],
      statLabels: {
        experience: 'Yil production tajriba',
        projects: 'Topshirilgan platforma',
        users: 'Foydalanuvchi',
        team: 'Dasturchi bilan birga',
      },
    },

    skills: {
      title: 'Ko‘nikmalar',
      label: 'Nima bilan ishlayman',
      note: 'CV’da uzun ko‘rinishi uchun emas, kundalik ishda haqiqatan ishlatadiganlarim bo‘yicha guruhlangan.',
    },

    experience: {
      title: 'Ish tajribasi',
      label: 'Qayerda ishlaganman',
      current: 'Hozir',
      items: [
        {
          company: 'Freelance',
          period: 'Avgust 2025 — Hozir',
          location: 'Toshkent, O‘zbekiston',
          role: 'Front-End va mobil dasturchi',
          active: true,
          summary:
            'Startaplar va mahalliy bizneslar uchun veb-platformalar, mobil ilovalar va IoT yechimlarini quraman.',
          bullets: [
            'React, Next.js, Tailwind CSS va Python (NiceGUI) bilan yuqori unumli SPA va veb-ilovalar quraman',
            'React Native (Expo) bilan kross-platforma mobil interfeyslar yasayman va Firebase (Auth, Firestore, Security Rules) orqali bulutdagi backend mantiqini boshqaraman',
            'Admin panellar va foydalanuvchi ilovalari o‘rtasida UI tokenlar va mantiqni ulashish uchun monorepo arxitekturasi va kengaytiriladigan komponent kutubxonalarini tuzaman',
            'Mikrokontrollerlarni (Raspberry Pi, Radxa, Arduino) veb-monitoring panellari va apparat displey interfeyslari bilan integratsiya qilaman',
            'AI vositalaridan kod skeleti, tezkor prototip va komponent arxitekturasi uchun foydalanaman — kodning qo‘llab-quvvatlanishi va xavfsizligini saqlagan holda',
          ],
        },
        {
          company: 'EcoChain',
          tag: 'Hammuassis',
          period: 'Avgust 2025 — Hozir',
          location: 'Toshkent, O‘zbekiston',
          role: 'Front-End va mobil dasturchi',
          active: true,
          summary:
            'EcoChain’ni — O‘zbekistondagi birinchi AI va blokcheynga asoslangan Reverse Vending Machine (RVM) qayta ishlash ekotizimini — loyihalashtiraman va quraman, shu bilan birga mahalliy mijozlar uchun shartnoma loyihalarini ham olib boraman.',
          bullets: [
            'EcoChain infratuzilmasini quvvatlaydigan veb va mobil ilovalarni boshidan oxirigacha ishlab chiqdim: UI dizayndan relizgacha to‘liq hayotiy sikl',
            'Inno Technoparkda o‘rnatilgan 55 dyuymli RVM displeylari uchun React, Next.js va Tailwind CSS’da interaktiv front-end va kiosk interfeyslarini loyihaladim',
            'Veb va mobil front-end’larni Python/YOLOv8 kompyuter ko‘rish modellari bilan bog‘ladim — foydalanuvchi 3 soniyada shisha bahosi va javobini oladi',
            'React Native (Expo) da plastik topshirish, UEC steyblkoinlarida darhol hamyon krediti va hamkor do‘konlar hamda bank to‘lovlari uchun token ayirboshlash oqimlarini qurdim',
            'O‘zgarmas blokcheyn tranzaksiya jurnallarini (vaqt, joy, plastik og‘irligi, daraja) yozadigan veb interfeyslarni qildim — firibgarlikka qarshi tekshiruv uchun',
            'EPR muvofiqligi va NFT sertifikatlarini kuzatish uchun admin panellar va korporativ mijoz portallarini tuzdim',
            'Firebase Auth, Firestore real-vaqt bazasi va security rules orqali akkaunt, tranzaksiya tarixi va to‘lov so‘rovlarini himoya qildim',
            'Bir platadagi displeylarda silliq kadr chastotasini ushlab turish uchun asset render va apparat displey unumdorligini optimallashtirdim',
          ],
        },
      ],
    },

    education: {
      title: 'Ta’lim',
      label: 'Qanday keldim',
      items: [
        {
          school: 'Najot Ta’lim',
          program: 'Front-End Development',
          period: '2024 — 2025',
          description:
            'React va zamonaviy JavaScript asosidagi intensiv front-end kursi: production uslubidagi loyihalar va muntazam code review.',
        },
        {
          school: 'Geeks',
          program: 'Back-End Development',
          period: '2024 — 2025',
          description:
            'Server arxitekturasi, API va ma’lumotlar bazalariga qurilgan intensiv back-end kursi: production uslubidagi loyihalar va muntazam code review.',
        },
        {
          school: 'My School',
          program: 'Ingliz tili',
          period: '2023 — 2024',
          description:
            'Professional muloqot uchun ingliz tili — xalqaro jamoalar va ingliz tilidagi hujjatlar bilan bemalol ishlash darajasida.',
        },
      ],
      languagesTitle: 'Tillar',
      native: 'Ona tili',
      professional: 'Professional',
      intermediate: 'O‘rtacha',
      cefrNote: 'Darajalar CEFR shkalasi bo‘yicha.',
    },

    projects: {
      title: 'Tanlangan ishlar',
      label: 'Nima qurganman',
      note: 'Tibbiyot, moliya, nashriyot, sayohat, ta’lim va savdo sohalarida o‘nta platforma. Kompaniya loyihalari Udevs nomida; qolgani boshdan-oyoq meniki.',
      viewSite: 'Saytga o‘tish',
      role: 'Mening rolim',
      stack: 'Texnologiyalar',
      impact: 'Nima qilingan',
      private: 'Yopiq — so‘rov bo‘yicha',
      caseStudy: 'Batafsil',
      closeCase: 'Yopish',
      shotAlt: 'skrinshot',
      desktop: 'desktop',
      mobile: 'mobil',
      prevShot: 'Oldingi skrinshot',
      nextShot: 'Keyingi skrinshot',
      gallery: 'Skrinshotlar',
    },

    contact: {
      title: 'Bog‘lanish',
      label: 'Gaplashamiz',
      heading: 'Vakansiya yoki loyihangiz bormi?',
      body:
        'Har bir xabarni o‘qiyman. Front-end pozitsiyaga odam qidirayotgan bo‘lsangiz yoki mahsulotni dizayndan production’gacha olib boradigan dasturchi kerak bo‘lsa — yozing.',
      emailCta: 'Email yuborish',
      location: 'Zangiota, Toshkent viloyati · Gibrid va masofaviy ishga ochiq',
      responseTime: 'Odatda bir kun ichida javob beraman',
    },

    common: {
      connect: 'Bog‘lanish',
      menu: 'Menyu',
      close: 'Yopish',
      downloadResume: 'CV yuklab olish',
      backToTop: 'Yuqoriga',
      skipToContent: 'Kontentga o‘tish',
      toggleTheme: 'Mavzuni almashtirish',
      rights: 'Barcha huquqlar himoyalangan.',
      builtWith: 'React, TypeScript va Tailwind CSS bilan qurilgan.',
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      experience: 'Опыт',
      projects: 'Проекты',
      education: 'Образование',
      contact: 'Контакты',
    },

    hero: {
      greeting: 'Front-End разработчик · Ташкент',
      role: 'Front-End Разработчик',
      availability: 'Открыт к новым предложениям',
      intro:
        'Разрабатываю production веб-приложения на React и Next.js — от админок и CRM до продуктов, которыми пользуются 50 000+ человек.',
      ctaWork: 'Посмотреть работы',
      ctaContact: 'Связаться',
      scroll: 'Вниз',
    },

    about: {
      title: 'Обо мне',
      label: 'Кто я',
      body: [
        'Я front-end разработчик в Ташкенте. Веду функциональность от передачи дизайна до продакшена. В центре моей работы — надёжные веб- и мобильные приложения, включая EcoChain: платформу переработки, которая объединяет умные RVM (фандоматы), AI-сканирование и аппаратные интерфейсы.',
        'Я специализируюсь на архитектурной стороне фронтенда: role-based access control, мульти-приложенческие монорепозитории и бизнес-логика, которой нужна точность с первого дня. На React, Next.js, React Native (Expo) и Tailwind CSS я строю устойчивые API компонентов, закрываю сложное состояние до QA и держу интерфейс быстрым на устройствах среднего уровня.',
        'Сейчас я на фрилансе и делаю веб, мобильные и IoT-решения. К модульной разработке подхожу системно — и когда веду продукт целиком сам, и когда работаю в инженерной команде с Git Flow и регулярным code review.',
      ],
      statLabels: {
        experience: 'Года в продакшене',
        projects: 'Платформ выпущено',
        users: 'Пользователей',
        team: 'Разработчиков рядом',
      },
    },

    skills: {
      title: 'Навыки',
      label: 'С чем работаю',
      note: 'Сгруппировано по тому, что реально использую каждый день, а не по длине списка в резюме.',
    },

    experience: {
      title: 'Опыт работы',
      label: 'Где я работал',
      current: 'Сейчас',
      items: [
        {
          company: 'Freelance',
          period: 'Август 2025 — настоящее время',
          location: 'Ташкент, Узбекистан',
          role: 'Front-End и мобильный разработчик',
          active: true,
          summary:
            'Разрабатываю веб-платформы, мобильные приложения и IoT-решения для стартапов и местного бизнеса.',
          bullets: [
            'Собираю быстрые SPA и веб-приложения на React, Next.js, Tailwind CSS и Python (NiceGUI)',
            'Делаю кроссплатформенные мобильные интерфейсы на React Native (Expo) и веду облачную логику на Firebase (Auth, Firestore, Security Rules)',
            'Строю монорепозитории и масштабируемые библиотеки компонентов, чтобы общие UI-токены и логика работали и в админках, и в пользовательских приложениях',
            'Интегрирую микроконтроллеры (Raspberry Pi, Radxa, Arduino) с веб-дашбордами мониторинга и интерфейсами аппаратных дисплеев',
            'Использую AI-инструменты для каркаса кода, быстрых прототипов и архитектуры компонентов, не жертвуя поддерживаемостью и безопасностью',
          ],
        },
        {
          company: 'EcoChain',
          tag: 'Сооснователь',
          period: 'Август 2025 — настоящее время',
          location: 'Ташкент, Узбекистан',
          role: 'Front-End и мобильный разработчик',
          active: true,
          summary:
            'Проектирую и разрабатываю EcoChain — первую в Узбекистане экосистему переработки на базе AI и блокчейна с Reverse Vending Machine (RVM) — параллельно с контрактными проектами для местных клиентов.',
          bullets: [
            'Собрал веб- и мобильные приложения EcoChain целиком: от первого UI до релиза',
            'Спроектировал интерактивные фронтенд- и киоск-интерфейсы на React, Next.js и Tailwind CSS для 55-дюймовых дисплеев RVM в Inno Technopark',
            'Связал веб и мобильный фронтенд с моделями компьютерного зрения Python/YOLOv8: оценка бутылки и ответ пользователю за 3 секунды',
            'Сделал мобильные сценарии на React Native (Expo): учёт сданного пластика, мгновенное зачисление UEC стейблкоинов на кошелёк и обмен токенов в магазинах-партнёрах и на банковские выплаты',
            'Сделал веб-интерфейсы неизменяемых блокчейн-логов транзакций (время, место, вес и сорт пластика) для антифрод-проверки',
            'Собрал админ-панели и порталы корпоративных клиентов для учёта EPR и выпуска NFT-сертификатов',
            'Настроил Firebase Auth, Firestore и security rules для аккаунтов, истории транзакций и заявок на выплаты',
            'Оптимизировал отрисовку и работу аппаратных дисплеев, чтобы кадр оставался плавным на встроенных одноплатных экранах',
          ],
        },
      ],
    },

    education: {
      title: 'Образование',
      label: 'Как я сюда пришёл',
      items: [
        {
          school: 'Najot Ta’lim',
          program: 'Front-End Development',
          period: '2024 — 2025',
          description:
            'Интенсивная front-end программа на базе React и современного JavaScript: проекты в продакшен-стиле и регулярный code review.',
        },
        {
          school: 'Geeks',
          program: 'Back-End Development',
          period: '2024 — 2025',
          description:
            'Интенсивная back-end программа: серверная архитектура, API и базы данных, проекты в продакшен-стиле и регулярный code review.',
        },
        {
          school: 'My School',
          program: 'Английский язык',
          period: '2023 — 2024',
          description:
            'Английский для профессиональной коммуникации — достаточно, чтобы свободно работать с международными командами и документацией.',
        },
      ],
      languagesTitle: 'Языки',
      native: 'Родной',
      professional: 'Профессиональный',
      intermediate: 'Средний',
      cefrNote: 'Уровни по шкале CEFR.',
    },

    projects: {
      title: 'Избранные работы',
      label: 'Что я построил',
      note: 'Десять платформ в медицине, финансах, издательском деле, туризме, образовании и ритейле. Командные проекты — за Udevs, остальное сделано мной от и до.',
      viewSite: 'Открыть сайт',
      role: 'Моя роль',
      stack: 'Стек',
      impact: 'Что сделано',
      private: 'Закрытый — по запросу',
      caseStudy: 'Подробнее',
      closeCase: 'Закрыть',
      shotAlt: 'скриншот',
      desktop: 'десктоп',
      mobile: 'мобильный',
      prevShot: 'Предыдущий скриншот',
      nextShot: 'Следующий скриншот',
      gallery: 'Скриншоты',
    },

    contact: {
      title: 'Контакты',
      label: 'Давайте поговорим',
      heading: 'Есть вакансия или проект?',
      body:
        'Читаю каждое сообщение. Если ищете front-end разработчика или нужен человек, который доведёт продукт от дизайна до продакшена — напишите.',
      emailCta: 'Написать на почту',
      location: 'Зангиата, Ташкентская область · Готов к гибриду и удалёнке',
      responseTime: 'Обычно отвечаю в течение дня',
    },

    common: {
      connect: 'Контакты',
      menu: 'Меню',
      close: 'Закрыть',
      downloadResume: 'Скачать резюме',
      backToTop: 'Наверх',
      skipToContent: 'Перейти к содержимому',
      toggleTheme: 'Сменить тему',
      rights: 'Все права защищены.',
      builtWith: 'Сделано на React, TypeScript и Tailwind CSS.',
    },
  },
};

/** name → CEFR level + bar width, shared across locales. */
export const SPOKEN_LANGUAGES = [
  { name: 'O‘zbek / Uzbek', levelKey: 'native' as const, cefr: 'C2', value: 100 },
  { name: 'Русский / Russian', levelKey: 'professional' as const, cefr: 'C1', value: 85 },
  { name: 'English', levelKey: 'professional' as const, cefr: 'C1', value: 85 },
];
