import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { galleryItems, siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

function getLayoutClass(layout: (typeof galleryItems)[number]["layout"]) {
  switch (layout) {
    case "feature":
      return "md:col-span-2 md:row-span-2";
    case "tall":
      return "md:row-span-2";
    case "wide":
      return "md:col-span-2";
    default:
      return "";
  }
}

function getAspectClass(aspect: (typeof galleryItems)[number]["aspect"]) {
  switch (aspect) {
    case "landscape":
      return "aspect-[4/3]";
    case "square":
      return "aspect-square";
    case "portrait":
    default:
      return "aspect-[4/5]";
  }
}

export default function Gallery() {
  return (
    <SectionShell id="moments">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:items-end xl:grid-cols-[minmax(0,1.16fr)_minmax(24rem,0.84fr)] xl:gap-16">
        <Reveal className="max-w-4xl">
          <SectionEyebrow>{siteContent.gallery.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-[14ch] text-balance font-serif text-3xl leading-tight text-coconut sm:mt-6 sm:max-w-[15ch] sm:text-5xl xl:max-w-[16ch]">
            {siteContent.gallery.title}
          </h2>
        </Reveal>

        <Reveal className="min-w-0 lg:pb-3">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[rgba(255,251,245,0.74)] p-6 shadow-[0_18px_54px_var(--shadow)] sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-palm">
              {siteContent.gallery.companionEyebrow}
            </p>
            <h3 className="mt-3 max-w-[18ch] font-serif text-[1.7rem] leading-tight text-coconut sm:text-[2rem]">
              {siteContent.gallery.companionTitle}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-soft sm:text-lg sm:leading-8">
              {siteContent.gallery.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {siteContent.gallery.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.25rem] border border-[color:var(--line)] bg-white/72 px-4 py-4 text-sm leading-6 text-text-soft"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal
        className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 md:auto-rows-[190px] xl:auto-rows-[230px]"
        stagger
      >
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            data-reveal-item
            className={cn(
              "group relative overflow-hidden rounded-[1.45rem] border border-[color:var(--line)] bg-white/60 shadow-[0_20px_50px_var(--shadow)] sm:rounded-[1.8rem]",
              getLayoutClass(item.layout),
            )}
          >
            <div className={cn("relative h-full w-full", getAspectClass(item.aspect))}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,24,17,0.02),rgba(34,24,17,0.58))]" />
            <figcaption className="absolute inset-x-3 bottom-3 rounded-[1rem] border border-white/35 bg-[rgba(255,251,245,0.18)] px-3 py-2.5 text-xs leading-5 text-[rgba(255,249,243,0.96)] backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:rounded-[1.3rem] sm:px-4 sm:py-3 sm:text-sm sm:leading-6">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </SectionShell>
  );
}
