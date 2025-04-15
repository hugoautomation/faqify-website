import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { PAGE_QUERYResult } from "@/sanity.types";

type Hero1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "hero-12" }
>;

const Hero12 = ({
  tagLine,
  title,
  body,
  image,
  links,
  techLogos,
}: Hero1Props) => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg"
          className="opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            {image && (
              <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
                <Image
                  src={urlFor(image).url()}
                  alt={image.alt || ""}
                  width={64}
                  height={64}
                  className="h-16"
                />
              </div>
            )}
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                {title}
              </h1>
              {body && (
                <div className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                  <PortableText value={body} />
                </div>
              )}
            </div>
            {links && links.length > 0 && (
              <div className="mt-6 flex justify-center gap-3">
                {links.map((link) => (
                  <Button
                    key={link._key}
                    variant={link.buttonVariant || "default"}
                    className={cn(
                      "shadow-sm transition-shadow hover:shadow",
                      link.buttonVariant === "outline" && "group"
                    )}
                    asChild
                  >
                    <Link
                      href={link.href || ""}
                      target={link.target ? "_blank" : undefined}
                      rel={link.target ? "noopener noreferrer" : undefined}
                    >
                      {link.title}
                      {link.target && (
                        <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
            {techLogos && techLogos.length > 0 && (
              <div className="mt-20 flex flex-col items-center gap-5">
                {tagLine && (
                  <p className="font-medium text-muted-foreground lg:text-left">
                    {tagLine}
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {techLogos.map((logo) => (
                    <a
                      key={logo._key}
                      href={logo.link?.href || "#"}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "group flex aspect-square h-12 items-center justify-center p-0"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {logo?.image && logo?.image?.asset?._id && (
                        <Image
                          src={urlFor(logo?.image).url()}
                          alt={logo.image?.alt || ""}
                          width={24}
                          height={24}
                          className="h-6 saturate-0 transition-all group-hover:saturate-100"
                          quality={100}
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero12;
