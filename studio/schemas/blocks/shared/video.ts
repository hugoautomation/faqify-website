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
  ],
});
