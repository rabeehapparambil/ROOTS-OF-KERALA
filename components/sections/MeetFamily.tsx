import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { familyMembers, siteContent } from "@/content/site-content";

export default function MeetFamily() {
  return (
    <SectionShell id="meet-the-family">
      <Reveal className="max-w-3xl">
        <SectionEyebrow>{siteContent.family.eyebrow}</SectionEyebrow>
        <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-coconut sm:mt-6 sm:text-5xl">
          {siteContent.family.title}
        </h2>
        <p className="mt-5 text-base leading-7 text-text-soft sm:text-lg sm:leading-8">
          {siteContent.family.description}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3 xl:gap-6">
        {familyMembers.map((member) => (
          <Reveal
            key={member.name}
            className="rounded-[1.6rem] border border-[color:var(--line)] bg-[rgba(247,250,244,0.7)] p-4 shadow-[0_20px_56px_var(--shadow)] sm:rounded-[2rem] sm:p-5"
          >
            <div className="relative overflow-hidden rounded-[1.3rem] sm:rounded-[1.6rem]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 28rem"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-palm">
                {member.role}
              </p>
              <h3 className="mt-3 font-serif text-[1.9rem] text-coconut sm:text-3xl">{member.name}</h3>
              <p className="mt-3 text-sm leading-7 text-text-soft">{member.bio}</p>
              <blockquote className="mt-5 border-l border-[rgba(197,158,99,0.45)] pl-4 font-serif text-lg leading-7 text-coconut sm:mt-6 sm:text-xl sm:leading-8">
                &quot;{member.quote}&quot;
              </blockquote>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
