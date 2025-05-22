import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { COLOR_VARIANTS } from "../blocks/shared/color-variants";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
      description:
        "The username of the testimonial. Used for gallery 10 testimonials.",
    }),
    defineField({
      name: "company",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "text",
      type: "text",
    }),
    defineField({
      name: "rating",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: COLOR_VARIANTS.map(({ title, value }) => ({ title, value })),
      },
      description: "The color of the card. Used for gallery 10 testimonials.",
    }),
    orderRankField({ type: "testimonial" }),
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "company",
    },
  },
});
