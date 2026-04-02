import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { siteContent } from "@/content/site-content";

export default function Story() {
  return (
    <SectionShell id="story">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>{siteContent.story.eyebrow}</SectionEyebrow>
          <h2 className="mt-6 max-w-xl text-balance font-serif text-4xl leading-tight text-coconut sm:text-5xl">
            {siteContent.story.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-soft">
            {siteContent.story.lead}
          </p>

          <div className="mt-6 space-y-5 text-base leading-8 text-text-soft">
            {siteContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {siteContent.story.trustDetails.map((detail) => (
              <article
                key={detail.title}
                className="rounded-[1.6rem] border border-[color:var(--line)] bg-white/56 p-5 shadow-[0_20px_44px_var(--shadow)]"
              >
                <h3 className="font-serif text-xl text-coconut">{detail.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-soft">
                  {detail.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative min-h-[28rem] lg:min-h-[38rem]" stagger>
          <div
            data-reveal-item
            className="relative ml-auto h-[23rem] w-[78%] overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/50 shadow-[0_28px_70px_var(--shadow)] sm:h-[30rem]"
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
            className="absolute bottom-0 left-0 h-[14rem] w-[52%] overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-white/60 shadow-[0_20px_50px_var(--shadow)] sm:h-[17rem]"
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
            className="absolute left-[10%] top-[6%] max-w-[16rem] rounded-[1.6rem] border border-white/60 bg-[rgba(247,250,244,0.82)] p-5 text-sm leading-6 text-text-soft shadow-[0_22px_52px_var(--shadow)] backdrop-blur-sm"
          >
            <p className="font-serif text-xl text-coconut">
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
