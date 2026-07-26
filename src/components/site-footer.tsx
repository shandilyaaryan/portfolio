import { USER } from "@/data/user";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./brand-icons";
type IconType = React.FC<{ className?: string }>;

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
];

const CONNECT_LINKS: { label: string; href: string; icon: IconType; external: boolean }[] = [
  { label: "GitHub", href: USER.github, icon: GitHubIcon as IconType, external: true },
  { label: "LinkedIn", href: USER.linkedin, icon: LinkedInIcon as IconType, external: true },
  { label: "Twitter / X", href: USER.twitter, icon: XIcon as IconType, external: true },
  { label: "Email", href: `mailto:${USER.email}`, icon: MailIcon as IconType, external: false },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top relative mx-auto border-x border-line md:max-w-3xl">

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr]">
          {/* Identity */}
          <div className="border-b border-line sm:border-b-0 sm:border-r px-4 py-6">
            <p className="font-mono text-xs leading-relaxed text-muted-foreground mb-4">
              <span className="text-success select-none mr-1">//</span>
              {USER.bio}
            </p>
            <div className="space-y-1 mb-4">
              <p className="font-mono text-xs text-muted-foreground">{USER.location}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {USER.timeZone.replace(/_/g, " ")}
              </p>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-success" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">Open to opportunities</span>
            </div>
          </div>

          {/* Navigate */}
          <div className="border-b border-line sm:border-b-0 sm:border-r px-4 py-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-3">
              Navigate
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="px-4 py-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-3">
              Connect
            </p>
            <ul className="space-y-2">
              {CONNECT_LINKS.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener" : undefined}
                    className="group flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="size-3.5 shrink-0" />
                    <span>{label}</span>
                    {external && (
                      <ArrowUpRightIcon className="size-3 translate-y-px opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="screen-line-top flex items-center justify-between px-4 py-3">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} {USER.displayName}
          </p>
          <a
            href={USER.github}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            View source
            <ArrowUpRightIcon className="size-3" />
          </a>
        </div>

        {/* Corner decorations */}
        <div className="*:absolute *:z-2 *:flex *:size-2 *:border *:border-line *:bg-background">
          <div className="bottom-[-3.5px] left-[-4.5px]" />
          <div className="right-[-4.5px] bottom-[-3.5px]" />
        </div>
      </div>

      <div className="flex h-16" />
    </footer>
  );
}
