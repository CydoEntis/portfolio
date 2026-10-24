export default function Eyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-3 font-mono text-xs text-faint">
      <span className="text-lime">{number}</span> ── {label}
    </div>
  );
}
