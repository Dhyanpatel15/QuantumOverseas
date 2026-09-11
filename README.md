# Quantum Overseas – Modern React.js Web Application

A modern, production-ready React.js clone of [Quantum Overseas](https://quantumoverseas.in/), built using Vite, Tailwind CSS, React Router DOM, and React Helmet Async.

## 🚀 Features & Highlights

- **100% Faithful Recreation**: Exact layout, brand palette (`#e20935` primary red, `#101A29` deep navy), typography, visual hierarchy, and animations.
- **Complete Page Coverage**: Recreates Home, About Us, 8 Visa Service detail pages, 8 Country destination guides, Coaching/IELTS courses, Team directory & profiles, Categorized FAQs, Blog articles, Contact with interactive Google map, and Coming Soon.
- **Local Asset Storage**: All 150+ original images, team photos, university badges, country illustrations, and brand assets are downloaded and bundled locally inside `public/images/`.
- **Decoupled Data Architecture**: All content is cleanly organized inside `src/content/*.json` files (`site.json`, `services.json`, `countries.json`, `coaching.json`, `team.json`, `faqs.json`, `testimonials.json`, `blogs.json`, `home.json`, `theme.json`).
- **Interactive Global Components**:
  - **Live Search Modal**: Instant auto-suggest search across services, countries, test prep, blogs, and team.
  - **Free Quote / Assessment Modal**: Validated multi-step inquiry form with dynamic category dropdowns.
  - **Offcanvas Mobile Drawer**: Slide-out mobile navigation with collapsible accordions, contact details, and socials.
  - **Scroll-to-Top Indicator**: Circular progress scroll-to-top button.
  - **WhatsApp Floating Button**: Direct WhatsApp inquiry link with pre-filled message.
- **SEO & Performance Ready**:
  - React Helmet Async for dynamic `<title>`, `<meta description>`, OpenGraph, and Twitter cards.
  - Organization, Service, and FAQ Schema.org JSON-LD structured data.
  - Route-level code splitting (`React.lazy` & `Suspense`).
  - Optimized chunking in `vite.config.js`.
- **Hostinger & Apache Compatible**:
  - Pre-configured `public/.htaccess` with SPA rewrite rules and asset caching headers.

---

## 📁 Project Structure

```
├── public/
│   ├── images/               # All 150+ locally stored original images
│   ├── .htaccess             # Apache/Hostinger SPA rewrite rules
│   ├── robots.txt            # Search engine crawler instructions
│   ├── sitemap.xml           # XML Sitemap with all URLs & priorities
│   └── sitemap.json          # Verified JSON Sitemap inventory
├── src/
│   ├── components/
│   │   ├── common/           # TopHeader, Navbar, Footer, SEO, Modals, Offcanvas
│   │   └── home/             # HeroSlider, Stats, About, Services, Countries, Process
│   ├── content/              # Pure JSON content separated from UI
│   │   ├── site.json         # Contact info, logo, navigation
│   │   ├── theme.json        # Design tokens (colors, fonts, spacing)
│   │   ├── home.json         # Homepage sections data
│   │   ├── services.json     # All 8 visa services data
│   │   ├── countries.json    # All 8 destination countries data
│   │   ├── coaching.json     # IELTS, PTE, TOEFL course details
│   │   ├── team.json         # Team members directory & biographies
│   │   ├── faqs.json         # Categorized FAQs
│   │   ├── testimonials.json # Client reviews and ratings
│   │   └── blogs.json        # Blog posts & guides
│   ├── pages/                # Individual route view components
│   ├── router/               # React Router routes and scroll restoration
│   ├── services/             # API & validation service layer (api.js)
│   ├── styles/               # Global Tailwind CSS stylesheet
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will start on `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory, ready to deploy to Hostinger, Netlify, Vercel, or any static/cPanel hosting.

---

## 🗺️ Recreated Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Full animated homepage with hero slider, services, countries, and process |
| `/about` | About Us | Company background, mission, vision, values, and team preview |
| `/services` | Visa Overview | Grid of all 8 visa consulting programs |
| `/service-details/:slug` | Visa Detail | Individual visa pages (`student-visa`, `permanent-residency-visa`, etc.) |
| `/countries` | Countries Overview | Directory of all 8 destination countries |
| `/countries/:slug` | Country Detail | Country profiles (`united-kingdom`, `canada`, `united-states-of-america`, etc.) |
| `/coaching` | Coaching & Test Prep | IELTS, PTE, TOEFL, GRE course catalog |
| `/project-details/:slug` | Course Detail | In-depth module syllabus & batch schedules |
| `/team-members` | Our Team | Directory of senior consultants and leadership |
| `/team-details/:slug` | Consultant Profile | Individual consultant credentials and booking |
| `/faqs` | FAQs | Categorized accordion questions & answers |
| `/blog` | Blog Grid | Overseas immigration insights & student guides |
| `/blog/:slug` | Article Detail | Complete article content with reading metadata |
| `/contact` | Contact Us | Office details, validated form, and Google Map embed |
| `/coming-soon` | Coming Soon | Placeholder for upcoming portal features |
| `/*` | 404 Not Found | Friendly error page with home redirection |
