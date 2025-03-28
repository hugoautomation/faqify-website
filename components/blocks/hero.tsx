import { Badge } from "@/components/ui/badge";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { LinkButton } from "@/components/ui/link-button";
import { TextRoll } from "@/components/ui/text-roll";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity.types";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "hero" }
>;

export default function Hero({
  tagLine,
  title,
  body,
  image,
  links,
}: HeroProps) {
  return (
    <div className="container p-0">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
        <div className="p-8 lg:p-16 lg:border-r flex flex-col items-start">
          {tagLine && (
            <Badge variant="outline" className="h-8">
              {tagLine}
            </Badge>
          )}
          {title && (
            <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mt-6">
              <TextRoll>{title}</TextRoll>
            </h1>
          )}
          {body && (
            <div className="mt-8 max-w-2xl border-t pt-6">
              <PortableTextRenderer value={body} />
            </div>
          )}
          {links && links.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {links.map((link) => (
                <LinkButton key={link.title} link={link} />
              ))}
            </div>
          )}
        </div>

        {image && image.asset?._id && (
          <div className="relative lg:min-w-[350px] aspect-[4/3] lg:aspect-auto border-t lg:border-t-0 p-8 lg:p-16 flex items-center">
            <Image
              src={urlFor(image).fit("max").quality(100).url()}
              alt={image.alt || ""}
              placeholder={image.asset?.metadata?.lqip ? "blur" : undefined}
              blurDataURL={image.asset?.metadata?.lqip || undefined}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="grayscale"
            />
          </div>
        )}
      </div>
    </div>
  );
}
