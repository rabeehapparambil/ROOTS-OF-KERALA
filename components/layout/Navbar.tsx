"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;

      setIsSolid(currentScrollY > 24);

      if (currentScrollY <= 16) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (Math.abs(delta) < 8) {
        return;
      }

      setIsVisible(delta < 0);
      lastScrollYRef.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out focus-within:translate-y-0",
          isVisible ? "translate-y-0" : "-translate-y-[140%]",
        )}
      >
        <div
          className="mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-10 2xl:px-12"
          style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-3 rounded-[1.65rem] px-3 py-2.5 transition-all duration-500 sm:gap-4 sm:rounded-full sm:px-6 sm:py-3",
              isSolid
                ? "border border-[color:var(--line)] bg-[rgba(245,250,241,0.8)] shadow-[0_20px_60px_var(--shadow)] backdrop-blur-xl"
                : "border border-transparent bg-transparent",
            )}
          >
            <a href="#top" className="min-w-0">
              <div className="truncate font-serif text-base text-coconut sm:text-xl">
                {siteContent.brand.name}
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.18em] text-text-soft sm:text-[11px] sm:tracking-[0.22em]">
                {siteContent.brand.location}
              </div>
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
              {siteContent.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-soft hover:text-coconut"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden shrink-0 sm:block">
              <Button
                href="#booking"
                variant={isSolid ? "primary" : "secondary"}
                className="px-3.5 py-2 text-[13px] sm:px-5 sm:py-3 sm:text-sm"
              >
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div
        className="pointer-events-none fixed inset-x-4 z-40 sm:hidden"
        style={{ bottom: "calc(max(1rem, env(safe-area-inset-bottom)) + 0.35rem)" }}
      >
        <Button
          href="#booking"
          variant="primary"
          className="pointer-events-auto w-full justify-center py-3.5 text-sm shadow-[0_22px_48px_rgba(35,55,43,0.28)]"
        >
          Book Your Stay
        </Button>
      </div>
    </>
  );
}
