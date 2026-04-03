"use client";

import { useEffect, useState } from "react";
import {
  Clock1Icon, Clock2Icon, Clock3Icon, Clock4Icon,
  Clock5Icon, Clock6Icon, Clock7Icon, Clock8Icon,
  Clock9Icon, Clock10Icon, Clock11Icon, Clock12Icon,
  type LucideIcon,
} from "lucide-react";
import { USER } from "@/data/user";

const CLOCK_ICONS: Record<number, LucideIcon> = {
  1: Clock1Icon, 2: Clock2Icon, 3: Clock3Icon, 4: Clock4Icon,
  5: Clock5Icon, 6: Clock6Icon, 7: Clock7Icon, 8: Clock8Icon,
  9: Clock9Icon, 10: Clock10Icon, 11: Clock11Icon, 12: Clock12Icon,
};

export function useLocalTime() {
  const [time, setTime] = useState("");
  const [diff, setDiff] = useState("");
  const [ClockIcon, setClockIcon] = useState<LucideIcon>(Clock12Icon);

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: USER.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      setTime(formatted);

      // Dynamic clock icon
      const hour = parseInt(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: USER.timeZone,
          hour: "numeric",
          hour12: false,
        }).format(now)
      );
      setClockIcon(CLOCK_ICONS[hour % 12 || 12]);

      // Timezone diff relative to viewer
      const viewerOffset = -now.getTimezoneOffset();
      const targetOffset = 330; // IST = UTC+5:30 = 330 minutes
      const minutesDiff = Math.abs(targetOffset - viewerOffset);
      const hoursDiff = minutesDiff / 60;

      if (hoursDiff < 1) {
        setDiff(" // same time");
      } else {
        const h = Math.floor(hoursDiff);
        const isAhead = targetOffset > viewerOffset;
        setDiff(` // ${h}h ${isAhead ? "ahead" : "behind"}`);
      }
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return { time, diff, ClockIcon };
}

export function LocalTime() {
  const { time, diff } = useLocalTime();
  if (!time) return <span>00:00</span>;
  return (
    <span>
      {time}
      <span className="text-muted-foreground">{diff}</span>
    </span>
  );
}

export function LocalTimeIcon() {
  const { ClockIcon } = useLocalTime();
  return <ClockIcon />;
}
