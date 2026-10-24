import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { PROJECTS, WORK } from "@/content/site";
import EarlierWork from "./EarlierWork";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <Container>
      <section id="work" className="pt-12 pb-24">
        <div data-reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow number="01" label="selected work" />
            <h2 className="m-0 text-[clamp(32px,4.4vw,52px)] leading-none font-bold tracking-[-.03em]">
              {WORK.heading}
            </h2>
          </div>
          <p className="m-0 max-w-[360px] text-[15px] leading-[1.55] text-pretty text-muted">
            {WORK.note}
          </p>
        </div>

        {/* The 1px gap shows the background through, drawing the lines between cards. */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-px border border-line-card bg-line-card">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <EarlierWork />
      </section>
    </Container>
  );
}
