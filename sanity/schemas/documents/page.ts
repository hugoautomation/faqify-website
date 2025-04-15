import { defineField, defineType } from "sanity";
import { Files } from "lucide-react";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: Files,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({ name: "title", type: "string", group: "content" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "blocks",
      type: "array",
      group: "content",
      of: [
        { type: "section-header" },
        { type: "hero-12" },
        { type: "hero-13" },
        { type: "hero-25" },
        { type: "hero-57" },
        { type: "faq-1" },
        { type: "logos-1" },
        { type: "feature-1" },
        { type: "feature-3" },
        { type: "feature-12" },
        { type: "feature-15" },
        { type: "feature-66" },
        { type: "feature-117" },
        { type: "feature-157" },
        { type: "feature-202" },
      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: "section-header",
              title: "Section Header",
              of: ["section-header"],
            },
            {
              name: "hero",
              title: "Hero Components",
              of: ["hero-12", "hero-13", "hero-25", "hero-57"],
            },
            {
              name: "faq",
              title: "FAQ Components",
              of: ["faq-1"],
            },
            {
              name: "logos",
              title: "Logos Components",
              of: ["logos-1"],
            },
            {
              name: "feature",
              title: "Feature Components",
              of: [
                "feature-1",
                "feature-3",
                "feature-12",
                "feature-15",
                "feature-66",
                "feature-117",
                "feature-157",
                "feature-202",
              ],
            },
          ],
          views: [
            {
              name: "grid",
              previewImageUrl: (block) => `/sanity/preview/${block}.jpg`,
            },
            { name: "list" },
          ],
        },
      },
    }),
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image - [1200x630]",
      type: "image",
      group: "seo",
    }),
    orderRankField({ type: "page" }),
  ],
});
