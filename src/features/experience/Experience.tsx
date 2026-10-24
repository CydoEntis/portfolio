import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { EDUCATION, WORK_HISTORY, type Entry } from "@/content/site";

function Group({ label, entries }: { label: string; entries: Entry[] }) {
  return (
    <div className="flex flex-col">
      <h3
        data-reveal
        className="m-0 mb-4 font-mono text-xs font-medium tracking-[.08em] text-orange uppercase"
      >
        {label}
      </h3>
      <ul aria-label={label} className="m-0 list-none p-0">
        {entries.map((entry) => (
          <li
            key={entry.title}
            data-reveal
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] items-baseline gap-x-12 gap-y-1.5 border-t border-line-card py-6"
          >
            <span className="text-[17px] font-semibold">{entry.title}</span>
            {entry.href ? (
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="w-fit text-[15px] text-muted transition-colors duration-150 hover:text-orange"
              >
                {entry.organisation} ↗
              </a>
            ) : (
              <span className="text-[15px] text-muted">{entry.organisation}</span>
            )}
            <span className="flex items-center gap-2.5 font-mono text-xs text-faint">
              {entry.dates}
              {entry.current && (
                <span className="flex items-center gap-1.5 text-lime">
                  <span className="size-1.5 rounded-full bg-lime" />
                  current
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <Container>
      <section id="experience" className="border-t border-line pt-16 pb-24">
        <Eyebrow number="03" label="experience" />
        <h2
          data-reveal
          className="m-0 mb-10 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-.03em]"
        >
          Experience &amp; education.
        </h2>
        <div className="flex flex-col gap-14">
          <Group label="Work" entries={WORK_HISTORY} />
          <Group label="Education" entries={EDUCATION} />
        </div>
      </section>
    </Container>
  );
}
