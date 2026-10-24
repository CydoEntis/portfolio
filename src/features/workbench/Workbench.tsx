import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Row, { Rows, StatusMark } from "@/components/Row";
import { WORKBENCH } from "@/content/site";

export default function Workbench() {
  return (
    <Container>
      <section id="building" className="pt-24 pb-16">
        <Eyebrow number="02" label="currently building" />
        <h2 className="m-0 mb-8 text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-.03em]">
          On the workbench.
        </h2>
        <Rows label="Currently building">
          {WORKBENCH.map((item) => (
            <Row
              key={item.name}
              name={item.name}
              end={<StatusMark tone={item.tone}>{item.status}</StatusMark>}
            >
              {item.description}
            </Row>
          ))}
        </Rows>
      </section>
    </Container>
  );
}
