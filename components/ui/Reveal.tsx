"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { createRevealAnimation, gsap, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  once?: boolean;
  stagger?: boolean;
  y?: number;
}

export default function Reveal({
  as,
  children,
  className,
  delay,
  once = true,
  stagger = false,
  y = 30,
  ...rest
}: RevealProps) {
  const Component = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion) {
      return;
    }

    const targets = stagger
      ? Array.from(element.querySelectorAll("[data-reveal-item]"))
      : [element];
    const resolvedTargets = targets.length > 0 ? targets : [element];

    const animation = createRevealAnimation(resolvedTargets, element, {
      delay,
      once,
      stagger: stagger ? 0.12 : 0,
      y,
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
      gsap.set(resolvedTargets, { clearProps: "all" });
    };
  }, [delay, once, prefersReducedMotion, stagger, y]);

  return (
    <Component ref={ref} className={cn(className)} {...rest}>
      {children}
    </Component>
  );
}
