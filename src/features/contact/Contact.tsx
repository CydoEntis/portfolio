import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { EMAIL, LINKS } from "@/content/site";

const chip =
  "border border-line-chip px-3.5 py-2.5 font-mono text-[13px] text-text transition-colors duration-150 hover:border-lime hover:bg-lime hover:text-bg";

export default function Contact() {
  return (
    <Container>
      <section id="contact" className="border-t border-line pt-24 pb-28">
        <div className="mb-2">
          <Eyebrow number="05" label="contact" />
        </div>
        <h2 className="m-0 text-[clamp(44px,8vw,104px)] leading-[.95] font-extrabold tracking-[-.045em]">
          Want to build
          <br />
          something?
        </h2>
        {EMAIL && (
          <a
            href={`mailto:${EMAIL}`}
            className="mt-9 inline-block border-b-2 border-lime-dim pb-1 text-[clamp(20px,2.6vw,30px)] font-medium break-all text-lime transition-colors duration-150 hover:border-orange hover:text-orange"
          >
            {EMAIL}
          </a>
        )}
        <div className="mt-10 flex flex-wrap gap-2.5">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className={chip}>
            GitHub ↗
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className={chip}>
            LinkedIn ↗
          </a>
          <a href={LINKS.resume} download className={chip}>
            Résumé.pdf ↓
          </a>
        </div>
      </section>
    </Container>
  );
}
