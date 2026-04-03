"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="screen-line-bottom sticky top-0 z-50 border-x border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
        >
          AS
        </a>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "font-mono text-sm transition-colors",
                active === href.replace("#", "")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon size={15} /> : <MoonIcon size={15} />}
          </button>
        )}
      </div>
    </header>
  );
}
