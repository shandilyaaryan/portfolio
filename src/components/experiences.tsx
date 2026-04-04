import Image from "next/image";
import { BriefcaseBusinessIcon, InfinityIcon } from "lucide-react";
import { EXPERIENCES } from "@/data/experiences";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./ui/panel";
import { cn } from "@/lib/utils";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <div
            key={experience.id}
            id={`experience-${experience.id}`}
            className="screen-line-bottom last:border-none space-y-4 py-4"
          >
            {/* Company header */}
            <div className="flex items-center gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center">
                {experience.companyLogo ? (
                  <Image
                    src={experience.companyLogo}
                    alt={`${experience.companyName} logo`}
                    width={128}
                    height={128}
                    className="size-6 rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <span className="flex size-2 rounded-full bg-muted-foreground/40" />
                )}
              </div>

              <h3 className="text-base font-semibold leading-snug">
                {experience.companyWebsite ? (
                  <a
                    href={experience.companyWebsite}
                    target="_blank"
                    rel="noopener"
                    className="underline-offset-4 hover:underline"
                  >
                    {experience.companyName}
                  </a>
                ) : (
                  experience.companyName
                )}
              </h3>

              {experience.isCurrentEmployer && (
                <span className="relative flex items-center justify-center">
                  <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-info" />
                  <span className="sr-only">Current Employer</span>
                </span>
              )}
            </div>

            {/* Positions */}
            <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
              {experience.positions.map((position) => (
                <div key={position.id} className="flex flex-col gap-2">
                  {/* Position header */}
                  <div className="relative z-1 flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-6 shrink-0 items-center justify-center rounded-lg",
                        "bg-muted text-muted-foreground",
                        "border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background"
                      )}
                    >
                      <BriefcaseBusinessIcon className="size-3.5" />
                    </div>
                    <h4 className="flex-1 font-medium">{position.title}</h4>
                  </div>

                  {/* Employment type + period */}
                  <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground font-mono">
                    {position.employmentType && (
                      <>
                        <span>{position.employmentType}</span>
                        <span className="text-border">|</span>
                      </>
                    )}
                    <span className="flex items-center gap-0.5">
                      <span>{position.start}</span>
                      <span className="mx-0.5">—</span>
                      {position.end ? (
                        <span>{position.end}</span>
                      ) : (
                        <>
                          <InfinityIcon className="size-4 translate-y-px" />
                          <span className="sr-only">Present</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Description */}
                  {position.description && (
                    <p className="pl-9 text-sm text-foreground leading-relaxed">
                      {position.description}
                    </p>
                  )}

                  {/* Skills */}
                  {position.skills && position.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 pl-9 pt-1">
                      {position.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
