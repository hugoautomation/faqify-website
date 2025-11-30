"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import SectionContainer from "@/components/ui/section-container";
import { PAGE_QUERYResult } from "@/sanity.types";

type Integration11Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "integration-11" }
>;

const Integration11 = ({ padding, title, categories }: Integration11Props) => {
  return (
    <SectionContainer padding={padding}>
      <section className="py-32">
        <div className="container">
          {title && (
            <h1 className="mb-6 text-2xl font-bold">{title}</h1>
          )}

          {categories && categories.length > 0 && (
            <>
              {categories.map((category) => (
                <div key={category._key} className="mb-10">
                  {category.name && (
                    <h2 className="mb-1 text-lg font-semibold">
                      {category.name}
                    </h2>
                  )}
                  {category.description && (
                    <p className="text-muted-foreground mb-4 text-sm">
                      {category.description}
                    </p>
                  )}
                  {category.integrations && category.integrations.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {category.integrations.map((integration) => {
                        const content = (
                          <>
                            <div className="mb-4 flex items-center gap-4">
                              {integration.image?.asset && (
                                <div className="bg-muted flex h-12 w-12 flex-shrink-0 flex-grow-0 items-center justify-center rounded-md p-2">
                                  <Image
                                    src={urlFor(integration.image).url()}
                                    alt={integration.title || ""}
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 flex-shrink-0 flex-grow-0 object-contain"
                                    placeholder={
                                      integration.image?.asset?.metadata?.lqip &&
                                      integration.image?.asset?.mimeType !== "image/svg+xml"
                                        ? "blur"
                                        : undefined
                                    }
                                    blurDataURL={integration.image?.asset?.metadata?.lqip || ""}
                                  />
                                </div>
                              )}
                              <div>
                                {integration.title && (
                                  <div className="text-base font-medium leading-tight">
                                    {integration.title}
                                  </div>
                                )}
                                {integration.description && (
                                  <div className="text-muted-foreground text-xs leading-snug">
                                    {integration.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        );

                        if (integration.href) {
                          return (
                            <Link
                              key={integration._key}
                              href={integration.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-background flex min-h-[170px] flex-col justify-between rounded-xl border p-6 shadow-sm transition hover:shadow-md"
                            >
                              {content}
                            </Link>
                          );
                        }

                        return (
                          <div
                            key={integration._key}
                            className="bg-background flex min-h-[170px] flex-col justify-between rounded-xl border p-6 shadow-sm transition hover:shadow-md"
                          >
                            {content}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </SectionContainer>
  );
};

export default Integration11;

