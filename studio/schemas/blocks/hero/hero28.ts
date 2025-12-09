import { defineField, defineType } from "sanity";
import { LayoutTemplate } from "lucide-react";

export default defineType({
  name: "hero-28",
  title: "Hero 28",
  type: "object",
  icon: LayoutTemplate,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Subtitle or description text",
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Buttons",
      description: "Call-to-action buttons",
      of: [{ type: "link-icon" }],
      validation: (Rule) => Rule.max(2),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
    prepare({ title, subtitle }) {
      return {
        title: "Hero 28",
        subtitle: subtitle || title,
      };
    },
  },
});
