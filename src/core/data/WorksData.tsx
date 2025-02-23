import {
	CollabWrite,
	PixelStar,
	Portfolio,
	Xora,
} from "@/core/images";
import { FolderGit, Globe } from "lucide-react";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type WorksDataType = {
	// id: number;
	icon: ReactNode;
	image: StaticImageData;
	title: string;
	desc: string;
	lang: string;
	link: string;
};

const WorksData: WorksDataType[] = [
	{
		title: "CollabWrite",
		icon: <Globe className="w-5 h-5" />,
		image: CollabWrite,
		desc: "A real-time collaborative drawing app with Liveblocks and Convex, enabling seamless multi-user interaction. ",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://collab-write-rho.vercel.app/",
	},
	{
		title: "PixelStar",
		icon: <Globe className="w-5 h-5" />,
		image: PixelStar,
		desc: "Enhanced the official PixelStar custom ROM website by improving responsiveness and UI/UX.",
		lang: "React.js, JavaScript & TailwindCSS",
		link: "https://project-pixelstar.xyz/",
	},
	{
		title: "Personal Portfolio",
		icon: <Globe className="w-5 h-5" />,
		image: Portfolio,
		desc: "A modern, minimalistic showcase of my work, skills, and projects, built with the latest web technologies.",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://aryanshandilya.vercel.app",
	},
	{
		title: "XORA",
		icon: <Globe className="w-5 h-5" />,
		image: Xora,
		desc: "A modern and beautiful SASS landing page showing off my skills in Tailwind CSS.",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://xora-gules.vercel.app/"
	}
];

export default WorksData;
