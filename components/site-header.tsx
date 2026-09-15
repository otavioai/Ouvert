"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerCta, navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-foreground no-underline"
          aria-label={`${site.fullName} — Página inicial`}
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
            render={<Link href={headerCta.href} />}
            className="h-9 px-3 text-[12px] tracking-wide sm:h-10 sm:px-4 sm:text-[13px]"
          >
            {headerCta.label}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-9 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-popover p-0"
              showCloseButton
            >
              <SheetHeader className="border-b border-border px-5 py-5">
                <SheetTitle className="font-heading text-left text-lg tracking-[0.28em]">
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile">
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
