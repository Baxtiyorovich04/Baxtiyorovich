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
  '92-degree': [
    {
      mobile: false,
      images: ['/projects/92_hero.png', '/projects/92_second_img.png', '/projects/92_third_img.png'],
    },
  ],
  coolfix: [
    {
      mobile: false,
      images: ['/projects/coolfix_hero.png'],
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
  'medad-med': [
    {
      mobile: false,
      images: ['/projects/medad_med_hero.png', '/projects/medad_med_second_img.png'],
    },
  ],
  ecochain: [
    {
      mobile: false,
      images: ['/projects/ecochain_hero.png', '/projects/ecochain_second_img.png'],
    },
  ],
  '92-menu': [
    {
      mobile: true,
      images: ['/projects/92_menu_hero.png', '/projects/92_menu_second_img.png'],
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

const SKILL_TECH = {
  languages: ['TypeScript', 'JavaScript (ES2023)', 'HTML5', 'CSS3'],
  frameworks: ['React 19', 'Next.js (App Router)', 'React Native', 'Gatsby.js', 'Flutter'],
  state: ['Redux Toolkit', 'Zustand', 'TanStack Query'],
  styling: ['Tailwind CSS', 'SCSS', 'CSS Modules', 'Framer Motion'],
  apis: ['REST', 'GraphQL', 'WebSocket', 'Strapi (Headless CMS)'],
  quality: ['Vitest', 'Testing Library', 'ESLint', 'Prettier', 'Lighthouse'],
  devops: ['GitHub Actions', 'GitLab CI', 'Nginx'],
  workflow: ['Git Flow', 'GitHub', 'Figma'],
  architecture: ['NX Monorepo', 'Micro-frontend', 'RBAC', 'SSR / ISR'],
  ui: ['Shadcn UI', 'MUI', 'Ant Design', 'Chakra UI'],
  viz: ['Recharts', 'Chart.js', 'SurveyJS'],
} as const;

export const SKILLS: Record<Language, SkillCategory[]> = {
  en: [
    { category: 'Languages', items: [...SKILL_TECH.languages] },
    { category: 'Frameworks', items: [...SKILL_TECH.frameworks] },
    { category: 'State & Data', items: [...SKILL_TECH.state] },
    { category: 'Styling', items: [...SKILL_TECH.styling] },
    { category: 'APIs', items: [...SKILL_TECH.apis] },
    { category: 'Data viz', items: [...SKILL_TECH.viz, 'Virtualised tables'] },
    { category: 'UI Systems', items: [...SKILL_TECH.ui, 'Design tokens', 'Storybook-style docs'] },
    { category: 'Architecture', items: [...SKILL_TECH.architecture.slice(0, 3), 'Feature-sliced design', 'SSR / ISR'] },
    { category: 'Quality', items: [...SKILL_TECH.quality] },
    { category: 'DevOps', items: [...SKILL_TECH.devops, 'CI/CD pipelines'] },
    { category: 'Workflow', items: [...SKILL_TECH.workflow, 'Code review', 'AI-assisted dev'] },
  ],
  uz: [
    { category: 'Tillar', items: [...SKILL_TECH.languages] },
    { category: 'Freymvorklar', items: [...SKILL_TECH.frameworks] },
    { category: 'Holat va ma’lumot', items: [...SKILL_TECH.state] },
    { category: 'Stillar', items: [...SKILL_TECH.styling] },
    { category: 'API', items: [...SKILL_TECH.apis] },
    { category: 'Ma’lumot vizualizatsiyasi', items: [...SKILL_TECH.viz, 'Virtual jadvallar'] },
    { category: 'UI tizimlar', items: [...SKILL_TECH.ui, 'Dizayn tokenlar', 'Storybook uslubidagi hujjatlar'] },
    { category: 'Arxitektura', items: [...SKILL_TECH.architecture.slice(0, 3), 'Feature-sliced dizayn', 'SSR / ISR'] },
    { category: 'Sifat', items: [...SKILL_TECH.quality] },
    { category: 'DevOps', items: [...SKILL_TECH.devops, 'CI/CD quvurlari'] },
    { category: 'Ish jarayoni', items: [...SKILL_TECH.workflow, 'Kod tekshiruvi', 'AI yordamida dasturlash'] },
  ],
  ru: [
    { category: 'Языки', items: [...SKILL_TECH.languages] },
    { category: 'Фреймворки', items: [...SKILL_TECH.frameworks] },
    { category: 'Состояние и данные', items: [...SKILL_TECH.state] },
    { category: 'Стили', items: [...SKILL_TECH.styling] },
    { category: 'API', items: [...SKILL_TECH.apis] },
    { category: 'Визуализация данных', items: [...SKILL_TECH.viz, 'Виртуализированные таблицы'] },
    { category: 'UI-системы', items: [...SKILL_TECH.ui, 'Дизайн-токены', 'Документация в стиле Storybook'] },
    { category: 'Архитектура', items: [...SKILL_TECH.architecture.slice(0, 3), 'Feature-sliced дизайн', 'SSR / ISR'] },
    { category: 'Качество', items: [...SKILL_TECH.quality] },
    { category: 'DevOps', items: [...SKILL_TECH.devops, 'CI/CD-конвейеры'] },
    { category: 'Процесс', items: [...SKILL_TECH.workflow, 'Код-ревью', 'Разработка с помощью ИИ'] },
  ],
};

/* ------------------------------------------------------------------ *
 * PROJECTS
 * NOTE: role / highlights / stack are written from the public surface
 * of each product — review the numbers before publishing.
 * ------------------------------------------------------------------ */
export const PROJECTS: Record<Language, Project[]> = {
  en: [
{
      id: '92-degree',
      title: '92° Tashkent',
      type: 'Freelance',
      year: '2025',
      tagline: 'Specialty coffee landing and digital menu',
      description:
        'A specialty coffee house in Tashkent, named for the temperature the cup is brewed at. The public site is the landing page — why 92°, the drinks, the room, guest reviews, and how to visit. What a guest actually uses at the table is the digital menu: sizes and prices, a drink of the day, locations, and an account that turns eight paid cups into a free one.',
      role: 'Front-end developer — the landing page and the digital menu: home, full menu, locations, Google accounts, and the free-cup bonus.',
      highlights: [
        'Built the landing page around one idea — 92° is the brew temperature that opens the flavor without bitterness — then gave it a gallery, Yandex reviews, opening hours, and a clear path into the QR menu',
        'Shipped a phone-first menu: a home of drinks with size prices, a hit of the day, a popular row, the full menu, and a locations tab',
        'Added Google sign-in so a guest becomes a named account, with name and email taken from Google, and a loyalty scale that is personal: cups bought, progress toward 8, and how many free cups that has already earned',
        'The bonus is a free cup, not a coupon — eight paid cups fill the scale, and the profile says how many are left. The menu also ships in English, Russian, Turkish, and Uzbek, and can be added to a phone home screen',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      links: [
        { label: 'Landing', url: 'https://92degreetashkent.uz/' },
        { label: 'Digital menu', url: 'https://92-menu.vercel.app/' },
      ],
    },
{
      id: 'coolfix',
      title: 'Coolfix',
      type: 'Freelance',
      year: '2025',
      tagline: 'AC cleaning and home support in Tashkent',
      description:
        'A landing page for Coolfix, a Tashkent service that cleans, repairs and supports air conditioners at the customer’s home. The page is built to get a call: what the visit costs, how fast a master can arrive, the warranty on the work, and two ways to reach them — phone and Telegram. Washing machines and dual-circuit boilers sit on the same page as extra lines of work.',
      role: 'Front-end developer — the landing page: the offer, the reasons to call, and the contact block.',
      highlights: [
        'Put the offer on the first screen: AC service in Tashkent, a free visit when the repair goes ahead, and a 100,000 UZS call-out when it does not',
        'Spelled out the terms that decide a booking — most jobs finished within 24 hours, an urgent visit within an hour, a 3 to 6 month warranty on work and parts, original parts, and fixed prices with no hidden fees',
        'Closed the page on a call: two phone numbers, Telegram, and daily hours from 8:00 to 20:00, with the same contacts repeated in the footer',
        'Listed washing machines and dual-circuit boilers as further services without letting them crowd out the air-conditioner offer',
      ],
      stack: ['Next.js', 'TypeScript', 'CSS Modules'],
      link: 'https://thecoolfix.uz/',
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
      id: 'medad-med',
      title: 'Medad Med',
      type: 'Freelance',
      year: '2025',
      tagline: 'Multi-specialty clinic site',
      description:
        'A site for Medad Med, a multi-specialty clinic. The home page introduces the team, the scale of care — 58+ treatment directions, around the clock — and then the services a patient actually books: urology, andrology, gynecology, neurology, ultrasound, pediatrics, cardiology, laboratory, massage and inpatient treatment. Each specialty has its own page, and the clinic is one call or one Telegram message away.',
      role: 'Front-end developer — the clinic site: home, service pages, specialists, about and contacts, in Uzbek and Russian.',
      highlights: [
        'Built the home page around a visit: the team, 58+ treatment directions, 24/7 care, then a catalogue of specialties from urology and gynecology to ultrasound, the laboratory, massage and inpatient treatment',
        'Gave every specialty its own page, so a "read more" lands on that service instead of one long list',
        'Put the clinic lab note on the home page — sperm morphology checked in three staining stages — beside the team and the equipment',
        'Closed the site on a way to reach them: phone, Telegram, Instagram, and a switch between Uzbek and Russian',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Swiper'],
      link: 'https://www.medadmed.uz/',
    },
{
      id: '92-menu',
      title: '92° Menu',
      type: 'Freelance',
      year: '2025',
      tagline: 'Digital menu with accounts and free cups',
      description:
        'The menu guests open at the table for 92°, the specialty coffee house in Tashkent. Drinks are priced by size, a hit of the day and a popular row sit on the home screen, and the full menu is one tap away. A guest can stay anonymous, or sign in with Google and start filling a scale toward a free cup.',
      role: 'Front-end developer — the phone menu: home, the full menu, locations, and the account with the free-cup bonus.',
      highlights: [
        'Built a phone-first menu: drink cards with a price for each size, a hit of the day, a popular row, and the full menu split into coffee, drinks, ube, matcha and frappe',
        'Added Google sign-in so a guest becomes a named account, with the name and email taken from Google',
        'The bonus is a free cup after eight paid ones: the profile shows cups bought, progress on an 8-cup scale, how many free cups that has already earned, and how many are left',
        'Shipped it in English, Russian, Turkish and Uzbek, with a locations tab and add-to-home-screen so it behaves like an app at the table',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      link: 'https://92-menu.vercel.app/',
    },
{
      id: 'ecochain',
      title: 'EcoChain',
      type: 'Freelance',
      year: '2025 — 2026',
      tagline: 'AI and blockchain recycling, from bottle to wallet',
      description:
        'A site for EcoChain, a reverse-vending system in Uzbekistan. A person drops a bottle in, an AI camera grades the plastic, the machine writes the result to a blockchain, and UEC stablecoin lands in a wallet. The page also explains the other half of the business: every accepted batch mints an NFT certificate that a producer can buy to meet the 2026 EPR rules, instead of paying the fee.',
      role: 'Front-end developer — the public site: how it works, the machine, the blockchain and NFT story, the investor section, and the contact form, in English, Uzbek and Russian.',
      highlights: [
        'Told the product as six steps a person can follow: remove the cap, insert the bottle, AI grades it, the chain records it, scan the QR, receive UEC — bottle to blockchain in under a minute',
        'Put the numbers that make the case on the first screen: 1.8 million tons of plastic waste a year in Uzbekistan, 6.6% recycled today, and the EPR rule that starts the B2B demand',
        'Explained the revenue in the open: an NFT certificate is minted for each batch, it is public and immutable, and corporations buy it as proof instead of paying the mandatory fee',
        'Built the ask into the page: an investor section, and a contact form that splits interest into investor, partner, pilot location, government and media',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'i18n'],
      link: 'https://ecochainweb.vercel.app/',
    },
  ],

  uz: [
{
      id: '92-degree',
      title: '92° Toshkent',
      type: 'Frilanser',
      year: '2025',
      tagline: 'Maxsus qahva bosh sahifasi va raqamli menyu',
      description:
        'Toshkentdagi maxsus qahvaxona — nomi chashka qaynatiladigan haroratdan. Ommaviy sayt bosh sahifa: nega 92°, ichimliklar, zal, mehmon sharhlari va qanday kelish. Stol yonida mehmon ishlatadigan narsa esa raqamli menyu: o‘lcham va narxlar, kunning hiti, lokatsiyalar va sakkizta pullik chashkadan keyin bepul chashka beradigan akkaunt.',
      role: 'Front-end dasturchi — bosh sahifa va raqamli menyu: bosh ekran, to‘liq menyu, lokatsiyalar, Google akkaunt va bepul chashka bonusi.',
      highlights: [
        'Bosh sahifani bitta g‘oya atrofida qurdim — 92° ta’mni achchiqsiz ochadigan qaynatish harorati — so‘ng galereya, Yandex sharhlari, ish vaqti va QR-menyuga aniq yo‘l qo‘shdim',
        'Telefon uchun menyu chiqardim: o‘lcham narxlari bilan ichimliklar, kunning hiti, mashhur qator, to‘liq menyu va lokatsiyalar',
        'Google orqali kirish qo‘shdim: mehmon ism va pochtasi Google’dan olinadigan akkauntga aylanadi, sodiqlik esa shaxsiy — sotib olingan chashkalar, 8 gacha progress va necha marta bepul chashka olingani',
        'Bonus kupon emas, bepul chashka: sakkizta pullik chashka shkalani to‘ldiradi, profil esa qolganini ko‘rsatadi. Menyu ingliz, rus, turk va o‘zbek tillarida, telefon bosh ekraniga ham qo‘shiladi',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      links: [
        { label: 'Bosh sahifa', url: 'https://92degreetashkent.uz/' },
        { label: 'Raqamli menyu', url: 'https://92-menu.vercel.app/' },
      ],
    },
{
      id: 'coolfix',
      title: 'Coolfix',
      type: 'Frilanser',
      year: '2025',
      tagline: 'Toshkentda konditsioner tozalash va uyga xizmat',
      description:
        'Coolfix uchun bosh sahifa — Toshkentda konditsionerni tozalash, ta’mirlash va mijoz uyiga chiqib xizmat ko‘rsatish. Sahifa qo‘ng‘iroq olish uchun qurilgan: chiqish qancha turadi, usta qanchalik tez yetib boradi, ishga kafolat, va bog‘lanishning ikki yo‘li — telefon hamda Telegram. Kir yuvish mashinalari va ikki konturli qozonlar shu sahifada qo‘shimcha xizmat sifatida turadi.',
      role: 'Front-end dasturchi — bosh sahifa: taklif, qo‘ng‘iroq qilish sabablari va aloqa bloki.',
      highlights: [
        'Birinchi ekranga taklifni qo‘ydim: Toshkentda konditsioner xizmati, ta’mirlash bo‘lsa bepul chiqish, bo‘lmasa 100 000 so‘m',
        'Buyurtmani hal qiladigan shartlarni ochiq yozdim — ko‘pchilik ish 24 soat ichida, shoshilinch chiqish bir soat ichida, ish va ehtiyot qismlarga 3–6 oy kafolat, original ehtiyot qismlar, qat’iy narx va yashirin to‘lovsiz',
        'Sahifani qo‘ng‘iroq bilan yopdim: ikkita telefon, Telegram va har kuni 8:00 dan 20:00 gacha — shu kontaktlar pastki qismda ham takrorlanadi',
        'Kir yuvish mashinalari va ikki konturli qozonlarni qo‘shimcha xizmat qilib ko‘rsatdim, konditsioner taklifini esa birinchi o‘rinda qoldirdim',
      ],
      stack: ['Next.js', 'TypeScript', 'CSS Modules'],
      link: 'https://thecoolfix.uz/',
    },
{
      id: 'orimedia',
      title: 'ORI Media',
      type: 'UDEVS',
      year: '2024 — 2025',
      tagline: 'Elektron, audio va bosma kitoblar do‘koni',
      description:
        'O‘zbek bozori uchun kitob platformasi: elektron, audio va bosma kitoblar bitta katalogda. Kitobni butunlay sotib olish, arzonroqqa onlayn o‘qish yoki tinglash mumkin — ya’ni bitta kitob sahifasi bir nechta sotib olish yo‘lini tugmalar devoriga aylanmasdan ko‘rsatishi kerak.',
      role: 'Front-end dasturchi — vitrina: bosh sahifa, rukn va qidiruv sahifalari, sotib olish yo‘llari bilan kitob sahifasi, telefon raqami orqali autentifikatsiya va lotin/kirill almashtirgichi.',
      highlights: [
        'Kitob sahifasini shunday qurdimki, sotib olish, onlayn o‘qish va saqlash narxi bilan yonma-yon turadi, ma’lumot va fikrlar esa ustma-ust emas, tab’larga bo‘lingan',
        'Butun interfeys bo‘ylab lotin/kirill almashtirgichini chiqardim — CMS’dan keladigan kontent ham shunga bo‘ysunadi',
        'Telefon raqami bilan kirishni modal qilib qo‘ydim: foydalanuvchi o‘qiyotgan kitobidan boshqa sahifaga uloqtirilmaydi',
        'Bosh sahifadagi karusellar va rukn tasmasini faqat sichqoncha emas, klaviatura va surish bilan ham boshqarsa bo‘ladigan qildim',
      ],
      stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'SCSS', 'REST API', 'i18n'],
      link: 'https://orimedia.uz',
    },
{
      id: 'medad-med',
      title: 'Medad Med',
      type: 'Frilanser',
      year: '2025',
      tagline: 'Ko‘p yo‘nalishli klinika sayti',
      description:
        'Medad Med — ko‘p yo‘nalishli klinika uchun sayt. Bosh sahifa jamoani, xizmat ko‘lamini — 58+ davolash yo‘nalishi, tunu kun — va bemor haqiqatan yoziladigan xizmatlarni ko‘rsatadi: urologiya, andrologiya, ginekologiya, nevrologiya, UTT, pediatriya, kardiologiya, laboratoriya, massaj va statsionar. Har bir yo‘nalishning o‘z sahifasi bor, klinikaga esa bitta qo‘ng‘iroq yoki bitta Telegram xabari yetadi.',
      role: 'Front-end dasturchi — klinika sayti: bosh sahifa, xizmat sahifalari, mutaxassislar, biz haqimizda va aloqa, o‘zbek va rus tillarida.',
      highlights: [
        'Bosh sahifani tashrif atrofida qurdim: jamoa, 58+ davolash yo‘nalishi, 24/7 g‘amxo‘rlik, so‘ng urologiya va ginekologiyadan UTT, laboratoriya, massaj va statsionargacha xizmatlar katalogi',
        'Har bir yo‘nalishga alohida sahifa berdim: “batafsil” uzun ro‘yxatda qolmaydi, o‘sha xizmat sahifasiga olib boradi',
        'Klinika laboratoriyasi haqidagi eslatmani bosh sahifaga qo‘ydim — spermatozoidlar morfologiyasi uch bosqichli bo‘yashda tekshiriladi — jamoa va uskuna yonida',
        'Saytni aloqa bilan yopdim: telefon, Telegram, Instagram va o‘zbek hamda rus tillari o‘rtasida almashtirish',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Swiper'],
      link: 'https://www.medadmed.uz/',
    },
{
      id: '92-menu',
      title: '92° Menu',
      type: 'Frilanser',
      year: '2025',
      tagline: 'Akkaunt va bepul chashkali raqamli menyu',
      description:
        '92° — Toshkentdagi maxsus qahvaxona mehmoni stol yonida ochadigan menyu. Ichimliklar o‘lcham bo‘yicha narxlanadi, bosh ekranda kunning hiti va mashhur qator turadi, to‘liq menyu esa bir bosishda ochiladi. Mehmon mehmon bo‘lib qolishi yoki Google orqali kirib, bepul chashkaga shkalani to‘ldirishni boshlashi mumkin.',
      role: 'Front-end dasturchi — telefon menyusi: bosh sahifa, to‘liq menyu, lokatsiyalar va bepul chashka bonusi bilan akkaunt.',
      highlights: [
        'Telefon uchun menyu qurdim: har bir o‘lcham narxi bilan ichimlik kartalari, kunning hiti, mashhur qator va kofe, ichimliklar, ube, matcha hamda frappe bo‘limlariga bo‘lingan to‘liq menyu',
        'Google orqali kirish qo‘shdim: mehmon ism va pochtasi Google’dan olinadigan akkauntga aylanadi',
        'Bonus — sakkizta pullik chashkadan keyin bepul chashka: profil sotib olingan chashkalarni, 8 ta shkaladagi progressni, necha marta bepul olinganini va qolganini ko‘rsatadi',
        'Ingliz, rus, turk va o‘zbek tillarida chiqardim, lokatsiyalar tabi va telefon bosh ekraniga qo‘shish bilan — stol yonida ilova kabi ishlaydi',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      link: 'https://92-menu.vercel.app/',
    },
{
      id: 'ecochain',
      title: 'EcoChain',
      type: 'Frilanser',
      year: '2025 — 2026',
      tagline: 'Sun’iy intellekt va blokcheyn qayta ishlash, shishadan hamyongacha',
      description:
        'EcoChain uchun sayt — O‘zbekistondagi qaytaruvchi qabul avtomatlari tizimi. Odam shishani tashlaydi, AI kamera plastmassani baholaydi, mashina natijani blokcheynga yozadi, UEC steyblkoin esa hamyonga tushadi. Sahifa biznesning ikkinchi tomonini ham tushuntiradi: har bir qabul qilingan partiya NFT sertifikat chiqaradi va ishlab chiqaruvchi 2026 EPR qoidalarini bajarish uchun jarima o‘rniga shu sertifikatni sotib oladi.',
      role: 'Front-end dasturchi — ommaviy sayt: qanday ishlashi, mashina, blokcheyn va NFT hikoyasi, investor bo‘limi va aloqa formasi, ingliz, o‘zbek va rus tillarida.',
      highlights: [
        'Mahsulotni odam ergashadigan oltita qadam qilib aytdim: qopqoqni olish, shishani tashlash, AI baholashi, zanjir yozuvi, QR ni skanerlash, UEC olish — shishadan blokcheyngacha bir daqiqadan kam',
        'Dalil bo‘ladigan raqamlarni birinchi ekranga qo‘ydim: O‘zbekistonda yiliga 1,8 million tonna plastmassa chiqindisi, hozir 6,6% qayta ishlanadi va B2B talabni ochadigan EPR qoidasi',
        'Daromadni ochiq yozdim: har bir partiya uchun NFT sertifikat chiqadi, u ommaviy va o‘zgarmas, korporatsiyalar majburiy to‘lov o‘rniga shuni dalil sifatida sotib oladi',
        'So‘rovni sahifaning o‘ziga qo‘ydim: investor bo‘limi va qiziqishni investor, hamkor, pilot lokatsiya, davlat va media ga ajratadigan aloqa formasi',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'i18n'],
      link: 'https://ecochainweb.vercel.app/',
    },
  ],

  ru: [
{
      id: '92-degree',
      title: '92° Ташкент',
      type: 'Фриланс',
      year: '2025',
      tagline: 'Лендинг спешелти-кофейни и цифровое меню',
      description:
        'Спешелти-кофейня в Ташкенте, названная по температуре, на которой варят чашку. Публичный сайт — лендинг: почему 92°, напитки, зал, отзывы гостей и как прийти. То, чем гость пользуется за столом, — цифровое меню: размеры и цены, хит дня, локации и аккаунт, в котором восемь оплаченных чашек превращаются в бесплатную.',
      role: 'Front-end разработчик — лендинг и цифровое меню: главная, полное меню, локации, аккаунт через Google и бонус бесплатной чашки.',
      highlights: [
        'Собрал лендинг вокруг одной идеи — 92° это температура, на которой вода раскрывает вкус без лишней горечи — и добавил галерею, отзывы на Яндексе, часы работы и прямой вход в QR-меню',
        'Сделал меню под телефон: карточки напитков с ценами по размерам, хит дня, популярное, полное меню и вкладка локаций',
        'Подключил вход через Google: гость становится аккаунтом с именем и почтой из Google, а шкала лояльности личная — сколько чашек куплено, прогресс до 8 и сколько бесплатных уже получено',
        'Бонус — бесплатная чашка, не промокод: восемь оплаченных чашек заполняют шкалу, профиль показывает, сколько осталось. Меню на английском, русском, турецком и узбекском, и его можно добавить на главный экран телефона',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      links: [
        { label: 'Лендинг', url: 'https://92degreetashkent.uz/' },
        { label: 'Цифровое меню', url: 'https://92-menu.vercel.app/' },
      ],
    },
{
      id: 'coolfix',
      title: 'Coolfix',
      type: 'Фриланс',
      year: '2025',
      tagline: 'Чистка и обслуживание кондиционеров в Ташкенте',
      description:
        'Лендинг для Coolfix — сервиса в Ташкенте, который чистит, ремонтирует и обслуживает кондиционеры с выездом к клиенту. Страница собрана так, чтобы довести до звонка: сколько стоит выезд, как быстро приедет мастер, какая гарантия на работу и два способа связи — телефон и Telegram. Стиральные машины и двухконтурные котлы стоят на той же странице как дополнительные услуги.',
      role: 'Front-end разработчик — лендинг: предложение, причины позвонить и блок контактов.',
      highlights: [
        'Вынес предложение на первый экран: обслуживание кондиционеров в Ташкенте, бесплатный выезд, если ремонт состоится, и 100 000 сумов, если нет',
        'Открыто написал условия, от которых зависит заявка — большинство работ за 24 часа, срочный выезд в течение часа, гарантия 3–6 месяцев на работы и запчасти, оригинальные детали и фиксированные цены без скрытых платежей',
        'Закрыл страницу звонком: два телефона, Telegram и часы ежедневно с 8:00 до 20:00, те же контакты повторяются в подвале',
        'Показал стиральные машины и двухконтурные котлы как дополнительные услуги, не давая им заслонить кондиционеры',
      ],
      stack: ['Next.js', 'TypeScript', 'CSS Modules'],
      link: 'https://thecoolfix.uz/',
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
      id: 'medad-med',
      title: 'Medad Med',
      type: 'Фриланс',
      year: '2025',
      tagline: 'Сайт многопрофильной клиники',
      description:
        'Сайт для Medad Med — многопрофильной клиники. Главная знакомит с командой, с масштабом помощи — 58+ направлений лечения, круглосуточно — и с услугами, на которые пациент реально записывается: урология, андрология, гинекология, неврология, УЗИ, педиатрия, кардиология, лаборатория, массаж и стационар. У каждого направления своя страница, а до клиники — один звонок или одно сообщение в Telegram.',
      role: 'Front-end разработчик — сайт клиники: главная, страницы услуг, специалисты, о клинике и контакты, на узбекском и русском.',
      highlights: [
        'Собрал главную вокруг визита: команда, 58+ направлений лечения, забота 24/7, затем каталог специальностей — от урологии и гинекологии до УЗИ, лаборатории, массажа и стационара',
        'Дал каждому направлению свою страницу: «подробнее» ведёт на эту услугу, а не оставляет человека в одном длинном списке',
        'Вынес на главную лабораторную заметку клиники — морфологию сперматозоидов проверяют в три этапа окрашивания — рядом с командой и оборудованием',
        'Закрыл сайт способом связи: телефон, Telegram, Instagram и переключатель узбекского и русского',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Swiper'],
      link: 'https://www.medadmed.uz/',
    },
{
      id: '92-menu',
      title: '92° Menu',
      type: 'Фриланс',
      year: '2025',
      tagline: 'Цифровое меню с аккаунтом и бесплатными чашками',
      description:
        'Меню, которое гость открывает за столом в 92° — спешелти-кофейне в Ташкенте. Напитки стоят по размерам, на главной — хит дня и ряд популярного, полное меню открывается в одно касание. Можно остаться гостем или войти через Google и начать заполнять шкалу до бесплатной чашки.',
      role: 'Front-end разработчик — телефонное меню: главная, полное меню, локации и аккаунт с бонусом бесплатной чашки.',
      highlights: [
        'Собрал меню под телефон: карточки напитков с ценой каждого размера, хит дня, популярное и полное меню по разделам — кофе, напитки, ube, матча и фраппе',
        'Подключил вход через Google: гость становится аккаунтом с именем и почтой из Google',
        'Бонус — бесплатная чашка после восьми оплаченных: в профиле видно, сколько чашек куплено, прогресс по шкале из 8, сколько бесплатных уже получено и сколько осталось',
        'Выпустил на английском, русском, турецком и узбекском, с вкладкой локаций и добавлением на главный экран — за столом это работает как приложение',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      link: 'https://92-menu.vercel.app/',
    },
{
      id: 'ecochain',
      title: 'EcoChain',
      type: 'Фриланс',
      year: '2025 — 2026',
      tagline: 'ИИ и блокчейн-переработка, от бутылки до кошелька',
      description:
        'Сайт EcoChain — системы обратных вендинговых автоматов в Узбекистане. Человек бросает бутылку, камера с ИИ оценивает пластик, автомат записывает результат в блокчейн, а стейблкоин UEC приходит в кошелёк. Страница объясняет и вторую половину бизнеса: каждая принятая партия выпускает NFT-сертификат, который производитель покупает, чтобы закрыть правила EPR 2026, вместо обязательного сбора.',
      role: 'Front-end разработчик — публичный сайт: как это работает, автомат, блокчейн и NFT, раздел для инвесторов и форма связи, на английском, узбекском и русском.',
      highlights: [
        'Рассказал продукт шестью шагами, которые человек может пройти: снять крышку, вставить бутылку, ИИ оценивает, цепь записывает, сканировать QR, получить UEC — от бутылки до блокчейна меньше чем за минуту',
        'Вынес на первый экран цифры, на которых держится аргумент: 1,8 миллиона тонн пластиковых отходов в год в Узбекистане, сегодня перерабатывается 6,6%, и правило EPR, которое открывает B2B-спрос',
        'Объяснил выручку открыто: на каждую партию выпускается NFT-сертификат, он публичный и неизменяемый, корпорации покупают его как доказательство вместо обязательного сбора',
        'Встроил просьбу в саму страницу: раздел для инвесторов и форма, которая делит интерес на инвестора, партнёра, пилотную точку, государство и медиа',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'i18n'],
      link: 'https://ecochainweb.vercel.app/',
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
      ctaWork: 'See the projects',
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
      title: 'Projects',
      label: 'What I have built',
      note: 'Sites and products I have shipped: a coffee house and its digital menu, air-conditioner service, a clinic, a recycling platform, and a book store.',
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
      email: 'Email',
      phone: 'Phone',
      location: 'Zangiota, Tashkent Region · Open to hybrid and remote',
      responseTime: 'Usually replies within a day',
    },

    common: {
      connect: 'Connect',
      menu: 'Menu',
      close: 'Close',
      primaryNav: 'Primary',
      language: 'Language',
      mobileNav: 'Mobile',
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
        experience: 'Productiondagi yillar',
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
      title: 'Loyihalar',
      label: 'Nima qurganman',
      note: 'Men chiqargan saytlar va mahsulotlar: kofexona va uning raqamli menyusi, konditsioner xizmati, klinika, qayta ishlash platformasi va kitob do‘koni.',
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
      email: 'Pochta',
      phone: 'Telefon',
      location: 'Zangiota, Toshkent viloyati · Gibrid va masofaviy ishga ochiq',
      responseTime: 'Odatda bir kun ichida javob beraman',
    },

    common: {
      connect: 'Bog‘lanish',
      menu: 'Menyu',
      close: 'Yopish',
      primaryNav: 'Asosiy',
      language: 'Til',
      mobileNav: 'Mobil',
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
      ctaWork: 'Смотреть проекты',
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
        experience: 'Лет в продакшене',
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
      title: 'Проекты',
      label: 'Что я построил',
      note: 'Сайты и продукты, которые я выпустил: кофейня и её цифровое меню, сервис кондиционеров, клиника, платформа переработки и книжный магазин.',
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
      email: 'Почта',
      phone: 'Телефон',
      location: 'Зангиата, Ташкентская область · Готов к гибриду и удалёнке',
      responseTime: 'Обычно отвечаю в течение дня',
    },

    common: {
      connect: 'Контакты',
      menu: 'Меню',
      close: 'Закрыть',
      primaryNav: 'Основное',
      language: 'Язык',
      mobileNav: 'Мобильное',
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
