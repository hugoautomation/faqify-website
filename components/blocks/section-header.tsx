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
          {title && <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>}
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
    </SectionContainer>
  );
}
