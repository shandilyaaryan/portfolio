import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";
import { Panel, PanelContent } from "./ui/panel";
import { GitHubContributionGraph } from "./github-contribution-graph";
import { USER } from "@/data/user";

async function fetchContributions() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${USER.username}?y=last`,
    { next: { revalidate: 86400 } }
  );
  const data = await res.json();
  return data.contributions as { date: string; count: number; level: number }[];
}

export function GitHubContributions() {
  const contributions = fetchContributions();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>
      <PanelContent>
        <Suspense
          fallback={
            <div className="flex h-40 w-full items-center justify-center">
              <LoaderIcon className="animate-spin text-muted-foreground" />
            </div>
          }
        >
          <GitHubContributionGraph contributions={contributions} />
        </Suspense>
      </PanelContent>
    </Panel>
  );
}
