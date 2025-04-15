import { defineField, defineType } from "sanity";
import { LayoutTemplate } from "lucide-react";

export default defineType({
  name: "hero-85",
  title: "Hero 85",
  type: "object",
  icon: LayoutTemplate,
  fields: [
    defineField({
      name: "tag",
      type: "object",
      description: "Multiple taglines to display",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "block-content",
      description: "Main content area supporting rich text",
    }),
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "link-icon" }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      description:
        "Images to display in auto-scrolling carousel, split into two columns. Minimum 8 images required.",
      of: [
        {
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(8),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tag.title",
    },
    prepare({ title, subtitle }) {
      return {
        title: "Hero 85",
        subtitle: subtitle || title,
      };
    },
  },
});
