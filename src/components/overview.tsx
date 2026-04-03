import {
  MapPinIcon,
  MailIcon,
  LinkIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  PhoneIcon,
  MarsIcon,
} from "lucide-react";
import { USER } from "@/data/user";
import { Panel, PanelContent } from "./ui/panel";
import { LocalTime, LocalTimeIcon } from "./local-time";

function IntroItemIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:size-3.5 [&_svg]:text-muted-foreground">
      {children}
    </div>
  );
}

function IntroItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <IntroItemIcon>{icon}</IntroItemIcon>
      <span className="truncate">{children}</span>
    </div>
  );
}

export function Overview() {
  return (
    <Panel className="after:content-none">
      <h2 className="sr-only">Overview</h2>
      <PanelContent className="space-y-2.5">
        {USER.jobs.map((job, i) => (
          <IntroItem key={i} icon={<CodeXmlIcon />}>
            {job.title} @{" "}
            <a href={job.website} target="_blank" rel="noopener" className="ml-0.5 font-medium underline-offset-4 hover:underline">
              {job.company}
            </a>
          </IntroItem>
        ))}

        <IntroItem icon={<GraduationCapIcon />}>
          BCA, 6th Semester
        </IntroItem>

        <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
          <IntroItem icon={<MapPinIcon />}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.location)}`}
              target="_blank"
              rel="noopener"
              className="underline-offset-4 hover:underline"
            >
              {USER.location}
            </a>
          </IntroItem>

          <IntroItem icon={<LocalTimeIcon />}>
            <LocalTime />
          </IntroItem>

          <IntroItem icon={<PhoneIcon />}>
            <a href={`tel:${USER.phone}`} className="underline-offset-4 hover:underline">
              {USER.phone}
            </a>
          </IntroItem>

          <IntroItem icon={<MailIcon />}>
            <a href={`mailto:${USER.email}`} className="underline-offset-4 hover:underline">
              {USER.email}
            </a>
          </IntroItem>

          <IntroItem icon={<LinkIcon />}>
            <a href={USER.website} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
              {USER.website.replace("https://", "")}
            </a>
          </IntroItem>

          <IntroItem icon={<MarsIcon />}>
            {USER.pronouns}
          </IntroItem>
        </div>
      </PanelContent>
    </Panel>
  );
}
