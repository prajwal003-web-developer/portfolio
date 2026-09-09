# Prajwal Neupane — Portfolio

A production-quality developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Motion. All content is sourced directly from the resume — nothing invented.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion) for animation
- lucide-react for icons
- Self-hosted fonts via `@fontsource` (Space Grotesk, Inter, JetBrains Mono) — no runtime dependency on Google Fonts

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> `--legacy-peer-deps` is needed because `lucide-react@0.383.0` (pinned for its brand icons like GitHub/LinkedIn) declares a peer range that predates React 19. This is safe — the package works fine with React 19 in practice.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Design tokens (colors, fonts) + Tailwind v4 @theme
components/
  Navbar.tsx          Sticky nav with scroll effect + mobile menu
  Hero.tsx            Hero section with entrance animation
  About.tsx           Background / bio split layout
  Skills.tsx          Grouped technology badges
  Experience.tsx      Work experience (dark section)
  Projects.tsx        Featured + secondary project layouts
  Education.tsx       Education cards
  Contact.tsx         Contact links (dark section)
  Footer.tsx
  ui/
    Reveal.tsx         Scroll-reveal animation wrapper (respects prefers-reduced-motion)
    SectionHeading.tsx Reusable section heading with mono "path" label
data/
  portfolio.ts        SINGLE SOURCE OF TRUTH for all content — edit this file
lib/
  utils.ts            Small classname helper
```

## Where to edit things

**All text content, links, skills, projects, experience, and education live in `data/portfolio.ts`.** You don't need to touch any component file to update content — just edit that file.

- **GitHub / LinkedIn / website / email** → `profile.links` and `profile.email` in `data/portfolio.ts`
- **Project GitHub links** → `projects[].githubUrl` is currently empty for both projects (the resume didn't include repo links, only live demo links, so the "Source" button is hidden). Fill these in and the button will appear automatically — see the `ProjectLinks` component in `components/Projects.tsx` for the conditional logic.
- **Resume/CV download** → not included, since no resume file was provided. To add one: drop a PDF at `public/resume.pdf` and add a link in `components/Hero.tsx` next to the existing CTAs.
- **Favicon** → replace `app/favicon.ico`.
- **Colors / fonts** → `app/globals.css`, inside the `:root` and `@theme inline` blocks.

## Notes

- No contact form is included. Since no backend/email service was specified, the Contact section links directly to `mailto:` and social profiles rather than pretending a form works.
- No environment variables are required — this is a fully static, client-side site with no API calls.
- Animations respect `prefers-reduced-motion` throughout (see `components/ui/Reveal.tsx`).
