import React from "react";
import { cn } from "@/lib/utils";

export function Tag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
