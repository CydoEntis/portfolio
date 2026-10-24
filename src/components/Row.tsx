import type { ReactNode } from "react";

/** One line of the design's ruled list: name, detail, and a right-hand cell. */
export default function Row({
  name,
  children,
  end,
}: {
  name: ReactNode;
  children: ReactNode;
  end: ReactNode;
}) {
  return (
    <li className="-mx-3 grid grid-cols-1 items-baseline gap-x-6 gap-y-2 border-b border-line-card px-3 py-5 transition-colors duration-150 hover:bg-surface sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)_auto]">
      <span className="text-base font-semibold">{name}</span>
      <div className="text-[15px] leading-normal text-muted">{children}</div>
      <div>{end}</div>
    </li>
  );
}

export function Rows({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <ul aria-label={label} className="m-0 flex list-none flex-col border-t border-line-card p-0">
      {children}
    </ul>
  );
}

export function StatusMark({ tone, children }: { tone: "lime" | "orange"; children: ReactNode }) {
  return (
    <span className="flex items-center gap-2 font-mono text-[11.5px] whitespace-nowrap text-muted">
      <span className={tone === "lime" ? "size-1.5 bg-lime" : "size-1.5 bg-orange"} />
      {children}
    </span>
  );
}
