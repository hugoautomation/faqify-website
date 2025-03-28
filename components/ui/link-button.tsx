import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Link as LinkType } from "@/sanity.types";
import { stegaClean } from "next-sanity";

export function LinkButton({
  className,
  link,
  title,
  size = "lg",
  asDiv = false,
  onClick = () => {},
}: {
  className?: string;
  link: LinkType;
  title?: string;
  size?: "default" | "sm" | "lg" | "icon";
  asDiv?: boolean;
  onClick?: () => void;
}) {
  const buttonVariant = stegaClean(link?.buttonVariant);

  return (
    <Button
      asChild
      variant={buttonVariant}
      className={className}
      size={size}
      onClick={onClick}
    >
      {asDiv ? (
        <div>{link.title}</div>
      ) : (
        <Link
          href={link.href as string}
          title={title}
          target={link.target ? "_blank" : undefined}
          rel={link.target ? "noopener" : undefined}
        >
          {link.title}
        </Link>
      )}
    </Button>
  );
}
