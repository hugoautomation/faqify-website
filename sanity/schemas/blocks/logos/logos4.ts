import { defineType, defineField } from "sanity";
import { Images } from "lucide-react";

export default defineType({
  name: "logos-4",
  type: "object",
  icon: Images,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
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
  ],
  preview: {
    select: {
      title: "images.0.alt",
    },
    prepare({ title }) {
      return {
        title: "Logos 4",
        subtitle: title || "No Title",
      };
    },
  },
});
