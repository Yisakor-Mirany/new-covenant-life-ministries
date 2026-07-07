"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SearchDialog } from "@/components/layout/search-dialog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- closes mobile drawer on route change, a genuine external navigation event
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-lg shadow-sm"
          : "border-transparent bg-background/70 backdrop-blur-md"
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-2.5">
        <Logo />

        <NavigationMenuPrimitive.Root className="relative hidden lg:flex" delayDuration={80}>
          <NavigationMenuPrimitive.List className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavigationMenuPrimitive.Item key={link.label}>
                {"children" in link ? (
                  <>
                    <NavigationMenuPrimitive.Trigger
                      className={cn(
                        "group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                        pathname.startsWith(link.href) && "text-primary"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </NavigationMenuPrimitive.Trigger>
                    <NavigationMenuPrimitive.Content className="absolute left-0 top-0 w-full data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-left-4 data-[motion=to-start]:slide-out-to-left-4 data-[motion=from-end]:slide-in-from-right-4 data-[motion=to-end]:slide-out-to-right-4 data-[motion=from-start]:fade-in data-[motion=to-start]:fade-out">
                      <ul className="grid w-[420px] gap-1 p-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuPrimitive.Link asChild>
                              <Link
                                href={child.href}
                                className="block rounded-xl px-4 py-3 transition-colors hover:bg-muted"
                              >
                                <p className="font-display text-sm font-semibold">
                                  {child.label}
                                </p>
                                <p className="mt-0.5 text-sm text-muted-foreground">
                                  {child.description}
                                </p>
                              </Link>
                            </NavigationMenuPrimitive.Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuPrimitive.Content>
                  </>
                ) : (
                  <NavigationMenuPrimitive.Link asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                        pathname === link.href && "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuPrimitive.Link>
                )}
              </NavigationMenuPrimitive.Item>
            ))}
          </NavigationMenuPrimitive.List>

          <div className="absolute left-0 top-full flex justify-center perspective-[2000px]">
            <NavigationMenuPrimitive.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-top-center overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-xl transition-[width,height] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95" />
          </div>
        </NavigationMenuPrimitive.Root>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <SearchDialog />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <Button asChild size="default" variant="secondary" className="ml-1 hidden sm:inline-flex">
            <Link href="/donate">Donate</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex-1">
                <Accordion type="single" collapsible className="w-full">
                  {NAV_LINKS.map((link) =>
                    "children" in link ? (
                      <AccordionItem key={link.label} value={link.label}>
                        <AccordionTrigger>{link.label}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1">
                            {link.children.map((child) => (
                              <SheetClose asChild key={child.href}>
                                <Link
                                  href={child.href}
                                  className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                                >
                                  {child.label}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={link.label} className="border-b border-border py-5">
                        <SheetClose asChild>
                          <Link href={link.href} className="font-display font-medium">
                            {link.label}
                          </Link>
                        </SheetClose>
                      </div>
                    )
                  )}
                </Accordion>
              </nav>
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-6">
                <div className="flex items-center gap-1">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <Button asChild variant="secondary">
                  <Link href="/donate">Donate</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
