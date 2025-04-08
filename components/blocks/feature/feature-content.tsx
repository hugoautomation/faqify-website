import { cn } from "@/lib/utils";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TagLine from "@/components/ui/tag-line";
import { createElement } from "react";
import { PAGE_QUERYResult } from "@/sanity.types";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type Feature1 = Extract<Block, { _type: "feature-1" }>;
type FeatureContent = Extract<
  NonNullable<Feature1["columns"]>[number],
  { _type: "feature-content" }
>;

export default function FeatureContent({
  padding,
  tagLine,
  title,
  body,
  links,
}: FeatureContent) {
  return (
    <div
      className={cn(
        padding?.top ? "pt-16 xl:pt-20" : undefined,
        padding?.bottom ? "pb-16 xl:pb-20" : undefined
      )}
    >
      <div className="flex flex-col items-start">
        {tagLine && <TagLine title={tagLine} element="h2" />}
        {title &&
          createElement(
            tagLine ? "h3" : "h2",
            {
              className: cn(
                "my-6 mt-0 text-3xl font-bold text-pretty lg:text-4xl"
              ),
            },
            title
          )}
        {body && (
          <div className="max-w-xl text-muted-foreground lg:text-lg">
            <PortableTextRenderer value={body} />
          </div>
        )}
        {links && links.length > 0 && (
          <div className="mt-8 flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {links.map((link, index) => (
              <Button
                key={link._key || index}
                variant={link.buttonVariant || "default"}
                size="lg"
                asChild
              >
                <Link
                  href={link.href || ""}
                  target={link.target ? "_blank" : undefined}
                  rel={link.target ? "noopener noreferrer" : undefined}
                >
                  {link.title}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
