import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "The description of the link. Used for navigation items.",
    }),
    defineField({
      name: "href",
      title: "href",
      type: "string",
    }),
    defineField({
      name: "target",
      type: "boolean",
      title: "Open in new tab",
    }),
    defineField({
      name: "buttonVariant",
      type: "button-variant",
      title: "Button Variant",
    }),
  ],
});
