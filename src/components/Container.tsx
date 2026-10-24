import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)]", className)}>
      {children}
    </div>
  );
}
