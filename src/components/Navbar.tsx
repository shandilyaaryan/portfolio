"use client";

import { useEffect, useState } from "react";

const links = ["about", "projects", "skills", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-black tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          AS<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-8">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="font-mono text-xs uppercase tracking-widest transition-colors duration-300"
                style={{
                  color: active === id ? "var(--accent)" : "var(--fg-muted)",
                }}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
