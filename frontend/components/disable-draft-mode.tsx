"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <a
      className={cn(
        buttonVariants({
          size: "lg",
        }),
        "fixed bottom-4 right-4"
      )}
      href="/api/draft-mode/disable"
    >
      Disable Draft Mode
    </a>
  );
}
