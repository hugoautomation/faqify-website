"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { urlFor } from "@/sanity/lib/image";
import SectionContainer from "@/components/ui/section-container";
import { PAGE_QUERYResult } from "@/sanity.types";
import slugify from "@/lib/slugify";

type Integration11Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "integration-11" }
>;

type Integration = NonNullable<
  NonNullable<
    NonNullable<Integration11Props["categories"]>[number]["integrations"]
  >[number]
>;

type Category = NonNullable<Integration11Props["categories"]>[number];

const IntegrationCard = ({ integration }: { integration: Integration }) => {
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

  const cardClassName =
    "bg-background flex h-fit flex-col justify-between rounded-xl border p-6 shadow-sm transition hover:shadow-md";

  if (integration.href) {
    return (
      <Link
        href={integration.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
};

const Integration11 = ({ padding, title, categories }: Integration11Props) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  if (!categories || categories.length === 0) return null;

  // Generate unique tab values for each category, ensuring no duplicates
  const categoryTabValues = useMemo(() => {
    const values = new Map<Category, string>();
    const usedValues = new Set<string>();
    
    categories.forEach((category, index) => {
      let tabValue: string;
      
      // Prefer _key if available and unique
      if (category._key && !usedValues.has(category._key)) {
        tabValue = category._key;
      } else {
        // Generate from name, ensuring uniqueness
        const baseValue = category.name ? slugify(category.name) : `category-${index}`;
        tabValue = baseValue;
        
        // If value already exists, append index to ensure uniqueness
        let counter = 0;
        while (usedValues.has(tabValue)) {
          counter++;
          tabValue = `${baseValue}-${counter}`;
        }
      }
      
      values.set(category, tabValue);
      usedValues.add(tabValue);
    });
    
    return values;
  }, [categories]);

  // Helper function to get tab value for a category
  const getCategoryTabValue = (category: Category): string => {
    return categoryTabValues.get(category) || `category-${Math.random().toString(36).substr(2, 9)}`;
  };

  return (
    <SectionContainer padding={padding}>
      <section>
        <div className="container">
          {title && (
            <h1 className="mb-6 text-2xl font-bold">{title}</h1>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="all" className="px-4 py-2 text-sm font-medium">
                All Applications
              </TabsTrigger>
              {categories.map((category) => {
                const tabValue = getCategoryTabValue(category);
                return (
                  <TabsTrigger
                    key={category._key || tabValue}
                    value={tabValue}
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {category.name || "Unnamed Category"}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* All Applications Tab */}
            <TabsContent value="all">
              {categories.map((category) => (
                <div key={category._key || category.name} className="mb-10">
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
                      {category.integrations.map((integration) => (
                        <IntegrationCard
                          key={integration._key}
                          integration={integration}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>

            {/* Individual Category Tabs */}
            {categories.map((category) => {
              const tabValue = getCategoryTabValue(category);
              return (
                <TabsContent key={category._key || tabValue} value={tabValue}>
                  <div className="mb-10">
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
                        {category.integrations.map((integration) => (
                          <IntegrationCard
                            key={integration._key}
                            integration={integration}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
    </SectionContainer>
  );
};

export default Integration11;
