import {
	githubUrl,
	mailLink,
	telegramUrl,

} from "@/core/constants";
import { GithubIcon, Mail } from "lucide-react";
import Link from "next/link";
import Telegram from "../Icons/social/Telegram";

const Footer = () => {
	return (
		<>
			<footer className="flex flex-col gap-5 items-center md:flex-row md:justify-between py-10 px-4 xl:px-24 2xl:px-48">
				<span className="flex gap-2 items-center order-2 sm:order-1">
					<p>©{new Date().getFullYear()}</p>
				</span>
				<p className="order-3 sm:order-2">
					Made with&nbsp;<span className="text-blue-500">❤</span> in India
				</p>
				<span className="flex flex-wrap justify-center items-center gap-5 lg:gap-4 order-1 sm:order-3">
					<Link href={githubUrl} target="_blank">
						<GithubIcon className="transition-all hover:text-blue-500" />
					</Link>
					<Link href={telegramUrl} target="_blank">
						<Telegram className="h-6 w-6 fill-black dark:fill-white transition-all hover:fill-blue-500 dark:hover:fill-blue-500" />
					</Link>
					<Link href={mailLink} target="_blank">
						<Mail className="transition-all hover:text-blue-500" />
					</Link>
				</span>
			</footer>
		</>
	);
};

export default Footer;
