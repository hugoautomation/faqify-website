import Link from "next/link";
import Logo from "@/components/logo";
import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { getNavigationItems } from "@/lib/getNavigationItems";
import { fetchSanitySettings } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export default async function Footer() {
  const footerNavItems = await getNavigationItems("footer");
  const footerSocialItems = await getNavigationItems("footer-social");
  const settings = await fetchSanitySettings();
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="container border-primary border-t">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-6">
        <Link href="/" aria-label="Home page">
          {settings?.logo ? (
            <Image
              src={urlFor(settings.logo).url()}
              alt={settings.logo.alt ?? ""}
              width={
                (settings.logo.width as number) ??
                settings.logo?.asset?.metadata?.dimensions?.width
              }
              height={
                (settings.logo.height as number) ??
                settings.logo?.asset?.metadata?.dimensions?.height
              }
              placeholder={
                settings.logo.asset?.metadata?.lqip ? "blur" : undefined
              }
              blurDataURL={settings.logo.asset?.metadata?.lqip || undefined}
              quality={100}
              title={settings.siteName || ""}
            />
          ) : (
            <Logo />
          )}
        </Link>
        <div className="my-6 md:my-0 flex flex-wrap items-center justify-center gap-7 text-primary">
          {footerNavItems?.map((navItem) => (
            <LinkButton
              key={navItem._key}
              className="hover:no-underline"
              link={{
                _type: "link",
                title: navItem.title ?? "",
                href: navItem.href ?? "",
                target: navItem.target,
                buttonVariant: navItem.buttonVariant,
              }}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 text-primary">
          {footerSocialItems?.map((navItem) => (
            <LinkButton
              key={navItem._key}
              className="h-8 w-8 p-0 sm:h-8 sm:w-8 sm:px-0 sm:py-0 lg:h-10 lg:w-10"
              title={navItem.title}
              link={{
                _type: "link",
                title: "",
                href: navItem.href,
                target: navItem.target,
                buttonVariant: "outline",
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex text-center md:text-left text-xs pb-6">
        <span className="mr-1">&copy; {getCurrentYear()}</span>
        {settings?.copyright && (
          <PortableTextRenderer value={settings.copyright} />
        )}
      </div>
    </footer>
  );
}
