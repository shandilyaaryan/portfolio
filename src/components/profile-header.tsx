import { USER } from "@/data/user";
import { TextFlip } from "./text-flip";
import { cn } from "@/lib/utils";

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom flex border-x border-line">
      {/* Avatar */}
      <div className="shrink-0 border-r border-line">
        <div className="mx-3 my-3">
          {USER.avatar ? (
            <img
              className="size-24 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-32"
              src={USER.avatar}
              alt="Avatar"
            />
          ) : (
            <div
              className={cn(
                "size-24 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-32",
                "flex items-center justify-center font-mono font-black text-2xl sm:text-3xl",
                "bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300"
              )}
            >
              AS
            </div>
          )}
        </div>
      </div>

      {/* Name + flip */}
      <div className="flex flex-1 flex-col justify-end">
        <div className="pb-1 pl-4">
          <div
            className="font-mono text-xs text-zinc-700 select-none dark:text-zinc-600"
            aria-hidden
          >
            text-2xl font-semibold
          </div>
        </div>

        <div className="border-t border-line">
          <div className="flex items-center gap-2 pl-4 py-1">
            <h1 className="text-2xl font-semibold tracking-tight font-mono">
              {USER.displayName}
            </h1>
          </div>

          <div className="border-t border-line py-2 pl-4">
            <TextFlip
              className="font-mono text-sm text-muted-foreground"
              interval={2}
            >
              {USER.flipSentences}
            </TextFlip>
          </div>
        </div>
      </div>
    </div>
  );
}
