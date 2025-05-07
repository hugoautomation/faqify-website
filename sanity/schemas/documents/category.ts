import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { BookA } from "lucide-react";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: BookA,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: ["red", "amber", "green", "blue", "indigo", "purple", "cyan"],
      },
      description:
        "The color of the category. Used for changelog 3 categories.",
    }),
    orderRankField({ type: "category" }),
  ],
});
