import type { Project, Tone } from "@/content/site";
import { cn } from "@/lib/utils";

const DOT: Record<Tone, string> = {
  lime: "bg-lime",
  orange: "bg-orange",
  grey: "bg-faint",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-reveal
      aria-label={project.name}
      className="group flex flex-col gap-[18px] bg-bg p-7 transition-colors duration-200 hover:bg-surface"
    >
      <div className="flex items-center gap-4">
        <div className="card-icon flex size-14 flex-none items-center justify-center">
          <img
            src={project.icon}
            alt={`${project.name} icon`}
            width={56}
            height={56}
            loading="lazy"
            className="block size-full object-contain"
            style={project.pixelated ? { imageRendering: "pixelated" } : undefined}
          />
        </div>
        <div className="flex min-w-0 flex-col gap-1.5">
          <h3 className="m-0 text-[22px] leading-none font-bold tracking-[-.02em]">{project.name}</h3>
          <span className="font-mono text-[11px] tracking-[.06em] text-faint uppercase">
            {project.type}
          </span>
        </div>
      </div>

      <p className="m-0 text-[15px] leading-[1.55] text-pretty text-muted">{project.description}</p>

      <div className="mt-auto flex flex-col gap-3.5">
        <span className="font-mono text-[11.5px] text-faint">{project.tech}</span>
        <div className="flex items-center justify-between gap-3 border-t border-line pt-3.5">
          <span className="flex items-center gap-[7px] font-mono text-[11px] whitespace-nowrap text-muted">
            <span className={cn("size-1.5 rounded-full", DOT[project.tone])} />
            {project.status}
          </span>
          {project.action && (
            <a
              href={project.action.href}
              target="_blank"
              rel="noreferrer"
              className="-mx-2 -my-1 px-2 py-1 text-sm font-semibold text-lime transition-colors duration-150 hover:bg-lime hover:text-bg"
            >
              {project.action.label} <span aria-hidden className="card-arrow">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
