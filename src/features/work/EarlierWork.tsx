import Row, { Rows } from "@/components/Row";
import { EARLIER_WORK } from "@/content/site";

export default function EarlierWork() {
  return (
    <div className="mt-20">
      <h3 className="m-0 mb-6 text-xl font-bold tracking-[-.02em]">Earlier work</h3>
      <Rows label="Earlier work">
        {EARLIER_WORK.map((project) => (
          <Row
            key={project.name}
            name={project.name}
            end={
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="font-mono text-xs text-lime transition-colors duration-150 hover:text-orange"
              >
                GitHub ↗
              </a>
            }
          >
            {project.description}
            <span className="mt-1 block font-mono text-xs text-faint">{project.tech}</span>
          </Row>
        ))}
      </Rows>
    </div>
  );
}
