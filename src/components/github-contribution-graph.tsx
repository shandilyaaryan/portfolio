"use client";

import { use } from "react";
import { format } from "date-fns";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "./ui/contribution-graph";
import { USER } from "@/data/user";

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>;
}) {
  const data = use(contributions);

  return (
    <Tooltip.Provider delayDuration={100}>
      <ContributionGraph
        className="mx-auto py-2"
        data={data}
        blockSize={11}
        blockMargin={3}
        blockRadius={2}
      >
        <ContributionGraphCalendar
          className="px-2 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          title="GitHub Contributions"
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <g style={{ cursor: "default" }}>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="z-50 rounded-md border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground shadow-md"
                  sideOffset={4}
                >
                  {activity.count} contribution{activity.count !== 1 ? "s" : ""} on{" "}
                  {format(new Date(activity.date), "MMM d, yyyy")}
                  <Tooltip.Arrow className="fill-border" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-2 mt-1">
          <ContributionGraphTotalCount>
            {({ totalCount, year }) => (
              <div className="font-mono text-xs text-muted-foreground">
                {totalCount.toLocaleString("en")} contributions in {year} on{" "}
                <a
                  className="font-medium underline underline-offset-4 hover:text-foreground"
                  href={USER.github}
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
              </div>
            )}
          </ContributionGraphTotalCount>
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </Tooltip.Provider>
  );
}
