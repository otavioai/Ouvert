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

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-3 px-5 sm:px-8">
        <Link
          href="/"
          className="shrink-0 no-underline"
          aria-label={`${site.fullName} — Página inicial`}
          onClick={closeMenu}
        >
          <BrandLogo
            variant="wordmark"
            priority
            className="h-8 w-auto max-w-[11rem] sm:h-9 sm:max-w-[14rem]"
          />
        </Link>

        <nav
          className="mx-auto hidden items-center gap-0.5 lg:flex"
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
                  "px-3 py-2 text-[13px] font-medium text-foreground/70 transition-colors hover:text-foreground",
                  current && "text-foreground"
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
            className="hidden h-10 px-5 text-[13px] font-medium sm:inline-flex"
          >
            {headerCta.label}
          </Button>

          <details ref={menuRef} className="group lg:hidden">
            <summary
              className="flex size-9 cursor-pointer list-none items-center justify-center text-foreground hover:bg-muted [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5 group-open:hidden" />
              <X className="hidden size-5 group-open:block" />
            </summary>
            <nav
              className="absolute inset-x-0 top-full z-50 border-b border-border bg-background shadow-sm"
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
                        "px-3 py-3 text-base text-foreground/75 hover:bg-muted hover:text-foreground",
                        current && "bg-muted text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href={headerCta.href}
                  onClick={closeMenu}
                  className="mt-2 bg-brand-red px-3 py-3 text-center text-base font-medium text-white"
                >
                  {headerCta.label}
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
