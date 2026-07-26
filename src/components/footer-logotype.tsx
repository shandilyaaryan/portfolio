"use client";

import { motion, useMotionValue, useSpring } from "motion/react";

const GRID = 32;
const COLS = 5;
const ROWS = 8;
const LETTER_WIDTH = COLS * GRID; // 160
const GAP = 150;                  // wide gap to match ~5.5:1 aspect ratio

// 5×8 pixel grid for each letter (1 = filled)
const LETTERS: Record<string, number[][]> = {
  A: [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ],
  R: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ],
};

const TEXT = ["A", "R", "Y", "A", "N"];
const VB_W = 1 + TEXT.length * LETTER_WIDTH + (TEXT.length - 1) * GAP; // 929
const VB_H = 1 + ROWS * GRID; // 257
const DEFAULT_GRADIENT_X = Math.round(VB_W / 2);

type Rect = { x: number; y: number };

function getLetterRects(letter: string, letterIndex: number): Rect[] {
  const grid = LETTERS[letter];
  if (!grid) return [];
  const offsetX = 1 + letterIndex * (LETTER_WIDTH + GAP);
  const rects: Rect[] = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col]) {
        rects.push({ x: offsetX + col * GRID, y: 1 + row * GRID });
      }
    }
  }
  return rects;
}

const allRects = TEXT.flatMap((letter, i) => getLetterRects(letter, i));

export function FooterLogotype() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X);
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width) * VB_W;
    gradientX1Raw.set(Math.max(0, Math.min(VB_W, normalizedX)));
  };

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => gradientX1Raw.set(DEFAULT_GRADIENT_X)}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox={`0 0 ${VB_W + 1} ${VB_H + 1}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Filled blocks with gradient */}
            {allRects.map((r, i) => (
              <rect
                key={`f${i}`}
                x={r.x}
                y={r.y}
                width={GRID}
                height={GRID}
                fill="url(#aryan_gradient)"
              />
            ))}

            {/* Stroke outlines */}
            {allRects.map((r, i) => (
              <rect
                key={`s${i}`}
                x={r.x}
                y={r.y}
                width={GRID}
                height={GRID}
                fill="none"
                className="stroke-foreground/10"
                strokeWidth="2"
              />
            ))}

            <defs>
              <motion.linearGradient
                id="aryan_gradient"
                x1={gradientX1}
                y1="1"
                x2={DEFAULT_GRADIENT_X}
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
