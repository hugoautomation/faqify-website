import { defineType, defineField } from "sanity";
import { Plug } from "lucide-react";
import image from "../shared/image";

export default defineType({
  name: "integration-11",
  type: "object",
  title: "Integration 11",
  description: "Integration 11: Categorized integration list without toggle functionality.",
  icon: Plug,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        {
          name: "category",
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Category Name",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Category Description",
            }),
            defineField({
              name: "integrations",
              type: "array",
              title: "Integrations",
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
                    defineField({
                      name: "description",
                      type: "text",
                    }),
                    image,
                    defineField({
                      name: "href",
                      type: "url",
                      title: "Link URL",
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
          ],
          preview: {
            select: {
              title: "name",
            },
            prepare({ title }) {
              return {
                title: title || "Unnamed Category",
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Integration 11",
        subtitle: title || "No Title",
      };
    },
  },
});

