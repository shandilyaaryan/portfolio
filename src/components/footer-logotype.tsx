"use client";

import { motion, useMotionValue, useSpring } from "motion/react";

const G = 32; // grid unit
const W = 5 * G; // letter width = 160
const GAP = 32;

// 5-wide × 8-tall pixel bitmaps (row 7 = empty padding)
// Letters fill rows 0-6; bottom rows land in gradient zone (hidden by overflow)
const LETTERS: Record<string, number[][]> = {
  s: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ],
  h: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ],
  a: [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ],
  n: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ],
  d: [
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ],
  i: [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ],
  l: [
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ],
  y: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};

const TEXT = ["s", "h", "a", "n", "d", "i", "l", "y", "a"];
const VB_W = 1 + TEXT.length * W + (TEXT.length - 1) * GAP; // 1697
const VB_H = 1 + 8 * G; // 257
const DEFAULT_X = Math.round(VB_W / 2);

function buildPath(): string {
  const segs: string[] = [];
  TEXT.forEach((ch, idx) => {
    const bmp = LETTERS[ch];
    if (!bmp) return;
    const ox = 1 + idx * (W + GAP);
    bmp.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (!cell) return;
        const x = ox + c * G;
        const y = 1 + r * G;
        segs.push(`M${x} ${y}H${x + G}V${y + G}H${x}Z`);
      });
    });
  });
  return segs.join("");
}

const PATH = buildPath();

export function FooterLogotype() {
  const rawX = useMotionValue(DEFAULT_X);
  const gradX = useSpring(rawX, { stiffness: 200, damping: 30, mass: 0.5 });

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div
        className="overflow-hidden"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          rawX.set(Math.max(0, Math.min(VB_W, ((e.clientX - r.left) / r.width) * VB_W)));
        }}
        onMouseLeave={() => rawX.set(DEFAULT_X)}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox={`0 0 ${VB_W + 1} ${VB_H + 1}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={PATH} fill="url(#fg)" />
            <path d={PATH} fill="none" className="stroke-foreground/10" strokeWidth="2" />

            <defs>
              <motion.linearGradient
                id="fg"
                x1={gradX}
                y1="1"
                x2={DEFAULT_X}
                y2={VB_H}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.625" stopColor="var(--foreground)" stopOpacity="0" />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
