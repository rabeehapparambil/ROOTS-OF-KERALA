import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

export default function SectionShell({
  id,
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-16 sm:py-24 lg:py-28", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:px-10 2xl:px-12",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
