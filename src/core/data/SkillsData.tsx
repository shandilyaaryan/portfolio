import {
	Database,
	Figma,
	FileCode,
	Github,
	Languages,
	TabletSmartphone,
} from "lucide-react";
import { ReactNode } from "react";

export type SkillDataType = {
	id: number;
	icon?: ReactNode;
	title: string;
	language: string;
};

const SkillsData: SkillDataType[] = [
	{
		id: 1,
		icon: <Figma className="h-8 w-8" />,
		title: "Web Designing",
		language: "Basics of Figma to bring designs to life.",
	},

	{
		id: 2,
		icon: <Github className="h-8 w-8" />,
		title: "Version Control",
		language: "Git, GitHub",
	},
	{
		id: 3,
		icon: <TabletSmartphone className="h-8 w-8" />,
		title: "Web Optimization",
		language: "Responsive Designing & SEO",
	},
	{
		id: 4,
		icon: <FileCode className="h-8 w-8" />,
		title: "Development",
		language: "Next.js, React.js",
	},
	{
		id: 5,
		icon: <Database className="h-8 w-8" />,
		title: "Databases",
		language: "MongoDB, Prisma, MySQL, PostgreSQL",
	},
	{
		id: 6,
		icon: <Languages className="h-8 w-8" />,
		title: "Languages",
		language: "HTML5, CSS3, JavaScript, TypeScript, Python(Beginner)",
	},
];

export default SkillsData;
