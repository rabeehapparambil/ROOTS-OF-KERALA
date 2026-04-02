"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { siteContent } from "@/content/site-content";
import {
  createParallax,
  gsap,
  registerGsapPlugins,
  usePrefersReducedMotion,
} from "@/lib/motion";

const HeroPrism = dynamic(() => import("@/components/webgl/HeroPrism"), {
  ssr: false,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;

    if (!section || !visual || prefersReducedMotion) {
      return;
    }

    registerGsapPlugins();

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { duration: 0.95, ease: "power3.out" },
      });

      timeline
        .fromTo(
          "[data-hero='eyebrow'], [data-hero='title'], [data-hero='copy'], [data-hero='actions'], [data-hero='notes']",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.12 },
        )
        .fromTo(
          visual,
          { opacity: 0, scale: 0.96, y: 36 },
          { opacity: 1, scale: 1, y: 0, duration: 1.15 },
          "-=0.8",
        );

      const parallaxTargets = section.querySelectorAll<HTMLElement>("[data-parallax]");

      parallaxTargets.forEach((target, index) => {
        createParallax(target, section, 24 + index * 10);
      });
    }, section);

    return () => context.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pt-24 sm:pt-28 lg:min-h-screen lg:pt-32"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[55vh] bg-[radial-gradient(circle_at_top_left,rgba(204,193,133,0.46),transparent_48%)]" />
        <div className="absolute right-[-12%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(103,131,106,0.22),transparent_62%)] blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-10rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(62,88,69,0.18),transparent_64%)] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-8 px-4 pb-10 sm:gap-10 sm:px-6 sm:pb-14 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12 lg:px-8">
        <div className="relative z-10 min-w-0 max-w-[42rem]">
          <div
            data-hero="eyebrow"
            className="inline-flex rounded-full border border-[color:var(--line)] bg-white/55 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-palm shadow-[0_12px_30px_var(--shadow)] sm:text-[11px] sm:tracking-[0.24em]"
          >
            {siteContent.hero.eyebrow}
          </div>

          <h1
            data-hero="title"
            className="mt-5 max-w-[10ch] text-balance font-serif text-[clamp(2.25rem,10.8vw,4.2rem)] leading-[0.98] text-coconut sm:mt-6 sm:max-w-3xl sm:text-6xl lg:text-7xl"
          >
            {siteContent.hero.title}
          </h1>

          <p
            data-hero="copy"
            className="mt-5 max-w-[34rem] text-pretty text-base leading-7 text-text-soft sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-8"
          >
            {siteContent.hero.description}
          </p>

          <div
            data-hero="actions"
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <Button
              href={siteContent.hero.primaryCta.href}
              variant="primary"
              className="w-full sm:w-auto"
            >
              {siteContent.hero.primaryCta.label}
            </Button>
            <Button
              href={siteContent.hero.secondaryCta.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {siteContent.hero.secondaryCta.label}
            </Button>
          </div>

          <ul
            data-hero="notes"
            className="mt-8 grid gap-3 text-sm leading-6 text-text-soft sm:mt-10 sm:grid-cols-3"
          >
            {siteContent.hero.trustNotes.map((note) => (
              <li
                key={note}
                className="rounded-[1.35rem] border border-[color:var(--line)] bg-white/42 p-4 shadow-[0_18px_48px_var(--shadow)] sm:rounded-[1.5rem]"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={visualRef}
          className="relative z-10 mx-auto w-full min-w-0 max-w-[32rem] sm:max-w-[36rem]"
        >
          <div
            className="relative aspect-[4/4.8] overflow-hidden rounded-[1.7rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(247,250,242,0.92),rgba(219,231,216,0.92))] shadow-[0_30px_90px_var(--shadow)] sm:aspect-[5/6] sm:rounded-[2rem]"
            data-parallax
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_48%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_46%,rgba(49,74,56,0.18))]" />

            <div className="absolute inset-3 overflow-hidden rounded-[1.3rem] border border-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:inset-6 sm:rounded-[1.6rem]">
              <Image
                src={siteContent.hero.visualPrimary.src}
                alt={siteContent.hero.visualPrimary.alt}
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 36rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,28,21,0.06),rgba(19,28,21,0.26))]" />
            </div>

            <div
              className="absolute bottom-4 left-4 w-[46%] max-w-[11.5rem] overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/55 p-2.5 shadow-[0_20px_45px_var(--shadow)] backdrop-blur-sm sm:bottom-6 sm:left-6 sm:w-[44%] sm:max-w-none sm:rounded-[1.5rem] sm:p-3"
              data-parallax
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem]">
                <Image
                  src={siteContent.hero.visualSecondary.src}
                  alt={siteContent.hero.visualSecondary.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 16rem"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] leading-5 text-coconut sm:mt-3 sm:text-sm sm:leading-6">
                {siteContent.hero.floatingNote}
              </p>
            </div>

            {!prefersReducedMotion ? (
              <div className="absolute inset-0 z-20">
                <HeroPrism className="h-full w-full opacity-80 sm:opacity-95" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
