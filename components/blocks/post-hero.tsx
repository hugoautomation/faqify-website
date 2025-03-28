import Image from "next/image";
import PostDate from "@/components/post-date";
import { LinkButton } from "@/components/ui/link-button";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERYResult } from "@/sanity.types";

type PostHeroProps = NonNullable<POST_QUERYResult>;

export default function PostHero({
  title,
  author,
  image,
  slug,
  _createdAt,
}: PostHeroProps) {
  return (
    <div className="container p-0 border-primary">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        {/* Main Content */}
        <div className="p-8 lg:p-16 lg:border-r">
          {title && (
            <h1 className="text-3xl lg:text-5xl font-bold mb-8">{title}</h1>
          )}

          <div className="flex items-center gap-4">
            {author?.image && author.image.asset?._id && (
              <div className="relative w-12 h-12">
                <Image
                  src={urlFor(author.image).url()}
                  alt={author.image.alt ? author.image.alt : ""}
                  fill
                  style={{ objectFit: "cover" }}
                  placeholder={
                    author.image.asset?.metadata?.lqip ? "blur" : undefined
                  }
                  blurDataURL={author.image.asset?.metadata?.lqip || undefined}
                  sizes="48px"
                  className="border border-primary grayscale"
                />
              </div>
            )}
            <div className="flex flex-col">
              {author?.name && <div className="font-medium">{author.name}</div>}
              <PostDate date={_createdAt as string} />
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto border-t lg:border-t-0">
          {image && image.asset?._id && (
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
          )}
        </div>
      </div>

      {/* Share Section */}
      <div className="grid grid-cols-[1fr_auto] border-t">
        <div className="p-4 lg:p-6">Share this post</div>
        <div className="flex gap-4 items-center px-6 border-l">
          <LinkButton
            className="h-8 w-8 p-0 sm:h-8 sm:w-8 sm:px-0 sm:py-0 lg:h-10 lg:w-10"
            title="Share on Facebook"
            link={{
              _type: "link",
              href: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug?.current}`,
              target: true,
              buttonVariant: "outline",
            }}
          />
          <LinkButton
            className="h-8 w-8 p-0 sm:h-8 sm:w-8 sm:px-0 sm:py-0 lg:h-10 lg:w-10"
            title="Share via Email"
            link={{
              _type: "link",
              href: `mailto:?subject=${title}&body=${title}%0A%0A${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug?.current}`,
              target: true,
              buttonVariant: "outline",
            }}
          />
        </div>
      </div>
    </div>
  );
}
