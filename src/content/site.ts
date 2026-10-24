// Copied from docs/CONTENT.md. Change the words there first, then here.
// The design's copy rule: no em dashes.

export const LINKS = {
  github: "https://github.com/CydoEntis",
  linkedin: "https://www.linkedin.com/in/cody-stine-dev/",
  resume: "/resume.pdf",
} as const;

/**
 * Web3Forms access key for the contact form. It is meant to sit in public
 * page code: it can only send mail to the inbox it was made for. The form
 * hides while this is empty.
 */
export const CONTACT_FORM_KEY = "";

export const IDENTITY = {
  name: "Cody Stine",
  status: "Software Developer · Independent Builder",
  headline: ["I build", "software."],
  sub: "Apps, tools, games, and whatever else seems worth building.",
  platforms: [
    "web apps",
    "desktop",
    "terminal / tui",
    "cli tools",
    "browser extensions",
    "games",
  ],
} as const;

/** Lime: open source or free. Orange: in development. Grey: coming soon. */
export type Tone = "lime" | "orange" | "grey";

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  type: string;
  status: string;
  tone: Tone;
  description: string;
  tech: string;
  icon: string;
  /** Pixel-art icons stay sharp when scaled up. */
  pixelated?: boolean;
  /** Paid apps point at their landing page, never their source. */
  action?: Link;
};

export const WORK = {
  heading: "Things I've shipped.",
  note: "Browser, desktop, terminal, or game engine. Wherever the idea runs best.",
};

export const PROJECTS: Project[] = [
  {
    name: "maitty",
    type: "TUI",
    status: "Open source · v0.42",
    tone: "lime",
    description:
      "Run Claude Code, Codex and other coding agents side by side. They keep working after you close the window, and maitty shows which ones need you when you're back.",
    tech: "Rust · Windows / macOS / Linux",
    icon: "/icons/maitty.webp",
    action: { label: "GitHub", href: "https://github.com/CydoEntis/maitty" },
  },
  {
    name: "linkables",
    type: "Web app",
    status: "In development",
    tone: "orange",
    description:
      "Save any link in seconds, find it later from any device, and share it when you need to.",
    tech: "React · Hono · Postgres",
    icon: "/icons/linkables.webp",
    action: { label: "Visit site", href: "https://linkables.app" },
  },
  {
    name: "scrib",
    type: "Desktop",
    status: "In development",
    tone: "orange",
    description:
      "A fast, local-first desktop notebook that understands what you write: lists, running totals and unit conversions, all in plain text.",
    tech: "Tauri · React · TypeScript",
    icon: "/icons/scrib.webp",
    action: { label: "Visit site", href: "https://getscrib.com" },
  },
  {
    name: "snipux",
    type: "Desktop",
    status: "Open source · v1.2",
    tone: "lime",
    description:
      "A Snipping Tool workalike for Linux and Windows. Snip a region, a window or the whole screen, mark it up and blur what shouldn't be shared, or record the same area and trim it.",
    tech: "Python · PyQt6",
    icon: "/icons/snipux.svg",
    action: { label: "GitHub", href: "https://github.com/CydoEntis/snipux" },
  },
  {
    name: "Clip-It",
    type: "Extension",
    status: "Free",
    tone: "lime",
    description:
      "A Chrome extension that loads every ShopRite digital coupon in one click, checks each one actually saved, and can run on a schedule.",
    tech: "JavaScript · Chrome extension",
    icon: "/icons/clip-it.webp",
    action: {
      label: "Add to Chrome",
      href: "https://chromewebstore.google.com/detail/clip-it-digital-coupon-lo/eholcdgbgoljfmjkidhmmiabdcpigaai",
    },
  },
  {
    name: "Reign of Crowns",
    type: "Game",
    status: "Coming soon",
    tone: "grey",
    description:
      "An MMORTS 4X you play free in your browser. Build an army, grow your castle and ally with other players to capture the 3 crowns before the season ends.",
    tech: "In the works",
    icon: "/icons/reign-of-crowns.png",
    pixelated: true,
  },
];

export type EarlierProject = {
  name: string;
  description: string;
  tech: string;
  github: string;
};

export const EARLIER_WORK: EarlierProject[] = [
  {
    name: "PupDrive",
    description:
      'Cloud storage with bucket-style "Crates", role-based permissions and subscription quotas.',
    tech: "React · .NET · Postgres",
    github: "https://github.com/CydoEntis/PupDrive",
  },
  {
    name: "ShipHound",
    description:
      "CLI that deploys full-stack apps to a VPS: builds, SSH upload, Caddy with HTTPS, systemd, zero-downtime swaps.",
    tech: "C# · .NET",
    github: "https://github.com/CydoEntis/ShipHound",
  },
  {
    name: "PupStack",
    description:
      "Full-stack app generator with auth, an admin dashboard, OAuth and themeable layouts.",
    tech: "React · .NET",
    github: "https://github.com/CydoEntis/PupStack",
  },
  {
    name: "Pawprint",
    description:
      "Screenshots a web app across every route, theme, palette and viewport with Playwright.",
    tech: "TypeScript · Playwright",
    github: "https://github.com/CydoEntis/Pawprint",
  },
  {
    name: "Pawthorize",
    description:
      "Authentication library for ASP.NET Core: JWT with rotating refresh tokens, OAuth, sessions, lockout.",
    tech: "C# · .NET",
    github: "https://github.com/CydoEntis/Pawthorize",
  },
  {
    name: "ErrorHound",
    description: "Middleware for consistent, typed API error responses in ASP.NET Core.",
    tech: "C# · .NET",
    github: "https://github.com/CydoEntis/ErrorHound",
  },
  {
    name: "SuccessHound",
    description:
      "Strongly typed API success envelopes for .NET, with OpenAPI schemas and pagination.",
    tech: "C# · .NET",
    github: "https://github.com/CydoEntis/SuccessHound",
  },
  {
    name: "StashPup",
    description:
      "One file-storage interface for local disk, S3 and Azure Blob, with thumbnails and signed URLs.",
    tech: "C# · .NET",
    github: "https://github.com/CydoEntis/StashPup",
  },
];

export const STATEMENT = {
  lead: "I like building useful software regardless of where it runs,",
  clause: "browser, desktop, terminal, or game engine.",
};

export const ABOUT = {
  heading: "Hi, I'm Cody.",
  image: "/about/cody-chief.webp",
  imageAlt: "Illustration of Cody with Chief on his shoulders",
  paragraphs: [
    "I'm a software developer who likes turning ideas into working software. I build across web, desktop, terminal applications, developer tools, and games.",
    "I care about simple interfaces, useful products, and understanding how things work under the hood. I'd rather pick the right tool for the job than stay locked into one stack, so I experiment a lot.",
  ],
  // Rendered separately so "Chief" can take the brighter text colour.
  closing: {
    before: "When I'm not at the keyboard, I'm usually out with ",
    name: "Chief",
    after: ", who also serves as head of QA.",
  },
};

export type Entry = {
  title: string;
  organisation: string;
  dates: string;
  href?: string;
  current?: boolean;
};

export const WORK_HISTORY: Entry[] = [
  {
    title: "Full Stack Developer",
    organisation: "Drive Smart",
    dates: "Apr 2023 – Present",
    href: "https://www.drivesmart.auto",
    current: true,
  },
  {
    title: "Software Engineer Intern",
    organisation: "Bay Master",
    dates: "Jan 2021 – May 2022",
    href: "https://www.bay-master.com/",
  },
];

export const EDUCATION: Entry[] = [
  {
    title: "B.S. Software Engineering",
    organisation: "Western Governors University",
    dates: "Sep 2021 – May 2023",
  },
  {
    title: "A.S. Computer Science",
    organisation: "Ocean County College",
    dates: "Sep 2019 – Jan 2021",
  },
];

export const CONTACT = {
  heading: ["Want to build", "something?"],
  sub: "Send a note and I'll get back to you.",
  sent: "Thanks. Message sent. I'll reply soon.",
  failed: "That didn't send. Please try again in a moment.",
};
