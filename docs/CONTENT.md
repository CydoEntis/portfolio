# Site content

The words and links the site shows. The design in `docs/design/` uses
placeholder copy; wherever the two differ, this file wins. Copy it exactly.
Don't invent descriptions, metrics or bullet points that are not here.

## Identity

- Name: Cody Stine
- Status line: Software Developer · Independent Builder
- Headline: "I build / software." (the short variant)
- Sub: Apps, tools, games, and whatever else seems worth building.
- Platform row: web apps, desktop, terminal / tui, cli tools, browser extensions, games

## Links

- GitHub: https://github.com/CydoEntis
- LinkedIn: https://www.linkedin.com/in/cody-stine-dev/
- Résumé: /resume.pdf (already in `public/`)
- Email: cydoentis@gmail.com (`EMAIL` in `src/content/site.ts`; the link
  hides if it is ever empty)

## 01 Selected work

Header: "Things I've shipped." Note: "Browser, desktop, terminal, or game
engine — wherever the idea runs best."

Status dot colours: lime for open source / shipped / free, orange for in
development.

scrib and linkables are paid apps, and Clip-It's and Reign of Crowns' repos are private: never link to their source.
Their action link goes to the app's landing page or store listing.

### Featured (large cards, in this order)

**maitty**
- Type: TUI
- Status: Open source · v0.42 (lime)
- Description: Run Claude Code, Codex and other coding agents side by side. They keep working after you close the window, and maitty shows which ones need you when you're back.
- Tech: Rust · Windows / macOS / Linux
- Media: `/projects/maitty.gif`
- Action: "View on GitHub" → https://github.com/CydoEntis/maitty

**snipux**
- Type: Desktop
- Status: Open source · v1.2 (lime)
- Description: A Snipping Tool workalike for Linux and Windows. Snip a region, a window or the whole screen, mark it up and blur what shouldn't be shared, or record the same area and trim it.
- Tech: Python · PyQt6
- Media: `/projects/snipux.webp`
- Action: "View on GitHub" → https://github.com/CydoEntis/snipux

### More work (small cards, in this order)

**scrib**
- Type: Desktop
- Status: In development (orange)
- Description: A fast, local-first desktop notebook that understands what you write: lists, running totals and unit conversions, all in plain text.
- Tech: Tauri · React · TypeScript
- Media: `/projects/scrib.webp`
- Action: "Visit site" → https://getscrib.com

**linkables**
- Type: Web app
- Status: In development (orange)
- Description: Save any link in seconds, find it later from any device, and share it when you need to.
- Tech: React · Hono · Postgres
- Media: none; use the icon tile with `/projects/linkables-icon.png`
- Action: "Visit site" → https://linkables.app

**Clip-It**
- Type: Browser extension
- Status: Free (lime)
- Description: A Chrome extension that loads every ShopRite digital coupon in one click, checks each one actually saved, and can run on a schedule.
- Tech: JavaScript · Chrome extension
- Media: `/projects/clip-it.webp`
- Action: "Add to Chrome" → https://chromewebstore.google.com/detail/clip-it-digital-coupon-lo/eholcdgbgoljfmjkidhmmiabdcpigaai

**Reign of Crowns**
- Type: Browser game
- Status: Coming soon (orange)
- Description: An MMORTS 4X you play free in your browser. Build an army, grow your castle and ally with other players to capture the 3 crowns before the season ends.
- Tech: React · PixiJS · Node · Postgres
- Media: none yet; the logo is coming
- Action: none until it launches. The repo is private: never link to its source.

### Earlier work (compact list under the cards)

A heading "Earlier work" and one row per project: name, one-line
description, tech, and a "GitHub ↗" link. No live-site links: none of these
are hosted any more. Rows use the workbench row style (see the design).

| Name | Description | Tech | GitHub |
|---|---|---|---|
| PupDrive | Cloud storage with bucket-style "Crates", role-based permissions and subscription quotas. | React · .NET · Postgres | https://github.com/CydoEntis/PupDrive |
| ShipHound | CLI that deploys full-stack apps to a VPS: builds, SSH upload, Caddy with HTTPS, systemd, zero-downtime swaps. | C# · .NET | https://github.com/CydoEntis/ShipHound |
| PupStack | Full-stack app generator with auth, an admin dashboard, OAuth and themeable layouts. | React · .NET | https://github.com/CydoEntis/PupStack |
| Pawprint | Screenshots a web app across every route, theme, palette and viewport with Playwright. | TypeScript · Playwright | https://github.com/CydoEntis/Pawprint |
| Pawthorize | Authentication library for ASP.NET Core: JWT with rotating refresh tokens, OAuth, sessions, lockout. | C# · .NET | https://github.com/CydoEntis/Pawthorize |
| ErrorHound | Middleware for consistent, typed API error responses in ASP.NET Core. | C# · .NET | https://github.com/CydoEntis/ErrorHound |
| SuccessHound | Strongly typed API success envelopes for .NET, with OpenAPI schemas and pagination. | C# · .NET | https://github.com/CydoEntis/SuccessHound |
| StashPup | One file-storage interface for local disk, S3 and Azure Blob, with thumbnails and signed URLs. | C# · .NET | https://github.com/CydoEntis/StashPup |

## Statement band

I like building useful software regardless of where it runs — browser,
desktop, terminal, or game engine.

## 02 Currently building

Header: "On the workbench."

| Name | Description | Status |
|---|---|---|
| tinkery | A small terminal text editor: file tree, tabs, tree-sitter, LSP and a run panel. | in progress (lime) |
| crowns | A strategy game you can finish in ten minutes. | prototype (orange) |

## 03 About

Header: "Hi, I'm Cody." Illustration: `/about/cody-chief.webp`, alt text
"Illustration of Cody with his dog Chief on his shoulder".

1. I'm a software developer who likes turning ideas into working software. I build across web, desktop, terminal applications, developer tools, and games.
2. I care about simple interfaces, useful products, and understanding how things work under the hood. I'd rather pick the right tool for the job than stay locked into one stack — so I experiment a lot.
3. When I'm not at the keyboard, I'm usually out with **Chief**, who also serves as head of QA.

## 04 Experience

Header: "Where I've worked." Entries have no summary or bullets yet; render
the left column only and leave the right column empty. Don't write any.

| Title | Organisation | Dates | Link |
|---|---|---|---|
| Full Stack Developer | Drive Smart | Apr 2023 — Aug 2024 | https://www.drivesmart.auto |
| B.S. Software Engineering | Western Governors University | Sep 2021 — May 2023 | |
| Software Engineer Intern | Bay Master | Jan 2021 — May 2022 | https://www.bay-master.com/ |
| A.S. Computer Science | Ocean County College | Sep 2019 — Jan 2021 | |

## 05 Contact

Header: "Want to build / something?" Then the email link (when set), then
chips: GitHub ↗, LinkedIn ↗, Résumé.pdf ↓.

## Footer

"Built by Cody. Supervised by Chief." · "© 2026 · back to top ↑"
