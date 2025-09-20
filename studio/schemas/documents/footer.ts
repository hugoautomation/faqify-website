import { defineField, defineType } from "sanity";
import { Menu } from "lucide-react";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: Menu,
  fields: [
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "link" }, { type: "link-group" }],
    }),
    defineField({
      name: "bottomLinks",
      title: "Bottom Links",
      type: "array",
      of: [{ type: "link" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Footer" };
    },
  },
});
