import { cn } from "@/lib/utils";

export default function TagLine({
  title,
  element = "div",
  className,
  large = false,
}: {
  title: string;
  element?: "div" | "h1" | "h2" | "h3" | "p";
  className?: string;
  large?: boolean;
}) {
  const TagElement = element;

  return (
    <TagElement
      className={cn(
        "inline-block leading-[0] text-muted-foreground",
        className,
        large ? "text-lg" : "text-sm"
      )}
    >
      <span>{title}</span>
    </TagElement>
  );
}
