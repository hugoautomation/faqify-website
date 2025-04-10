import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function Tag({
  title,
  type = "title",
  element = "div",
  className,
  large = false,
}: {
  title: string;
  type?: "title" | "badge";
  element?: "div" | "h1" | "h2" | "h3" | "p";
  className?: string;
  large?: boolean;
}) {
  const TagElement = element;

  return (
    <TagElement
      className={cn(
        "inline-block leading-[0] text-muted-foreground font-normal",
        className,
        large ? "text-lg" : "text-sm"
      )}
    >
      {type === "title" ? (
        <span>{title}</span>
      ) : (
        <Badge variant="outline">{title}</Badge>
      )}
    </TagElement>
  );
}
