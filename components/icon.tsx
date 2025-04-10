import {
  ArrowDownToLine,
  ArrowUpDown,
  Building2,
  CircleDot,
  Code,
  Compass,
  GitBranch,
  Home,
  Infinity,
  Landmark,
  LayoutGrid,
  List,
  MessagesSquare,
  Play,
  Redo,
  Repeat,
  Scaling,
  Scan,
  Sparkles,
  Timer,
  WandSparkles,
  Zap,
  ZoomIn,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { stegaClean } from "next-sanity";

type IconProps = {
  className?: string;
  iconVariant: string;
  strokeWidth?: number;
  size?: number;
};

// Map of icon names to their components
const iconComponents: Record<string, LucideIcon> = {
  code: Code,
  "git-branch": GitBranch,
  list: List,
  play: Play,
  sparkles: Sparkles,
  "wand-sparkles": WandSparkles,
  "messages-square": MessagesSquare,
  zap: Zap,
  infinity: Infinity,
  "zoom-in": ZoomIn,
  timer: Timer,
  "arrow-down-to-line": ArrowDownToLine,
  "arrow-up-down": ArrowUpDown,
  redo: Redo,
  repeat: Repeat,
  scaling: Scaling,
  scan: Scan,
  "building-2": Building2,
  "circle-dot": CircleDot,
  compass: Compass,
  home: Home,
  landmark: Landmark,
  "layout-grid": LayoutGrid,
};

export default function Icon({
  className,
  iconVariant,
  strokeWidth = 1,
  size = 4,
}: IconProps) {
  const cleanIconVariant = stegaClean(iconVariant);

  if (cleanIconVariant === "none" || !iconComponents[cleanIconVariant]) {
    return null;
  }

  const IconComponent = iconComponents[cleanIconVariant];
  return (
    <IconComponent
      className={cn(`size-${size}`, className)}
      strokeWidth={strokeWidth}
    />
  );
}
