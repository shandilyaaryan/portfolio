export type Tech = {
  key: string;
  title: string;
  href: string;
  theme?: boolean;
};

export const TECH_STACK: Tech[] = [
  // Languages
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { key: "typescript", title: "TypeScript", href: "https://typescriptlang.org" },

  // Frontend
  { key: "react", title: "React", href: "https://react.dev" },
  { key: "nextdotjs", title: "Next.js", href: "https://nextjs.org", theme: true },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com" },

  // Backend
  { key: "nodedotjs", title: "Node.js", href: "https://nodejs.org" },
  { key: "express", title: "Express", href: "https://expressjs.com", theme: true },
  { key: "convex", title: "Convex", href: "https://convex.dev" },

  // Databases
  { key: "postgresql", title: "PostgreSQL", href: "https://postgresql.org" },
  { key: "mongodb", title: "MongoDB", href: "https://mongodb.com" },
  { key: "prisma", title: "Prisma", href: "https://prisma.io", theme: true },

  // Tools
  { key: "turborepo", title: "TurboRepo", href: "https://turbo.build", theme: true },
  { key: "git", title: "Git", href: "https://git-scm.com" },
  { key: "github", title: "GitHub", href: "https://github.com", theme: true },
  { key: "frappe", title: "Frappe", href: "https://frappeframework.com" },
];
