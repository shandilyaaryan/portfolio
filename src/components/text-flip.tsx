"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextFlipProps {
  children: string[];
  interval?: number;
  className?: string;
}

export function TextFlip({ children, interval = 2, className }: TextFlipProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % children.length);
    }, interval * 1000);
    return () => clearInterval(timer);
  }, [children.length, interval]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="block"
        >
          {children[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
