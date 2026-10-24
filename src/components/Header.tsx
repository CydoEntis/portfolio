import Container from "./Container";
import { LINKS } from "@/content/site";

const SECTIONS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 border-b border-line bg-[rgba(13,14,12,.82)] backdrop-blur-[10px]">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-bold tracking-[.08em] text-text"
        >
          <span className="block size-2 bg-lime" />
          CODY STINE
        </a>
        <div className="flex flex-wrap items-center gap-1 text-sm">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="px-2 py-1.5 text-muted transition-colors duration-150 hover:bg-lime hover:text-bg sm:px-2.5"
            >
              {s.label}
            </a>
          ))}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="ml-2 hidden border border-line-chip px-2.5 py-1.5 font-mono text-xs text-text transition-colors duration-150 hover:border-lime hover:text-lime min-[480px]:inline-block"
          >
            GitHub ↗
          </a>
        </div>
      </Container>
    </nav>
  );
}
