export type Project = {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  link: string;
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "payment-aggregator",
    title: "Payment Aggregator",
    period: { start: "2.2026" },
    link: "https://github.com/shandilyaaryan/payment-aggregator",
    skills: ["Bun", "TypeScript", "Express", "MongoDB", "EJS", "Zod", "Docker", "Webhooks"],
    description:
      `Scalable payment middleware connecting merchants with multiple providers, designed for reliable and fault-tolerant transaction processing.

  - Unified API layer for multiple payment gateways
  - Idempotent request handling to prevent duplicate transactions
  - Retry and failure recovery mechanisms
  - Webhook-based asynchronous event processing
  - Ensured safe retries and consistency using idempotency keys across distributed requests
  - Built for high availability and scalable transaction flow`,
  },
  {
    id: "collabwrite",
    title: "Collabwrite",
    period: { start: "11.2024" },
    link: "https://github.com/shandilyaaryan/collabwrite",
    skills: ["Next.js", "Convex", "Liveblocks", "Tiptap", "TypeScript", "Shadcn UI", "Vercel"],
    description: `Real-time collaborative editor supporting multi-user editing with live presence, cursor tracking, and conflict resolution. Backed by [Convex](https://convex.dev) for real-time sync and conflict handling.

- Real-time editing with WebSocket-based synchronization
- Live cursors, presence indicators via [Liveblocks](https://liveblocks.io), and threaded discussions
- Rich text editing powered by [Tiptap](https://tiptap.dev)
- Handles concurrent edits across multiple users with low-latency sync
- Designed for consistent state across distributed clients
- Optimized for low-latency collaboration experience`,
    isExpanded: true,
  },
  {
    id: "project-camp",
    title: "Project Camp",
    period: { start: "1.2026" },
    link: "https://github.com/shandilyaaryan/project-camp",
    skills: ["Bun", "Express", "PostgreSQL", "Prisma", "TypeScript", "Redis", "Zod", "Docker"],
    description:
      `Backend system for managing team workflows, tasks, and collaboration with scalable architecture and role-based access control. Focused on clean architecture and scalable system design.

- Structured APIs for projects, tasks, and comments
- Role-based access control and authentication
- Activity logs and notification system
- Modular and scalable database schema design
- Designed for multi-user, real-world usage scenarios`,
  },
];
