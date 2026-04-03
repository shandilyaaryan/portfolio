import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/brand-icons";

export type SocialLink = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    title: "GitHub",
    href: "https://github.com/shandilyaaryan",
    icon: GitHubIcon,
    iconBg: "#181717",
    iconColor: "#ffffff",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/aryanshandilya",
    icon: LinkedInIcon,
    iconBg: "#0A66C2",
    iconColor: "#ffffff",
  },
  {
    title: "X / Twitter",
    href: "https://x.com/shandilyaaryan7",
    icon: XIcon,
    iconBg: "#000000",
    iconColor: "#ffffff",
  },
];
