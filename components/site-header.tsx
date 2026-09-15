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
    <header className="relative sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-foreground no-underline"
          aria-label={`${site.fullName} — Página inicial`}
          onClick={closeMenu}
        >
          <BrandLogo
            variant="wordmark"
            priority
            className="h-9 w-auto max-w-[12.5rem] sm:h-11 sm:max-w-[16.5rem]"
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
                  "rounded-md px-2.5 py-1.5 text-[13px] tracking-wide text-muted-foreground transition-colors hover:text-foreground",
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
            render={<Link href={headerCta.href} onClick={closeMenu} />}
            className="h-9 px-3 text-[12px] tracking-wide sm:h-10 sm:px-4 sm:text-[13px]"
          >
            {headerCta.label}
          </Button>

          <details ref={menuRef} className="group lg:hidden">
            <summary
              className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md text-foreground hover:bg-muted [&::-webkit-details-marker]:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5 group-open:hidden" />
              <X className="hidden size-5 group-open:block" />
            </summary>
            <nav
              className="absolute inset-x-0 top-full z-50 border-b border-border bg-navy-mid shadow-2xl"
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
                        "rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-muted hover:text-foreground",
                        current && "bg-muted text-foreground"
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
  );
}
