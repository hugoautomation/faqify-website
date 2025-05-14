import { defineField, defineType } from "sanity";
import { Newspaper } from "lucide-react";

export default defineType({
  name: "team-1",
  type: "object",
  title: "Team 1",
  description: "A list of all team members",
  icon: Newspaper,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Team 1",
      };
    },
  },
});
