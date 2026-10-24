import Container from "@/components/Container";
import { STATEMENT } from "@/content/site";

export default function Statement() {
  return (
    <Container>
      <div className="border-y border-line py-20">
        <p className="m-0 max-w-[980px] text-[clamp(28px,4vw,48px)] leading-[1.15] font-semibold tracking-[-.025em] text-balance text-text">
          {STATEMENT.lead} — <span className="text-faint">{STATEMENT.clause}</span>
        </p>
      </div>
    </Container>
  );
}
