import {
  ArrowDownToLine,
  ArrowUpDown,
  Bell,
  Building2,
  CircleDot,
  Code,
  Compass,
  ExternalLink,
  GitBranch,
  Home,
  Infinity,
  Landmark,
  LayoutGrid,
  List,
  MessagesSquare,
  Play,
  PlayCircle,
  Redo,
  Repeat,
  Scaling,
  Scan,
  Sparkles,
  Timer,
  Users,
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
  "arrow-down-to-line": ArrowDownToLine,
  "arrow-up-down": ArrowUpDown,
  bell: Bell,
  "building-2": Building2,
  "circle-dot": CircleDot,
  code: Code,
  compass: Compass,
  "external-link": ExternalLink,
  "git-branch": GitBranch,
  home: Home,
  infinity: Infinity,
  landmark: Landmark,
  "layout-grid": LayoutGrid,
  list: List,
  "messages-square": MessagesSquare,
  play: Play,
  "play-circle": PlayCircle,
  redo: Redo,
  repeat: Repeat,
  scaling: Scaling,
  scan: Scan,
  sparkles: Sparkles,
  timer: Timer,
  users: Users,
  "wand-sparkles": WandSparkles,
  zap: Zap,
  "zoom-in": ZoomIn,
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
