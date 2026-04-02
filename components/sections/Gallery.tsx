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
      <Reveal className="max-w-2xl">
        <SectionEyebrow>{siteContent.gallery.eyebrow}</SectionEyebrow>
        <h2 className="mt-6 text-balance font-serif text-4xl leading-tight text-coconut sm:text-5xl">
          {siteContent.gallery.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-text-soft">
          {siteContent.gallery.description}
        </p>
      </Reveal>

      <Reveal
        className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[170px] lg:auto-rows-[210px]"
        stagger
      >
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            data-reveal-item
            className={cn(
              "group relative overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-white/60 shadow-[0_20px_50px_var(--shadow)]",
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
            <figcaption className="absolute inset-x-4 bottom-4 rounded-[1.3rem] border border-white/35 bg-[rgba(255,251,245,0.16)] px-4 py-3 text-sm leading-6 text-[rgba(255,249,243,0.96)] backdrop-blur-sm">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </Reveal>
    </SectionShell>
  );
}
