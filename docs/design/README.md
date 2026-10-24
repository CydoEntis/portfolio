# Handoff: Cody Stine — Developer Portfolio

## Overview
Single-page personal portfolio for Cody Stine, a software developer who builds web apps, desktop apps, terminal/TUI apps, CLIs, browser extensions, and games. Goals: present Cody as a versatile builder, showcase projects, feel personal (dog Chief) but not résumé-like. Dark, minimal, hard-cornered, lime accent.

## About the Design Files
`Cody Stine Portfolio.dc.html` is a **design reference built in HTML** — it shows intended look and behavior, not production code. Recreate it in the target codebase's environment. If none exists, recommended: **Astro or Next.js (static export)** + plain CSS / Tailwind. Open the HTML in a browser (keep `support.js` alongside) to view it.

## Fidelity
**High-fidelity.** Final colors, type, spacing, hover states. Project/experience copy is **placeholder** except Hydra — replace with real content.

## Design Tokens
Colors
- `--bg` #0d0e0c (page)
- `--surface` #141512 (cards, row hover)
- `--surface-2` #10110f (card media bg) · #1b1c18 (icon tiles)
- `--line` #1f201c (section dividers) · #23241f (card borders) · #2c2d28 (button/chip borders) · #33342e (icon tile border)
- `--text` #ece8de · `--text-2` #c9c5ba (body copy) · `--muted` #a9a59a · `--faint` #6f6c63 · `--fainter` #4f4d46
- `--lime` #c4f042 (primary accent) · `--lime-hover` #d6f77a · `--lime-dim` #4d5a26 (hover borders)
- `--orange` #f0a05a (secondary: type tags, "in development" dots, tool group labels, link hover)
- Gradient (used ONCE, hero word "software."): `linear-gradient(90deg, #c4f042 0%, #f0a05a 100%)` clipped to text
- Selection: bg #c4f042, text #0d0e0c

Typography
- Sans: **Geist** 400/500/600/700/800 · Mono: **Geist Mono** 400/500 (Google Fonts)
- Hero H1: clamp(52px,10vw,132px) / 800 / line-height .92 / letter-spacing -.045em
- Section H2: clamp(32px,4.4vw,52px) (Work) or clamp(28px,3.4vw,40px) (others) / 700 / -.03em
- Contact H2: clamp(44px,8vw,104px) / 800 / .95 / -.045em
- Statement: clamp(28px,4vw,48px) / 600 / 1.15 / -.025em, second clause in #6f6c63
- Body: 18px/1.6 (About), 15px/1.55 (cards, lists)
- Eyebrows: Geist Mono 12px #6f6c63, number in lime: `01 ── selected work`
- Tags: Geist Mono 10–11px uppercase, letter-spacing .06em

Shape
- **Border radius: 0 everywhere** (hard corners). Only round elements: status dots (50%).
- Card hover shadow: `0 24px 48px -24px rgba(196,240,66,.18)`
- Icon tile shadow: `0 20px 40px -12px rgba(0,0,0,.6)`

Layout
- Container max-width 1200px, horizontal padding clamp(20px,4vw,40px)
- Section vertical padding ~64–96px; sections separated by 1px #1f201c top borders

## Sections (top → bottom)

**Nav** (sticky, top 0): bg rgba(13,14,12,.82) + backdrop-blur 10px, bottom border #1f201c. Left: 8×8 lime square + "CODY STINE" (14px/700, tracking .08em). Right: Work · About · Experience · Contact (14px #a9a59a, padding 6px 10px; hover → lime bg, #0d0e0c text) + "GitHub ↗" mono 12px bordered chip (hover: lime border + text).

**Hero** (padding clamp(72px,12vw,150px) top): optional 48px grid texture behind (1px lines rgba(236,232,222,.035), masked to fade out by 90%). Status line: 7px lime dot with 4px halo ring + "Software Developer · Independent Builder" (mono 13px #a9a59a). H1 "I build / software." — "software." uses the gradient; followed by a blinking lime block caret (width .09em, height .78em, 1.1s steps(1) blink). Sub: "Apps, tools, games, and whatever else seems worth building." (clamp 18–22px #a9a59a, max-width 620). Buttons (48px tall, gap 12):
- "View my work ↓" — outlined lime (1px #c4f042, lime text); hover fills lime, dark text
- "GitHub", "Contact" — 1px #2c2d28 border, #ece8de text; hover border #ece8de
Platform row (margin-top 72, dashed top border #2a2b26): mono 12px #6f6c63 items each preceded by 4×4 lime square: web apps, desktop, terminal / tui, cli tools, browser extensions, games.

**01 Selected work** (id `work`): header row with H2 "Things I've shipped." + right-aligned note (max 360px). 
- Featured grid: `repeat(auto-fit, minmax(min(100%,460px),1fr))`, gap 20. Card: bg #141512, 1px #23241f border; media 16:10 (#10110f with 24px grid lines) holding screenshot (object-fit cover, position center 30%) or a 96px icon tile fallback; type tag top-left (dark chip, 6px orange square + uppercase mono). Body padding 24: name 24px/700 + status (mono 11px, colored dot: lime = shipped/free/open source, orange = beta/in development); description 15px #a9a59a; footer row with top border: tech stack mono 12px #6f6c63 + action link lime 14px/600 "→" (hover lime bg, dark text). Card hover: translateY(-4px), border #4d5a26, lime shadow, .25s ease.
- Secondary grid: `minmax(min(100%,260px),1fr)`, same card scaled down (4:3 media, 64px icon tile, 18px title).
- Featured #1 is **Hydra** (real): TUI · In development · "Many heads, one body — a terminal home for your coding agents. They keep going when you leave, and Hydra tells you what needs you when you're back." · Terminal · v0.1.0 · Learn more. Others (Tidepool, lanes, Relay, Tabkeep, shipit, Rootbound) are placeholders.

**Statement band**: top/bottom borders, 80px padding: "I like building useful software regardless of where it runs — browser, desktop, terminal, or game engine."

**02 Currently building** (id `building`): H2 "On the workbench." Rows: grid `minmax(0,200px) minmax(0,1fr) auto`, padding 20/12, bottom border #23241f, hover bg #141512. Name 16/600 · description 15px #a9a59a · status mono 11.5px with 6px square (orange prototype, lime in progress, grey exploring/paused). Placeholder content.

**03 About** (id `about`): 2-col auto-fit grid (min 340px), gap 48. Left: eyebrow, H2 "Hi, I'm Cody.", illustration `cody-chief-ink.png` (max-width 320px, natural aspect, no box/border). Right: three 18px #c9c5ba paragraphs — the last: "When I'm not at the keyboard, I'm usually out with Chief, who also serves as head of QA." ("Chief" in #ece8de).

**04 Experience** (id `experience`): H2 "Where I've worked." Each role: auto-fit 2-col (min 280px), 28px padding, top border. Left: title 18/600, company 15px #a9a59a, dates mono 12px #6f6c63. Right: summary 15px + bullets with lime mono "›" marker. Placeholder content.

**05 Contact** (id `contact`): huge H2 "Want to build / something?" (no gradient). Email link clamp(20–30px) lime with 2px #4d5a26 underline (hover: orange text + border). Chips: GitHub ↗, LinkedIn ↗, Résumé.pdf ↓ (mono 13, padding 10/14, 1px #2c2d28; hover lime fill, dark text).

**Footer**: top border; left: 6px lime square + "Built by Cody. Supervised by Chief." (13px, second sentence #a9a59a); right: "© 2026 · back to top ↑" mono 12.

## Interactions & Behavior
- Anchor nav with `scroll-behavior: smooth`; sections have `scroll-margin-top: 72px` for the sticky nav.
- Hover states as listed; transitions .15–.25s ease.
- Caret blink is the only animation. Respect `prefers-reduced-motion` (disable blink + card lift).
- Fully fluid: all grids use auto-fit/minmax and collapse to one column on mobile; type uses clamp().
- No state management/data fetching required; content can live in a JSON/MD file (projects, experiments, roles).

## Optional variants (Tweaks in the mock)
- `headline`: Short ("I build software.") or Long ("Software developer building useful things across web, desktop, terminal, and games.")
- `gridTexture`: hero grid on/off · `caret`: blinking caret on/off · `flipPortrait`: mirror illustration

## Assets
- `assets/hydra.png` — Hydra TUI screenshot (provided by Cody)
- `assets/cody-chief-ink.png` — Cody + Chief illustration, transparent bg (provided by Cody; may be replaced by a flatter redraw)
- Other project screenshots: TBD — placeholders use initials tiles.
- Email `hello@codystine.dev` and all social links are placeholders.

## Files
- `Cody Stine Portfolio.dc.html` — the full design (markup + data in the logic class at bottom)
- `support.js` — runtime needed only to open the HTML reference
- `assets/` — images
