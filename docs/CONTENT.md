# Site content

The words and links the site shows. The design in `docs/design/` (v2) is
high fidelity, but its links are placeholders and two of its details are
wrong (noted below); wherever the two differ, this file wins. Copy it
exactly. Don't invent descriptions, metrics or bullet points that are not
here. Copy rule from the design: no em dashes.

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
- No email address is shown anywhere. Visitors write through the contact form.

## 01 Selected work

Header: "Things I've shipped." Note: "Browser, desktop, terminal, or game
engine. Wherever the idea runs best."

Status dot colours: lime for open source / free, orange for in development,
grey for coming soon.

scrib and linkables are paid apps, and Clip-It's and Reign of Crowns' repos
are private: never link to their source. Their action link goes to the
app's landing page or store listing, or there is none.

Projects, in this order. Icons are in `public/icons/`.

**maitty**
- Type: TUI
- Status: Open source · v0.42 (lime)
- Description: Run Claude Code, Codex and other coding agents side by side. They keep working after you close the window, and maitty shows which ones need you when you're back.
- Tech: Rust · Windows / macOS / Linux (the design says React; maitty is Rust)
- Action: "GitHub" → https://github.com/CydoEntis/maitty

**linkables**
- Type: Web app
- Status: In development (orange)
- Description: Save any link in seconds, find it later from any device, and share it when you need to.
- Tech: React · Hono · Postgres
- Action: "Visit site" → https://linkables.app

**scrib**
- Type: Desktop
- Status: In development (orange)
- Description: A fast, local-first desktop notebook that understands what you write: lists, running totals and unit conversions, all in plain text.
- Tech: Tauri · React · TypeScript
- Action: "Visit site" → https://getscrib.com

**snipux**
- Type: Desktop
- Status: Open source · v1.2 (lime)
- Description: A Snipping Tool workalike for Linux and Windows. Snip a region, a window or the whole screen, mark it up and blur what shouldn't be shared, or record the same area and trim it.
- Tech: Python · PyQt6
- Icon: the app's own 256px icon from the snipux repo, not the design's redraw
- Action: "GitHub" → https://github.com/CydoEntis/snipux

**Clip-It**
- Type: Extension
- Status: Free (lime)
- Description: A Chrome extension that loads every ShopRite digital coupon in one click, checks each one actually saved, and can run on a schedule.
- Tech: JavaScript · Chrome extension
- Action: "Add to Chrome" → https://chromewebstore.google.com/detail/clip-it-digital-coupon-lo/eholcdgbgoljfmjkidhmmiabdcpigaai

**Reign of Crowns**
- Type: Game
- Status: Coming soon (grey)
- Description: An MMORTS 4X you play free in your browser. Build an army, grow your castle and ally with other players to capture the 3 crowns before the season ends. (From the game's landing page. The design's line belongs to a different game, the ten-minute "crowns".)
- Tech: In the works
- Action: none until it launches

### Earlier work (rows under the cards, each linking to GitHub)

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

I like building useful software regardless of where it runs, **browser,
desktop, terminal, or game engine.** (the bold part in the faint colour)

## 02 About

Header: "Hi, I'm Cody." Illustration: `/about/cody-chief.webp`, alt text
"Illustration of Cody with Chief on his shoulders".

1. I'm a software developer who likes turning ideas into working software. I build across web, desktop, terminal applications, developer tools, and games.
2. I care about simple interfaces, useful products, and understanding how things work under the hood. I'd rather pick the right tool for the job than stay locked into one stack, so I experiment a lot.
3. When I'm not at the keyboard, I'm usually out with **Chief**, who also serves as head of QA.

## 03 Experience

Header: "Experience & education." Two groups, Work first.

Work:

| Title | Organisation | Dates | Link |
|---|---|---|---|
| Full Stack Developer | Drive Smart | Apr 2023 – Present (current) | https://www.drivesmart.auto |
| Software Engineer Intern | Bay Master | Jan 2021 – May 2022 | https://www.bay-master.com/ |

Education:

| Title | Organisation | Dates |
|---|---|---|
| B.S. Software Engineering | Western Governors University | Sep 2021 – May 2023 |
| A.S. Computer Science | Ocean County College | Sep 2019 – Jan 2021 |

## 04 Contact

Header: "Want to build / something?" Sub: "Send a note and I'll get back to
you." Then the form: Name, Your email, "What are you building?", button
"Send message →". It posts to Web3Forms, which forwards to Cody's inbox;
the access key is `CONTACT_FORM_KEY` in `src/content/site.ts`, and the sub
and form hide while it is empty.

- Sent: "Thanks. Message sent. I'll reply soon."
- Failed: "That didn't send. Please try again in a moment."

Then chips: GitHub ↗, LinkedIn ↗, Résumé.pdf ↓.

## Footer

"Built by Cody. Supervised by Chief." · "© 2026 · back to top ↑"
