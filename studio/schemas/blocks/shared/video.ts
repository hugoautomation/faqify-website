import { defineField } from "sanity";

export default defineField({
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
});
