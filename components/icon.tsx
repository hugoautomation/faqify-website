import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
  MessagesSquare,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { stegaClean } from "next-sanity";

export default function Icon({
  className,
  iconVariant,
  strokeWidth = 1,
}: {
  className?: string;
  iconVariant: string;
  strokeWidth?: number;
}) {
  const cleanIconVariant = stegaClean(iconVariant);

  const icons = {
    code: (
      <Code className={cn("size-4", className)} strokeWidth={strokeWidth} />
    ),
    "git-branch": (
      <GitBranch
        className={cn("size-4", className)}
        strokeWidth={strokeWidth}
      />
    ),
    list: (
      <List className={cn("size-4", className)} strokeWidth={strokeWidth} />
    ),
    play: (
      <Play className={cn("size-4", className)} strokeWidth={strokeWidth} />
    ),
    sparkles: (
      <Sparkles className={cn("size-4", className)} strokeWidth={strokeWidth} />
    ),
    "wand-sparkles": (
      <WandSparkles
        className={cn("size-4", className)}
        strokeWidth={strokeWidth}
      />
    ),
    "messages-square": (
      <MessagesSquare
        className={cn("size-4", className)}
        strokeWidth={strokeWidth}
      />
    ),
    zap: <Zap className={cn("size-4", className)} strokeWidth={strokeWidth} />,
  };

  return cleanIconVariant === "none"
    ? null
    : icons[cleanIconVariant as keyof typeof icons];
}
