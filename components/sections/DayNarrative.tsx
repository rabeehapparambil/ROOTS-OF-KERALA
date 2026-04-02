"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionShell from "@/components/layout/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { dayMoments, siteContent } from "@/content/site-content";
import {
  gsap,
  registerGsapPlugins,
  ScrollTrigger,
  usePrefersReducedMotion,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const toneClasses = {
  dawn: "from-[#eaf2e1] via-[#f7f4ea] to-[#dde7d2]",
  noon: "from-[#dbe7d5] via-[#f4f0e3] to-[#d0dcc7]",
  dusk: "from-[#d8e1d1] via-[#e7e1d3] to-[#bec8b4]",
};

export default function DayNarrative() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    registerGsapPlugins();

    const mediaMatch = gsap.matchMedia();
    const triggers: ScrollTrigger[] = [];

    mediaMatch.add("(min-width: 1024px)", () => {
      stepRefs.current.forEach((step, index) => {
        if (!step) {
          return;
        }

        const trigger = ScrollTrigger.create({
          trigger: step,
          start: "top center+=40",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });

        triggers.push(trigger);
      });

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      mediaMatch.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <SectionShell
      id="day-in-our-home"
      className="overflow-hidden"
      contentClassName="relative"
    >
      <div
        className="absolute inset-x-6 top-8 bottom-8 rounded-[2.5rem] bg-[rgba(242,247,238,0.5)] blur-3xl"
        aria-hidden="true"
      />

      <Reveal className="relative max-w-2xl">
        <SectionEyebrow>{siteContent.dayNarrative.eyebrow}</SectionEyebrow>
        <h2 className="mt-6 text-balance font-serif text-4xl leading-tight text-coconut sm:text-5xl">
          {siteContent.dayNarrative.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-text-soft">
          {siteContent.dayNarrative.description}
        </p>
      </Reveal>

      <div className="relative mt-12 grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div
            className={cn(
              "relative overflow-hidden rounded-[2.25rem] border border-[color:var(--line)] bg-gradient-to-br p-4 shadow-[0_30px_80px_var(--shadow)] transition-colors duration-700 sm:p-5",
              toneClasses[dayMoments[activeIndex].tone],
            )}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/60">
              {dayMoments.map((moment, index) => (
                <div
                  key={moment.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    activeIndex === index ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <Image
                    src={moment.image.src}
                    alt={moment.image.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,8,0.02),rgba(16,12,8,0.38))]" />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/50 bg-[rgba(255,251,245,0.72)] p-5 shadow-[0_18px_50px_rgba(38,25,16,0.1)] backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-palm">
                {dayMoments[activeIndex].label}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-coconut">
                {dayMoments[activeIndex].title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-soft">
                {dayMoments[activeIndex].note}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {dayMoments.map((moment, index) => (
            <article
              key={moment.id}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              className={cn(
                "rounded-[2rem] border p-6 shadow-[0_24px_64px_var(--shadow)] transition-all duration-500 sm:p-8",
                activeIndex === index
                  ? "border-transparent bg-coconut text-[rgba(255,250,245,0.96)] lg:-translate-x-2"
                  : "border-[color:var(--line)] bg-white/58 text-text-soft",
              )}
            >
              <p
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.24em]",
                  activeIndex === index ? "text-[rgba(244,227,198,0.9)]" : "text-palm",
                )}
              >
                {moment.label}
              </p>
              <h3
                className={cn(
                  "mt-3 font-serif text-3xl leading-tight",
                  activeIndex === index ? "text-[rgba(255,248,241,0.98)]" : "text-coconut",
                )}
              >
                {moment.title}
              </h3>
              <p className="mt-4 text-base leading-8">{moment.description}</p>
              <p
                className={cn(
                  "mt-6 rounded-[1.4rem] border p-4 text-sm leading-7",
                  activeIndex === index
                    ? "border-white/12 bg-white/8 text-[rgba(255,246,238,0.88)]"
                    : "border-[color:var(--line)] bg-[rgba(255,251,245,0.84)] text-text-soft",
                )}
              >
                {moment.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
