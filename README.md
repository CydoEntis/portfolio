# codystine.com — Portfolio 2025

Personal developer portfolio for Cody Stine — a full-stack developer specializing in .NET and React.

## Purpose

This portfolio is designed to:

- **Showcase real projects** — Full-stack applications and reusable .NET libraries, each with live demos and source code
- **Demonstrate technical range** — From backend auth libraries to frontend app generators to CLI deployment tools
- **Provide a clear professional profile** — Experience timeline, tech stack, and direct contact form
- **Ship clean** — No bloat, no unused dependencies, no dead code

## Tech Stack

- **React 19** + **TypeScript** — UI layer
- **Vite 7** — Build tooling
- **TanStack Router** — File-based routing
- **Tailwind CSS v4** — Styling with custom design tokens
- **shadcn/ui** — Form primitives (Form, Input, Textarea, Sheet)
- **EmailJS** — Contact form delivery
- **Sonner** — Toast notifications

## Project Structure

```
src/
├── components/          # Shared UI (Header, Footer, FadeIn, SectionHeader, ThemeToggle)
├── features/
│   ├── hero/            # Landing section (badge, heading, CTA, social links)
│   ├── skills/          # Tech stack display
│   ├── experience/      # Work + education timeline
│   ├── projects/        # Applications + packages with tabs
│   └── contact/         # Contact form
├── lib/                 # Utilities and shared constants
├── routes/              # TanStack Router file-based routes
└── styles.css           # Design tokens and theme variables
```

## Running Locally

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```
