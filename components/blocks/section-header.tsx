import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/section-container";
import Tag from "@/components/ui/tag";
import { stegaClean } from "next-sanity";

import { PAGE_QUERYResult } from "@/sanity.types";

type SectionHeaderProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "section-header" }
>;

export default function SectionHeader({
  padding,
  sectionWidth = "default",
  stackAlign = "left",
  tag,
  title,
  description,
}: SectionHeaderProps) {
  const isNarrow = stegaClean(sectionWidth) === "narrow";
  const align = stegaClean(stackAlign);
  const titleSize = stegaClean(title?.size) || "default";
  const titleWeight = stegaClean(title?.weight) || "bold";

  const Element = title?.element || "h2";

  const titleSizeClasses = {
    small: "text-2xl md:text-3xl",
    default: "text-3xl md:text-4xl",
    large: "text-4xl md:text-6xl",
  }[titleSize];

  const titleWeightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }[titleWeight];

  return (
    <SectionContainer padding={padding}>
      <div
        className={cn(
          align === "center" ? "max-w-3xl text-center mx-auto" : undefined,
          isNarrow ? "max-w-3xl mx-auto" : undefined
        )}
      >
        <div>
          {tag && tag.text && (
            <Tag
              title={tag.text || ""}
              type={tag.type as "title" | "badge"}
              element="p"
              className="mb-4"
            />
          )}
          {title && title.text && (
            <Element
              className={cn(titleSizeClasses, titleWeightClasses, "mb-4")}
            >
              {title.text}
            </Element>
          )}
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
    </SectionContainer>
  );
}
