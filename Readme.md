
# almahmuddev.com

Personal portfolio website of **Abdullah Al Mahmud Khan** — Front-End Developer (React, Next.js) & WordPress Specialist from Sylhet, Bangladesh.

🌐 **Live Site:** [almahmuddev.com](https://www.almahmuddev.com)

---

## 🛠️ Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | JavaScript (no TypeScript) |
| Styling | External CSS from `/public/assets` |
| Dark / Light Mode | Custom ThemeProvider — toggles `tmp-white-version` on `<body>` |
| Animations | GSAP + ScrollTrigger + SplitText |
| Sliders | Swiper.js |
| Contact Form | Resend (email API via Next.js API route) |
| Deployment | Vercel |

---

## ✨ Features

- Dark & Light mode toggle with localStorage persistence
- Fully responsive — desktop, tablet, mobile
- Sticky header with sidebar and mobile hamburger menu
- Portfolio section with 5 filter tabs
- Expertise section with radial SVG progress indicators
- Testimonials Swiper slider
- Working contact form — emails sent via Resend
- Blog section with 3-column cards
- Scroll animations re-triggered on every page navigation
- Auto-generated sitemap.xml and robots.txt
- PWA manifest

---

## 📄 Pages

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Service | `/service` |
| Service Details | `/service-details` |
| Blog | `/blog` |
| Blog Column | `/blog-col-4` |
| Blog Details | `/blog-details` |
| Project | `/project` |
| Project Details | `/project-details` |
| Contact | `/contact` |

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Copy assets
Paste the `assets/` folder into `public/`:
```
public/
└── assets/
    ├── css/
    ├── js/
    ├── images/
    └── fonts/
```

### 3. Set up environment variables
Create `.env.local` in the project root:
```
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=your@email.com
```

### 4. Run dev server
```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   ├── globals.css         # Base reset + smooth theme transition
│   ├── sitemap.js          # Auto sitemap.xml
│   ├── robots.js           # Auto robots.txt
│   ├── manifest.js         # PWA manifest
│   ├── not-found.js        # Custom 404 page
│   ├── api/contact/        # Resend email API route
│   └── [pages]/            # about, service, blog, project, contact
├── components/
│   ├── Header.jsx          # Sticky header, navbar, sidebar, mobile menu
│   ├── Hero.jsx            # Banner section
│   ├── About.jsx           # About me section
│   ├── Portfolio.jsx       # Tabbed portfolio grid
│   ├── Expertise.jsx       # Expertise with radial progress
│   ├── Testimonial.jsx     # Swiper testimonials
│   ├── Skills.jsx          # Skills cards
│   ├── Pricing.jsx         # Pricing plans
│   ├── Contact.jsx         # Contact form
│   ├── Blog.jsx            # Blog cards
│   ├── Footer.jsx          # Footer + copyright + chat widget
│   ├── Breadcrumb.jsx      # Shared breadcrumb
│   ├── ThemeToggle.jsx     # Dark/light toggle button
│   ├── ScriptLoader.jsx    # Sequential JS loader
│   └── RouteAnimations.jsx # Re-triggers animations on navigation
└── providers/
    └── ThemeProvider.jsx   # Theme context
```

---

## 📬 Contact

- **Portfolio:** [almahmuddev.com](https://www.almahmuddev.com)
- **GitHub:** [@almahmuddev](https://github.com/almahmuddev)
- **LinkedIn:** [in/almahmuddev](https://linkedin.com/in/almahmuddev)
- **Email:** devalmahmud@gmail.com
