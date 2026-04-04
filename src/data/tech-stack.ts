export type Tech = {
  /** CDN key — key by default, SimpleIcons slug if simpleIcon: true */
  key: string;
  title: string;
  href: string;
  /** Use -light.svg / -dark.svg or /black & /white (simpleicons) variants */
  theme?: boolean;
  /** Use SimpleIcons CDN instead of asset CDN */
  simpleIcon?: boolean;
};

export const TECH_STACK: Tech[] = [
  // Languages
  { key: "typescript", title: "TypeScript", href: "https://typescriptlang.org" },
  { key: "js", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { key: "python", title: "Python", href: "https://python.org" },

  // Runtime
  { key: "nodejs", title: "Node.js", href: "https://nodejs.org" },
  { key: "bun", title: "Bun", href: "https://bun.sh" },
  { key: "pnpm", title: "pnpm", href: "https://pnpm.io", simpleIcon: true },

  // Frontend
  { key: "react", title: "React", href: "https://react.dev" },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { key: "shadcn-ui", title: "shadcn/ui", href: "https://ui.shadcn.com", theme: true },
  { key: "radixui", title: "Radix UI", href: "https://radix-ui.com", theme: true },
  { key: "react-router", title: "React Router", href: "https://reactrouter.com", theme: true },

  // Backend
  { key: "express", title: "Express", href: "https://expressjs.com", theme: true, simpleIcon: true },
  { key: "convex", title: "Convex", href: "https://convex.dev", simpleIcon: true },
  { key: "frappe", title: "Frappe", href: "https://frappeframework.com", simpleIcon: true },

  // Databases
  { key: "postgresql", title: "PostgreSQL", href: "https://postgresql.org", simpleIcon: true },
  { key: "mysql", title: "MySQL", href: "https://mysql.com" },
  { key: "mongodb", title: "MongoDB", href: "https://mongodb.com" },
  { key: "redis", title: "Redis", href: "https://redis.io" },

  // DevOps & Tools
  { key: "docker", title: "Docker", href: "https://docker.com" },
  { key: "nginx", title: "Nginx", href: "https://nginx.org", simpleIcon: true },
{ key: "turborepo", title: "TurboRepo", href: "https://turbo.build", theme: true, simpleIcon: true },
  { key: "git", title: "Git", href: "https://git-scm.com" },
  { key: "github", title: "GitHub", href: "https://github.com", theme: true, simpleIcon: true },

  // AI
  { key: "claude", title: "Claude", href: "https://claude.ai" },
  { key: "chatgpt", title: "ChatGPT", href: "https://chatgpt.com", theme: true },
  { key: "googlegemini", title: "Gemini", href: "https://gemini.google.com", simpleIcon: true },
];
