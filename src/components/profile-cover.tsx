import { cn } from "@/lib/utils";
import { ASMark } from "./as-mark";

export function ProfileCover() {
  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-line select-none sm:aspect-3/1",
        "flex items-center justify-center",
        "screen-line-top screen-line-bottom before:-top-px after:-bottom-px",
        "bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-[size:10px_10px]",
        "[--pattern-fg:color-mix(in_oklab,var(--color-foreground)_8%,transparent)]"
      )}
    >
      <ASMark className="h-12 w-24 text-foreground sm:h-16 sm:w-32" />
    </div>
  );
}
