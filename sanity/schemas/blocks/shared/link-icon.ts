import { defineField, defineType } from "sanity";
import { ICON_VARIANTS } from "@/sanity/schemas/blocks/shared/icon-variants";

export default defineType({
  name: "link-icon",
  type: "object",
  title: "Link Icon",
  fields: [
    defineField({
      name: "iconVariant",
      type: "string",
      title: "Icon Variant",
      options: {
        list: ICON_VARIANTS.map(({ title, value }) => ({ title, value })),
      },
      initialValue: "none",
    }),
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
