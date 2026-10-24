import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import { CONTACT, CONTACT_FORM_KEY, LINKS } from "@/content/site";
import ContactForm from "./ContactForm";

const chip =
  "border border-line-chip px-3.5 py-2.5 font-mono text-[13px] text-text transition-colors duration-150 hover:border-lime hover:bg-lime hover:text-bg";

export default function Contact({ formKey = CONTACT_FORM_KEY }: { formKey?: string }) {
  const [first, second] = CONTACT.heading;

  return (
    <Container>
      <section id="contact" className="border-t border-line pt-24 pb-28">
        <div className="mb-2">
          <Eyebrow number="04" label="contact" />
        </div>
        <h2
          data-reveal
          className="m-0 text-[clamp(44px,8vw,104px)] leading-[.95] font-extrabold tracking-[-.045em]"
        >
          {first}
          <br />
          {second}
        </h2>
        {formKey && (
          <>
            <p
              data-reveal
              className="m-0 mt-7 max-w-[520px] text-[17px] leading-[1.55] text-pretty text-muted"
            >
              {CONTACT.sub}
            </p>
            <ContactForm accessKey={formKey} />
          </>
        )}
        <div data-reveal className="mt-10 flex flex-wrap gap-2.5">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className={chip}>
            GitHub <span aria-hidden>↗</span>
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className={chip}>
            LinkedIn <span aria-hidden>↗</span>
          </a>
          <a href={LINKS.resume} download className={chip}>
            Résumé.pdf <span aria-hidden>↓</span>
          </a>
        </div>
      </section>
    </Container>
  );
}
