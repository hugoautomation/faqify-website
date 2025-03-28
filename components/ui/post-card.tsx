import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { POSTS_QUERYResult } from "@/sanity.types";

type PostCard = NonNullable<POSTS_QUERYResult[number]>;

interface PostCardProps extends Omit<PostCard, "slug"> {
  className?: string;
}

export default function PostCard({
  className,
  title,
  excerpt,
  image,
  categories,
}: PostCardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-between overflow-hidden transition ease-in-out group border p-4 hover:ring-2 hover:ring-offset-2 hover:ring-primary",
        className
      )}
    >
      <div className="flex flex-col">
        {image && image.asset?._id && (
          <div className="mb-4 relative h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[9.5rem] xl:h-[12rem] overflow-hidden">
            <Image
              src={urlFor(image).url()}
              alt={image.alt || ""}
              placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
              blurDataURL={image?.asset?.metadata?.lqip || ""}
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              quality={100}
            />
          </div>
        )}
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[1.5rem] leading-[1.2]">{title}</h3>
          </div>
        )}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Badge key={category._id} color="primary">
                {category.title}
              </Badge>
            ))}
          </div>
        )}
        {excerpt && <p>{excerpt}</p>}
      </div>
      <LinkButton
        className="mt-3 h-8 w-8 p-0 sm:h-8 sm:w-8 sm:px-0 sm:py-0 lg:h-10 lg:w-10"
        asDiv
        link={{
          _type: "link",
          href: "#",
          buttonVariant: "outline",
        }}
      />
    </div>
  );
}
