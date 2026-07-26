"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, Code2Icon, InfinityIcon } from "lucide-react";
import { EXPERIENCES, type Position } from "@/data/experiences";
import { Panel, PanelHeader, PanelTitle } from "./ui/panel";
import { cn } from "@/lib/utils";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function parseDate(s: string): Date {
  const [mon, yr] = s.split(" ");
  return new Date(parseInt(yr), MONTHS.indexOf(mon));
}

function calcDuration(start: string, end?: string): string {
  const s = parseDate(start);
  const e = end ? parseDate(end) : new Date();
  const total = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (total <= 0) return "< 1m";
  const y = Math.floor(total / 12);
  const m = total % 12;
  if (y === 0) return `${m}m`;
  if (m === 0) return `${y}y`;
  return `${y}y ${m}m`;
}

function PositionRow({
  position,
  defaultOpen,
  showConnector,
}: {
  position: Position;
  defaultOpen: boolean;
  showConnector: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const duration = calcDuration(position.start, position.end);

  return (
    <div className="flex gap-3">
      {/* Left column: icon + optional line to next position */}
      <div className="flex w-6 shrink-0 flex-col items-center">
        <div
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-lg",
            "bg-muted text-muted-foreground",
            "border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background"
          )}
        >
          <Code2Icon className="size-3.5" />
        </div>
        {showConnector && (
          <div className="mt-2 w-px flex-1 bg-border" />
        )}
      </div>

      {/* Right column: title, meta, bullets, skills */}
      <div className={cn("min-w-0 flex-1", showConnector ? "pb-4" : "pb-1")}>
        {/* Clickable header row */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="group flex w-full items-center gap-2 text-left"
        >
          <h4 className="flex-1 font-medium leading-snug">{position.title}</h4>
          <ChevronDownIcon
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>

        {/* Meta row */}
        <div className="mt-1 flex items-center font-mono text-xs text-muted-foreground">
          <span>{position.employmentType}</span>
          <span className="mx-2 text-border">|</span>
          <span className="flex items-center gap-0.5">
            <span>{position.start}</span>
            <span className="mx-1 font-mono">–</span>
            {position.end ? (
              <span>{position.end}</span>
            ) : (
              <InfinityIcon className="size-3.5 translate-y-px" />
            )}
          </span>
          <span className="mx-2 text-border">|</span>
          <span>{duration}</span>
        </div>

        {/* Bullet points — visible only when open */}
        {open && position.bullets && position.bullets.length > 0 && (
          <ul className="mt-2 space-y-1">
            {position.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Skills — always shown */}
        {position.skills && position.skills.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
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
    </div>
  );
}

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-border">
        {EXPERIENCES.map((experience) => (
          <div key={experience.id} id={`experience-${experience.id}`} className="px-4 py-4">

            {/* Company header */}
            <div className="flex items-center gap-3">
              <div className="flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted">
                {experience.companyLogo ? (
                  <Image
                    src={experience.companyLogo}
                    alt={`${experience.companyName} logo`}
                    width={24}
                    height={24}
                    className="size-6 object-cover"
                    unoptimized
                  />
                ) : (
                  <span className="size-2 rounded-full bg-muted-foreground/40" />
                )}
              </div>

              <h3 className="flex-1 text-lg font-semibold leading-snug">
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

              <div className="flex shrink-0 items-center gap-2">
                {experience.location && (
                  <span className="font-mono text-xs text-muted-foreground">
                    {experience.location}
                  </span>
                )}
                {experience.isCurrentEmployer && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-info" />
                    <span className="sr-only">Current Employer</span>
                  </span>
                )}
              </div>
            </div>

            {/* Positions — side-column layout for precise timeline control */}
            <div className="mt-3">
              {experience.positions.map((position, i) => (
                <PositionRow
                  key={position.id}
                  position={position}
                  defaultOpen={i === 0}
                  showConnector={i < experience.positions.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
