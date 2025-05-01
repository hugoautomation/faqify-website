import { defineType, defineField } from "sanity";
import { Images } from "lucide-react";

export default defineType({
  name: "logos-9",
  type: "object",
  icon: Images,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      type: "array",
      of: [
        defineField({
          name: "testimonial",
          type: "reference",
          to: [{ type: "testimonial" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Logos 9",
        subtitle: title || "No Title",
      };
    },
  },
});
