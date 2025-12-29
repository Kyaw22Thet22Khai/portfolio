# Portfolio Improvements

This document tracks applied improvements and suggestions for next steps.

## Completed

- Accessibility: Added `.section { scroll-margin-top: 96px; }` to ensure hash navigation does not hide headings under the fixed navbar.
- Accessibility: Added clear `:focus-visible` styles for navbar links and hero social icons.
- Security/UX: Added `rel="noopener noreferrer"` to external links in project cards.
- React List Keys: Moved `key` to the mapped `ProjectCard` element and removed `projectKey` prop + redundant `key` on the inner Motion container.
- Motion Preferences: Implemented `useReducedMotion` in `AnimateSection.jsx` and `Hero.jsx`. Removed debug `console.log`.
- CSS Hygiene: Removed Vite template CSS import from `src/main.jsx`.
- SEO: Updated `<title>` and added meta description, Open Graph, and Twitter card tags in `index.html`.
- Contact: Made email and GitHub links clickable with proper attributes.

## Optional / Proposed

- Projects Grid: Replace breakpoints with a simpler responsive grid: `repeat(auto-fit, minmax(240px, 1fr))` in `src/components/Projects/projects.css`.
- Favicon: Replace `public/vite.svg` with a custom favicon or add `favicon.ico`.
- Social Links: Replace placeholder `#` in hero social buttons with real profile URLs, or hide inactive icons from keyboard and screen readers.
- Deployment: If deploying to GitHub Pages under a subpath, set `base` in `vite.config.js` to your repository name.
- Structured Data: Optionally add JSON-LD Person schema, `sitemap.xml`, and `robots.txt`.

## Verifying Locally

```bash
npm install
npm run dev
```

# Portfolio Improvements

This document tracks applied improvements and suggestions for next steps.

## Completed

- Accessibility: Added `.section { scroll-margin-top: 96px; }` to ensure hash navigation does not hide headings under the fixed navbar.
- Accessibility: Added clear `:focus-visible` styles for navbar links and hero social icons.
- Security/UX: Added `rel="noopener noreferrer"` to external links in project cards.
- React List Keys: Moved `key` to the mapped `ProjectCard` element and removed `projectKey` prop + redundant `key` on the inner Motion container.
- Motion Preferences: Implemented `useReducedMotion` in `AnimateSection.jsx` and `Hero.jsx`. Removed debug `console.log`.
- CSS Hygiene: Removed Vite template CSS import from `src/main.jsx`.
- SEO: Updated `<title>` and added meta description, Open Graph, and Twitter card tags in `index.html`.
- Contact: Made email and GitHub links clickable with proper attributes.
- Projects Grid: Updated `src/components/Projects/projects.css` to use `repeat(auto-fit, minmax(240px, 1fr))` for responsive layout.
- Favicon: Added `public/favicon.svg` and updated `index.html` to point to it.

## Optional / Proposed

- Social Links: Replace placeholder `#` in hero social buttons with real profile URLs, or hide inactive icons from keyboard and screen readers.
- Deployment: If deploying to GitHub Pages under a subpath, set `base` in `vite.config.js` to your repository name.
- Structured Data: Optionally add JSON-LD Person schema, `sitemap.xml`, and `robots.txt`.

## Verifying Locally

```bash
npm install
npm run dev
```

## Files Touched

- src/styles/global.css
- src/components/Navbar/navbar.css
- src/components/Hero/hero.css
- src/components/Projects/Projects.jsx
- src/components/Projects/ProjectCard.jsx
- src/components/Projects/projects.css
- src/components/AnimateSection.jsx
- src/components/Hero/Hero.jsx
- src/main.jsx
- index.html
- src/components/Contact/Contact.jsx
- public/favicon.svg

If you want, I can also replace the social `#` placeholders with real profile links and help create a multi-resolution favicon (ICO / PNG) for broader compatibility.
