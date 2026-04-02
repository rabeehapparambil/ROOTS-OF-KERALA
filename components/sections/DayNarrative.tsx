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

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-end xl:grid-cols-[minmax(0,1.16fr)_minmax(24rem,0.84fr)] xl:gap-16">
        <Reveal className="max-w-4xl">
          <SectionEyebrow>{siteContent.dayNarrative.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-[15ch] text-balance font-serif text-3xl leading-tight text-coconut sm:mt-6 sm:max-w-[16ch] sm:text-5xl xl:max-w-[17ch]">
            {siteContent.dayNarrative.title}
          </h2>
        </Reveal>

        <Reveal className="min-w-0 lg:pb-2">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[rgba(255,251,245,0.74)] p-6 shadow-[0_18px_54px_var(--shadow)] sm:p-7">
            <p className="max-w-2xl text-base leading-7 text-text-soft sm:text-lg sm:leading-8">
              {siteContent.dayNarrative.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-[color:var(--line)] pt-5">
              {dayMoments.map((moment) => (
                <span
                  key={moment.id}
                  className="inline-flex rounded-full bg-[rgba(80,106,84,0.08)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-palm"
                >
                  {moment.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[1.02fr_1.04fr] lg:items-start lg:gap-10 xl:gap-14">
        <div className="mx-auto w-full min-w-0 max-w-[34rem] lg:sticky lg:top-28 lg:max-w-none">
          <div className="space-y-5">
            <div
              className={cn(
                "relative overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-gradient-to-br p-3 shadow-[0_30px_80px_var(--shadow)] transition-colors duration-700 sm:rounded-[2.25rem] sm:p-5",
                toneClasses[dayMoments[activeIndex].tone],
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/60 sm:rounded-[1.75rem]">
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

              <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-white/50 bg-[rgba(255,251,245,0.78)] p-4 shadow-[0_18px_50px_rgba(38,25,16,0.1)] backdrop-blur-sm sm:inset-x-8 sm:bottom-8 sm:rounded-[1.5rem] sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-palm sm:text-[11px] sm:tracking-[0.24em]">
                  {dayMoments[activeIndex].label}
                </p>
                <h3 className="mt-2 font-serif text-xl text-coconut sm:text-2xl">
                  {dayMoments[activeIndex].title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-text-soft sm:mt-3 sm:text-sm sm:leading-7">
                  {dayMoments[activeIndex].note}
                </p>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-[color:var(--line)] bg-[rgba(255,251,245,0.76)] p-5 shadow-[0_24px_64px_var(--shadow)] sm:rounded-[2rem] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-palm">
                    {siteContent.dayNarrative.companionEyebrow}
                  </p>
                  <h3 className="mt-3 max-w-[18ch] font-serif text-[1.7rem] leading-tight text-coconut sm:text-[2rem]">
                    {siteContent.dayNarrative.companionTitle}
                  </h3>
                </div>
                <div className="hidden rounded-full border border-[color:var(--line)] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-palm sm:inline-flex">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(dayMoments.length).padStart(2, "0")}
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-text-soft sm:text-base">
                {siteContent.dayNarrative.companionDescription}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {siteContent.dayNarrative.companionHighlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className={cn(
                      "rounded-[1.25rem] border px-4 py-4 text-sm leading-6 transition-colors duration-500",
                      activeIndex === index
                        ? "border-transparent bg-coconut text-[rgba(255,248,241,0.94)] shadow-[0_18px_42px_rgba(42,28,20,0.18)]"
                        : "border-[color:var(--line)] bg-white/72 text-text-soft",
                    )}
                  >
                    <p
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-[0.18em]",
                        activeIndex === index ? "text-[rgba(244,227,198,0.88)]" : "text-palm",
                      )}
                    >
                      {dayMoments[index]?.label}
                    </p>
                    <p className="mt-2">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          {dayMoments.map((moment, index) => (
            <article
              key={moment.id}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              className={cn(
                "rounded-[1.6rem] border p-5 shadow-[0_24px_64px_var(--shadow)] transition-all duration-500 sm:rounded-[2rem] sm:p-8",
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
                  "mt-3 font-serif text-[1.85rem] leading-tight sm:text-3xl",
                  activeIndex === index ? "text-[rgba(255,248,241,0.98)]" : "text-coconut",
                )}
              >
                {moment.title}
              </h3>
              <p className="mt-4 text-base leading-7 sm:leading-8">{moment.description}</p>
              <p
                className={cn(
                  "mt-5 rounded-[1.2rem] border p-4 text-sm leading-6 sm:mt-6 sm:rounded-[1.4rem] sm:leading-7",
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
