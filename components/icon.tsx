import {
  ArrowDownToLine,
  ArrowUpDown,
  ArrowRight,
  Bell,
  Blocks,
  Building2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  CircleDot,
  Code,
  Compass,
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
  "arrow-right": ArrowRight,
  bell: Bell,
  blocks: Blocks,
  "building-2": Building2,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
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
  if (iconVariant === "none" || !iconComponents[iconVariant]) {
    return null;
  }

  const IconComponent = iconComponents[iconVariant];
  return (
    <IconComponent
      className={cn(`size-${size}`, className)}
      strokeWidth={strokeWidth}
    />
  );
}
