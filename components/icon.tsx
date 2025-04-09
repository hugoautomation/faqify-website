import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
  MessagesSquare,
  Zap,
  Infinity,
  ZoomIn,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { stegaClean } from "next-sanity";

export default function Icon({
  className,
  iconVariant,
  strokeWidth = 1,
  size = 4,
}: {
  className?: string;
  iconVariant: string;
  strokeWidth?: number;
  size?: number;
}) {
  const cleanIconVariant = stegaClean(iconVariant);

  const icons = {
    code: (
      <Code
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    "git-branch": (
      <GitBranch
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    list: (
      <List
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    play: (
      <Play
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    sparkles: (
      <Sparkles
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    "wand-sparkles": (
      <WandSparkles
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    "messages-square": (
      <MessagesSquare
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    zap: (
      <Zap
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    infinity: (
      <Infinity
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    "zoom-in": (
      <ZoomIn
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
    timer: (
      <Timer
        className={cn(`size-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    ),
  };

  return cleanIconVariant === "none"
    ? null
    : icons[cleanIconVariant as keyof typeof icons];
}
