import { NAVIGATION_QUERYResult } from "@/sanity.types";
import { LinkButton } from "@/components/ui/link-button";

type NavItem = NonNullable<NAVIGATION_QUERYResult[number]["links"]>[number];

export default function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  if (!navItems) return null;
  return (
    <div className="hidden lg:flex gap-7">
      {navItems.map((navItem) => (
        <LinkButton
          className="hover:no-underline"
          key={navItem._key}
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
  );
}
