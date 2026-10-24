# portfolio — agent instructions

Cody Stine's personal site: one page, dark, hard corners, lime accent.

## Sources of truth

- `docs/design/README.md` is the design spec: tokens, type, spacing, every
  section and hover state. `docs/design/portfolio.dc.html` shows it rendered
  (open it with `support.js` beside it). It is a reference; recreate it here,
  don't paste its markup.
- `docs/CONTENT.md` is every word and link on the site. Where the design's
  placeholder copy differs, CONTENT.md wins. Never invent copy, metrics,
  bullets or links.

## Stack

React 19, Vite, TanStack Router (file routes in `src/routes/`), Tailwind CSS
v4, TypeScript strict. npm, not pnpm. No new runtime dependencies without the
ticket saying so.

## Layout

Vertical slices: each section lives in `src/features/<section>/` with its
components and tests beside it. Site content lives in `src/content/site.ts`
as typed data, copied from `docs/CONTENT.md`. Design tokens are CSS custom
properties in `src/styles.css`; components use them through Tailwind, never
hard-coded hex values. Images are in `public/icons/` and `public/about/`.

## Rules

- Border radius is 0 everywhere except status dots.
- The page is dark only. There is no theme toggle.
- `prefers-reduced-motion` turns off all motion: caret, floating icons, scroll
  reveal and hover movement. Scroll reveal never hides what is already in view.
- Every grid collapses to one column at phone width with no horizontal scroll.
- Links that leave the site open in a new tab with `rel="noreferrer"`.
- Comments say why, not what.

## Commands

```sh
npm ci
npm run check      # typecheck, build and tests — what the verify step runs
npm run dev        # http://localhost:3000
```

Tests use Vitest and Testing Library, beside the component
(`Foo.test.tsx`). Test what a visitor sees: text, links and their targets,
alt text. Not class names.

## Commits

Every commit and PR title is `<type>(<scope>): <subject>`, lowercase,
imperative, at most 50 characters; scope is the section (`hero`, `work`,
`about`, ...). Stage files by path, never `git add -A`.

**Never add AI attribution** to a commit or pull request: no
`Co-Authored-By` trailer, no session link, no "Generated with" footer.
