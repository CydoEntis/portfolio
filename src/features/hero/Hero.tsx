import Container from "@/components/Container";
import { IDENTITY, LINKS } from "@/content/site";
import IconCluster from "./IconCluster";

const secondaryButton =
  "inline-flex h-12 items-center border border-line-chip px-5 text-[15px] font-medium text-text transition-colors duration-150 hover:border-text";

export default function Hero() {
  const [lead, accent] = IDENTITY.headline;

  return (
    <header className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[linear-gradient(rgba(236,232,222,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(236,232,222,.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(#000_0%,transparent_90%)]"
      />
      <Container className="relative pt-[clamp(72px,12vw,150px)] pb-[clamp(56px,8vw,96px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,520px),1fr))] items-center gap-12">
          <div className="min-w-0">
            <div data-reveal className="mb-7 flex items-center gap-2.5 font-mono text-[13px] text-muted">
              <span className="size-[7px] rounded-full bg-lime shadow-[0_0_0_4px_rgba(196,240,66,.12)]" />
              {IDENTITY.status}
            </div>

            <h1
              data-reveal
              className="m-0 text-[clamp(52px,10vw,132px)] leading-[.92] font-extrabold tracking-[-.045em] text-text"
            >
              {lead}
              <br />
              {/* Keeps the caret on the same line as the word it follows. */}
              <span className="whitespace-nowrap">
                <span className="bg-linear-to-r from-lime to-orange bg-clip-text text-transparent">
                  {accent}
                </span>
                <span
                  aria-hidden
                  className="motion-caret ml-[.06em] inline-block h-[.78em] w-[.09em] bg-lime align-[-.02em]"
                />
              </span>
            </h1>

            <p
              data-reveal
              className="mt-8 max-w-[620px] text-[clamp(18px,2vw,22px)] leading-[1.45] text-pretty text-muted"
            >
              {IDENTITY.sub}
            </p>

            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center gap-2.5 border border-lime px-[22px] text-[15px] font-semibold text-lime transition-colors duration-150 hover:bg-lime hover:text-bg"
              >
                View my work <span aria-hidden>↓</span>
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className={secondaryButton}>
                GitHub
              </a>
              <a href="#contact" className={secondaryButton}>
                Contact
              </a>
            </div>
          </div>

          <IconCluster />
        </div>

        <ul
          data-reveal
          className="mt-[72px] flex flex-wrap gap-x-7 gap-y-2 border-t border-dashed border-line-dash pt-5 font-mono text-xs text-faint"
        >
          {IDENTITY.platforms.map((platform) => (
            <li key={platform} className="flex items-center gap-2">
              <span className="size-1 bg-lime" />
              {platform}
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
