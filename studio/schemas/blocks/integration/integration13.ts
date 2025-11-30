import { defineType, defineField } from "sanity";
import { Plug } from "lucide-react";
import image from "../shared/image";
import link from "../shared/link";

export default defineType({
  name: "integration-13",
  type: "object",
  title: "Integration 13",
  description: "Integration 13: Dock-style integration display with animated hover effects.",
  icon: Plug,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "tag",
      type: "object",
      title: "Tag",
      fields: [
        defineField({
          name: "text",
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
      name: "description",
      type: "text",
    }),
    defineField({
      name: "integrations",
      type: "array",
      of: [
        {
          name: "integration",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            image,
            defineField({
              name: "href",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "asset",
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "button",
      type: "link",
      title: "Button",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Integration 13",
        subtitle: title || "No Title",
      };
    },
  },
});

