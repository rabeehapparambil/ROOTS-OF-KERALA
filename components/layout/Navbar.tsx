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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out focus-within:translate-y-0",
        isVisible ? "translate-y-0" : "-translate-y-[140%]",
      )}
    >
      <div className="mx-auto max-w-[1240px] px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full px-4 py-3 transition-all duration-500 sm:px-6",
            isSolid
              ? "border border-[color:var(--line)] bg-[rgba(245,250,241,0.8)] shadow-[0_20px_60px_var(--shadow)] backdrop-blur-xl"
              : "border border-transparent bg-transparent",
          )}
        >
          <a href="#top" className="min-w-0">
            <div className="font-serif text-lg text-coconut sm:text-xl">
              {siteContent.brand.name}
            </div>
            <div className="truncate text-[11px] uppercase tracking-[0.22em] text-text-soft">
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

          <Button href="#booking" variant={isSolid ? "primary" : "secondary"}>
            Book Your Stay
          </Button>
        </div>
      </div>
    </header>
  );
}
