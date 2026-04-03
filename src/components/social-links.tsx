import { ArrowUpRightIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social-links";
import { Panel } from "./ui/panel";
import { cn } from "@/lib/utils";

export function SocialLinks() {
  return (
    <Panel className="before:content-none after:content-none">
      <h2 className="sr-only">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-2 md:grid-cols-3">
          <div className="border-r border-line" />
          <div className="border-l border-line md:border-x" />
          <div className="border-l border-line max-md:hidden" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener"
                className={cn(
                  "flex items-center gap-4 p-4 pr-2 transition-colors duration-200 hover:bg-accent",
                  index % 2 === 0 && "screen-line-top screen-line-bottom"
                )}
              >
                <div
                  className="relative flex size-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: link.iconBg }}
                >
                  <Icon className="size-5" style={{ color: link.iconColor }} />
                </div>
                <span className="flex-1 font-medium text-sm">{link.title}</span>
                <ArrowUpRightIcon className="size-4 text-muted-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
