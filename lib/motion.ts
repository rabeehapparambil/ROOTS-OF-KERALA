"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsapPlugins() {
  if (typeof window === "undefined" || registered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export function createRevealAnimation(
  targets: gsap.TweenTarget,
  trigger: Element,
  options?: {
    delay?: number;
    once?: boolean;
    stagger?: number;
    start?: string;
    y?: number;
  },
) {
  registerGsapPlugins();

  return gsap.fromTo(
    targets,
    { opacity: 0, y: options?.y ?? 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: options?.stagger ?? 0,
      ease: "power3.out",
      delay: options?.delay ?? 0,
      scrollTrigger: {
        trigger,
        start: options?.start ?? "top 84%",
        once: options?.once ?? true,
      },
    },
  );
}

export function createParallax(
  target: gsap.TweenTarget,
  trigger: Element,
  distance = 36,
) {
  registerGsapPlugins();

  return gsap.to(target, {
    y: distance,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export { gsap, ScrollTrigger };
