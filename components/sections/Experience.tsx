import SectionShell from "@/components/layout/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { experienceItems, siteContent } from "@/content/site-content";

function ExperienceIcon({ type }: { type: (typeof experienceItems)[number]["icon"] }) {
  switch (type) {
    case "food":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M16 10v14M20 10v14M12 10v14M28 10v11c0 4.971 4.029 9 9 9h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M34 11c0 8 0 16-6 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "family":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <circle cx="16" cy="18" r="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="32" cy="18" r="5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 36c1.5-5 5-8 10-8s8.5 3 10 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M24 36c1.5-4 4.333-6 8.5-6S39.5 32 41 36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "local-life":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M9 33c5-7 10-11 15-11 6 0 8 8 15 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 38c6-4 11-6 16-6 4 0 7 1 10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M31 9c4 2.5 6 5.833 6 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "stay":
    default:
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M10 24 24 12l14 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 22v14h20V22" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M21 36V27h6v9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function Experience() {
  return (
    <SectionShell id="experience">
      <Reveal className="max-w-2xl">
        <SectionEyebrow>{siteContent.experience.eyebrow}</SectionEyebrow>
        <h2 className="mt-6 text-balance font-serif text-4xl leading-tight text-coconut sm:text-5xl">
          {siteContent.experience.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-text-soft">
          {siteContent.experience.description}
        </p>
      </Reveal>

      <Reveal className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4" stagger>
        {experienceItems.map((item) => (
          <article
            key={item.id}
            data-reveal-item
            className="group relative flex h-full flex-col rounded-[2rem] border border-[color:var(--line)] bg-white/56 p-7 shadow-[0_24px_60px_var(--shadow)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_68px_rgba(54,37,24,0.17)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(197,158,99,0.14)] text-coconut">
              <ExperienceIcon type={item.icon} />
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-palm">
              {item.eyebrow}
            </p>
            <h3 className="mt-3 font-serif text-2xl leading-tight text-coconut">
              {item.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-7 text-text-soft">
              {item.description}
            </p>
            <ul className="mt-6 space-y-2 border-t border-[color:var(--line)] pt-5 text-sm leading-6 text-text-soft">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Reveal>
    </SectionShell>
  );
}
