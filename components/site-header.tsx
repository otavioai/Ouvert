"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { headerCta, navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-foreground no-underline"
          aria-label={`${site.fullName} — Página inicial`}
          onClick={() => setOpen(false)}
        >
          <span className="font-heading text-[1.05rem] font-medium tracking-[0.32em] sm:text-lg">
            {site.name}
          </span>
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
            render={<Link href={headerCta.href} onClick={() => setOpen(false)} />}
            className="h-9 px-3 text-[12px] tracking-wide sm:h-10 sm:px-4 sm:text-[13px]"
          >
            {headerCta.label}
          </Button>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="border-t border-border bg-background lg:hidden"
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
                  onClick={() => setOpen(false)}
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
      ) : null}
    </header>
  );
}
