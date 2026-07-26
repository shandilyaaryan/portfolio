export type Position = {
  id: string;
  title: string;
  employmentType: string;
  start: string;
  end?: string;
  description?: string;
  skills?: string[];
};

export type Experience = {
  id: string;
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  isCurrentEmployer?: boolean;
  positions: Position[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "dataring",
    companyName: "Dataring",
    companyWebsite: "https://getdataring.com",
    companyLogo: "/dataring-icon.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "dataring-swe",
        title: "Software Engineer",
        employmentType: "Full-time",
        start: "Jul 2026",
        description:
          "Full-time engineer owning backend systems and ERP architecture. Leading development of production workflows, CRM features, and internal tooling on Frappe.",
        skills: ["Frappe", "Python", "ERP", "CRM", "JavaScript"],
      },
      {
        id: "dataring-swe-intern",
        title: "Software Engineer Intern",
        employmentType: "Internship",
        start: "Jan 2026",
        end: "Jun 2026",
        description:
          "Built and maintained production-grade ERP and CRM workflows using Frappe. Contributed to backend architecture and business logic across multiple modules.",
        skills: ["Frappe", "Python", "ERP", "CRM", "JavaScript"],
      },
    ],
  },
];
