# My Portfolio (React + Vite)

A fast, simple portfolio site built with React and Vite.

This README documents how to run, build, preview, lint, and deploy the app, and reflects the actual structure and scripts in this project.

---

## Overview

- Tech stack: React 19, Vite, ESLint
- Purpose: Showcase projects, skills, and contact information
- Status: Starter template currently (customize `src/App.jsx` and assets)

---

## Prerequisites

- Node.js 18+ and npm
- Git (optional, for deployment)

Check your versions:

```bash
node -v
npm -v
```

---

## Setup

Install dependencies:

```bash
npm install
```

Start local development server:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Environment Variables

This project uses Vite client-exposed env variables for the contact form.

- Copy the example env file and set your values:

```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# macOS/Linux
cp .env.example .env
```

- Open `.env` and set your Formspree ID:

```bash
VITE_FORMSPREE_ID=your_form_id
```

- Restart the dev server after changes:

```bash
npm run dev
```

Git ignores real env files via [.gitignore](.gitignore). Commit `.env.example` only — never commit `.env`.

### Per-environment files

Vite supports environment-specific files. If you prefer separate files:

```bash
# Development only
Copy-Item .env.example .env.development   # Windows
cp .env.example .env.development          # macOS/Linux
```

Edit `.env.development` and set:

```bash
VITE_FORMSPREE_ID=your_form_id
```

Note: `.env.development` and `.env.production` are ignored by Git to avoid committing secrets.

---

## Available Scripts

- `dev`: Starts Vite dev server with HMR.
- `build`: Builds the app into `dist`.
- `preview`: Serves the `dist` build locally.
- `lint`: Runs ESLint using the flat config in [eslint.config.js](eslint.config.js).
- `deploy` (added): Publishes `dist` to GitHub Pages via `gh-pages`.

---

## Project Structure

```
my-portfolio/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ eslint.config.js
├─ vite.config.js
├─ package.json
└─ README.md
```

- Entry HTML: [index.html](index.html)
- App root: [src/main.jsx](src/main.jsx)
- Main component: [src/App.jsx](src/App.jsx)
- Static assets: [src/assets](src/assets)

---

## Customization

- Update hero text, skills, and links inside [src/App.jsx](src/App.jsx).
- Add images/logos under [src/assets](src/assets).
- Adjust styles in [src/App.css](src/App.css) and [src/index.css](src/index.css).

---

## Linting

ESLint is configured via [eslint.config.js](eslint.config.js) and ignores `dist` output. Run:

```bash
npm run lint
```

---

## Deployment (GitHub Pages)

GitHub Pages is supported via the `gh-pages` package.

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder:
   ```bash
   npm run deploy
   ```
3. Ensure your repository has Pages enabled (Settings → Pages → Deploy from branch). If using a custom domain, configure DNS to point to GitHub Pages.

Alternative without script:

```bash
npx gh-pages -d dist
```

---

## Notes

- This README reflects the current starter template. As you add components (e.g., `Navbar`, `Projects`, `Contact`), update the structure and sections accordingly.
- Vite config: [vite.config.js](vite.config.js). React plugin is enabled.

---

**Author:** Kyaw Thet Khaing
**Tech:** React + Vite + ESLint
