import { siteContent } from "@/content/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[rgba(244,249,240,0.64)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 py-8 text-sm text-text-soft sm:px-6 xl:px-10 2xl:px-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="font-serif text-xl text-coconut">{siteContent.brand.name}</p>
          <p className="mt-2 leading-7">{siteContent.footer.note}</p>
        </div>
        <div className="space-y-1 text-left lg:text-right">
          <p>{siteContent.brand.location}</p>
          <p>{siteContent.footer.microcopy}</p>
        </div>
      </div>
    </footer>
  );
}
