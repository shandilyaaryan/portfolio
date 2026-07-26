import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon, XIcon } from "./brand-icons";
import { FooterLogotype } from "./footer-logotype";

function Separator({ className }: { className?: string }) {
  return <div className={cn("flex h-11 w-px bg-line", className)} />;
}

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-top relative mx-auto border-x border-line pt-4 md:max-w-3xl">
        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
            href={USER.twitter}
            target="_blank"
            rel="noopener"
          >
            {USER.firstName} {USER.lastName}
          </a>
          . The source code is available on{" "}
          <a
            className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
            href={USER.github}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
              href={USER.twitter}
              target="_blank"
              rel="noopener"
              aria-label="X (Twitter)"
            >
              <XIcon className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
              href={USER.github}
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
              href={USER.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="*:absolute *:z-2 *:flex *:size-2 *:border *:border-line *:bg-background">
          <div className="bottom-[-3.5px] left-[-4.5px]" />
          <div className="right-[-4.5px] bottom-[-3.5px]" />
        </div>
      </div>

      <FooterLogotype />

      <div className="flex h-16 sm:h-8" />
    </footer>
  );
}
