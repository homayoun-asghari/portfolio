# 🌟 Homayoun Asghari - Portfolio

[![GitHub repo size](https://img.shields.io/github/repo-size/homayoun-asghari/portfolio)](https://github.com/homayoun-asghari/portfolio)
[![Last Commit](https://img.shields.io/github/last-commit/homayoun-asghari/portfolio)](https://github.com/homayoun-asghari/portfolio/commits/main)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive, and multilingual portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and contact information in multiple languages.

🔗 **Live Demo**: [portfolio-six-bay-53.vercel.app](https://portfolio-six-bay-53.vercel.app)

![Portfolio Screenshot](/public/assets/home.png)

## 🌍 Features

- **Multilingual Support** (English & Turkish)
- Responsive Design
- Smooth Animations with Framer Motion
- Contact Form with Email Integration
- Project Showcase
- SEO Optimized

## 🚀 Technologies Used

- **Frontend Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Internationalization**: i18next & next-i18next
- **Form Handling**: Next.js API Routes
- **Email Service**: SendGrid
- **Icons**: SVG Icons
- **Type Checking**: TypeScript

## 🌟 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/homayoun-asghari/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SENDGRID_API_KEY=your_sendgrid_api_key
   NEXT_PUBLIC_EMAIL_TO=your_email@example.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
portfolio/
├── public/                  # Static assets
│   ├── assets/              # Image assets
│   │   └── home.png         # Portfolio screenshot
│   ├── file.svg             # SVG icons
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   ├── app/                # Next.js 13+ App Router
│   │   ├── contact/         # Contact page
│   │   │   └── page.tsx     # Contact page component
│   │   ├── favicon.ico      # Site favicon
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   │
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── ProjectCard.tsx  # Project card component
│   │
│   └── i18n/               # Internationalization
│       ├── i18n.ts          # i18n configuration
│       └── locales/         # Translation files
│           ├── en/          # English translations
│           │   └── translation.json
│           └── tr/          # Turkish translations
│               └── translation.json
│
├── .gitignore             # Git ignore file
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🌍 Adding a New Language

1. Add a new folder in `src/i18n/locales/` with the language code (e.g., `es` for Spanish)
2. Create a `translation.json` file in the new folder with the translated strings
3. Update the language configuration in `src/i18n/i18n.ts`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact
- Email: contact@homayoun.me

---

Made with ❤️ by Homayoun Asghari
