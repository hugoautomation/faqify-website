import { defineType, defineField } from "sanity";
import { DollarSign } from "lucide-react";

export default defineType({
  name: "pricing-1",
  type: "object",
  title: "Pricing 1",
  description: "Pricing 1: Pricing cards with grid layout split into columns.",
  icon: DollarSign,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "columns",
      type: "array",
      of: [
        {
          name: "column",
          type: "object",
          fields: [
            defineField({
              name: "featured",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
            defineField({
              name: "price",
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  type: "number",
                }),
                defineField({
                  name: "note",
                  type: "string",
                }),
              ],
            }),
            defineField({
              name: "link",
              type: "link",
            }),
            defineField({
              name: "listTitle",
              type: "string",
            }),
            defineField({
              name: "list",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "columns.0.title",
    },
    prepare({ title }) {
      return {
        title: "Feature 3",
        subtitle: title || "No Title",
      };
    },
  },
});
