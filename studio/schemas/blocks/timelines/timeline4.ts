import { defineType, defineField } from "sanity";
import { Images } from "lucide-react";
import { ICON_VARIANTS } from "../shared/icon-variants";
import image from "../shared/image";
import video from "../shared/video";

export default defineType({
  name: "timeline-4",
  type: "object",
  title: "Timeline 4",
  description:
    "Timeline 4: Timeline section with alternating text and image layout.",
  icon: Images,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "tag",
      type: "object",
      fields: [
        defineField({
          name: "text",
          type: "string",
        }),
        defineField({
          name: "type",
          type: "string",
          options: {
            list: ["title", "badge"],
          },
          initialValue: "title",
        }),
        defineField({
          name: "iconVariant",
          type: "string",
          title: "Icon Variant",
          options: {
            list: ICON_VARIANTS.map(({ title, value }) => ({
              title,
              value,
            })),
          },
          initialValue: "none",
          hidden: ({ parent }) => parent?.type !== "badge",
        }),
      ],
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
      name: "columns",
      type: "array",
      of: [
        {
          name: "column",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
            defineField({
              name: "iconVariant",
              type: "string",
              title: "Icon Variant",
              options: {
                list: ICON_VARIANTS.map(({ title, value }) => ({
                  title,
                  value,
                })),
              },
              initialValue: "none",
            }),
            defineField({
              name: "media",
              title: "Media",
              type: "object",
              fields: [
                defineField({
                  name: "type",
                  type: "string",
                  title: "Media Type",
                  options: {
                    list: [
                      { title: "Image", value: "image" },
                      { title: "Video", value: "video" },
                    ],
                    layout: "radio",
                  },
                  initialValue: "image",
                }),
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                    },
                  ],
                  hidden: ({ parent }) => parent?.type !== "image",
                }),
                defineField({
                  name: "video",
                  title: "Video",
                  type: "file",
                  options: {
                    accept: ".webm",
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                      description: "Description of the video for accessibility",
                    },
                    {
                      name: "showControls",
                      type: "boolean",
                      title: "Show Controls",
                      description: "Display video player controls",
                      initialValue: true,
                    },
                    {
                      name: "playbackRate",
                      type: "number",
                      title: "Playback Speed",
                      description: "Video playback speed multiplier",
                      options: {
                        list: [
                          { title: "0.5x (Slow)", value: 0.5 },
                          { title: "0.75x", value: 0.75 },
                          { title: "1x (Normal)", value: 1 },
                          { title: "1.25x", value: 1.25 },
                          { title: "1.5x", value: 1.5 },
                          { title: "2x (Fast)", value: 2 },
                        ],
                        layout: "radio",
                      },
                      initialValue: 1,
                    },
                    {
                      name: "loop",
                      type: "boolean",
                      title: "Loop Video",
                      description: "Automatically restart video when it ends",
                      initialValue: false,
                    },
                    {
                      name: "muted",
                      type: "boolean",
                      title: "Mute Video",
                      description: "Disable audio playback",
                      initialValue: false,
                    },
                  ],
                  hidden: ({ parent }) => parent?.type !== "video",
                }),
              ],
            }),
          ],
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
        title: "Timeline 4",
        subtitle: title || "No Title",
      };
    },
  },
});
