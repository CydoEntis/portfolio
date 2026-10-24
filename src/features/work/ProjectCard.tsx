import type { Project } from "@/content/site";
import { cn } from "@/lib/utils";

type Size = "featured" | "compact";

const sizes = {
  featured: {
    media: "aspect-[16/10] bg-[size:24px_24px]",
    chip: "top-3.5 left-3.5 px-[9px] py-[5px] text-[11px]",
    chipMark: "size-1.5",
    tile: "size-24",
    body: "gap-3 p-6",
    name: "text-2xl tracking-[-.02em]",
    status: "text-[11px]",
    description: "text-[15px] leading-[1.55]",
    footer: "border-t border-line pt-3",
    tech: "text-xs",
    action: "-m-1 -mx-2 px-2 py-1 text-sm",
  },
  compact: {
    media: "aspect-[4/3] bg-[size:20px_20px]",
    chip: "top-3 left-3 px-2 py-1 text-[10px]",
    chipMark: "size-[5px]",
    tile: "size-16",
    body: "gap-2.5 p-5",
    name: "text-lg tracking-[-.015em]",
    status: "text-[10.5px]",
    description: "text-sm leading-normal",
    footer: "pt-2.5",
    tech: "text-[11px]",
    action: "-m-[3px] -mx-1.5 px-1.5 py-[3px] text-[13px]",
  },
} satisfies Record<Size, Record<string, string>>;

export default function ProjectCard({ project, size }: { project: Project; size: Size }) {
  const s = sizes[size];

  return (
    <article
      aria-label={project.name}
      className={cn(
        "motion-lift flex flex-col overflow-hidden border border-line-card bg-surface hover:border-lime-dim",
        size === "featured" && "hover:shadow-[0_24px_48px_-24px_rgba(196,240,66,.18)]",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center border-b border-line-card bg-surface-2 bg-[linear-gradient(rgba(236,232,222,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(236,232,222,.04)_1px,transparent_1px)]",
          s.media,
        )}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            style={{ objectPosition: project.imagePosition ?? "center 30%" }}
            className="absolute inset-0 size-full object-cover"
          />
        ) : project.icon ? (
          <div
            className={cn(
              "flex items-center justify-center border border-line-tile bg-tile shadow-[0_20px_40px_-12px_rgba(0,0,0,.6)]",
              s.tile,
            )}
          >
            <img src={project.icon} alt={`${project.name} icon`} loading="lazy" className="size-3/5" />
          </div>
        ) : null}
        <div
          className={cn(
            "absolute z-[1] flex items-center gap-2 border border-line-chip bg-bg font-mono tracking-[.06em] text-text uppercase",
            s.chip,
          )}
        >
          <span className={cn("bg-orange", s.chipMark)} />
          {project.type}
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col", s.body)}>
        <div className="flex items-center justify-between gap-3">
          <h3 className={cn("m-0 font-bold", s.name)}>{project.name}</h3>
          <span
            className={cn(
              "flex items-center gap-[7px] font-mono whitespace-nowrap text-muted",
              s.status,
            )}
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                project.tone === "lime" ? "bg-lime" : "bg-orange",
              )}
            />
            {project.status}
          </span>
        </div>
        <p className={cn("m-0 text-pretty text-muted", s.description)}>{project.description}</p>
        <div
          className={cn(
            "mt-auto flex flex-wrap items-center justify-between gap-3",
            s.footer,
          )}
        >
          <span className={cn("font-mono text-faint", s.tech)}>{project.tech}</span>
          {project.action && (
            <a
              href={project.action.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "font-semibold text-lime transition-colors duration-150 hover:bg-lime hover:text-bg",
                s.action,
              )}
            >
              {project.action.label} →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
