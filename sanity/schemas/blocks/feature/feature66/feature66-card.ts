import { defineField, defineType } from "sanity";
import { TextQuote } from "lucide-react";
import { ICON_VARIANTS } from "@/sanity/schemas/blocks/shared/icon-variants";

export default defineType({
  name: "feature-66-card",
  type: "object",
  icon: TextQuote,
  title: "Feature 66 Card",
  description: "Feature card with link, logo, and image background",
  fields: [
    defineField({
      name: "logo",
      type: "image",
      description: "Logo for the card",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
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
      type: "link",
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
