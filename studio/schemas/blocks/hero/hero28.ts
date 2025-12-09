import { defineField, defineType, defineArrayMember } from "sanity";
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
    defineField({
      name: "backgroundIcons",
      type: "array",
      title: "Background Icons",
      description: "Icons/images displayed in the background pattern rectangles",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Icon/Image",
              description: "Image or icon to display in the rectangle",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                }),
              ],
            }),
            defineField({
              name: "position",
              type: "string",
              title: "Position",
              description: "Preset position for the icon",
              options: {
                list: [
                  { title: "Top Left", value: "top-left" },
                  { title: "Top Right", value: "top-right" },
                  { title: "Middle Left", value: "middle-left" },
                  { title: "Bottom Left", value: "bottom-left" },
                  { title: "Bottom Right", value: "bottom-right" },
                ],
                layout: "radio",
              },
              initialValue: "top-left",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              media: "image",
              position: "position",
            },
            prepare({ media, position }) {
              return {
                title: `Icon - ${position || "No position"}`,
                media: media,
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(5),
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
