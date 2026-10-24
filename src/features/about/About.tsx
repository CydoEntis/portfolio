import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { ABOUT } from "@/content/site";

export default function About() {
  const { closing } = ABOUT;

  return (
    <Container>
      <section
        id="about"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-12 py-24"
      >
        <div>
          <Eyebrow number="02" label="about" />
          <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-.03em]">
            {ABOUT.heading}
          </h2>
          <img
            data-reveal
            src={ABOUT.image}
            alt={ABOUT.imageAlt}
            width={640}
            height={800}
            loading="lazy"
            className="mt-8 block h-auto w-[min(100%,320px)]"
          />
        </div>
        <div data-reveal className="flex flex-col gap-5 text-lg leading-[1.6] text-pretty text-text-2">
          {ABOUT.paragraphs.map((p) => (
            <p key={p} className="m-0">
              {p}
            </p>
          ))}
          <p className="m-0">
            {closing.before}
            <span className="text-text">{closing.name}</span>
            {closing.after}
          </p>
        </div>
      </section>
    </Container>
  );
}
