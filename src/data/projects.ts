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
    period: { start: "12.2025", end: "12.2025" },
    link: "https://github.com/shandilyaaryan/payment-aggregator",
    skills: ["Bun", "TypeScript", "Express", "MongoDB", "Mongoose", "EJS", "Webhooks"],
    description:
      `Payment middleware that gives merchants one API in front of an upstream payment gateway.

  - Provider interface, so a new gateway is one class; GlobalPay is implemented
  - Merchant authentication middleware on payment creation
  - Webhook handler that verifies the gateway's signature and updates the transaction
  - Forwards the result to the merchant's registered callback URL
  - Small admin UI for gateway configuration and debugging`,
  },
  {
    id: "collabwrite",
    title: "Collabwrite",
    period: { start: "11.2024", end: "12.2025" },
    link: "https://github.com/shandilyaaryan/collabwrite",
    skills: ["Next.js", "Convex", "Liveblocks", "Tiptap", "Clerk", "TypeScript", "Shadcn UI", "Vercel"],
    description: `Collaborative document editor in the style of Google Docs: several people editing one document, with live cursors and comment threads.

- Documents stored and queried in [Convex](https://convex.dev)
- Multi-user editing, live cursors and presence through [Liveblocks](https://liveblocks.io)
- Threaded comments anchored to the text
- Rich text editing built on [Tiptap](https://tiptap.dev), with custom extensions
- Sign-in with Clerk`,
    isExpanded: true,
  },
  {
    id: "project-camp",
    title: "Project Camp",
    period: { start: "12.2025", end: "1.2026" },
    link: "https://github.com/shandilyaaryan/project-camp",
    skills: ["Bun", "Express", "MongoDB", "Mongoose", "TypeScript", "Redis", "Zod", "Docker"],
    description:
      `REST API for team project management: projects, members, tasks and subtasks.

- JWT authentication with email verification
- Role-based access per project: add members, change roles
- Tasks with status, priority, subtasks and file attachments (Cloudinary)
- Redis-backed rate limiting middleware
- Request validation with Zod; API tests with Supertest`,
  },
];
