import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { EXPERIENCE, type Role } from "@/content/site";

function Details({ role }: { role: Role }) {
  if (!role.summary && !role.points?.length) return null;

  return (
    <div className="flex flex-col gap-3">
      {role.summary && <p className="m-0 text-[15px] leading-[1.55] text-text-2">{role.summary}</p>}
      {role.points?.length ? (
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {role.points.map((point) => (
            <li key={point} className="flex gap-3 text-[14.5px] leading-normal text-muted">
              <span aria-hidden className="flex-none font-mono text-lime">
                ›
              </span>
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function Experience() {
  return (
    <Container>
      <section id="experience" className="border-t border-line pt-16 pb-24">
        <Eyebrow number="04" label="experience" />
        <h2 className="m-0 mb-8 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-.03em]">
          Where I've worked.
        </h2>
        {EXPERIENCE.map((role) => (
          <div
            key={role.title}
            data-testid="role"
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-12 gap-y-3 border-t border-line-card py-7"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-lg font-semibold">{role.title}</span>
              {role.href ? (
                <a
                  href={role.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[15px] text-muted transition-colors duration-150 hover:text-orange"
                >
                  {role.organisation} ↗
                </a>
              ) : (
                <span className="text-[15px] text-muted">{role.organisation}</span>
              )}
              <span className="font-mono text-xs text-faint">{role.dates}</span>
            </div>
            <Details role={role} />
          </div>
        ))}
      </section>
    </Container>
  );
}
