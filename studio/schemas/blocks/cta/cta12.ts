import { defineField, defineType } from "sanity";
import { Megaphone } from "lucide-react";

export default defineType({
  name: "cta-12",
  title: "CTA 12",
  type: "object",
  icon: Megaphone,
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (Rule) => Rule.required().error("Heading is required"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Call-to-action description text",
    }),
    defineField({
      name: "primaryButton",
      type: "link",
      title: "Primary Button",
      description: "Main call-to-action button",
    }),
    defineField({
      name: "secondaryButton",
      type: "link",
      title: "Secondary Button",
      description: "Secondary call-to-action button",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: "CTA 12",
        subtitle: subtitle || title,
      };
    },
  },
});
