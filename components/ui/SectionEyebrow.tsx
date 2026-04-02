import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function SectionEyebrow({
  children,
  className,
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-palm shadow-[0_12px_30px_var(--shadow)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
