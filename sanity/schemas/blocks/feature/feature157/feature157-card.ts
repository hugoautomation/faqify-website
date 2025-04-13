import { defineField, defineType } from "sanity";
import { TextQuote } from "lucide-react";

export default defineType({
  name: "feature-157-card",
  type: "object",
  icon: TextQuote,
  title: "Feature 157 Card",
  description:
    "Feature card with link, title, description, and image background",
  fields: [
    defineField({
      name: "image",
      type: "image",
      description: "Background image for the card",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "link",
      type: "link-icon",
    }),
  ],
  preview: {
    select: {
      title: "link.title",
    },
    prepare({ title }) {
      return {
        title: title || "No Title",
      };
    },
  },
});
