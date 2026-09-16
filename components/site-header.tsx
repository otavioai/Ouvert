"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { headerCta, navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const isHome = pathname === "/";

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <div
      className={cn(
        "z-50 w-full",
        isHome ? "absolute inset-x-0 top-0" : "sticky top-0"
      )}
    >
      <div className="hidden border-b border-white/10 bg-ink text-[11px] tracking-wide text-white/70 sm:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-5 sm:px-8">
          <p>{site.person} · {site.base}</p>
          <div className="flex items-center gap-5">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "relative border-b",
          isHome
            ? "border-white/10 bg-ink/25 backdrop-blur-[2px]"
            : "border-white/10 bg-ink"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:h-[4.25rem] sm:px-8">
          <Link
            href="/"
            className="shrink-0 no-underline"
            aria-label={`${site.fullName} — Página inicial`}
            onClick={closeMenu}
          >
            <BrandLogo
              variant="wordmark-white"
              priority
              className="h-8 w-auto max-w-[11rem] sm:h-10 sm:max-w-[15rem]"
            />
          </Link>

          <nav
            className="mx-auto hidden items-center gap-1 lg:flex"
            aria-label="Principal"
          >
            {navItems.map((item) => {
              const current =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-[13px] tracking-wide text-white/70 transition-colors hover:text-white",
                    current && "text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button
              nativeButton={false}
              variant="appointment"
              render={<Link href={headerCta.href} onClick={closeMenu} />}
              className="h-9 px-4 text-[12px] tracking-wide sm:h-10 sm:px-5 sm:text-[13px]"
            >
              {headerCta.label}
            </Button>

            <details ref={menuRef} className="group lg:hidden">
              <summary
                className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md text-white hover:bg-white/10 [&::-webkit-details-marker]:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5 group-open:hidden" />
                <X className="hidden size-5 group-open:block" />
              </summary>
              <nav
                className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-ink shadow-lg"
                aria-label="Mobile"
              >
                <div className="mx-auto flex max-w-6xl flex-col gap-1 px-3 py-3 sm:px-6">
                  {navItems.map((item) => {
                    const current =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={current ? "page" : undefined}
                        className={cn(
                          "rounded-md px-3 py-3 text-base text-white/75 hover:bg-white/10 hover:text-white",
                          current && "bg-white/10 text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </div>
  );
}
