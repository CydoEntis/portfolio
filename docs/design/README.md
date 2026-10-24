# Handoff: Cody Stine — Developer Portfolio (v2)

## Overview
Single-page personal portfolio for Cody Stine, software developer (web, desktop, terminal/TUI, CLI, browser extensions, games). Dark, minimal, hard-cornered, lime accent. Projects are shown by **app icon** (screenshots live on GitHub).

## About the Design Files
`Cody Stine Portfolio.dc.html` is a **design reference built in HTML**, not production code. Recreate it in the target stack. If none exists, recommended: **Astro or Next.js (static)** + plain CSS/Tailwind. To view: open the HTML in a browser with `support.js` alongside. All content data (projects, earlier work, work, school) is in the `renderVals()` block at the bottom of the file.

## Fidelity
**High-fidelity.** Final colors, type, spacing, copy, interactions. Link `href`s are placeholders (`#`).

## Design Tokens
Colors
- bg `#0d0e0c` · surface `#141512` · lines `#1f201c` / `#23241f` / `#2c2d28`
- text `#ece8de` · body `#c9c5ba` · muted `#a9a59a` · faint `#6f6c63` · fainter `#4f4d46`
- lime `#c4f042` (primary) · lime-dim `#4d5a26` (hover borders) · orange `#f0a05a` (secondary: type dots, group labels, link hover)
- Gradient — used ONCE on hero word "software.": `linear-gradient(90deg,#c4f042,#f0a05a)` clipped to text
- Selection: bg lime, text `#0d0e0c`

Type: **Geist** 400–800, **Geist Mono** 400/500 (Google Fonts)
- Hero H1 clamp(52px,10vw,132px)/800/lh .92/ls -.045em
- Section H2 clamp(32px,4.4vw,52px) (Work) or clamp(28px,3.4vw,40px); Contact H2 clamp(44px,8vw,104px)/800
- Body 15–18px; eyebrows Geist Mono 12px `#6f6c63` with lime number: `01 ── selected work`
- Group labels (Work / Education): Geist Mono 12px uppercase, tracking .08em, orange

Shape: **border-radius 0 everywhere** except status dots. Container max-width 1200px, side padding clamp(20px,4vw,40px). Sections ~96px vertical, separated by 1px `#1f201c`.

Copy rule: **no em dashes** in copy.

## Sections
1. **Nav** (sticky, blurred bg rgba(13,14,12,.82)): CS pixel mark (22px, `image-rendering:pixelated`) + "CODY STINE"; links Work/About/Experience/Contact (hover: lime fill, dark text); GitHub ↗ chip.
2. **Hero**: 2-col grid (`auto-fit, minmax(min(100%,520px),1fr)`). Left: status line (lime dot w/ halo) "Software Developer · Independent Builder"; H1 "I build / software." with blinking lime block caret kept on the same line (`white-space:nowrap` wrapper); subline; buttons: "View my work ↓" (lime outline → lime fill on hover), GitHub, Contact (neutral outline). Right (≥1000px only): `~/projects` icon cluster — dashed frame, 6 project icons absolutely positioned, slightly rotated, gently floating (translateY 6–12px, 3.2–5.5s alternate ease-in-out, staggered); hover scale 1.08; click → #work. Below both: dashed rule + platform list (web apps, desktop, terminal / tui, cli tools, browser extensions, games) with 4px lime squares.
3. **01 Selected work** — "Things I've shipped." 3×2 grid of equal cards joined by 1px gap lines (`auto-fill, minmax(min(100%,320px),1fr)`). Card: 56px icon (no box), name 22/700, type mono uppercase, description, tech mono, footer with status dot + action link. Hover: bg → `#141512`, icon lifts/tilts (translateY(-3px) rotate(-4deg) scale(1.06)), arrow nudges 4px. **Order:** maitty, linkables, scrib, snipux, Clip-It, Reign of Crowns (Coming soon, no link). Status dot: lime = open source/free, orange = in development, grey = coming soon.
   - **Earlier work**: text rows (name / description + tech / "GitHub ↗"), flex-wrap so they stack on mobile; hover bg `#141512`.
4. **Statement band**: "I like building useful software regardless of where it runs, browser, desktop, terminal, or game engine." (second clause in `#6f6c63`).
5. **02 About** — "Hi, I'm Cody." + illustration (`cody-chief-ink.png`, max 320px, no frame) + 3 paragraphs, last mentions Chief as head of QA.
6. **03 Experience & education** — two groups: **Work** first (Drive Smart, Full Stack Developer, Apr 2023 – Present, lime "current" tag; Bay Master, Software Engineer Intern, Jan 2021 – May 2022), then **Education** (WGU B.S. Software Engineering; Ocean County College A.S. Computer Science). Rows: title / org / dates in auto-fit 3 columns.
7. **04 Contact** — "Want to build / something?" + "Send a note and I'll get back to you." + **contact form** (name, email, message, "Send message →"). Email address is intentionally NOT shown. Wire to a form service (Formspree / Web3Forms / Netlify Forms) forwarding to Cody's inbox. Success state: lime-bordered "Thanks. Message sent. I'll reply soon." Below: GitHub ↗, LinkedIn ↗, Résumé.pdf ↓ chips.
8. **Footer**: lime square + "Built by Cody. Supervised by Chief." · "© 2026 · back to top ↑".

## Motion
- Scroll reveal: elements below the fold fade up (opacity 0→1, translateY 18px→0, .8s cubic-bezier(.2,.7,.2,1), 70ms sibling stagger) via IntersectionObserver (threshold .12). **Never hide content already in view at load**; reveal everything on print / hidden tab / no IO support.
- Links/buttons: color/bg/border transitions .18s.
- Caret blink 1.1s steps(1).
- `prefers-reduced-motion: reduce` disables all motion.

## Responsive
Fluid everywhere (clamp type, auto-fit grids). Hero icon cluster hidden <1000px. Nav links wrap on small screens (optional: collapse into a menu on mobile).

## Assets
- `assets/icons/` — maitty-clean.png (cropped/cleaned), linkables.png, scrib.png, clip-it.png, crowns.png, cs.png (favicon + nav mark), snipux.png (32px original — the design uses an inline SVG redraw of the snipux mark; swap for a hi-res original if available)
- `assets/cody-chief-ink.png` — About illustration (transparent)

## Files
- `Cody Stine Portfolio.dc.html` — full design + content data
- `support.js` — runtime for viewing the reference only
- `assets/`
