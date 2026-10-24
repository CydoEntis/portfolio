# portfolio

Cody Stine's personal site: one dark page covering selected work, what's on
the workbench, about, experience and contact.

## Develop

```sh
npm ci
npm run dev      # http://localhost:3000
npm run check    # typecheck, build and tests
```

## Where things live

- **Words and links:** `docs/CONTENT.md` is the source; `src/content/site.ts`
  holds the same content as typed data the page renders. Change both together.
- **Design:** `docs/design/README.md` is the spec (tokens, type, every
  section). `docs/design/portfolio.dc.html` shows it rendered; keep
  `support.js` beside it to open it.
- **Sections:** one folder each under `src/features/`, with tests beside them.
- **Images:** `public/projects/` and `public/about/`.

Built with React, Vite, TanStack Router and Tailwind CSS.
