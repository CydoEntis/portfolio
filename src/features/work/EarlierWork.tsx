import { EARLIER_WORK } from "@/content/site";

export default function EarlierWork() {
  return (
    <div className="mt-[72px]">
      <h3 data-reveal className="m-0 mb-5 text-lg font-bold tracking-[-.015em]">
        Earlier work
      </h3>
      <ul aria-label="Earlier work" className="m-0 flex list-none flex-col border-t border-line-card p-0">
        {EARLIER_WORK.map((project) => (
          <li key={project.name} data-reveal>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="-mx-3 flex flex-wrap items-baseline gap-x-6 gap-y-1.5 border-b border-line-card px-3 py-[18px] text-text transition-colors duration-150 hover:bg-surface"
            >
              <span className="flex-[0_0_180px] text-[15px] font-semibold">{project.name}</span>
              <span className="flex min-w-0 flex-[1_1_320px] flex-col gap-1">
                <span className="text-[14.5px] leading-normal text-muted">{project.description}</span>
                <span className="font-mono text-[11px] text-faint">{project.tech}</span>
              </span>
              <span className="font-mono text-[11.5px] whitespace-nowrap text-lime">GitHub ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
