import type { CSSProperties } from "react";
import { PROJECTS } from "@/content/site";

// Hand-placed like the design: position, size and resting tilt per icon.
const PLACEMENT: Record<string, { left: string; top: string; size: number; rot: number }> = {
  maitty: { left: "8%", top: "12%", size: 124, rot: -6 },
  linkables: { left: "58%", top: "2%", size: 104, rot: 5 },
  "Clip-It": { left: "40%", top: "38%", size: 92, rot: -4 },
  scrib: { left: "72%", top: "42%", size: 108, rot: 7 },
  snipux: { left: "12%", top: "60%", size: 88, rot: 4 },
  "Reign of Crowns": { left: "48%", top: "70%", size: 88, rot: -8 },
};

/** The `~/projects` pile beside the headline; decorative, wide screens only. */
export default function IconCluster() {
  const placed = PROJECTS.filter((p) => PLACEMENT[p.name]);

  return (
    <div
      data-reveal
      aria-hidden
      className="relative hidden aspect-[1/.9] w-full max-w-[540px] justify-self-end min-[1000px]:block"
    >
      <div className="absolute inset-x-[4%] inset-y-[6%] border border-dashed border-line-card" />
      <span className="absolute top-[calc(6%-22px)] left-[4%] font-mono text-[11px] text-fainter">
        ~/projects
      </span>
      {placed.map((project, i) => {
        const { left, top, size, rot } = PLACEMENT[project.name];
        const style = {
          left,
          top,
          width: size,
          height: size,
          "--rot": `${rot}deg`,
          "--lift": `${6 + (i % 3) * 3}px`,
          "--dur": `${3200 + i * 450}ms`,
          "--delay": `${i * -700}ms`,
        } as CSSProperties;

        return (
          <a key={project.name} href="#work" tabIndex={-1} className="motion-float absolute block" style={style}>
            <img
              src={project.icon}
              alt=""
              className="float-icon block size-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,.55)]"
              style={project.pixelated ? { imageRendering: "pixelated" } : undefined}
            />
          </a>
        );
      })}
    </div>
  );
}
