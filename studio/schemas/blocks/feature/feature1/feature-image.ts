import { defineField, defineType } from "sanity";
import { Image } from "lucide-react";

export default defineType({
  name: "feature-image",
  type: "object",
  icon: Image,
  description: "Column with full image or video.",
  fields: [
    defineField({
      name: "mediaType",
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
      type: "image",
      title: "Image",
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
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "video",
      type: "file",
      title: "Video",
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
          name: "autoplay",
          type: "boolean",
          title: "Auto Play",
          description: "Automatically start playing the video when loaded",
          initialValue: false,
        },
        {
          name: "loop",
          type: "boolean",
          title: "Loop",
          description: "Loop the video continuously",
          initialValue: false,
        },
        {
          name: "muted",
          type: "boolean",
          title: "Muted",
          description: "Play video without sound",
          initialValue: true,
        },
      ],
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
  ],
  preview: {
    select: {
      mediaType: "mediaType",
      imageAlt: "image.alt",
      videoAlt: "video.alt",
    },
    prepare({ mediaType, imageAlt, videoAlt }) {
      const alt = mediaType === "video" ? videoAlt : imageAlt;
      return {
        title: mediaType === "video" ? "Video" : "Image",
        subtitle: alt || "No Title",
      };
    },
  },
});
