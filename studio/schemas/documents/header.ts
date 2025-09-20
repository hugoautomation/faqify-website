import { defineField, defineType } from "sanity";
import { Menu } from "lucide-react";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: Menu,
  fields: [
    defineField({
      name: "links",
      type: "array",
      of: [{ type: "link" }, { type: "link-group" }],
    }),
    defineField({
      name: "ctaLinks",
      title: "CTA Links",
      type: "array",
      of: [{ type: "link" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Header" };
    },
  },
});
