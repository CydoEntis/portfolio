import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { FEATURED, MORE_WORK, WORK } from "@/content/site";
import EarlierWork from "./EarlierWork";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <Container>
      <section id="work" className="pt-12 pb-24">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
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

        <div className="mb-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-5">
          {FEATURED.map((project) => (
            <ProjectCard key={project.name} project={project} size="featured" />
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          {MORE_WORK.map((project) => (
            <ProjectCard key={project.name} project={project} size="compact" />
          ))}
        </div>

        <EarlierWork />
      </section>
    </Container>
  );
}
