import Link from "next/link";
import MobileNav from "@/components/header/mobile-nav";
import DesktopNav from "@/components/header/desktop-nav";
import Logo from "@/components/logo";
import Image from "next/image";
import { getNavigationItems } from "@/lib/getNavigationItems";
import { fetchSanitySettings } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export default async function Header() {
  const settings = await fetchSanitySettings();
  const headerNavigtaion = await getNavigationItems("header");

  return (
    <header className="sticky top-0 w-full bg-background/95 z-50 border-primary border-b">
      <div className="container flex items-center justify-between py-2">
        <Link href="/" aria-label="Home page">
          {settings?.logo ? (
            <Image
              src={urlFor(settings.logo).url()}
              alt={settings.logo.alt ?? ""}
              width={100}
              height={25}
              title={settings.siteName || ""}
            />
          ) : (
            <Logo />
          )}
        </Link>
        <DesktopNav navItems={headerNavigtaion ?? []} />
        <MobileNav navItems={headerNavigtaion ?? []} />
      </div>
    </header>
  );
}
