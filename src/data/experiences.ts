export type Position = {
  id: string;
  title: string;
  employmentType: string;
  start: string;
  end?: string;
  bullets?: string[];
  skills?: string[];
};

export type Experience = {
  id: string;
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  location?: string;
  isCurrentEmployer?: boolean;
  positions: Position[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "dataring",
    companyName: "Dataring",
    companyWebsite: "https://getdataring.com",
    companyLogo: "/dataring-icon.png",
    location: "New York, USA (Remote)",
    isCurrentEmployer: true,
    positions: [
      {
        id: "dataring-swe",
        title: "Software Engineer",
        employmentType: "Full-time",
        start: "Jul 2026",
        bullets: [
          "Promoted to full-time engineer; now owning backend systems and ERP architecture end-to-end.",
          "Leading development of production workflows, CRM features, and internal tooling on Frappe.",
          "Collaborating directly with stakeholders to scope, design, and ship features.",
        ],
        skills: ["Frappe", "Python", "ERP", "CRM", "JavaScript"],
      },
      {
        id: "dataring-swe-intern",
        title: "Software Engineer Intern",
        employmentType: "Internship",
        start: "Jan 2026",
        end: "Jun 2026",
        bullets: [
          "Built and maintained production-grade ERP and CRM workflows using Frappe.",
          "Contributed to backend architecture and business logic across multiple modules.",
          "Shipped internal tooling that reduced manual data-entry overhead.",
        ],
        skills: ["Frappe", "Python", "ERP", "CRM", "JavaScript"],
      },
    ],
  },
];
