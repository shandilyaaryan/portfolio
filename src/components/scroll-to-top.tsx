"use client";

import { ArrowUpIcon } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest >= 400);
    const prev = scrollY.getPrevious() ?? 0;
    setScrollDirection(latest - prev > 0 ? "down" : "up");
  });

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={cn(
        "fixed right-4 bottom-4 z-50 lg:right-8 lg:bottom-8",
        "flex size-8 items-center justify-center rounded-md",
        "border border-border bg-muted text-muted-foreground shadow-md",
        "transition-[opacity,background-color] duration-300 hover:bg-accent hover:text-foreground",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
        scrollDirection === "down" && visible && "opacity-30 hover:opacity-100"
      )}
    >
      <ArrowUpIcon className="size-4" />
    </button>
  );
}
