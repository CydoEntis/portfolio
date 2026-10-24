import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-7 text-[13px] text-faint">
        <div className="flex items-center gap-3">
          <span className="block size-1.5 bg-lime" />
          <span>
            Built by Cody. <span className="text-muted">Supervised by Chief.</span>
          </span>
        </div>
        <span className="font-mono text-xs">
          © 2026 ·{" "}
          <a href="#top" className="text-faint transition-colors duration-150 hover:text-orange">
            back to top ↑
          </a>
        </span>
      </Container>
    </footer>
  );
}
