"use client";

import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import { TECH_STACK, type Tech } from "@/data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./ui/panel";

const CHANHDAI_BASE = "https://assets.chanhdai.com/images/tech-stack-icons";
const SIMPLEICONS_BASE = "https://cdn.simpleicons.org";

function TechIcon({ tech }: { tech: Tech }) {
  if (tech.simpleIcon) {
    // SimpleIcons CDN
    if (tech.theme) {
      return (
        <>
          <Image
            src={`${SIMPLEICONS_BASE}/${tech.key}/black`}
            alt={tech.title}
            width={28}
            height={28}
            className="block dark:hidden"
            unoptimized
          />
          <Image
            src={`${SIMPLEICONS_BASE}/${tech.key}/white`}
            alt={tech.title}
            width={28}
            height={28}
            className="hidden dark:block"
            unoptimized
          />
        </>
      );
    }
    return (
      <Image
        src={`${SIMPLEICONS_BASE}/${tech.key}`}
        alt={tech.title}
        width={28}
        height={28}
        unoptimized
      />
    );
  }

  if (tech.theme) {
    return (
      <>
        <Image
          src={`${CHANHDAI_BASE}/${tech.key}-light.svg`}
          alt={tech.title}
          width={32}
          height={32}
          className="block dark:hidden"
          unoptimized
        />
        <Image
          src={`${CHANHDAI_BASE}/${tech.key}-dark.svg`}
          alt={tech.title}
          width={32}
          height={32}
          className="hidden dark:block"
          unoptimized
        />
      </>
    );
  }

  return (
    <Image
      src={`${CHANHDAI_BASE}/${tech.key}.svg`}
      alt={tech.title}
      width={32}
      height={32}
      unoptimized
    />
  );
}

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <Tooltip.Provider delayDuration={100}>
          <ul className="flex flex-wrap gap-4 select-none">
            {TECH_STACK.map((tech) => (
              <li key={tech.key} className="flex">
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={tech.title}
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      <TechIcon tech={tech} />
                    </a>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="z-50 rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground shadow-md"
                      sideOffset={6}
                    >
                      {tech.title}
                      <Tooltip.Arrow className="fill-border" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </li>
            ))}
          </ul>
        </Tooltip.Provider>
      </PanelContent>
    </Panel>
  );
}
