import { USER } from "@/data/user";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./ui/panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ul className="space-y-2 font-mono text-sm text-foreground">
          {USER.about
            .split("\n")
            .filter(Boolean)
            .map((line, i) => {
              const text = line.replace(/^-\s*/, "");
              return (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span dangerouslySetInnerHTML={{ __html: formatLine(text) }} />
                </li>
              );
            })}
        </ul>
      </PanelContent>
    </Panel>
  );
}

function formatLine(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="underline underline-offset-4 hover:text-foreground">$1</a>');
}
