import { cn } from "@/lib/utils";

import { SectionPadding, SectionBorder } from "@/sanity.types";

interface SectionContainerProps {
  padding?: SectionPadding | null;
  border?: SectionBorder | null;
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  padding,
  border,
  children,
  className,
}: SectionContainerProps) {
  return (
    <div
      className={cn(
        "border-primary container",
        padding?.top ? "pt-16 xl:pt-20" : undefined,
        padding?.bottom ? "pb-16 xl:pb-20" : undefined,
        border?.top ? "border-t" : undefined,
        border?.bottom ? "border-b" : undefined,
        className
      )}
    >
      {children}
    </div>
  );
}
