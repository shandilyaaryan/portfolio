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
    location: "Remote",
    isCurrentEmployer: true,
    positions: [
      {
        id: "dataring-swe",
        title: "Software Engineer",
        employmentType: "Full-time",
        start: "Jul 2026",
        bullets: [
          "Own engineering for a US client's CRM, ERP and companion apps on Frappe: requirements, design, build, release and support.",
          "Designed and built a new app from a short brief in about ten weeks, with role-based access, third-party integrations and Playwright end-to-end tests.",
          "Leading a ground-up rebuild of the CRM, from the data model to the interface.",
          "Work with the client's team directly: scoping requests, reporting progress, and fixing what breaks.",
          "185+ pull requests merged across five repositories since January 2026.",
        ],
        skills: ["Frappe", "Python", "Vue", "JavaScript", "Playwright"],
      },
      {
        id: "dataring-swe-intern",
        title: "Software Engineer Intern",
        employmentType: "Internship",
        start: "Jan 2026",
        end: "Jun 2026",
        bullets: [
          "Raised 140+ pull requests across the CRM and ERP codebases in under six months.",
          "Built production features on Frappe for both products: workflows, business logic, integrations and the Vue front end.",
          "Converted to a full-time role at the end of the internship.",
        ],
        skills: ["Frappe", "Python", "Vue", "JavaScript"],
      },
    ],
  },
];
