export type Project = {
  id: string;
  name: string;
  description: string;
  period: string;
  skills: string[];
  github?: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "collabwrite",
    name: "Collabwrite",
    description:
      "Real-time collaborative document editor inspired by Google Docs. Features live cursors, threaded comments, and multiplayer editing.",
    period: "2024",
    skills: ["Next.js", "Convex", "Liveblocks", "Tiptap", "TypeScript"],
    github: "https://github.com/shandilyaaryan/collabwrite",
  },
  {
    id: "project-camp",
    name: "Project Camp",
    description:
      "Basecamp-inspired backend system focusing on production-grade architecture. Handles task management, collaboration logic, and team workflows.",
    period: "2024",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/shandilyaaryan/project-camp",
  },
  {
    id: "payment-aggregator",
    name: "Payment Aggregator",
    description:
      "Middleware layer between merchants and payment providers, inspired by Razorpay/Stripe. Handles routing, failure handling, and provider abstraction.",
    period: "2024",
    skills: ["Node.js", "TypeScript", "Express", "PostgreSQL"],
    github: "https://github.com/shandilyaaryan/payment-aggregator",
  },
];
