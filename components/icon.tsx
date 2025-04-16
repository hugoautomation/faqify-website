import {
  ArrowDownToLine,
  ArrowUpDown,
  Bell,
  Blocks,
  Building2,
  CircleDot,
  Code,
  Compass,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Globe,
  Home,
  Infinity,
  Landmark,
  LayoutGrid,
  List,
  Lock,
  MessagesSquare,
  MoveRight,
  Play,
  PlayCircle,
  Redo,
  Repeat,
  Scaling,
  Scan,
  Sparkles,
  Star,
  Timer,
  Trophy,
  Users,
  WandSparkles,
  Wrench,
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
  blocks: Blocks,
  "building-2": Building2,
  "circle-dot": CircleDot,
  code: Code,
  compass: Compass,
  "check-circle-2": CheckCircle2,
  "external-link": ExternalLink,
  "git-branch": GitBranch,
  globe: Globe,
  home: Home,
  infinity: Infinity,
  landmark: Landmark,
  "layout-grid": LayoutGrid,
  list: List,
  lock: Lock,
  "messages-square": MessagesSquare,
  "move-right": MoveRight,
  play: Play,
  "play-circle": PlayCircle,
  redo: Redo,
  repeat: Repeat,
  scaling: Scaling,
  scan: Scan,
  sparkles: Sparkles,
  star: Star,
  timer: Timer,
  trophy: Trophy,
  users: Users,
  "wand-sparkles": WandSparkles,
  wrench: Wrench,
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
