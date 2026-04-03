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
  isCurrentEmployer?: boolean;
  positions: Position[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "dataring",
    companyName: "Dataring",
    companyWebsite: "https://getdataring.com",
    isCurrentEmployer: true,
    positions: [
      {
        id: "dataring-swe-intern",
        title: "Software Engineer Intern",
        employmentType: "Internship",
        start: "Jan 2026",
        description:
          "Working on ERP and CRM systems using Frappe. Building and maintaining production-grade workflows, business logic, and backend architecture.",
        skills: ["Frappe", "Python", "ERP", "CRM", "JavaScript"],
      },
    ],
  },
];
