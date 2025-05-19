import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { Users } from "lucide-react";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  icon: Users,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
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
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "link-icon" }],
    }),
    orderRankField({ type: "team" }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
