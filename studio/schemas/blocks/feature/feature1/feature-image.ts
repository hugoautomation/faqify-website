import { defineField, defineType } from "sanity";
import { Image } from "lucide-react";
import video from "../../shared/video";

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
      ...video,
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
