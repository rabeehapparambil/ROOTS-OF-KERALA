import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { siteContent } from "@/content/site-content";

export default function Story() {
  return (
    <SectionShell id="story">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
        <Reveal className="min-w-0 max-w-2xl">
          <SectionEyebrow>{siteContent.story.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-xl text-balance font-serif text-3xl leading-tight text-coconut sm:mt-6 sm:text-5xl">
            {siteContent.story.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-text-soft sm:mt-6 sm:text-lg sm:leading-8">
            {siteContent.story.lead}
          </p>

          <div className="mt-5 space-y-4 text-base leading-7 text-text-soft sm:mt-6 sm:space-y-5 sm:leading-8">
            {siteContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3 sm:mt-10">
            {siteContent.story.trustDetails.map((detail) => (
              <article
                key={detail.title}
                className="rounded-[1.4rem] border border-[color:var(--line)] bg-white/56 p-5 shadow-[0_20px_44px_var(--shadow)] sm:rounded-[1.6rem]"
              >
                <h3 className="font-serif text-xl text-coconut">{detail.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-soft">
                  {detail.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="relative mx-auto min-h-[22rem] w-full min-w-0 max-w-[30rem] sm:min-h-[30rem] lg:min-h-[38rem] lg:max-w-none"
          stagger
        >
          <div
            data-reveal-item
            className="relative ml-auto h-[18rem] w-[84%] overflow-hidden rounded-[1.6rem] border border-[color:var(--line)] bg-white/50 shadow-[0_28px_70px_var(--shadow)] sm:h-[30rem] sm:w-[78%] sm:rounded-[2rem]"
          >
            <Image
              src={siteContent.story.images[0].src}
              alt={siteContent.story.images[0].alt}
              fill
              sizes="(max-width: 1024px) 75vw, 36rem"
              className="object-cover"
            />
          </div>

          <div
            data-reveal-item
            className="absolute bottom-0 left-0 h-[9rem] w-[48%] overflow-hidden rounded-[1.35rem] border border-[color:var(--line)] bg-white/60 shadow-[0_20px_50px_var(--shadow)] sm:h-[17rem] sm:w-[52%] sm:rounded-[1.8rem]"
          >
            <Image
              src={siteContent.story.images[1].src}
              alt={siteContent.story.images[1].alt}
              fill
              sizes="(max-width: 1024px) 45vw, 18rem"
              className="object-cover"
            />
          </div>

          <div
            data-reveal-item
            className="absolute left-[6%] top-[7%] max-w-[12rem] rounded-[1.2rem] border border-white/60 bg-[rgba(247,250,244,0.82)] p-4 text-[13px] leading-5 text-text-soft shadow-[0_22px_52px_var(--shadow)] backdrop-blur-sm sm:left-[10%] sm:top-[6%] sm:max-w-[16rem] sm:rounded-[1.6rem] sm:p-5 sm:text-sm sm:leading-6"
          >
            <p className="font-serif text-lg text-coconut sm:text-xl">
              &quot;Stay long enough and the house stops feeling new.&quot;
            </p>
            <p className="mt-3">
              That is the feeling we design for: not spectacle, but a softer kind of belonging.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
