import {
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { stegaClean } from "next-sanity";

export default function Icon({
  className,
  iconVariant,
}: {
  className?: string;
  iconVariant: string;
}) {
  const cleanIconVariant = stegaClean(iconVariant);

  const icons = {
    code: <Code className={cn("size-4", className)} strokeWidth={1} />,
    "git-branch": (
      <GitBranch className={cn("size-4", className)} strokeWidth={1} />
    ),
    list: <List className={cn("size-4", className)} strokeWidth={1} />,
    play: <Play className={cn("size-4", className)} strokeWidth={1} />,
    sparkles: <Sparkles className={cn("size-4", className)} strokeWidth={1} />,
    "wand-sparkles": (
      <WandSparkles className={cn("size-4", className)} strokeWidth={1} />
    ),
  };

  return cleanIconVariant === "none"
    ? null
    : icons[cleanIconVariant as keyof typeof icons];
}
