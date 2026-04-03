import React from "react";
import { cn } from "@/lib/utils";

export function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "screen-line-top screen-line-bottom border-x border-line",
        className
      )}
      {...props}
    />
  );
}

export function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("screen-line-bottom px-4 py-3", className)}
      {...props}
    />
  );
}

export function PanelTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-2xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

export function PanelTitleSup({ className, ...props }: React.ComponentProps<"sup">) {
  return (
    <sup
      className={cn("-top-[0.75em] ml-1 text-sm font-medium tracking-normal text-muted-foreground", className)}
      {...props}
    />
  );
}

export function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("p-4", className)} {...props} />
  );
}
