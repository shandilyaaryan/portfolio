"use client";

import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { BoxIcon, ChevronDownIcon, InfinityIcon, LinkIcon } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PROJECTS, type Project } from "@/data/projects";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./ui/panel";
import { Tag } from "./ui/tag";
import { cn } from "@/lib/utils";
import {
  ChevronsUpDownIcon,
  type ChevronsUpDownIconHandle,
} from "./animated-icons/chevrons-up-down-icon";

// ---------------------------------------------------------------------------
// Collapsible context (CollapsibleWithContext)
// ---------------------------------------------------------------------------

type CollapsibleCtx = { open: boolean };
const CollapsibleContext = createContext<CollapsibleCtx | null>(null);

function useCollapsible() {
  const ctx = useContext(CollapsibleContext);
  if (!ctx) throw new Error("Must be inside CollapsibleProvider");
  return ctx;
}

function CollapsibleProvider({
  defaultOpen = false,
  children,
}: {
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <CollapsibleContext.Provider value={{ open }}>
      <div data-open={open} onClick={() => setOpen((o) => !o)}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

// Animated chevrons that react to the collapsible open state
function CollapsibleChevronsIcon(
  props: Omit<React.ComponentProps<typeof ChevronsUpDownIcon>, "ref">
) {
  const ref = useRef<ChevronsUpDownIconHandle>(null);
  const { open } = useCollapsible();

  useEffect(() => {
    if (!ref.current) return;
    if (open) ref.current.startAnimation();
    else ref.current.stopAnimation();
  }, [open]);

  return <ChevronsUpDownIcon ref={ref} {...props} />;
}

// ---------------------------------------------------------------------------
// CollapsibleList — shows `max` items, rest behind Show More/Less
// ---------------------------------------------------------------------------

function CollapsibleList({
  items,
  max = 4,
  renderItem,
}: {
  items: Project[];
  max?: number;
  renderItem: (item: Project) => React.ReactNode;
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = items.slice(0, max);
  const hidden = items.slice(max);

  return (
    <div>
      {visible.map((item) => (
        <div key={item.id} className="border-b border-line last:border-none">
          {renderItem(item)}
        </div>
      ))}

      <AnimatePresence initial={false}>
        {showAll && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {hidden.map((item) => (
              <div key={item.id} className="border-b border-line last:border-none">
                {renderItem(item)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {hidden.length > 0 && (
        <div className="flex h-12 items-center justify-center pb-px">
          <button
            onClick={() => setShowAll((v) => !v)}
            className={cn(
              "flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground",
              "transition-colors hover:bg-accent hover:text-foreground"
            )}
          >
            {showAll ? "Show Less" : "Show More"}
            <ChevronDownIcon
              className={cn(
                "size-3.5 transition-transform duration-200",
                showAll && "rotate-180"
              )}
            />
          </button>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ProjectItem
// ---------------------------------------------------------------------------

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\[.+?\]\(.+?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(.+?)\]\((.+?)\)$/);
    if (match) {
      return (
        <a
          key={i}
          href={match[2]}
          target="_blank"
          rel="noopener"
          className="underline underline-offset-4 hover:text-muted-foreground"
          onClick={(e) => e.stopPropagation()}
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
}

function ProjectDescription({ text }: { text: string }) {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = (key: string) => {
    if (bulletBuffer.length === 0) return;
    nodes.push(
      <ul key={key} className="list-disc list-outside space-y-1 pl-4">
        {bulletBuffer.map((b, i) => (
          <li key={i}>{renderInline(b)}</li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  lines.forEach((line, i) => {
    if (line.startsWith("- ")) {
      bulletBuffer.push(line.slice(2));
    } else {
      flushBullets(`bullets-${i}`);
      if (line.trim()) {
        nodes.push(<p key={i}>{renderInline(line)}</p>);
      }
    }
  });
  flushBullets("bullets-end");

  return (
    <div className="space-y-4 font-mono text-sm leading-relaxed text-foreground">
      {nodes}
    </div>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const [open, setOpen] = useState(project.isExpanded ?? false);
  const chevronsRef = useRef<ChevronsUpDownIconHandle>(null);

  const { start, end } = project.period;
  const isOngoing = !end;
  const isSinglePeriod = end === start;

  function toggle(e: React.MouseEvent) {
    // don't toggle when clicking the external link
    if ((e.target as HTMLElement).closest("a")) return;
    setOpen((o) => {
      const next = !o;
      if (next) chevronsRef.current?.startAnimation();
      else chevronsRef.current?.stopAnimation();
      return next;
    });
  }

  return (
    <div>
      <div
        className="flex cursor-pointer items-center hover:bg-accent-muted transition-colors"
        onClick={toggle}
      >
        {/* Logo / fallback icon */}
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={32}
            height={32}
            quality={100}
            className="mx-4 flex size-6 shrink-0 select-none"
            unoptimized
            aria-hidden
          />
        ) : (
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
            <BoxIcon className="size-4" />
          </div>
        )}

        {/* Right side */}
        <div className="flex flex-1 items-center gap-2 border-l border-dashed border-line p-4 pr-2 text-left">
          <div className="flex-1">
            <h3 className="mb-1 font-medium leading-snug text-balance">
              {project.title}
            </h3>

            <dl className="text-sm text-muted-foreground">
              <dt className="sr-only">Period</dt>
              <dd className="flex items-center gap-0.5">
                <span>{start}</span>
                {!isSinglePeriod && (
                  <>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </>
                )}
              </dd>
            </dl>
          </div>

          {/* External link with tooltip */}
          <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                  <span className="sr-only">Open Project Link</span>
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="z-50 rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground shadow-md"
                  sideOffset={6}
                >
                  Open Project Link
                  <Tooltip.Arrow className="fill-border" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          {/* Animated chevrons */}
          <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
            <ChevronsUpDownIcon ref={chevronsRef} duration={0.15} />
          </div>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-line p-4">
              {project.description && (
                <ProjectDescription text={project.description} />
              )}
              {project.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Projects section
// ---------------------------------------------------------------------------

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
