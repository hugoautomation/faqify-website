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
  ],
});
