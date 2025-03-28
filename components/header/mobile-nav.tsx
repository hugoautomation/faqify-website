"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { useState } from "react";
import { AlignRight } from "lucide-react";
import Logo from "@/components/logo";
import { motion } from "motion/react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { NAVIGATION_QUERYResult } from "@/sanity.types";

type NavItem = NonNullable<NAVIGATION_QUERYResult[number]["links"]>[number];

export default function MobileNav({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            aria-label="Open Menu"
            variant="ghost"
            className="w-[4rem] p-1 focus-visible:ring-1 focus-visible:ring-offset-1"
          >
            <AlignRight />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="mx-auto">
              <div className="pl-6">
                <Logo />
              </div>
            </div>
            <div className="sr-only">
              <SheetTitle>Main Navigation</SheetTitle>
              <SheetDescription>Navigate to the website pages</SheetDescription>
            </div>
          </SheetHeader>
          <div className="flex flex-col">
            {navItems.map((navItem, index) => (
              <Fragment key={navItem._key}>
                <LinkButton
                  className="hover:no-underline text-lg min-h-18"
                  onClick={() => setOpen(false)}
                  link={{
                    _type: "link",
                    title: navItem.title ?? "",
                    href: navItem.href ?? "",
                    target: navItem.target,
                    buttonVariant: navItem.buttonVariant,
                  }}
                />
                <motion.div
                  className={cn(
                    "border-b",
                    index === navItems.length - 1 && "border-b-0"
                  )}
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.21, 0.45, 0.27, 0.9],
                    delay: index * 0.1,
                  }}
                />
              </Fragment>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
